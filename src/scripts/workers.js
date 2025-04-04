
// JavaScript for the workers page

document.addEventListener('DOMContentLoaded', function() {
  // Initialize job search form
  initializeJobSearch();
  
  // Initialize job application functionality
  initializeJobApplication();
  
  // Initialize load more functionality
  initializeLoadMore();
});

// Job search form handling
function initializeJobSearch() {
  const jobSearchForm = document.getElementById('jobSearchForm');
  
  if (jobSearchForm) {
    jobSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const category = document.getElementById('jobCategory').value;
      const location = document.getElementById('jobLocation').value;
      const type = document.getElementById('jobType').value;
      
      // For MVP, just simulate search with alert
      alert(`Searching for jobs...\nCategory: ${category}\nLocation: ${location}\nType: ${type}`);
      
      // In a real application, this would make an API call and update the results
      // For MVP, we'll just use a small delay to simulate a search operation
      const jobList = document.querySelector('.job-list');
      if (jobList) {
        jobList.style.opacity = '0.5';
        setTimeout(function() {
          jobList.style.opacity = '1';
        }, 1000);
      }
    });
  }
}

// Job application functionality
function initializeJobApplication() {
  const applyButtons = document.querySelectorAll('.job-card .btn-primary');
  const detailButtons = document.querySelectorAll('.job-card .btn-outline');
  
  // Apply buttons
  applyButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const jobCard = this.closest('.job-card');
      const jobTitle = jobCard.querySelector('.job-title').textContent;
      
      // For MVP, just simulate application with alert
      alert(`Application submitted for job: ${jobTitle}\n\nEmployers will contact you if interested.`);
      
      // Change button text
      this.textContent = 'Applied';
      this.disabled = true;
      this.classList.add('btn-success');
    });
  });
  
  // View details buttons
  detailButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const jobCard = this.closest('.job-card');
      const jobTitle = jobCard.querySelector('.job-title').textContent;
      const jobDescription = jobCard.querySelector('.job-description').textContent;
      
      // For MVP, just show basic details in alert
      alert(`Job Details: ${jobTitle}\n\n${jobDescription}`);
      
      // In a full application, this would open a detailed job view or modal
    });
  });
}

// Load more functionality
function initializeLoadMore() {
  const loadMoreBtn = document.querySelector('.load-more button');
  
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      // For MVP, just simulate loading more jobs with alert
      alert('In a complete application, this would load more job listings from the server.');
      
      // Change button text to indicate loading
      this.textContent = 'Loading...';
      
      // Simulate loading delay
      setTimeout(() => {
        this.textContent = 'No More Jobs';
        this.disabled = true;
      }, 1500);
    });
  }
}
