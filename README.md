<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:09151e,100:c026d3&height=170&section=header&text=Load%20Balancer%20Lab&fontColor=fdf4ff&fontSize=42" width="100%" alt="Load Balancer Lab banner"/>
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=900&color=F0ABFC&center=true&vCenter=true&width=620&lines=Compare+request+routing+strategies;Explore+load+distribution+locally" alt="Animated tagline"/>
<p><strong>A deterministic simulator for common load-balancing strategies.</strong></p>
<img src="https://img.shields.io/github/license/CyberLoop-dev/load-balancer-lab?style=flat-square" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/load-balancer-lab?style=flat-square" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/load-balancer-lab?style=flat-square" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/load-balancer-lab?style=flat-square" alt="Last commit"/>
<br/><img src="./assets/mark.svg" width="90%" alt="Balancer distributing requests to servers"/>
</div>

## 🧭 Overview
Load Balancer Lab simulates how synthetic requests are assigned to a small server pool. Compare round robin, weighted round robin, and least-connections using repeatable arrival and service-time values.

## ✨ Features
- 🔁 Compare three request-routing strategies.
- ⚖️ Configure server weights and simulated latency.
- 📊 View assignment counts as proportional bars.
- 🧾 Inspect individual synthetic request assignments.
- 🔒 Generate no real network traffic.

## 🎬 Demo
Start the app; a three-server configuration and a sample workload are ready. Switch strategies and run the same request count to compare distribution.

## 🚀 Quick Start
Requires Node.js 20 or newer.

```bash
npm start
```

Open http://127.0.0.1:4180. Run checks with npm test.

## 🧰 Tech Stack
- 🟢 Node.js built-in HTTP server
- 🌐 Browser JavaScript and CSS
- 🧪 Node.js built-in test runner

## 🗂️ Folder Structure
```text
public/       Routing simulator and interface
test/         Strategy and validation tests
assets/       Original SVG artwork
.github/      CI workflow
server.js     Dependency-free static server
```

## 🛣️ Roadmap
- [ ] Add random but seeded arrival patterns.
- [ ] Visualize server queue lengths over time.
- [ ] Compare failover behavior when a node is unavailable.

## 🤝 Contributing
Contributions are welcome. Keep simulations deterministic in tests and label synthetic time values clearly.

## 📄 License
MIT. See LICENSE.

<div align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:c026d3,100:09151e&height=100&section=footer" width="100%" alt="Animated wave footer"/></div>
