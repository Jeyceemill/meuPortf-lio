document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        let nome = form.querySelector('input[name="nome"]')?.value || '';
        let email = form.querySelector('input[name="email"]')?.value || '';
        let mensagem = form.querySelector('textarea[name="mensagem"]')?.value || '';
        
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos antes de enviar!');
        } else {
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
            form.reset(); 
        }
    });
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


let welcomeSpan = document.querySelector('.sobreh1 span');
let welcomeText = 'ao meu portfólio!';
let charIndex = 0;

function typeEffect() {
    if (charIndex < welcomeText.length) {
        welcomeSpan.textContent += welcomeText.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100); 
    }
}

typeEffect();