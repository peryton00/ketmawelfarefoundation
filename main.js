/* ============================================
   KETMA WELFARE FOUNDATION — Main JavaScript
   All content rendered from content.json
   ============================================ */

(function () {
  'use strict';

  // ===== SVG ICON LIBRARY =====
  const SVG_ICONS = {
    // Pillar icons
    earth: `<svg viewBox="0 0 32 32" fill="none" stroke="#F4F1EA" stroke-width="2" stroke-linecap="round"><circle cx="16" cy="16" r="12"/><path d="M4 16h24M16 4c-4 4-4 12 0 16M16 4c4 4 4 12 0 16M8 8c2 3 6 5 8 5s6-2 8-5M8 24c2-3 6-5 8-5s6 2 8 5"/></svg>`,
    people: `<svg viewBox="0 0 32 32" fill="none" stroke="#F4F1EA" stroke-width="2" stroke-linecap="round"><circle cx="16" cy="10" r="5"/><path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10"/><circle cx="26" cy="12" r="3"/><path d="M29 26c0-3-2-6-5-7"/><circle cx="6" cy="12" r="3"/><path d="M3 26c0-3 2-6 5-7"/></svg>`,
    building: `<svg viewBox="0 0 32 32" fill="none" stroke="#F4F1EA" stroke-width="2" stroke-linecap="round"><rect x="6" y="10" width="20" height="18" rx="1"/><path d="M16 4l12 6M16 4L4 10"/><rect x="12" y="20" width="8" height="8"/><rect x="10" y="14" width="4" height="4"/><rect x="18" y="14" width="4" height="4"/></svg>`,
    // Domain icons
    tree: `<svg viewBox="0 0 24 24" fill="none" stroke="#B0D182" stroke-width="1.8" stroke-linecap="round"><path d="M12 22v-8"/><path d="M12 14C8 14 5 10 7 6c1-2 3-3 5-4 2 1 4 2 5 4 2 4-1 8-5 8z"/><path d="M8 18c-2 0-3-1-3-3"/><path d="M16 18c2 0 3-1 3-3"/></svg>`,
    leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="#B0D182" stroke-width="1.8" stroke-linecap="round"><path d="M6 21c4-4 4-12 8-16 4 4 4 12-4 16"/><path d="M14 5c0 6-4 12-8 16"/><path d="M10 13l-4 4"/></svg>`,
    health: `<svg viewBox="0 0 24 24" fill="none" stroke="#B0D182" stroke-width="1.8" stroke-linecap="round"><path d="M12 4v16M4 12h16"/><rect x="4" y="4" width="16" height="16" rx="3"/></svg>`,
    women: `<svg viewBox="0 0 24 24" fill="none" stroke="#B0D182" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/></svg>`,
    tribal: `<svg viewBox="0 0 24 24" fill="none" stroke="#B0D182" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 22c0-4.4 3.6-8 8-8s8 3.6 8 8"/><path d="M12 4V2M8 5l-1-2M16 5l1-2"/></svg>`,
    enterprise: `<svg viewBox="0 0 24 24" fill="none" stroke="#B0D182" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/><circle cx="12" cy="15" r="2"/></svg>`,
    education: `<svg viewBox="0 0 24 24" fill="none" stroke="#B0D182" stroke-width="1.8" stroke-linecap="round"><path d="M22 10l-10-6L2 10l10 6 10-6z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><path d="M22 10v6"/></svg>`,
    disaster: `<svg viewBox="0 0 24 24" fill="none" stroke="#B0D182" stroke-width="1.8" stroke-linecap="round"><path d="M12 2L3 20h18L12 2z"/><path d="M12 9v4M12 16v1"/></svg>`,
    csr: `<svg viewBox="0 0 24 24" fill="none" stroke="#B0D182" stroke-width="1.8" stroke-linecap="round"><path d="M16 4h4v4M20 4L12 12M8 4H4v16h16v-4"/><circle cx="12" cy="12" r="3"/></svg>`,
    research: `<svg viewBox="0 0 24 24" fill="none" stroke="#B0D182" stroke-width="1.8" stroke-linecap="round"><circle cx="10" cy="10" r="7"/><path d="M15 15l6 6"/><path d="M10 7v6M7 10h6"/></svg>`,
    // Product icons
    oil: `<svg viewBox="0 0 24 24" fill="none" stroke="#6A8E4E" stroke-width="1.8" stroke-linecap="round"><path d="M12 3c-2 4-6 6-6 11a6 6 0 0 0 12 0c0-5-4-7-6-11z"/><circle cx="12" cy="15" r="2"/></svg>`,
    spray: `<svg viewBox="0 0 24 24" fill="none" stroke="#6A8E4E" stroke-width="1.8" stroke-linecap="round"><rect x="8" y="8" width="8" height="14" rx="2"/><path d="M10 8V5h4v3"/><path d="M12 5V3"/><path d="M5 12h-2M5 9l-2-1M5 15l-2 1"/></svg>`,
    incense: `<svg viewBox="0 0 24 24" fill="none" stroke="#6A8E4E" stroke-width="1.8" stroke-linecap="round"><path d="M12 3v14"/><path d="M12 3c-1 2 1 4 0 6s1 4 0 6"/><rect x="8" y="17" width="8" height="4" rx="1"/></svg>`,
    soap: `<svg viewBox="0 0 24 24" fill="none" stroke="#6A8E4E" stroke-width="1.8" stroke-linecap="round"><rect x="4" y="10" width="16" height="10" rx="3"/><path d="M8 10V8a4 4 0 0 1 8 0v2"/><circle cx="8" cy="6" r="1.5"/><circle cx="12" cy="4" r="1"/><circle cx="14" cy="7" r="1.5"/></svg>`,
    cleaner: `<svg viewBox="0 0 24 24" fill="none" stroke="#6A8E4E" stroke-width="1.8" stroke-linecap="round"><rect x="8" y="6" width="8" height="16" rx="2"/><path d="M11 6V3h2v3"/><path d="M10 2h4"/><path d="M4 11l3-1M4 14l3 0M4 17l3 1"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="#6A8E4E" stroke-width="1.8" stroke-linecap="round"><path d="M12 3L4 7v5c0 5.5 3.4 10.3 8 12 4.6-1.7 8-6.5 8-12V7l-8-4z"/><path d="M9 12l2 2 4-4"/></svg>`,
    tea: `<svg viewBox="0 0 24 24" fill="none" stroke="#6A8E4E" stroke-width="1.8" stroke-linecap="round"><path d="M17 12h2a2 2 0 0 1 0 4h-2"/><rect x="3" y="10" width="14" height="8" rx="2"/><path d="M3 18h14"/><path d="M6 18v2h8v-2"/><path d="M8 7c0-2 2-3 2-5M12 7c0-2 2-3 2-5"/></svg>`,
    // Social icons
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#F4F1EA"/></svg>`,
    // Contact icons
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="#6A8E4E" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 7l10 6 10-6"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="#6A8E4E" stroke-width="1.8" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    location: `<svg viewBox="0 0 24 24" fill="none" stroke="#6A8E4E" stroke-width="1.8" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  };

  // ===== GLOBAL STATE =====
  let siteData = null;
  let countersAnimated = false;
  let currentLang = localStorage.getItem('ketma_lang') || 'en';

  // ===== INITIALIZATION =====
  document.addEventListener('DOMContentLoaded', init);

  async function init() {
    try {
      const contentFile = currentLang === 'hi' ? 'content.hi.json' : 'content.json';
      const response = await fetch(contentFile);
      if (!response.ok) throw new Error('Failed to load content');
      siteData = await response.json();

      renderAllSections();
      initNavigation();
      initScrollAnimations();
      initCounterAnimation();
      initPressAccordion();
      initContactForm();
      initCookieNotice();
      initBackToTop();
      initWhatsApp();
      initHeroParticles();
      initLanguageToggle();
      updateMeta();

      // Hide loading screen
      setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        loader.classList.add('hidden-loader');
        setTimeout(() => loader.remove(), 700);
      }, 2000);

    } catch (err) {
      console.error('Initialization error:', err);
      document.getElementById('loading-screen').innerHTML = `
        <div class="text-center text-brand-cream p-8">
          <p class="text-xl mb-2">Unable to load content</p>
          <p class="text-brand-cream/60">Please refresh the page or try again later.</p>
        </div>`;
    }
  }

  // ===== META TAGS =====
  function updateMeta() {
    const m = siteData.meta;
    document.title = m.siteTitle;
    $('meta[name="description"]').attr('content', m.description);
    $('meta[name="keywords"]').attr('content', m.keywords);
    $('meta[property="og:title"]').attr('content', m.ogTitle);
    $('meta[property="og:description"]').attr('content', m.ogDescription);
    $('meta[name="twitter:title"]').attr('content', m.ogTitle);
    $('meta[name="twitter:description"]').attr('content', m.ogDescription);
  }

  // ===== RENDER ALL SECTIONS =====
  function renderAllSections() {
    renderHero();
    renderImpactNumbers();
    renderAbout();
    renderPillars();
    renderWorkDomains();
    renderStory();
    renderVisionMission();
    renderFlagship();
    renderCredentials();
    renderCouncil();
    renderCSR();
    renderGovernment();
    renderProducts();
    renderDonate();
    renderVolunteer();
    renderPress();
    renderContact();
    renderFooter();
  }

  // ===== 1. HERO =====
  function renderHero() {
    const h = siteData.hero;
    $('#hero-headline').text(h.headline);
    $('#hero-headline2').text(h.headlineLine2);
    $('#hero-sub').text(h.subheadline);

    const ctaHTML = h.ctaButtons.map(btn => {
      const cls = btn.style === 'primary' ? 'btn-primary' : btn.style === 'secondary' ? 'btn-secondary' : 'btn-ghost';
      return `<a href="${btn.target}" class="${cls}" data-gtm="${btn.gtm}">${btn.label}</a>`;
    }).join('');
    $('#hero-ctas').html(ctaHTML);

    // Auto-trigger hero animations
    setTimeout(() => {
      $('#hero .animate-section').addClass('visible');
    }, 2200);
  }

  // ===== 2. IMPACT NUMBERS =====
  function renderImpactNumbers() {
    const items = siteData.impactNumbers;
    // Show in two rows of 4
    const html = items.map((item, i) => `
      <div class="impact-card animate-section" data-delay="${i * 80}">
        <span class="impact-icon">${item.icon}</span>
        <div class="impact-number">
          <span class="counter-value" data-target="${item.number}" data-prefix="${item.prefix || ''}" data-suffix="${item.suffix || ''}" data-is-year="${item.isYear || false}">${item.prefix || ''}0${item.suffix || ''}</span>
        </div>
        <p class="impact-label">${item.label}</p>
      </div>
    `).join('');
    $('#impact-grid').html(html);
  }

  // ===== 3. ABOUT =====
  function renderAbout() {
    const a = siteData.about;
    const pHTML = a.paragraphs.map(p => `<p>${p}</p>`).join('');
    $('#about-paragraphs').html(pHTML);
    $('#about-quote').html(`<em>"${a.pullQuote}"</em>`);
  }

  // ===== 4. PILLARS =====
  function renderPillars() {
    const pillars = siteData.pillars;
    const html = pillars.map((p, i) => `
      <div class="pillar-card animate-section" style="transition-delay: ${i * 100}ms">
        <div class="pillar-icon">${SVG_ICONS[p.icon] || ''}</div>
        <h3 class="font-display text-xl sm:text-2xl text-brand-dark mb-3">${p.title}</h3>
        <p class="text-brand-dark/100 leading-relaxed text-sm">${p.description}</p>
      </div>
    `).join('');
    $('#pillars-grid').html(html);
  }

  // ===== 5. WORK DOMAINS =====
  function renderWorkDomains() {
    const wd = siteData.workDomains;
    $('#domains-title').text(wd.sectionTitle);
    const html = wd.domains.map((d, i) => `
      <div class="domain-card animate-section" style="transition-delay: ${i * 60}ms">
        <div class="domain-icon">${SVG_ICONS[d.icon] || ''}</div>
        <h4 class="font-display text-sm text-brand-cream mb-2">${d.title}</h4>
        <p class="text-brand-cream/60 text-xs leading-relaxed">${d.description}</p>
      </div>
    `).join('');
    $('#domains-grid').html(html);
  }

  // ===== 6. STORY / TIMELINE =====
  function renderStory() {
    const s = siteData.story;

    // Intro paragraphs
    const introHTML = s.introParagraphs.map(p => `<p>${p}</p>`).join('');
    $('#story-intro').html(introHTML);

    // Timeline items
    const timelineHTML = s.timeline.map((t, i) => {
      const side = i % 2 === 0 ? 'timeline-left' : 'timeline-right';
      return `
        <div class="timeline-item ${side} animate-section" style="transition-delay: ${i * 100}ms">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-year">${t.year}</span>
            <h4 class="font-display text-lg text-brand-dark mb-2">${t.title}</h4>
            <p class="text-brand-dark/100 text-sm leading-relaxed">${t.description}</p>
          </div>
        </div>`;
    }).join('');
    $('#timeline-items').html(timelineHTML);

    // President quote
    const q = s.presidentQuote;
    $('#president-quote').html(`
      <div class="president-quote-card">
        <p class="text-brand-cream text-xl sm:text-2xl font-display leading-relaxed mb-6">"${q.text}"</p>
        <div>
          <p class="text-brand-light font-semibold">${q.author}</p>
          <p class="text-brand-cream/60 text-sm">${q.designation}</p>
        </div>
      </div>
    `);
  }

  // ===== 7. VISION & MISSION =====
  function renderVisionMission() {
    $('#vision-text').text(siteData.vision.text);
    $('#mission-intro').text(siteData.mission.intro);

    const pillarsHTML = siteData.mission.pillars.map((p, i) => `
      <li class="flex items-start gap-4">
        <span class="shrink-0 w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center text-brand-cream font-display text-sm">${i + 1}</span>
        <div>
          <h4 class="font-semibold text-brand-dark mb-1">${p.icon} ${p.title}</h4>
          <p class="text-brand-dark/100 text-sm leading-relaxed">${p.text}</p>
        </div>
      </li>
    `).join('');
    $('#mission-pillars').html(pillarsHTML);
  }

  // ===== 8. FLAGSHIP INITIATIVE =====
  function renderFlagship() {
    const fi = siteData.flagshipInitiative;
    $('#flagship-title').text(fi.sectionTitle);
    $('#flagship-subtitle').text(fi.sectionSubtitle);

    // Phases
    const phasesHTML = fi.phases.map((phase, i) => `
      <div class="phase-card animate-section" style="transition-delay: ${i * 100}ms">
        <span class="phase-number">${phase.phaseNumber}</span>
        <div class="relative z-10">
          <div class="flex items-center gap-3 mb-4">
            <span class="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center text-brand-cream font-display text-lg">${phase.phaseNumber}</span>
            <h3 class="font-display text-xl sm:text-2xl text-brand-dark">Phase ${phase.phaseNumber} — ${phase.title}</h3>
          </div>
          <p class="text-brand-dark/100 mb-6 italic">${phase.description}</p>
          <ul class="space-y-3">
            ${phase.bullets.map(b => `
              <li class="flex items-start gap-3">
                <span class="shrink-0 mt-1.5 w-2 h-2 bg-brand-green rounded-full"></span>
                <span class="text-brand-dark/100 text-sm leading-relaxed">${b}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('');
    $('#flagship-phases').html(phasesHTML);

    // Dashboard
    const dash = fi.cumulativeDashboard;
    $('#dashboard-title').text(dash.title);
    const metricsHTML = dash.metrics.map((m, i) => `
      <div class="dashboard-metric animate-section" style="transition-delay: ${i * 60}ms">
        <p class="font-display text-lg text-brand-green mb-1">${m.value}</p>
        <p class="text-brand-dark/100 text-xs font-medium">${m.label}</p>
      </div>
    `).join('');
    $('#dashboard-metrics').html(metricsHTML);
  }

  // ===== 9. LEGAL CREDENTIALS =====
  function renderCredentials() {
    const creds = siteData.legalCredentials.credentials;
    const html = creds.map((c, i) => `
      <div class="credential-card animate-section" style="transition-delay: ${i * 60}ms">
        <p class="text-brand-cream/50 text-xs font-semibold uppercase tracking-wider mb-2">${c.label}</p>
        <p class="text-brand-cream font-semibold text-sm">${c.value}</p>
      </div>
    `).join('');
    $('#credentials-grid').html(html);
  }

  // ===== 10. GOVERNING COUNCIL =====
  function renderCouncil() {
    const gc = siteData.governingCouncil;
    $('#council-intro').text(gc.intro);

    const html = gc.members.map((m, i) => {
      const initials = m.name.split(' ').map(w => w[0]).join('').substring(0, 2);
      return `
        <div class="council-card animate-section" style="transition-delay: ${i * 80}ms">
          <div class="council-avatar">${initials}</div>
          <h4 class="font-display text-lg text-brand-dark mb-1">${m.name}</h4>
          <p class="text-brand-green font-semibold text-sm mb-2">${m.role}</p>
          <p class="text-brand-dark/100 text-xs leading-relaxed">${m.expertise}</p>
        </div>`;
    }).join('');
    $('#council-grid').html(html);
  }

  // ===== 11. CSR PARTNERSHIPS =====
  function renderCSR() {
    const csr = siteData.csrPartnership;
    $('#csr-title').text(csr.sectionTitle);
    $('#csr-intro').text(csr.intro);

    // Why Partner
    const whyHTML = csr.whyPartner.map((p, i) => `
      <div class="csr-card animate-section" style="transition-delay: ${i * 60}ms">
        <span class="text-2xl mb-3 block">${p.icon}</span>
        <h4 class="font-display text-lg text-brand-cream mb-2">${p.title}</h4>
        <p class="text-brand-cream/100 text-sm leading-relaxed">${p.description}</p>
      </div>
    `).join('');
    $('#csr-why-grid').html(whyHTML);

    // Models
    const modelsHTML = csr.models.map((m, i) => `
      <div class="csr-card animate-section" style="transition-delay: ${i * 80}ms">
        <h4 class="font-display text-lg text-brand-light mb-2">${m.title}</h4>
        <p class="text-brand-cream/100 text-sm leading-relaxed">${m.description}</p>
      </div>
    `).join('');
    $('#csr-models-grid').html(modelsHTML);

    // Implementation Partners
    const partnersHTML = csr.implementationPartners.map(p => `
      <div class="csr-card text-center px-8 py-6 animate-section">
        <h4 class="font-display text-lg text-brand-cream mb-2">${p.name}</h4>
        <p class="text-brand-cream/100 text-sm">${p.description}</p>
      </div>
    `).join('');
    $('#csr-partners-grid').html(partnersHTML);
  }

  // ===== 12. GOVERNMENT ENGAGEMENT =====
  function renderGovernment() {
    const gov = siteData.governmentEngagement;
    const html = gov.paragraphs.map(p => `<p>${p}</p>`).join('');
    $('#gov-paragraphs').html(html);
  }

  // ===== 13. PRODUCTS =====
  function renderProducts() {
    const prod = siteData.products;
    $('#products-tagline').text(prod.tagline);
    $('#products-note').html(`<em>${prod.bottomNote}</em>`);

    const html = prod.items.map((p, i) => `
      <div class="product-card animate-section" style="transition-delay: ${i * 70}ms">
        <div class="product-icon">${SVG_ICONS[p.icon] || ''}</div>
        <h4 class="font-display text-lg text-brand-dark mb-2">${p.name}</h4>
        <p class="text-brand-dark/100 text-sm leading-relaxed">${p.description}</p>
      </div>
    `).join('');
    $('#products-grid').html(html);
  }

  // ===== 14. DONATE =====
  function renderDonate() {
    const d = siteData.donate;
    $('#donate-intro').text(d.intro);

    // Tiers
    const tiersHTML = d.tiers.map((t, i) => `
      <div class="donate-tier animate-section" style="transition-delay: ${i * 70}ms">
        <div class="donate-tier-icon">${t.icon}</div>
        <div class="donate-tier-amount">${t.amount}</div>
        <p class="text-brand-dark/100 text-sm leading-relaxed">${t.impact}</p>
      </div>
    `).join('');
    $('#donate-tiers').html(tiersHTML);

    // Bank details
    const b = d.bankDetails;
    $('#bank-details').html(`
      <h4 class="font-display text-xl text-brand-dark mb-4">🏦 Bank Transfer</h4>
      <div class="space-y-3 text-sm">
        <div class="flex justify-between"><span class="text-brand-dark/80">Bank</span><span class="font-semibold">${b.bankName}</span></div>
        <div class="flex justify-between"><span class="text-brand-dark/80">Account Name</span><span class="font-semibold">${b.accountName}</span></div>
        <div class="flex justify-between"><span class="text-brand-dark/80">Account No.</span><span class="font-semibold">${b.accountNumber}</span></div>
        <div class="flex justify-between"><span class="text-brand-dark/80">IFSC</span><span class="font-semibold">${b.ifsc}</span></div>
        <div class="flex justify-between"><span class="text-brand-dark/80">Branch</span><span class="font-semibold">${b.branch}</span></div>
      </div>
    `);

    // UPI
    $('#upi-details').html(`
      <h4 class="font-display text-xl text-brand-dark mb-4">📱 UPI Payment</h4>
      <div class="text-center">
        <p class="text-brand-dark/100 text-sm mb-4">UPI ID: <span class="font-semibold text-brand-green">${d.upi.id}</span></p>
        <p class="text-brand-dark/100 text-xs">Scan QR code or use UPI ID to make a direct payment</p>
      </div>
    `);

    $('#donate-tax-note').text(d.taxNote);
    $('#donate-transparency').text(d.transparencyNote);
  }

  // ===== 15. VOLUNTEER =====
  function renderVolunteer() {
    const v = siteData.volunteer;
    $('#volunteer-intro').html(`"${v.intro}"`);

    const rolesHTML = v.roles.map((r, i) => `
      <div class="volunteer-card animate-section" style="transition-delay: ${i * 70}ms">
        <span class="text-3xl mb-3 block">${r.icon}</span>
        <h4 class="font-display text-lg text-brand-cream mb-2">${r.title}</h4>
        <p class="text-brand-cream/65 text-sm leading-relaxed">${r.description}</p>
      </div>
    `).join('');
    $('#volunteer-roles').html(rolesHTML);

    const otherHTML = v.otherWays.map(w => `
      <li class="flex items-start gap-3">
        <span class="shrink-0 mt-1.5 w-2 h-2 bg-brand-light rounded-full"></span>
        <span class="text-brand-cream/70 text-sm">${w}</span>
      </li>
    `).join('');
    $('#volunteer-other').html(otherHTML);
  }

  // ===== 16. PRESS RELEASE =====
  function renderPress() {
    const pr = siteData.pressRelease;

    const bodyHTML = `
      <div class="mb-6">
        <p class="text-brand-green font-bold text-xs uppercase tracking-widest mb-2">${pr.header}</p>
        <h3 class="font-display text-xl sm:text-2xl text-brand-dark mb-3">${pr.headline}</h3>
        <p class="text-brand-dark/60 text-sm italic mb-6">${pr.dateline}</p>
      </div>
      <div class="space-y-4 text-brand-dark/100 leading-relaxed text-sm">
        ${pr.body.map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="mt-8 pt-6 border-t border-brand-dark/10">
        <h4 class="font-display text-lg text-brand-dark mb-3">Media Contact</h4>
        <p class="text-sm text-brand-dark/90">
          <strong>${pr.mediaContact.name}</strong> — ${pr.mediaContact.designation}<br>
          📞 ${pr.mediaContact.phone} | ✉️ ${pr.mediaContact.email}
        </p>
      </div>
    `;
    $('#press-body').html(bodyHTML);

    // Key messages
    const msgHTML = pr.keyMessages.map(m => `
      <li class="flex items-start gap-3">
        <span class="shrink-0 mt-1 w-5 h-5 bg-brand-green rounded-md flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F4F1EA" stroke-width="3" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
        <span class="text-brand-dark/100 text-sm">${m}</span>
      </li>
    `).join('');
    $('#press-key-messages').html(msgHTML);
  }

  // ===== 17. CONTACT =====
  function renderContact() {
    const c = siteData.contact;
    $('#contact-intro').text(c.intro);

    // Subject dropdown
    c.formSubjects.forEach(s => {
      $('#cf-subject').append(`<option value="${s}">${s}</option>`);
    });

    // Contact info block
    const infoHTML = `
      <div class="flex items-start gap-4">
        <div class="shrink-0 w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center">${SVG_ICONS.email}</div>
        <div>
          <p class="font-semibold text-brand-dark text-sm mb-1">Email</p>
          <a href="mailto:${c.email}" class="text-brand-green hover:text-brand-dark transition-colors text-sm">${c.email}</a>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div class="shrink-0 w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center">${SVG_ICONS.phone}</div>
        <div>
          <p class="font-semibold text-brand-dark text-sm mb-1">Phone</p>
          <a href="tel:${c.phone}" class="text-brand-green hover:text-brand-dark transition-colors text-sm">${c.phone}</a>
        </div>
      </div>
      ${c.addresses.map(a => `
        <div class="flex items-start gap-4">
          <div class="shrink-0 w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center">${SVG_ICONS.location}</div>
          <div>
            <p class="font-semibold text-brand-dark text-sm mb-1">${a.type}</p>
            <p class="text-brand-dark/100 text-sm">${a.address}</p>
          </div>
        </div>
      `).join('')}
    `;
    $('#contact-info-block').html(infoHTML);

    // Map
    $('#contact-map').attr('src', c.mapEmbed);

    // Social links
    const socialHTML = Object.entries(c.socialLinks).map(([name, url]) => `
      <a href="${url}" class="social-icon" aria-label="${name}" target="_blank" rel="noopener noreferrer">
        ${SVG_ICONS[name] || ''}
      </a>
    `).join('');
    $('#social-links').html(socialHTML);
  }

  // ===== 18. FOOTER =====
  function renderFooter() {
    const f = siteData.footer;
    $('#footer-tagline').text(f.tagline);
    $('#footer-copyright').text(f.copyright);
    $('#footer-disclaimer').text(f.disclaimer);

    // Quick links
    const linksHTML = f.quickLinks.map(l => `
      <li><a href="${l.href}" class="text-brand-cream/60 hover:text-brand-light transition-colors text-sm">${l.label}</a></li>
    `).join('');
    $('#footer-links').html(linksHTML);

    // Legal
    $('#footer-legal').html(`
      <p><strong class="text-brand-cream/80">Reg. No.:</strong> ${f.legal.regNumber}</p>
      <p><strong class="text-brand-cream/80">Darpan ID:</strong> ${f.legal.darpanId}</p>
      <p class="text-xs leading-relaxed mt-2">${f.legal.regAct}</p>
    `);

    // Footer contact
    const c = siteData.contact;
    $('#footer-contact').html(`
      <p>✉️ <a href="mailto:${c.email}" class="hover:text-brand-light transition-colors">${c.email}</a></p>
      <p>📞 <a href="tel:${c.phone}" class="hover:text-brand-light transition-colors">${c.phone}</a></p>
      <p>📍 ${c.addresses[0].address}</p>
    `);

    // Footer social
    const socialHTML = Object.entries(c.socialLinks).map(([name, url]) => `
      <a href="${url}" class="social-icon-footer" aria-label="${name}" target="_blank" rel="noopener noreferrer">
        ${SVG_ICONS[name] || ''}
      </a>
    `).join('');
    $('#footer-social').html(socialHTML);
  }

  // ===== NAVIGATION =====
  function initNavigation() {
    const $navbar = $('#navbar');
    const $mobileBtn = $('#mobile-menu-btn');
    const $mobileMenu = $('#mobile-menu');
    let lastScroll = 0;

    // Scroll behavior
    $(window).on('scroll', function () {
      const scrollTop = $(this).scrollTop();

      // Navbar bg
      if (scrollTop > 60) {
        $navbar.addClass('scrolled');
      } else {
        $navbar.removeClass('scrolled');
      }

      // Scroll spy
      updateActiveNav();
      lastScroll = scrollTop;
    });

    // Mobile menu toggle
    $mobileBtn.on('click', function () {
      const isOpen = $mobileMenu.hasClass('translate-x-0');
      if (isOpen) {
        $mobileMenu.removeClass('translate-x-0').addClass('translate-x-full');
        $mobileBtn.removeClass('hamburger-open');
        $mobileBtn.attr('aria-expanded', 'false');
        $('body').removeClass('overflow-hidden');
      } else {
        $mobileMenu.removeClass('translate-x-full').addClass('translate-x-0');
        $mobileBtn.addClass('hamburger-open');
        $mobileBtn.attr('aria-expanded', 'true');
        $('body').addClass('overflow-hidden');
      }
    });

    // Close mobile menu on link click
    $('.mobile-nav-link').on('click', function () {
      $mobileMenu.removeClass('translate-x-0').addClass('translate-x-full');
      $mobileBtn.removeClass('hamburger-open');
      $mobileBtn.attr('aria-expanded', 'false');
      $('body').removeClass('overflow-hidden');
    });

    // Smooth scroll for all anchor links
    $('a[href^="#"]').on('click', function (e) {
      const target = $(this.getAttribute('href'));
      if (target.length) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 72
        }, 600, 'swing');
      }
    });
  }

  // Scroll Spy
  function updateActiveNav() {
    const sections = ['about', 'work-domains', 'story', 'csr', 'products', 'donate', 'contact'];
    const scrollPos = $(window).scrollTop() + 120;

    let activeSection = '';
    sections.forEach(id => {
      const $section = $(`#${id}`);
      if ($section.length && $section.offset().top <= scrollPos) {
        activeSection = id;
      }
    });

    $('.nav-link, .mobile-nav-link').removeClass('active');
    if (activeSection) {
      $(`.nav-link[data-section="${activeSection}"], .mobile-nav-link[data-section="${activeSection}"]`).addClass('active');
    }
  }

  // ===== SCROLL ANIMATIONS (Intersection Observer) =====
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything
      $('.animate-section').addClass('visible');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.animate-section').forEach(el => {
      // Don't observe hero elements (they animate via timeout)
      if (!el.closest('#hero')) {
        observer.observe(el);
      }
    });
  }

  // ===== ANIMATED COUNTERS =====
  function initCounterAnimation() {
    if (!('IntersectionObserver' in window)) {
      animateCounters();
      return;
    }

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const impactSection = document.getElementById('impact-numbers');
    if (impactSection) counterObserver.observe(impactSection);
  }

  function animateCounters() {
    document.querySelectorAll('.counter-value').forEach(el => {
      const target = parseFloat(el.getAttribute('data-target'));
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const isYear = el.getAttribute('data-is-year') === 'true';

      if (isYear) {
        // Years: just display directly after a brief delay
        setTimeout(() => {
          el.textContent = prefix + target + suffix;
        }, 400);
        return;
      }

      const duration = 2000;
      const startTime = Date.now();
      const isDecimal = target % 1 !== 0;

      function updateCounter() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;

        if (isDecimal) {
          el.textContent = prefix + current.toFixed(1) + suffix;
        } else {
          el.textContent = prefix + Math.floor(current) + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          if (isDecimal) {
            el.textContent = prefix + target.toFixed(1) + suffix;
          } else {
            el.textContent = prefix + target + suffix;
          }
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // ===== PRESS ACCORDION =====
  function initPressAccordion() {
    const toggle = document.getElementById('press-toggle');
    const content = document.getElementById('press-content');

    if (!toggle || !content) return;

    toggle.addEventListener('click', () => {
      const isExpanded = toggle.classList.contains('expanded');
      if (isExpanded) {
        content.style.maxHeight = '0';
        toggle.classList.remove('expanded');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        toggle.classList.add('expanded');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // ===== CONTACT FORM =====
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const subject = form.elements.subject.value;
      const message = form.elements.message.value.trim();

      if (!name || !email || !subject || !message) {
        showFormStatus('Please fill in all required fields.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showFormStatus('Please enter a valid email address.', 'error');
        return;
      }

      // Simulate success (no backend)
      showFormStatus('Thank you for your message! We will get back to you within 48 hours.', 'success');
      form.reset();
    });
  }

  function showFormStatus(msg, type) {
    const el = document.getElementById('form-status');
    el.className = `mt-4 p-4 rounded-xl text-sm font-medium form-${type}`;
    el.textContent = msg;
    el.classList.remove('hidden');

    setTimeout(() => {
      el.classList.add('hidden');
    }, 6000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ===== COOKIE NOTICE =====
  function initCookieNotice() {
    const notice = document.getElementById('cookie-notice');
    if (!notice) return;

    // Check if already accepted
    if (localStorage.getItem('ketma_cookies') === 'accepted') return;

    setTimeout(() => {
      notice.classList.remove('hidden');
      setTimeout(() => notice.classList.add('cookie-visible'), 50);
    }, 3000);

    document.getElementById('cookie-accept')?.addEventListener('click', () => {
      localStorage.setItem('ketma_cookies', 'accepted');
      notice.classList.remove('cookie-visible');
      setTimeout(() => notice.classList.add('hidden'), 500);
    });

    document.getElementById('cookie-dismiss')?.addEventListener('click', () => {
      notice.classList.remove('cookie-visible');
      setTimeout(() => notice.classList.add('hidden'), 500);
    });
  }

  // ===== BACK TO TOP =====
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', () => {
      $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
    });
  }

  // ===== WHATSAPP CTA =====
  function initWhatsApp() {
    const btn = document.getElementById('whatsapp-cta');
    if (!btn || !siteData) return;

    const phone = siteData.contact.phone.replace(/[^0-9]/g, '');
    const msg = encodeURIComponent(siteData.contact.whatsappMessage);
    btn.href = `https://wa.me/${phone}?text=${msg}`;

    $(window).off('scroll.whatsapp').on('scroll.whatsapp', function () {
      if ($(this).scrollTop() > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });
  }

  // ===== LANGUAGE TOGGLE =====
  function initLanguageToggle() {
    updateLangButtons();

    $('.lang-toggle-btn').on('click', function (e) {
      e.preventDefault();
      const newLang = currentLang === 'en' ? 'hi' : 'en';
      switchLanguage(newLang);
    });
  }

  async function switchLanguage(lang) {
    if (lang === currentLang) return;

    $('body').fadeOut(200, async function () {
      try {
        const contentFile = lang === 'hi' ? 'content.hi.json' : 'content.json';
        const response = await fetch(contentFile);
        if (!response.ok) throw new Error('Failed to load content');

        currentLang = lang;
        siteData = await response.json();
        localStorage.setItem('ketma_lang', lang);

        renderAllSections();
        updateMeta();
        updateLangButtons();

        // Re-init specific components and animations
        countersAnimated = false; // Reset counter state for re-render
        initCounterAnimation();
        initScrollAnimations();
        initWhatsApp();

        $('body').fadeIn(300);
      } catch (err) {
        console.error('Language switch error:', err);
        $('body').fadeIn(200);
      }
    });
  }

  function updateLangButtons() {
    const btnText = currentLang === 'en' ? 'EN | हिं' : 'हिं | EN';
    $('.lang-toggle-btn').text(btnText);
    $('#lang-toggle').text(btnText);
    $('#lang-toggle-mobile').text(btnText);
  }

  // ===== HERO PARTICLES =====
  function initHeroParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;

    const leafSVG = `<svg width="18" height="24" viewBox="0 0 18 24" fill="none"><path d="M9 0C6 4 2 8 2 14c0 4 3 8 7 10-2-4-2-10 4-14C7 14 7 20 9 24c6-4 7-8 7-10C16 8 12 4 9 0z" fill="#6A8E4E" opacity="0.35"/></svg>`;

    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.className = 'hero-particle';
      particle.innerHTML = leafSVG;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (10 + Math.random() * 15) + 's';
      particle.style.animationDelay = (Math.random() * 10) + 's';
      particle.style.transform = `scale(${0.5 + Math.random() * 0.8})`;
      container.appendChild(particle);
    }
  }

})();