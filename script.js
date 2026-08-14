const menuToggle = document.querySelector("[data-menu-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card[data-project]");
const navLinks = document.querySelectorAll(".nav-links a");
const projectDialog = document.querySelector("[data-project-dialog]");
const dialogClose = document.querySelector("[data-dialog-close]");
const detailJumps = document.querySelectorAll("[data-detail-jump]");

const architectureIcons = {
  unity: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
  nginx: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
  spring: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  intel: "https://cdn.simpleicons.org/intel/0071C5",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  redis: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  chrome: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  android: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
};

const projects = {
  cook: {
    type: "팀 프로젝트 · Backend / Infra / Client",
    title: "내 요리를 부탁해",
    summary: "두 사용자가 서로 다른 정보로 협력하는 비대칭 요리 게임입니다. Java 백엔드 전반과 인증, 게임 데이터 저장, 배포 검증을 담당했습니다.",
    image: "./assets/ppt/image15.png",
    imageAlt: "내 요리를 부탁해 게임 화면",
    github: "https://github.com/smoothie-99/asymmetrical-cooking-game",
    tags: ["Java 17", "Spring Boot", "JPA", "PostgreSQL", "JWT", "Docker"],
    role: "Backend · Infra · Client",
    team: "6인 팀",
    domain: "Auth · Game Data · Deployment",
    architecture: [{ label: "Unity Client", icon: "unity" }, { label: "Nginx", icon: "nginx" }, { label: "Spring Boot REST API", icon: "spring" }, { label: "PostgreSQL", icon: "postgres" }],
    architectureNote: "Spring Security·JWT 인증과 Naver SMTP 이메일 검증을 적용하고, Docker·Jenkins·AWS EC2 환경에서 실행을 확인했습니다.",
    details: {
      overview: { title: "프로젝트 개요", text: "회원가입과 로그인부터 게임 결과 저장, 요리 도감 조회까지 하나의 데이터 흐름으로 설계했습니다. 구현 후에는 Postman과 서버 로그로 정상·예외 시나리오를 확인했습니다.", items: ["JWT Access·Refresh Token 기반 인증", "Naver SMTP와 UUID 링크를 이용한 이메일 인증", "게임 결과와 사용자별 요리 도감 데이터 모델링", "Docker Compose 기반 서버 실행·배포 검증"] },
      features: { title: "주요 구현", text: "UserDish 연관 엔티티로 사용자별 달성 결과를 관리하고, 기존 기록보다 높은 등급일 때만 갱신되도록 도메인 규칙을 구현했습니다.", items: ["Users·Dish·UserDish 엔티티와 LAZY 연관관계", "기록이 없으면 생성, 더 높은 등급일 때만 갱신", "BCrypt 비밀번호 암호화와 Stateless 인증", "회원·프로필·게임 결과·도감 API 연동"] },
      decision: { title: "기술적 판단", text: "점수 저장과 도감 반영처럼 함께 유지되어야 하는 변경은 트랜잭션 안에서 처리했습니다. 인증은 클라이언트와 서버의 결합을 낮추기 위해 JWT 방식으로 구성했습니다.", items: ["변경 로직에 @Transactional 적용", "DTO로 요청·응답과 엔티티 분리", "낮은 등급이 높은 기록을 덮지 못하는 보호 규칙", "Docker Compose로 팀 실행 환경 통일"] },
      result: { title: "검증 및 배운 점", text: "기능 구현에 그치지 않고 클라이언트 연동, 컨테이너 상태, Spring 로그까지 확인하며 백엔드 결과가 실제 서비스 동작으로 이어지는 과정을 경험했습니다.", items: ["회원가입·로그인 토큰 발급 검증", "게임 결과 저장과 도감 조회 검증", "낮은 등급 재요청 시 기존 기록 유지 확인", "잘못된 JWT 접근 차단과 배포 로그 확인"] },
    },
  },
  jipchak: {
    type: "팀 프로젝트 · Infra / Backend / AI Integration",
    title: "JipChak",
    summary: "인형뽑기 성공 가능성을 실시간으로 보여주고 게임 영상을 QR로 제공하는 서비스입니다. 카메라·AI 추론·서버·웹 사이의 데이터 흐름을 연결했습니다.",
    image: "./assets/ppt/image10.png",
    imageAlt: "JipChak 게임 영상 화면",
    github: null,
    tags: ["Spring Boot", "Redis", "RunPod", "YOLO", "RealSense", "AWS"],
    role: "Infra · Backend · AI",
    team: "5인 팀",
    domain: "Realtime AI · QR Session · Media",
    architecture: [{ label: "RealSense Camera", icon: "intel" }, { label: "RunPod · YOLO/Depth", icon: "python" }, { label: "Spring Boot API", icon: "spring" }, { label: "Redis QR Session", icon: "redis" }, { label: "QR Video Web", icon: "chrome" }],
    architectureNote: "게임 종료 후 녹화 영상 메타데이터와 단기 QR 세션을 연결하고 Docker·AWS 환경에서 사용자 조회 흐름을 구성했습니다.",
    details: {
      overview: { title: "프로젝트 개요", text: "RealSense D435의 영상·깊이 정보와 AI 탐지 결과를 성공 가능성으로 가공하고, 게임 종료 후에는 사용자가 QR로 영상을 확인하도록 설계했습니다.", items: ["실시간 객체 탐지와 깊이 데이터 연계", "집게 구조별 성공 가능성 계산", "게임 영상 녹화·메타데이터 관리", "QR 기반 결과 영상 조회"] },
      features: { title: "주요 구현", text: "RunPod 추론 결과를 Spring Boot API가 소비하도록 연결하고, 게임 종료 시 생성되는 영상 정보와 QR 세션을 Redis 기반 조회 흐름으로 구성했습니다.", items: ["YOLO 탐지 결과와 Depth 데이터 결합", "AI 추론 API와 서비스 로직 연계", "Redis QR 세션 생성·조회", "영상 메타데이터와 다운로드 페이지 연결"] },
      decision: { title: "기술적 판단", text: "AI 추론, 확률 계산, 사용자 전달을 분리해 모델이나 집게 구조가 바뀌어도 각 처리 단계를 교체할 수 있도록 했습니다. 짧게 유지되는 QR 정보에는 Redis를 사용했습니다.", items: ["추론 계층과 서비스 로직 분리", "단기 세션 특성에 맞춘 Redis 활용", "모델·집게 구조 변경 가능성 고려", "Docker 기반 실행 환경 통일"] },
      result: { title: "문제 해결 및 배운 점", text: "QR 페이지의 404와 영상 연결 오류를 프론트 요청 경로, 백엔드 엔드포인트, 세션과 메타데이터 순으로 추적해 전체 흐름 관점에서 해결했습니다.", items: ["AI 결과를 실제 사용자 기능으로 연결", "QR 경로·세션·영상 데이터 단계별 점검", "백엔드·AI·인프라 인터페이스 조율", "미디어 조회 장애의 원인 추적 경험"] },
    },
  },
  hearbe: {
    type: "팀 프로젝트 · Frontend / Backend API Collaboration",
    title: "HearBe",
    summary: "시각장애인과 저시력 사용자를 위한 쇼핑 플랫폼입니다. 화면 구현과 API 계약 검증을 담당하고, 실제 응답 누락을 찾아 백엔드 DTO까지 보완했습니다.",
    image: "./assets/ppt/image8.png",
    imageAlt: "HearBe 쇼핑 플랫폼 화면",
    github: "https://github.com/smoothie-99/visual-assistance-shopping-platform",
    tags: ["React", "Spring Boot", "Postman", "DTO", "JWT", "Redis"],
    role: "Frontend · Backend API 협업",
    team: "6인 팀",
    domain: "Accessibility · API Contract",
    architecture: [{ label: "React B Screen", icon: "react" }, { label: "Spring Boot REST API", icon: "spring" }, { label: "JPA Service DB", icon: "postgres" }],
    architectureNote: "MCP 데스크톱 앱과 FastAPI AI 서버도 동일 서비스 API에 연결되며, JWT·Redis Refresh Token과 공통 응답·예외 구조를 사용했습니다.",
    details: {
      overview: { title: "프로젝트 개요", text: "상품 탐색, 찜, 주문과 보호자 공유를 제공하는 접근성 중심 서비스입니다. 화면에 필요한 정보와 API 명세·실제 응답을 비교하며 연동 완성도를 높였습니다.", items: ["시각장애인·저시력 사용자용 화면", "회원·상품·찜·주문 도메인 연동", "요구사항·기능 명세와 API 계약 검토", "Postman 선검증 후 React 화면 연동"] },
      features: { title: "주요 구현", text: "GET /orders/me와 GET /wishlist 응답을 검증해 주문 시각·플랫폼·구매 링크와 상품 이미지·가격 등의 누락을 발견하고 Response DTO를 수정했습니다.", items: ["OrderListResponse·OrderItemResponse 필드 보완", "WishlistResponse 이미지·가격 필드 보완", "@JsonProperty와 생성자 구성 정리", "수정 API 재검증 후 화면 재연동"] },
      decision: { title: "기술적 판단", text: "화면 오류를 뒤늦게 추적하기보다 API 단위로 먼저 검증해 계약 차이를 조기에 발견했습니다. 역할 경계를 넘더라도 원인이 DTO에 있으면 백엔드 응답까지 직접 확인했습니다.", items: ["화면 요구사항을 기준으로 응답 완결성 점검", "명세·Postman·React 세 단계 비교", "공통 ApiResponse와 예외 구조 확인", "Docker 재빌드 후 동일 조건 재검증"] },
      result: { title: "성과 및 배운 점", text: "좋은 API는 내부 구현뿐 아니라 소비자가 필요한 정보를 정확히 전달해야 한다는 점을 배웠고, 프론트와 백엔드 사이를 잇는 협업 역량을 확보했습니다.", items: ["주문·찜 화면의 데이터 누락 해소", "문제 재현과 수정 범위를 구체적으로 공유", "API 소비자 관점에서 계약 품질 개선", "스택 트레이스의 Caused by부터 원인 추적"] },
    },
  },
  finance: {
    type: "개인 프로젝트 · 개발 중 · Product / Data / Mobile",
    title: "소울링 · 캐릭터 반응형 가계부",
    summary: "내가 쓴 돈과 선물·지원받은 돈을 구분해 기록하고, 월별 잔액에 따라 캐릭터가 반응하는 로컬 우선 금융 기록 앱입니다.",
    image: null,
    imageAlt: "소울링 가계부 콘셉트 화면",
    github: "https://github.com/smoothie-99/Integrated-Finance-Manager",
    tags: ["React Native", "TypeScript", "AsyncStorage", "Android Java"],
    role: "기획 · 설계 · 전체 구현",
    team: "개인 프로젝트",
    domain: "Local-first Data · Finance UX",
    architecture: [{ label: "React Native UI", icon: "react" }, { label: "FinanceContext", icon: "typescript" }, { label: "financeStorage", icon: "android" }, { label: "AsyncStorage", icon: "android" }],
    architectureNote: "finance.ts에서 월별 수입·지출·합계를 계산하고, 계산 결과를 캐릭터 상태와 캘린더 UI에 반영합니다. Android Java 버전은 SharedPreferences·JSON 구조로 병행 개발 중입니다.",
    details: {
      overview: { title: "프로젝트 개요", text: "단순 지출 합계가 아니라 사용자가 실제로 부담한 돈과 외부 지원 금액을 구분하는 문제에서 시작했습니다. 금융 상태를 캐릭터 반응으로 직관적으로 전달합니다.", items: ["통합·수입·지출 캘린더", "수입·지출 입력과 로컬 저장·삭제", "월별 수입·지출·잔액 계산", "잔액과 예산 상태에 따른 캐릭터 반응"] },
      features: { title: "현재 구현", text: "React Native 화면과 FinanceContext의 상태 관리를 분리하고, financeStorage가 AsyncStorage 입출력을 담당하도록 구성했습니다.", items: ["로컬 우선 거래 내역 저장", "월 변경에 따른 집계 갱신", "수입 캘린더 숨김 시 지출 임계값 적용", "React Native와 Android Java 버전 비교 개발"] },
      decision: { title: "기술적 판단", text: "초기 버전은 서버 없이도 즉시 사용할 수 있도록 로컬 우선 구조를 택했습니다. UI, 상태, 저장, 집계 책임을 나눠 향후 서버 동기화로 확장할 수 있게 했습니다.", items: ["UI와 저장소 접근 책임 분리", "컨텍스트 기반 단일 금융 상태 관리", "JSON 직렬화로 단순하고 투명한 저장", "향후 동기화·분석 기능 확장을 고려한 모듈화"] },
      result: { title: "진행 상황과 다음 단계", text: "핵심 입력·저장·집계·캐릭터 반응을 구현했으며 OCR과 자동 분류, 연간 분석 기능을 단계적으로 확장하고 있습니다.", items: ["월별 핵심 금융 흐름 구현", "잔액 변화의 감성적 피드백 제공", "Google ML Kit OCR 검토", "키워드 자동 분류와 연간 추이 분석 예정"] },
    },
  },
};

let activeProject = null;

function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  menuToggle?.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  menuToggle?.setAttribute("aria-expanded", String(open));
}

menuToggle?.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("active", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });
    projectCards.forEach((card) => {
      const categories = card.dataset.category?.split(" ") ?? [];
      card.classList.toggle("hidden", selected !== "all" && !categories.includes(selected));
    });
  });
});

function renderAllDetails(project) {
  const container = projectDialog.querySelector("[data-dialog-detail]");
  container.replaceChildren();
  Object.entries(project.details).forEach(([key, detail], index) => {
    const section = document.createElement("section");
    section.className = "dialog-detail-section";
    section.id = `detail-${key}`;
    section.dataset.detailSection = key;
    const number = document.createElement("span");
    number.className = "detail-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const title = document.createElement("h3");
    title.textContent = detail.title;
    const text = document.createElement("p");
    text.textContent = detail.text;
    const list = document.createElement("ul");
    detail.items.forEach((item) => {
      const entry = document.createElement("li");
      entry.textContent = item;
      list.append(entry);
    });
    section.append(number, title, text, list);
    container.append(section);
  });
}

function renderArchitecture(project) {
  const flow = projectDialog.querySelector("[data-dialog-architecture]");
  flow.replaceChildren();
  project.architecture.forEach((item, index) => {
    const node = document.createElement("span");
    node.className = "architecture-node";
    const logo = document.createElement("img");
    logo.src = architectureIcons[item.icon];
    logo.alt = "";
    const label = document.createElement("strong");
    label.textContent = item.label;
    node.append(logo, label);
    flow.append(node);
    if (index < project.architecture.length - 1) {
      const arrow = document.createElement("b");
      arrow.className = "architecture-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "→";
      flow.append(arrow);
    }
  });
  projectDialog.querySelector("[data-dialog-architecture-note]").textContent = project.architectureNote;
}

function openProject(projectKey) {
  activeProject = projects[projectKey];
  if (!activeProject || !projectDialog) return;
  projectDialog.querySelector("[data-dialog-type]").textContent = activeProject.type;
  projectDialog.querySelector("[data-dialog-title]").textContent = activeProject.title;
  projectDialog.querySelector("[data-dialog-summary]").textContent = activeProject.summary;
  projectDialog.querySelector("[data-dialog-role]").textContent = activeProject.role;
  projectDialog.querySelector("[data-dialog-team]").textContent = activeProject.team;
  projectDialog.querySelector("[data-dialog-domain]").textContent = activeProject.domain;

  const tagList = projectDialog.querySelector("[data-dialog-tags]");
  tagList.replaceChildren();
  activeProject.tags.forEach((tag) => {
    const item = document.createElement("li");
    item.textContent = tag;
    tagList.append(item);
  });

  const image = projectDialog.querySelector("[data-dialog-image]");
  const financeArt = projectDialog.querySelector("[data-dialog-finance]");
  image.hidden = !activeProject.image;
  financeArt.hidden = Boolean(activeProject.image);
  if (activeProject.image) {
    image.src = activeProject.image;
    image.alt = activeProject.imageAlt;
  } else {
    image.removeAttribute("src");
    image.alt = "";
  }

  const github = projectDialog.querySelector("[data-dialog-github]");
  github.hidden = !activeProject.github;
  if (activeProject.github) github.href = activeProject.github;
  else github.removeAttribute("href");

  renderArchitecture(activeProject);
  renderAllDetails(activeProject);
  detailJumps.forEach((item) => item.classList.toggle("active", item.dataset.detailJump === "overview"));
  if (!projectDialog.open) projectDialog.showModal();
  projectDialog.scrollTop = 0;
  document.body.classList.add("dialog-open");
}

projectCards.forEach((card) => {
  card.addEventListener("click", () => openProject(card.dataset.project));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(card.dataset.project);
    }
  });
});

detailJumps.forEach((button) => {
  button.addEventListener("click", () => {
    const target = projectDialog.querySelector(`#detail-${button.dataset.detailJump}`);
    if (!target) return;
    detailJumps.forEach((item) => item.classList.toggle("active", item === button));
    const top = target.getBoundingClientRect().top - projectDialog.getBoundingClientRect().top + projectDialog.scrollTop - 62;
    projectDialog.scrollTo({ top, behavior: "smooth" });
  });
});

function syncDetailNavigation() {
  if (!projectDialog?.open) return;
  const sections = [...projectDialog.querySelectorAll("[data-detail-section]")];
  const dialogTop = projectDialog.getBoundingClientRect().top + 96;
  let current = sections[0]?.dataset.detailSection;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= dialogTop) current = section.dataset.detailSection;
  });
  detailJumps.forEach((item) => item.classList.toggle("active", item.dataset.detailJump === current));
}

projectDialog?.addEventListener("scroll", syncDetailNavigation, { passive: true });

function closeDialog() {
  projectDialog?.close();
  document.body.classList.remove("dialog-open");
}

dialogClose?.addEventListener("click", closeDialog);
projectDialog?.addEventListener("close", () => document.body.classList.remove("dialog-open"));
projectDialog?.addEventListener("click", (event) => {
  if (event.target === projectDialog) closeDialog();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !projectDialog?.open) setMenu(false);
});
