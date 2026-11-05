// Games Dataset
const gamesData = [
  { id: 1, name: 'সুপার এইস', category: 'hot', icon: '🃏', bg: 'from-yellow-600 to-orange-700' },
  { id: 2, name: 'এভিয়েটর', category: 'hot', icon: '✈️', bg: 'from-red-700 to-red-900' },
  { id: 3, name: 'ম্যাজিক এস', category: 'slots', icon: '🎩', bg: 'from-purple-600 to-indigo-800' },
  { id: 4, name: 'বাউন্টি শোডাউন', category: 'slots', icon: '🤠', bg: 'from-amber-700 to-yellow-900' },
  { id: 5, name: 'ফ্লাইএক্স', category: 'hot', icon: '🚀', bg: 'from-sky-600 to-blue-800' },
  { id: 6, name: 'অ্যাজটেক', category: 'slots', icon: '🏛️', bg: 'from-yellow-500 to-amber-700' },
  { id: 7, name: 'সুপার এলিমেন্টস', category: 'events', icon: '🔥', bg: 'from-orange-500 to-red-600' },
  { id: 8, name: 'সার্কাস জোকার', category: 'live', icon: '🤡', bg: 'from-pink-500 to-rose-700' },
  { id: 9, name: 'ফরচুন জেমস', category: 'slots', icon: '💎', bg: 'from-yellow-400 to-orange-600' },
  { id: 10, name: 'ফিশ শিকারী', category: 'fishing', icon: '🐠', bg: 'from-blue-600 to-cyan-800' },
  { id: 11, name: 'সমুদ্রের রাজা', category: 'fishing', icon: '🦈', bg: 'from-cyan-700 to-blue-900' },
  { id: 12, name: 'লাইভ রুলেট', category: 'live', icon: '🎡', bg: 'from-emerald-600 to-teal-800' }
];

// Render Games Grid
function renderGames(category = 'hot') {
  const container = document.getElementById('game-grid');
  if (!container) return;

  const filtered = category === 'hot' 
    ? gamesData 
    : gamesData.filter(item => item.category === category);

  container.innerHTML = filtered.map(game => `
    <div onclick="playGame('${game.name}')" class="game-card bg-slate-800 rounded-xl overflow-hidden border border-slate-700 cursor-pointer">
      <div class="aspect-square bg-gradient-to-br ${game.bg} flex items-center justify-center text-4xl">
        ${game.icon}
      </div>
      <div class="p-1.5 text-center">
        <div class="text-[11px] font-medium truncate">${game.name}</div>
      </div>
    </div>
  `).join('');
}

// Category Filter Handler
function filterCategory(cat, element) {
  document.querySelectorAll('.sidebar-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-red-500', 'text-white');
    btn.classList.add('bg-slate-800', 'text-slate-400');
  });

  element.classList.add('active');
  element.classList.remove('bg-slate-800', 'text-slate-400');
  renderGames(cat);
}

// Modal Toggle Handler
function toggleModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.toggle('modal-active');
  }
}

// Side Drawer Handler
function toggleDrawer() {
  const drawer = document.getElementById('side-drawer');
  if (drawer) {
    drawer.classList.toggle('modal-active');
  }
}

// Active Bottom Navigation
function setActiveNav(element) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('text-red-500');
    item.classList.add('text-slate-400');
  });
  element.classList.remove('text-slate-400');
  element.classList.add('text-red-500');
}

// Game Action Notice
function playGame(name) {
  alert(`"${name}" শুরু করা হচ্ছে...`);
}

// Quick Action Notice
function showNotice(title) {
  alert(`${title} অপশনটি নির্বাচন করা হয়েছে।`);
}

// Auth Form Submission
function handleAuth(event, type) {
  event.preventDefault();
  alert(`${type} সফল হয়েছে!`);
  toggleModal(type === 'লগইন' ? 'login-modal' : 'register-modal');
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
  renderGames('hot');
});
