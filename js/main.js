document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");
  const editorialBtn = document.getElementById("editorial-btn");
  const editorialList = document.getElementById("editorial-list");
  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    this.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    body.classList.toggle("menu-open");
  });
  editorialBtn.addEventListener("click", function (e) {
    e.preventDefault();
    editorialList.classList.toggle("open");

    if (editorialList.classList.contains("open")) {
      this.innerHTML = "EDITORIAL ▾";
    }
  });
});

document.addEventListener("scroll", function () {
  const mainTitle = document.getElementById("main-title");
  const overlayTexts = document.querySelectorAll(".overlay-text");
  const gap = 30;
  if (!mainTitle) return;

  const titleRect = mainTitle.getBoundingClientRect();
  const titleBottom = titleRect.bottom;

  overlayTexts.forEach((text) => {
    const parent =
      text.closest(".product-image-container-with-overlay-text") ||
      text.closest(".product-video-container");
    const parentRect = parent.getBoundingClientRect();

    const textCenter = parentRect.top + parentRect.height / 2;

    if (titleBottom + gap > textCenter) {
      let diff = titleBottom + gap - textCenter;

      const maxScroll = parentRect.height * 0.4;
      if (diff > maxScroll) diff = maxScroll;

      text.style.transform = `translate(-50%, calc(-50% + ${diff}px))`;
    } else {
      text.style.transform = `translate(-50%, -50%)`;
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".hover-video");

  videoContainers.forEach((container) => {
    const video = container.querySelector("video");

    container.addEventListener("mouseenter", () => {
      video.play();
    });

    container.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0; // ย้อนกลับไปเริ่มใหม่ (ถ้าต้องการ)
    });
  });
});

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");
    faqItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
    });
    if (!isOpen) {
      item.classList.add("active");
    }
  });
});

const langBtn = document.getElementById("lang-btn");
const langDropdown = document.getElementById("lang-dropdown");

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle("show");
});

function changeLang(text) {
  langBtn.innerHTML = `${text} ▾`;
  langDropdown.classList.remove("show");
}

window.addEventListener("click", () => {
  if (langDropdown.classList.contains("show")) {
    langDropdown.classList.remove("show");
  }
});
