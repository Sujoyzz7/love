// ==========================================
// ROMANTIC LOVE WEBSITE - INTERACTIVE FEATURES
// ==========================================

// ========== CONFIGURATION ==========
const CONFIG = {
    // Set your special date here (YYYY, MM-1, DD) - Month is 0-indexed
    countdownDate: new Date(2026, 5, 14).getTime(), // Example: June 14, 2026
    
    // Music settings
    musicAutoPlay: false,
    
    // Floating hearts
    heartsCount: 15,
    heartsInterval: 3000
};

// ========== LOVE LETTERS CONTENT ==========
const loveLetters = {
    1: {
        title: "To My Forever",
        date: "Written from the heart",
        content: `
            <p>My Dearest Love,</p>
            <p>As I sit here writing this, my heart is overflowing with emotions that words can barely capture. You are the most beautiful thing that has ever happened to me, and I thank the universe every single day for bringing you into my life.</p>
            <p>You are my sunrise and my sunset, my calm in the storm, and my adventure in the mundane. Every moment with you feels like a dream I never want to wake up from.</p>
            <p>I love the way you laugh at my silly jokes, the way your eyes light up when you talk about your passions, and the way you make even the ordinary moments feel extraordinary.</p>
            <p>You've taught me what it means to truly love someone - not just with words, but with actions, patience, and unwavering support. You've shown me that home isn't a place, it's a person. And you are my home.</p>
            <p>I promise to love you fiercely, to support your dreams as if they were my own, to hold your hand through every challenge, and to celebrate every victory with you.</p>
            <p>Thank you for being you. Thank you for choosing me. Thank you for this beautiful journey we're on together.</p>
            <p>You are my forever, and I am eternally grateful for you.</p>
        `
    },
    2: {
        title: "When You Miss Me",
        date: "For those moments apart",
        content: `
            <p>My Beautiful Love,</p>
            <p>If you're reading this, it means you're missing me. And I want you to know that wherever I am, whatever I'm doing, I'm missing you too.</p>
            <p>Distance means nothing when someone means everything. And you, my love, mean everything to me.</p>
            <p>Close your eyes and remember our favorite moments together. Remember how we laughed until our stomachs hurt, how we stayed up all night talking about everything and nothing, how we fit perfectly in each other's arms.</p>
            <p>Those memories aren't just in the past - they're promises of our future. Every moment we've shared is a building block of the beautiful life we're creating together.</p>
            <p>When you miss me, look at the sky. Whether it's day or night, know that we're under the same sky, breathing the same air, and my heart is beating in sync with yours.</p>
            <p>I carry you with me always - in my thoughts, in my heart, in every breath I take. You are my constant, my anchor, my safe place.</p>
            <p>Soon, we'll be together again. And until then, know that you are loved beyond measure, missed beyond words, and cherished beyond time.</p>
            <p>I love you more than yesterday, less than tomorrow.</p>
        `
    },
    3: {
        title: "Why I Choose You",
        date: "Every single day",
        content: `
            <p>My Darling,</p>
            <p>People often talk about finding "the one" as if it's a one-time event. But I've learned that love isn't just about finding the right person - it's about choosing them, every single day.</p>
            <p>And I choose you. Today, tomorrow, and for all the tomorrows to come.</p>
            <p>I choose you when you're happy and when you're sad. When you're confident and when you're doubting yourself. When everything is perfect and when life gets messy.</p>
            <p>I choose you because you make me want to be a better person. Not because you demand it, but because your love inspires me to grow, to learn, to evolve.</p>
            <p>I choose you because you see me - the real me, with all my flaws and imperfections - and you love me anyway. You've created a space where I can be vulnerable, authentic, and completely myself.</p>
            <p>I choose you because our love isn't just about the butterflies and romance (though we have plenty of that). It's about partnership, friendship, and building a life together that's bigger than both of us.</p>
            <p>I choose you because when I think about my future, every dream, every plan, every hope includes you. You're not just part of my future - you are my future.</p>
            <p>So yes, I choose you. Not because I have to, but because I want to. Not just today, but every day for the rest of my life.</p>
        `
    },
    4: {
        title: "Our Future Together",
        date: "Dreams we'll make reality",
        content: `
            <p>My Love, My Future,</p>
            <p>When I close my eyes and imagine the future, I see us. Always us.</p>
            <p>I see us waking up together on lazy Sunday mornings, sunlight streaming through the windows of our home. I see us cooking together, dancing in the kitchen, making a mess and laughing about it.</p>
            <p>I see us traveling the world, hand in hand, creating memories in every corner of the globe. From watching sunsets on tropical beaches to getting lost in the streets of ancient cities - every adventure will be perfect because we're together.</p>
            <p>I see us supporting each other's dreams, celebrating victories, and lifting each other up through challenges. I see us growing together, learning together, becoming the best versions of ourselves together.</p>
            <p>I see us building a family - whether that's just the two of us, with pets, or with children. I see a home filled with love, laughter, and warmth. A place where we both feel safe, cherished, and free to be ourselves.</p>
            <p>I see us growing old together, our hair turning gray, our faces showing the beautiful lines of a life well-lived and well-loved. I see us sitting on a porch somewhere, holding hands, still as in love as we are today - maybe even more.</p>
            <p>The future is uncertain, and life will surely throw us curveballs. But I'm not afraid, because I know we'll face it all together. Your hand in mine, my heart with yours.</p>
            <p>Our future is bright, my love. And I can't wait to live every moment of it with you.</p>
        `
    }
};

// ========== DOM ELEMENTS ==========
const elements = {
    musicToggle: document.getElementById('musicToggle'),
    bgMusic: document.getElementById('bgMusic'),
    navbar: document.getElementById('navbar'),
    navMenu: document.getElementById('navMenu'),
    hamburger: document.getElementById('hamburger'),
    navLinks: document.querySelectorAll('.nav-link'),
    heartsContainer: document.getElementById('heartsContainer'),
    galleryGrid: document.getElementById('galleryGrid'),
    galleryItems: null, // Will be set after gallery loads
    tabBtns: document.querySelectorAll('.tab-btn'),
    lightbox: document.getElementById('lightbox'),
    lightboxImg: document.getElementById('lightboxImg'),
    lightboxCaption: document.getElementById('lightboxCaption'),
    lightboxClose: document.querySelector('.lightbox-close'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    openLetterBtns: document.querySelectorAll('.open-letter-btn'),
    letterModal: document.getElementById('letterModal'),
    letterClose: document.querySelector('.letter-close'),
    letterTitle: document.getElementById('letterTitle'),
    letterDate: document.getElementById('letterDate'),
    letterBody: document.getElementById('letterBody'),
    countdownTimer: {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    }
};

// ========== MUSIC CONTROL ==========
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        elements.bgMusic.pause();
        elements.musicToggle.classList.remove('playing');
        elements.musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        elements.bgMusic.play().catch(err => {
            console.log('Music autoplay prevented by browser');
        });
        elements.musicToggle.classList.add('playing');
        elements.musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

elements.musicToggle.addEventListener('click', toggleMusic);

// Auto-play music if enabled (may be blocked by browser)
if (CONFIG.musicAutoPlay) {
    setTimeout(() => {
        toggleMusic();
    }, 1000);
}

// ========== NAVIGATION ==========
// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        elements.navbar.classList.add('scrolled');
    } else {
        elements.navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// Mobile menu toggle
elements.hamburger.addEventListener('click', () => {
    elements.hamburger.classList.toggle('active');
    elements.navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
elements.navLinks.forEach(link => {
    link.addEventListener('click', () => {
        elements.hamburger.classList.remove('active');
        elements.navMenu.classList.remove('active');
    });
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            elements.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ========== FLOATING HEARTS ANIMATION ==========
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    
    elements.heartsContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 12000);
}

// Create initial hearts
for (let i = 0; i < CONFIG.heartsCount; i++) {
    setTimeout(() => {
        createFloatingHeart();
    }, i * 200);
}

// Continuously create new hearts
setInterval(createFloatingHeart, CONFIG.heartsInterval);

// ========== GALLERY ==========
let currentImageIndex = 0;
let currentFilter = 'all';

// Gallery filter tabs
elements.tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active tab
        elements.tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter gallery
        currentFilter = btn.dataset.tab;
        filterGallery(currentFilter);
    });
});

function filterGallery(filter) {
    elements.galleryItems = document.querySelectorAll('.gallery-item');
    
    elements.galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Lightbox functionality
function openLightbox(index) {
    const visibleItems = Array.from(elements.galleryItems).filter(item => 
        item.style.display !== 'none'
    );
    
    currentImageIndex = index;
    const item = visibleItems[currentImageIndex];
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption');
    
    elements.lightboxImg.src = img.src;
    elements.lightboxCaption.textContent = caption.textContent;
    elements.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    elements.lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
    const visibleItems = Array.from(elements.galleryItems).filter(item => 
        item.style.display !== 'none'
    );
    
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = visibleItems.length - 1;
    } else if (currentImageIndex >= visibleItems.length) {
        currentImageIndex = 0;
    }
    
    const item = visibleItems[currentImageIndex];
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption');
    
    elements.lightboxImg.src = img.src;
    elements.lightboxCaption.textContent = caption.textContent;
}

// Gallery event listeners
setTimeout(() => {
    elements.galleryItems = document.querySelectorAll('.gallery-item');
    
    elements.galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const visibleItems = Array.from(elements.galleryItems).filter(i => 
                i.style.display !== 'none'
            );
            const visibleIndex = visibleItems.indexOf(item);
            openLightbox(visibleIndex);
        });
    });
}, 100);

elements.lightboxClose.addEventListener('click', closeLightbox);
elements.prevBtn.addEventListener('click', () => navigateLightbox(-1));
elements.nextBtn.addEventListener('click', () => navigateLightbox(1));

// Close lightbox on background click
elements.lightbox.addEventListener('click', (e) => {
    if (e.target === elements.lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (elements.lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    }
});

// ========== LOVE LETTERS ==========
elements.openLetterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const letterId = btn.dataset.letter;
        openLetter(letterId);
    });
});

function openLetter(letterId) {
    const letter = loveLetters[letterId];
    
    if (letter) {
        elements.letterTitle.textContent = letter.title;
        elements.letterDate.textContent = letter.date;
        elements.letterBody.innerHTML = letter.content;
        elements.letterModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLetter() {
    elements.letterModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

elements.letterClose.addEventListener('click', closeLetter);

// Close letter modal on background click
elements.letterModal.addEventListener('click', (e) => {
    if (e.target === elements.letterModal) {
        closeLetter();
    }
});

// Close letter modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.letterModal.classList.contains('active')) {
        closeLetter();
    }
});

// ========== COUNTDOWN TIMER ==========
function updateCountdown() {
    const now = new Date().getTime();
    const distance = CONFIG.countdownDate - now;
    
    if (distance < 0) {
        // Countdown finished - show celebration
        elements.countdownTimer.days.textContent = '00';
        elements.countdownTimer.hours.textContent = '00';
        elements.countdownTimer.minutes.textContent = '00';
        elements.countdownTimer.seconds.textContent = '00';
        
        // Trigger confetti or special message
        showCelebration();
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    elements.countdownTimer.days.textContent = String(days).padStart(2, '0');
    elements.countdownTimer.hours.textContent = String(hours).padStart(2, '0');
    elements.countdownTimer.minutes.textContent = String(minutes).padStart(2, '0');
    elements.countdownTimer.seconds.textContent = String(seconds).padStart(2, '0');
}

function showCelebration() {
    // Create confetti effect
    const confettiCount = 100;
    const colors = ['#ff6b9d', '#c9184a', '#ffd700', '#ffb3c6'];
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.zIndex = '10000';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = `floatUp ${Math.random() * 3 + 3}s linear`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 6000);
        }, i * 30);
    }
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.reason-card, .timeline-item, .gallery-item, .envelope-card, .song-card, .dream-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ========== EASTER EGG - SECRET SURPRISE ==========
// Click the heart in the nav logo 5 times to reveal a secret message
let heartClickCount = 0;
const navLogo = document.querySelector('.nav-logo i');

navLogo.addEventListener('click', () => {
    heartClickCount++;
    
    if (heartClickCount === 5) {
        showSecretMessage();
        heartClickCount = 0;
    }
});

function showSecretMessage() {
    const secretDiv = document.createElement('div');
    secretDiv.style.position = 'fixed';
    secretDiv.style.top = '50%';
    secretDiv.style.left = '50%';
    secretDiv.style.transform = 'translate(-50%, -50%)';
    secretDiv.style.background = 'linear-gradient(135deg, #ff6b9d 0%, #c9184a 100%)';
    secretDiv.style.color = 'white';
    secretDiv.style.padding = '3rem';
    secretDiv.style.borderRadius = '20px';
    secretDiv.style.boxShadow = '0 16px 48px rgba(255, 107, 157, 0.4)';
    secretDiv.style.zIndex = '10001';
    secretDiv.style.textAlign = 'center';
    secretDiv.style.maxWidth = '500px';
    secretDiv.style.animation = 'fadeInUp 0.5s ease';
    secretDiv.innerHTML = `
        <h2 style="font-family: 'Great Vibes', cursive; font-size: 3rem; margin-bottom: 1rem;">Secret Message 💖</h2>
        <p style="font-size: 1.2rem; line-height: 1.8;">
            You found the secret! Just like you discovered this hidden message, 
            you've discovered the deepest parts of my heart. You are my greatest treasure, 
            my sweetest secret, and my most beautiful discovery. I love you more than words can say! ❤️
        </p>
        <button onclick="this.parentElement.remove()" style="margin-top: 2rem; padding: 1rem 2rem; background: white; color: #c9184a; border: none; border-radius: 50px; cursor: pointer; font-weight: 600; font-size: 1rem;">
            Close ❤️
        </button>
    `;
    
    document.body.appendChild(secretDiv);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (secretDiv.parentElement) {
            secretDiv.remove();
        }
    }, 10000);
}

// ========== CONSOLE MESSAGE ==========
console.log('%c💖 Made with Love by Sujoy 💖', 'color: #ff6b9d; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
console.log('%cThis website was created to express my infinite love. Every line of code, every animation, every word - all crafted with love and devotion.', 'color: #c9184a; font-size: 14px;');

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('Love website initialized ❤️');
    
    // Add any initialization code here
    updateActiveNavLink();
});
