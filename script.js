document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            smoothScroll(target);
        }
    });
});

const sections = document.querySelectorAll('.section');
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
});

const copyBtn = document.querySelector('.copy-btn');
if (copyBtn) {
    copyBtn.addEventListener('click', function() {
        const email = this.dataset.email;
        navigator.clipboard.writeText(email).then(() => {
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    });
}

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

const handleScroll = () => {
    requestAnimationFrame(() => {
        document.querySelectorAll('.section').forEach(section => {
            const rect = section.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                section.style.opacity = '1';
            }
        });
    });
};

let isScrolling = false;
document.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
            handleScroll();
            isScrolling = false;
        });
    }
});

const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    projectObserver.observe(card);
});

const contactCard = document.querySelector('.contact-card');
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

if (contactCard) {
    contactObserver.observe(contactCard);
}

// First check if device is mobile/tablet
const isMobileDevice = () => {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    console.log('Is Mobile Device:', check);
    return check;
};

// Only add custom cursor if not on mobile
if (!isMobileDevice()) {
    console.log('Adding custom cursor for desktop device');
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        * {
            cursor: none !important;
        }

        .cursor {
            width: 20px;
            height: 20px;
            border: 2px solid var(--accent-color);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s, background-color 0.3s;
            z-index: 9999;
            mix-blend-mode: difference;
        }

        a:hover ~ .cursor,
        button:hover ~ .cursor,
        .nav-item:hover ~ .cursor {
            width: 40px;
            height: 40px;
            background-color: var(--accent-color);
            border-color: transparent;
        }

        a,
        button,
        .nav-item {
            cursor: none !important;
        }
    `;
    document.head.appendChild(cursorStyle);
    console.log('Custom cursor styles added');

    // Create cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
    console.log('Cursor element created');

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        // console.log('Cursor position:', e.clientX, e.clientY); // Uncomment for detailed position logging
    });
    console.log('Mouse move event listener added');
} else {
    console.log('Custom cursor disabled for mobile device');
}

// Additional debug for touch capability
console.log('Touch capability:', 'ontouchstart' in window);
console.log('Max touch points:', navigator.maxTouchPoints);
console.log('User Agent:', navigator.userAgent);

const smoothScrollStyle = document.createElement('style');
smoothScrollStyle.textContent = `
    body {
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }

    .section {
        will-change: transform;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(smoothScrollStyle);

function smoothScroll(target) {
    const headerHeight = document.querySelector('nav').offsetHeight;
    const mobileOffset = window.innerWidth <= 768 ? 20 : 0;
    
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = targetPosition - headerHeight - mobileOffset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

const background = document.querySelector('.gradient-mesh');
let targetX = 0;
let targetY = 0;
let rotateX = 0;
let rotateY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    targetX = (mouseY - window.innerHeight / 2) * 0.01;
    targetY = (mouseX - window.innerWidth / 2) * 0.01;
    
    const x = (mouseX / window.innerWidth) * 100;
    const y = (mouseY / window.innerHeight) * 100;
    background.style.setProperty('--mouse-x', `${x}%`);
    background.style.setProperty('--mouse-y', `${y}%`);
});

function animateBackground() {
    rotateX += (targetX - rotateX) * 0.1;
    rotateY += (targetY - rotateY) * 0.1;
    
    background.style.setProperty('--rotate-x', `${rotateX}deg`);
    background.style.setProperty('--rotate-y', `${rotateY}deg`);
    
    requestAnimationFrame(animateBackground);
}

animateBackground();

const bentoItems = document.querySelectorAll('.bento-item');

bentoItems.forEach((item, index) => {
    const depth = 1 + (index * 0.1);
    
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) * 0.01 * depth;
        const moveY = (y - centerY) * 0.01 * depth;
        
        item.style.transform = `
            translate3d(${moveX}px, ${moveY}px, 0)
            scale(1.02)
        `;
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translate3d(0, 0, 0) scale(1)';
    });
});

let idleTimeout;
const IDLE_TIME = 3000; // seconds

function startIdleAnimation() {
    background.style.transition = 'transform 4s ease-in-out';
    
    function animate() {
        const time = Date.now() * 0.001;
        const rotateX = Math.sin(time) * 2;
        const rotateY = Math.cos(time) * 2;
        
        background.style.setProperty('--rotate-x', `${rotateX}deg`);
        background.style.setProperty('--rotate-y', `${rotateY}deg`);
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function resetIdleTimer() {
    clearTimeout(idleTimeout);
    background.style.transition = 'transform 0.1s ease';
    idleTimeout = setTimeout(startIdleAnimation, IDLE_TIME);
}

document.addEventListener('mousemove', resetIdleTimer);
resetIdleTimer();

function createScrollReveal() {
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.bento-item, .section').forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
}

createScrollReveal();

const progressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const winScroll = window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.height = `${scrolled}%`;
});

const magneticItems = document.querySelectorAll('.magnetic');

magneticItems.forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        item.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translate(0px, 0px)';
    });
});

const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + '+';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    
    window.requestAnimationFrame(step);
};

const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const value = parseInt(entry.target.dataset.value);
            animateValue(entry.target, 0, value, 2000);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statsObserver.observe(stat));

const sectionTransitions = document.querySelectorAll('section');
sectionTransitions.forEach(section => {
    section.classList.add('section-transition');
});

const transitionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sectionTransitions.forEach(section => transitionObserver.observe(section));

const sectionNav = document.querySelector('.section-nav');
const sectionNavBtn = document.querySelector('.section-nav-btn');

function getCurrentSectionIndex() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            return i;
        }
    }
    return 0;
}

function scrollToNextSection() {
    const currentIndex = getCurrentSectionIndex();
    const nextSection = sections[currentIndex + 1] || sections[0];
    
    if (nextSection) {
        const arrow = sectionNavBtn.querySelector('svg');
        arrow.style.transform = currentIndex === sections.length - 2 ? 'rotate(180deg)' : 'rotate(0deg)';
        
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

sectionNavBtn.addEventListener('click', scrollToNextSection);

let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const currentIndex = getCurrentSectionIndex();
        const arrow = sectionNavBtn.querySelector('svg');
        arrow.style.transform = currentIndex === sections.length - 1 ? 'rotate(180deg)' : 'rotate(0deg)';
    }, 50);
});

document.querySelectorAll('.project-card').forEach(card => {
    const expandBtn = card.querySelector('.expand-btn');
    
    expandBtn.addEventListener('click', () => {
        card.classList.toggle('collapsed');
        expandBtn.classList.toggle('expanded');
    });
});

document.querySelectorAll('.project-preview').forEach(preview => {
    preview.addEventListener('click', (e) => {
        if (!e.target.closest('.expand-btn')) {
            const card = preview.closest('.project-card');
            card.classList.toggle('collapsed');
        }
    });
});

document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.project-card');
        card.classList.toggle('collapsed');
    });
});

function shouldEnableCustomCursor() {
    // Check if device has touch capability
    const isTouchDevice = ('ontouchstart' in window) || 
                         (navigator.maxTouchPoints > 0) || 
                         (navigator.msMaxTouchPoints > 0);
    
    // Check if device has fine pointer (mouse)
    const hasMousePointer = window.matchMedia('(pointer: fine)').matches;
    
    // Enable cursor if it's not a touch device and has a mouse
    return !isTouchDevice && hasMousePointer;
}

function updateCustomCursor() {
    if (shouldEnableCustomCursor()) {
        document.body.classList.add('enable-custom-cursor');
    } else {
        document.body.classList.remove('enable-custom-cursor');
    }
}

// Call on load and resize
updateCustomCursor();
window.addEventListener('resize', updateCustomCursor);