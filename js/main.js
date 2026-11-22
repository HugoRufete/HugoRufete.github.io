/* =========================================
   RENDER
   Builds the index, the work grid and the sections from js/data.js.
   ========================================= */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const tocEl = document.querySelector('.toc');
const sectionsEl = document.getElementById('sections');

const number = n => String(n).padStart(2, '0');

function renderWorkGrid() {
  return `
    <div class="work-grid">
      ${PROJECTS.map((project, i) => `
        <a class="work-card"
           href="${project.media}"
           target="_blank"
           rel="noopener noreferrer">
          <div class="work-card__media">
            <img src="${project.image}" alt="${project.title} preview" width="960" height="540" loading="lazy">
            ${project.type === 'video'
              ? `<video class="work-card__video" muted loop playsinline preload="none" poster="${project.image}" aria-hidden="true">
                   <source src="${project.media}" type="video/mp4">
                 </video>`
              : ''}
            <span class="work-card__index" aria-hidden="true">${number(i + 1)}</span>
            ${project.type === 'video' ? '<span class="work-card__play" aria-hidden="true"></span>' : ''}
          </div>
          <div class="work-card__body">
            <span class="work-card__kind">${project.kind}</span>
            <h3 class="work-card__title">${project.title}</h3>
            <span class="work-card__description">${project.description}</span>
            <span class="work-card__action" aria-hidden="true">View ${project.type === 'video' ? 'Video' : 'Image'} <span>↗</span></span>
          </div>
        </a>
      `).join('')}
    </div>
  `;
}

SECTIONS.forEach((sectionData, i) => {
  const index = number(i + 1);

  /* Index entry */
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.href = `#${sectionData.id}`;
  link.dataset.target = sectionData.id;
  link.innerHTML = `<span class="toc-index" aria-hidden="true">${index}</span><span>${sectionData.label}</span>`;
  li.appendChild(link);
  tocEl.appendChild(li);

  /* Section */
  const section = document.createElement('section');
  section.className = `section${sectionData.layout === 'work' ? ' section--work' : ''}`;
  section.id = sectionData.id;

  const body = sectionData.layout === 'work'
    ? renderWorkGrid()
    : `<div class="panel">${sectionData.content || ''}</div>`;

  section.innerHTML = `
    <header class="section-heading">
      <span class="section-index" aria-hidden="true">${index}</span>
      <div>
        <h2>${sectionData.title}</h2>
        <p class="section-subtitle">${sectionData.subtitle}</p>
      </div>
    </header>
    ${body}
  `;
  sectionsEl.appendChild(section);
});

/* =========================================
   SUBTLE WHITE GLOW — follows the pointer
   ========================================= */
document.querySelectorAll('.panel, .work-card').forEach(el => {
  let frame = 0;
  let lastEvent = null;

  el.addEventListener('pointermove', event => {
    lastEvent = { x: event.clientX, y: event.clientY };
    if (frame) return;

    frame = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${lastEvent.x - rect.left}px`);
      el.style.setProperty('--my', `${lastEvent.y - rect.top}px`);
      frame = 0;
    });
  });
});

/* =========================================
   MOTION — hover previews and showreel
   ========================================= */
const reelToggle = document.querySelector('.reel-toggle');

if (reduceMotion) {
  document.querySelectorAll('.work-card__video').forEach(video => video.remove());

  const reel = document.querySelector('.masthead-media video');
  if (reel) {
    reel.removeAttribute('autoplay');
    reel.pause();
  }
  if (reelToggle) reelToggle.hidden = true;
} else {
  if (reelToggle) {
    const reel = document.querySelector('.masthead-media video');
    const label = reelToggle.querySelector('.reel-label');

    reelToggle.addEventListener('click', () => {
      const paused = reel.paused;
      if (paused) reel.play().catch(() => {});
      else reel.pause();

      reelToggle.classList.toggle('is-paused', !paused);
      reelToggle.setAttribute('aria-pressed', String(!paused));
      reelToggle.setAttribute('aria-label', paused ? 'Pause showreel' : 'Play showreel');
      label.textContent = paused ? 'Pause' : 'Play';
    });
  }

  document.querySelectorAll('.work-card').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;

    const play = () => {
      const promise = video.play();
      if (promise && promise.catch) promise.catch(() => {});
    };
    const pause = () => video.pause();

    card.addEventListener('pointerenter', play);
    card.addEventListener('pointerleave', pause);
    card.addEventListener('focusin', play);
    card.addEventListener('focusout', pause);
  });
}

/* =========================================
   SCROLL SPY
   ========================================= */
const tocLinks = {};
tocEl.querySelectorAll('a').forEach(a => { tocLinks[a.dataset.target] = a; });
const headerLinks = document.querySelectorAll('.site-nav a');

const visibleSections = new Set();
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) visibleSections.add(entry.target.id);
    else visibleSections.delete(entry.target.id);
  });

  let activeId = null;
  for (const section of SECTIONS) {
    if (visibleSections.has(section.id)) {
      activeId = section.id;
      break;
    }
  }

  Object.entries(tocLinks).forEach(([id, a]) => {
    const active = id === activeId;
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });

  headerLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${activeId}`);
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

document.querySelectorAll('.section').forEach(section => spy.observe(section));
