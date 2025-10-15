let swaps = [
  { title: "Handmade Jewelry", description: "Trade for Guitar Lessons", link: "https://buymeacoffee.com/swapsociety", featured: true },
  { title: "Custom Illustration", description: "Trade for Music Lessons", link: "", featured: false }
];

let events = [
  { title: "Virtual Art Swap", description: "Weekly event for creatives", link: "https://buymeacoffee.com/swapsociety" },
  { title: "Sustainable Living Workshop", description: "Monthly eco-workshop", link: "" }
];

const swapContainer = document.getElementById('swapCards');
const eventContainer = document.getElementById('eventCards');

function renderSwaps() {
  swapContainer.innerHTML = '';
  swaps.forEach(swap => {
    const div = document.createElement('div');
    div.classList.add('swap-card');
    if(swap.featured) div.classList.add('featured');
    div.innerHTML = `
      <h3>${swap.featured ? '🌟 ' : ''}${swap.title}</h3>
      <p>${swap.description}</p>
      <a href="${swap.link || 'https://buymeacoffee.com/swapsociety'}" target="_blank">Support ☕</a>
    `;
    swapContainer.appendChild(div);
  });
}

function renderEvents() {
  eventContainer.innerHTML = '';
  events.forEach(event => {
    const div = document.createElement('div');
    div.classList.add('event-card');
    div.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <a href="${event.link || 'https://buymeacoffee.com/swapsociety'}" target="_blank">Support ☕</a>
    `;
    eventContainer.appendChild(div);
  });
}

// Initial render
renderSwaps();
renderEvents();

// Form submissions
document.getElementById('swapForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  swaps.push({
    title: form.title.value,
    description: form.description.value,
    link: form.link.value,
    featured: false
  });
  renderSwaps();
  form.reset();
});

document.getElementById('eventForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  events.push({
    title: form.title.value,
    description: form.description.value,
    link: form.link.value
  });
  renderEvents();
  form.reset();
});
import { registerUser, loginUser, logoutUser } from "./auth.js";

document.getElementById("signup").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  registerUser(email, password);
});

document.getElementById("login").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  loginUser(email, password);
});

document.getElementById("logout").addEventListener("click", () => {
  logoutUser();
});