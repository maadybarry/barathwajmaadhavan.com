// ===== FUN SURPRISE =====
const surprises = [
    "I once built a chatbot that told dad jokes – it was a hit with the engineering team.",
    "I can type with 10 fingers but still can't cook an egg without burning it.",
    "My first 'hello world' was written in BASIC on a 20-year-old computer.",
    "I believe the best debugging tool is a good night's sleep.",
    "I've read more research papers in the last year than novels – and I'm okay with that.",
    "My favourite way to unwind is a long walk and a good podcast.",
    "I'm secretly a coffee connoisseur – I can tell the origin of most beans by taste.",
];

const btn = document.getElementById('funBtn');
const display = document.getElementById('funDisplay');

btn.addEventListener('click', () => {
    const random = surprises[Math.floor(Math.random() * surprises.length)];
    display.textContent = random;
    display.classList.add('show');
});