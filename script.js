// ===== ROTATING STATUS =====
const statusMessages = [
    "Waste no more time arguing what a good man should be. Be one.",
    "You have power over your mind — not outside events.",
    "The obstacle is the way.",
    "What stands in the way becomes the way.",
    "Discipline equals freedom.",
    "Focus on what you can control.",
    "Well begun is half done.",
    "The best revenge is not to be like your enemy.",
    "Luck is what happens when preparation meets opportunity.",
    "It's not what happens to you, but how you react that matters.",
    "First say to yourself what you would be; then do what you have to do.",
    "No man is free who is not master of himself.",
    "He who fears death will never do anything worth a man while he is alive.",
    "If it is not right, do not do it. If it is not true, do not say it.",
    "The happiness of your life depends upon the quality of your thoughts."
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

// ===== FLOATING RESUME BUBBLE (hide on scroll, show when idle) =====
document.addEventListener('DOMContentLoaded', function () {
    const resumeFloat = document.querySelector('.resume-float');

    if (!resumeFloat) {
        console.warn('Resume bubble not found on this page');
        return;
    }

    let scrollTimeout;
    let isScrolling = false;

    // Start visible
    resumeFloat.style.opacity = '1';
    resumeFloat.style.pointerEvents = 'auto';

    window.addEventListener('scroll', () => {
        // Only hide once when scrolling starts
        if (!isScrolling) {
            isScrolling = true;
            resumeFloat.style.opacity = '0';
            resumeFloat.style.pointerEvents = 'none';
        }

        // Reset the timer on every scroll event
        clearTimeout(scrollTimeout);

        // Show again after scrolling has stopped for 1 second
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
            resumeFloat.style.opacity = '1';
            resumeFloat.style.pointerEvents = 'auto';
        }, 1000); // ← increased from 400ms to 1000ms
    });
});