import test from"node:test";import assert from"node:assert/strict";import{simulate}from"../public/balancer.js";
test("round robin distributes a divisible workload evenly",()=>{const r=simulate({servers:[{name:"a"},{name:"b"},{name:"c"}],requests: nine(),strategy:"round-robin"});assert.deepEqual(r.servers.map(s=>s.assigned),[3,3,3]);});
function nine(){return 9;}
test("weighted strategy follows configured weights",()=>{const r=simulate({servers:[{name:"a",weight:2},{name:"b",weight:1}],requests:9,strategy:"weighted"});assert.deepEqual(r.servers.map(s=>s.assigned),[6,3]);});
test("validates duplicate server names",()=>{assert.throws(()=>simulate({servers:[{name:"a"},{name:"a"}]}),/unique/);});
