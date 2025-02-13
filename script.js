document.querySelector('.envelope').addEventListener('click', function() {
    if (!this.classList.contains('open')) {
        toggleLetter('open');
    }
});

function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    heartsContainer.innerHTML = '';
    
    // เปลี่ยนดอกไม้เป็นโทนสีขาว-ม่วง
    const flowers = ['❀', '✿', '❋', '✾', '❁'];
    const totalFlowers = 25; // เพิ่มจำนวนดอกไม้
    
    for (let i = 0; i < totalFlowers; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.classList.add('heart');
            flower.style.left = Math.random() * 100 + '%';
            flower.style.zIndex = Math.floor(Math.random() * 100);
            flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
            
            // สุ่มสีดอกไม้จากพาเลทสีที่กำหนด
            const colors = ['#FFFFFF', '#E8D3FF', '#C8B6FF', '#B8C0FF', '#D4BBFF'];
            flower.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            flower.style.fontSize = (Math.random() * 20 + 15) + 'px';
            flower.style.filter = 'drop-shadow(0 0 2px rgba(255,255,255,0.5))';
            heartsContainer.appendChild(flower);
            
            flower.addEventListener('animationend', () => {
                flower.remove();
            });
        }, i * 80); // ลดระยะเวลาระหว่างดอกไม้
    }
}

function playOpenSound() {
    const audio = new Audio('data:audio/wav;base64,UklGRn4AAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YVoAAAAMABwAKgAyADgAPQA6ADYAMQApAB8AFAAKAAsAGAAoADoATABdAGQAXgBQADkAIQALAPL/4P/V/9P/2P/k//X/AwAVACQALQAxADEALQAlABoADgABAP3/');
    audio.volume = 0.3;
    audio.play().catch(() => {}); // ป้องกัน error กรณีบราวเซอร์บล็อกเสียง
}

// Add keyframe animation to style
const style = document.createElement('style');
style.textContent = `
@keyframes float {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
    }
}`;
document.head.appendChild(style);

// เพิ่มดอกไฮเดรนเยียที่พื้นหลัง
function addHydrangeas() {
    const bg = document.createElement('div');
    bg.classList.add('hydrangea-bg');
    document.body.appendChild(bg);

    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.classList.add('hydrangea');
        flower.style.left = Math.random() * 100 + '%';
        flower.style.top = Math.random() * 100 + '%';
        flower.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`;
        bg.appendChild(flower);
    }
}

// เริ่มต้นเว็บ
window.onload = () => {
    addHydrangeas();
    createSnowflakes();
};

function toggleLetter(action) {
    const envelope = document.querySelector('.envelope');
    if (action === 'open' && !envelope.classList.contains('open')) {
        envelope.classList.add('open');
        createHearts();
        playOpenSound();
    } else if (action === 'close' && envelope.classList.contains('open')) {
        envelope.classList.remove('open');
        document.querySelector('.hearts').innerHTML = '';
    }
}

function createSnowflakes() {
    const snowflakes = ['❄', '❅', '❆', '✺'];
    const container = document.body;
    
    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        
        // ปรับความเร็วและการเคลื่อนที่ของหิมะ
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.fontSize = `${Math.random() * 15 + 10}px`;
        snowflake.style.opacity = Math.random() * 0.7 + 0.3; // ปรับความโปร่งใส
        // เพิ่ม duration ให้นานขึ้น (5-8 วินาที)
        snowflake.style.animationDuration = `${Math.random() * 3 + 5}s`;
        
        container.appendChild(snowflake);
        
        // เพิ่มเวลาก่อนลบหิมะ
        setTimeout(() => {
            snowflake.remove();
        }, 8000); // ปรับเวลาให้สอดคล้องกับ animation duration
    }, 300); // ลดความถี่ในการสร้างหิมะ (เพิ่มจาก 100 เป็น 300)
}
