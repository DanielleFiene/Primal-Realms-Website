/**
 * ===== PRIMALREALMS CONFIGURATION MAPS =====
 * Centralized configuration for all theme, audio, features, and UI settings
 * Keeps the codebase tidy and maintainable
 */

// ===== THEME & COLOR CONFIGURATION =====
const themeConfig = {
    colors: {
        bgDark: '#0a0a0a',
        bgWarm: '#1a1410',
        text: '#d4c4a0',
        accent: '#c87830',
        accentDark: '#9e5e1f',
        secondary: '#2a3040'
    },
    typography: {
        family: "'Cinzel', Georgia, serif",
        letterSpacing: '0.8px',
        lineHeight: 1.8
    },
    animations: {
        transitionSmooth: '0.6s ease-in-out',
        fadeInDuration: '1.8s',
        glowDuration: '6s',
        mistDrift: {
            layer1: '25s ease-in-out infinite',
            layer2: '35s ease-in-out infinite',
            layer3: '45s ease-in-out infinite'
        }
    }
};

// ===== FEATURES DATA MAP =====
const featuresConfig = {
    title: 'The Heart of Primal Realms',
    items: [
        {
            id: 'tracking',
            text: 'Your dog hears what you can\'t see. Blood trails wash away in the rain. The hunt is never the same twice.',
            icon: '▪'
        },
        {
            id: 'settlement',
            text: 'Your first night is a campfire and a stick. Your grandchildren inherit a fortress.',
            icon: '▪'
        },
        {
            id: 'cultures',
            text: 'The cliff-dwellers worship eagles. The smiths worship iron. The pack-runners worship nothing but the hunt.',
            icon: '▪'
        },
        {
            id: 'dynasty',
            text: 'You will die. Your daughter takes over. She has your eyes and her mother\'s instinct for danger.',
            icon: '▪'
        },
        {
            id: 'legacy',
            text: 'Hunt a valley empty and the wolves move toward your settlement. Betray the cliff-dwellers and their archers remember. The world doesn\'t forget.',
            icon: '▪'
        }
    ]
};

// ===== AUDIO CONFIGURATION MAP =====
const audioConfig = {
    elementId: 'ambientAudio',
    toggleId: 'audioToggle',
    sourceFile: 'audio/The Great Silence_full.mp3',
    loop: true,
    autoplay: true,
    muted: false,
    preload: 'metadata',
    classes: {
        playing: 'playing',
        muted: 'muted'
    },
    states: {
        idle: 'idle',
        playing: 'playing',
        paused: 'paused',
        loading: 'loading'
    },
    preloadTrigger: 'mouseenter',
    accessibility: {
        ariaLabel: 'Toggle ambient audio',
        keyTriggers: ['Enter', ' ']
    }
};

// ===== UI ELEMENTS MAP =====
const uiElementsConfig = {
    scroll: {
        elementClass: 'fade-on-scroll',
        inViewClass: 'in-view'
    },
    buttons: {
        steam: {
            selector: '.btn-primary',
            href: 'https://store.steampowered.com',
            text: 'Wishlist on Steam',
            target: '_blank'
        },
        discord: {
            selector: '.btn-secondary',
            href: 'https://discord.gg',
            text: 'Join Discord',
            target: '_blank'
        }
    },
    footer: {
        yearElement: 'year',
        copyright: 'DF Digital'
    }
};

// ===== INTERSECTION OBSERVER CONFIGURATION =====
const observerConfig = {
    scroll: {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    }
};

// ===== SECTIONS CONFIGURATION =====
const sectionsConfig = {
    hero: {
        id: 'hero',
        height: '100vh',
        title: 'PRIMALREALMS',
        subtitle: 'One exile. Five eras. A bloodline that outlasts empires.'
    },
    concept: {
        id: 'concept',
        title: 'Concept'
    },
    features: {
        id: 'features',
        title: 'The Heart of Primal Realms'
    },
    comingSoon: {
        id: 'coming-soon',
        title: 'Coming to Steam',
        subtitle: 'Coming to Steam'
    },
    footer: {
        id: 'footer',
        company: 'DF Digital',
        year: new Date().getFullYear()
    }
};

// ===== COPY & SHARING CONFIGURATION =====
const shareConfig = {
    title: 'PRIMALREALMS',
    description: 'Begin as an outcast. Build a dynasty. Fly over your kingdom.',
    url: window.location.href,
    image: 'https://via.placeholder.com/1200x630?text=PrimalRealms',
    social: {
        twitter: {
            handle: '@DFDigital',
            hashtags: ['PrimalRealms', 'GameDev', 'IndieGame']
        },
        discord: 'https://discord.gg',
        steam: 'https://store.steampowered.com'
    }
};

// ===== SCROLL BEHAVIOR CONFIGURATION =====
const scrollConfig = {
    smooth: true,
    duration: 0.6,
    easing: 'ease-in-out'
};

/**
 * Helper function to get theme color by name
 */
function getThemeColor(colorName) {
    return themeConfig.colors[colorName] || null;
}

/**
 * Helper function to get feature by ID
 */
function getFeature(featureId) {
    return featuresConfig.items.find(item => item.id === featureId) || null;
}

/**
 * Helper function to get section config by ID
 */
function getSection(sectionId) {
    return Object.values(sectionsConfig).find(section => section.id === sectionId) || null;
}

// Export configurations (for modular use if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        themeConfig,
        featuresConfig,
        audioConfig,
        uiElementsConfig,
        observerConfig,
        sectionsConfig,
        shareConfig,
        scrollConfig
    };
}
