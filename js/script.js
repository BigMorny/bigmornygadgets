const BigMornyApp = (function () {
    // DOM Elements
    const elements = {
      modal: document.querySelector('#phoneModal'),
      modalImage: document.querySelector('#modalImage'),
      modalTitle: document.querySelector('#modalTitle'),
      modalVariants: document.querySelector('#modalVariants'),
      closeButton: document.querySelector('.close-button'),
      itemGrid: document.querySelector('.item-grid'),
      ctaButtons: document.querySelectorAll('.cta-button'),
      inquireButton: document.querySelector('#inquireButton'),
      backButton: document.querySelector('#backButton'),
      phoneDetails: document.querySelector('#phoneDetails'),
      contactInfo: document.querySelector('#contactInfo'),
      forms: {
        repair: document.querySelector('#repair-form'),
        swap: document.querySelector('#swap-form'),
        sell: document.querySelector('#sell-form'),
        contact: document.querySelector('#contact-form'),
      },
    };
  
    // Price data for each model and storage (based on previous inputs, updated with iPhone 16 E)
    const priceData = {
      'iPhone 6s': {
        '32GB': { 'UK Used': 800 },
        '64GB': { 'UK Used': 900 },
      },
      'iPhone 7': {
        '32GB': { 'UK Used': 1050 },
        '128GB': { 'UK Used': 1150 },
      },
      'iPhone 7 Plus': {
        '32GB': { 'UK Used': 1400 },
        '128GB': { 'UK Used': 1600 },
      },
      'iPhone 8': {
        '64GB': { 'UK Used': 1300 },
      },
      'iPhone 8 Plus': {
        '64GB': { 'UK Used': 1750 },
      },
      'iPhone SE 2': {
        '64GB': { 'UK Used': 1700 },
        '128GB': { 'UK Used': 1800 },
      },
      'iPhone X': {
        '64GB': { 'UK Used': 2150, 'Fresh Inbox': 1999 },
        '256GB': { 'UK Used': 2350 },
      },
      'iPhone XR': {
        '64GB': { 'UK Used': 2400 },
        '128GB': { 'UK Used': 2650 },
      },
      'iPhone XS Max': {
        '64GB': { 'UK Used': 3000 },
        '256GB': { 'UK Used': 3450 },
      },
      'iPhone 11': {
        '64GB': { 'UK Used': 3050, 'Fresh Inbox': 3650 },
        '128GB': { 'UK Used': 3500 },
      },
      'iPhone 11 Pro': {
        '64GB': { 'UK Used': 3800, 'Fresh Inbox': 4800 },
        '256GB': { 'UK Used': 4300 },
      },
      'iPhone 11 Pro Max': {
        '64GB': { 'UK Used': 4650 },
        '256GB': { 'UK Used': 5200 },
      },
      'iPhone 12 Mini': {
        '64GB': { 'UK Used': 3200 },
        '128GB': { 'UK Used': 3500 },
      },
      'iPhone 12': {
        '64GB': { 'UK Used': 3700, 'Fresh Inbox': 4450 },
        '128GB': { 'UK Used': 4250, 'Fresh Inbox': 5050 },
      },
      'iPhone 12 Pro': {
        '128GB': { 'UK Used': 5100, 'Fresh Inbox': 5600 },
        '256GB': { 'UK Used': 5400 },
      },
      'iPhone 12 Pro Max': {
        '128GB': { 'UK Used': 6600, 'Fresh Inbox': 7450 },
        '256GB': { 'UK Used': 7000, 'Fresh Inbox': 7700 },
      },
      'iPhone 13 Mini': {
        '128GB': { 'UK Used': 4800 },
      },
      'iPhone 13': {
        '128GB': { 'UK Used': 5300, 'Fresh Inbox': 6500 },
      },
      'iPhone 13 Pro': {
        '128GB': { 'UK Used': 6700 },
        '256GB': { 'UK Used': 7050 },
      },
      'iPhone 13 Pro Max': {
        '128GB': { 'UK Used': 8000, 'Fresh Inbox': 8700 },
        '256GB': { 'UK Used': 8400, 'Fresh Inbox': 9350 },
      },
      'iPhone 14': {
        '128GB': { 'UK Used': 7500 },
      },
      'iPhone 14 Pro': {
        '128GB': { 'UK Used': 10500, 'Fresh Inbox': 10400 },
        '256GB': { 'UK Used': 11000, 'Fresh Inbox': 12000 },
      },
      'iPhone 14 Pro Max': {
        '128GB': { 'UK Used': 12000, 'Fresh Inbox': 12850 },
        '256GB': { 'UK Used': 12500, 'Fresh Inbox': 13500 },
      },
      'iPhone 15': {
        '128GB': { 'UK Used': 10300, 'Fresh Inbox': 10600 },
        '256GB': { 'Fresh Inbox': 11500 },
      },
      'iPhone 15 Pro': {
        '128GB': { 'Fresh Inbox': 14500 },
      },
      'iPhone 15 Pro Max': {
        '256GB': { 'UK Used': 15500, 'Fresh Inbox': 16200 },
        '512GB': { 'Fresh Inbox': 16900 },
      },
      'iPhone 16': {
        '128GB': { 'Fresh Inbox': 12000 },
      },
      'iPhone 16 Pro': {
        '128GB': { 'Fresh Inbox': 17300 },
      },
      'iPhone 16 Pro Max': {
        '256GB': { 'UK Used': 19500, 'Fresh Inbox': 20500 },
      },
      'iPhone 16 E': {
        '256GB': { 'UK Used': 20000, 'Fresh Inbox': 22000 }, // Placeholder prices
      },
    };
  
    // Simulate async submission (replace with real API call if available)
    const simulateSubmission = async (formData) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Form submitted:', formData);
          resolve({ success: true });
        }, 1000);
      });
    };
  
    // Handle form submission
    const handleFormSubmit = async (form, formId) => {
      if (!form) return;
  
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitButton = form.querySelector('button[type="submit"]');
        const successMessage = form.querySelector('.success-message');
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
  
        const formData = Object.fromEntries(new FormData(form));
        try {
          const response = await simulateSubmission(formData);
          if (response.success) {
            successMessage.style.display = 'block';
            form.reset();
            setTimeout(() => {
              successMessage.style.display = 'none';
            }, 3000);
          }
        } catch (error) {
          console.error('Submission failed:', error);
        } finally {
          submitButton.disabled = false;
          submitButton.textContent = formId === 'repair' ? 'Submit Repair Request' :
                                    formId === 'swap' ? 'Submit Swap Request' :
                                    formId === 'sell' ? 'Submit Sell Request' :
                                    'Send Message';
        }
      });
    };
  
    // Show contact info
    const showContactInfo = () => {
      elements.phoneDetails.style.display = 'none';
      elements.contactInfo.style.display = 'block';
    };
  
    // Show phone details
    const showPhoneDetails = () => {
      elements.contactInfo.style.display = 'none';
      elements.phoneDetails.style.display = 'block';
    };
  
    // Open modal
    const openModal = (item) => {
      const img = item.querySelector('img').src;
      const title = item.querySelector('h3').textContent;
      const storageText = item.querySelector('p').textContent.replace('Available: ', '').split(', ');
      const variantsList = elements.modalVariants;
  
      elements.modalImage.src = img;
      elements.modalImage.alt = title;
      elements.modalTitle.textContent = title;
  
      // Clear previous variants
      variantsList.innerHTML = '';
  
      // Generate variants list with prices
      storageText.forEach(storage => {
        if (priceData[title] && priceData[title][storage.trim()]) {
          for (const condition in priceData[title][storage.trim()]) {
            const price = priceData[title][storage.trim()][condition];
            const li = document.createElement('li');
            li.textContent = `${condition} ${title} ${storage.trim()} - GHC ${price}`;
            variantsList.appendChild(li);
          }
        }
      });
  
      showPhoneDetails();
      elements.modal.style.display = 'flex';
      elements.modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
  
    // Close modal
    const closeModal = () => {
      elements.modal.classList.remove('open');
      setTimeout(() => {
        elements.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 300);
    };
  
    // Initialize event listeners
    const init = () => {
      // Modal interactions
      if (elements.itemGrid) {
        elements.itemGrid.addEventListener('click', (e) => {
          const item = e.target.closest('.item');
          if (item) openModal(item);
        });
  
        elements.itemGrid.addEventListener('keypress', (e) => {
          const item = e.target.closest('.item');
          if (item && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            openModal(item);
          }
        });
      }
  
      if (elements.closeButton) {
        elements.closeButton.addEventListener('click', closeModal);
      }
  
      if (elements.modal) {
        elements.modal.addEventListener('click', (e) => {
          if (e.target === elements.modal) closeModal();
        });
      }
  
      if (elements.inquireButton) {
        elements.inquireButton.addEventListener('click', showContactInfo);
      }
  
      if (elements.backButton) {
        elements.backButton.addEventListener('click', showPhoneDetails);
      }
  
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.modal?.style.display === 'flex') {
          closeModal();
        }
      });
  
      // Smooth scrolling for CTA buttons
      elements.ctaButtons.forEach((button) => {
        if (button.tagName === 'A' && button.id !== 'inquireButton') {
          button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        }
      });
  
      // Form submissions
      handleFormSubmit(elements.forms.repair, 'repair');
      handleFormSubmit(elements.forms.swap, 'swap');
      handleFormSubmit(elements.forms.sell, 'sell');
      handleFormSubmit(elements.forms.contact, 'contact');
    };
  
    // Public API
    return {
      init,
    };
  })();
  
  // Initialize app
  document.addEventListener('DOMContentLoaded', BigMornyApp.init);