// ===== ROTATING STATUS =====
const statusMessages = [
    "Building autonomous agents and sipping coffee.",
    "Shipping code, one commit at a time.",
    "Thinking about AI and automation.",
    "Learning something new every day.",
    "Fueled by coffee and curiosity.",
    "Exploring the next frontier of AI."
];

const statusElement = document.getElementById('statusText');
let index = 0;

function rotateStatus() {
    statusElement.style.opacity = 0;
    setTimeout(() => {
        index = (index + 1) % statusMessages.length;
        statusElement.textContent = statusMessages[index];
        statusElement.style.opacity = 1;
    }, 400);
}

setInterval(rotateStatus, 5000);
statusElement.style.opacity = 1;

// ===== FORTUNE COOKIE =====
const fortuneBtn = document.getElementById('fortuneBtn');
const fortuneModal = document.getElementById('fortuneModal');
const fortuneClose = document.getElementById('fortuneClose');
const fortuneText = document.getElementById('fortuneText');
const cookieContainer = document.querySelector('.cookie-container');
const fortuneNote = document.querySelector('.fortune-note');

const quotes = [
    "You will build something remarkable today.",
    "The best time to start was yesterday. The next best is now.",
    "Your curiosity will lead you to great discoveries.",
    "A small step forward is still progress.",
    "Believe in your ability to solve complex problems.",
    "The code you write today shapes tomorrow.",
    "You're never too old to learn something new.",
    "Trust the process, even when it's messy.",
    "Your next big idea is just around the corner.",
    "Stay curious, stay humble, stay kind."
];

function openFortune() {
    fortuneModal.classList.add('active');
    cookieContainer.classList.remove('cracked');
    fortuneNote.classList.remove('reveal');
    fortuneText.textContent = '';

    setTimeout(() => {
        cookieContainer.classList.add('cracked');
    }, 100);

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        fortuneText.textContent = quotes[randomIndex];
        fortuneNote.classList.add('reveal');
    }, 600);
}

function closeFortune() {
    fortuneModal.classList.remove('active');
    cookieContainer.classList.remove('cracked');
    fortuneNote.classList.remove('reveal');
}

fortuneBtn.addEventListener('click', openFortune);
fortuneClose.addEventListener('click', closeFortune);
fortuneModal.addEventListener('click', (e) => {
    if (e.target === fortuneModal) closeFortune();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fortuneModal.classList.contains('active')) {
        closeFortune();
    }
});

// ===== CUSTOM CURSOR =====
(function () {
    // Create cursor elements
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);

    const cursorRing = document.createElement('div');
    cursorRing.classList.add('cursor-ring');
    document.body.appendChild(cursorRing);

    console.log('Cursor elements created');

    // Position update
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        cursorRing.style.left = e.clientX + 'px';
        cursorRing.style.top = e.clientY + 'px';
    });

    // Shrink on hover
    const clickables = document.querySelectorAll('a, button, .fortune-btn, .social-links a, .resume-btn');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorRing.classList.add('shrink');
        });
        el.addEventListener('mouseleave', () => {
            cursorRing.classList.remove('shrink');
        });
    });
})();