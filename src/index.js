import './styles.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clear existing content
}

function switchTab(tab) {
  clearContent();

  const content = document.getElementById('content');
  if (tab === 'Home') {
    content.appendChild(loadHome());
  } else if (tab === 'Menu') {
    content.appendChild(loadMenu());
  } else if (tab === 'Contact') {
    content.appendChild(loadContact());
  }
}

// Add event listeners to nav buttons
function setupNav() {
  document.querySelector('button:nth-child(1)').addEventListener('click', () => switchTab('Home'));
  document.querySelector('button:nth-child(2)').addEventListener('click', () => switchTab('Menu'));
  document.querySelector('button:nth-child(3)').addEventListener('click', () => switchTab('Contact'));
}

// Initialize the page
function initializeSite() {
  setupNav();
  switchTab('Home'); // Load the home tab by default
}

initializeSite();
