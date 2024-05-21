








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

const sendEmail = () => {
    e.preventDefault();

    //check if field has a value 
    if (
        contactName.value === ' ' ||
        contactEmail.value === '' ||
        contactSubject.value === ' ' ||
        contactMessage.value === '' 
    )
    { //show message 
        errorMessage.textContent = 'write all the input fields'
    }

    else {

    }
}

contactForm.addEventListener('submit', sendEmail);