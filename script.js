document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Loading Screen Hide
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
    }, 2200);

    // 2. Typing Effect
    const text = "Moving Business Forward...";
    const typingTarget = document.getElementById("typing");
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingTarget.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    setTimeout(typeWriter, 2500); // Start after loader

    // 3. Scroll Reveal Observer
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // If it's a stat item, trigger the counter
                if (entry.target.classList.contains('stat-item')) {
                    const num = entry.target.querySelector('.stat-num');
                    animateValue(num, 0, parseInt(num.getAttribute('data-target')), 2000);
                }
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(reveal => revealObserver.observe(reveal));

    // 4. Number Counter Animation
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.innerHTML = end + "+";
            }
        };
        window.requestAnimationFrame(step);
    }

    // 5. Parallax Mouse Move for Hero Hexagon
    const heroHex = document.querySelector('.hero-hex');
    const hero = document.querySelector('.hero');
    if(heroHex && hero) {
        hero.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 30;
            const y = (window.innerHeight / 2 - e.pageY) / 30;
            heroHex.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
});
