/**
 * NAINA TECHNOLOGIES - MOBILE APP DEVELOPMENT BLOG
 * Interactive Script: Sliders (Swiper 11), Cost Calculator, Reading Bar, Modals, Search
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // ==========================================
  // 1. Reading Progress Bar
  // ==========================================
  const progressBar = document.getElementById('readingProgressBar');
  window.addEventListener('scroll', function () {
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / docHeight) * 100;
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }

    // Sticky Header Effect
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
      if (window.scrollY > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  // Back to top click
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // Navbar Interactivity: Active Highlighting & Mobile Auto-Close
  // ==========================================
  const nainaNavCollapse = document.getElementById('nainaNavbarNav');
  const nainaNavLinks = document.querySelectorAll('#nainaNavbarNav a.nav-link:not(.dropdown-toggle), #nainaNavbarNav .mega-menu-card, #nainaNavbarNav .mega-menu-viewall');
  
  nainaNavLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (nainaNavCollapse && nainaNavCollapse.classList.contains('show') && window.bootstrap) {
        const bsCollapse = bootstrap.Collapse.getInstance(nainaNavCollapse) || new bootstrap.Collapse(nainaNavCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });

  // Active section scrollspy
  const nainaSectionIds = ['hero', 'services', 'process', 'technologies', 'portfolio', 'industries', 'contact'];
  const nainaNavMap = {
    'hero': 'a[href="#hero"]',
    'services': '#servicesDropdown',
    'process': 'a[href="#process"]',
    'technologies': 'a[href="#technologies"]',
    'portfolio': 'a[href="#portfolio"]',
    'industries': '#solutionsDropdown',
    'contact': 'a[href="#contact"]'
  };

  function updateNainaActiveNav() {
    const scrollPos = window.scrollY + 130;
    let currentId = 'hero';

    nainaSectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentId = id;
        }
      }
    });

    document.querySelectorAll('#nainaNavbarNav .nav-link').forEach(link => {
      link.classList.remove('active');
    });

    const activeSelector = nainaNavMap[currentId];
    if (activeSelector) {
      const activeLink = document.querySelector('#nainaNavbarNav ' + activeSelector);
      if (activeLink) activeLink.classList.add('active');
    }
  }

  window.addEventListener('scroll', updateNainaActiveNav, { passive: true });
  updateNainaActiveNav();

  // ==========================================
  // 2. Swiper: Featured / Hero Story Slider
  // ==========================================
  if (document.querySelector('.swiper-featured')) {
    new Swiper('.swiper-featured', {
      loop: true,
      speed: 700,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      navigation: {
        nextEl: '.swiper-featured-next',
        prevEl: '.swiper-featured-prev',
      },
      pagination: {
        el: '.swiper-featured-pagination',
        clickable: true,
      },
    });

  }

  // ==========================================
  // 3. Swiper: Mobile App Showcase Slider
  // ==========================================
  if (document.querySelector('.swiper-app-showcase')) {
    new Swiper('.swiper-app-showcase', {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.swiper-showcase-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-showcase-next',
        prevEl: '.swiper-showcase-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });

  }

  // ==========================================
  // 4. Swiper: Tech Stack Marquee Continuous Slider
  // ==========================================
  if (document.querySelector('.swiper-tech-stack')) {
    new Swiper('.swiper-tech-stack', {
      slidesPerView: 2,
      spaceBetween: 16,
      loop: true,
      freeMode: true,
      speed: 2500,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 7,
        },
        1200: {
          slidesPerView: 8,
        }
      }
    });

  }

  // ==========================================
  // 5. Swiper: Client Testimonials Slider
  // ==========================================
  if (document.querySelector('.swiper-testimonials')) {
    new Swiper('.swiper-testimonials', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-testi-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        }
      }
    });

  }

  // ==========================================
  // 6. Swiper: Related Posts Slider
  // ==========================================
  if (document.querySelector('.swiper-related-posts')) {
    new Swiper('.swiper-related-posts', {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: false,
      navigation: {
        nextEl: '.swiper-related-next',
        prevEl: '.swiper-related-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });

  }

  // ==========================================
  // 7. Interactive Mobile App Cost & Timeline Estimator
  // ==========================================
  const basePrices = {
    'mvp': { usd: 4500, inr: 375000, weeks: 4, name: 'MVP Quick Launch' },
    'cross': { usd: 8500, inr: 710000, weeks: 8, name: 'Cross-Platform (Flutter / React Native)' },
    'native': { usd: 14500, inr: 1200000, weeks: 12, name: 'Dedicated Native (Swift + Kotlin)' },
    'enterprise': { usd: 24000, inr: 2000000, weeks: 16, name: 'Enterprise Cloud-Scale App' }
  };

  const featureCosts = {
    'push': { usd: 450, inr: 38000, days: 3 },
    'payments': { usd: 900, inr: 75000, days: 5 },
    'chat': { usd: 1200, inr: 100000, days: 7 },
    'ai': { usd: 2200, inr: 185000, days: 10 },
    'iot': { usd: 2800, inr: 235000, days: 12 },
    'admin': { usd: 1600, inr: 135000, days: 8 },
    'biometric': { usd: 500, inr: 42000, days: 3 },
    'offline': { usd: 950, inr: 80000, days: 5 }
  };

  function updateCostEstimate() {
    const selectedType = document.querySelector('input[name="appType"]:checked');
    if (!selectedType) return;

    const baseKey = selectedType.value;
    const base = basePrices[baseKey] || basePrices['cross'];

    let totalUsd = base.usd;
    let totalInr = base.inr;
    let extraDays = 0;

    const featureCheckboxes = document.querySelectorAll('.feature-checkbox:checked');
    featureCheckboxes.forEach(cb => {
      const featKey = cb.value;
      if (featureCosts[featKey]) {
        totalUsd += featureCosts[featKey].usd;
        totalInr += featureCosts[featKey].inr;
        extraDays += featureCosts[featKey].days;
      }
    });


    const totalWeeks = Math.ceil(base.weeks + (extraDays / 5));

    const estValueEl = document.getElementById('calcEstimatedPrice');
    const estTimeEl = document.getElementById('calcEstimatedDuration');
    const estInrEl = document.getElementById('calcEstimatedInr');

    if (estValueEl) {
      estValueEl.innerText = '$' + totalUsd.toLocaleString();
    }
    if (estInrEl) {
      estInrEl.innerText = '(₹' + totalInr.toLocaleString() + ' approx)';
    }
    if (estTimeEl) {
      estTimeEl.innerText = 'Estimated Sprint Duration: ' + totalWeeks + ' - ' + (totalWeeks + 2) + ' Weeks';
    }
  }

  // Bind change listeners to radio buttons & checkboxes
  const appTypeRadios = document.querySelectorAll('input[name="appType"]');
  appTypeRadios.forEach(r => r.addEventListener('change', updateCostEstimate));

  const featureCheckboxes = document.querySelectorAll('.feature-checkbox');
  featureCheckboxes.forEach(c => c.addEventListener('change', updateCostEstimate));

  // Run initial calculation
  updateCostEstimate();

  // Handle "Request Full Scope Breakdown"
  const requestEstimateBtn = document.getElementById('requestEstimateBtn');
  if (requestEstimateBtn) {
    requestEstimateBtn.addEventListener('click', function () {
      const selectedType = document.querySelector('input[name="appType"]:checked');
      const appTypeName = selectedType ? selectedType.parentElement.textContent.trim() : 'Custom App';
      const estimateVal = document.getElementById('calcEstimatedPrice') ? document.getElementById('calcEstimatedPrice').innerText : '$8,500+';

      const auditModal = new bootstrap.Modal(document.getElementById('auditModal'));
      const modalProjectNotes = document.getElementById('modalProjectNotes');
      if (modalProjectNotes) {
        modalProjectNotes.value = `Selected Concept: ${appTypeName} | Estimated Budget: ${estimateVal}`;
      }
      auditModal.show();
    });

  }

  // ==========================================
  // 8. Table of Contents Scrollspy & Toggle
  // ==========================================
  const tocHeader = document.querySelector('.toc-header');
  const tocList = document.querySelector('.toc-list');
  if (tocHeader && tocList) {
    tocHeader.addEventListener('click', function () {
      const isHidden = tocList.style.display === 'none';
      tocList.style.display = isHidden ? 'block' : 'none';
      const icon = tocHeader.querySelector('.toc-toggle-icon');
      if (icon) {
        icon.className = isHidden ? 'bi bi-chevron-up toc-toggle-icon' : 'bi bi-chevron-down toc-toggle-icon';
      }
    });

  }

  // Smooth scroll for TOC links
  const tocLinks = document.querySelectorAll('.toc-list a');
  tocLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

      }
    });

  });

  // ==========================================
  // 9. Interactive Comments Handler
  // ==========================================
  const commentForm = document.getElementById('blogCommentForm');
  if (commentForm) {
    commentForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nameInput = document.getElementById('commentAuthorName');
      const emailInput = document.getElementById('commentAuthorEmail');
      const messageInput = document.getElementById('commentText');

      if (!nameInput.value.trim() || !messageInput.value.trim()) {
        alert('Please fill in your name and comment message.');
        return;
      }

      const commentList = document.getElementById('commentsContainer');
      const newComment = document.createElement('li');
      newComment.className = 'comment-item';
      newComment.style.opacity = '0';
      newComment.style.transform = 'translateY(15px)';
      newComment.style.transition = 'all 0.4s ease';

      const initial = nameInput.value.trim().charAt(0).toUpperCase();

      newComment.innerHTML = `
        <div class="comment-avatar d-flex align-items-center justify-content-center text-white fw-bold" style="background: var(--gradient-brand); font-size: 1.2rem;">
          ${initial}
        </div>
        <div class="comment-content flex-grow-1">
          <div class="d-flex align-items-center justify-content-between mb-1">
            <h6 class="comment-author-name mb-0">${escapeHtml(nameInput.value.trim())}</h6>
            <span class="badge bg-success-subtle text-success border border-success-subtle" style="font-size: 0.72rem;">Verified Just Now</span>
          </div>
          <div class="comment-date text-muted mb-2">Today at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          <p class="comment-body">${escapeHtml(messageInput.value.trim())}</p>
          <span class="comment-reply-btn"><i class="bi bi-reply-fill me-1"></i>Reply</span>
        </div>
      `;

      if (commentList) {
        commentList.prepend(newComment);
        setTimeout(() => {
          newComment.style.opacity = '1';
          newComment.style.transform = 'translateY(0)';
        }, 50);

        // Update comment counter
        const countBadge = document.getElementById('commentCountBadge');
        if (countBadge) {
          const currentCount = parseInt(countBadge.innerText) || 0;
          countBadge.innerText = (currentCount + 1).toString();
        }
      }

      // Reset form
      commentForm.reset();

      // Show alert toast
      showNotification('Thank you! Your insight has been published to the discussion.', 'success');
    });

  }

  // ==========================================
  // 10. Social Share & Copy Link Handler
  // ==========================================
  const copyLinkBtns = document.querySelectorAll('.copy-link-btn');
  copyLinkBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const currentUrl = window.location.href;
      navigator.clipboard.writeText(currentUrl).then(() => {
        showNotification('Article link copied to clipboard!', 'info');
      }).catch(() => {
        showNotification('Link copied: ' + currentUrl, 'info');
      });

    });

  });

  // Bookmark Toggle
  const bookmarkBtn = document.getElementById('bookmarkPostBtn');
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', function () {
      const icon = this.querySelector('i');
      if (icon.classList.contains('bi-bookmark')) {
        icon.classList.remove('bi-bookmark');
        icon.classList.add('bi-bookmark-fill');
        this.classList.add('text-primary');
        showNotification('Saved to your reading list!', 'info');
      } else {
        icon.classList.remove('bi-bookmark-fill');
        icon.classList.add('bi-bookmark');
        this.classList.remove('text-primary');
        showNotification('Removed from reading list.', 'info');
      }
    });

  }

  // ==========================================
  // 11. Search Overlay Modal
  // ==========================================
  const searchTriggers = document.querySelectorAll('.trigger-search-modal');
  const searchOverlay = document.getElementById('searchModalOverlay');
  const closeSearchBtn = document.getElementById('closeSearchModal');
  const searchInput = document.getElementById('modalSearchInput');
  const searchResultsBox = document.getElementById('modalSearchResults');

  const sampleSearchDatabase = [
    { title: 'Android App Development with Kotlin & Jetpack Compose', cat: 'Services', url: '#services' },
    { title: 'iOS App Development with Swift & SwiftUI', cat: 'Services', url: '#services' },
    { title: 'Cross-Platform Flutter & React Native Development', cat: 'Services', url: '#services' },
    { title: 'Flutter App Development with Google Impeller', cat: 'Services', url: '#services' },
    { title: 'React Native Development with Fabric & TurboModules', cat: 'Services', url: '#services' },
    { title: 'Custom Mobile App Development & IoT Integration', cat: 'Services', url: '#services' },
    { title: 'UI/UX Design for Mobile Apps & Interactive Prototypes', cat: 'Services', url: '#services' },
    { title: 'App Maintenance & 24/7 SLA Support', cat: 'Services', url: '#services' },
    { title: 'Why Choose Naina Technologies: Performance, Security & Scale', cat: 'Why Us', url: '#why-us' },
    { title: 'Our 6-Step Mobile Engineering Process: Discovery to Launch', cat: 'Process', url: '#process' },
    { title: 'Technologies We Use: Flutter, React Native, Kotlin, Swift', cat: 'Technologies', url: '#technologies' },
    { title: 'Recent Mobile App Showcases & Smartphone Mockups', cat: 'Portfolio', url: '#portfolio' },
    { title: 'App UI/UX Design System & 3D Showcase', cat: 'Showcase', url: '#showcase' },
    { title: 'Industries We Serve: FinTech, HealthTech, E-Commerce, Logistics', cat: 'Industries', url: '#industries' },
    { title: 'Book Free Architecture Consultation & Estimate', cat: 'Contact', url: '#contact' }
  ];

  searchTriggers.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (searchOverlay) {
        searchOverlay.classList.add('active');
        if (searchInput) {
          setTimeout(() => searchInput.focus(), 150);
        }
      }
    });

  });

  if (closeSearchBtn && searchOverlay) {
    closeSearchBtn.addEventListener('click', function () {
      searchOverlay.classList.remove('active');
    });


    searchOverlay.addEventListener('click', function (e) {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
      }
    });

  }

  if (searchInput && searchResultsBox) {
    searchInput.addEventListener('input', function () {
      const q = this.value.toLowerCase().trim();
      if (!q) {
        searchResultsBox.innerHTML = '<p class="text-muted small">Type a keyword like "Flutter", "Security", or "Cost" to search...</p>';
        return;
      }

      const filtered = sampleSearchDatabase.filter(item =>
        item.title.toLowerCase().includes(q) || item.cat.toLowerCase().includes(q)
      );

      if (filtered.length === 0) {
        searchResultsBox.innerHTML = `<div class="p-3 text-center text-muted">No articles found matching "<strong>${escapeHtml(q)}</strong>".</div>`;
      } else {
        searchResultsBox.innerHTML = filtered.map(item => `
          <a href="${item.url}" class="d-flex align-items-center justify-content-between p-3 mb-2 rounded bg-light text-decoration-none search-result-item" onclick="document.getElementById('searchModalOverlay').classList.remove('active');">
            <div>
              <span class="badge bg-primary-subtle text-primary me-2">${item.cat}</span>
              <strong class="text-dark">${item.title}</strong>
            </div>
            <i class="bi bi-arrow-right text-primary"></i>
          </a>
        `).join('');
      }
    });

  }

  // ==========================================
  // 12. SeoLab Agency Upgraded Sliders & Counters
  // ==========================================

  // Hero Agency Slider (Slide 1, Slide 2, Slide 3)
  if (document.querySelector('.swiper-agency-hero')) {
    new Swiper('.swiper-agency-hero', {
      loop: true,
      speed: 800,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      navigation: {
        nextEl: '.swiper-agency-hero-next',
        prevEl: '.swiper-agency-hero-prev',
      },
      pagination: {
        el: '.swiper-agency-hero-pagination',
        clickable: true,
      },
      keyboard: {
        enabled: true,
      }
    });

  }

  // Services Carousel (6 Services)
  if (document.querySelector('.swiper-agency-services')) {
    new Swiper('.swiper-agency-services', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.swiper-services-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-services-next',
        prevEl: '.swiper-services-prev',
      },
      breakpoints: {
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1200: { slidesPerView: 3.2 }
      }
    });

  }

  // Portfolio Slider
  if (document.querySelector('.swiper-agency-portfolio')) {
    new Swiper('.swiper-agency-portfolio', {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.swiper-portfolio-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-portfolio-next',
        prevEl: '.swiper-portfolio-prev',
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });

  }

  // Industries Slider
  if (document.querySelector('.swiper-agency-industries')) {
    new Swiper('.swiper-agency-industries', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-industries-pagination',
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
      }
    });

  }

  // Agency Testimonials Slider
  if (document.querySelector('.swiper-agency-testimonials')) {
    new Swiper('.swiper-agency-testimonials', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-agency-testi-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-agency-testi-next',
        prevEl: '.swiper-agency-testi-prev',
      },
      breakpoints: {
        768: { slidesPerView: 2 }
      }
    });

  }

  // Agency Blog Slider
  if (document.querySelector('.swiper-agency-blog')) {
    new Swiper('.swiper-agency-blog', {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: false,
      pagination: {
        el: '.swiper-agency-blog-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-agency-blog-next',
        prevEl: '.swiper-agency-blog-prev',
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });

  }

  // Statistics Animated Counters
  const counterElements = document.querySelectorAll('[data-counter]');
  if (counterElements.length > 0) {
    let counted = false;
    const statsSection = document.querySelector('.stats-section');

    const animateCounters = () => {
      counterElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-counter'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.innerText = target + suffix;
            clearInterval(timer);
          } else {
            el.innerText = Math.floor(current) + suffix;
          }
        }, stepTime);
      });

    };

    if ('IntersectionObserver' in window && statsSection) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !counted) {
          counted = true;
          animateCounters();
        }
      }, { threshold: 0.3 });
      observer.observe(statsSection);
    } else {
      animateCounters();
    }
  }

  // ==========================================
  // 13. Mobile App Development Exclusive Automatic Sliders
  // ==========================================

  // Hero Mobile Slider (4 Slides, Automatic 4.5s)
  if (document.querySelector('.swiper-hero-mobile')) {
    new Swiper('.swiper-hero-mobile', {
      loop: true,
      speed: 850,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      navigation: {
        nextEl: '.swiper-hero-mobile-next',
        prevEl: '.swiper-hero-mobile-prev',
      },
      pagination: {
        el: '.swiper-hero-mobile-pagination',
        clickable: true,
      },
      keyboard: { enabled: true }
    });

  }

  // Mobile Services Slider (8 Services, Automatic 3.5s)
  if (document.querySelector('.swiper-services-mobile')) {
    new Swiper('.swiper-services-mobile', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.swiper-services-mobile-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-services-mobile-next',
        prevEl: '.swiper-services-mobile-prev',
      },
      breakpoints: {
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
      }
    });


    // Comprehensive Service Matter Data Dictionary
    const servicesMatterData = {
      android: {
        badge: '<i class="fa-brands fa-android me-1 text-success"></i> Native Android Ecosystem • Kotlin 2.0',
        subbadge: '<i class="bi bi-cpu-fill me-1"></i> Jetpack Compose & MVI Architecture',
        title: 'Native Android Engineering: High-Speed Kotlin & Reactive UI',
        desc1: 'We engineer scalable, high-concurrency Android applications utilizing Kotlin 2.0 and Jetpack Compose. By transitioning away from legacy XML view hierarchies to purely declarative Kotlin UI components, our Android codebases achieve zero-allocation re-composition, fluid 120 FPS animations, and strict modular separation across Domain, Data, and Presentation layers.',
        desc2: 'Every application is engineered with offline-first persistence using Google’s Room SQLite database with automated migration schemas, non-blocking asynchronous event streaming via Kotlin Coroutines and StateFlow, and background worker synchronization via WorkManager.',
        specs: [
          { icon: 'bi-palette2 text-success', title: 'Modern Declarative UI', desc: 'Jetpack Compose, Material 3 design system, dynamic theme generation, and adaptive layouts tailored for foldables and tablets.' },
          { icon: 'bi-shield-check text-primary', title: 'Hardware-Level Security', desc: 'BiometricPrompt (fingerprint & face ID), hardware-backed Android Keystore cryptography, and EncryptedSharedPreferences.' },
          { icon: 'bi-wifi-off text-info', title: 'Offline-First Architecture', desc: 'Room SQLite database with type converters, Retrofit 2/Ktor networking, and background task sync via WorkManager.' },
          { icon: 'bi-google-play text-warning', title: 'Google Play Deployment', desc: 'Android 15 (Target SDK 35) compliance, Play Feature Delivery (.aab), In-App Billing v6, and ProGuard / R8 code obfuscation.' }
        ],
        tags: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Room DB', 'Android 15']
      },
      ios: {
        badge: '<i class="fa-brands fa-apple me-1 text-warning"></i> Native Apple Ecosystem • Swift 6 & SwiftUI',
        subbadge: '<i class="bi bi-apple me-1"></i> ProMotion 120Hz & Secure Enclave',
        title: 'Native iOS Engineering: Swift 6 & Apple Human Interface Precision',
        desc1: 'We craft native iOS applications built with Swift 6 and SwiftUI, engineered specifically for iPhone, iPad, Apple Watch, and Vision Pro. Our engineering methodology leverages Swift Concurrency (async/await, Actors, Structured Tasks) to eliminate data races and deliver silky 120Hz ProMotion scroll performance.',
        desc2: 'We integrate directly with Apple hardware capabilities, including Secure Enclave Keychain encryption, Face ID / Touch ID authentication via LocalAuthentication, Apple Pay, HealthKit telemetry, and Apple Push Notification Service (APNs) with HTTP/2 multiplexing.',
        specs: [
          { icon: 'bi-display text-warning', title: 'SwiftUI & Modern Concurrency', desc: 'State-driven declarative UI components with fluid spring animations, backward OS compatibility, and dynamic type scaling.' },
          { icon: 'bi-shield-lock text-primary', title: 'Secure Enclave & Face ID', desc: 'Biometric authentication and private cryptographic key storage isolated inside Apple\'s dedicated Secure Enclave processor.' },
          { icon: 'bi-gpu-card text-info', title: 'Metal Graphics & CoreML', desc: 'Hardware-accelerated rendering with Metal shaders and low-latency on-device machine learning inference via CoreML.' },
          { icon: 'bi-app-indicator text-danger', title: 'App Store Readiness', desc: 'Strict Apple HIG adherence, App Tracking Transparency (ATT), TestFlight beta orchestration, and fast App Store approvals.' }
        ],
        tags: ['Swift 6', 'SwiftUI', 'Combine', 'HealthKit', 'Secure Enclave']
      },
      cross: {
        badge: '<i class="fa-solid fa-arrows-split-up-and-left me-1 text-info"></i> Shared Codebase • 95% Logic Reuse',
        subbadge: '<i class="bi bi-speedometer me-1"></i> Fast Time-to-Market & 45% Cost Reduction',
        title: 'Cross-Platform Engineering: Dual-Platform Reach with One Unified Core',
        desc1: 'Cross-platform mobile architecture enables enterprises to launch on both Google Android and Apple iOS from a unified codebase. By sharing 90%–95% of business logic, state machines, API integration layers, and offline models, companies cut development timelines by 40–50% and reduce long-term maintenance costs.',
        desc2: 'Our cross-platform engineering guarantees native-grade 60–120 FPS performance, automated dual-target CI/CD deployment pipelines, and automatic platform-adaptive UI styling so your app feels native whether used on an iPhone or an Android flagship.',
        specs: [
          { icon: 'bi-code-slash text-info', title: '95% Code Sharing', desc: 'Single source of truth for business logic, networking, analytics, and authentication across iOS and Android.' },
          { icon: 'bi-lightning-charge text-warning', title: 'Near-Native Performance', desc: 'Ahead-of-Time (AOT) compiled binaries delivering native GPU-accelerated 60-120 FPS responsiveness.' },
          { icon: 'bi-git text-primary', title: 'Dual-Target CI/CD', desc: 'Single GitHub Actions pipeline building, signing, and releasing both `.ipa` (TestFlight) and `.aab` (Google Play) builds.' },
          { icon: 'bi-aspect-ratio text-success', title: 'Adaptive UI Conventions', desc: 'Automatic platform styling: iOS back-swipe navigation gestures and bottom tabs vs Android Material 3 drawers.' }
        ],
        tags: ['Shared Codebase', 'Single CI/CD', 'Dual Deploy', '95% Code Reuse']
      },
      flutter: {
        badge: '<svg class="flutter-svg-icon me-1" style="width: 14px; height: 14px; vertical-align: -2px;" viewBox="0 0 24 24"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357z" fill="#54C5F8" /><path d="M14.328 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" fill="#02569B" /></svg> Google Flutter • Impeller Engine',
        subbadge: '<i class="bi bi-stars me-1"></i> Zero Shader Compilation Jank • 120 FPS',
        title: 'Google Flutter Engineering: Impeller Engine & BLoC State Precision',
        desc1: 'Flutter bypasses OEM platform widgets by drawing directly to the GPU canvas using Google’s breakthrough Impeller rendering engine. Impeller pre-compiles all graphics shaders at build time, completely eliminating shader compilation hitching and stutter on both iOS (Metal) and Android (Vulkan).',
        desc2: 'We engineer scalable Flutter apps with Dart 3 sound null safety, BLoC (Business Logic Component) and Riverpod 2.0 architectures, custom Platform Channels for low-level OS bridging, and high-velocity Hive / Isar key-value persistence.',
        specs: [
          { icon: 'bi-gem text-primary', title: 'Google Impeller Engine', desc: 'Pre-compiled shaders rendering on Metal (iOS) and Vulkan (Android) delivering butter-smooth 120 FPS frame rates.' },
          { icon: 'bi-diagram-3 text-info', title: 'BLoC & Riverpod State', desc: 'Decoupled, predictable, and testable reactive state machines handling complex offline flows and data streams.' },
          { icon: 'bi-box-arrow-in-right text-success', title: 'Dart FFI & Channels', desc: 'Direct C/C++ foreign function interface (FFI) bindings and native platform channel bridges for proprietary SDKs.' },
          { icon: 'bi-window-desktop text-warning', title: 'Multi-Form Factor Ready', desc: 'Same Flutter engine seamlessly adapts across smartphone, iPadOS split views, desktop, and embedded displays.' }
        ],
        tags: ['Flutter 3.x', 'Dart 3', 'Impeller', 'BLoC / Riverpod', 'FFI']
      },
      react: {
        badge: '<i class="fa-brands fa-react me-1 text-info"></i> Meta React Native • Fabric & TurboModules',
        subbadge: '<i class="bi bi-lightning-charge me-1"></i> Hermes Engine • TypeScript 5+',
        title: 'React Native Engineering: New Architecture with C++ TurboModules',
        desc1: 'React Native has undergone a revolutionary transformation with Meta\'s New Architecture. By replacing the legacy asynchronous JSON bridge with TurboModules (zero-copy C++ HostObjects) and the Fabric concurrent rendering engine, React Native apps now execute synchronous UI updates with native responsiveness.',
        desc2: 'Leveraging Meta’s Hermes JavaScript engine for sub-second startup times and compact memory footprints, we build with TypeScript, React 19 concurrent features, Reanimated 3 on-thread gestures, and MMKV ultra-fast key-value storage.',
        specs: [
          { icon: 'bi-cpu text-primary', title: 'Fabric Concurrent Renderer', desc: 'Direct C++ layout calculations via Yoga engine, unlocking concurrent UI rendering without serialization lag.' },
          { icon: 'bi-rocket-takeoff text-info', title: 'Hermes Bytecode Engine', desc: 'Pre-compiled JavaScript bytecode delivering instant Time-to-Interactive (TTI) and low RAM consumption.' },
          { icon: 'bi-magic text-warning', title: 'Reanimated 3 Animations', desc: 'Physics-based gesture animations running at 60 FPS entirely on the native UI thread without JS thread hiccups.' },
          { icon: 'bi-database-check text-success', title: 'Ultra-Fast MMKV Storage', desc: 'Memory-mapped key-value storage providing 30x faster read/write operations compared to legacy AsyncStorage.' }
        ],
        tags: ['React Native', 'TurboModules', 'Fabric', 'TypeScript', 'Hermes']
      },
      custom: {
        badge: '<i class="fa-solid fa-code-merge me-1 text-primary"></i> Bespoke Systems • Industrial IoT & Cloud',
        subbadge: '<i class="bi bi-diagram-2 me-1"></i> WebSockets • AVEVA PI • BLE',
        title: 'Custom Mobile Engineering: Enterprise Architecture & IoT Telemetry',
        desc1: 'Standard off-the-shelf mobile packages cannot handle complex enterprise field operations, proprietary factory automation, or custom hardware integrations. We architect custom mobile applications specifically for specialized workflows, real-time industrial telemetry, and mission-critical operations.',
        desc2: 'Our capabilities span AVEVA PI telemetry server integration, MQTT messaging, low-latency WebSockets (<50ms), BLE industrial sensor communication, and Conflict-Free Replicated Data Types (CRDTs) for multi-user offline collaboration.',
        specs: [
          { icon: 'bi-broadcast text-primary', title: 'Industrial IoT & BLE', desc: 'AVEVA PI industrial telemetry pipelines, MQTT edge brokers, and Bluetooth Low Energy sensor data collectors.' },
          { icon: 'bi-arrow-repeat text-success', title: 'CRDT Offline Sync', desc: 'Conflict-free data structures allowing users to work offline with guaranteed automatic reconciliation upon reconnecting.' },
          { icon: 'bi-cloud-check text-info', title: 'Resilient Cloud APIs', desc: 'Scalable Node.js & Go backend microservices, GraphQL subscriptions, and AWS/GCP serverless auto-scaling.' },
          { icon: 'bi-shield-lock text-warning', title: 'Enterprise Auth & SSO', desc: 'OAuth2, SAML 2.0, Okta, Azure AD integration, mTLS client certificates, and role-based permissions.' }
        ],
        tags: ['AVEVA PI', 'MQTT', 'BLE 5.0', 'CRDT Sync', 'Node.js/Go']
      },
      uiux: {
        badge: '<i class="fa-solid fa-bezier-curve me-1 text-danger"></i> Human-Centric UI/UX • Figma Systems',
        subbadge: '<i class="bi bi-fingerprint me-1"></i> Ergonomic Thumb-Zone & Haptics',
        title: 'UI/UX Design for Mobile: Ergonomic Flows, Prototypes & Micro-Interactions',
        desc1: 'Exceptional mobile applications start with ergonomic, thumb-friendly interfaces that feel natural within seconds of first launch. We analyze thumb-zone reachability on large-format modern smartphones, craft comprehensive Figma design systems with atomic tokens, and build high-fidelity interactive prototypes.',
        desc2: 'Every screen is engineered with purposeful micro-interactions, tactile haptic feedback cues, fluid skeleton loaders, and full WCAG 2.2 AA accessibility compliance (VoiceOver, TalkBack, and dynamic font scaling).',
        specs: [
          { icon: 'bi-hand-index-thumb text-danger', title: 'Ergonomic Thumb Zones', desc: 'Bottom-anchored primary action sheets and natural reachability patterns optimized for one-handed operation.' },
          { icon: 'bi-boxes text-primary', title: 'Atomic Figma Systems', desc: 'Comprehensive design tokens, typography scales, light/dark themes, and interactive component state variants.' },
          { icon: 'bi-activity text-warning', title: 'Micro-Interactions & Haptics', desc: 'Meaningful feedback animations, spring transitions, and tactile haptic taps that delight and guide the user.' },
          { icon: 'bi-universal-access text-success', title: 'WCAG 2.2 AA Accessibility', desc: 'Dynamic type scaling, high-contrast ratios, screen reader semantics, and reduced-motion user preferences.' }
        ],
        tags: ['Figma', 'Thumb Zone', 'Design Tokens', 'Micro-Interactions', 'WCAG 2.2']
      },
      support: {
        badge: '<i class="fa-solid fa-screwdriver-wrench me-1 text-warning"></i> 24/7 SLA Support • Lifecycle Updates',
        subbadge: '<i class="bi bi-shield-check me-1"></i> 99.9% Crash-Free Rate Guarantee',
        title: 'App Maintenance & Support: Proactive Monitoring & Zero-Day OS Upgrades',
        desc1: 'Mobile applications require continuous stewardship to stay fast, secure, and compatible with breaking changes introduced in annual iOS and Android releases. Our 24/7 maintenance SLA packages guarantee proactive crash monitoring, rapid incident response, and scheduled optimization cycles.',
        desc2: 'We provide real-time crash tracing via Sentry and Firebase Crashlytics, bi-weekly CVE dependency security patches, database indexing performance tuning, and zero-day compatibility updates whenever Apple or Google releases new OS versions (iOS 18+ / Android 15+).',
        specs: [
          { icon: 'bi-graph-up-arrow text-warning', title: '24/7 Real-Time Telemetry', desc: 'Continuous monitoring via Sentry, Datadog, and Firebase Crashlytics with automated engineer escalation alerts.' },
          { icon: 'bi-patch-check text-success', title: 'Zero-Day OS Compatibility', desc: 'Guaranteed compatibility upgrades ahead of major annual Apple iOS and Google Android public releases.' },
          { icon: 'bi-shield-exclamation text-danger', title: 'Bi-Weekly CVE Security', desc: 'Automated software supply chain vulnerability audits, third-party library patches, and SSL certificate renewals.' },
          { icon: 'bi-speedometer2 text-info', title: 'Database & Latency Tuning', desc: 'SQLite index profiling, memory leak tracking, network payload compression, and cold-start time optimization.' }
        ],
        tags: ['24/7 SLA', 'Crashlytics', 'Zero-Day Upgrades', 'CVE Patches', 'Sentry']
      }
    };

    function openServiceModal(key) {
      const data = servicesMatterData[key];
      if (!data) return;

      const badgeEl = document.getElementById('modalServiceBadge');
      if (badgeEl) badgeEl.innerHTML = data.badge;

      const subbadgeEl = document.getElementById('modalServiceSubbadge');
      if (subbadgeEl) subbadgeEl.innerHTML = data.subbadge;

      const titleEl = document.getElementById('modalServiceTitle');
      if (titleEl) titleEl.innerText = data.title;

      const desc1El = document.getElementById('modalServiceDesc1');
      if (desc1El) desc1El.innerText = data.desc1;

      const desc2El = document.getElementById('modalServiceDesc2');
      if (desc2El) desc2El.innerText = data.desc2;

      // Populate 4 specs grid
      const specGridEl = document.getElementById('modalServiceSpecGrid');
      if (specGridEl && data.specs) {
        specGridEl.innerHTML = data.specs.map(s => `
          <div class="service-spec-item">
            <h5><i class="bi ${s.icon}"></i> ${s.title}</h5>
            <p>${s.desc}</p>
          </div>
        `).join('');
      }

      // Populate tech tags
      const tagsEl = document.getElementById('modalServiceTechTags');
      if (tagsEl && data.tags) {
        tagsEl.innerHTML = data.tags.map(t => `<span class="badge bg-light text-dark border px-2 py-1">${t}</span>`).join(' ');
      }

      // Show modal
      const modalEl = document.getElementById('serviceDetailModal');
      if (modalEl && window.bootstrap) {
        const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
        modalInstance.show();
      }
    }

    // Attach click listeners to all Read More buttons in the carousel & navbar mega menu
    document.querySelectorAll('.service-readmore-btn, .mega-menu-card[data-service-key]').forEach(btn => {
      btn.addEventListener('click', function (e) {
        const key = this.getAttribute('data-service-key');
        if (key) {
          openServiceModal(key);
        }
      });
    });

  }

  // Technologies We Use Continuous Marquee
  if (document.querySelector('.swiper-tech-mobile')) {
    new Swiper('.swiper-tech-mobile', {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      freeMode: true,
      speed: 2600,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      breakpoints: {
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 6 },
        1200: { slidesPerView: 8 }
      }
    });

  }

  // Portfolio Slider with Smartphone Mockups (Automatic 4s Slider, 3 Desktop, 2 Tablet, 1 Mobile)
  if (document.querySelector('.swiper-portfolio-mobile')) {
    new Swiper('.swiper-portfolio-mobile', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.swiper-portfolio-mobile-pagination',
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: '.swiper-portfolio-mobile-next',
        prevEl: '.swiper-portfolio-mobile-prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });

  }

  // ==========================================
  // App UI/UX Showcase Gallery Filtering & Modal
  // ==========================================
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const showcaseCards = document.querySelectorAll('#showcaseGalleryGrid .showcase-phone-card');

  if (galleryFilterBtns.length > 0) {
    galleryFilterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        galleryFilterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        showcaseCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all') {
            // Under 'All Apps', show the 3 flagship cards (ecommerce, healthcare, fitness)
            if (category === 'ecommerce' || category === 'healthcare' || category === 'fitness') {
              card.style.display = 'flex';
              card.style.opacity = '0';
              card.style.transform = 'translateY(12px)';
              setTimeout(() => {
                card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, 20);
            } else {
              card.style.display = 'none';
            }
          } else {
            // Category-specific filter
            if (category === filter) {
              card.style.display = 'flex';
              card.style.opacity = '0';
              card.style.transform = 'translateY(12px)';
              setTimeout(() => {
                card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, 20);
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // App UI/UX Preview Data Dictionary
  const uiuxAppGalleryData = {
    ecommerce: {
      category: 'E-Commerce & Retail',
      title: 'NovaShop Luxe – Mobile Application Architecture Preview',
      screens: [
        {
          tabName: 'Product Catalogue',
          title: 'Product Catalogue & Discovery Screen',
          desc: 'Architected for instantaneous catalog exploration with sub-second debounced search, predictive auto-suggestions, and category filter chips. Product cards feature micro-interactions, live discount calculations, and one-tap cart addition without disrupting user browsing flow.',
          highlights: [
            { icon: 'bi-lightning-charge-fill text-warning', title: 'Sub-100ms Catalog Indexing', desc: 'Cached local SQLite and Redis edge querying enables instantaneous item filtering without latency.' },
            { icon: 'bi-hand-index-thumb text-info', title: 'Ergonomic Thumb Reachability', desc: 'Filter chips, search triggers, and primary actions placed strictly within natural thumb sweep zones.' },
            { icon: 'bi-badge-ad text-danger', title: 'Dynamic Client-Side Promo Logic', desc: 'Contextual discount banners and bundle offers computed client-side with zero network delay.' }
          ],
          screenHtml: `
            <div class="p-2 rounded-pill bg-dark border border-secondary mb-3 d-flex align-items-center px-3" style="font-size: 0.78rem;">
              <i class="bi bi-search text-cyan me-2"></i>
              <span class="text-white-50">Search 50,000+ designer items...</span>
            </div>
            <div class="d-flex gap-1 mb-3 overflow-hidden" style="font-size: 0.72rem;">
              <span class="badge bg-primary px-3 py-1">All Items</span>
              <span class="badge bg-dark border px-2 py-1 text-white-50">Sneakers</span>
              <span class="badge bg-dark border px-2 py-1 text-white-50">Watches</span>
              <span class="badge bg-dark border px-2 py-1 text-white-50">Accessories</span>
            </div>
            <div class="p-3 rounded-4 border mb-3 text-start" style="background: rgba(255,255,255,0.05); border-color: rgba(0, 163, 224, 0.4) !important;">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-danger text-white fw-bold" style="font-size: 0.7rem;">-25% FLASH SALE</span>
                <span class="text-warning small"><i class="bi bi-star-fill"></i> 4.9 (1,420 reviews)</span>
              </div>
              <div class="text-center py-3">
                <i class="bi bi-box-seam display-4 text-cyan opacity-75"></i>
                <div class="fw-bold text-white fs-6 mt-2">Air Velocity Pulse Pro</div>
                <div class="text-white-50 small">Adaptive Kinetic Cushioning • Carbon Core</div>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-2 pt-2 border-top border-secondary border-opacity-25">
                <div>
                  <span class="text-decoration-line-through text-muted small me-2">$249.00</span>
                  <span class="fw-bold text-cyan fs-5">$189.00</span>
                </div>
                <button class="btn btn-sm btn-primary rounded-pill px-3 py-1 fw-bold">
                  <i class="bi bi-bag-plus"></i> Add to Bag
                </button>
              </div>
            </div>
            <div class="p-2 rounded-3 bg-dark border border-secondary text-start">
              <span class="small text-white-50 d-block"><i class="bi bi-shield-check text-success me-1"></i> Verified Authentic Stock</span>
              <span class="small text-white-50">Free 2-day express shipping on all orders over $99.</span>
            </div>
          `
        },
        {
          tabName: 'Shopping Cart',
          title: 'Interactive Sliding Cart & Item Management',
          desc: 'A frictionless sliding sheet cart interface with real-time optimistic stock validation, quantity steppers with haptic tactile feedback, and coupon code verification with instant total recalculation.',
          highlights: [
            { icon: 'bi-check-all text-success', title: 'Optimistic State Updates', desc: 'Instant UI cart counter updates before network roundtrip confirmation, eliminating perceived latency.' },
            { icon: 'bi-ticket-perforated text-info', title: 'Instant Coupon Validation', desc: 'Promo codes verified against edge microservices with immediate savings feedback in UI.' },
            { icon: 'bi-currency-dollar text-success', title: 'Transparent Cost Breakdown', desc: 'Itemized subtotal, taxes, shipping tiers, and promo discounts displayed with total clarity.' }
          ],
          screenHtml: `
            <div class="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-secondary border-opacity-50">
              <span class="fw-bold text-white fs-6"><i class="bi bi-bag me-1 text-cyan"></i> Your Bag (2 Items)</span>
              <span class="badge bg-secondary">Free Shipping Unlocked</span>
            </div>
            <div class="p-2 rounded-3 bg-dark border border-secondary mb-2 text-start">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="fw-bold text-white small d-block">Air Velocity Pulse Pro</span>
                  <span class="text-white-50" style="font-size: 0.7rem;">Size: US 10.5 • Color: Titanium</span>
                </div>
                <span class="fw-bold text-cyan">$189.00</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-2 pt-1 border-top border-secondary border-opacity-25">
                <span class="text-muted small">Qty: 1</span>
                <span class="text-danger small" style="cursor: pointer;"><i class="bi bi-trash"></i> Remove</span>
              </div>
            </div>
            <div class="p-2 rounded-3 bg-dark border border-secondary mb-3 text-start">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span class="fw-bold text-white small d-block">AeroChrono Sport Watch</span>
                  <span class="text-white-50" style="font-size: 0.7rem;">Sapphire Glass • Matte Black</span>
                </div>
                <span class="fw-bold text-cyan">$140.00</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-2 pt-1 border-top border-secondary border-opacity-25">
                <span class="text-muted small">Qty: 1</span>
                <span class="text-danger small" style="cursor: pointer;"><i class="bi bi-trash"></i> Remove</span>
              </div>
            </div>
            <div class="p-3 rounded-3 border mb-3 text-start" style="background: rgba(0, 163, 224, 0.08); border-color: rgba(0, 163, 224, 0.3) !important;">
              <div class="d-flex justify-content-between small text-white-50 mb-1">
                <span>Subtotal</span>
                <span class="text-white">$329.00</span>
              </div>
              <div class="d-flex justify-content-between small text-white-50 mb-1">
                <span>Shipping</span>
                <span class="text-success fw-bold">FREE ($0.00)</span>
              </div>
              <div class="d-flex justify-content-between small text-white-50 mb-2">
                <span>Est. Taxes (8%)</span>
                <span class="text-white">$26.32</span>
              </div>
              <div class="d-flex justify-content-between fw-bold pt-2 border-top border-secondary border-opacity-50">
                <span class="text-white">Estimated Total</span>
                <span class="text-cyan fs-5">$355.32</span>
              </div>
            </div>
            <button class="btn btn-primary w-100 rounded-pill py-2 fw-bold text-dark" style="background: #00e5ff; border: none;">
              Proceed to Checkout <i class="bi bi-arrow-right"></i>
            </button>
          `
        },
        {
          tabName: 'Express Checkout',
          title: 'Frictionless 1-Tap Express Checkout',
          desc: 'Engineered to eliminate checkout drop-offs. Integrates native Apple Pay, Google Pay, biometric verification, and auto-filling address coordinates via Google Places API.',
          highlights: [
            { icon: 'bi-apple text-light', title: 'Native Apple Pay & Google Pay', desc: 'One-touch biometric authorization bypassing lengthy manual credit card input.' },
            { icon: 'bi-shield-check text-success', title: 'PCI-DSS Level 1 Encrypted', desc: 'Tokenized payment payloads with end-to-end device cryptographic signatures.' },
            { icon: 'bi-geo-alt-fill text-danger', title: 'Predictive Address Parsing', desc: 'Coordinates and postal codes resolved automatically in 2 keystrokes.' }
          ],
          screenHtml: `
            <div class="p-2 rounded-3 bg-dark border border-secondary mb-3 text-start">
              <span class="text-white-50 small d-block mb-1"><i class="bi bi-geo-alt text-danger me-1"></i> Delivery Address</span>
              <span class="fw-bold text-white small d-block">Alex Walker</span>
              <span class="text-white-50" style="font-size: 0.75rem;">742 Evergreen Terrace, Suite 4B, Springfield, OR 97477</span>
            </div>
            <div class="p-2 rounded-3 bg-dark border border-secondary mb-3 text-start">
              <span class="text-white-50 small d-block mb-2"><i class="bi bi-credit-card text-cyan me-1"></i> Payment Method</span>
              <div class="p-2 rounded border border-primary mb-2 d-flex justify-content-between align-items-center" style="background: rgba(0, 163, 224, 0.1);">
                <span class="fw-bold text-white small"><i class="bi bi-apple me-1"></i> Apple Pay (Default)</span>
                <i class="bi bi-check-circle-fill text-cyan"></i>
              </div>
              <div class="p-2 rounded border border-secondary d-flex justify-content-between align-items-center">
                <span class="text-white-50 small"><i class="bi bi-credit-card-2-front me-1"></i> Visa ending in •••• 4242</span>
                <span class="text-muted small">Select</span>
              </div>
            </div>
            <div class="p-3 rounded-4 border mb-3 text-start text-center" style="background: rgba(0, 255, 128, 0.05); border-color: rgba(0, 255, 128, 0.3) !important;">
              <i class="bi bi-shield-lock-fill text-success fs-3 mb-1"></i>
              <span class="fw-bold text-white small d-block">256-Bit Encrypted Transaction</span>
              <span class="text-white-50" style="font-size: 0.72rem;">Buyer Protection Guaranteed • 30-Day Free Returns</span>
            </div>
            <button class="btn btn-light w-100 rounded-pill py-2 fw-bold text-dark fs-6">
              <i class="bi bi-apple me-1"></i> Pay $355.32 with Passcode
            </button>
          `
        }
      ],
      tags: ['Flutter 3.24', 'Riverpod', 'Apple Pay SDK', 'Google Pay', 'Stripe API', 'SQLite', 'Redis']
    },
    healthcare: {
      category: 'Healthcare & Telemedicine',
      title: 'CarePulse Health – Telemedicine & Clinical Telemetry Preview',
      screens: [
        {
          tabName: 'Doctor Consultation',
          title: 'Specialist Vetting & Real-Time Consultation Screen',
          desc: 'Secure clinical triage screen enabling patients to browse certified physicians, review credentials, check real-time availability, and initiate end-to-end encrypted WebRTC audio/video consultations.',
          highlights: [
            { icon: 'bi-shield-lock-fill text-success', title: 'HIPAA & GDPR Compliant', desc: 'AES-256 encrypted peer-to-peer media streams with zero server-side storage of confidential consultations.' },
            { icon: 'bi-patch-check-fill text-info', title: 'Credential Verification Badge', desc: 'Automated state medical board API integration validating doctor licenses in real time.' },
            { icon: 'bi-chat-heart text-danger', title: 'Pre-Call Symptom Intake', desc: 'Guided interactive checklist optimizing physician preparation prior to live call connection.' }
          ],
          screenHtml: `
            <div class="p-3 rounded-4 border mb-3 text-start" style="background: rgba(0, 163, 224, 0.08); border-color: rgba(0, 163, 224, 0.35) !important;">
              <div class="d-flex align-items-center gap-2 mb-2">
                <div class="rounded-circle bg-primary p-2 text-center text-white" style="width: 44px; height: 44px;">
                  <i class="bi bi-person-fill fs-5"></i>
                </div>
                <div>
                  <div class="fw-bold text-white fs-6">Dr. Sarah Jenkins, MD</div>
                  <span class="text-white-50 small">Cardiology Specialist • 15 Yrs Experience</span>
                </div>
                <span class="badge bg-success ms-auto">Online</span>
              </div>
              <div class="d-flex justify-content-between align-items-center small text-white-50 pt-2 border-top border-secondary border-opacity-50">
                <span><i class="bi bi-star-fill text-warning"></i> 4.98 (480 reviews)</span>
                <span class="text-cyan fw-bold fs-6">$45 / Consult</span>
              </div>
            </div>
            <div class="p-3 rounded-3 bg-dark border border-secondary mb-3 text-start">
              <span class="text-white-50 small d-block mb-1">Physician Credentials</span>
              <span class="text-white small d-block">Board Certified • Johns Hopkins Medicine Fellow</span>
              <span class="text-white-50" style="font-size: 0.72rem;">Specializes in arrhythmia, hypertension management, and preventative cardiology.</span>
            </div>
            <button class="btn btn-info w-100 rounded-pill py-2 fw-bold text-dark mb-2">
              <i class="bi bi-camera-video-fill me-1"></i> Start Instant Video Consult ($45)
            </button>
            <button class="btn btn-outline-light w-100 rounded-pill py-2 small">
              <i class="bi bi-chat-text me-1"></i> Send Pre-Consult Message
            </button>
          `
        },
        {
          tabName: 'Appointments',
          title: 'Smart Appointment Scheduling & Conflict Resolution',
          desc: 'Timezone-aware calendar booking interface with dynamic doctor calendar synchronization, automated push notification reminders, and seamless reschedule/cancel flows.',
          highlights: [
            { icon: 'bi-calendar-event text-primary', title: 'Dynamic Slot Reservation', desc: 'Prevents double-booking using distributed Redis locks during checkout.' },
            { icon: 'bi-bell-fill text-warning', title: 'Multi-Channel Reminders', desc: 'Automated push notifications, SMS alerts, and calendar invite attachments.' },
            { icon: 'bi-camera-video text-cyan', title: 'Automated Pre-Call Room Check', desc: 'Runs client-side camera, mic, and bandwidth latency diagnostics 10 minutes before call.' }
          ],
          screenHtml: `
            <div class="p-2 rounded-3 bg-dark border border-secondary mb-3 text-start">
              <span class="text-white-50 small d-block mb-2"><i class="bi bi-calendar-check text-cyan me-1"></i> Select Date & Slot</span>
              <div class="d-flex gap-1 mb-2">
                <span class="badge bg-primary px-3 py-2 flex-fill">Wed Nov 11</span>
                <span class="badge bg-dark border px-3 py-2 flex-fill text-white-50">Thu Nov 12</span>
                <span class="badge bg-dark border px-3 py-2 flex-fill text-white-50">Fri Nov 13</span>
              </div>
              <span class="text-white-50 small d-block mb-1">Available Hours</span>
              <div class="row g-2">
                <div class="col-6"><button class="btn btn-sm btn-outline-info w-100 active">10:30 AM (Available)</button></div>
                <div class="col-6"><button class="btn btn-sm btn-outline-secondary w-100 text-white-50">02:00 PM (Available)</button></div>
                <div class="col-6"><button class="btn btn-sm btn-outline-secondary w-100 text-white-50">03:30 PM (Available)</button></div>
                <div class="col-6"><button class="btn btn-sm btn-outline-secondary w-100 text-white-50">05:00 PM (Available)</button></div>
              </div>
            </div>
            <div class="p-3 rounded-3 border mb-3 text-start" style="background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.1) !important;">
              <span class="fw-bold text-white small d-block mb-1">Appointment Type</span>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="appType" id="teleHealthRadio" checked>
                <label class="form-check-label text-white small" for="teleHealthRadio">Telehealth Video</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="appType" id="clinicRadio">
                <label class="form-check-label text-white-50 small" for="clinicRadio">In-Clinic Visit</label>
              </div>
            </div>
            <button class="btn btn-primary w-100 rounded-pill py-2 fw-bold">
              Confirm Reservation & Add to Calendar
            </button>
          `
        },
        {
          tabName: 'Health Dashboard',
          title: 'Continuous IoT Vitals & Clinical Biomarkers Dashboard',
          desc: 'Real-time vitals monitoring dashboard connecting with Apple HealthKit, Google Health Connect, and Bluetooth medical sensors for continuous pulse, SpO2, and blood pressure telemetry.',
          highlights: [
            { icon: 'bi-activity text-danger', title: 'Continuous HealthKit Sync', desc: 'Automated background biometric polling with anomaly threshold notifications.' },
            { icon: 'bi-graph-up text-success', title: 'Longitudinal Trend Analysis', desc: 'Vector charting rendering 30-day vital history with medical baseline markers.' },
            { icon: 'bi-exclamation-triangle-fill text-warning', title: 'Emergency Dispatch Trigger', desc: 'Configurable automated SMS/call triggers to emergency contacts upon critical vital drops.' }
          ],
          screenHtml: `
            <div class="p-3 rounded-4 border mb-3 text-start" style="background: rgba(255, 75, 75, 0.08); border-color: rgba(255, 75, 75, 0.3) !important;">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="fw-bold text-white fs-6"><i class="bi bi-heart-pulse-fill text-danger me-1"></i> Live ECG & Heart Rate</span>
                <span class="badge bg-success">NORMAL SINUS</span>
              </div>
              <div class="display-5 fw-bold text-danger my-1">74 <span class="fs-6 text-white-50">BPM</span></div>
              <span class="text-white-50 small">Resting heart rate within optimal athletic range (60-80 BPM).</span>
            </div>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <div class="p-2 rounded-3 bg-dark border text-center">
                  <span class="text-info fw-bold fs-5 d-block">99%</span>
                  <span class="text-white-50 small">Blood Oxygen (SpO2)</span>
                </div>
              </div>
              <div class="col-6">
                <div class="p-2 rounded-3 bg-dark border text-center">
                  <span class="text-success fw-bold fs-5 d-block">118 / 78</span>
                  <span class="text-white-50 small">Blood Pressure</span>
                </div>
              </div>
            </div>
            <div class="p-2 rounded-3 bg-dark border border-secondary text-start">
              <span class="small text-white-50 d-block mb-1"><i class="bi bi-capsule text-warning me-1"></i> Daily Medication Reminder</span>
              <div class="d-flex justify-content-between align-items-center">
                <span class="text-white small">CoQ10 • 100mg (Post-Breakfast)</span>
                <span class="badge bg-success-subtle text-success">Taken 8:30 AM</span>
              </div>
            </div>
          `
        }
      ],
      tags: ['SwiftUI', 'Kotlin Jetpack Compose', 'Apple HealthKit', 'Google Health Connect', 'WebRTC', 'HIPAA Certified']
    },
    fitness: {
      category: 'Fitness & Athletic Wellness',
      title: 'HyperFit Pro – High-Performance Athletic Coaching Preview',
      screens: [
        {
          tabName: 'Activity Tracking',
          title: 'Three-Ring Caloric & Metabolic Tracking Screen',
          desc: 'Visual daily activity dashboard with real-time biometric rings (Active Calories, Exercise Minutes, Stand Hours), GPS step counter, and ambient progress animations.',
          highlights: [
            { icon: 'bi-fire text-danger', title: 'Metabolic Calorie Burn Engine', desc: 'Algorithmic caloric calculations adjusted for user body composition and heart rate exertion.' },
            { icon: 'bi-lightning text-warning', title: 'Gamified Daily Streaks', desc: 'Micro-rewards and streak badges driving a 3.4x improvement in 30-day user retention.' },
            { icon: 'bi-compass text-info', title: 'High-Precision Pedometer', desc: 'Device accelerometer sensor fusion filtering vehicle motion artifacts.' }
          ],
          screenHtml: `
            <div class="p-3 rounded-4 border mb-3 text-start" style="background: rgba(255, 75, 75, 0.08); border-color: rgba(255, 75, 75, 0.35) !important;">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="fw-bold text-white fs-6">Today's Calorie Burn Goal</span>
                <span class="badge bg-danger text-white">94% COMPLETED</span>
              </div>
              <div class="progress mb-2" style="height: 8px; background: rgba(255,255,255,0.1);">
                <div class="progress-bar bg-danger" style="width: 94%;"></div>
              </div>
              <div class="d-flex justify-content-between small text-white-50">
                <span>🔥 850 / 900 kcal</span>
                <span>⚡ 48m of 60m</span>
                <span>👟 10,480 Steps</span>
              </div>
            </div>
            <div class="row g-2 mb-3">
              <div class="col-4">
                <div class="p-2 rounded bg-dark border text-center">
                  <span class="text-danger fw-bold fs-6 d-block">850</span>
                  <span class="text-muted small" style="font-size: 0.65rem;">Active Burn</span>
                </div>
              </div>
              <div class="col-4">
                <div class="p-2 rounded bg-dark border text-center">
                  <span class="text-warning fw-bold fs-6 d-block">48 min</span>
                  <span class="text-muted small" style="font-size: 0.65rem;">Exercise</span>
                </div>
              </div>
              <div class="col-4">
                <div class="p-2 rounded bg-dark border text-center">
                  <span class="text-info fw-bold fs-6 d-block">10 hrs</span>
                  <span class="text-muted small" style="font-size: 0.65rem;">Stand Hours</span>
                </div>
              </div>
            </div>
            <button class="btn btn-danger w-100 rounded-pill py-2 fw-bold text-white">
              <i class="bi bi-play-fill me-1"></i> Start New Workout
            </button>
          `
        },
        {
          tabName: 'Workout Dashboard',
          title: 'Interactive Live HIIT & Strength Workout Session',
          desc: 'Immersive workout dashboard featuring glanceable timers, heart rate training zone gauges, rep-counting guidance, and audio interval cues.',
          highlights: [
            { icon: 'bi-heart-pulse-fill text-danger', title: 'Target Heart Rate Zones', desc: 'Color-coded visual feedback indicating Warmup, Fat Burn, Cardio, and Peak exertion zones.' },
            { icon: 'bi-volume-up text-info', title: 'Audio & Haptic Cues', desc: 'Distinctive haptic feedback patterns notifying interval changes without looking at screen.' },
            { icon: 'bi-controller text-success', title: 'Background Audio Ducking', desc: 'Seamlessly lowers user Spotify/Apple Music volume when instructional coach prompts play.' }
          ],
          screenHtml: `
            <div class="p-3 rounded-4 bg-dark border border-secondary mb-3 text-start">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="text-warning fw-bold small"><i class="bi bi-play-circle-fill me-1"></i> HIIT Cardio Blast</span>
                <span class="badge bg-dark border text-cyan">Zone 4 (Fat Burn)</span>
              </div>
              <div class="d-flex justify-content-between align-items-baseline my-2">
                <span class="display-4 fw-bold text-white">24:18</span>
                <span class="text-danger fs-6"><i class="bi bi-heart-pulse"></i> 148 bpm</span>
              </div>
              <div class="progress mb-2" style="height: 6px; background: rgba(255,255,255,0.1);">
                <div class="progress-bar bg-warning" style="width: 65%;"></div>
              </div>
              <span class="text-white-50 small">Interval 4 of 6: High Knees Sprint (45 sec)</span>
            </div>
            <div class="d-flex gap-2">
              <button class="btn btn-danger rounded-pill flex-fill py-2 fw-bold">
                <i class="bi bi-pause-fill"></i> Pause
              </button>
              <button class="btn btn-outline-light rounded-pill flex-fill py-2">
                Next Set →
              </button>
            </div>
          `
        },
        {
          tabName: 'Progress Charts',
          title: 'Longitudinal Athletic Analytics & Recovery',
          desc: 'Deep athletic analytics with weekly endurance curves, VO2 max progression, volume load per muscle group, and sleep recovery scores.',
          highlights: [
            { icon: 'bi-bar-chart-fill text-cyan', title: 'Multi-Metric Progress Graphs', desc: 'Smooth 60 FPS GPU-accelerated chart rendering powered by Skia / Canvas.' },
            { icon: 'bi-moon-stars text-info', title: 'HRV & Sleep Recovery Score', desc: 'Algorithmic readiness score recommending active recovery vs high-intensity training.' },
            { icon: 'bi-share text-success', title: 'Social Brag Cards', desc: 'Auto-generated visual performance summary cards formatted for Instagram & Strava.' }
          ],
          screenHtml: `
            <div class="p-3 rounded-4 border mb-3 text-start" style="background: rgba(0, 163, 224, 0.08); border-color: rgba(0, 163, 224, 0.3) !important;">
              <div class="d-flex justify-content-between small text-white-50 mb-2">
                <span>Weekly Endurance Volume</span>
                <span class="text-success fw-bold">+18.4% vs Prev Week</span>
              </div>
              <div class="d-flex align-items-end justify-content-between gap-2 pt-2" style="height: 70px;">
                <div class="w-100 bg-secondary rounded-top opacity-50 text-center" style="height: 45%;"><span class="small text-white-50" style="font-size:0.6rem;">M</span></div>
                <div class="w-100 bg-secondary rounded-top opacity-50 text-center" style="height: 65%;"><span class="small text-white-50" style="font-size:0.6rem;">T</span></div>
                <div class="w-100 bg-secondary rounded-top opacity-50 text-center" style="height: 55%;"><span class="small text-white-50" style="font-size:0.6rem;">W</span></div>
                <div class="w-100 bg-secondary rounded-top opacity-50 text-center" style="height: 80%;"><span class="small text-white-50" style="font-size:0.6rem;">T</span></div>
                <div class="w-100 bg-secondary rounded-top opacity-50 text-center" style="height: 70%;"><span class="small text-white-50" style="font-size:0.6rem;">F</span></div>
                <div class="w-100 bg-cyan rounded-top text-center" style="height: 95%;"><span class="small text-white-50" style="font-size:0.6rem;">S</span></div>
                <div class="w-100 bg-success rounded-top text-center" style="height: 100%;"><span class="small text-white-50" style="font-size:0.6rem;">S</span></div>
              </div>
            </div>
            <div class="p-2 rounded-3 bg-dark border text-start">
              <span class="text-white-50 small d-block">Readiness Score</span>
              <span class="fs-5 fw-bold text-success">92 / 100 • Optimal For Peak Training</span>
            </div>
          `
        }
      ],
      tags: ['React Native', 'Skia 2D Graphics', 'Reanimated 3', 'Apple Watch Sync', 'WearOS API']
    },
    education: {
      category: 'Education & Interactive E-Learning',
      title: 'SkillCraft AI – Next-Gen Mobile Learning Ecosystem Preview',
      screens: [
        {
          tabName: 'Course Catalogue',
          title: 'Modular Course Discovery & Adaptive Learning Path',
          desc: 'Adaptive curriculum dashboard tailoring course suggestions based on career goals, completed prerequisites, and real-time knowledge diagnostic assessments.',
          highlights: [
            { icon: 'bi-cpu text-info', title: 'AI Learning Path Engine', desc: 'Continuously adapts lesson sequencing according to individual learner comprehension speed.' },
            { icon: 'bi-bookmark-check text-success', title: 'Offline Module Caching', desc: 'Encrypted local caching allowing complete offline study with auto-sync upon reconnection.' },
            { icon: 'bi-stars text-warning', title: 'Bite-Sized Micro-Modules', desc: '3-to-7 minute lessons optimized for mobile commutes and micro-learning moments.' }
          ],
          screenHtml: `
            <div class="p-3 rounded-4 border mb-3 text-start" style="background: rgba(147, 51, 234, 0.1); border-color: rgba(147, 51, 234, 0.35) !important;">
              <span class="badge bg-purple px-2 py-1 text-white mb-2" style="background: #9333EA;">ACTIVE COURSE</span>
              <div class="fw-bold text-white fs-6">Flutter 3 & AI Architecture</div>
              <div class="progress my-2" style="height: 6px; background: rgba(255,255,255,0.1);">
                <div class="progress-bar bg-info" style="width: 82%;"></div>
              </div>
              <div class="d-flex justify-content-between small text-white-50">
                <span>41 of 50 Lessons Completed</span>
                <span class="text-cyan fw-bold">82%</span>
              </div>
            </div>
            <div class="p-2 rounded-3 bg-dark border border-secondary mb-2 text-start">
              <span class="text-white-50 small d-block">Next Up:</span>
              <span class="fw-bold text-white small">Lesson 42: State Machine Micro-Interactions</span>
            </div>
            <button class="btn btn-primary w-100 rounded-pill py-2 fw-bold">
              <i class="bi bi-play-circle-fill me-1"></i> Continue Lesson
            </button>
          `
        },
        {
          tabName: 'Interactive Video',
          title: 'Interactive Video Player & Synchronized Code Sandbox',
          desc: 'Rich media learning player featuring variable playback (0.5x - 2.5x), synchronized code snippets, AI lecture summarization, and in-video interactive question pauses.',
          highlights: [
            { icon: 'bi-code-slash text-cyan', title: 'Synchronized Code Highlighting', desc: 'Live code samples follow video timestamps with syntax highlighting.' },
            { icon: 'bi-robot text-primary', title: 'Instant AI Tutor Notes', desc: 'Real-time transcript-based Q&A answering student questions at exact video timestamps.' },
            { icon: 'bi-aspect-ratio text-light', title: 'Adaptive HLS Streaming', desc: 'Zero-buffer adaptive bitrate video streaming delivering crisp video on 4G and 5G.' }
          ],
          screenHtml: `
            <div class="p-3 rounded-4 bg-dark border border-secondary mb-3 text-start">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="text-white-50 small"><i class="bi bi-camera-reels text-warning me-1"></i> Lesson 42 (14:30)</span>
                <span class="badge bg-secondary">1.5x Speed</span>
              </div>
              <div class="p-4 rounded-3 bg-black text-center my-2">
                <i class="bi bi-play-circle display-4 text-cyan"></i>
                <div class="text-white-50 small mt-2">Flutter AnimatedSwitcher & Implicit Animations</div>
              </div>
            </div>
            <div class="p-2 rounded-3 border text-start" style="background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.1) !important;">
              <span class="text-cyan small fw-bold d-block mb-1"><i class="bi bi-cpu me-1"></i> AI Live Transcript Summary</span>
              <p class="text-white-50 small mb-0">Use CurvedAnimation with Curves.easeInOut for ergonomic thumb interactions on touch displays.</p>
            </div>
          `
        },
        {
          tabName: 'Quiz & Assessment',
          title: 'Gamified Knowledge Assessment & Verifiable Credentials',
          desc: 'Interactive quizzes with instant explanations, code evaluation sandboxes, and cryptographic completion certificates shareable to LinkedIn.',
          highlights: [
            { icon: 'bi-trophy text-warning', title: 'Gamified XP & Leaderboards', desc: 'Point multipliers and peer cohort leaderboards increasing module completion by 48%.' },
            { icon: 'bi-award text-success', title: 'Blockchain-Verifiable Badges', desc: 'OpenBadge 3.0 compliant verifiable certificates with instant LinkedIn sharing.' },
            { icon: 'bi-chat-dots text-info', title: 'Peer Code Review Forum', desc: 'Threaded code discussions with inline markdown and instructor verification pins.' }
          ],
          screenHtml: `
            <div class="p-3 rounded-4 border mb-3 text-start text-center" style="background: rgba(0, 255, 128, 0.08); border-color: rgba(0, 255, 128, 0.35) !important;">
              <i class="bi bi-trophy-fill display-4 text-warning mb-2"></i>
              <h5 class="fw-bold text-white mb-1">Module Assessment Passed!</h5>
              <div class="display-6 fw-bold text-success mb-2">96%</div>
              <span class="text-white-50 small d-block">Scored 24 out of 25 technical questions correctly.</span>
            </div>
            <button class="btn btn-light w-100 rounded-pill py-2 fw-bold text-dark">
              <i class="bi bi-file-earmark-pdf me-1"></i> Claim & Add Certificate to LinkedIn
            </button>
          `
        }
      ],
      tags: ['Flutter', 'Dart', 'HLS Video Streaming', 'WebAssembly', 'Firebase Auth', 'GraphQL']
    },
    business: {
      category: 'Enterprise SaaS & Operations',
      title: 'OmniDesk Enterprise – Corporate Operations & Mobile ERP Preview',
      screens: [
        {
          tabName: 'Revenue Dashboard',
          title: 'Real-Time Corporate Financial & Revenue Telemetry',
          desc: 'Executive command dashboard delivering instantaneous MRR/ARR metrics, gross burn rates, cashflow projections, and customer acquisition velocity.',
          highlights: [
            { icon: 'bi-cash-coin text-success', title: 'Sub-Second Financial Aggregation', desc: 'Direct webhook synchronization with Stripe, QuickBooks, and NetSuite ledgers.' },
            { icon: 'bi-graph-up-arrow text-primary', title: 'Predictive Cash Runway Models', desc: 'Automated 12-month Monte Carlo cashflow forecasts visualized in mobile charts.' },
            { icon: 'bi-shield-check text-info', title: 'Biometric Access Control', desc: 'FaceID / TouchID step-up authentication required for financial disclosure screens.' }
          ],
          screenHtml: `
            <div class="p-3 rounded-4 border mb-3 text-start" style="background: rgba(0, 88, 168, 0.15); border-color: rgba(0, 163, 224, 0.4) !important;">
              <span class="text-white-50 small d-block mb-1">Monthly Recurring Revenue (MRR)</span>
              <div class="d-flex justify-content-between align-items-baseline">
                <span class="display-5 fw-bold text-white">$142,500</span>
                <span class="text-success fw-bold small">+24.8% MoM</span>
              </div>
              <span class="text-white-50 small d-block mt-1">ARR Run-Rate: $1.71M • Gross Margin: 84%</span>
            </div>
            <div class="p-2 rounded-3 bg-dark border border-secondary text-start mb-2">
              <div class="d-flex justify-content-between small text-white-50 mb-1">
                <span>Net Burn Rate</span>
                <span class="text-white">$18,200 / mo</span>
              </div>
              <div class="d-flex justify-content-between small text-white-50">
                <span>Runway Remaining</span>
                <span class="text-success fw-bold">34 Months</span>
              </div>
            </div>
          `
        },
        {
          tabName: 'Lead Pipeline',
          title: 'Mobile CRM Deal Flow & Sales Pipeline Kanban',
          desc: 'Touch-optimized kanban board for sales executives to move deals across stages, log voice meeting summaries, and trigger automated proposal contracts.',
          highlights: [
            { icon: 'bi-kanban text-warning', title: 'Gesture-Driven Kanban Columns', desc: 'Smooth drag-and-drop deal stage progression with haptic tactile snap.' },
            { icon: 'bi-mic-fill text-danger', title: 'AI Voice Meeting Summaries', desc: 'Automatic transcription of post-meeting voice notes into structured CRM fields.' },
            { icon: 'bi-envelope-check text-cyan', title: '1-Tap Followup Sequences', desc: 'Contextual email templates personalized with deal history and mutual contacts.' }
          ],
          screenHtml: `
            <div class="p-2 rounded-3 bg-dark border border-secondary mb-3 text-start">
              <span class="text-white-50 small d-block mb-2"><i class="bi bi-funnel text-cyan me-1"></i> Qualified Deal Pipeline (34 Deals)</span>
              <div class="p-2 rounded bg-secondary-subtle text-dark mb-2">
                <div class="d-flex justify-content-between fw-bold">
                  <span>FinTech Platform Scale</span>
                  <span>$68,000</span>
                </div>
                <span class="text-muted small">Stage: Contract Review • Decision Date: Tomorrow</span>
              </div>
              <div class="p-2 rounded bg-secondary-subtle text-dark">
                <div class="d-flex justify-content-between fw-bold">
                  <span>IoT Cloud Architecture</span>
                  <span>$45,000</span>
                </div>
                <span class="text-muted small">Stage: Technical Demo • Decision Date: Nov 18</span>
              </div>
            </div>
          `
        },
        {
          tabName: 'Invoice Approvals',
          title: '1-Tap Executive Invoice & PO Authorization Flow',
          desc: 'Streamlined corporate approval queue allowing executives to inspect PO details, audit vendor credentials, and sign multi-thousand dollar invoices in seconds.',
          highlights: [
            { icon: 'bi-fingerprint text-success', title: 'Cryptographic Signature Log', desc: 'Immutable audit trail capturing device ID, geolocation, and timestamp for compliance.' },
            { icon: 'bi-file-earmark-check text-primary', title: 'Automated 3-Way Matching', desc: 'Validates purchase order against invoice line items and receiving receipts automatically.' },
            { icon: 'bi-bell-fill text-warning', title: 'Urgent SLA Push Notifications', desc: 'Escalation workflows pinging backup authorizers if an approval sits for > 4 hours.' }
          ],
          screenHtml: `
            <div class="p-3 rounded-4 border mb-3 text-start" style="background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.1) !important;">
              <span class="text-white-50 small d-block mb-1">Pending Invoice #INV-4091</span>
              <div class="d-flex justify-content-between align-items-baseline mb-2">
                <span class="fs-4 fw-bold text-warning">$18,400.00</span>
                <span class="badge bg-warning text-dark">Due in 3 Days</span>
              </div>
              <span class="text-white small d-block">Vendor: CloudScale Infrastructure Services Inc.</span>
              <span class="text-white-50" style="font-size: 0.72rem;">PO Match: #PO-8821 • Verified by Procurement</span>
            </div>
            <button class="btn btn-success w-100 rounded-pill py-2 fw-bold">
              <i class="bi bi-fingerprint me-1"></i> 1-Tap Biometric Payment Authorization
            </button>
          `
        }
      ],
      tags: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS KMS', 'GraphQL']
    }
  };

  // Open UI/UX App Preview Function
  function openUiuxAppPreview(appKey) {
    const data = uiuxAppGalleryData[appKey] || uiuxAppGalleryData.ecommerce;

    const modalTitleEl = document.getElementById('appPreviewModalLabel');
    if (modalTitleEl) modalTitleEl.innerText = data.title;

    const badgeEl = document.getElementById('previewModalCategoryBadge');
    if (badgeEl) badgeEl.innerText = data.category;

    const tabsContainer = document.getElementById('previewScreenTabs');
    const screenTitle = document.getElementById('previewScreenTitle');
    const screenDesc = document.getElementById('previewScreenDesc');
    const tabPill = document.getElementById('previewActiveTabPill');
    const highlightsBox = document.getElementById('previewUxHighlights');
    const tagsBox = document.getElementById('previewTechStackTags');

    function renderScreen(index) {
      const screen = data.screens[index] || data.screens[0];

      // Update active tab button
      if (tabsContainer) {
        tabsContainer.querySelectorAll('.preview-screen-tab-btn').forEach((btn, i) => {
          btn.classList.toggle('active', i === index);
        });
      }

      if (tabPill) tabPill.innerText = `Screen ${index + 1} of ${data.screens.length}`;
      if (screenTitle) screenTitle.innerText = screen.title;
      if (screenDesc) screenDesc.innerText = screen.desc;

      if (highlightsBox && screen.highlights) {
        highlightsBox.innerHTML = screen.highlights.map(h => `
          <div class="col-md-6 col-lg-4">
            <div class="p-3 rounded-3 h-100" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
              <div class="d-flex align-items-center gap-2 mb-2">
                <i class="bi ${h.icon} fs-5"></i>
                <h6 class="fw-bold text-white mb-0" style="font-size: 0.88rem;">${h.title}</h6>
              </div>
              <p class="text-white-50 small mb-0" style="font-size: 0.8rem; line-height: 1.5;">${h.desc}</p>
            </div>
          </div>
        `).join('');
      }

      if (tagsBox && data.tags) {
        tagsBox.innerHTML = data.tags.map(t => `<span class="badge bg-dark border border-secondary px-2 py-1 text-white" style="font-size: 0.75rem;">${t}</span>`).join(' ');
      }
    }

    // Build tabs buttons (no phone symbols)
    if (tabsContainer) {
      tabsContainer.innerHTML = data.screens.map((s, idx) => `
        <button class="preview-screen-tab-btn ${idx === 0 ? 'active' : ''}" data-screen-idx="${idx}">
          ${s.tabName}
        </button>
      `).join('');

      tabsContainer.querySelectorAll('.preview-screen-tab-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          const idx = parseInt(this.getAttribute('data-screen-idx'), 10);
          renderScreen(idx);
        });
      });
    }

    // Initialize first screen
    renderScreen(0);

    const modalEl = document.getElementById('appPreviewModal');
    if (modalEl && window.bootstrap) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  }

  // Attach click listener to all "View App Preview" buttons
  document.querySelectorAll('.btn-view-app-preview').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const appKey = this.getAttribute('data-app-key');
      if (appKey) {
        openUiuxAppPreview(appKey);
      }
    });
  });

  // Industries We Serve Carousel
  if (document.querySelector('.swiper-industries-mobile')) {
    new Swiper('.swiper-industries-mobile', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-industries-mobile-pagination',
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
      }
    });
  }

  // ==========================================
  // Portfolio App Details Data & Modal Logic
  // ==========================================
  const portfolioAppData = {
    quickbite: {
      badge: '<i class="bi bi-bicycle me-1 text-danger"></i> Food Delivery & On-Demand Dispatch',
      subbadge: 'Real-Time GPS Tracking • Dynamic Kitchen Dispatch',
      title: 'QuickBite – On-Demand Food Delivery Architecture',
      desc1: 'QuickBite is an ultra-low latency food ordering and logistics dispatch application built with Flutter and Node.js microservices. Engineered for high concurrency during peak dining hours, the system maintains zero cart race conditions and instantaneous order processing across multi-restaurant inventories.',
      desc2: 'Featuring real-time driver telemetry via WebSockets and Google Maps Platform SDK, customers monitor courier route progress with sub-second accuracy, while restaurant partners receive automated kitchen order tickets (KOT) with automated kitchen load balancing.',
      specs: [
        { icon: 'bi-geo-alt-fill text-danger', title: 'Live Courier Telemetry', desc: 'Sub-second GPS coordinate streaming via WebSockets with dynamic route re-calculation and driver battery optimization.' },
        { icon: 'bi-grid text-warning', title: 'Dynamic Menu Engine', desc: 'Real-time item availability toggles, nested topping customizers, and allergen/dietary preference filtering.' },
        { icon: 'bi-credit-card-2-front text-success', title: 'Instant Payment Gateways', desc: 'Native Apple Pay, Google Pay, UPI, and credit card processing with automated split settlement for merchants and couriers.' },
        { icon: 'bi-cpu text-primary', title: 'Smart Kitchen Dispatch', desc: 'Machine learning dispatch algorithm assigning drivers based on actual kitchen prep velocity and traffic patterns.' }
      ],
      tags: ['Flutter', 'Node.js', 'WebSockets', 'Google Maps SDK', 'MongoDB', 'Redis', 'Apple Pay']
    },
    urbanease: {
      badge: '<i class="bi bi-tools me-1 text-primary"></i> On-Demand Home Services',
      subbadge: 'Verified Pros • Calendar Scheduling • Escrow Protection',
      title: 'UrbanEase – Home Service Booking Platform',
      desc1: 'UrbanEase connects homeowners with vetted technicians, cleaners, electricians, and plumbers. The architecture focuses on strict scheduling consistency, multi-party notification queues, and automated dispute resolution.',
      desc2: 'Integrated with digital credential verification, real-time OTP confirmation, and milestone-based escrow payments, customers are guaranteed safe transactions while service pros manage their daily route schedules efficiently.',
      specs: [
        { icon: 'bi-calendar-check text-primary', title: 'Dynamic Slotting Matrix', desc: 'Real-time multi-calendar slot reservation preventing double-booking across geographical operational zones.' },
        { icon: 'bi-shield-check text-success', title: 'Vetted Professional Profiles', desc: 'Government ID verification, background checks, trade licenses, and aggregated verified customer reviews.' },
        { icon: 'bi-lock-fill text-warning', title: 'Milestone Escrow Payments', desc: 'Funds securely held in escrow and released only upon one-time password (OTP) verification after work completion.' },
        { icon: 'bi-chat-dots text-info', title: 'In-App Secure Messaging', desc: 'End-to-end encrypted messaging with photo sharing, voice notes, and job scope quote negotiations.' }
      ],
      tags: ['React Native', 'TypeScript', 'Firebase', 'PostgreSQL', 'Stripe Escrow', 'Twilio SMS']
    },
    shoppulse: {
      badge: '<i class="bi bi-bag-check me-1 text-info"></i> Enterprise E-Commerce Platform',
      subbadge: 'Sub-Second Search • Personalized Recs • 1-Tap Checkout',
      title: 'ShopPulse – High-Conversion E-Commerce App',
      desc1: 'ShopPulse is an enterprise-scale mobile shopping experience engineered for extreme catalog volumes and lightning-fast product discovery. With Algolia instant search indexing and pre-computed recommendation vectors, users find desired items in milliseconds.',
      desc2: 'The checkout funnel is streamlined with Apple Pay and biometric authorizations, dropping cart abandonment rates by over 38%. Offline product caching ensures seamless browsing even in low-bandwidth network zones.',
      specs: [
        { icon: 'bi-search text-info', title: 'Instant Algolia Indexing', desc: 'Typo-tolerant predictive search delivering sub-50ms catalog results across hundreds of thousands of SKUs.' },
        { icon: 'bi-lightning text-warning', title: 'Flash Sale Concurrency', desc: 'Atomic Redis lock counters guaranteeing zero overselling during high-traffic promotional flash drops.' },
        { icon: 'bi-fingerprint text-primary', title: 'One-Tap Biometric Checkout', desc: 'Face ID and fingerprint authentication with tokenized PCI-DSS Level 1 card vaulting and address autofill.' },
        { icon: 'bi-badge-vr text-danger', title: 'AR Product Visualization', desc: 'Augmented Reality viewer allowing shoppers to visualize furniture and products inside their actual living space.' }
      ],
      tags: ['SwiftUI', 'Kotlin Compose', 'GraphQL', 'Algolia', 'AWS DynamoDB', 'Apple Pay', 'ARKit']
    },
    carelink: {
      badge: '<i class="bi bi-heart-pulse-fill me-1 text-danger"></i> HIPAA-Compliant Telehealth',
      subbadge: 'Encrypted HD Video Calls • Vital Telemetry • E-Prescriptions',
      title: 'CareLink – Telehealth & Remote Care Application',
      desc1: 'CareLink provides an end-to-end HIPAA and GDPR compliant telemedicine platform connecting patients with certified medical specialists. Built with WebRTC peer-to-peer encryption, consultations maintain pristine audio/video clarity even on cellular connections.',
      desc2: 'The application seamlessly integrates with Apple HealthKit and Google Health Connect to stream real-time biometric vitals (heart rate, SpO2, blood pressure) directly into doctor clinical consultation dashboards.',
      specs: [
        { icon: 'bi-camera-video-fill text-success', title: 'Encrypted WebRTC Rooms', desc: 'Zero-latency peer-to-peer 1080p video consultation rooms with end-to-end SRTP encryption and recording options.' },
        { icon: 'bi-smartwatch text-danger', title: 'HealthKit Vitals Telemetry', desc: 'Direct synchronization with smartwatch sensors for continuous vitals streaming and anomaly alerts.' },
        { icon: 'bi-file-earmark-medical text-primary', title: 'Digital Prescription (e-Rx)', desc: 'Cryptographically signed digital prescriptions with instant dispatch to partnering pharmacy fulfillment networks.' },
        { icon: 'bi-shield-shaded text-info', title: 'HIPAA & PHI Security', desc: 'Immutable audit logs, AES-256 at-rest database encryption, and role-based medical access controls.' }
      ],
      tags: ['Flutter', 'WebRTC', 'HealthKit API', 'Docker', 'PostgreSQL', 'AWS HIPAA Cloud']
    },
    agrigrow: {
      badge: '<i class="bi bi-flower1 me-1 text-success"></i> Smart Farming & Agro IoT',
      subbadge: 'Soil Sensor Telemetry • Weather Forecasts • Mandi Live Rates',
      title: 'AgriGrow – Agriculture & Farmer Support App',
      desc1: 'AgriGrow transforms precision farming by combining edge IoT sensor networks with intuitive mobile interfaces designed for rural bandwidth conditions. The app operates offline-first, syncing automatically when connectivity resumes.',
      desc2: 'Farmers receive AI-powered leaf disease diagnostics via on-device computer vision models, microclimate weather hazard alerts, and real-time commodity prices from national agricultural produce markets (mandis).',
      specs: [
        { icon: 'bi-camera-fill text-success', title: 'On-Device AI Diagnostics', desc: 'Edge computer vision scanning crop leaves to detect fungal and insect infections in offline field environments.' },
        { icon: 'bi-broadcast-pin text-primary', title: 'BLE & LoRa IoT Sync', desc: 'Real-time soil moisture, temperature, and NPK nutrient telemetry streamed from wireless in-field sensor probes.' },
        { icon: 'bi-graph-up-arrow text-warning', title: 'Live Mandi Commodity Rates', desc: 'Daily price tracking across 500+ agricultural markets with historical price volatility analytics.' },
        { icon: 'bi-cloud-sun text-info', title: 'Hyper-Local Weather Radar', desc: '7-day precipitation forecasts with automated frost, hail, and unseasonal rainfall push notifications.' }
      ],
      tags: ['Kotlin', 'TensorFlow Lite', 'MQTT', 'BLE 5.0', 'SQLite Room DB', 'Mandi Market APIs']
    },
    edusphere: {
      badge: '<i class="bi bi-mortarboard-fill me-1 text-info"></i> Modern EdTech Academy',
      subbadge: 'Adaptive Video Streaming • Offline Learning • Gamified Progress',
      title: 'EduSphere – Interactive Education & Learning App',
      desc1: 'EduSphere delivers an immersive learning ecosystem tailored for higher education and corporate upskilling. Incorporating HLS adaptive bitrate video streaming, learners experience buffer-free lectures regardless of fluctuating bandwidth.',
      desc2: 'Gamified milestone ladders, daily habit streaks, and interactive code sandboxes elevate student course completion rates, while educators monitor real-time class comprehension analytics.',
      specs: [
        { icon: 'bi-play-btn-fill text-info', title: 'Adaptive HLS Streaming', desc: 'Auto-adjusting video streaming bitrates and secure AES-128 encrypted offline video downloads for offline study.' },
        { icon: 'bi-fire text-danger', title: 'Gamified Habit Engine', desc: 'Daily learning streaks, XP point leaderboards, and celebratory micro-animations driving course engagement.' },
        { icon: 'bi-patch-question text-warning', title: 'Interactive Assessments', desc: 'Timed chapter quizzes with automated grading, instant solution explanations, and personalized revision sheets.' },
        { icon: 'bi-award text-success', title: 'Verifiable Certificates', desc: 'Tamper-proof digital credentials shareable directly to LinkedIn, portfolio resumes, and university portals.' }
      ],
      tags: ['React Native', 'TypeScript', 'AWS CloudFront', 'HLS Player', 'Node.js', 'Redis Leaderboards']
    },
    freshcart: {
      badge: '<i class="bi bi-basket2-fill me-1 text-success"></i> Quick-Commerce Grocery',
      subbadge: '15-Minute Dark-Store Dispatch • Real-Time Inventory • Cold Chain',
      title: 'FreshCart – Hyper-Local Grocery Delivery Platform',
      desc1: 'FreshCart pioneers rapid grocery logistics, dispatching daily kitchen essentials, farm dairy, and organic fruits from hyper-local micro-warehouses (dark stores) within 15 minutes of checkout.',
      desc2: 'The mobile architecture synchronizes live inventory down to the second, eliminating stockouts and order cancellations. Smart basket substitutions and automated recurring subscriptions make household restocking frictionless.',
      specs: [
        { icon: 'bi-lightning-charge-fill text-warning', title: '15-Min Dark-Store Routing', desc: 'Automated order batching and shortest-path picking algorithms tailored for micro-warehouse fulfillment staff.' },
        { icon: 'bi-database-check text-success', title: 'Sub-Second Stock Sync', desc: 'Real-time inventory reservations preventing out-of-stock checkouts during surge shopping windows.' },
        { icon: 'bi-arrow-repeat text-primary', title: 'Automated Subscriptions', desc: 'Flexible recurring calendar deliveries for dairy, fresh bread, and organic vegetables with pause/resume controls.' },
        { icon: 'bi-thermometer-half text-info', title: 'Cold-Chain Telemetry', desc: 'Temperature-monitored courier bags ensuring dairy and fresh meat arrive in pristine chilled condition.' }
      ],
      tags: ['Flutter', 'Go Microservices', 'RabbitMQ', 'Redis Cluster', 'Google Maps Matrix API', 'Stripe']
    },
    roamease: {
      badge: '<i class="bi bi-airplane-engines-fill me-1 text-cyan"></i> Global Travel & Hospitality',
      subbadge: 'Multi-GDS Flight Booking • Curated Hotel Suites • Digital Boarding Pass',
      title: 'RoamEase – All-In-One Travel Booking Platform',
      desc1: 'RoamEase is a comprehensive international travel companion that unifies flight reservations, boutique hotel bookings, and interactive itineraries into a singular, elegant interface.',
      desc2: 'By connecting directly to Amadeus and Sabre global distribution systems (GDS), users access wholesale seat pricing and zero-commission bookings. Dynamic flight delay notifications keep travelers informed at every gate.',
      specs: [
        { icon: 'bi-airplane text-primary', title: 'Multi-GDS Flight Aggregator', desc: 'Dual-query flight searches covering 450+ global airlines with live seat map visualizers and baggage add-ons.' },
        { icon: 'bi-buildings text-warning', title: 'Curated Hotel Reservations', desc: 'High-resolution room tours, verified guest ratings, and flexible free-cancellation booking terms.' },
        { icon: 'bi-wallet2 text-success', title: 'Offline Boarding Passes', desc: 'Native Apple Wallet and Google Wallet integration for paperless NFC boarding passes and hotel digital keys.' },
        { icon: 'bi-bell-fill text-info', title: 'Live Gate Notifications', desc: 'Push notifications for gate changes, boarding time alerts, weather updates, and baggage carousel numbers.' }
      ],
      tags: ['Swift', 'Kotlin', 'Amadeus GDS', 'Sabre API', 'Apple PassKit', 'Node.js', 'PostgreSQL']
    },
    pulsefit: {
      badge: '<i class="bi bi-fire me-1 text-danger"></i> AI Fitness Coaching & Wearables',
      subbadge: 'Wearable Device Sync • Algorithmic Workouts • Calorie Tracking',
      title: 'PulseFit – Fitness & Performance Tracking App',
      desc1: 'PulseFit brings elite athletic coaching directly into users\' pockets. The app leverages device accelerometer and gyroscope data alongside connected heart rate monitors to deliver real-time exercise rep counting and form feedback.',
      desc2: 'Adaptive algorithm engines customize daily workout routines based on muscle fatigue metrics, sleep duration, and metabolic recovery status, ensuring sustainable progress without overtraining.',
      specs: [
        { icon: 'bi-smartwatch text-danger', title: 'Continuous Wearable Sync', desc: 'Real-time Bluetooth Low Energy (BLE) sync with Apple Watch, Garmin, Whoop, and Wear OS devices.' },
        { icon: 'bi-activity text-primary', title: 'Heart Rate Zone Guidance', desc: 'Live visual indicators (Fat Burn, Aerobic, Anaerobic, Peak) ensuring workouts hit target metabolic zones.' },
        { icon: 'bi-mic-fill text-info', title: 'Audio Coaching Engine', desc: 'Dynamic voice-guided interval cues, workout pacing metronomes, and milestone motivational audio.' },
        { icon: 'bi-pie-chart-fill text-success', title: 'Macro Nutrition Scanner', desc: 'AI camera barcode scanner and food recognition estimating calories, protein, carbs, and fats.' }
      ],
      tags: ['Flutter', 'Dart', 'WatchKit', 'Wear OS SDK', 'BLE Telemetry', 'Python ML', 'Firebase']
    },
    bizops: {
      badge: '<i class="bi bi-briefcase-fill me-1 text-primary"></i> Enterprise Operations & ERP',
      subbadge: 'Financial Dashboards • Mobile Invoicing • Role-Based Approvals',
      title: 'BizOps – Enterprise Management & Operations App',
      desc1: 'BizOps mobilizes enterprise resource planning for corporate executives and distributed teams. Executive leadership gains bird\'s-eye visibility over global cash flow, outstanding receivables, and sales pipeline metrics in real-time.',
      desc2: 'Managers can authorize purchase orders, sign digital invoices with biometric credentials, and track field staff attendance with geofenced BLE check-ins, eliminating bureaucratic operational bottlenecks.',
      specs: [
        { icon: 'bi-bar-chart-line-fill text-primary', title: 'Executive Financial KPIs', desc: 'Real-time interactive charting of ARR/MRR, operating cash flows, burn rates, and customer churn.' },
        { icon: 'bi-shield-check text-success', title: 'Biometric Document Sign-off', desc: 'Hardware-backed Face ID and fingerprint digital signatures for authorizing high-value purchase orders.' },
        { icon: 'bi-geo-alt text-warning', title: 'Geofenced Field Operations', desc: 'Automated GPS/BLE check-ins, route verification, and real-time task progress tracking for mobile field agents.' },
        { icon: 'bi-cloud-arrow-down text-info', title: 'Offline-First Enterprise CRM', desc: 'Complete client accounts, deal pipelines, and meeting notes accessible and editable without network connection.' }
      ],
      tags: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'OAuth2 / SSO', 'AWS S3', 'Chart.js']
    }
  };

  function openPortfolioAppModal(key) {
    const data = portfolioAppData[key];
    if (!data) return;

    const b = document.getElementById('portfolioModalBadge');
    if (b) b.innerHTML = data.badge;

    const sb = document.getElementById('portfolioModalSubbadge');
    if (sb) sb.innerHTML = data.subbadge;

    const t = document.getElementById('portfolioModalTitle');
    if (t) t.innerText = data.title;

    const d1 = document.getElementById('portfolioModalDesc1');
    if (d1) d1.innerText = data.desc1;

    const d2 = document.getElementById('portfolioModalDesc2');
    if (d2) d2.innerText = data.desc2;

    const specGrid = document.getElementById('portfolioModalSpecGrid');
    if (specGrid && data.specs) {
      specGrid.innerHTML = data.specs.map(s => `
        <div class="service-spec-item">
          <h5><i class="bi ${s.icon}"></i> ${s.title}</h5>
          <p>${s.desc}</p>
        </div>
      `).join('');
    }

    const tagsBox = document.getElementById('portfolioModalTechTags');
    if (tagsBox && data.tags) {
      tagsBox.innerHTML = data.tags.map(tag => `<span class="badge bg-light text-dark border px-2 py-1">${tag}</span>`).join(' ');
    }

    const modalEl = document.getElementById('portfolioDetailModal');
    if (modalEl && window.bootstrap) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  }

  // Attach click listeners to all View App Details buttons in portfolio
  document.querySelectorAll('.portfolio-view-details').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const key = this.getAttribute('data-app-key');
      if (key) {
        openPortfolioAppModal(key);
      }
    });
  });

  // ==========================================
  // Helper: Toast Notifications
  // ==========================================
  function showNotification(msg, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `alert alert-${type === 'success' ? 'success' : 'primary'} shadow-lg position-fixed bottom-0 start-50 translate-middle-x mb-4`;
    toast.style.zIndex = '3000';
    toast.style.borderRadius = '50px';
    toast.style.padding = '12px 24px';
    toast.innerHTML = `<i class="bi bi-${type === 'success' ? 'check-circle-fill' : 'info-circle-fill'} me-2"></i> ${msg}`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function (m) { return map[m]; });
  }

});

