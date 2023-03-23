/*================ toggle icon navbar ================*/
let menuIcon= document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*================ scroll sections active link ================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
/*================ sticky navbar ================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*================ remove toggle icon navbar when click navbar link (scroll) ================*/
/* Marche pas... https://www.youtube.com/watch?v=Tkp3FDgOueM&t=1187s > 58min */

};

/*================ scroll reveal ================*/
/* https://scrollrevealjs.org/guide/customization.html */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*================ type js ================*/
const typed = new Typed('.multiple-text', {
    strings: ['Développeur web'],
    setTimeout: 3000,
    typeSpeed: 150,
    backSpeed: 100,
    backDelay: 1000,
    /* loop: true */
});

/*================ Email js ================*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactPhone= document.getElementById('contact-phone'),
    contactProject = document.getElementById('contact-project'),
    contactMess = document.getElementById('contact-message'),
    contactMessage = document.getElementById('contact--message')

const sendEmail = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        // Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //Show message
        contactMessage.textContent = 'Vous devez écrire tous les champs de saisie 📩'
    }else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_u3438gs','template_rvnphvy','#contact-form','OA5_wkIW4oj71SvFK')
        .then(() => {
            // Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message envoyé ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
        }, (error) => {
            alert('Oops! une erreur est survenue...', error)
        })

        // To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactPhone.value =''
        contactProject.value = ''
        contactMess.value =''
    }
}
contactForm.addEventListener('submit', sendEmail)