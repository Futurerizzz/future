/**
 * Ayutthaya World Heritage Tourism Portal - Application Logic
 */

// ==========================================
// 1. Storage & Favorites Management
// ==========================================
const FAVORITES_KEY = 'ayutthaya_fav_places';

function getFavorites() {
  try {
    const favs = localStorage.getItem(FAVORITES_KEY);
    return favs ? JSON.parse(favs) : [];
  } catch (e) {
    return [];
  }
}

function toggleFavorite(placeId) {
  let favs = getFavorites();
  const index = favs.indexOf(placeId);
  let added = false;
  
  if (index > -1) {
    favs.splice(index, 1);
    added = false;
  } else {
    favs.push(placeId);
    added = true;
  }
  
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
  } catch (e) {
    console.error("Storage error:", e);
  }

  updateFavCounters();
  updateFavButtonStates(placeId, added);
  
  showToast(added ? "บันทึกในรายการโปรดแล้ว ✨" : "นำออกจากรายการโปรดแล้ว");
  return added;
}

function isFavorite(placeId) {
  const favs = getFavorites();
  return favs.includes(placeId);
}

function updateFavCounters() {
  const count = getFavorites().length;
  document.querySelectorAll('.fav-count-badge').forEach(el => {
    el.textContent = count;
    if (count > 0) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
}

function updateFavButtonStates(placeId, isFav) {
  document.querySelectorAll(`[data-fav-id="${placeId}"]`).forEach(btn => {
    const icon = btn.querySelector('i');
    if (icon) {
      if (isFav) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid', 'text-rose-500');
      } else {
        icon.classList.remove('fa-solid', 'text-rose-500');
        icon.classList.add('fa-regular');
      }
    }
  });
}

// ==========================================
// 2. Toast Notification Helper
// ==========================================
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'bg-slate-900/90 backdrop-blur text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-medium flex items-center gap-3 transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-auto border border-slate-700';
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check text-emerald-400' : 'fa-circle-info text-amber-400'} text-base"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ==========================================
// 3. Share Functionality
// ==========================================
function sharePage(title, text, url) {
  const shareUrl = url || window.location.href;
  const shareTitle = title || document.title;
  const shareText = text || 'เที่ยวอยุธยา มรดกโลกและวัดดัง 10 แห่งห้ามพลาด';

  if (navigator.share) {
    navigator.share({
      title: shareTitle,
      text: shareText,
      url: shareUrl
    }).catch(err => {
      if (err.name !== 'AbortError') {
        copyToClipboard(shareUrl);
      }
    });
  } else {
    copyToClipboard(shareUrl);
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("คัดลอกลิงก์ไปยังคลิปบอร์ดแล้ว! 📋");
  }).catch(() => {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast("คัดลอกลิงก์แล้ว! 📋");
  });
}

// ==========================================
// 4. Quick View Modal
// ==========================================
function openQuickViewModal(placeId) {
  if (typeof ATTRACTIONS_DATA === 'undefined') return;
  const place = ATTRACTIONS_DATA.find(p => p.id === placeId);
  if (!place) return;

  let modal = document.getElementById('quick-view-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300';
    document.body.appendChild(modal);
  }

  const isFav = isFavorite(place.id);

  modal.innerHTML = `
    <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative transform scale-95 transition-transform duration-300 border border-amber-100">
      <!-- Close Button -->
      <button onclick="closeQuickViewModal()" class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur transition">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <!-- Image Header -->
      <div class="relative h-64 sm:h-72 w-full overflow-hidden">
        <img src="${place.image}" alt="${place.name}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
        <div class="absolute bottom-4 left-6 right-6 text-white">
          <span class="inline-block px-3 py-1 bg-amber-600/90 text-white text-xs font-semibold rounded-full mb-2 backdrop-blur">
            ${place.categoryLabel}
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold">${place.name}</h2>
          <p class="text-amber-200 text-sm font-sarabun">${place.nameEn}</p>
        </div>
      </div>

      <!-- Content Body -->
      <div class="p-6 space-y-6">
        <!-- Rating & Info Bar -->
        <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 text-sm">
          <div class="flex items-center gap-2">
            <div class="flex text-amber-500">
              <i class="fa-solid fa-star"></i>
            </div>
            <span class="font-bold text-slate-800">${place.rating}</span>
            <span class="text-slate-400">(${place.reviewsCount.toLocaleString()} รีวิว)</span>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="toggleFavorite('${place.id}')" data-fav-id="${place.id}" class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-rose-50 hover:border-rose-200 transition text-sm text-slate-700">
              <i class="${isFav ? 'fa-solid text-rose-500' : 'fa-regular'} fa-heart"></i>
              <span>บันทึก</span>
            </button>
            <button onclick="sharePage('${place.name}', '${place.shortDesc}', '${window.location.origin}/detail.html?id=${place.id}')" class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition text-sm text-slate-700">
              <i class="fa-solid fa-share-nodes"></i>
              <span>แชร์</span>
            </button>
          </div>
        </div>

        <!-- Description -->
        <div>
          <h3 class="font-bold text-slate-900 mb-2 flex items-center gap-2">
            <i class="fa-solid fa-circle-info text-amber-600"></i> เกี่ยวกับสถานที่
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed font-sarabun">${place.fullDesc}</p>
        </div>

        <!-- Highlights -->
        <div>
          <h3 class="font-bold text-slate-900 mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-600"></i> ไฮไลต์ที่ห้ามพลาด
          </h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
            ${place.highlights.map(h => `
              <li class="flex items-start gap-2 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100/80">
                <i class="fa-solid fa-check text-amber-600 text-xs mt-1"></i>
                <span class="font-sarabun text-xs leading-tight">${h}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Key Info Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div class="flex items-center gap-2.5">
            <i class="fa-regular fa-clock text-amber-600 text-base"></i>
            <div>
              <div class="text-slate-400">เวลาเปิด-ปิด</div>
              <div class="font-medium text-slate-800">${place.openHours}</div>
            </div>
          </div>
          <div class="flex items-center gap-2.5">
            <i class="fa-solid fa-ticket text-amber-600 text-base"></i>
            <div>
              <div class="text-slate-400">ค่าเข้าชม</div>
              <div class="font-medium text-slate-800">${place.admissionFee}</div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-3 pt-2">
          <a href="detail.html?id=${place.id}" class="flex-1 text-center py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium shadow-md shadow-amber-600/20 transition flex items-center justify-center gap-2">
            <span>อ่านรายละเอียดฉบับเต็ม</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </a>
          <a href="${place.googleMapUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium transition flex items-center gap-2">
            <i class="fa-solid fa-location-arrow text-amber-600"></i>
            <span>นำทาง (GPS)</span>
          </a>
        </div>
      </div>
    </div>
  `;

  // Show
  modal.classList.remove('pointer-events-none', 'opacity-0');
  const inner = modal.querySelector('div');
  if (inner) inner.classList.remove('scale-95');
  document.body.style.overflow = 'hidden';
}

function closeQuickViewModal() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    const inner = modal.querySelector('div');
    if (inner) inner.classList.add('scale-95');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 5. Initialize Core Listeners
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Update fav counters
  updateFavCounters();

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
  }

  // Click outside to close modal
  document.addEventListener('click', (e) => {
    const modal = document.getElementById('quick-view-modal');
    if (modal && e.target === modal) {
      closeQuickViewModal();
    }
  });

  // ESC to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickViewModal();
    }
  });
});
