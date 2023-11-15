// Define the text content you want to display with typing animation
const webDeveloperTitleContent = "Web Developer";

// Get the web developer title element
const webDeveloperTitleElement = document.getElementById('webDeveloperTitle');

// Function to simulate typing animation with a cursor
function typeWithCursor(element, text, speed) {
  let index = 0;

  function type() {
    if (index <= text.length) {
      element.innerHTML = text.substring(0, index) ;
      index++;
      setTimeout(type, speed);
    }
  }

  // Clear the existing text and start typing animation
  element.innerHTML = '';
  type();
}

// Call the typing function with the specified speed (adjust as needed)
typeWithCursor(webDeveloperTitleElement, webDeveloperTitleContent, 100);


function typeWriter(text, targetElement, speed) {
    let i = 0;
    const target = document.getElementById(targetElement);

    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Typing animation for the about section
const aboutText = "I'm Ankita, a dedicated web developer who transforms ideas into captivating online experiences. With expertise in front-end and back-end technologies, I craft seamless websites, blending innovation and functionality. Passionate about elegant code and user-centric design, I bring digital visions to life with a commitment to excellence.";

typeWriter(aboutText, 'typing-text', 50);
// Define the text content you want to display with typing animation
const skillsTextContent = "I showcase my expertise in HTML5, CSS3, and JavaScript, emphasizing proficiency in crafting visually appealing and responsive web designs. Additionally, I possess strong skills in UX/UI design, contributing to seamless and user-centric digital experiences.";

// Get the skills text element
const skillsTextElement = document.getElementById('skillsText');

// Function to simulate typing animation
function typeText(element, text, speed) {
  let index = 0;

  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  // Clear the existing text and start typing animation
  element.innerHTML = '';
  type();
}

// Call the typing function with the specified speed (adjust as needed)
typeText(skillsTextElement, skillsTextContent, 50);

/*==================== SHOW/HIDE HEADER ON SCROLL ====================*/
const header = document.querySelector('.l-header');

function toggleHeaderOnScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const triggerHeight = 200;

    if (scrollY > triggerHeight) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
}

window.addEventListener('scroll', toggleHeaderOnScroll);

toggleHeaderOnScroll();

/*==================== MENU SHOW ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};

showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const revealElements = document.querySelectorAll('.home__data, .about__img, .skills__subtitle, .skills__text, .home__img, .about__subtitle, .about__text, .skills__img, .home__social-icon, .skills__data, .work__img, .contact__input');

function revealOnScroll() {
    revealElements.forEach((element, index) => {
        const scrollY = window.scrollY || window.pageYOffset;
        const elementTop = element.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollY + windowHeight > elementTop + 60) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
});

// Add individual reveal configurations
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
