// ===== LOGO VISIBILITY ON SCROLL (IntersectionObserver) =====
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const logoFixed = document.querySelector('.logo-fixed');
    
    if (!heroSection || !logoFixed) return;
    
    const logoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hero is visible - hide the fixed logo
                logoFixed.classList.remove('visible');
            } else {
                // Hero is NOT visible - show the fixed logo
                logoFixed.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    logoObserver.observe(heroSection);
});

// ===== FADE ON SCROLL (IntersectionObserver) =====
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll(`.${uiElementsConfig.scroll.elementClass}`);
    const observerOptions = observerConfig.scroll;
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(uiElementsConfig.scroll.inViewClass);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// ===== AUDIO TOGGLE BUTTON (MUTE/UNMUTE) =====
document.addEventListener('DOMContentLoaded', function() {
    const audioToggle = document.getElementById(audioConfig.toggleId);
    const ambientAudio = document.getElementById(audioConfig.elementId);
    
    // Set initial state
    if (!ambientAudio.muted) {
        audioToggle.classList.add(audioConfig.classes.playing);
    }
    
    audioToggle.addEventListener('click', function() {
        if (ambientAudio.muted) {
            ambientAudio.muted = false;
            audioToggle.classList.add(audioConfig.classes.playing);
            // Ensure audio is playing when unmuted
            ambientAudio.play().catch(error => {
                console.log('Audio playback failed:', error);
            });
        } else {
            ambientAudio.muted = true;
            audioToggle.classList.remove(audioConfig.classes.playing);
        }
    });
});

// ===== DYNAMIC COPYRIGHT YEAR =====
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById(uiElementsConfig.footer.yearElement);
    yearElement.textContent = sectionsConfig.footer.year;
});

// ===== SMOOTH SCROLL ENHANCEMENT (for browsers that don't support smooth scroll in CSS) =====
if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

// ===== PERFORMANCE: LAZY LOAD AUDIO =====
let audioPreloaded = false;

document.addEventListener('DOMContentLoaded', function() {
    const audioToggle = document.getElementById(audioConfig.toggleId);
    
    audioToggle.addEventListener(audioConfig.preloadTrigger, function() {
        if (!audioPreloaded) {
            const audio = document.getElementById(audioConfig.elementId);
            audio.load();
            audioPreloaded = true;
        }
    }, { once: true });
});

// Handle logo click to scroll to top
document.addEventListener('DOMContentLoaded', function() {
    const logoFixed = document.querySelector('.logo-fixed');
    if (logoFixed) {
        logoFixed.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const audioToggle = document.getElementById(audioConfig.toggleId);
    
    audioToggle.addEventListener('keydown', function(e) {
        if (audioConfig.accessibility.keyTriggers.includes(e.key)) {
            e.preventDefault();
            audioToggle.click();
        }
    });
});
