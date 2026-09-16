<h1 align="center">Alphonso "Johan" Braga</h1>

<p align="center">
  <b>Full-stack engineer.</b> I write the interface, the service behind it and the schema under that,
  <br>in whichever language the problem actually wants.
</p>

<p align="center">
  <a href="https://johanthegoat.xyz"><img alt="Portfolio" src="https://img.shields.io/badge/johanthegoat.xyz-5b9dff?style=flat-square&labelColor=08090a&logo=vercel&logoColor=white"></a>
  <a href="https://johanthegoat.xyz"><img alt="Projects" src="https://img.shields.io/badge/57%20projects-a2a8b0?style=flat-square&labelColor=08090a&logo=github&logoColor=white"></a>
  <a href="https://johanthegoat.xyz"><img alt="Live" src="https://img.shields.io/badge/24%20running%20live-a2a8b0?style=flat-square&labelColor=08090a&logo=googlechrome&logoColor=white"></a>
  <img alt="Profile views" src="https://komarev.com/ghpvc/?username=johanthegoatt&style=flat-square&color=5b9dff&labelColor=08090a">
</p>

---

### What I build

Projects that run, not screenshots of projects. Twenty-four of them run in a browser tab and have to
hold their frame rate while they do it, driving hand and face tracking through WebGL particles or
compute shaders written in WGSL. The rest carry a real backend: schemas, migrations, HTTP APIs, a
CRDT that reconverges three offline replicas without a server deciding anything. Some are desktop
builds, some ship to Android, and one point of sale runs on a restaurant counter.

Every project states the problem, the approach and a measured result. The whole catalog builds from
one source tree into a single deployment and routes by hostname, so a case study can never link to a
stale copy of its own app.

---

### Selected work

| Project | What it is | Stack |
| :-- | :-- | :-- |
| **[Lux](https://johanthegoat.xyz/work/lux/)** | A business operating system. A business signs up, picks its type, and gets a public site, a customer record, a booking or order flow and numbers that all know about each other. | Next.js, TypeScript, PostgreSQL |
| **[Kivo](https://johanthegoat.xyz/work/kivo/)** | A life operating system: one account holding Money, School, Commute, Life and Local, with a home brief that reads all five together to say what the day asks of you. | Next.js, TypeScript, PostgreSQL |
| **[Aegis Scan](https://johanthegoat.xyz/work/aegis-scan/)** | Defensive web-security assessment. Passive scans of headers, cookies, TLS, DNS and technology hints, graded A to F with a remediation report. | Next.js, Drizzle, PostgreSQL |
| **[ONNX Digit Lab](https://johanthegoat.xyz/work/onnx-digit-lab/)** | A 26 KB neural network classifying on device. The runtime walks WebGPU, then WebGL, then WASM, and reports where it landed instead of guessing. | ONNX Runtime Web, WebGL, WASM |
| **[WebGPU Vision Lab](https://johanthegoat.xyz/work/webgpu-vision-lab/)** | Four filters written twice, once as a Canvas2D loop and once as a WGSL compute shader, on the same webcam frame. Measured 22.8x on blur, 2.1x on Sobel. | WebGPU, WGSL, WebRTC |
| **[SAT0RU](https://johanthegoat.xyz/work/sat0ru/)** | Hand-tracked technique visualiser. A classifier reads 21-point landmarks per frame and votes across a rolling window, with a geometric fallback when confidence drops. | Three.js, MediaPipe, TensorFlow.js |
| **[Local-First Sync](https://johanthegoat.xyz/work/local-first-sync/)** | A last-writer-wins CRDT with vector clocks and causal delivery, written from scratch. Property-tested across 40 randomised edit-and-gossip orders. | JavaScript, CRDT, Node |
| **[UPCAT Reviewer](https://johanthegoat.xyz/work/upcat-reviewer/)** | Adaptive study system over 1,017 questions and 28 topics that learns which topics you are weak at and schedules what to review next. | PWA, IndexedDB, Service Worker |

<p align="right"><a href="https://johanthegoat.xyz"><b>All 57 projects</b></a></p>

---

### Tech stack

**Languages**

<p>
  <img src="https://img.shields.io/badge/TypeScript-a2a8b0?style=flat-square&labelColor=08090a&logo=typescript&logoColor=3178c6">
  <img src="https://img.shields.io/badge/JavaScript-a2a8b0?style=flat-square&labelColor=08090a&logo=javascript&logoColor=f7df1e">
  <img src="https://img.shields.io/badge/Python-a2a8b0?style=flat-square&labelColor=08090a&logo=python&logoColor=3776ab">
  <img src="https://img.shields.io/badge/Rust-a2a8b0?style=flat-square&labelColor=08090a&logo=rust&logoColor=ffffff">
  <img src="https://img.shields.io/badge/Go-a2a8b0?style=flat-square&labelColor=08090a&logo=go&logoColor=00add8">
  <img src="https://img.shields.io/badge/Kotlin-a2a8b0?style=flat-square&labelColor=08090a&logo=kotlin&logoColor=7f52ff">
  <img src="https://img.shields.io/badge/Java-a2a8b0?style=flat-square&labelColor=08090a&logo=openjdk&logoColor=ffffff">
  <img src="https://img.shields.io/badge/C++-a2a8b0?style=flat-square&labelColor=08090a&logo=cplusplus&logoColor=00599c">
  <img src="https://img.shields.io/badge/SQL-a2a8b0?style=flat-square&labelColor=08090a&logo=postgresql&logoColor=4169e1">
  <img src="https://img.shields.io/badge/WGSL-a2a8b0?style=flat-square&labelColor=08090a&logo=webgpu&logoColor=005a9c">
</p>

**Front end**

<p>
  <img src="https://img.shields.io/badge/React-a2a8b0?style=flat-square&labelColor=08090a&logo=react&logoColor=61dafb">
  <img src="https://img.shields.io/badge/Next.js-a2a8b0?style=flat-square&labelColor=08090a&logo=nextdotjs&logoColor=ffffff">
  <img src="https://img.shields.io/badge/Tailwind-a2a8b0?style=flat-square&labelColor=08090a&logo=tailwindcss&logoColor=06b6d4">
  <img src="https://img.shields.io/badge/Vite-a2a8b0?style=flat-square&labelColor=08090a&logo=vite&logoColor=646cff">
  <img src="https://img.shields.io/badge/Three.js-a2a8b0?style=flat-square&labelColor=08090a&logo=threedotjs&logoColor=ffffff">
  <img src="https://img.shields.io/badge/WebGL-a2a8b0?style=flat-square&labelColor=08090a&logo=webgl&logoColor=990000">
  <img src="https://img.shields.io/badge/WebGPU-a2a8b0?style=flat-square&labelColor=08090a&logo=webgpu&logoColor=005a9c">
</p>

**Back end and data**

<p>
  <img src="https://img.shields.io/badge/Node.js-a2a8b0?style=flat-square&labelColor=08090a&logo=nodedotjs&logoColor=5fa04e">
  <img src="https://img.shields.io/badge/PostgreSQL-a2a8b0?style=flat-square&labelColor=08090a&logo=postgresql&logoColor=4169e1">
  <img src="https://img.shields.io/badge/Drizzle-a2a8b0?style=flat-square&labelColor=08090a&logo=drizzle&logoColor=c5f74f">
  <img src="https://img.shields.io/badge/SQLite-a2a8b0?style=flat-square&labelColor=08090a&logo=sqlite&logoColor=003b57">
  <img src="https://img.shields.io/badge/Redis-a2a8b0?style=flat-square&labelColor=08090a&logo=redis&logoColor=ff4438">
  <img src="https://img.shields.io/badge/Express-a2a8b0?style=flat-square&labelColor=08090a&logo=express&logoColor=ffffff">
  <img src="https://img.shields.io/badge/IndexedDB-a2a8b0?style=flat-square&labelColor=08090a&logo=googlechrome&logoColor=ffffff">
</p>

**ML and vision**

<p>
  <img src="https://img.shields.io/badge/TensorFlow.js-a2a8b0?style=flat-square&labelColor=08090a&logo=tensorflow&logoColor=ff6f00">
  <img src="https://img.shields.io/badge/ONNX%20Runtime-a2a8b0?style=flat-square&labelColor=08090a&logo=onnx&logoColor=ffffff">
  <img src="https://img.shields.io/badge/MediaPipe-a2a8b0?style=flat-square&labelColor=08090a&logo=google&logoColor=4285f4">
  <img src="https://img.shields.io/badge/OpenCV-a2a8b0?style=flat-square&labelColor=08090a&logo=opencv&logoColor=5c3ee8">
  <img src="https://img.shields.io/badge/PyTorch-a2a8b0?style=flat-square&labelColor=08090a&logo=pytorch&logoColor=ee4c2c">
</p>

**Platform and tooling**

<p>
  <img src="https://img.shields.io/badge/Vercel-a2a8b0?style=flat-square&labelColor=08090a&logo=vercel&logoColor=ffffff">
  <img src="https://img.shields.io/badge/Docker-a2a8b0?style=flat-square&labelColor=08090a&logo=docker&logoColor=2496ed">
  <img src="https://img.shields.io/badge/Git-a2a8b0?style=flat-square&labelColor=08090a&logo=git&logoColor=f05032">
  <img src="https://img.shields.io/badge/GitHub%20Actions-a2a8b0?style=flat-square&labelColor=08090a&logo=githubactions&logoColor=2088ff">
  <img src="https://img.shields.io/badge/Playwright-a2a8b0?style=flat-square&labelColor=08090a&logo=playwright&logoColor=2ead33">
  <img src="https://img.shields.io/badge/Electron-a2a8b0?style=flat-square&labelColor=08090a&logo=electron&logoColor=47848f">
  <img src="https://img.shields.io/badge/Android-a2a8b0?style=flat-square&labelColor=08090a&logo=android&logoColor=3ddc84">
  <img src="https://img.shields.io/badge/Figma-a2a8b0?style=flat-square&labelColor=08090a&logo=figma&logoColor=f24e1e">
</p>

---

### The numbers

<p align="center">
  <img height="165" alt="Commit streak" src="https://streak-stats.demolab.com?user=johanthegoatt&hide_border=true&background=08090a&ring=5b9dff&fire=5b9dff&currStreakNum=f2f3f5&sideNums=f2f3f5&currStreakLabel=5b9dff&sideLabels=a2a8b0&dates=7b828b&stroke=1d2024">
</p>

---

<!-- Coding time: uncomment once WakaTime has recorded a few days of hours.
     Needs "Display coding activity publicly" enabled at wakatime.com/settings/profile

### Coding time

<p align="center">
  <img alt="WakaTime stats" src="https://github-readme-stats.vercel.app/api/wakatime?username=johanthegoatt&layout=compact&langs_count=8&hide_border=true&bg_color=08090a&title_color=5b9dff&text_color=a2a8b0&custom_title=Where%20the%20hours%20go">
</p>

-->

<p align="center">
  <a href="https://johanthegoat.xyz"><img alt="Portfolio" src="https://img.shields.io/badge/Portfolio-5b9dff?style=flat-square&labelColor=08090a&logo=safari&logoColor=white"></a>
  <a href="mailto:alphonsobraga67@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Email-a2a8b0?style=flat-square&labelColor=08090a&logo=gmail&logoColor=ea4335"></a>
  <a href="https://github.com/johanthegoatt"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-a2a8b0?style=flat-square&labelColor=08090a&logo=github&logoColor=white"></a>
</p>
