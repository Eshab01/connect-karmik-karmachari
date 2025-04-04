
// Main JavaScript for ConnectLabour

document.addEventListener('DOMContentLoaded', function() {
  // Handle modal functionality
  initializeModals();
  
  // Handle tab functionality
  initializeTabs();
  
  // Handle testimonial slider
  initializeTestimonials();
  
  // Handle mobile menu
  initializeMobileMenu();
  
  // Handle registration form submission
  initializeRegistrationForms();
});

// Modal functionality
function initializeModals() {
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const showLoginModalBtn = document.getElementById('showLoginModalBtn');
  const showRegisterModalBtn = document.getElementById('showRegisterModalBtn');
  const ctaRegisterBtn = document.getElementById('ctaRegisterBtn');
  const closeModalBtns = document.querySelectorAll('.close-modal');
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  
  // Additional page-specific buttons
  const workerRegisterBtn = document.getElementById('workerRegisterBtn');
  const employerRegisterBtn = document.getElementById('employerRegisterBtn');
  const findWorkersBtn = document.getElementById('findWorkersBtn');
  const findJobsBtn = document.getElementById('findJobsBtn');
  
  // Login button click
  if (loginBtn) {
    loginBtn.addEventListener('click', function() {
      if (loginModal) {
        openModal(loginModal);
      }
    });
  }
  
  // Register button click
  if (registerBtn) {
    registerBtn.addEventListener('click', function() {
      if (registerModal) {
        openModal(registerModal);
      }
    });
  }
  
  // Show login modal from register modal
  if (showLoginModalBtn) {
    showLoginModalBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (registerModal && loginModal) {
        closeModal(registerModal);
        openModal(loginModal);
      }
    });
  }
  
  // Show register modal from login modal
  if (showRegisterModalBtn) {
    showRegisterModalBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (loginModal && registerModal) {
        closeModal(loginModal);
        openModal(registerModal);
      }
    });
  }
  
  // CTA register button
  if (ctaRegisterBtn) {
    ctaRegisterBtn.addEventListener('click', function() {
      if (registerModal) {
        openModal(registerModal);
      }
    });
  }
  
  // Worker register button
  if (workerRegisterBtn) {
    workerRegisterBtn.addEventListener('click', function() {
      if (registerModal) {
        openModal(registerModal);
        // Activate worker tab
        const workerTab = document.querySelector('[data-tab="worker-register"]');
        if (workerTab) {
          workerTab.click();
        }
      }
    });
  }
  
  // Employer register button
  if (employerRegisterBtn) {
    employerRegisterBtn.addEventListener('click', function() {
      if (registerModal) {
        openModal(registerModal);
        // Activate employer tab
        const employerTab = document.querySelector('[data-tab="employer-register"]');
        if (employerTab) {
          employerTab.click();
        }
      }
    });
  }
  
  // Find workers button (redirect to employers page)
  if (findWorkersBtn) {
    findWorkersBtn.addEventListener('click', function() {
      window.location.href = 'employers.html';
    });
  }
  
  // Find jobs button (redirect to workers page)
  if (findJobsBtn) {
    findJobsBtn.addEventListener('click', function() {
      window.location.href = 'workers.html';
    });
  }
  
  // Close modal buttons
  closeModalBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      closeModal(e.target);
    }
  });
}

// Helper function to open a modal
function openModal(modal) {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Helper function to close a modal
function closeModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

// Tab functionality
function initializeTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const tabGroup = this.closest('.tabs');
      const tabName = this.getAttribute('data-tab');
      
      // Remove active class from all buttons in this tab group
      tabGroup.querySelectorAll('.tab-btn').forEach(function(btn) {
        btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Hide all tab content in this tab group
      tabGroup.querySelectorAll('.tab-content').forEach(function(content) {
        content.classList.remove('active');
      });
      
      // Show selected tab content
      const activeTab = tabGroup.querySelector(`#${tabName}-tab`);
      if (activeTab) {
        activeTab.classList.add('active');
      }
    });
  });
}

// Testimonial slider
function initializeTestimonials() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  let currentSlide = 0;
  
  if (slides.length === 0) return; // No testimonials on this page
  
  // Show the selected slide
  function showSlide(n) {
    // Hide all slides
    slides.forEach(function(slide) {
      slide.classList.remove('active');
    });
    
    // Remove active from all dots
    dots.forEach(function(dot) {
      dot.classList.remove('active');
    });
    
    // Update current slide index
    currentSlide = (n + slides.length) % slides.length;
    
    // Show current slide and activate current dot
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
      dots[currentSlide].classList.add('active');
    }
  }
  
  // Next/previous controls
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      showSlide(currentSlide - 1);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      showSlide(currentSlide + 1);
    });
  }
  
  // Dot controls
  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-slide'));
      showSlide(slideIndex);
    });
  });
  
  // Auto-advance slides every 5 seconds
  setInterval(function() {
    showSlide(currentSlide + 1);
  }, 5000);
}

// Mobile menu
function initializeMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  const authButtons = document.querySelector('.auth-buttons');
  
  if (menuToggle && navLinks && authButtons) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      authButtons.classList.toggle('active');
      
      // Animate hamburger to X
      const spans = menuToggle.querySelectorAll('span');
      spans.forEach(function(span) {
        span.classList.toggle('active');
      });
    });
  }
}

// Registration form submission
function initializeRegistrationForms() {
  const workerForm = document.getElementById('workerRegisterForm');
  const employerForm = document.getElementById('employerRegisterForm');
  const loginForm = document.getElementById('loginForm');
  
  // Worker registration form
  if (workerForm) {
    workerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('workerName').value;
      const phone = document.getElementById('workerPhone').value;
      const category = document.getElementById('workerCategory').value;
      const location = document.getElementById('workerLocation').value;
      const password = document.getElementById('workerPassword').value;
      
      // For MVP, just simulate registration success
      alert(`Worker registration successful!\nName: ${name}\nPhone: ${phone}\nCategory: ${category}\nLocation: ${location}`);
      
      // Close modal
      const modal = this.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
      
      // Reset form
      this.reset();
      
      // Redirect to worker dashboard (not implemented in MVP)
      // window.location.href = 'worker-dashboard.html';
    });
  }
  
  // Employer registration form
  if (employerForm) {
    employerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('employerName').value;
      const phone = document.getElementById('employerPhone').value;
      const type = document.getElementById('employerType').value;
      const location = document.getElementById('employerLocation').value;
      const password = document.getElementById('employerPassword').value;
      
      // For MVP, just simulate registration success
      alert(`Employer registration successful!\nName: ${name}\nPhone: ${phone}\nType: ${type}\nLocation: ${location}`);
      
      // Close modal
      const modal = this.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
      
      // Reset form
      this.reset();
      
      // Redirect to employer dashboard (not implemented in MVP)
      // window.location.href = 'employer-dashboard.html';
    });
  }
  
  // Login form
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const phone = document.getElementById('loginPhone').value;
      const password = document.getElementById('loginPassword').value;
      
      // For MVP, just simulate login success
      alert(`Login successful!\nPhone: ${phone}`);
      
      // Close modal
      const modal = this.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
      
      // Reset form
      this.reset();
      
      // Redirect to dashboard (not implemented in MVP)
      // In a real app, we would determine if user is worker or employer
      // For now just redirect to index
      // window.location.href = 'index.html';
    });
  }
}
