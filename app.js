const CFG = window.PRASANN_CONFIG || {};
const PACKS = [150, 300, 500, 1000];
const CATS = ['snacks', 'indian', 'south', 'fast', 'sweets'];

// कीमत owner द्वारा तय होने तक null ही रहेगी।
const PRODUCTS = [
  { id: 'kaju', cat: 'snacks', pricePerKg: null, available: true }
];

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
    remove:'Remove',quantity:'Quantity',checkoutBlocked:'A confirmed price is required before checkout.',
    accountMissing:'Please register to view your account.',
    profileError:'Please check your name, mobile, email and address.',
    registered:'Registration complete.'
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
    registered:'रजिस्ट्रेशन पूरा हुआ।'
  }
};

const CATN = {
  en:{snacks:'Snacks',indian:'Indian Meals',south:'South Indian Meals',fast:'Fast Food',sweets:'Sweets'},
  hi:{snacks:'स्नैक्स',indian:'भारतीय भोजन',south:'दक्षिण भारतीय भोजन',fast:'फास्ट फूड',sweets:'मिठाई'}
};

const PN = {
  en:{kaju:['PRASANN Kaju Shape Snacks','Description coming soon.']},
  hi:{kaju:['प्रसन्न काजू शेप स्नैक्स','विवरण जल्द आएगा।']}
};

let lang = 'en';
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
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch (_) { return false; }
}

let cart = readStore(STORE.cart, []);
let wishlist = readStore(STORE.wishlist, []);
let user = readStore(STORE.user, null);
lang = readStore(STORE.lang, 'en');
if (!['en','hi'].includes(lang)) lang = 'en';
if (!Array.isArray(cart)) cart = [];
if (!Array.isArray(wishlist)) wishlist = [];

const $ = s => document.querySelector(s);
const t = k => T[lang][k] || T.en[k] || k;

function packPrice(ppk, grams) {
  return Math.round(ppk * grams) / 1000;
}
function money(n) {
  return '₹' + (Number.isInteger(n) ? n : Number(n).toFixed(2));
}
function packLabel(g) {
  return g >= 1000 ? (g / 1000) + ' kg' : g + ' g';
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
  const p = PRODUCTS.find(x => x.id === item.id);
  return !!(p && p.available && Number(p.pricePerKg) > 0);
}
function buildMsg(u, items, note) {
  const lines = [
    'PRASANN — Order Enquiry', '',
    'Customer Name: ' + u.name,
    'Mobile: ' + u.mobile,
    'Email: ' + (u.email || '-'),
    'Delivery Address: ' + u.addr, '', 'Items:'
  ];
  let total = 0;
  items.forEach(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p || !lineOk(item)) return;
    const unit = packPrice(p.pricePerKg, item.g);
    const lineTotal = unit * item.q;
    total += lineTotal;
    lines.push('- ' + PN.en[p.id][0] + ' | ' + packLabel(item.g) +
      ' | Qty ' + item.q + ' | ' + money(unit) +
      ' each | ' + money(lineTotal));
  });
  lines.push('', 'Order Total: ' + money(total),
    'Customer Note: ' + (note || '-'),
    '', 'Please confirm product availability and delivery details.');
  return lines.join('\n');
}
function waUrl(msg) {
  const number = String(CFG.WHATSAPP || '918448047203').replace(/\D/g, '');
  return 'https://wa.me/' + number + '?text=' + encodeURIComponent(msg);
}

if (typeof module !== 'undefined') {
  module.exports = {packPrice, validate, buildMsg, waUrl, PRODUCTS};
}

if (typeof document !== 'undefined') (function () {
  const configured = !!(CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY);

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

  function renderCats() {
    $('#cats').innerHTML = CATS.map(c => {
      const has = PRODUCTS.some(p => p.cat === c);
      return `<div class="cat"><b>${escapeHTML(CATN[lang][c])}</b>${
        has ? '' : `<span class="soon">${t('soon')}</span>`
      }</div>`;
    }).join('');
  }

  function renderProducts() {
    const q = $('#q').value.trim().toLowerCase();
    const list = PRODUCTS.filter(p => {
      const n = PN[lang][p.id] || [p.id, ''];
      return !q || (n[0] + ' ' + n[1] + ' ' + CATN[lang][p.cat])
        .toLowerCase().includes(q);
    });

    $('#prods').innerHTML = list.length ? list.map(p => {
      const n = PN[lang][p.id] || [p.id, ''];
      const saved = wishlist.includes(p.id);
      return `<article class="card">
        <div class="ph">${t('pphc')}</div>
        <h3>${escapeHTML(n[0])}</h3>
        <p>${escapeHTML(n[1])}</p>
        ${p.available ? '' : `<p class="warn">${t('unavail')}</p>`}
        <label>${t('pack')}
          <select id="pk-${p.id}">
            ${PACKS.map(g => `<option value="${g}">${packLabel(g)}${
              p.pricePerKg > 0 ? ' — ' + money(packPrice(p.pricePerKg,g)) : ''
            }</option>`).join('')}
          </select>
        </label>
        ${p.pricePerKg > 0 ? '' : `<p class="warn">${t('nopr')}</p>`}
        <button class="btn" data-add="${p.id}" ${p.available ? '' : 'disabled'}>
          ${t('add')}
        </button>
        <button class="wish-btn ${saved ? 'saved' : ''}" data-wish="${p.id}">
          ${saved ? t('removeWish') : t('addWish')}
        </button>
      </article>`;
    }).join('') : `<p>${t('nores')}</p>`;
  }

  function renderCart() {
    $('#cnt').textContent = cart.reduce((sum, item) => sum + item.q, 0);
    const box = $('#cartItems');

    if (!cart.length) {
      box.innerHTML = `<p>${t('empty')}</p>`;
      $('#tot').textContent = '';
      $('#wa').disabled = true;
      return;
    }

    let total = 0;
    let allPriced = true;

    box.innerHTML = cart.map((item, index) => {
      const p = PRODUCTS.find(x => x.id === item.id);
      if (!p) return '';
      const n = PN[lang][p.id] || [p.id, ''];
      const priced = lineOk(item);
      let detail = t('priceWait');

      if (priced) {
        const unit = packPrice(p.pricePerKg, item.g);
        const lineTotal = unit * item.q;
        total += lineTotal;
        detail = `${money(unit)} × ${item.q} = ${money(lineTotal)}`;
      } else {
        allPriced = false;
      }

      return `<div class="line">
        <div><b>${escapeHTML(n[0])}</b><br>
        ${packLabel(item.g)} · ${detail}</div>
        <div>
          <button class="sm" data-qty="${index}" data-delta="-1" aria-label="Decrease quantity">−</button>
          <button class="sm" data-qty="${index}" data-delta="1" aria-label="Increase quantity">+</button>
          <button class="sm" data-remove="${index}">${t('remove')}</button>
        </div>
      </div>`;
    }).join('');

    $('#tot').textContent = allPriced
      ? t('total') + ': ' + money(total)
      : t('checkoutBlocked');

    // Do not send an order total while any item has no confirmed price.
    $('#wa').disabled = !allPriced || !user;
  }

  function renderWishlist() {
    if (!wishlist.length) {
      $('#wishlistItems').innerHTML = `<p>${t('emptyWishlist')}</p>`;
      return;
    }

    $('#wishlistItems').innerHTML = wishlist.map(id => {
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return '';
      const n = PN[lang][id] || [id, ''];
      return `<div class="item-card">
        <h3>${escapeHTML(n[0])}</h3>
        <p>${escapeHTML(n[1])}</p>
        <button class="btn" data-wish-addcart="${id}">${t('add')}</button>
        <button class="hb" style="color:var(--g);border-color:var(--g)"
          data-wish-remove="${id}">${t('remove')}</button>
      </div>`;
    }).join('');
  }

  function renderAccount() {
    $('#accountForm').hidden = true;
    if (!user) {
      $('#accountView').innerHTML = `<p>${t('accountMissing')}</p>`;
      return;
    }

    $('#accountView').innerHTML = `
      <div class="item-card">
        <h3>${escapeHTML(user.name)}</h3>
        <p><b>${t('mobile')}:</b> ${escapeHTML(user.mobile)}</p>
        <p><b>${t('email')}:</b> ${escapeHTML(user.email)}</p>
        <p><b>${t('addr')}:</b><br>${escapeHTML(user.addr)}</p>
        <button type="button" class="btn" id="editProfileBtn">${t('editProfile')}</button>
      </div>`;

    $('#editProfileBtn').onclick = beginEdit;
  }

  function render() {
    renderCats();
    renderProducts();
    renderCart();
    renderWishlist();
    renderAccount();
  }

  function addToCart(id, grams) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product || !product.available) return;
    const found = cart.find(i => i.id === id && i.g === grams);
    if (found) found.q++;
    else cart.push({id, g: grams, q: 1});
    saveStore(STORE.cart, cart);
    render();
    showPanel('cartPanel');
  }

  function showPanel(id) {
    ['cartPanel','wishlistPanel','accountPanel'].forEach(panelId => {
      const panel = $('#' + panelId);
      if (panel) panel.classList.toggle('open', panelId === id);
      if (panel && panelId !== 'cartPanel') panel.hidden = panelId !== id;
    });

    // The original cart uses a slide-in class rather than hidden.
    if (id === 'cartPanel') {
      $('#cartPanel').classList.add('open');
    } else {
      $('#cartPanel').classList.remove('open');
    }

    document.querySelectorAll('[data-nav]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.nav === ({
        cartPanel:'cart', wishlistPanel:'wishlist', accountPanel:'account'
      }[id] || id));
    });
  }

  function closePanels() {
    $('#cartPanel').classList.remove('open');
    $('#wishlistPanel').hidden = true;
    $('#accountPanel').hidden = true;
    document.querySelectorAll('[data-nav]').forEach(b => {
      b.classList.toggle('active', b.dataset.nav === 'home');
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

  // Delegated product, wishlist and quantity actions.
  document.addEventListener('click', event => {
    const nav = event.target.closest('[data-nav]');
    if (nav) {
      const dest = nav.dataset.nav;
      if (dest === 'home') {
        closePanels();
        $('#home').scrollIntoView({behavior:'smooth'});
      } else if (dest === 'shop') {
        closePanels();
        $('#shopSection').scrollIntoView({behavior:'smooth'});
      } else if (dest === 'cart') showPanel('cartPanel');
      else if (dest === 'wishlist') {
        $('#wishlistPanel').hidden = false;
        showPanel('wishlistPanel');
      } else if (dest === 'account') {
        $('#accountPanel').hidden = false;
        showPanel('accountPanel');
      }
      return;
    }

    const close = event.target.closest('[data-close]');
    if (close) { closePanels(); return; }

    const add = event.target.closest('[data-add]');
    if (add) {
      const select = $('#pk-' + add.dataset.add);
      addToCart(add.dataset.add, Number(select.value));
      return;
    }

    const wish = event.target.closest('[data-wish]');
    if (wish) {
      const id = wish.dataset.wish;
      wishlist = wishlist.includes(id)
        ? wishlist.filter(x => x !== id)
        : [...wishlist, id];
      saveStore(STORE.wishlist, wishlist);
      render();
      return;
    }

    const qty = event.target.closest('[data-qty]');
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

    const remove = event.target.closest('[data-remove]');
    if (remove) {
      cart.splice(Number(remove.dataset.remove), 1);
      saveStore(STORE.cart, cart);
      render();
      return;
    }

    const wishRemove = event.target.closest('[data-wish-remove]');
    if (wishRemove) {
      wishlist = wishlist.filter(id => id !== wishRemove.dataset.wishRemove);
      saveStore(STORE.wishlist, wishlist);
      render();
      return;
    }

    const wishAdd = event.target.closest('[data-wish-addcart]');
    if (wishAdd) {
      const select = $('#pk-' + wishAdd.dataset.wishAddcart);
      addToCart(wishAdd.dataset.wishAddcart, select ? Number(select.value) : PACKS[0]);
    }
  });

  $('#cartBtn').onclick = () => showPanel('cartPanel');
  $('#langBtn').onclick = switchLang;
  $('#langBtn2').onclick = switchLang;
  $('#q').oninput = renderProducts;

  $('#clear').onclick = () => {
    cart = [];
    saveStore(STORE.cart, cart);
    render();
  };

  $('#wa').onclick = () => {
    if (!user || !cart.length || cart.some(item => !lineOk(item))) {
      alert(t('checkoutBlocked'));
      return;
    }
    window.open(waUrl(buildMsg(user, cart, $('#note').value.trim())),
      '_blank', 'noopener');
  };

  document.querySelectorAll('[data-modal]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      $('#modalT').textContent = t(link.dataset.modal);
      $('#modal').hidden = false;
    });
  });
  $('#mclose').onclick = () => { $('#modal').hidden = true; };

  $('#regForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const v = {
      name: form.elements.name.value.trim(),
      mobile: form.elements.mobile.value.trim(),
      email: form.elements.email.value.trim(),
      addr: form.elements.addr.value.trim(),
      consent: form.elements.consent.checked
    };
    const errors = validate(v);
    document.querySelectorAll('.err').forEach(el => { el.textContent = ''; });
    Object.keys(errors).forEach(key => {
      $('#e-' + key).textContent = t(errors[key]);
    });
    if (Object.keys(errors).length) return;

    if (configured) {
      try {
        const response = await fetch(CFG.SUPABASE_URL + '/functions/v1/hyper-responder', {
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            apikey:CFG.SUPABASE_ANON_KEY
          },
          body:JSON.stringify({...v, lang})
        });
        if (!response.ok) throw new Error('Registration failed');
      } catch (_) {
        $('#e-consent').textContent = 'Registration failed. Please try again.';
        return;
      }
    }

    user = {
      name:v.name, mobile:v.mobile, email:v.email, addr:v.addr
    };

    // Browser-local profile storage is not secure account authentication.
    saveStore(STORE.user, user);
    $('#reg').hidden = true;
    $('#welcome').hidden = false;
    render();
  });

  $('#enter').onclick = () => {
    $('#welcome').hidden = true;
    $('#site').hidden = false;
    render();
  };

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

    if (candidate.name.length < 2 || !validMobile || !validEmail ||
        candidate.addr.length < 10) {
      $('#accountError').textContent = t('profileError');
      return;
    }

    user = candidate;
    saveStore(STORE.user, user);
    $('#accountError').textContent = '';
    renderAccount();
    alert(t('saved'));
  });

  $('#cancelEdit').onclick = () => {
    $('#accountForm').hidden = true;
    $('#accountError').textContent = '';
  };

  // Existing users can continue directly to the site on this browser.
  $('#demo').hidden = configured;
  if (user) {
    $('#reg').hidden = true;
    $('#welcome').hidden = false;
  }

  applyLang();
})();
