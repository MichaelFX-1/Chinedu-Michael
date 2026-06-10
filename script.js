/* =================== Data =================== */
/* Each project carries a `cover` theme + a `codeName` (used for the
   const product = build({ name: "..." }); snippet) so the card preview
   matches the template exactly. GitHub + Live links are preserved. */
const devProjects = [
  { title:"Lydia Luxury Apparel", subtitle:"Luxury fashion redefined", category:"E.COMMERCE", year:"2025",
    codeName:"lydia", cover:"amber",
    description:"A high-end fashion storefront with editorial product pages, polished interactions, and a conversion-focused checkout flow.",
    link:"https://lydiaapparel.netlify.app/", github:"https://github.com/MichaelFX-1/Lydia-Apparel",
    tags:["HTML5","CSS3","JavaScript","Responsive"] },
  { title:"POW — Portfolio Template 1", subtitle:"Proof of Work template system", category:"PORTFOLIO SYSTEM", year:"2025",
    codeName:"pow1", cover:"blue",
    description:"A production-ready portfolio template for developers, with reusable section primitives and a single-source content model.",
    link:"https://portfoliotemplate0.netlify.app/", github:"https://github.com/MichaelFX-1/Portfolio-Template-1",
    tags:["HTML5","CSS3","JavaScript"] },
  { title:"Chinedu Quiz Game", subtitle:"Interactive learning, gamified", category:"INTERACTIVE WEB APP", year:"2024",
    codeName:"quiz", cover:"blue",
    description:"A timed, scored quiz engine with category selection, animated transitions, and a results dashboard.",
    link:"https://chineduquizgame.netlify.app/", github:"https://github.com/MichaelFX-1/Quiz-Game",
    tags:["JavaScript","Web APIs","CSS Animations"] },
  { title:"Kulvix Project", subtitle:"Web development & tech services", category:"BUSINESS TEMPLATE", year:"2024",
    codeName:"kulvix", cover:"dark",
    description:"Marketing and services site for a development studio with a service catalog and contact funnel.",
    link:"https://kulvixproject.netlify.app/", github:"https://github.com/MichaelFX-1/Project",
    tags:["HTML5","CSS3","JavaScript"] },
  { title:"Personal Portfolio", subtitle:"Professional identity hub", category:"PORTFOLIO", year:"2024",
    codeName:"personal", cover:"blue",
    description:"The original portfolio site — the foundation this dashboard expands on.",
    link:"https://chinedumichael.netlify.app/", github:"https://github.com/MichaelFX-1/Chinedu-Michael-Portfolio",
    tags:["HTML5","CSS3","JavaScript"] },
  { title:"Yhudee Collection", subtitle:"Timeless elegance, luxury redefined", category:"E.COMMERCE / LUXURY", year:"2025",
    codeName:"yhudee", cover:"amber",
    description:"Boutique luxury accessories storefront with cinematic hero, product reveal animations, and minimal navigation.",
    link:"https://yhudeecollection.netlify.app/", github:"https://github.com/MichaelFX-1/Yhudee-Empire",
    tags:["HTML5","CSS3","JavaScript"] },
  { title:"Sage Arts", subtitle:"Business services & creative studio", category:"BUSINESS SERVICES", year:"2024",
    codeName:"sage", cover:"dark",
    description:"A poised art-business presence with a portfolio gallery, services overview, and booking inquiry flow.",
    link:"https://sageartcollection.netlify.app/", github:"https://github.com/MichaelFX-1/Sage-Arts",
    tags:["HTML5","CSS3","JavaScript"] },
  { title:"POW — Portfolio Template 2", subtitle:"Next-gen portfolio system", category:"PORTFOLIO SYSTEM", year:"2025",
    codeName:"pow2", cover:"blue",
    description:"An evolution of the POW template: stronger typography system, motion primitives, and content modeling.",
    link:"https://github.com/MichaelFX-1/Portfolio-Template-2", github:"https://github.com/MichaelFX-1/Portfolio-Template-2",
    tags:["HTML5","CSS3","JavaScript"] },
];

const skillCategories = [
  { icon:"💻", title:"Frontend Engineering", skills:[ ["HTML5 (Semantic, SEO-ready)",95],["CSS3 (Flexbox, Grid, Animations)",92],["JavaScript (DOM, Logic, UI Behavior)",88],["Responsive UI Development",95],["Cross-browser Compatibility",88] ] },
  { icon:"🧱", title:"Web Development Systems", skills:[ ["Mobile-first Architecture",92],["Component-based UI Structuring",88],["Landing Page Engineering",90],["Static Site Deployment",92],["Performance Optimization",85] ] },
  { icon:"🛠️", title:"Tools & Platforms", skills:[ ["Git & GitHub",92],["Netlify",95],["VS Code",95],["Figma (UI Planning)",80],["GitHub Pages",88] ] },
  { icon:"🤝", title:"Soft Skills", skills:[ ["Problem Solving",92],["Product Thinking",88],["Independent & Self-driven",95],["Rapid Learning & Prototyping",90],["Communication",88] ] },
];

const devTools = [["HTML5","🌐"],["CSS3","🎨"],["JavaScript","🟨"],["Responsive","📱"],["Flexbox","🧩"],["CSS Grid","▦"],["Animations","✨"]];
const platformTools = [["Git","📦"],["GitHub","🐙"],["VS Code","💻"],["Netlify","🚀"],["GitHub Pages","📄"],["Figma","🖌️"],["Chrome DevTools","🔧"]];

/* Orbit + bar visualization data (NEW — complements the existing tool grids) */
const ecosystem = [
  { code:"HT", name:"HTML5",      pct:96, tone:"#ef4444" },
  { code:"CS", name:"CSS3",       pct:94, tone:"#3b82f6" },
  { code:"Ja", name:"JavaScript", pct:92, tone:"#eab308" },
  { code:"Gi", name:"Git",        pct:90, tone:"#f97316" },
  { code:"Gi", name:"GitHub",     pct:92, tone:"#0f172a" },
  { code:"Ne", name:"Netlify",    pct:88, tone:"#10b981" },
  { code:"VS", name:"VS Code",    pct:95, tone:"#3b82f6" },
  { code:"Fi", name:"Figma",      pct:86, tone:"#f97316" },
];

const services = [
  { icon:"💻", title:"Frontend Development", description:"Production-ready websites built with HTML5, CSS3, and JavaScript. Clean, semantic code that performs across every device.", color:"hsl(210 70% 55% / .15)" },
  { icon:"📱", title:"Responsive Web Design", description:"Mobile-first interfaces that look and feel right on phones, tablets, and desktops — with pixel-level attention to detail.", color:"hsl(45 90% 60% / .4)" },
  { icon:"🛒", title:"E-commerce Interfaces", description:"Luxury and conversion-focused storefronts — product showcases, brand-driven layouts, and shopping flows that sell.", color:"hsl(210 30% 95%)" },
  { icon:"📄", title:"Portfolio Systems", description:"Modular, template-driven portfolio infrastructure for developers, creatives, and professionals who want to stand out.", color:"hsl(210 70% 55% / .15)" },
  { icon:"🚀", title:"Static Site Deployment", description:"End-to-end deployment workflows with Netlify and GitHub Pages — from local build to live URL in minutes.", color:"hsl(45 90% 60% / .4)" },
  { icon:"🧱", title:"Landing Page Engineering", description:"Conversion-optimized landing pages with strong visual hierarchy, clear CTAs, and fast load times.", color:"hsl(210 30% 95%)" },
];

/* Experience now uses the same project-card template (cover + code snippet)
   so the "Companies I'm working with" section visually matches the brief. */
const experience = [
  { title:"Kulvix", subtitle:"Web development & tech services", category:"COMPANY · ACTIVE", year:"2024–2026",
    codeName:"kulvix", cover:"dark",
    description:"Contributing to web development projects, client systems, and UI implementations.",
    tags:["Frontend","UI","Services"],
    link:"https://www.linkedin.com/company/kulvix/", github:"https://x.com/kulvix" },
  { title:"Deliver-Now", subtitle:"Logistics intelligence platform", category:"COMPANY · ACTIVE", year:"2025–2026",
    codeName:"deliver", cover:"blue",
    description:"Contributing to route tracking systems across Africa — building operational efficiency tooling.",
    tags:["Frontend","Logistics","Africa"],
    link:"https://www.linkedin.com/in/jospin-uwaci-38860b98", github:"https://www.linkedin.com/in/jospin-uwaci-38860b98" },
  { title:"POW (Proof of Work)", subtitle:"Portfolio infrastructure platform", category:"COMPANY · ACTIVE", year:"2025–2026",
    codeName:"pow", cover:"amber",
    description:"Supporting the portfolio template ecosystem — scalable systems for developer and creative portfolios.",
    tags:["Templates","Infrastructure"],
    link:"https://x.com/mypowapp", github:"https://x.com/mypowapp" },
  { title:"PercorsoTech", subtitle:"Tech academy & services", category:"COMPANY · ENGAGED", year:"2024–2026",
    codeName:"percorso", cover:"dark",
    description:"Engaged with structured tech education and real-world web projects.",
    tags:["Web","Education"],
    link:"https://percorsotech.com/", github:"https://www.linkedin.com/company/percorsotech/" },
];

const downloads = [
  { title:"Frontend Developer Portfolio", description:"Full portfolio document showcasing projects, deployed websites, and technical work samples.", icon:"📁", file: "/chinedu-michael-portfolio/downloads/Chinedu_Michael_Frontend_Portfolio.pdf", color:"hsl(210 70% 55% / .1)", border:"hsl(210 70% 55% / .3)" },
  { title:"Frontend Developer CV", description:"HTML, CSS, JavaScript and responsive web development experience at a glance.", icon:"💻", file:"/chinedu-michael-portfolio/downloads/Chinedu_Michael_Frontend_CV.pdf" , color:"hsl(45 90% 60% / .2)", border:"hsl(45 90% 60% / .4)" },
  { title:"General CV", description:"Complete professional background covering all skills, projects, and engagements.", icon:"📄", file:"/chinedu-michael-portfolio/downloads/Chinedu_Michael_Frontend_CV.pdf", color:"hsl(45 80% 92%)", border:"hsl(45 80% 92%)" },
  { title:"Project Highlights", description:"Curated snapshot of deployed projects with live links and GitHub repositories.", icon:"⚡", file:"downloads/Frontend_Developer_Portfolio.pdf", color:"hsl(210 70% 55% / .1)", border:"hsl(210 70% 55% / .3)" },
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
