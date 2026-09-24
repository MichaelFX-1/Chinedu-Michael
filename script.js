/* =================== Data =================== */
/* Each project carries a `cover` theme + a `codeName` (used for the
   const product = build({ name: "..." }); snippet) so the card preview
   matches the template exactly. GitHub + Live links are preserved. */
const devProjects = [

{ title:"Lydia Luxury Apparel", subtitle:"Luxury fashion redefined", category:"E.COMMERCE", year:"2026",
codeName:"lydia", cover:"amber",
description:"A high-end fashion storefront with editorial product pages, polished interactions, and a conversion-focused checkout flow.",
link:"https://lydiaapparel.netlify.app/", github:"https://github.com/MichaelFX-1/Lydia-Apparel",
tags:["HTML5","CSS3","JavaScript","Responsive UI"] },

{ title:"POW — Portfolio Template 1", subtitle:"Proof of Work template system", category:"PORTFOLIO SYSTEM", year:"2026",
codeName:"pow1", cover:"blue",
description:"A production-ready portfolio template for developers, with reusable section primitives and a single-source content model.",
link:"https://portfoliotemplate0.netlify.app/", github:"https://github.com/MichaelFX-1/Portfolio-Template-1",
tags:["HTML5","CSS3","TypeScript","Responsive UI"] },

{ title:"Chinedu Quiz Game", subtitle:"Interactive learning, gamified", category:"INTERACTIVE WEB APP", year:"2026",
codeName:"quiz", cover:"blue",
description:"A timed, scored quiz engine with category selection, animated transitions, and a results dashboard.",
link:"https://chineduquizgame.netlify.app/", github:"https://github.com/MichaelFX-1/Quiz-Game",
tags:["JavaScript","Web APIs","CSS Animations"] },

{ title:"Kulvix Project", subtitle:"Web development & tech services", category:"BUSINESS TEMPLATE", year:"2025",
codeName:"kulvix", cover:"dark",
description:"Marketing and services site for a development studio with a service catalog and contact funnel.",
link:"https://kulvixproject.netlify.app/", github:"https://github.com/MichaelFX-1/Project",
tags:["HTML5","CSS3","JavaScript","Responsive UI"] },

{ title:"Personal Portfolio", subtitle:"Professional identity hub", category:"PORTFOLIO", year:"2026",
codeName:"personal", cover:"blue",
description:"The original portfolio site — the foundation this dashboard expands on.",
link:"https://chinedumichael.netlify.app/", github:"https://github.com/MichaelFX-1/Chinedu-Michael-Portfolio",
tags:["HTML5","CSS3","JavaScript"] },

{ title:"Yhudee Collection", subtitle:"Timeless elegance, luxury redefined", category:"E.COMMERCE / LUXURY", year:"2026",
codeName:"yhudee", cover:"amber",
description:"Boutique luxury accessories storefront with cinematic hero, product reveal animations, and minimal navigation.",
link:"https://yhudeecollection.netlify.app/", github:"https://github.com/MichaelFX-1/Yhudee-Empire",
tags:["HTML5","CSS3","JavaScript"] },

{ title:"Sage Arts", subtitle:"Business services & creative studio", category:"BUSINESS SERVICES", year:"2026",
codeName:"sage", cover:"dark",
description:"A poised art-business presence with a portfolio gallery, services overview, and booking inquiry flow.",
link:"https://sageartcollection.netlify.app/", github:"https://github.com/MichaelFX-1/Sage-Arts",
tags:["HTML5","CSS3","JavaScript","Responsive UI"] },

{ title:"POW — Portfolio Template 2", subtitle:"Next-gen portfolio system", category:"PORTFOLIO SYSTEM", year:"2026",
codeName:"pow2", cover:"blue",
description:"An evolution of the POW template: stronger typography system, motion primitives, and content modeling.",
link:"https://github.com/MichaelFX-1/Portfolio-Template-2", github:"https://github.com/MichaelFX-1/Portfolio-Template-2",
tags:["HTML5","CSS3","TypeScript","Responsive UI"] },

];

const skillCategories = [
  {
    title: "Core Frontend",
    icon: "⚡",
    skills: [
      ["HTML5 (Semantic, SEO-ready)", 100],
      ["CSS3 (Responsive, Flexbox, Grid)", 100],
      ["JavaScript ES6+", 100],
      ["TypeScript", 100],
      ["React", 100],
      ["DOM APIs & Interaction", 100]
    ]
  },
  
  {
    title: "UI & Application Development",
    icon: "🎨",
    skills: [
      ["Responsive UI Development", 100],
      ["Component-Based UI", 100],
      ["Tailwind CSS", 100],
      ["CSS Grid & Flexbox", 100],
      ["Accessibility", 100],
      ["Figma / UI Implementation", 100]
    ]
  },
  
  {
  title: "Engineering & Workflow",
  icon: "🛠️",
  skills: [
    ["REST API Integration", 100],
    ["State Management", 100],
    ["Git & GitHub", 100],
    ["Chrome DevTools", 100],
    ["Frontend Debugging", 100],
    ["Frontend Testing", 100]
  ]
},

{
  title: "Deployment & Web Workflow",
  icon: "🚀",
  skills: [
    ["Netlify Deployment", 100],
    ["Cross-Browser Compatibility", 100],
    ["Performance Optimization", 100],
    ["Semantic Web Development", 100],
    ["Responsive Design", 100],
    ["Modern Development Workflow", 100]
  ]
}
];

const devTools = [
  ["HTML5", "🌐"],
  ["CSS3", "🎨"],
  ["JavaScript", "🟨"],
  ["TypeScript", "🔷"],
  ["React", "⚛️"],
  ["DOM APIs", "🌳"],
  ["Responsive UI", "📱"],
  ["Flexbox", "🧩"],
  ["CSS Grid", "▦"],
  ["Tailwind CSS", "🌬️"],
  ["REST APIs", "🔌"],
  ["Accessibility", "♿"]
];

const platformTools = [
  ["Git", "🔧"],
  ["GitHub", "🐙"],
  ["VS Code", "💻"],
  ["Chrome DevTools", "🔍"],
  ["Figma", "🎨"],
  ["Netlify", "🚀"],
  ["Frontend Testing", "🧪"],
  ["API Tools", "🔌"]
];

/* Orbit + bar visualization data (NEW — complements the existing tool grids) */
const ecosystem = [
  { code: "HT", name: "HTML5", pct: 100, tone: "#ef4444" },
  { code: "CS", name: "CSS3", pct: 100, tone: "#3b82f6" },
  { code: "JS", name: "JavaScript (ES6+)", pct: 100, tone: "#eab308" },
  { code: "TS", name: "TypeScript", pct: 100, tone: "#3178c6" },
  { code: "Rx", name: "React", pct: 100, tone: "#61dafb" },
  { code: "TW", name: "Tailwind CSS", pct: 100, tone: "#06b6d4" },
  { code: "RT", name: "Redux Toolkit", pct: 100, tone: "#764abc" },
  { code: "AP", name: "REST API Integration", pct: 100, tone: "#10b981" },
  { code: "Gi", name: "Git / GitHub", pct: 100, tone: "#f97316" },
  { code: "VD", name: "Vercel / Netlify", pct: 100, tone: "#0f172a" },
  { code: "CD", name: "Chrome DevTools", pct: 100, tone: "#4285f4" },
  { code: "Fg", name: "Figma", pct: 100, tone: "#f24e1e" }
];

const services = [
  {
    icon: "💻",
    title: "Frontend Development",
    description: "Build responsive, accessible, and production-ready websites and web applications using HTML5, CSS3, JavaScript, TypeScript, React, and modern frontend development practices.",
    color: "hsl(210 70% 55% / .15)"
  },
  
  {
    icon: "📱",
    title: "Responsive Web Development",
    description: "Develop mobile-first interfaces that provide consistent, usable experiences across phones, tablets, and desktops with responsive layouts, Flexbox, CSS Grid, and cross-browser compatibility.",
    color: "hsl(45 90% 60% / .4)"
  },
  
  {
    icon: "🛒",
    title: "E-commerce Interfaces",
    description: "Create professional product and storefront experiences that make product discovery, navigation, and customer interaction clear, intuitive, and effective across devices.",
    color: "hsl(210 30% 95%)"
  },
  
  {
    icon: "🌐",
    title: "Business Websites",
    description: "Build professional websites that translate business requirements into clear digital experiences, helping companies communicate their value, showcase services, and connect with customers.",
    color: "hsl(210 70% 55% / .15)"
  },
  
  {
    icon: "🔌",
    title: "API & Frontend Integration",
    description: "Connect frontend interfaces with REST APIs and external services to create dynamic web experiences, handle application data, and support real-world product requirements.",
    color: "hsl(45 90% 60% / .4)"
  },
  
  {
    icon: "🧱",
    title: "UI Implementation & Optimization",
    description: "Turn Figma designs, product requirements, and existing interfaces into responsive frontend experiences while improving usability, accessibility, consistency, debugging, and performance.",
    color: "hsl(210 30% 95%)"
  }
];

/* Experience now uses the same project-card template (cover + code snippet)
   so the "Companies I'm working with" section visually matches the brief. */
const experience = [
  {
    title: "Kulvix",
    subtitle: "Frontend Developer & Instructor (Intern)",
    category: "COMPANY · ACTIVE",
    year: "Jan 2026–Present",
    codeName: "kulvix",
    cover: "dark",
    description: "Contributing to frontend development projects, client systems, UI implementations, and practical technology education.",
    tags: ["Frontend", "UI", "Development"],
    link: "https://www.linkedin.com/company/kulvix/",
    github: "https://x.com/kulvix"
  },
  
  {
    title: "Deliver-Now",
    subtitle: "Frontend Developer / Web Developer",
    category: "PROJECT · COMPLETED",
    year: "May 2026",
    codeName: "deliver",
    cover: "blue",
    description: "Contributing to frontend web development for a logistics-focused platform, building responsive interfaces and user-focused operational experiences.",
    tags: ["Frontend", "Logistics", "Web Development"],
    link: "https://www.linkedin.com/in/jospin-uwaci-38860b98",
    github: "https://www.linkedin.com/in/jospin-uwaci-38860b98"
  },
  
  {
    title: "POW (Proof of Work)",
    subtitle: "Frontend Developer / Web Developer",
    category: "PROJECT · COMPLETED",
    year: "Mar 2026",
    codeName: "pow",
    cover: "amber",
    description: "Contributing to frontend development and portfolio infrastructure, focusing on responsive interfaces, reusable UI structures, and polished portfolio experiences.",
    tags: ["Frontend", "Portfolio", "UI"],
    link: "https://x.com/mypowapp",
    github: "https://x.com/mypowapp"
  },
  
  {
    title: "PercorsoTech",
    subtitle: "Frontend Development Intern / Learner",
    category: "TRAINING · COMPLETED",
    year: "Sep 2025–Nov 2025",
    codeName: "percorso",
    cover: "dark",
    description: "Engaged in structured frontend development learning, practical web projects, and real-world technology workflows.",
    tags: ["Frontend", "Web", "Education"],
    link: "https://percorsotech.com/",
    github: "https://www.linkedin.com/company/percorsotech/"
  }
];

const downloads = [
  { title:"Frontend Developer Portfolio", description:"Full portfolio document showcasing projects, deployed websites, and technical work samples.", icon:"📁", file:"/chinedu-michael-portfolio/downloads/Chinedu Michael Portfolio.pdf", color:"hsl(210 70% 55% / .1)", border:"hsl(210 70% 55% / .3)" },
  { title:"Frontend Developer CV", description:"HTML, CSS, JavaScript and responsive web development experience at a glance.", icon:"💻", file:"/chinedu-michael-portfolio/downloads/Chinedu Michael C.V (1).pdf" , color:"hsl(45 90% 60% / .2)", border:"hsl(45 90% 60% / .4)" },
  { title:"General CV", description:"Complete professional background covering all skills, projects, and engagements.", icon:"📄", file:"/chinedu-michael-portfolio/downloads/Chinedu Michael C.V (1).pdf", color:"hsl(45 80% 92%)", border:"hsl(45 80% 92%)" },
  { title:"Project Highlights", description:"Curated snapshot of deployed projects with live links and GitHub repositories.", icon:"⚡", file:"/chinedu-michael-portfolio/downloads/Chinedu Michael Portfolio.pdf", color:"hsl(210 70% 55% / .1)", border:"hsl(210 70% 55% / .3)" },
];

const strengths = [
  { name:"Clean & Efficient Code", role:"Semantic HTML, modular CSS, and readable JavaScript built to scale.", avatar:"🧹" },
  { name:"Responsive UI Expertise", role:"Mobile-first layouts that feel right on every screen size and orientation.", avatar:"📱" },
  { name:"Strong Project Execution", role:"From concept to deployed URL — I ship complete, working products.", avatar:"🚀" },
  { name:"User-Centered Design Approach", role:"Interfaces designed around real user needs, clarity, and conversion.", avatar:"🎯" },
];

/* =================== Renderers =================== */
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* New "browser window" cover used by both projects and experience cards.
   Matches the template: traffic-light dots, code snippet, big title + subtitle. */
function coverBlock(p) {
  return `<div class="pc-cover pc-cover--${p.cover}">
    <div class="pc-dots"><span></span><span></span><span></span></div>
    <pre class="pc-code"><code>const product = build({
  name: "${esc(p.codeName)}",
  ship: true,
});</code></pre>
    <div class="pc-cover-title">
      <span class="pc-cover-cat">${esc(p.category)}</span>
      <h3 class="pc-cover-h">${esc(p.title)}</h3>
      <p class="pc-cover-sub">${esc(p.subtitle)}</p>
    </div>
  </div>`;
}

function projCard(p, opts = {}) {
  const featured = opts.featured ? " proj-card--featured" : "";
  return `<article class="floating-card proj-card proj-card--template${featured}">
    ${coverBlock(p)}
    <div class="pc-body">
      <div class="pc-meta-row">
        <div class="pc-meta">${esc(p.year)} · ${esc(p.category)}</div>
        <a href="${p.link}" target="_blank" rel="noopener" class="pc-arrow" aria-label="Open live site for ${esc(p.title)}">↗</a>
      </div>
      <h4 class="pc-title">${esc(p.title)}</h4>
      <p class="pc-desc">${esc(p.description)}</p>
      <div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
      <div class="proj-links">
        <a href="${p.github}" target="_blank" rel="noopener" class="link-accent">⌥ GitHub</a>
        <a href="${p.link}" target="_blank" rel="noopener" class="link-accent">🌐 Live Site ↗</a>
      </div>
    </div>
  </article>`;
}

function skillCatCard(c) {
  return `<div class="floating-card skill-cat">
    <div class="skill-head"><div class="ico">${c.icon}</div><h3>${esc(c.title)}</h3></div>
    ${c.skills.map(([n,l])=>`<div class="skill-row" style="--w:${l}%"><div class="top"><span>${esc(n)}</span><span>${l}%</span></div><div class="bar"><div class="fill"></div></div></div>`).join("")}
  </div>`;
}
function svcCard(s) {
  return `<div class="floating-card svc-card">
    <div class="svc-ico" style="background:${s.color}">${s.icon}</div>
    <h3>${esc(s.title)}</h3>
    <p class="muted" style="font-size:.9rem">${esc(s.description)}</p>
  </div>`;
}
function dlCard(d) {
  return `<a class="floating-card dl-card" href="${d.file}" download style="background:${d.color};border-color:${d.border}">
    <div class="dl-ico">${d.icon}</div>
    <h3>${esc(d.title)}</h3>
    <p class="muted" style="font-size:.9rem">${esc(d.description)}</p>
    <div class="dl-meta">⬇ Download PDF</div>
  </a>`;
}
function sCard(t) {
  return `<div class="floating-card t-card">
    <div class="t-quote">★</div>
    <div class="t-author"><div class="t-avatar">${t.avatar}</div><div><div class="t-name">${esc(t.name)}</div><div class="t-role">${esc(t.role)}</div></div></div>
  </div>`;
}

document.getElementById("devProjects").innerHTML = devProjects.map((p, i) => projCard(p, { featured: i === 0 })).join("");
document.getElementById("skillsGrid").innerHTML = skillCategories.map(skillCatCard).join("");
document.getElementById("devTools").innerHTML = devTools.map(([n,i])=>`<div class="tool"><span>${i}</span><span>${esc(n)}</span></div>`).join("");
document.getElementById("platformTools").innerHTML = platformTools.map(([n,i])=>`<div class="tool"><span>${i}</span><span>${esc(n)}</span></div>`).join("");
document.getElementById("servicesGrid").innerHTML = services.map(svcCard).join("");
document.getElementById("experienceGrid").innerHTML = experience.map(projCard).join("");
document.getElementById("downloadsGrid").innerHTML = downloads.map(dlCard).join("");
document.getElementById("strengthsGrid").innerHTML = strengths.map(sCard).join("");

/* Orbit + bars (NEW — does NOT replace existing tool grids) */
(function buildEcosystem(){
  const orbit = document.getElementById("orbitRing");
  const bars  = document.getElementById("ecoBars");
  if (!orbit || !bars) return;
  const n = ecosystem.length;
  orbit.innerHTML = ecosystem.map((t, i) => {
    const angle = (i / n) * 360;
    return `<div class="orb-node" style="--a:${angle}deg;--tone:${t.tone}">
      <span>${esc(t.name)}</span>
    </div>`;
  }).join("");
  bars.innerHTML = ecosystem.map(t => `
    <div class="eco-row">
      <div class="eco-head">
        <span class="eco-code" style="background:${t.tone}1f;color:${t.tone}">${esc(t.code)}</span>
        <span class="eco-name">${esc(t.name)}</span>
        <span class="eco-pct">${t.pct}%</span>
      </div>
      <div class="eco-bar"><div class="eco-fill" style="--w:${t.pct}%;background:${t.tone}"></div></div>
    </div>`).join("");
})();

/* =================== Behavior =================== */
const root = document.documentElement;
const stored = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", stored);
document.getElementById("themeToggle").textContent = stored === "dark" ? "☀️" : "🌙";
document.getElementById("themeToggle").addEventListener("click", () => {
  const cur = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", cur);
  localStorage.setItem("theme", cur);
  document.getElementById("themeToggle").textContent = cur === "dark" ? "☀️" : "🌙";
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});
document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => {
  document.getElementById("navLinks").classList.remove("open");
}));

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); } });
}, { threshold: .15 });
document.querySelectorAll(".reveal, .skill-row, .floating-card, .stat, .tool, .eco-row").forEach(el => {
  if (!el.classList.contains("reveal")) el.classList.add("reveal");
  io.observe(el);
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = encodeURIComponent(`Project Inquiry: ${f.get("project")}`);
  const body = encodeURIComponent(`Hi Chinedu,\n\nMy name is ${f.get("name")}.\n\n${f.get("message")}\n\nBest regards,\n${f.get("name")}`);
  window.location.href = `mailto:chinedumichael.dev@gmail.com?subject=${subject}&body=${body}`;
});
