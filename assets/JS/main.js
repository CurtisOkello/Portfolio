






// The header is moving 
/* CHANGE BACKGROUD HEADER */
function scrollHeader() {
    const header = document.getElementById('header');
    //when the scroll is greater than the 80 view port height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('sroll-header');
    else header.classList.remove('scrool-header');
    }

    window.addEventListener('scroll', scrollHeader);
// SHOW SCROLL UP 

function scrolluP() {
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is greater than the 350 view port height, add the show-scroll class to the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-sroll');
    else scrollUp.classList.remove('show-scroll');
    }

    window.addEventListener('scroll', scrollUp);

/* ABOUT */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', ()=> {
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
            });
            
            target.classList.add('tab__active');

            tabs.forEach((tab) => {
                tab.classList.remove('tab__active');
            });

            tab.classList.add('tab__active');
            });
});

/* CONTACT FORM */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail= document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('contact-message');


/*The javascript is not sending the email but rather scrolling to the top */
const sendEmail = () => {
    e.preventDefault();

    //check if field has a value 
    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        contactSubject.value === '' ||
        contactMessage.value === '' 
    )
    { //show message 
        errorMessage.textContent = 'write all the input fields'
    }

    else { 
        //serviceID - template - #form - publickey
        emailjs.sendForm
        (
            'service_igmg0rw',
            'template_xn4uxea',
            '#contact-form',
            'CE86CvNFWntGd-TO6'
        ).then(()  => {
            // show message and color, window + dot to open emoji
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message sent ✔️';

            //Remove message after 5 seconds
            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
        },
        (error) => {
            alert('OOPs!! SOEMTHING WENT WRONG...', error)
        }
    );

    //clear input fields
    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);