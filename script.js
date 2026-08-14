const menuToggle = document.querySelector("[data-menu-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");
const navLinks = document.querySelectorAll(".nav-links a");
const projectDialog = document.querySelector("[data-project-dialog]");
const dialogClose = document.querySelector("[data-dialog-close]");
const detailTabs = document.querySelectorAll("[data-detail-tab]");
const contactForm = document.querySelector("[data-contact-form]");

const projects = {
  cook: {
    type: "팀 프로젝트 · Backend / Infra / Client",
    title: "내 요리를 부탁해",
    summary: "두 사용자가 서로 다른 정보로 협력하는 비대칭 요리 게임입니다. 인증, 데이터 저장, 배포 환경까지 연결했습니다.",
    tags: ["Java", "Spring Boot", "JPA", "PostgreSQL", "JWT", "Docker"],
    role: "Backend · Infra · Client",
    team: "6인 팀",
    domain: "Auth · Data · Deployment",
    details: {
      overview: {
        title: "프로젝트 개요",
        text: "게임의 사용자 흐름이 서버 데이터로 정확히 이어지도록 로그인부터 게임 결과, 해금 도감 저장과 조회, 배포 환경까지 담당했습니다.",
        items: ["JWT 기반 사용자 인증", "게임 결과와 해금 도감 데이터 관리", "클라이언트 API 연동", "Docker 기반 실행 환경 구성"],
      },
      features: {
        title: "주요 구현",
        text: "SecurityConfig를 중심으로 Stateless 인증·인가를 구성하고, Controller–Service–Repository 구조로 도메인 로직을 분리했습니다.",
        items: ["BCrypt 비밀번호 암호화", "JPA·PostgreSQL 저장 및 조회", "게임 성공 결과와 도감 반영", "절차적 맵 생성과 이동 경로 검증"],
      },
      decision: {
        title: "기술적 판단",
        text: "인증 상태를 서버 세션에 의존하지 않도록 JWT 방식을 적용하고, 연관된 데이터 변경은 트랜잭션 단위로 묶었습니다.",
        items: ["Stateless 인증 흐름", "DTO 기반 요청·응답 분리", "트랜잭션으로 데이터 일관성 관리", "Docker Compose로 실행 환경 통일"],
      },
      result: {
        title: "성과 및 배운 점",
        text: "기능 구현만으로 완료하지 않고 클라이언트 연동과 배포 환경 실행까지 확인하며 백엔드의 책임 범위를 체감했습니다.",
        items: ["인증부터 배포까지 전체 흐름 경험", "도메인 데이터 저장 규칙 구체화", "클라이언트와 API 계약 협업", "운영 환경을 고려한 구현 경험"],
      },
    },
  },
  jipchak: {
    type: "팀 프로젝트 · Infra / Backend / AI Integration",
    title: "JipChak",
    summary: "인형뽑기 성공 확률을 시각화하고 게임 영상을 QR로 제공하는 서비스입니다. AI 결과와 서버 기능을 연결했습니다.",
    tags: ["Spring Boot", "Redis", "Docker", "RunPod", "YOLO"],
    role: "Infra · Backend · AI",
    team: "5인 팀",
    domain: "Session · Media · AI API",
    details: {
      overview: {
        title: "프로젝트 개요",
        text: "AI 추론 결과와 녹화 영상을 사용자가 실제로 확인할 수 있도록 백엔드 API, Redis 세션, AWS 환경을 연결했습니다.",
        items: ["성공 확률 결과 제공", "게임 영상 QR 조회", "Redis 기반 세션 관리", "Docker·AWS 실행 환경 구성"],
      },
      features: {
        title: "주요 구현",
        text: "RunPod 추론 결과가 백엔드 API를 거쳐 웹에 전달되고, 게임 종료 후 영상 메타데이터와 QR 세션이 조회되는 흐름을 구성했습니다.",
        items: ["AI 추론 API 연계", "QR 세션 생성 및 조회", "녹화 영상 메타데이터 흐름", "2발·3발 집게별 확률 계산"],
      },
      decision: {
        title: "기술적 판단",
        text: "모델 파일과 집게 구조가 바뀌어도 확률 계산 단계를 교체할 수 있도록 추론과 계산 흐름을 분리했습니다.",
        items: ["추론 결과와 서비스 로직 분리", "Redis를 활용한 단기 세션 관리", "모델·집게 구조 교체 가능성 고려", "Depth 데이터와 탐지 결과 결합"],
      },
      result: {
        title: "성과 및 배운 점",
        text: "AI 모델 자체보다 결과를 안정적인 사용자 기능으로 만드는 서버와 인프라의 연결이 중요하다는 점을 배웠습니다.",
        items: ["AI 결과의 서비스화 경험", "세션과 미디어 데이터 흐름 이해", "백엔드·AI·인프라 간 인터페이스 조율", "재사용 가능한 처리 단계 설계"],
      },
    },
  },
  hearbe: {
    type: "팀 프로젝트 · Frontend / API Collaboration",
    title: "HearBe",
    summary: "시각장애인과 저시력 사용자를 위한 음성 쇼핑 플랫폼입니다. API 소비자 관점에서 응답 계약을 검증했습니다.",
    tags: ["API Specification", "Postman", "DTO", "React", "Collaboration"],
    role: "Frontend · API 검증",
    team: "6인 팀",
    domain: "API Contract · Accessibility",
    details: {
      overview: {
        title: "프로젝트 개요",
        text: "프론트엔드를 담당했지만 화면 구현에 머무르지 않고 API 명세와 실제 응답을 비교해 연동에 필요한 데이터가 완결되어 있는지 검증했습니다.",
        items: ["시각장애인·저시력 사용자 화면", "회원·주문·찜·장바구니 연동", "입력 유효성 검사", "API 요청·응답 항목 협의"],
      },
      features: {
        title: "주요 구현",
        text: "Postman으로 API를 먼저 검증한 뒤 화면에 연동하고, 주문 상세와 찜 상품 정보에서 누락된 응답 데이터를 발견했습니다.",
        items: ["API 사전 검증", "응답 데이터 누락 발견", "Response·DTO 보완 협업", "수정 API 재검증 및 화면 연동"],
      },
      decision: {
        title: "기술적 판단",
        text: "화면에서 오류를 뒤늦게 추적하기보다 API 단위로 먼저 검증해 백엔드 응답과 프론트 요구사항의 차이를 조기에 확인했습니다.",
        items: ["API 계약 우선 확인", "화면 요구사항 기준 응답 검토", "문제 재현 절차 공유", "수정 전후 동일 조건 검증"],
      },
      result: {
        title: "성과 및 배운 점",
        text: "좋은 API는 서버 내부 구현뿐 아니라 소비자가 필요한 정보를 정확히 전달해야 한다는 점을 배웠습니다.",
        items: ["API 소비자 관점 확보", "백엔드와 구체적인 협업 경험", "데이터 계약의 중요성 이해", "접근성 요구사항을 기능으로 구체화"],
      },
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !projectDialog?.open) setMenu(false);
});

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

function renderDetail(section) {
  if (!activeProject) return;
  const detail = activeProject.details[section];
  const container = projectDialog.querySelector("[data-dialog-detail]");
  container.replaceChildren();

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

  container.append(title, text, list);
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

  detailTabs.forEach((tab) => {
    const isOverview = tab.dataset.detailTab === "overview";
    tab.classList.toggle("active", isOverview);
    tab.setAttribute("aria-selected", String(isOverview));
  });
  renderDetail("overview");
  projectDialog.showModal();
  document.body.classList.add("dialog-open");
}

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});

detailTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    detailTabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });
    renderDetail(tab.dataset.detailTab);
  });
});

function closeDialog() {
  projectDialog?.close();
  document.body.classList.remove("dialog-open");
}

dialogClose?.addEventListener("click", closeDialog);
projectDialog?.addEventListener("close", () => document.body.classList.remove("dialog-open"));
projectDialog?.addEventListener("click", (event) => {
  if (event.target === projectDialog) closeDialog();
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const subject = encodeURIComponent(`[포트폴리오 문의] ${data.get("subject")}`);
  const body = encodeURIComponent(`이름: ${data.get("name")}\n이메일: ${data.get("email")}\n\n${data.get("message")}`);
  window.location.href = `mailto:flysky1114@gmail.com?subject=${subject}&body=${body}`;
});
