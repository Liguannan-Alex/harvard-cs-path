import { communities, courses, faqs, methods, paths, tiers, verification } from "./data.js";

const root = document.querySelector("#root");
const courseById = new Map(courses.map((course) => [course.id, course]));
const tierById = new Map(tiers.map((tier) => [tier.id, tier]));

const state = {
  lang: localStorage.getItem("hcsp.lang") || "zh",
  theme: localStorage.getItem("hcsp.theme") || "light",
  courseFilter: "all",
  completed: new Set(JSON.parse(localStorage.getItem("hcsp.completed") || "[]"))
};

const copy = {
  nav: {
    home: { zh: "首页", en: "Home" },
    paths: { zh: "学习路径", en: "Paths" },
    courses: { zh: "课程库", en: "Courses" },
    method: { zh: "学习方法", en: "How to Learn" },
    community: { zh: "社区资源", en: "Community" },
    verification: { zh: "核验记录", en: "Verification" },
    faq: { zh: "常见问题", en: "FAQ" }
  },
  actions: {
    pickPath: { zh: "选择我的学习路径", en: "Pick my path" },
    browseCourses: { zh: "浏览全部课程", en: "Browse courses" },
    back: { zh: "返回", en: "Back" },
    markDone: { zh: "标记完成", en: "Mark complete" },
    done: { zh: "已完成", en: "Completed" },
    viewPath: { zh: "查看路径", en: "View path" },
    viewCourse: { zh: "查看课程", en: "View course" },
    open: { zh: "打开", en: "Open" }
  },
  labels: {
    verified: { zh: "已核验", en: "Verified" },
    corrected: { zh: "已修正", en: "Corrected" },
    partial: { zh: "部分核验", en: "Partial" },
    source: { zh: "来源", en: "Source" },
    cost: { zh: "费用", en: "Cost" },
    certificate: { zh: "证书", en: "Certificate" },
    term: { zh: "年份 / 学期", en: "Term / Year" },
    prerequisites: { zh: "前置", en: "Prerequisites" },
    resources: { zh: "学习资源", en: "Resources" },
    route: { zh: "建议顺序", en: "Recommended sequence" }
  }
};

function t(value) {
  if (typeof value === "string") return value;
  return value?.[state.lang] || value?.zh || value?.en || "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function route() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  if (!hash) return ["home"];
  return hash.split("/").filter(Boolean);
}

function href(path) {
  return `#/${path}`;
}

function savePreferences() {
  localStorage.setItem("hcsp.lang", state.lang);
  localStorage.setItem("hcsp.theme", state.theme);
  localStorage.setItem("hcsp.completed", JSON.stringify([...state.completed]));
}

function setDocumentState() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.theme = state.theme;
}

function layout(content) {
  const [section, id] = route();
  const isActive = (name, itemId) => {
    if (itemId) return section === name && id === itemId;
    return section === name || (name === "home" && section === "home");
  };

  root.innerHTML = `
    <header class="site-header">
      <a class="brand" href="${href("")}" aria-label="Harvard CS Path">
        <span class="brand-mark">HB</span>
        <span>${state.lang === "zh" ? "哈佛 CS 学习路径" : "Harvard CS Path"}</span>
      </a>
      <nav class="nav" aria-label="Primary">
        <a class="${isActive("home") ? "active" : ""}" href="${href("")}">${t(copy.nav.home)}</a>
        <a class="${isActive("paths") ? "active" : ""}" href="${href("paths")}">${t(copy.nav.paths)}</a>
        <a class="${isActive("courses") ? "active" : ""}" href="${href("courses")}">${t(copy.nav.courses)}</a>
        <a class="${isActive("method") ? "active" : ""}" href="${href("method")}">${t(copy.nav.method)}</a>
        <a class="${isActive("community") ? "active" : ""}" href="${href("community")}">${t(copy.nav.community)}</a>
        <a class="${isActive("verification") ? "active" : ""}" href="${href("verification")}">${t(copy.nav.verification)}</a>
        <a class="${isActive("faq") ? "active" : ""}" href="${href("faq")}">${t(copy.nav.faq)}</a>
      </nav>
      <div class="header-actions">
        <button class="icon-button text-button" data-action="toggle-lang" aria-label="Switch language">
          ${state.lang === "zh" ? "EN" : "中"}
        </button>
        <button class="icon-button" data-action="toggle-theme" aria-label="Toggle theme">
          ${state.theme === "dark" ? "☼" : "☾"}
        </button>
      </div>
    </header>
    <main>${content}</main>
    <footer class="footer">
      <div class="brand small"><span class="brand-mark">HB</span><span>Harvard CS Path</span></div>
      <p>${state.lang === "zh"
        ? "课程信息基于 Harvard / CS50 公开资料整理；每条课程数据带有核验来源。"
        : "Course information is compiled from Harvard / CS50 public sources; every course carries verification sources."}</p>
      <a href="${href("verification")}">${t(copy.nav.verification)}</a>
    </footer>
  `;
}

function hero() {
  return `
    <section class="hero page-shell">
      <div class="eyebrow">${state.lang === "zh" ? "为零基础朋友设计 · 已按 2026 资料核验" : "For beginners · verified against 2026 sources"}</div>
      <h1>${state.lang === "zh" ? "把哈佛 CS 完整搬回家" : "Bring all of Harvard CS home"}</h1>
      <p>${state.lang === "zh"
        ? "基于哈佛 CS 培养方案、CS50 OpenCourseWare 和公开课程目录整理，不只列资源，也标明年份、证书和费用边界。"
        : "A self-study path based on Harvard CS requirements, CS50 OpenCourseWare, and public course catalogs, with terms, certificates, and cost boundaries marked."}</p>
      <div class="hero-actions">
        <a class="button primary" href="${href("paths")}">${t(copy.actions.pickPath)} <span aria-hidden="true">→</span></a>
        <a class="button secondary" href="${href("courses")}">${t(copy.actions.browseCourses)}</a>
      </div>
      <div class="stats">
        <div><strong>${courses.length}</strong><span>${state.lang === "zh" ? "门核验课程" : "verified courses"}</span></div>
        <div><strong>${paths.length}</strong><span>${state.lang === "zh" ? "条学习路径" : "paths"}</span></div>
        <div><strong>${verification.verifiedAt}</strong><span>${state.lang === "zh" ? "最近核验" : "verified at"}</span></div>
        <div><strong>${verification.corrections.length}</strong><span>${state.lang === "zh" ? "处关键修正" : "major corrections"}</span></div>
      </div>
    </section>
  `;
}

function homePage() {
  return `
    ${hero()}
    <section class="page-shell section">
      <div class="section-heading">
        <h2>${state.lang === "zh" ? "选择适合你的学习路径" : "Choose a learning path"}</h2>
        <p>${state.lang === "zh" ? "每条路径都围绕一个目标排序，而不是让你淹没在课程列表里。" : "Each path is ordered around one goal so you do not drown in a course list."}</p>
      </div>
      <div class="path-grid">
        ${paths.map(pathCard).join("")}
      </div>
    </section>
    <section class="page-shell section split-section">
      <div>
        <h2>${state.lang === "zh" ? "核验后最重要的修正" : "Important verification corrections"}</h2>
        <p>${state.lang === "zh" ? "这些不是文案润色，而是会影响学习路线可信度的课程编号和费用边界。" : "These are not copy edits; they affect the trustworthiness of the route."}</p>
      </div>
      <div class="correction-list">
        ${verification.corrections.slice(0, 4).map(correctionCard).join("")}
      </div>
    </section>
  `;
}

function pathCard(path) {
  const totalCourses = new Set(path.stages.flatMap((stage) => stage.courseIds)).size;
  return `
    <a class="card path-card" href="${href(`paths/${path.id}`)}">
      <span class="card-kicker">${t(path.duration)}</span>
      <h3>${t(path.title)}</h3>
      <p>${t(path.subtitle)}</p>
      <div class="card-meta">${path.stages.length} ${state.lang === "zh" ? "阶段" : "stages"} · ${totalCourses} ${state.lang === "zh" ? "门课" : "courses"}</div>
      <span class="link-line">${t(copy.actions.viewPath)} →</span>
    </a>
  `;
}

function courseCard(course) {
  const status = course.verificationStatus === "corrected" ? t(copy.labels.corrected) : t(copy.labels.verified);
  const tier = t(tierById.get(course.tier)?.label);
  const done = state.completed.has(course.id);
  return `
    <a class="card course-card ${done ? "completed" : ""}" href="${href(`courses/${course.id}`)}">
      <div class="course-top">
        <span class="code">${escapeHtml(course.code)}</span>
        <span class="pill">${escapeHtml(tier)}</span>
      </div>
      <h3>${t(course.title)}</h3>
      <p>${t(course.subtitle)}</p>
      <div class="card-meta">${escapeHtml(course.duration)} · ${escapeHtml(course.workload)} · ${escapeHtml(course.language)}</div>
      <div class="verify-row"><span class="dot ${course.verificationStatus}"></span>${escapeHtml(status)} · ${escapeHtml(course.currentTerm)}</div>
    </a>
  `;
}

function coursesPage() {
  const visibleCourses = state.courseFilter === "all"
    ? courses
    : courses.filter((course) => course.tier === state.courseFilter);

  return `
    <section class="page-shell page-title">
      <h1>${state.lang === "zh" ? "课程库" : "Course Library"}</h1>
      <p>${state.lang === "zh"
        ? "每门课都标明当前核验状态、公开入口、证书和费用边界。"
        : "Each course shows its verification state, public entry points, certificate status, and cost boundary."}</p>
      <div class="filters" role="list">
        <button class="${state.courseFilter === "all" ? "active" : ""}" data-filter="all">${state.lang === "zh" ? "全部" : "All"} ${courses.length}</button>
        ${tiers.map((tier) => {
          const count = courses.filter((course) => course.tier === tier.id).length;
          return `<button class="${state.courseFilter === tier.id ? "active" : ""}" data-filter="${tier.id}">${t(tier.label)} ${count}</button>`;
        }).join("")}
      </div>
    </section>
    <section class="page-shell course-grid">
      ${visibleCourses.map(courseCard).join("")}
    </section>
  `;
}

function coursePage(id) {
  const course = courseById.get(id);
  if (!course) return notFoundPage();
  const done = state.completed.has(course.id);

  return `
    <section class="page-shell detail-page">
      <a class="back-link" href="${href("courses")}">← ${t(copy.actions.back)}</a>
      <div class="detail-hero">
        <div>
          <span class="eyebrow">${escapeHtml(course.code)} · ${escapeHtml(t(tierById.get(course.tier)?.label))}</span>
          <h1>${t(course.title)}</h1>
          <p>${t(course.description)}</p>
        </div>
        <button class="button ${done ? "secondary" : "primary"}" data-action="toggle-complete" data-course="${course.id}">
          ${done ? t(copy.actions.done) : t(copy.actions.markDone)}
        </button>
      </div>

      <div class="detail-grid">
        <section class="panel">
          <h2>${state.lang === "zh" ? "课程事实" : "Course facts"}</h2>
          <dl class="facts">
            ${fact(copy.labels.term, course.currentTerm)}
            ${fact(copy.labels.prerequisites, t(course.prerequisites))}
            ${fact(copy.labels.cost, t(course.cost))}
            ${fact(copy.labels.certificate, t(course.certificate))}
          </dl>
        </section>
        <section class="panel verification-panel">
          <h2>${state.lang === "zh" ? "核验状态" : "Verification"}</h2>
          <div class="status-badge"><span class="dot ${course.verificationStatus}"></span>${course.verificationStatus === "corrected" ? t(copy.labels.corrected) : t(copy.labels.verified)}</div>
          <p>${state.lang === "zh" ? "最近核验日期：" : "Last verified: "}${verification.verifiedAt}</p>
          <div class="tag-row">
            ${course.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
          </div>
        </section>
      </div>

      <section class="panel">
        <h2>${t(copy.labels.resources)}</h2>
        <div class="resource-grid">
          ${course.resources.map(resourceLink).join("")}
        </div>
      </section>

      <section class="panel">
        <h2>${state.lang === "zh" ? "核验来源" : "Verification sources"}</h2>
        <ul class="source-list">
          ${course.sources.map((url) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(url)}</a></li>`).join("")}
        </ul>
      </section>
    </section>
  `;
}

function fact(label, value) {
  return `<div><dt>${t(label)}</dt><dd>${escapeHtml(value)}</dd></div>`;
}

function resourceLink(resource) {
  return `
    <a class="resource-card" href="${escapeHtml(resource.url)}" target="_blank" rel="noreferrer">
      <span>${escapeHtml(resource.type)}</span>
      <strong>${escapeHtml(resource.label)}</strong>
    </a>
  `;
}

function pathsPage() {
  return `
    <section class="page-shell page-title">
      <h1>${t(copy.nav.paths)}</h1>
      <p>${state.lang === "zh"
        ? "这些路径按自学目标重排课程，不等同于 Harvard 官方学位计划。"
        : "These paths reorder courses for self-study goals; they are not official Harvard degree plans."}</p>
    </section>
    <section class="page-shell path-list">
      ${paths.map(pathCard).join("")}
    </section>
  `;
}

function pathPage(id) {
  const path = paths.find((item) => item.id === id);
  if (!path) return notFoundPage();

  return `
    <section class="page-shell detail-page">
      <a class="back-link" href="${href("paths")}">← ${t(copy.actions.back)}</a>
      <div class="detail-hero">
        <div>
          <span class="eyebrow">${t(path.duration)}</span>
          <h1>${t(path.title)}</h1>
          <p>${t(path.audience)}</p>
        </div>
      </div>
      <div class="timeline">
        ${path.stages.map((stage, index) => `
          <section class="timeline-item">
            <div class="timeline-marker">${index + 1}</div>
            <div class="panel">
              <h2>${t(stage.title)}</h2>
              <p>${t(stage.note)}</p>
              <div class="mini-course-list">
                ${stage.courseIds.map((courseId) => {
                  const course = courseById.get(courseId);
                  return `<a href="${href(`courses/${course.id}`)}"><span>${escapeHtml(course.code)}</span>${t(course.title)}</a>`;
                }).join("")}
              </div>
            </div>
          </section>
        `).join("")}
      </div>
    </section>
  `;
}

function methodPage() {
  return `
    <section class="page-shell page-title">
      <h1>${t(copy.nav.method)}</h1>
      <p>${state.lang === "zh" ? "AI 时代仍然要自己动手，AI 负责加速反馈，不负责替你学会。" : "In the AI era, you still need to build. AI should accelerate feedback, not replace learning."}</p>
    </section>
    <section class="page-shell method-grid">
      ${methods.map((method) => `
        <article class="card">
          <h3>${t(method.title)}</h3>
          <p>${t(method.body)}</p>
        </article>
      `).join("")}
    </section>
  `;
}

function communityPage() {
  return `
    <section class="page-shell page-title">
      <h1>${t(copy.nav.community)}</h1>
      <p>${state.lang === "zh" ? "优先使用官方入口和高信噪比社区，遇到旧链接时回到核验来源。" : "Prefer official entry points and high-signal communities; when links drift, return to verification sources."}</p>
    </section>
    <section class="page-shell resource-sections">
      ${communities.map((group) => `
        <section>
          <h2>${t(group.group)}</h2>
          <div class="resource-grid">
            ${group.items.map((item) => `
              <a class="resource-card" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">
                <strong>${escapeHtml(item.name)}</strong>
                <p>${t(item.desc)}</p>
              </a>
            `).join("")}
          </div>
        </section>
      `).join("")}
    </section>
  `;
}

function verificationPage() {
  return `
    <section class="page-shell page-title">
      <h1>${t(copy.nav.verification)}</h1>
      <p>${state.lang === "zh"
        ? `最近核验：${verification.verifiedAt}。这里记录课程编号、年份、证书和费用边界的依据。`
        : `Last verified: ${verification.verifiedAt}. This records evidence for course numbers, terms, certificates, and cost boundaries.`}</p>
    </section>
    <section class="page-shell section split-section">
      <div>
        <h2>${state.lang === "zh" ? "关键修正" : "Key corrections"}</h2>
      </div>
      <div class="correction-list">
        ${verification.corrections.map(correctionCard).join("")}
      </div>
    </section>
    <section class="page-shell panel">
      <h2>${state.lang === "zh" ? "总来源" : "Primary sources"}</h2>
      <div class="source-cards">
        ${verification.sources.map((source) => `
          <a class="resource-card" href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">
            <strong>${escapeHtml(source.label)}</strong>
            <p>${escapeHtml(source.note)}</p>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function correctionCard(correction) {
  return `
    <article class="correction-card">
      <div><span>${state.lang === "zh" ? "原型" : "Before"}</span><strong>${escapeHtml(correction.before)}</strong></div>
      <div><span>${state.lang === "zh" ? "修正" : "After"}</span><strong>${escapeHtml(correction.after)}</strong></div>
      <p>${escapeHtml(correction.reason)}</p>
    </article>
  `;
}

function faqPage() {
  return `
    <section class="page-shell page-title">
      <h1>${t(copy.nav.faq)}</h1>
    </section>
    <section class="page-shell faq-list">
      ${faqs.map((faq, index) => `
        <details class="panel" ${index === 0 ? "open" : ""}>
          <summary>${t(faq.q)}</summary>
          <p>${t(faq.a)}</p>
        </details>
      `).join("")}
    </section>
  `;
}

function notFoundPage() {
  return `
    <section class="page-shell page-title">
      <h1>404</h1>
      <p>${state.lang === "zh" ? "没有找到这个页面。" : "Page not found."}</p>
      <a class="button primary" href="${href("")}">${t(copy.nav.home)}</a>
    </section>
  `;
}

function render() {
  setDocumentState();
  const [section, id] = route();
  let page;

  if (section === "home") page = homePage();
  else if (section === "courses" && id) page = coursePage(id);
  else if (section === "courses") page = coursesPage();
  else if (section === "paths" && id) page = pathPage(id);
  else if (section === "paths") page = pathsPage();
  else if (section === "method") page = methodPage();
  else if (section === "community") page = communityPage();
  else if (section === "verification") page = verificationPage();
  else if (section === "faq") page = faqPage();
  else page = notFoundPage();

  layout(page);
}

document.addEventListener("click", (event) => {
  const langButton = event.target.closest("[data-action='toggle-lang']");
  if (langButton) {
    state.lang = state.lang === "zh" ? "en" : "zh";
    savePreferences();
    render();
    return;
  }

  const themeButton = event.target.closest("[data-action='toggle-theme']");
  if (themeButton) {
    state.theme = state.theme === "dark" ? "light" : "dark";
    savePreferences();
    render();
    return;
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) {
    state.courseFilter = filter.dataset.filter;
    render();
    return;
  }

  const completeButton = event.target.closest("[data-action='toggle-complete']");
  if (completeButton) {
    const id = completeButton.dataset.course;
    if (state.completed.has(id)) state.completed.delete(id);
    else state.completed.add(id);
    savePreferences();
    render();
  }
});

window.addEventListener("hashchange", () => {
  state.courseFilter = "all";
  render();
});

if (!window.location.hash) window.location.hash = "#/";
render();
