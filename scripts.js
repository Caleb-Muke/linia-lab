// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle && navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal, .card, .project-card, .member, .news');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:0.12});
reveals.forEach(r => io.observe(r));

// Counters
const counters = document.querySelectorAll('.num[data-target]');
const animateCounters = () => {
  counters.forEach(el => {
    const target = +el.dataset.target;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      current += step;
      if(current >= target){ el.textContent = target + (target>1?'+':''); clearInterval(timer); }
      else el.textContent = current;
    }, 16);
  });
};

const statsSection = document.querySelector('.stats');
if(statsSection){
  const statsObserver = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){ animateCounters(); statsObserver.disconnect(); }
  },{threshold:0.3});
  statsObserver.observe(statsSection);
}

// Simple contact form handler (placeholder)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Merci — votre message a été pris en compte.');
    contactForm.reset();
  });
}
