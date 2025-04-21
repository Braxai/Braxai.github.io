const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

/*navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, starting animation");
    const name = "O'Connell";
    const target = document.getElementById("typing-name");
    const cursor = document.getElementById("cursor");
    let index = 0;

    function typeNextChar() {
        if (index < name.length) {
            //target.textContent += name.charAt(index);
            cursor.insertAdjacentText('beforebegin', name.charAt(index));
            index++;
            setTimeout(typeNextChar, 200);
        } else {
            cursor.remove();
            startRoleAnimation();
        }
    }

    function startRoleAnimation() {
        var typed = new Typed(".auto-type", {
            strings: ["Student", "Programmer", "Manager"],
            typeSpeed: 50,
            backSpeed: 50,
            startDelay: 500,
            backDelay: 1000,
            loop: true,
        });
    }

    // Start the name animation immediately
    //typeNextChar();
    setTimeout(typeNextChar, 250);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Blob animations
// blob1 → blob2
const tween1 = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { duration: 3000 }
);

// blob2 → blob3
const tween2 = KUTE.fromTo(
    '#blob1',
    { path: '#blob2' },
    { path: '#blob3' },
    { duration: 3000 }
);

// blob3 → blob1
const tween3 = KUTE.fromTo(
    '#blob1',
    { path: '#blob3' },
    { path: '#blob1' },
    { duration: 3000 }
);

// Chain into loop
tween1.chain(tween2);
tween2.chain(tween3);
tween3.chain(tween1);

const tween4 = KUTE.fromTo(
    '#blob4',
    { path: '#blob4' },
    { path: '#blob5' },
    { duration: 3000 }
);

// blob2 → blob3
const tween5 = KUTE.fromTo(
    '#blob4',
    { path: '#blob5' },
    { path: '#blob6' },
    { duration: 3000 }
);

// blob3 → blob1
const tween6 = KUTE.fromTo(
    '#blob4',
    { path: '#blob6' },
    { path: '#blob4' },
    { duration: 3000 }
);

// Chain into loop
tween4.chain(tween5);
tween5.chain(tween6);
tween6.chain(tween4);

tween1.start();
tween4.start();
