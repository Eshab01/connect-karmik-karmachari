
// Core app functionality in a simplified form

document.addEventListener('DOMContentLoaded', function() {
  // Initialize mobile menu
  initializeMobileMenu();
  
  // Initialize modals if they exist
  if (document.querySelector('.modal')) {
    initializeModals();
  }
});

// Mobile menu functionality
function initializeMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = menuToggle.querySelectorAll('span');
      spans.forEach(function(span) {
        span.classList.toggle('active');
      });
    });
  }
}

// Modal functionality
function initializeModals() {
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const closeButtons = document.querySelectorAll('.close-modal');
  
  // Open modal when trigger is clicked
  modalTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      
      if (modal) {
        openModal(modal);
      }
    });
  });
  
  // Close modal when close button is clicked
  closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });
  
  // Close modal when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      closeModal(e.target);
    }
  });
}

// Helper to open modal
function openModal(modal) {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Helper to close modal
function closeModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}
