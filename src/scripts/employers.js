
// JavaScript for the employers page

document.addEventListener('DOMContentLoaded', function() {
  // Initialize post job form
  initializePostJobForm();
  
  // Initialize worker search form
  initializeWorkerSearch();
  
  // Initialize worker contact functionality
  initializeWorkerContact();
  
  // Initialize load more functionality
  initializeLoadMore();
});

// Post job form handling
function initializePostJobForm() {
  const postJobForm = document.getElementById('postJobForm');
  
  if (postJobForm) {
    postJobForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const title = document.getElementById('jobTitle').value;
      const category = document.getElementById('jobCategory').value;
      const location = document.getElementById('jobLocation').value;
      const type = document.getElementById('jobType').value;
      const workersNeeded = document.getElementById('workersNeeded').value;
      const wage = document.getElementById('jobWage').value;
      const wageType = document.getElementById('wageType').value;
      const description = document.getElementById('jobDescription').value;
      const phone = document.getElementById('contactPhone').value;
      
      // For MVP, just simulate job posting with alert
      alert(`Job posted successfully!\n\nTitle: ${title}\nCategory: ${category}\nLocation: ${location}\nType: ${type}\nWorkers needed: ${workersNeeded}\nWage: ₹${wage} ${wageType}\n\nWorkers in your area will be notified.`);
      
      // Reset form
      this.reset();
    });
  }
}

// Worker search form handling
function initializeWorkerSearch() {
  const workerSearchForm = document.getElementById('workerSearchForm');
  
  if (workerSearchForm) {
    workerSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const category = document.getElementById('workerCategory').value;
      const location = document.getElementById('workerLocation').value;
      const rating = document.getElementById('workerRating').value;
      
      // For MVP, just simulate search with alert
      alert(`Searching for workers...\nCategory: ${category}\nLocation: ${location}\nMinimum Rating: ${rating}`);
      
      // In a real application, this would make an API call and update the results
      // For MVP, we'll just use a small delay to simulate a search operation
      const workerList = document.querySelector('.worker-list');
      if (workerList) {
        workerList.style.opacity = '0.5';
        setTimeout(function() {
          workerList.style.opacity = '1';
        }, 1000);
      }
    });
  }
}

// Worker contact functionality
function initializeWorkerContact() {
  const contactButtons = document.querySelectorAll('.worker-card .btn-primary');
  const profileButtons = document.querySelectorAll('.worker-card .btn-outline');
  
  // Contact buttons
  contactButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const workerCard = this.closest('.worker-card');
      const workerName = workerCard.querySelector('.worker-name').textContent;
      const workerCategory = workerCard.querySelector('.worker-category').textContent;
      
      // For MVP, just simulate contact with alert
      alert(`Contact request sent to ${workerName} (${workerCategory})\n\nIn a complete application, this would show the worker's contact details or send them a notification with your contact information.`);
    });
  });
  
  // View profile buttons
  profileButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const workerCard = this.closest('.worker-card');
      const workerName = workerCard.querySelector('.worker-name').textContent;
      const workerCategory = workerCard.querySelector('.worker-category').textContent;
      const workerRating = workerCard.querySelector('.stars').textContent;
      
      // For MVP, just show basic profile in alert
      alert(`Worker Profile: ${workerName}\nCategory: ${workerCategory}\nRating: ${workerRating}\n\nIn a complete application, this would open a detailed profile page with work history, all skills, reviews, and more information.`);
    });
  });
}

// Load more functionality
function initializeLoadMore() {
  const loadMoreBtn = document.querySelector('.load-more button');
  
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      // For MVP, just simulate loading more workers with alert
      alert('In a complete application, this would load more worker profiles from the server.');
      
      // Change button text to indicate loading
      this.textContent = 'Loading...';
      
      // Simulate loading delay
      setTimeout(() => {
        this.textContent = 'No More Workers';
        this.disabled = true;
      }, 1500);
    });
  }
}
