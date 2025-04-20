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