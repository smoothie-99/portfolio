const menuToggle = document.querySelector("[data-menu-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");
const navLinks = document.querySelectorAll(".nav-links a");

menuToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-label", "메뉴 열기");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  document.body.classList.remove("menu-open");
  menuToggle?.setAttribute("aria-label", "메뉴 열기");
  menuToggle?.setAttribute("aria-expanded", "false");
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
      const shouldShow = selected === "all" || categories.includes(selected);
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});
