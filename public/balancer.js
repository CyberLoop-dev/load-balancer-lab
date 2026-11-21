export function simulate({servers,requests=30,strategy="round-robin"}){
  if(!Array.isArray(servers)||servers.length<1)throw new Error("Provide at least one server.");
  const normalized=servers.map((s,i)=>({name:String(s.name??"").trim(),weight:Number(s.weight??1),latency:Number(s.latency??1),index:i}));
  if(normalized.some(s=>!s.name||!Number.isInteger(s.weight)||s.weight<1||s.weight>20||!Number.isFinite(s.latency)||s.latency<=0))throw new Error("Each server needs a name, weight 1–20, and positive latency.");
  if(new Set(normalized.map(s=>s.name)).size!==normalized.length)throw new Error("Server names must be unique.");
  if(!Number.isInteger(requests)||requests<1||requests>1000)throw new Error("Requests must be between 1 and 1000.");
  if(!["round-robin","weighted","least-connections"].includes(strategy))throw new Error("Unknown balancing strategy.");
  const weighted=normalized.flatMap(s=>Array(s.weight).fill(s));const active=[];const assignments=[];let pointer=0;
  for(let i=0;i<requests;i++){
    const now=i*0.2;
    for(let j=active.length-1;j>=0;j--)if(active[j].finish<=now)active.splice(j,1);
    let chosen;
    if(strategy==="round-robin"){chosen=normalized[pointer%normalized.length];pointer++;}
    else if(strategy==="weighted"){chosen=weighted[pointer%weighted.length];pointer++;}
    else {const counts=normalized.map(s=>active.filter(job=>job.name===s.name).length);chosen=normalized.reduce((best,s)=>counts[s.index]<counts[best.index]?s:best,normalized[0]);}
    const duration=chosen.latency+(i%3)*0.15;active.push({name:chosen.name,finish:now+duration});
    assignments.push({request:i+1,server:chosen.name,arrival:now,duration,active:active.filter(job=>job.name===chosen.name).length});
  }
  const counts=Object.fromEntries(normalized.map(s=>[s.name,assignments.filter(a=>a.server===s.name).length]));
  return {strategy,requests,servers:normalized.map(s=>({name:s.name,weight:s.weight,latency:s.latency,assigned:counts[s.name]})),assignments};
}
