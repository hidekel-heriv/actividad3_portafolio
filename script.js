document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '1';
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

document.querySelectorAll('.proyecto').forEach(proyecto => {
  const proyectoImg = proyecto.querySelector('img');
  
  proyecto.addEventListener('mouseenter', () => {
    proyectoImg.style.transform = 'scale(1.03)';
  });
  
  proyecto.addEventListener('mouseleave', () => {
    proyectoImg.style.transform = 'scale(1)';
  });
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
