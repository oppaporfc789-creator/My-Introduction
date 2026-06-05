// 1. Initialize Icons on Boot
lucide.createIcons();

// Mobile Hamburger Navigation Drawer Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));


// 2. Light / Dark Theme Engine Configuration
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Inspect LocalStorage or System Preference for Persistent Display Setup
const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (currentTheme === 'dark') {
  htmlElement.classList.add('dark');
  themeIcon.setAttribute('data-lucide', 'sun');
} else {
  htmlElement.classList.remove('dark');
  themeIcon.setAttribute('data-lucide', 'moon');
}
lucide.createIcons(); // Refresh icons after setup update pass

themeToggleBtn.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeIcon.setAttribute('data-lucide', 'moon');
  } else {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.setAttribute('data-lucide', 'sun');
  }
  lucide.createIcons(); // Update visibility attributes maps
});


// 3. Typography Dynamic Type Loop Engine
const stringsToType = ["Full-Stack Software Engineer", "AI Integration Specialist", "UI/UX Creative Developer"];
let currentStringIdx = 0;
let currentCharIdx = 0;
let isDeletingChar = false;
const typingElement = document.getElementById('typing-element');

function executeTypeEffect() {
  const fullTargetString = stringsToType[currentStringIdx];
  
  if (isDeletingChar) {
    currentCharIdx--;
  } else {
    currentCharIdx++;
  }
  
  typingElement.textContent = fullTargetString.substring(0, currentCharIdx);
  let typingSpeed = isDeletingChar ? 35 : 75;
  
  if (!isDeletingChar && currentCharIdx === fullTargetString.length) {
    typingSpeed = 2000; // Complete sentence view timeout hold
    isDeletingChar = true;
  } else if (isDeletingChar && currentCharIdx === 0) {
    isDeletingChar = false;
    currentStringIdx = (currentStringIdx + 1) % stringsToType.length;
    typingSpeed = 400; // Pre-start setup switch buffer delay
  }
  
  setTimeout(executeTypeEffect, typingSpeed);
}
document.addEventListener("DOMContentLoaded", () => setTimeout(executeTypeEffect, 400));


// 4. Client Category Project Item Filtering Filter Tabs
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterScope = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (filterScope === 'all' || cardCategory === filterScope) {
        card.style.display = 'block';
        setTimeout(() => card.style.opacity = '1', 15);
      } else {
        card.style.opacity = '0';
        card.style.display = 'none';
      }
    });
  });
});


// 5. Contact Form Submissions & Custom Toast Container Injections
const contactForm = document.getElementById('contact-form');
const toastContainer = document.getElementById('toast-container');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = document.getElementById('form-name').value.trim();
  
  triggerNotification(`Thank you, ${userName}! Your message was successfully dispatched via simulated sandbox channel.`, 'success');
  contactForm.reset();
});

function triggerNotification(msg, variant) {
  const toastNode = document.createElement('div');
  toastNode.className = `toast-slide flex items-center gap-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 px-5 py-4 rounded-xl shadow-2xl max-w-sm border-l-4 ${variant === 'success' ? 'border-l-cyan-500' : 'border-l-rose-500'} border border-slate-200 dark:border-slate-800`;
  
  toastNode.innerHTML = `
    <i data-lucide="${variant === 'success' ? 'check-circle' : 'alert-circle'}" class="w-5 h-5 text-cyan-500"></i>
    <span class="font-medium text-xs leading-relaxed">${msg}</span>
  `;
  
  toastContainer.appendChild(toastNode);
  lucide.createIcons();

  setTimeout(() => {
    toastNode.style.opacity = '0';
    toastNode.style.transform = 'scale(0.95)';
    setTimeout(() => toastNode.remove(), 300);
  }, 4500);
}


// 6. Element View Scroll Tracking Observer & Back-To-Top Button
const scrollElements = document.querySelectorAll('.reveal');
const backToTopBtn = document.getElementById('back-to-top');

const globalScrollTrackingHandler = () => {
  const intersectionThreshold = window.innerHeight * 0.88;
  
  scrollElements.forEach(el => {
    if (el.getBoundingClientRect().top < intersectionThreshold) {
      el.classList.add('active');
    }
  });

  if (window.scrollY > 550) {
    backToTopBtn.classList.remove('opacity-0', 'translate-y-10');
    backToTopBtn.classList.add('opacity-100', 'translate-y-0');
  } else {
    backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
    backToTopBtn.classList.add('opacity-0', 'translate-y-10');
  }
};

window.addEventListener('scroll', globalScrollTrackingHandler);
backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
globalScrollTrackingHandler(); // Initial initialization call evaluation


// 7. Simulated Gemini AI Assistant Loop
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatOutput = document.getElementById('chat-output');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const promptValue = chatInput.value.trim();
  if (!promptValue) return;

  injectChatBubble('user', promptValue);
  chatInput.value = '';
  
  const loadingIndicatorNode = injectChatBubble('ai', 'Processing framework stream...', true);

  setTimeout(() => {
    loadingIndicatorNode.remove();
    injectChatBubble('ai', `Received system input: "${promptValue}". This portfolio is built with optimized semantic structures, handling theme engines and custom layout filters fully natively inside standard modern browsers.`);
  }, 1100);
});

function injectChatBubble(author, text, isLoading = false) {
  const container = document.createElement('div');
  container.className = `flex gap-3 max-w-[85%] ${author === 'user' ? 'ml-auto flex-row-reverse' : ''}`;
  
  container.innerHTML = `
    <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border text-xs font-semibold ${author === 'user' ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300' : 'bg-slate-100 dark:bg-cyan-900/50 border-slate-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400'}">${author === 'user' ? 'ME' : 'AI'}</div>
    <div class="px-4 py-3 rounded-2xl leading-relaxed ${author === 'user' ? 'bg-cyan-600 text-white rounded-tr-none' : 'bg-slate-100 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 rounded-tl-none'} ${isLoading ? 'animate-pulse text-slate-400' : ''}">${text}</div>
  `;
  
  chatOutput.appendChild(container);
  chatOutput.scrollTop = chatOutput.scrollHeight;
  return container;
}