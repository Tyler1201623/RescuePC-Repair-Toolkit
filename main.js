// main.js – FixMate USB Toolkit Frontend Enhancements

document.addEventListener('DOMContentLoaded', () => {

    // ===== Smooth scrolling for anchor links =====
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // ===== Button hover animations for CTA buttons =====
    const buyButtons = document.querySelectorAll('.btn-primary, .btn-primary-large');
    buyButtons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
      });
  
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
      });
    });
  
    // ===== Fade-in effects for all major sections =====
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -80px 0px'
    };
  
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target); // Only once per section
        }
      });
    }, observerOptions);
  
    sections.forEach(section => sectionObserver.observe(section));
  
    // ===== Mobile responsiveness class toggle =====
    function handleResize() {
      if (window.innerWidth < 768) {
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
      }
    }
  
    window.addEventListener('resize', handleResize);
    handleResize(); // Run once on load
  
    // ===== Easter egg for devs =====
    console.log('%cFixMate USB Toolkit ✨', 'font-size: 18px; color: #6772e5; font-weight: bold;');
    console.log('%cBuilt by Tyler Keesee for real PC repair heroes.', 'font-size: 14px; color: #333;');
    console.log('%cSecure. Offline. Yours.', 'font-size: 12px; color: gray;');
  
  });
  