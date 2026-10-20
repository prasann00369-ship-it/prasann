const CFG = window.PRASANN_CONFIG || {};
const CATS = ['snacks', 'indian', 'south', 'fast', 'sweets'];

let PRODUCTS = [];
let STORIES = [];

const T = {
  en: {
    reg_t:'Register to continue',reg_s:'Please share your details so we can serve you.',
    name:'Full name',mobile:'Mobile number',email:'Email address',
    addr:'Complete delivery address',
    consent:'I agree to the Privacy Policy and allow PRASANN to use these details to respond to my enquiries and orders.',
    privacy:'Your details are used to respond to your order enquiries.',
    register:'Register',demo:'DEMO MODE: secure backend is not configured.',
    e_name:'Enter your full name',e_mobile:'Enter a valid 10-digit Indian mobile number',
    e_email:'Enter a valid email address',e_addr:'Enter your complete address (at least 10 characters)',
    e_consent:'Please tick the consent box',welcome:'Welcome to PRASANN',
    tag:'Pure Taste ❤️ Pure Happiness',enter:'Enter Website',
    search:'Search products…',cats:'Categories',prods:'Products',soon:'Coming Soon',
    nores:'No products found.',pphc:'Product photo coming soon',
    nopr:'Price coming soon',unavail:'Currently unavailable',add:'Add to cart',
    pack:'Pack size',cart:'Your cart',empty:'Your cart is empty.',
    total:'Order total',clear:'Clear cart',wa:'Continue on WhatsApp',
    note:'Note (optional)',waInfo:'Stock, delivery and final charges must be confirmed by PRASANN. An enquiry is not a confirmed order.',
    contact:'Contact us',contactT:'Customer support',
    contactP:'Chat with us on WhatsApp: +91 8448047203',
    foot_p:'Privacy Policy',foot_t:'Terms of Use',
    hero:'Pure taste, made to make you happy.',heroS:'Explore PRASANN products.',
    kaju:'PRASANN Kaju Shape Snacks',kajuD:'Description coming soon.',
    blocked:'Checkout is unavailable until prices are confirmed.',
    lang:'हिंदी',remove:'Remove',
    pdesc:'Privacy Policy: details must be completed by the owner before launch.',
    tdesc:'Orders are enquiries and require confirmation by PRASANN.',
    close:'Close',items:'Items',
    wishlistTitle:'My Wishlist',accountTitle:'My Account',
    navHome:'Home',navShop:'Shop',navCart:'Cart',
    navWishlist:'Wishlist',navAccount:'Account',
    saveProfile:'Save Profile',cancel:'Cancel',
    editProfile:'Edit Profile',emptyWishlist:'Your wishlist is empty.',
    addWish:'♡ Add to Wishlist',removeWish:'♥ Remove from Wishlist',
    saved:'Profile saved in this browser.',
    localProfileNote:'Profile changes are stored in this browser only. Secure login and cross-device sync need a backend.',
    added:'Added to cart',priceWait:'Price not confirmed',
    quantity:'Quantity',checkoutBlocked:'A confirmed price is required before checkout.',
    accountMissing:'Please register to view your account.',
    profileError:'Please check your name, mobile, email and address.',
    registered:'Registration complete.',
    stories:'PRASANN Stories',loadError:'Unable to load products. Please try again later.',
    noStories:'No stories available right now.',refresh:'Refresh products'
  },
  hi: {
    reg_t:'जारी रखने के लिए रजिस्टर करें',reg_s:'कृपया अपनी जानकारी दें ताकि हम आपकी सेवा कर सकें।',
    name:'पूरा नाम',mobile:'मोबाइल नंबर',email:'ईमेल पता',
    addr:'पूरा डिलीवरी पता',
    consent:'मैं गोपनीयता नीति से सहमत हूँ और प्रसन्न को अपनी पूछताछ व ऑर्डर का जवाब देने के लिए ये जानकारी उपयोग करने की अनुमति देता/देती हूँ।',
    privacy:'आपकी जानकारी का उपयोग ऑर्डर संबंधी पूछताछ का जवाब देने के लिए किया जाएगा।',
    register:'रजिस्टर करें',demo:'डेमो मोड: सुरक्षित बैकएंड कॉन्फ़िगर नहीं है।',
    e_name:'अपना पूरा नाम लिखें',e_mobile:'सही 10 अंकों का भारतीय मोबाइल नंबर लिखें',
    e_email:'सही ईमेल पता लिखें',e_addr:'पूरा पता लिखें (कम से कम 10 अक्षर)',
    e_consent:'कृपया सहमति बॉक्स पर टिक करें',welcome:'प्रसन्न में आपका स्वागत है',
    tag:'Pure Taste ❤️ Pure Happiness',enter:'वेबसाइट खोलें',
    search:'उत्पाद खोजें…',cats:'श्रेणियाँ',prods:'उत्पाद',soon:'जल्द आ रहा है',
    nores:'कोई उत्पाद नहीं मिला।',pphc:'उत्पाद की फोटो जल्द आएगी',
    nopr:'कीमत जल्द बताई जाएगी',unavail:'अभी उपलब्ध नहीं',add:'कार्ट में जोड़ें',
    pack:'पैक साइज़',cart:'आपका कार्ट',empty:'आपका कार्ट खाली है।',
    total:'कुल राशि',clear:'कार्ट खाली करें',wa:'WhatsApp पर जारी रखें',
    note:'नोट (वैकल्पिक)',waInfo:'स्टॉक, डिलीवरी और अंतिम शुल्क की पुष्टि प्रसन्न करेगा। पूछताछ से ऑर्डर पक्का नहीं होता।',
    contact:'हमसे संपर्क करें',contactT:'ग्राहक सहायता',
    contactP:'WhatsApp पर बात करें: +91 8448047203',
    foot_p:'गोपनीयता नीति',foot_t:'उपयोग की शर्तें',
    hero:'शुद्ध स्वाद, आपकी खुशी के लिए।',heroS:'प्रसन्न के उत्पाद देखें।',
    kaju:'प्रसन्न काजू शेप स्नैक्स',kajuD:'विवरण जल्द आएगा।',
    blocked:'कीमत की पुष्टि होने तक चेकआउट उपलब्ध नहीं है।',
    lang:'English',remove:'हटाएँ',
    pdesc:'गोपनीयता नीति: लॉन्च से पहले मालिक द्वारा विवरण पूरे किए जाने चाहिए।',
    tdesc:'ऑर्डर केवल पूछताछ हैं और प्रसन्न की पुष्टि आवश्यक है।',
    close:'बंद करें',items:'आइटम',
    wishlistTitle:'मेरी विशलिस्ट',accountTitle:'मेरा अकाउंट',
    navHome:'होम',navShop:'शॉप',navCart:'कार्ट',
    navWishlist:'विशलिस्ट',navAccount:'अकाउंट',
    saveProfile:'प्रोफ़ाइल सेव करें',cancel:'रद्द करें',
    editProfile:'प्रोफ़ाइल एडिट करें',emptyWishlist:'आपकी विशलिस्ट खाली है।',
    addWish:'♡ विशलिस्ट में जोड़ें',removeWish:'♥ विशलिस्ट से हटाएँ',
    saved:'प्रोफ़ाइल इस ब्राउज़र में सेव हो गई।',
    localProfileNote:'प्रोफ़ाइल केवल इसी ब्राउज़र में सेव होती है। सुरक्षित लॉगिन और दूसरे डिवाइस पर सिंक के लिए बैकएंड चाहिए।',
    added:'कार्ट में जोड़ दिया गया',priceWait:'कीमत की पुष्टि बाकी है',
    quantity:'मात्रा',checkoutBlocked:'चेकआउट के लिए कीमत की पुष्टि ज़रूरी है।',
    accountMissing:'अकाउंट देखने के लिए पहले रजिस्टर करें।',
    profileError:'नाम, मोबाइल, ईमेल और पता जाँचें।',
    registered:'रजिस्ट्रेशन पूरा हुआ।',
    stories:'प्रसन्न स्टोरीज़',loadError:'उत्पाद लोड नहीं हो पाए। कृपया बाद में दोबारा प्रयास करें।',
    noStories:'अभी कोई स्टोरी उपलब्ध नहीं है।',refresh:'उत्पाद दोबारा लोड करें'
  }
};

const CATN = {
  en:{snacks:'Snacks',indian:'Indian Meals',south:'South Indian Meals',fast:'Fast Food',sweets:'Sweets'},
  hi:{snacks:'स्नैक्स',indian:'भारतीय भोजन',south:'दक्षिण भारतीय भोजन',fast:'फास्ट फूड',sweets:'मिठाई'}
};

let lang = 'en';
let selectedCategory = null;
const STORE = {
  user:'prasann_profile_v1',
  cart:'prasann_cart_v1',
  wishlist:'prasann_wishlist_v1',
  lang:'prasann_language_v1'
};

function readStore(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch (_) { return fallback; }
}

function saveStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (_) { return false; }
}

let cart = readStore(STORE.cart, []);
let wishlist = readStore(STORE.wishlist, []);
let user = readStore(STORE.user, null);
lang = readStore(STORE.lang, 'en');

if (!['en','hi'].includes(lang)) lang = 'en';
if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(wishlist)) wishlist = [];

const $ = s => document.querySelector(s);
const t = k => (T[lang] && T[lang][k]) || T.en[k] || k;

function money(n) {
  return '₹' + (Number.isInteger(Number(n)) ? Number(n) : Number(n).toFixed(2));
}

function packLabel(g) {
  return g >= 1000 && g % 1000 === 0
    ? (g / 1000) + ' kg'
    : g + ' g';
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  })[c]);
}

function validate(v) {
  const e = {};
  if (!v.name || v.name.trim().length < 2) e.name = 'e_name';
  const mobile = (v.mobile || '').replace(/[\s()-]/g, '');
  if (!/^(?:\+?91)?[6-9]\d{9}$/.test(mobile)) e.mobile = 'e_mobile';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email || '')) e.email = 'e_email';
  if (!v.addr || v.addr.trim().length < 10) e.addr = 'e_addr';
  if (!v.consent) e.consent = 'e_consent';
  return e;
}

function lineOk(item) {
  const p = PRODUCTS.find(x => String(x.id) === String(item.id));
  return !!(p && p.available);
}

function getProductName(product) {
  return lang === 'hi'
    ? (product.name_hi || product.name || product.id)
    : (product.name || product.name_hi || product.id);
}

function getProductDescription(product) {
  return lang === 'hi'
    ? (product.description_hi || product.description || '')
    : (product.description || product.description_hi || '');
}

function findPack(product, grams) {
  return (product.packOptions || []).find(
    p => Number(p.grams) === Number(grams)
  );
}

function packUnitPrice(product, grams) {
  const pack = findPack(product, grams);
  if (!pack || !Number.isFinite(Number(pack.price)) || Number(pack.price) <= 0) {
    return null;
  }
  return Number(pack.price);
}

function buildMsg(u, items, note) {
  const lines = [
    'PRASANN — Order Enquiry',
    '',
    'Customer Name: ' + u.name,
    'Mobile: ' + u.mobile,
    'Email: ' + (u.email || '-'),
    'Delivery Address: ' + u.addr,
    '',
    'Items:'
  ];

  let total = 0;
  let allPriced = true;
  let includedItems = 0;

  items.forEach(item => {
    const p = PRODUCTS.find(x => String(x.id) === String(item.id));
    if (!p || !lineOk(item)) return;

    const unit = packUnitPrice(p, item.g);
    const quantity = Math.max(1, Number(item.q) || 1);
    includedItems++;

    if (unit !== null) {
      const lineTotal = unit * quantity;
      total += lineTotal;

      lines.push(
        '- ' + getProductName(p) +
        ' | ' + packLabel(item.g) +
        ' | Qty ' + quantity +
        ' | ' + money(unit) + ' each' +
        ' | ' + money(lineTotal)
      );
    } else {
      allPriced = false;
      lines.push(
        '- ' + getProductName(p) +
        ' | ' + packLabel(item.g) +
        ' | Qty ' + quantity +
        ' | Price not confirmed'
      );
    }
  });

  if (!includedItems) {
    lines.push('- No currently available items');
    allPriced = false;
  }

  lines.push(
    '',
    'Order Total: ' + (allPriced ? money(total) : 'Price not confirmed'),
    'Customer Note: ' + (note || '-'),
    '',
    'Please confirm product prices, availability and delivery details.'
  );

  return lines.join('\n');
}

function waUrl(message) {
  const number = String(CFG.WHATSAPP || '918448047203').replace(/\D/g, '');
  return 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
}

/* Supabase helpers */

function supabaseReady() {
  return !!(CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY);
}

function supabaseHeaders() {
  return {
    apikey: CFG.SUPABASE_ANON_KEY,
    Authorization: 'Bearer ' + CFG.SUPABASE_ANON_KEY
  };
}

async function supabaseGet(table, query) {
  if (!supabaseReady()) {
    throw new Error('Supabase URL or anon key is missing in config.js');
  }

  const base = CFG.SUPABASE_URL.replace(/\/+$/, '');
  const url = base + '/rest/v1/' + table + '?' + query;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      ...supabaseHeaders(),
      Accept: 'application/json'
    }
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(table + ' request failed (' + response.status + '): ' + details);
  }

  return response.json();
}

function normalizeCategory(value) {
  const v = String(value || '').toLowerCase().trim();

  const aliases = {
    snack:'snacks', snacks:'snacks', kaju:'snacks', mathri:'snacks',
    indian:'indian', 'indian meals':'indian',
    south:'south', 'south indian':'south', 'south indian meals':'south',
    fast:'fast', 'fast food':'fast',
    sweets:'sweets', sweet:'sweets', mithai:'sweets'
  };

  return aliases[v] || (CATS.includes(v) ? v : 'snacks');
}

/* हर product के लिए Supabase में सेव सभी pack options पढ़ें। */
function normalizePacks(raw) {
  if (raw === null || raw === undefined || raw === '') return [];

  let value = raw;

  if (typeof value === 'string') {
    try {
      value = JSON.parse(value);
    } catch (_) {
      return [];
    }
  }

  if (!Array.isArray(value)) {
    if (typeof value === 'object') {
      value = Object.entries(value).map(([grams, price]) => ({
        grams: Number(grams),
        price: Number(price)
      }));
    } else {
      return [];
    }
  }

  const result = [];
  const seen = new Set();

  value.forEach(item => {
    if (!item || typeof item !== 'object') return;

    const grams = Number(
      item.grams ?? item.g ?? item.weight ?? item.size ??
      item.pack_grams ?? item.quantity ?? item.value
    );

    const rawPrice =
      item.price ?? item.amount ?? item.pack_price ??
      item.selling_price ?? item.sellingPrice;

    const price = rawPrice === null || rawPrice === undefined || rawPrice === ''
      ? null
      : Number(rawPrice);

    if (!Number.isFinite(grams) || grams <= 0 || seen.has(grams)) return;

    seen.add(grams);

    result.push({
      grams,
      price: Number.isFinite(price) && price > 0 ? price : null
    });
  });

  return result.sort((a, b) => a.grams - b.grams);
}

function normalizeProduct(row) {
  const id = String(row.id ?? row.slug ?? row.product_id ?? '');
  const status = String(row.status ?? 'active').toLowerCase();

  const available =
    row.available !== false &&
    row.is_available !== false &&
    ['available','active'].includes(status);

  return {
    id,
    name: row.name || row.title || id,
    name_hi: row.name_hi || row.title_hi || '',
    description: row.description || row.details || '',
    description_hi: row.description_hi || '',
    image_url: row.image_url || row.photo_url || row.image || '',
    video_url: row.video_url || '',
    cat: normalizeCategory(row.category || row.cat),
    packOptions: normalizePacks(row.pack_options || row.packs),
    available
  };
}

async function loadProducts() {
  try {
    const rows = await supabaseGet('products', 'select=*&order=created_at.desc');

    PRODUCTS = rows.map(normalizeProduct).filter(p => p.id && p.available);

    // Cart में पुराने हटाए गए products और invalid packs को न रखें।
    const validCart = cart.filter(item => {
      const p = PRODUCTS.find(x => String(x.id) === String(item.id));
      return p && findPack(p, item.g);
    });

    if (validCart.length !== cart.length) {
      cart = validCart;
      saveStore(STORE.cart, cart);
    }

    render();

  } catch (error) {
    console.error('PRASANN product loading error:', error);

    const box = $('#prods');
    if (box) {
      box.innerHTML =
        '<p class="warn">' + escapeHTML(t('loadError')) + '</p>' +
        '<button type="button" class="btn" id="retryProducts">' +
        escapeHTML(t('refresh')) + '</button>';

      const retry = $('#retryProducts');
      if (retry) retry.onclick = loadProducts;
    }
  }
}


  
async function loadStories() {
  try {
    const rows = await supabaseGet('stories', 'select=*&order=created_at.desc');
    const now = Date.now();

    STORIES = rows.filter(story => {
      if (!story.image_url && !story.video_url) return false;
      if (story.expires_at) {
        const expiry = new Date(story.expires_at).getTime();
        if (Number.isFinite(expiry) && expiry <= now) return false;
      }
      return true;
    });

    renderStories();
  } catch (error) {
    console.error('PRASANN stories loading error:', error);
    renderStoriesError();
  }
}
function ensureStoriesSection() {
  let section = $('#storiesSection');
  const home = $('#homePage');

  if (!home) return section;

  if (!section) {
    section = document.createElement('section');
    section.id = 'storiesSection';
    section.className = 'section';
    section.innerHTML =
      '<h2>' + escapeHTML(t('stories')) + '</h2>' +
      '<div id="storiesList" class="stories-list"></div>';
  }

  if (section.parentNode !== home) {
    home.appendChild(section);
  }

  return section;
    }

function renderStories() {
  const section = ensureStoriesSection();
  if (!section) return;

  const list = $('#storiesList');
  if (!list) return;

  if (!STORIES.length) {
    list.innerHTML =
      '<p>' + escapeHTML(t('noStories')) + '</p>';
    return;
  }

  list.innerHTML = STORIES.map((story, index) => {
    const caption = story.caption || '';
    const image = story.cover_url || story.image_url || '';
    const isVideo = !!story.video_url;

    const preview = isVideo
      ? (image
          ? `<img src="${escapeHTML(image)}" alt="PRASANN video" loading="lazy">`
          : `<div class="story-video-cover"><span>▶</span><small>Video</small></div>`)
      : `<img src="${escapeHTML(image)}" alt="${escapeHTML(caption || 'PRASANN')}" loading="lazy">`;

    return `
      <article class="story-card">
        <button type="button" class="story-open"
          data-story="${index}"
          aria-label="${escapeHTML(caption || 'PRASANN content')}">
          ${preview}
        </button>
        ${caption ? '<p>' + escapeHTML(caption) + '</p>' : ''}
      </article>`;
  }).join('');
      }

function stopStoryTimer() {
  if (storyTimer) clearTimeout(storyTimer);
  storyTimer = null;
}

function closeStoryViewer() {
  stopStoryTimer();

  const viewer = document.getElementById('storyViewer');
  const video = document.getElementById('storyVideo');

  if (video) {
    video.pause();
    video.removeAttribute('src');
    video.load();
  }

  if (viewer) viewer.hidden = true;
}

function scheduleStoryNext(duration) {
  const fill = document.getElementById('storyProgressFill');
  if (fill) fill.style.width = '0%';

  storyTimer = setTimeout(() => {
    showStory(activeStoryIndex + 1);
  }, duration);
}

function showStory(index) {
  if (!STORIES.length) return;

  if (index < 0) index = STORIES.length - 1;

  if (index >= STORIES.length) {
    closeStoryViewer();
    return;
  }

  stopStoryTimer();
  activeStoryIndex = index;

  const story = STORIES[index];
  const viewer = document.getElementById('storyViewer');
  const img = document.getElementById('storyImage');
  const video = document.getElementById('storyVideo');
  const caption = document.getElementById('storyCaption');
  const mute = document.getElementById('storyMute');

  if (!viewer || !img || !video || !caption || !mute) return;

  viewer.hidden = false;
  caption.textContent = story.caption || '';

  video.pause();
  video.removeAttribute('src');
  video.load();

  img.hidden = true;
  video.hidden = true;

  const videoUrl = story.video_url || '';
  const imageUrl = story.image_url || '';

  if (videoUrl) {
    video.hidden = false;
    video.src = videoUrl;
    video.muted = true;
    mute.textContent = '🔇';

    video.onloadedmetadata = () => {
      if (index !== activeStoryIndex) return;
      video.play().catch(() => {});
    };

    video.onended = () => {
      if (index === activeStoryIndex) showStory(index + 1);
    };

    video.onerror = () => {
      if (index === activeStoryIndex) {
        scheduleStoryNext(5000);
      }
    };

    video.onplaying = () => {
      if (index !== activeStoryIndex) return;
      stopStoryTimer();

      const fill = document.getElementById('storyProgressFill');
      const duration = Number.isFinite(video.duration)
        ? video.duration * 1000
        : 15000;

      if (fill) {
        fill.style.transition = 'none';
        fill.style.width = '0%';
        requestAnimationFrame(() => {
          fill.style.transition = `width ${duration}ms linear`;
          fill.style.width = '100%';
        });
      }
    };
  } else if (imageUrl) {
    img.hidden = false;
    img.src = imageUrl;
    scheduleStoryNext(5000);
  } else {
    showStory(index + 1);
  }
}

document.addEventListener('click', event => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const storyButton = target.closest('[data-story]');

  if (storyButton) {
    showStory(Number(storyButton.dataset.story));
    return;
  }

  if (target.closest('#storyClose')) {
    closeStoryViewer();
    return;
  }

  if (target.closest('#storyPrev')) {
    showStory(activeStoryIndex - 1);
    return;
  }

  if (target.closest('#storyNext')) {
    showStory(activeStoryIndex + 1);
    return;
  }

  if (target.closest('#storyMute')) {
    const video = document.getElementById('storyVideo');
    if (video && !video.hidden) {
      video.muted = !video.muted;
      target.closest('#storyMute').textContent =
        video.muted ? '🔇' : '🔊';
    }
  }
});

document.addEventListener('keydown', event => {
  const viewer = document.getElementById('storyViewer');
  if (!viewer || viewer.hidden) return;

  if (event.key === 'Escape') closeStoryViewer();
  if (event.key === 'ArrowRight') showStory(activeStoryIndex + 1);
  if (event.key === 'ArrowLeft') showStory(activeStoryIndex - 1);
});
function renderCategories() {
  const box = $('#cats');
  if (!box) return;

  box.innerHTML = CATS.map(c => {
    const has = PRODUCTS.some(p => p.cat === c);
    const active = selectedCategory === c;

    return `
      <button
        type="button"
        class="cat"
        data-category="${c}"
        aria-pressed="${active}"
        style="
          cursor:pointer;
          width:100%;
          font:inherit;
          color:var(--tx);
          border:2px solid ${active ? 'var(--o)' : '#e3dcc7'};
          background:${active ? '#fff0e3' : '#fff'};
          box-shadow:${active ? '0 0 0 2px #ff6b0a33' : 'none'};
        "
      >
        <b>${escapeHTML(CATN[lang][c])}</b>
        ${has ? '' : `<span class="soon">No Items</span>`}
      </button>
    `;
  }).join('');
}

function renderProducts() {
  const box = $('#prods');
  if (!box) return;

  const q = ($('#q')?.value || '').trim().toLowerCase();

  const list = PRODUCTS.filter(p => {
    const text = [
      getProductName(p),
      getProductDescription(p),
      p.cat,
      CATN[lang][p.cat] || ''
    ].join(' ').toLowerCase();

    const matchesCategory =
      selectedCategory === null || p.cat === selectedCategory;

    const matchesSearch = !q || text.includes(q);

    return matchesCategory && matchesSearch;
  });

  if (!list.length) {
    box.innerHTML = `<p>${escapeHTML(t('nores'))}</p>`;
    return;
  }

  box.innerHTML = list.map(p => {
    const saved = wishlist.some(id => String(id) === String(p.id));
    const name = getProductName(p);
    const description = getProductDescription(p);
    const packs = p.packOptions || [];

    const image = p.image_url
      ? `<img
          src="${escapeHTML(p.image_url)}"
          alt="${escapeHTML(name)}"
          loading="lazy"
          style="width:100%;height:190px;object-fit:cover;border-radius:12px"
        >`
      : `<div class="ph">${escapeHTML(t('pphc'))}</div>`;

    const video = p.video_url
      ? `<p>
          <a href="${escapeHTML(p.video_url)}"
             target="_blank"
             rel="noopener noreferrer">
            ▶ Watch product video
          </a>
        </p>`
      : '';

    const packControl = packs.length
      ? `<label>
          ${escapeHTML(t('pack'))}
          <select id="pk-${escapeHTML(p.id)}">
            ${packs.map(pack => {
              const price = pack.price;
              const label = packLabel(pack.grams);
              const priceText =
                price !== null ? ' — ' + money(price) : '';

              return `
                <option
                  value="${pack.grams}"
                  data-pack-price="${price ?? ''}"
                >
                  ${escapeHTML(label + priceText)}
                </option>
              `;
            }).join('')}
          </select>
        </label>`
      : `<p>${escapeHTML(t('unavail'))}</p>`;

    return `
      <article class="card">
        ${image}

        <h3>${escapeHTML(name)}</h3>

        <details class="product-description">
          <summary>
            ${lang === 'hi' ? 'प्रोडक्ट का विवरण' : 'Product Description'}
          </summary>
          <p>${escapeHTML(description)}</p>
        </details>

        ${video}
        ${packControl}

        <button
          type="button"
          class="btn"
          data-add="${escapeHTML(p.id)}"
          ${!packs.length ? 'disabled' : ''}
        >
          ${escapeHTML(t('add'))}
        </button>

        <button
          type="button"
          class="wish-btn ${saved ? 'saved' : ''}"
          data-wish="${escapeHTML(p.id)}"
        >
          ${escapeHTML(saved ? t('removeWish') : t('addWish'))}
        </button>
      </article>
    `;
  }).join('');
}

    

function renderCart() {
  const count = $('#cnt');
  const box = $('#cartItems');
  const totalBox = $('#tot');
  const waButton = $('#wa');

  if (!count || !box || !totalBox || !waButton) return;

  count.textContent = cart.reduce((sum, item) => sum + Number(item.q || 0), 0);

  if (!cart.length) {
    box.innerHTML = `<p>${escapeHTML(t('empty'))}</p>`;
    totalBox.textContent = '';
    waButton.disabled = true;
    return;
  }

  let total = 0;
  let allPriced = true;

  box.innerHTML = cart.map((item, index) => {
    const p = PRODUCTS.find(x => String(x.id) === String(item.id));
    if (!p) return '';

    const pack = findPack(p, item.g);
    if (!pack) return '';

    const unit = packUnitPrice(p, item.g);
    const quantity = Math.max(1, Number(item.q) || 1);
    const priced = unit !== null;
    let detail = t('priceWait');

    if (priced) {
      const lineTotal = unit * quantity;
      total += lineTotal;
      detail = `${money(unit)} × ${quantity} = ${money(lineTotal)}`;
    } else {
      allPriced = false;
    }

    return `<div class="line">
      <div><b>${escapeHTML(getProductName(p))}</b><br>
      ${escapeHTML(packLabel(item.g))} · ${escapeHTML(detail)}</div>
      <div>
        <button type="button" class="sm" data-qty="${index}" data-delta="-1">−</button>
        <button type="button" class="sm" data-qty="${index}" data-delta="1">+</button>
        <button type="button" class="sm" data-remove="${index}">${escapeHTML(t('remove'))}</button>
      </div>
    </div>`;
  }).join('');

  totalBox.textContent = allPriced
    ? t('total') + ': ' + money(total)
    : t('priceWait');

  waButton.disabled = !user || !cart.length;
}

function renderWishlist() {
  const box = $('#wishlistItems');
  if (!box) return;

  if (!wishlist.length) {
    box.innerHTML = `<p>${escapeHTML(t('emptyWishlist'))}</p>`;
    return;
  }

  box.innerHTML = wishlist.map(id => {
    const p = PRODUCTS.find(x => String(x.id) === String(id));
    if (!p) return '';

    return `<div class="item-card">
      <h3>${escapeHTML(getProductName(p))}</h3>
      <p>${escapeHTML(getProductDescription(p))}</p>
      <button type="button" class="btn" data-wish-addcart="${escapeHTML(p.id)}">${escapeHTML(t('add'))}</button>
      <button type="button" class="hb" data-wish-remove="${escapeHTML(p.id)}">${escapeHTML(t('remove'))}</button>
    </div>`;
  }).join('');
}

function renderAccount() {
  const form = $('#accountForm');
  const box = $('#accountView');
  if (!form || !box) return;

  form.hidden = true;

  if (!user) {
    box.innerHTML = `<p>${escapeHTML(t('accountMissing'))}</p>`;
    return;
  }

  box.innerHTML = `
    <div class="item-card">
      <h3>${escapeHTML(user.name)}</h3>
      <p><b>${escapeHTML(t('mobile'))}:</b> ${escapeHTML(user.mobile)}</p>
      <p><b>${escapeHTML(t('email'))}:</b> ${escapeHTML(user.email)}</p>
      <p><b>${escapeHTML(t('addr'))}:</b><br>${escapeHTML(user.addr)}</p>
      <button type="button" class="btn" id="editProfileBtn">${escapeHTML(t('editProfile'))}</button>
    </div>`;

  $('#editProfileBtn').onclick = beginEdit;
}

function render() {
  renderCategories();
  renderProducts();
  renderCart();
  renderWishlist();
  renderAccount();
  renderStories();
}

function applyLang() {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i]').forEach(el => {
    el.textContent = t(el.dataset.i);
  });

  document.querySelectorAll('[data-ph]').forEach(el => {
    el.placeholder = t(el.dataset.ph);
  });

  render();
}

function addToCart(id, grams) {
  const product = PRODUCTS.find(p => String(p.id) === String(id));
  if (!product || !product.available) return;

  const pack = findPack(product, grams);
  if (!pack) return;

  const found = cart.find(i =>
    String(i.id) === String(id) && Number(i.g) === Number(grams)
  );

  if (found) found.q++;
  else cart.push({id:product.id, g:Number(grams), q:1});

  saveStore(STORE.cart, cart);
  render();
  showPanel('cartPanel');
}

function showPanel(id) {
  ['cartPanel','wishlistPanel','accountPanel'].forEach(panelId => {
    const panel = $('#' + panelId);
    if (!panel) return;

    if (panelId === 'cartPanel') {
      panel.classList.toggle('open', panelId === id);
    } else {
      panel.hidden = panelId !== id;
    }
  });

  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === ({
      cartPanel:'cart',
      wishlistPanel:'wishlist',
      accountPanel:'account'
    }[id] || id));
  });
}

function closePanels() {
  const cartPanel = $('#cartPanel');
  const wishPanel = $('#wishlistPanel');
  const accountPanel = $('#accountPanel');

  if (cartPanel) cartPanel.classList.remove('open');
  if (wishPanel) wishPanel.hidden = true;
  if (accountPanel) accountPanel.hidden = true;

  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === 'home');
  });
}

function beginEdit() {
  if (!user) return;

  $('#editName').value = user.name || '';
  $('#editMobile').value = user.mobile || '';
  $('#editEmail').value = user.email || '';
  $('#editAddr').value = user.addr || '';
  $('#accountError').textContent = '';
  $('#accountForm').hidden = false;
  $('#editName').focus();
}

function switchLang() {
  lang = lang === 'en' ? 'hi' : 'en';
  saveStore(STORE.lang, lang);
  applyLang();
}

if (typeof module !== 'undefined') {
  module.exports = {
    validate, buildMsg, waUrl,
    get PRODUCTS() { return PRODUCTS; }
  };
}

if (typeof document !== 'undefined') (function () {
  const configured = supabaseReady();

  document.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof Element)) return;
const categoryButton = target.closest('[data-category]');

if (categoryButton) {
  const category = categoryButton.dataset.category;

  selectedCategory =
    selectedCategory === category ? null : category;

  renderCategories();
  renderProducts();

  const productSection = $('#prods');
  if (productSection) {
    productSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  return;
        }
    const nav = target.closest('[data-nav]');
    if (nav) {
      const dest = nav.dataset.nav;
if (dest === 'home') {
  closePanels();

  const homePage = $('#homePage');
  const shopPage = $('#shopPage');

  if (homePage) homePage.hidden = false;
  if (shopPage) shopPage.hidden = true;

  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === 'home');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

} else if (dest === 'shop') {
  closePanels();

  const homePage = $('#homePage');
  const shopPage = $('#shopPage');

  if (homePage) homePage.hidden = true;
  if (shopPage) shopPage.hidden = false;

  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === 'shop');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

} else if (dest === 'cart') {
  showPanel('cartPanel');
} else if (dest === 'wishlist') {
  showPanel('wishlistPanel');
} else if (dest === 'account') {
  showPanel('accountPanel');
}
return;
} 
    if (target.closest('[data-close]')) {
      closePanels();
      return;
    }

    const add = target.closest('[data-add]');
    if (add) {
      const select = $('#pk-' + CSS.escape(add.dataset.add));
      if (select) addToCart(add.dataset.add, Number(select.value));
      return;
    }

    const wish = target.closest('[data-wish]');
    if (wish) {
      const id = wish.dataset.wish;

      wishlist = wishlist.some(x => String(x) === String(id))
        ? wishlist.filter(x => String(x) !== String(id))
        : [...wishlist, id];

      saveStore(STORE.wishlist, wishlist);
      render();
      return;
    }

    const qty = target.closest('[data-qty]');
    if (qty) {
      const i = Number(qty.dataset.qty);
      const delta = Number(qty.dataset.delta);

      if (cart[i]) {
        cart[i].q += delta;
        if (cart[i].q <= 0) cart.splice(i, 1);
        saveStore(STORE.cart, cart);
        render();
      }
      return;
    }

    const remove = target.closest('[data-remove]');
    if (remove) {
      cart.splice(Number(remove.dataset.remove), 1);
      saveStore(STORE.cart, cart);
      render();
      return;
    }

    const wishRemove = target.closest('[data-wish-remove]');
    if (wishRemove) {
      wishlist = wishlist.filter(id => String(id) !== String(wishRemove.dataset.wishRemove));
      saveStore(STORE.wishlist, wishlist);
      render();
      return;
    }

    const wishAdd = target.closest('[data-wish-addcart]');
    if (wishAdd) {
      const id = wishAdd.dataset.wishAddcart;
      const p = PRODUCTS.find(x => String(x.id) === String(id));
      const firstPack = p && p.packOptions && p.packOptions[0];

      if (firstPack) addToCart(id, firstPack.grams);
      else msgNoPack();
    }
  });

  function msgNoPack() {
    alert(t('unavail'));
  }

  if ($('#cartBtn')) $('#cartBtn').onclick = () => showPanel('cartPanel');
  if ($('#langBtn')) $('#langBtn').onclick = switchLang;
  if ($('#langBtn2')) $('#langBtn2').onclick = switchLang;
  if ($('#q')) $('#q').oninput = renderProducts;

  if ($('#clear')) {
    $('#clear').onclick = () => {
      cart = [];
      saveStore(STORE.cart, cart);
      render();
    };
  }

  if ($('#wa')) {
    $('#wa').onclick = () => {
      if (!user || !cart.length) {
        alert('Please register and add products to your cart.');
        return;
      }

      window.open(
        waUrl(buildMsg(user, cart, $('#note') ? $('#note').value.trim() : '')),
        '_blank',
        'noopener'
      );
    };
  }

  document.querySelectorAll('[data-modal]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      $('#modalT').textContent = t(link.dataset.modal);
      $('#modal').hidden = false;
    });
  });

  if ($('#mclose')) {
    $('#mclose').onclick = () => { $('#modal').hidden = true; };
  }

  if ($('#regForm')) {
    $('#regForm').addEventListener('submit', async event => {
      event.preventDefault();

      const form = event.currentTarget;
      const v = {
        name:form.elements.name.value.trim(),
        mobile:form.elements.mobile.value.trim(),
        email:form.elements.email.value.trim(),
        addr:form.elements.addr.value.trim(),
        consent:form.elements.consent.checked
      };

      const errors = validate(v);
      document.querySelectorAll('.err').forEach(el => { el.textContent = ''; });

      Object.keys(errors).forEach(key => {
        const errorBox = $('#e-' + key);
        if (errorBox) errorBox.textContent = t(errors[key]);
      });

      if (Object.keys(errors).length) return;

      if (configured) {
        try {
          const response = await fetch(
            CFG.SUPABASE_URL.replace(/\/+$/, '') + '/functions/v1/hyper-responder',
            {
              method:'POST',
              headers:{
                'Content-Type':'application/json',
                apikey:CFG.SUPABASE_ANON_KEY,
                Authorization:'Bearer ' + CFG.SUPABASE_ANON_KEY
              },
              body:JSON.stringify({...v, lang})
            }
          );

          if (!response.ok) throw new Error('Registration failed');
        } catch (error) {
          console.error('Registration error:', error);
          $('#e-consent').textContent = 'Registration failed. Please try again.';
          return;
        }
      }

      user = {
        name:v.name,
        mobile:v.mobile,
        email:v.email,
        addr:v.addr
      };

      saveStore(STORE.user, user);
      $('#reg').hidden = true;
      $('#welcome').hidden = false;
      render();
    });
  }

  if ($('#enter')) {
    $('#enter').onclick = () => {
      $('#welcome').hidden = true;
      $('#site').hidden = false;
      render();
    };
  }

  if ($('#accountForm')) {
    $('#accountForm').addEventListener('submit', event => {
      event.preventDefault();

      const mobile = $('#editMobile').value.trim();
      const candidate = {
        name:$('#editName').value.trim(),
        mobile,
        email:$('#editEmail').value.trim(),
        addr:$('#editAddr').value.trim()
      };

      const normalizedMobile = mobile.replace(/[\s()-]/g, '');
      const validMobile = /^(?:\+?91)?[6-9]\d{9}$/.test(normalizedMobile);
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidate.email);

      if (candidate.name.length < 2 || !validMobile ||
          !validEmail || candidate.addr.length < 10) {
        $('#accountError').textContent = t('profileError');
        return;
      }

      user = candidate;
      saveStore(STORE.user, user);
      $('#accountError').textContent = '';
      renderAccount();
      alert(t('saved'));
    });
  }

  if ($('#cancelEdit')) {
    $('#cancelEdit').onclick = () => {
      $('#accountForm').hidden = true;
      $('#accountError').textContent = '';
    };
  }

  const demo = $('#demo');
  if (demo) demo.hidden = configured;

  if (user) {
    if ($('#reg')) $('#reg').hidden = true;
    if ($('#welcome')) $('#welcome').hidden = true;
    if ($('#site')) $('#site').hidden = false;
  }

  applyLang();

  if (configured) {
    loadProducts();
    loadStories();
  } else {
    console.error('PRASANN: config.js में Supabase URL या anon key नहीं मिली।');
  }
})();
