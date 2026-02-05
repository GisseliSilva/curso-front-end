// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  const icon = mobileToggle.querySelector('i');
  
  if (navMenu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('section:not(#inicio)');
sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(section);
});

// Observe cards
const cards = document.querySelectorAll('.stat-card, .skill-category, .project-card, .timeline-item, .contact-card');
cards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Theme Toggle (optional functionality)
const themeToggle = document.getElementById('themeToggle');
let isDark = localStorage.getItem('darkTheme') === 'true';

// Apply saved theme on load
if (isDark) {
  document.body.classList.add('dark-theme');
  const icon = themeToggle.querySelector('i');
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  const icon = themeToggle.querySelector('i');
  
  if (isDark) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkTheme', 'true');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('darkTheme', 'false');
  }
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // In a real application, you would send this data to a server
  console.log('Form submitted:', { name, email, message });
  
  // Show success message
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  
  // Reset form
  contactForm.reset();
});

// Active navigation link highlight
window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  // Also check hero section
  const heroSection = document.getElementById('inicio');
  if (pageYOffset < heroSection.clientHeight) {
    current = 'inicio';
  }
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Parallax effect for hero blobs
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const blobs = document.querySelectorAll('.blob');
  
  blobs.forEach((blob, index) => {
    const speed = (index + 1) * 0.05;
    blob.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start) + '+';
    }
  }, 16);
};

// Observe stat cards and animate counters
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const value = entry.target.querySelector('.stat-value');
      const targetValue = parseInt(value.textContent);
      
      if (!value.classList.contains('animated')) {
        value.classList.add('animated');
        animateCounter(value, targetValue);
      }
    }
  });
}, { threshold: 0.5 });

const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
  statObserver.observe(card);
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add typing effect to hero title (optional)
const heroTitle = document.querySelector('.hero-title');
const originalText = heroTitle.textContent;
let charIndex = 0;

function typeWriter() {
  if (charIndex < originalText.length) {
    heroTitle.textContent = originalText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}

// Uncomment to enable typing effect
// heroTitle.textContent = '';
// setTimeout(typeWriter, 500);

// Add hover effect sound (optional)
const playHoverSound = () => {
  // You can add sound effects here if needed
};

// Project card hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.zIndex = '10';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.zIndex = '1';
  });
});

// Skill tag click effect
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
  tag.addEventListener('click', () => {
    tag.style.animation = 'none';
    setTimeout(() => {
      tag.style.animation = '';
    }, 10);
  });
});

// Update year in footer automatically
const updateYear = () => {
  const yearSpan = document.querySelector('.footer p');
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = `© ${currentYear} Gisseli Silva. Todos os direitos reservados.`;
};

updateYear();

// Initialize tooltips (if you add any)
const initTooltips = () => {
  const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
  
  tooltipTriggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', (e) => {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = trigger.getAttribute('data-tooltip');
      document.body.appendChild(tooltip);
      
      const rect = trigger.getBoundingClientRect();
      tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
      tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    });
    
    trigger.addEventListener('mouseleave', () => {
      const tooltip = document.querySelector('.tooltip');
      if (tooltip) tooltip.remove();
    });
  });
};

initTooltips();

console.log('🚀 Portfólio carregado com sucesso!');