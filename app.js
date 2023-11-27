const Menu = document.getElementById('nav-menu')
const navtoggle= document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
navtoggle.addEventListener("click",()=>{
    Menu.classList.add('show-menu')
})
navClose.addEventListener("click",()=>{
    Menu.classList.remove('show-menu')
})



const contactForm = document.getElementById('contact-form'),
contactMessage =document.getElementById('contact-message');
const sendEmail = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_mfyg37j',"template_thz3xas","#contact-form","HOvDra2SXcfUKy0W_")
    .then(()=>{
        contactMessage.textContent='Message Sent successfully ✅ '
        setTimeout(() => {
            contactMessage.textContent=""
        }, 5000);
        contactForm.reset()
    },()=>{
        contactMessage.textContent='Message not Sent (Service error) ❌  '
    })
}
contactForm.addEventListener('submit',sendEmail)
