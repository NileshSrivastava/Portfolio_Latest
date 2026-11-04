/**
 * NILESH SRIVASTAVA PORTFOLIO - JAVASCRIPT CONTROLLER
 * Features: Dark/Light Mode, Typewriter, Mobile Menu, Filter Tabs,
 * Resume Modal, Form Validation, and Scroll Spy.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Theme Toggle (Dark / Light)
  initTheme();

  // 2. Typewriter Effect in Hero
  initTypewriter();

  // 3. Navigation Scroll Effects & Scroll-Spy
  initNavigation();

  // 4. Mobile Menu Drawer
  initMobileMenu();

  // 5. Skills Category Filter Tabs
  initSkillsFilter();

  // 6. Resume Modal & Print
  initResumeModal();

  // 7. Contact Form Handling & Validation
  initContactForm();

  // 8. Back to Top Button
  initBackToTop();

  // 9. Dynamic Year
  const yearElem = document.getElementById("current-year");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
});

/* --------------------------------------------------------------------------
   1. Theme Management (Dark / Light)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set initial theme (default to dark for modern DevOps aesthetic)
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? "dark" : "dark");
  document.documentElement.setAttribute("data-theme", initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  }
}

/* --------------------------------------------------------------------------
   2. Typewriter Animation
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const typewriterElement = document.getElementById("typewriter");
  if (!typewriterElement) return;

  const words = [
    "DevOps Engineer",
    "Kubernetes & MicroK8s Specialist",
    "Docker & APM Microservices Architect",
    "OpenTelemetry & Observability Expert",
    "Linux & Cloud Infrastructure Engineer",
    "Web Developer (React, JavaScript)"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 85;
  const deletingSpeed = 45;
  const pauseBetweenWords = 1900;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

/* --------------------------------------------------------------------------
   3. Navbar Scroll Shadow & Scroll-Spy
   -------------------------------------------------------------------------- */
function initNavigation() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Scroll-Spy: Active Link Highlighting
    let currentSectionId = "";
    const scrollPosition = window.scrollY + 160;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Mobile Hamburger & Slideout Drawer
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (!mobileToggle || !mobileDrawer) return;

  function toggleDrawer(open) {
    const shouldOpen = open !== undefined ? open : !mobileDrawer.classList.contains("open");
    mobileDrawer.classList.toggle("open", shouldOpen);
    mobileToggle.classList.toggle("open", shouldOpen);
    mobileToggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  }

  mobileToggle.addEventListener("click", () => toggleDrawer());

  // Close when clicking any link
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => toggleDrawer(false));
  });

  // Close when clicking outside drawer
  document.addEventListener("click", (e) => {
    if (
      mobileDrawer.classList.contains("open") &&
      !mobileDrawer.contains(e.target) &&
      !mobileToggle.contains(e.target)
    ) {
      toggleDrawer(false);
    }
  });
}

/* --------------------------------------------------------------------------
   5. Skills Filter Tabs
   -------------------------------------------------------------------------- */
function initSkillsFilter() {
  const filterTabs = document.querySelectorAll(".filter-tab");
  const skillCards = document.querySelectorAll(".skill-card");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const filter = tab.getAttribute("data-filter");

      skillCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
          // Re-trigger animation
          const bar = card.querySelector(".skill-progress-bar");
          if (bar) {
            const originalWidth = bar.style.width;
            bar.style.width = "0%";
            setTimeout(() => {
              bar.style.width = originalWidth;
            }, 60);
          }
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. Interactive Resume Modal
   -------------------------------------------------------------------------- */
function initResumeModal() {
  const modal = document.getElementById("resume-modal");
  const openHeroBtn = document.getElementById("open-resume-modal");
  const openAboutBtn = document.getElementById("about-resume-preview-btn");
  const closeBtn = document.getElementById("close-resume-modal");
  const printBtn = document.getElementById("print-resume-btn");

  if (!modal) return;

  function openModal() {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (openHeroBtn) openHeroBtn.addEventListener("click", openModal);
  if (openAboutBtn) openAboutBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Close when clicking backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Print button
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

/* --------------------------------------------------------------------------
   7. Contact Form Handling & Validation
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("form-name");
  const emailInput = document.getElementById("form-email");
  const subjectInput = document.getElementById("form-subject");
  const messageInput = document.getElementById("form-message");
  const submitBtn = document.getElementById("submit-btn");
  const successBanner = document.getElementById("form-success");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function checkField(input, isValid, errorElemId) {
    const group = input.closest(".form-group");
    if (!isValid) {
      group.classList.add("has-error");
      return false;
    } else {
      group.classList.remove("has-error");
      return true;
    }
  }

  // Remove error on input
  [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
    if (input) {
      input.addEventListener("input", () => {
        input.closest(".form-group").classList.remove("has-error");
      });
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameValid = checkField(nameInput, nameInput.value.trim().length >= 2, "name-error");
    const isEmailValid = checkField(emailInput, validateEmail(emailInput.value.trim()), "email-error");
    const isSubjectValid = checkField(subjectInput, subjectInput.value.trim().length >= 2, "subject-error");
    const isMessageValid = checkField(messageInput, messageInput.value.trim().length >= 10, "message-error");

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      return;
    }

    // Visual button loading state
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;

    // Simulate sending message (network latency simulation)
    setTimeout(() => {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      
      // Show confirmation banner
      if (successBanner) {
        successBanner.classList.add("visible");
      }

      // Reset form fields
      form.reset();

      // Automatically hide banner after 6 seconds
      setTimeout(() => {
        if (successBanner) {
          successBanner.classList.remove("visible");
        }
      }, 6000);
    }, 1200);
  });
}

/* --------------------------------------------------------------------------
   8. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
