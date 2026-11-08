(() => {
  'use strict';

  const $ = (selector) => document.querySelector(selector);
  const toast = $('#toast');
  let toastTimer;

  function showToast(en, ta) {
    if (!toast) return;
    toast.textContent = document.documentElement.lang === 'ta' ? ta : en;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
  }

  function setLanguage(language) {
    const lang = language === 'ta' ? 'ta' : 'en';
    document.documentElement.lang = lang;
    const toggle = $('#language-toggle');
    if (toggle) {
      toggle.setAttribute('aria-label', lang === 'en' ? 'Switch website language to Tamil' : 'Switch website language to English');
      toggle.setAttribute('aria-pressed', String(lang === 'ta'));
    }
    try { localStorage.setItem('kirthik-nikkila-family-language', lang); } catch (_) {}
  }

  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('kirthik-nikkila-family-language') || 'en'; } catch (_) {}
  setLanguage(savedLanguage);
  $('#language-toggle')?.addEventListener('click', () => {
    setLanguage(document.documentElement.lang === 'en' ? 'ta' : 'en');
  });

  const progress = $('#scroll-progress');
  const updateProgress = () => {
    const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (progress) progress.style.width = `${Math.min(100, window.scrollY / total * 100)}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();

  const revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: '0px 0px 55px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('revealed'));
  }

  $('#copy-address')?.addEventListener('click', async () => {
    const address = 'Swarna Mahal, Covai to Salem NH Road, Chengapalli, Tirupur, Tamil Nadu, India';
    try {
      await navigator.clipboard.writeText(address);
      showToast('Venue address copied!', 'முகவரி நகலெடுக்கப்பட்டது!');
    } catch (_) {
      showToast('Use the directions button to view the address.', 'முகவரியைக் காண வழிகாட்டி பொத்தானைப் பயன்படுத்தவும்.');
    }
  });

  // Try the wedding melody on arrival; some browsers require a first interaction.
  const musicToggle = $('#music-toggle');
  const weddingMelody = $('#wedding-melody');
  if (musicToggle && weddingMelody) {
    weddingMelody.volume = .35;

    const syncMusicButton = () => {
      const isPlaying = !weddingMelody.paused;
      const isTamil = document.documentElement.lang === 'ta';
      musicToggle.classList.toggle('playing', isPlaying);
      musicToggle.setAttribute('aria-pressed', String(isPlaying));
      musicToggle.setAttribute('aria-label', isTamil
        ? (isPlaying ? 'திருமண இசையை நிறுத்து' : 'மென்மையான திருமண இசையைக் கேட்க')
        : (isPlaying ? 'Pause soft wedding melody' : 'Play original soft wedding melody'));
    };

    const stopAutoStart = () => {
      document.removeEventListener('click', startMusicOnInteraction);
      document.removeEventListener('keydown', startMusicOnInteraction);
    };

    const startMusicOnInteraction = (event) => {
      if (musicToggle.contains(event.target)) return;
      weddingMelody.play().catch(syncMusicButton);
    };

    document.addEventListener('click', startMusicOnInteraction);
    document.addEventListener('keydown', startMusicOnInteraction);

    musicToggle.addEventListener('click', async () => {
      stopAutoStart();
      if (!weddingMelody.paused) {
        weddingMelody.pause();
      } else {
        try {
          await weddingMelody.play();
        } catch (_) {
          showToast('Sound could not start. Please try again.', 'இசையை இயக்க முடியவில்லை. மீண்டும் முயலவும்.');
        }
      }
      syncMusicButton();
    });
    weddingMelody.addEventListener('pause', syncMusicButton);
    weddingMelody.addEventListener('play', syncMusicButton);
    weddingMelody.addEventListener('play', stopAutoStart);
    $('#language-toggle')?.addEventListener('click', syncMusicButton);
    syncMusicButton();
    weddingMelody.play().catch(syncMusicButton);
  }

  $('#print-button')?.addEventListener('click', () => window.print());
})();
