export const verification = {
  verifiedAt: "2026-05-08",
  sources: [
    {
      label: "Harvard CS concentration requirements",
      url: "https://csadvising.seas.harvard.edu/concentration/requirements/",
      note: "Used for the overall degree-style structure: programming, formal reasoning, systems, AI, advanced CS, math and probability."
    },
    {
      label: "Harvard CS course tags",
      url: "https://csadvising.seas.harvard.edu/concentration/courses/tags/",
      note: "Used to correct course numbers and tags such as CS1430, CS1610, CS1240, and CS2241."
    },
    {
      label: "Harvard CS courses page",
      url: "https://csadvising.seas.harvard.edu/concentration/courses/",
      note: "Used to confirm annually guaranteed courses and placement guidance."
    },
    {
      label: "CS50x certificate page",
      url: "https://cs50.harvard.edu/x/certificate/",
      note: "Used to confirm free CS50 certificates and paid edX verified certificates."
    },
    {
      label: "CS50 course catalog",
      url: "https://cs50.harvard.edu/web/courses/",
      note: "Used to confirm CS50 courses offer both free certificates and paid verified certificates."
    }
  ],
  corrections: [
    {
      before: "CS1430 Computer Vision",
      after: "CS1430 Computer Networks",
      reason: "Harvard CS tags list CS1430 as Computer Networks. Computer Vision is not CS1430 in the current Harvard CS table."
    },
    {
      before: "CS1410 Operating Systems",
      after: "CS1610 Operating Systems",
      reason: "Current Harvard OS course is COMPSCI 1610. CS1410 is Computing Hardware."
    },
    {
      before: "CS1200 as advanced/intermediate algorithms",
      after: "CS1240 Data Structures and Algorithms",
      reason: "CS1200 is introductory algorithms, computability, and complexity. CS1240 is the intermediate algorithms course in the tags table."
    },
    {
      before: "CS2241 Computer Systems",
      after: "CS2241 Algorithms at the Ends of the Wire",
      reason: "Harvard CS tags list CS2241 as a formal reasoning / algorithms course, not a systems course."
    },
    {
      before: "0 yuan / free certificate wording",
      after: "Free audit or public materials; free CS50 certificate where offered; paid edX verified certificate or Harvard tuition where applicable",
      reason: "Certificate and enrollment costs depend on course type and platform."
    }
  ]
};

export const tiers = [
  { id: "intro", label: { zh: "入门", en: "Intro" } },
  { id: "math", label: { zh: "数学", en: "Math" } },
  { id: "core", label: { zh: "核心", en: "Core" } },
  { id: "advanced", label: { zh: "进阶", en: "Advanced" } }
];

const cs50Certificate = {
  zh: "可免费申请 CS50 Certificate；edX verified certificate 为付费认证，价格以 edX 当前页面为准。",
  en: "Free CS50 Certificate available after requirements; edX verified certificate is paid and priced by edX."
};

const cs50Cost = {
  zh: "OpenCourseWare 可免费学习；提交作业通常需要 edX/GitHub 账号；付费认证可选。",
  en: "OpenCourseWare is free to study; submissions generally require edX/GitHub accounts; paid verification is optional."
};

const collegeCertificate = {
  zh: "非 MOOC 证书课；公开材料可自学，正式学分/成绩只面向 Harvard 注册学生或符合条件的注册项目。",
  en: "Not a MOOC certificate course; public materials can support self-study, while official credit/grades require Harvard registration or an eligible program."
};

const collegeCost = {
  zh: "公开课程页/材料通常可免费浏览；正式注册、学分、夏校或继续教育课程按 Harvard 当前收费执行。",
  en: "Public course pages/materials are usually free to browse; official enrollment, credit, Summer School, or Extension School fees follow Harvard's current rates."
};

export const courses = [
  {
    id: "cs50x",
    code: "CS50x",
    tier: "intro",
    title: { zh: "计算机科学导论", en: "Introduction to Computer Science" },
    subtitle: { zh: "零基础入门首选", en: "Best first course for beginners" },
    description: {
      zh: "哈佛最知名的 CS 入门课，从 Scratch、C、算法、内存、Python、SQL 到 Web，重点是建立计算机科学思维。",
      en: "Harvard's flagship CS introduction, moving from Scratch and C through algorithms, memory, Python, SQL, and web development."
    },
    duration: "11 weeks",
    workload: "10-20h/week",
    language: "C, Python, SQL, JS",
    currentTerm: "CS50x 2026",
    verificationStatus: "verified",
    certificate: cs50Certificate,
    cost: cs50Cost,
    tags: ["programming1", "corecs", "beginner"],
    prerequisites: { zh: "无", en: "None" },
    resources: [
      { type: "official", label: "CS50x 2026", url: "https://cs50.harvard.edu/x/" },
      { type: "certificate", label: "Certificate rules", url: "https://cs50.harvard.edu/x/certificate/" },
      { type: "edx", label: "edX enrollment", url: "https://cs50.edx.org/" },
      { type: "github", label: "CS50 GitHub", url: "https://github.com/cs50" },
      { type: "cn", label: "Bilibili search", url: "https://search.bilibili.com/all?keyword=CS50x" }
    ],
    sources: ["https://cs50.harvard.edu/x/", "https://cs50.harvard.edu/x/certificate/"]
  },
  {
    id: "cs50p",
    code: "CS50P",
    tier: "intro",
    title: { zh: "Python 编程入门", en: "Introduction to Programming with Python" },
    subtitle: { zh: "把 Python 写扎实", en: "A focused Python foundation" },
    description: {
      zh: "用 Python 系统学习函数、条件、循环、异常、测试、正则、文件、面向对象与项目。",
      en: "A practical Python course covering functions, conditionals, loops, exceptions, testing, regex, files, objects, and a final project."
    },
    duration: "9 weeks",
    workload: "6-9h/week",
    language: "Python",
    currentTerm: "Current CS50 Python OpenCourseWare",
    verificationStatus: "verified",
    certificate: cs50Certificate,
    cost: cs50Cost,
    tags: ["programming1", "python"],
    prerequisites: { zh: "无，可在 CS50x 后学习", en: "None; useful after CS50x" },
    resources: [
      { type: "official", label: "CS50 Python", url: "https://cs50.harvard.edu/python/" },
      { type: "certificate", label: "Certificate rules", url: "https://cs50.harvard.edu/python/certificate/" },
      { type: "edx", label: "edX enrollment", url: "https://cs50.edx.org/python" },
      { type: "cn", label: "Bilibili search", url: "https://search.bilibili.com/all?keyword=CS50P" }
    ],
    sources: ["https://cs50.harvard.edu/python/", "https://cs50.harvard.edu/python/certificate/"]
  },
  {
    id: "cs51",
    code: "CS51",
    tier: "core",
    title: { zh: "抽象与程序设计", en: "Abstraction and Design in Computation" },
    subtitle: { zh: "从会写代码到写得好", en: "From coding to designing well" },
    description: {
      zh: "围绕抽象、函数式、命令式、面向对象与软件设计判断，训练程序结构感。",
      en: "Develops judgment about abstraction, functional programming, imperative programming, object-oriented design, and maintainability."
    },
    duration: "Spring term",
    workload: "10-12h/week",
    language: "OCaml",
    currentTerm: "Spring 2026",
    verificationStatus: "verified",
    certificate: collegeCertificate,
    cost: collegeCost,
    tags: ["programming2", "corecs"],
    prerequisites: { zh: "CS50/CS32 或同等编程基础", en: "CS50/CS32 or equivalent programming background" },
    resources: [
      { type: "official", label: "CS51 course site", url: "https://cs51.io/" },
      { type: "syllabus", label: "Spring 2026 syllabus", url: "https://cs51.io/college/syllabus/" },
      { type: "catalog", label: "my.harvard listing", url: "https://beta.my.harvard.edu/course/COMPSCI51/2026-Spring/001" }
    ],
    sources: ["https://cs51.io/", "https://cs51.io/college/syllabus/", "https://beta.my.harvard.edu/course/COMPSCI51/2026-Spring/001"]
  },
  {
    id: "cs61",
    code: "CS61",
    tier: "core",
    title: { zh: "系统编程与机器组织", en: "Systems Programming and Machine Organization" },
    subtitle: { zh: "理解机器、内存、进程与 C/C++", en: "Understand machines, memory, processes, and C/C++" },
    description: {
      zh: "CS 编程二层级和系统基础课，连接软件、硬件、汇编、存储层级、进程与并发。",
      en: "A programming-2 and systems foundation course connecting software, hardware, assembly, storage, processes, and concurrency."
    },
    duration: "Fall term",
    workload: "10-15h/week",
    language: "C++ / Assembly",
    currentTerm: "Latest public site observed: 2025; annual core course per Harvard CS advising",
    verificationStatus: "verified",
    certificate: collegeCertificate,
    cost: collegeCost,
    tags: ["programming2", "systems", "corecs"],
    prerequisites: { zh: "CS50/CS32 或同等基础", en: "CS50/CS32 or equivalent" },
    resources: [
      { type: "official", label: "CS61 course site", url: "https://cs61.seas.harvard.edu/" },
      { type: "catalog", label: "DCE listing", url: "https://coursebrowser.dce.harvard.edu/course/systems-programming-and-machine-organization/" },
      { type: "advising", label: "Harvard CS courses page", url: "https://csadvising.seas.harvard.edu/concentration/courses/" }
    ],
    sources: ["https://cs61.seas.harvard.edu/", "https://csadvising.seas.harvard.edu/concentration/courses/"]
  },
  {
    id: "cs20",
    code: "CS20",
    tier: "math",
    title: { zh: "离散数学", en: "Discrete Mathematics for Computer Science" },
    subtitle: { zh: "CS 理论课的数学入口", en: "The math doorway into CS theory" },
    description: {
      zh: "逻辑、集合、组合、数论、概率、图论和证明训练，是算法与计算理论的基础。",
      en: "Logic, sets, combinatorics, number theory, probability, graph theory, and proof practice for later theory and algorithms."
    },
    duration: "Spring term",
    workload: "8-10h/week",
    language: "Math",
    currentTerm: "Spring 2026",
    verificationStatus: "verified",
    certificate: collegeCertificate,
    cost: collegeCost,
    tags: ["formalreasoning", "discretemath", "corecs"],
    prerequisites: { zh: "基础数学与愿意写证明", en: "Basic math and willingness to write proofs" },
    resources: [
      { type: "official", label: "my.harvard listing", url: "https://beta.my.harvard.edu/course/COMPSCI20/2026-Spring/001" },
      { type: "advising", label: "Course placement guidance", url: "https://csadvising.seas.harvard.edu/concentration/courses/" }
    ],
    sources: ["https://beta.my.harvard.edu/course/COMPSCI20/2026-Spring/001", "https://csadvising.seas.harvard.edu/concentration/courses/"]
  },
  {
    id: "cs1200",
    code: "CS1200",
    tier: "core",
    title: { zh: "算法、可计算性与复杂性导论", en: "Introduction to Algorithms, Computability, and Complexity" },
    subtitle: { zh: "算法和理论的合并入口", en: "A combined entry into algorithms and theory" },
    description: {
      zh: "用数学抽象和严格证明理解算法设计、正确性、效率，以及哪些问题可能没有算法解。",
      en: "Uses abstraction and proof to understand algorithms, correctness, efficiency, and limits of what can be solved algorithmically."
    },
    duration: "Spring term",
    workload: "10-12h/week",
    language: "Math / Pseudocode",
    currentTerm: "Spring 2026",
    verificationStatus: "verified",
    certificate: collegeCertificate,
    cost: collegeCost,
    tags: ["formalreasoning", "algorithms", "complimitations", "advancedcs"],
    prerequisites: { zh: "CS20 或同等离散数学基础", en: "CS20 or equivalent discrete math background" },
    resources: [
      { type: "official", label: "CS1200 course site", url: "https://harvard-cs-1200.github.io/cs1200/" },
      { type: "catalog", label: "my.harvard listing", url: "https://beta.my.harvard.edu/course/COMPSCI1200/2026-Spring/001" }
    ],
    sources: ["https://harvard-cs-1200.github.io/cs1200/", "https://beta.my.harvard.edu/course/COMPSCI1200/2026-Spring/001"]
  },
  {
    id: "cs1210",
    code: "CS1210",
    tier: "core",
    title: { zh: "理论计算机科学导论", en: "Introduction to Theoretical Computer Science" },
    subtitle: { zh: "计算能力边界", en: "The limits of computation" },
    description: {
      zh: "研究通用计算、可计算性、不可判定性、复杂度、随机性与量子计算等基础问题。",
      en: "Studies universality, computability, undecidability, complexity, randomness, and quantum computation."
    },
    duration: "Fall term",
    workload: "8-10h/week",
    language: "Math / Proofs",
    currentTerm: "Fall 2026",
    verificationStatus: "verified",
    certificate: collegeCertificate,
    cost: collegeCost,
    tags: ["formalreasoning", "complimitations", "advancedcs"],
    prerequisites: { zh: "CS20 或强离散数学基础", en: "CS20 or strong discrete math background" },
    resources: [
      { type: "official", label: "my.harvard listing", url: "https://beta.my.harvard.edu/course/COMPSCI1210/2026-Fall/001" },
      { type: "background", label: "Prerequisite background", url: "https://www.boazbarak.org/cs121/" }
    ],
    sources: ["https://beta.my.harvard.edu/course/COMPSCI1210/2026-Fall/001", "https://csadvising.seas.harvard.edu/concentration/courses/"]
  },
  {
    id: "stat110",
    code: "STAT110",
    tier: "math",
    title: { zh: "概率论导论", en: "Introduction to Probability" },
    subtitle: { zh: "AI、算法和数据科学的概率基础", en: "Probability for AI, algorithms, and data science" },
    description: {
      zh: "Joe Blitzstein 的经典概率课，覆盖条件概率、分布、期望、极限定理、马尔可夫链等。",
      en: "Joe Blitzstein's probability course covering conditioning, distributions, expectation, limit laws, Markov chains, and more."
    },
    duration: "10-13 weeks",
    workload: "5-10h/week",
    language: "Math",
    currentTerm: "Harvard Online class window observed: Jul 2025-Jul 2026; Harvard College Fall 2026 listing exists",
    verificationStatus: "verified",
    certificate: {
      zh: "Harvard Online/edX 可免费旁听；verified certificate 为付费认证。公开视频和教材也可免费学习。",
      en: "Harvard Online/edX audit is available; verified certificate is paid. Public videos and textbook are also available for free self-study."
    },
    cost: {
      zh: "公开视频/教材免费；edX verified certificate 付费，Harvard Online 页面显示当前证书价由平台列出。",
      en: "Public videos/textbook are free; edX verified certificate is paid, with the current price shown by Harvard Online/edX."
    },
    tags: ["probability", "math"],
    prerequisites: { zh: "单变量微积分和矩阵基础", en: "Single-variable calculus and basic matrices" },
    resources: [
      { type: "official", label: "Stat110 site", url: "https://stat110.hsites.harvard.edu/" },
      { type: "online", label: "Harvard Online", url: "https://www.harvardonline.harvard.edu/course/introduction-probability" },
      { type: "catalog", label: "my.harvard listing", url: "https://beta.my.harvard.edu/course/STAT110/2026-Fall/001" }
    ],
    sources: ["https://stat110.hsites.harvard.edu/", "https://www.harvardonline.harvard.edu/course/introduction-probability", "https://beta.my.harvard.edu/course/STAT110/2026-Fall/001"]
  },
  {
    id: "math21",
    code: "MATH21A/B",
    tier: "math",
    title: { zh: "多元微积分与线性代数", en: "Multivariable Calculus and Linear Algebra" },
    subtitle: { zh: "机器学习和图形学前置数学", en: "Math preparation for ML and graphics" },
    description: {
      zh: "Math 21A 覆盖多元微积分，Math 21B 覆盖线性代数与微分方程；在 CS 规划中通常更强调线性代数要求。",
      en: "Math 21A covers multivariable calculus; Math 21B covers linear algebra and differential equations. Harvard CS especially requires a linear algebra course."
    },
    duration: "Two term-sized courses",
    workload: "8h/week",
    language: "Math",
    currentTerm: "Spring/Fall 2026 listings",
    verificationStatus: "verified",
    certificate: collegeCertificate,
    cost: collegeCost,
    tags: ["linearalgebra", "calculus", "math"],
    prerequisites: { zh: "单变量微积分", en: "Single-variable calculus" },
    resources: [
      { type: "official", label: "Math 21A", url: "https://www.math.harvard.edu/course/mathematics-21a-spring/" },
      { type: "official", label: "Math 21B", url: "https://www.math.harvard.edu/course/mathematics-21b-spring/" },
      { type: "catalog", label: "MATH21B my.harvard", url: "https://beta.my.harvard.edu/course/MATH21B/2026-Spring/LEC" }
    ],
    sources: ["https://www.math.harvard.edu/course/mathematics-21a-spring/", "https://www.math.harvard.edu/course/mathematics-21b-spring/", "https://csadvising.seas.harvard.edu/concentration/requirements/"]
  },
  {
    id: "cs1240",
    code: "CS1240",
    tier: "advanced",
    title: { zh: "数据结构与算法", en: "Data Structures and Algorithms" },
    subtitle: { zh: "真正的进阶算法核心", en: "The core intermediate algorithms course" },
    description: {
      zh: "设计与分析高效算法和数据结构，覆盖图算法、近似算法、随机算法等。",
      en: "Design and analysis of efficient algorithms and data structures, including graph algorithms, approximation, and randomized algorithms."
    },
    duration: "Spring term",
    workload: "10-12h/week",
    language: "Math / Programming",
    currentTerm: "Spring 2026",
    verificationStatus: "verified",
    certificate: collegeCertificate,
    cost: collegeCost,
    tags: ["formalreasoning", "algorithms", "intermediatealgorithms", "advancedcs"],
    prerequisites: { zh: "CS20/CS1200 或同等算法与证明基础", en: "CS20/CS1200 or equivalent algorithms and proof background" },
    resources: [
      { type: "official", label: "my.harvard listing", url: "https://beta.my.harvard.edu/course/COMPSCI1240/2026-Spring/001" },
      { type: "theory", label: "Harvard theory courses", url: "https://toc.seas.harvard.edu/toc-courses" }
    ],
    sources: ["https://beta.my.harvard.edu/course/COMPSCI1240/2026-Spring/001", "https://csadvising.seas.harvard.edu/concentration/courses/tags/"]
  },
  {
    id: "cs1610",
    code: "CS1610",
    tier: "advanced",
    title: { zh: "操作系统", en: "Operating Systems" },
    subtitle: { zh: "内核、进程、文件系统与虚拟化", en: "Kernels, processes, filesystems, and virtualization" },
    description: {
      zh: "现代操作系统设计与实现，覆盖线程、进程、虚拟内存、系统调用、文件系统和虚拟化。",
      en: "Modern operating system design and implementation: threads, processes, virtual memory, system calls, filesystems, and virtualization."
    },
    duration: "Spring term",
    workload: "12-15h/week",
    language: "C++",
    currentTerm: "Spring 2026",
    verificationStatus: "corrected",
    certificate: collegeCertificate,
    cost: collegeCost,
    tags: ["systems", "programming2", "advancedcs"],
    prerequisites: { zh: "CS61 强烈推荐", en: "CS61 strongly recommended" },
    resources: [
      { type: "official", label: "CS1610 course site", url: "https://read.seas.harvard.edu/cs1610/2026/" },
      { type: "catalog", label: "my.harvard listing", url: "https://beta.my.harvard.edu/course/COMPSCI1610/2026-Spring/001" }
    ],
    sources: ["https://read.seas.harvard.edu/cs1610/2026/", "https://beta.my.harvard.edu/course/COMPSCI1610/2026-Spring/001"]
  },
  {
    id: "cs1810",
    code: "CS1810",
    tier: "advanced",
    title: { zh: "机器学习", en: "Machine Learning" },
    subtitle: { zh: "概率视角下的 AI", en: "AI through a probabilistic lens" },
    description: {
      zh: "监督学习、集成方法、神经网络、SVM、核方法、聚类、图模型、HMM、推断与计算学习理论。",
      en: "Supervised learning, ensembles, neural networks, SVMs, kernels, clustering, graphical models, HMMs, inference, and learning theory."
    },
    duration: "Spring term",
    workload: "12-15h/week",
    language: "Python / Math",
    currentTerm: "Spring 2026",
    verificationStatus: "verified",
    certificate: collegeCertificate,
    cost: collegeCost,
    tags: ["ai", "computationandtheworld", "advancedcs"],
    prerequisites: { zh: "Python、概率、线性代数、多元微积分", en: "Python, probability, linear algebra, multivariable calculus" },
    resources: [
      { type: "official", label: "CS1810 course site", url: "https://harvard-ml-courses.github.io/cs181-web/" },
      { type: "catalog", label: "my.harvard listing", url: "https://beta.my.harvard.edu/course/COMPSCI1810/2026-Spring/001" }
    ],
    sources: ["https://harvard-ml-courses.github.io/cs181-web/", "https://beta.my.harvard.edu/course/COMPSCI1810/2026-Spring/001"]
  },
  {
    id: "cs50ai",
    code: "CS50AI",
    tier: "advanced",
    title: { zh: "Python 人工智能导论", en: "Introduction to AI with Python" },
    subtitle: { zh: "面向项目的 AI 入门", en: "Project-based AI introduction" },
    description: {
      zh: "搜索、知识表示、不确定性、优化、机器学习、神经网络、语言模型等 AI 基础主题。",
      en: "Search, knowledge representation, uncertainty, optimization, machine learning, neural networks, language models, and related AI foundations."
    },
    duration: "7 weeks",
    workload: "10-15h/week",
    language: "Python",
    currentTerm: "Current CS50 AI OpenCourseWare",
    verificationStatus: "verified",
    certificate: cs50Certificate,
    cost: cs50Cost,
    tags: ["ai", "python", "projects"],
    prerequisites: { zh: "CS50x 或一年 Python 经验", en: "CS50x or at least one year of Python experience" },
    resources: [
      { type: "official", label: "CS50 AI", url: "https://cs50.harvard.edu/ai/" },
      { type: "certificate", label: "Certificate rules", url: "https://cs50.harvard.edu/ai/certificate/" },
      { type: "edx", label: "edX enrollment", url: "https://cs50.edx.org/ai" },
      { type: "cn", label: "Bilibili search", url: "https://search.bilibili.com/all?keyword=CS50AI" }
    ],
    sources: ["https://cs50.harvard.edu/ai/", "https://cs50.harvard.edu/ai/certificate/"]
  },
  {
    id: "cs50w",
    code: "CS50W",
    tier: "advanced",
    title: { zh: "Python 与 JavaScript Web 编程", en: "Web Programming with Python and JavaScript" },
    subtitle: { zh: "Django、SQL、前端与部署", en: "Django, SQL, frontend, and deployment" },
    description: {
      zh: "深入 Web 应用设计与实现，覆盖 Django、React、Bootstrap、API、测试、CI/CD、扩展性和安全。",
      en: "Web application design with Django, React, Bootstrap, APIs, testing, CI/CD, scalability, and security."
    },
    duration: "9 weeks",
    workload: "6-12h/week",
    language: "Python / JavaScript",
    currentTerm: "Current CS50 Web OpenCourseWare",
    verificationStatus: "verified",
    certificate: cs50Certificate,
    cost: cs50Cost,
    tags: ["web", "projects"],
    prerequisites: { zh: "CS50x 或任意编程经验", en: "CS50x or prior programming experience" },
    resources: [
      { type: "official", label: "CS50 Web", url: "https://cs50.harvard.edu/web/" },
      { type: "certificate", label: "Certificate rules", url: "https://cs50.harvard.edu/web/certificate/" },
      { type: "edx", label: "edX enrollment", url: "https://cs50.edx.org/web" },
      { type: "cn", label: "Bilibili search", url: "https://search.bilibili.com/all?keyword=CS50W" }
    ],
    sources: ["https://cs50.harvard.edu/web/", "https://cs50.harvard.edu/web/certificate/"]
  },
  {
    id: "cs50sql",
    code: "CS50SQL",
    tier: "intro",
    title: { zh: "数据库与 SQL 入门", en: "Introduction to Databases with SQL" },
    subtitle: { zh: "关系建模与查询能力", en: "Relational modeling and querying" },
    description: {
      zh: "从 SQLite 到 PostgreSQL/MySQL，学习建模、约束、规范化、索引、视图、查询优化和连接。",
      en: "From SQLite to PostgreSQL/MySQL: modeling, constraints, normalization, indexes, views, query optimization, and joins."
    },
    duration: "7 weeks",
    workload: "3-6h/week",
    language: "SQL",
    currentTerm: "CS50 SQL 2024 course; 2026 FAQ/deadline maintained by CS50",
    verificationStatus: "verified",
    certificate: cs50Certificate,
    cost: cs50Cost,
    tags: ["database", "sql"],
    prerequisites: { zh: "无，可在 CS50x 前后学习", en: "None; can be taken before, during, or after CS50x" },
    resources: [
      { type: "official", label: "CS50 SQL", url: "https://cs50.harvard.edu/sql/" },
      { type: "faq", label: "2026 FAQ", url: "https://cs50.harvard.edu/sql/faqs/" },
      { type: "edx", label: "edX enrollment", url: "https://cs50.edx.org/sql" },
      { type: "online", label: "Harvard Online", url: "https://www.harvardonline.harvard.edu/course/cs50s-introduction-databases-sql" }
    ],
    sources: ["https://cs50.harvard.edu/sql/", "https://cs50.harvard.edu/sql/faqs/"]
  },
  {
    id: "cs1430",
    code: "CS1430",
    tier: "advanced",
    title: { zh: "计算机网络", en: "Computer Networks" },
    subtitle: { zh: "已从原型中的 Computer Vision 更正", en: "Corrected from the prototype's Computer Vision label" },
    description: {
      zh: "哈佛 CS 官方标签表中，CS1430 是 Computer Networks，属于高级 CS 课程；它不是 Computer Vision。",
      en: "In Harvard's official CS tags table, CS1430 is Computer Networks, an advanced CS course; it is not Computer Vision."
    },
    duration: "Term course",
    workload: "10-12h/week",
    language: "Networks",
    currentTerm: "Tags verified 2026; current catalog offering should be checked before enrollment",
    verificationStatus: "corrected",
    certificate: collegeCertificate,
    cost: collegeCost,
    tags: ["advancedcs", "networks"],
    prerequisites: { zh: "CS61/系统基础有帮助", en: "CS61/systems background helpful" },
    resources: [
      { type: "official", label: "Harvard CS course tags", url: "https://csadvising.seas.harvard.edu/concentration/courses/tags/" },
      { type: "catalog", label: "my.harvard search", url: "https://beta.my.harvard.edu/" }
    ],
    sources: ["https://csadvising.seas.harvard.edu/concentration/courses/tags/"]
  },
  {
    id: "cs2241",
    code: "CS2241",
    tier: "advanced",
    title: { zh: "网络边缘算法", en: "Algorithms at the Ends of the Wire" },
    subtitle: { zh: "高级算法与网络/数据库主题", en: "Advanced algorithms for networks and data systems" },
    description: {
      zh: "官方标签表显示 CS2241 是形式化推理、算法和中级算法方向课程，而不是通用 Computer Systems。",
      en: "The official tags table lists CS2241 under formal reasoning, algorithms, and intermediate algorithms, not general computer systems."
    },
    duration: "Advanced term course",
    workload: "10-12h/week",
    language: "Math / Algorithms",
    currentTerm: "Tags verified 2026; offering cycle varies",
    verificationStatus: "corrected",
    certificate: collegeCertificate,
    cost: collegeCost,
    tags: ["formalreasoning", "algorithms", "intermediatealgorithms", "advancedcs"],
    prerequisites: { zh: "CS1240 或同等算法基础", en: "CS1240 or equivalent algorithms background" },
    resources: [
      { type: "official", label: "Harvard CS course tags", url: "https://csadvising.seas.harvard.edu/concentration/courses/tags/" },
      { type: "catalog", label: "my.harvard search", url: "https://beta.my.harvard.edu/" }
    ],
    sources: ["https://csadvising.seas.harvard.edu/concentration/courses/tags/"]
  }
];

export const paths = [
  {
    id: "general",
    title: { zh: "通用软件工程师路径", en: "General Software Engineer Path" },
    subtitle: { zh: "从零基础到能写真实产品", en: "From beginner to real product builder" },
    audience: {
      zh: "适合完全没接触过编程，希望建立完整 CS 底盘并能做产品的人。",
      en: "For beginners who want a real CS base and the ability to ship products."
    },
    duration: { zh: "约 12-18 个月", en: "About 12-18 months" },
    stages: [
      {
        title: { zh: "建立编程思维", en: "Build programming thinking" },
        note: { zh: "先用 CS50x 建立完整概念地图。", en: "Start with CS50x to build the concept map." },
        courseIds: ["cs50x"]
      },
      {
        title: { zh: "补强 Python 与数学", en: "Strengthen Python and math" },
        note: { zh: "Python 负责动手效率，CS20 负责后续算法和理论语言。", en: "Python improves building speed; CS20 prepares theory and algorithms." },
        courseIds: ["cs50p", "cs20"]
      },
      {
        title: { zh: "软件设计、系统与算法", en: "Design, systems, and algorithms" },
        note: { zh: "CS51/CS61/CS1200 是从能写到能设计、能分析的关键跨越。", en: "CS51/CS61/CS1200 bridge coding, design, systems, and analysis." },
        courseIds: ["cs51", "cs61", "cs1200"]
      },
      {
        title: { zh: "产品能力", en: "Product capability" },
        note: { zh: "用 Web 和数据库做能交付的项目。", en: "Use web and databases to ship usable projects." },
        courseIds: ["cs50w", "cs50sql"]
      }
    ]
  },
  {
    id: "ai",
    title: { zh: "AI / 机器学习方向", en: "AI / Machine Learning Path" },
    subtitle: { zh: "理解模型背后的数学与代码", en: "Understand the math and code behind models" },
    audience: {
      zh: "适合想真正理解 AI、机器学习和大模型底层，而不是只会调 API 的学习者。",
      en: "For learners who want real AI and ML foundations, not only API use."
    },
    duration: { zh: "约 15-24 个月", en: "About 15-24 months" },
    stages: [
      {
        title: { zh: "编程与 CS 基础", en: "Programming and CS foundations" },
        note: { zh: "AI 路线仍然从 CS50x/Python 开始。", en: "The AI route still starts with CS50x/Python." },
        courseIds: ["cs50x", "cs50p"]
      },
      {
        title: { zh: "数学底盘", en: "Math base" },
        note: { zh: "线性代数、微积分、概率是 ML 的语言。", en: "Linear algebra, calculus, and probability are the language of ML." },
        courseIds: ["math21", "stat110", "cs20"]
      },
      {
        title: { zh: "理论与算法", en: "Theory and algorithms" },
        note: { zh: "先理解可计算性、复杂性和算法，再进入 ML。", en: "Understand computability, complexity, and algorithms before ML." },
        courseIds: ["cs1200", "cs1210", "cs1240"]
      },
      {
        title: { zh: "AI 实战与机器学习", en: "AI projects and machine learning" },
        note: { zh: "CS50AI 偏项目，CS1810 偏系统性机器学习。", en: "CS50AI is project-oriented; CS1810 is systematic ML." },
        courseIds: ["cs50ai", "cs1810"]
      }
    ]
  },
  {
    id: "web",
    title: { zh: "Web 全栈 / 创业方向", en: "Full-Stack / Founder Path" },
    subtitle: { zh: "最快做出可用产品的路线", en: "The fastest route to usable products" },
    audience: {
      zh: "适合独立开发者、创业者、产品经理转技术，目标是更快做出真实应用。",
      en: "For indie hackers, founders, and product people who want to build real apps."
    },
    duration: { zh: "约 8-12 个月", en: "About 8-12 months" },
    stages: [
      {
        title: { zh: "编程入口", en: "Programming entry" },
        note: { zh: "先完成 CS50x，再用 CS50P 巩固 Python。", en: "Finish CS50x, then use CS50P to solidify Python." },
        courseIds: ["cs50x", "cs50p"]
      },
      {
        title: { zh: "数据库与 Web", en: "Database and web" },
        note: { zh: "这是产品落地的主干能力。", en: "This is the main product-building backbone." },
        courseIds: ["cs50sql", "cs50w"]
      },
      {
        title: { zh: "工程质量", en: "Engineering quality" },
        note: { zh: "用 CS51 建立可维护代码和抽象设计意识。", en: "Use CS51 to build maintainable design judgment." },
        courseIds: ["cs51"]
      }
    ]
  },
  {
    id: "systems",
    title: { zh: "系统底层 / 基础设施方向", en: "Systems / Infrastructure Path" },
    subtitle: { zh: "从机器组织到操作系统、网络和高级算法", en: "From machine organization to OS, networks, and advanced algorithms" },
    audience: {
      zh: "适合想做操作系统、网络、数据库、基础设施、云平台方向的人。",
      en: "For learners aiming at operating systems, networks, databases, infra, or cloud platforms."
    },
    duration: { zh: "约 18-24 个月", en: "About 18-24 months" },
    stages: [
      {
        title: { zh: "底层入口", en: "Low-level entry" },
        note: { zh: "CS50x 后直接进入 CS61，建立机器和系统感。", en: "After CS50x, move into CS61 for machine and systems intuition." },
        courseIds: ["cs50x", "cs61"]
      },
      {
        title: { zh: "系统与操作系统", en: "Systems and OS" },
        note: { zh: "CS1610 是原型中 OS 编号的正确修正。", en: "CS1610 is the corrected OS course number." },
        courseIds: ["cs1610"]
      },
      {
        title: { zh: "算法、网络与高阶系统", en: "Algorithms, networks, and advanced systems" },
        note: { zh: "CS1430 已修正为网络，CS2241 已修正为高级算法方向。", en: "CS1430 is corrected to networks; CS2241 is corrected to advanced algorithms." },
        courseIds: ["cs1240", "cs1430", "cs2241"]
      }
    ]
  }
];

export const methods = [
  {
    title: { zh: "先做再看", en: "Do before watching more" },
    body: {
      zh: "每一周至少完成一个可运行作业。视频看懂不是掌握，能独立复现和解释才算掌握。",
      en: "Each week should end with something runnable. Understanding a video is not mastery; reproducing and explaining the work is."
    }
  },
  {
    title: { zh: "卡点 30 分钟规则", en: "30-minute stuck rule" },
    body: {
      zh: "先自己定位 30 分钟，再搜索、查官方社区或问 AI。得到答案后必须重写一遍，不复制。",
      en: "Try to localize the issue for 30 minutes, then search, ask communities, or use AI. After receiving help, rewrite the solution yourself."
    }
  },
  {
    title: { zh: "用 AI 当教练，不当代写", en: "Use AI as coach, not ghostwriter" },
    body: {
      zh: "让 AI 解释概念、拆问题、做代码审查、出练习题；不要让它直接完成作业。",
      en: "Use AI to explain, decompose, review, and quiz. Do not let it complete assignments for you."
    }
  },
  {
    title: { zh: "保留学习证据", en: "Keep evidence of learning" },
    body: {
      zh: "每门课保留项目、笔记、复盘和 GitHub 记录。长期能力来自可复查的过程。",
      en: "Keep projects, notes, retrospectives, and GitHub history. Long-term skill comes from reviewable process."
    }
  }
];

export const communities = [
  {
    group: { zh: "官方与权威入口", en: "Official and authoritative" },
    items: [
      { name: "CS50", url: "https://cs50.harvard.edu/", desc: { zh: "CS50 系列公开课程主入口。", en: "Main entry for CS50 OpenCourseWare." } },
      { name: "CS50 Discord", url: "https://discord.gg/cs50", desc: { zh: "CS50 官方学习社区。", en: "Official CS50 learning community." } },
      { name: "Harvard CS Advising", url: "https://csadvising.seas.harvard.edu/", desc: { zh: "哈佛 CS 培养方案、课程标签和要求。", en: "Harvard CS requirements, course tags, and advising." } },
      { name: "my.harvard Course Catalog", url: "https://beta.my.harvard.edu/", desc: { zh: "课程开设学期、描述和学分信息。", en: "Course term, description, and credit information." } }
    ]
  },
  {
    group: { zh: "自学补充", en: "Self-study supplements" },
    items: [
      { name: "Stat 110", url: "https://stat110.hsites.harvard.edu/", desc: { zh: "概率论公开视频和教材入口。", en: "Probability videos and textbook resources." } },
      { name: "Teach Yourself CS", url: "https://teachyourselfcs.com/", desc: { zh: "经典自学 CS 书单。", en: "Classic self-study CS guide." } },
      { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/", desc: { zh: "可替代或补强的公开课程。", en: "Alternative and supplementary open courses." } },
      { name: "Stack Overflow", url: "https://stackoverflow.com/", desc: { zh: "具体工程问题检索。", en: "Search concrete engineering questions." } }
    ]
  }
];

export const faqs = [
  {
    q: { zh: "这个网页现在和原型最大的区别是什么？", en: "What changed from the prototype?" },
    a: {
      zh: "课程信息被抽到源码数据层，并加入了核验来源、当前年份、费用/证书说明和已修正记录。它不再只是展示页。",
      en: "Course information now lives in a source data layer with verification sources, current terms, cost/certificate notes, and correction records."
    }
  },
  {
    q: { zh: "是不是所有课程都能免费拿证书？", en: "Do all courses offer free certificates?" },
    a: {
      zh: "不是。CS50 系列通常有免费 CS50 Certificate 和付费 edX verified certificate；Harvard College/FAS 课程通常不是 MOOC 证书课，只能公开自学材料，正式学分/成绩需要注册。",
      en: "No. CS50 courses generally offer free CS50 Certificates and paid edX verified certificates. Harvard College/FAS courses are usually not MOOC certificate courses."
    }
  },
  {
    q: { zh: "为什么改掉 CS1430 和 CS1410？", en: "Why were CS1430 and CS1410 changed?" },
    a: {
      zh: "因为哈佛官方 CS 标签表显示 CS1430 是 Computer Networks；Operating Systems 对应 CS1610。原型里的标题和编号不匹配。",
      en: "Because Harvard's official CS tags table lists CS1430 as Computer Networks, while Operating Systems is CS1610. The prototype mismatched titles and numbers."
    }
  },
  {
    q: { zh: "我只是个人自学，需要按哈佛学分要求走吗？", en: "Do self-learners need to follow Harvard credit requirements?" },
    a: {
      zh: "不需要逐字复制。网页借用哈佛 CS 的结构来排序知识：编程、数学、形式化推理、系统、AI 和高级 CS。自学目标是能力闭环，不是学分。",
      en: "No. The page borrows Harvard CS structure to sequence knowledge: programming, math, formal reasoning, systems, AI, and advanced CS. The self-study goal is capability, not credit."
    }
  }
];
