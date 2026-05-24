// ========== DỮ LIỆU SẢN PHẨM ==========
const products = [
    // iPhone 16 Series
    { id: 1, name: "iPhone 16 Pro Max", price: 34990000, category: "iphone", image: "../img/16promax.png", description: "6.9 inch, A18 Pro, 48MP" },
    { id: 2, name: "iPhone 16 Pro", price: 29990000, category: "iphone", image: "../img/16pro.png", description: "6.3 inch, A18 Pro, 48MP" },
    { id: 3, name: "iPhone 16 Plus", price: 25990000, category: "iphone", image: "../img/16plus.png", description: "6.7 inch, A18, pin trâu" },
    { id: 4, name: "iPhone 16", price: 22990000, category: "iphone", image: "../img/16.png", description: "6.1 inch, A18, Dynamic Island" },
    
    // iPhone 15 Series
    { id: 5, name: "iPhone 15 Pro Max", price: 27990000, category: "iphone", image: "../img/15promax.png", description: "6.7 inch, A17 Pro, 48MP" },
    { id: 6, name: "iPhone 15 Pro", price: 24990000, category: "iphone", image: "../img/15pro.png", description: "6.1 inch, A17 Pro, Titanium" },
    { id: 7, name: "iPhone 15 Plus", price: 21990000, category: "iphone", image: "../img/15plus.png", description: "6.7 inch, A16, 48MP" },
    { id: 8, name: "iPhone 15", price: 18990000, category: "iphone", image: "../img/15.png", description: "6.1 inch, A16, Dynamic Island" },
    
    // iPhone 14 Series
    { id: 9, name: "iPhone 14 Pro Max", price: 23990000, category: "iphone", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png", description: "6.7 inch, A16, Always-On" },
    { id: 10, name: "iPhone 14 Pro", price: 20990000, category: "iphone", image: "../img/14pro.png", description: "6.1 inch, A16, 48MP" },
    { id: 11, name: "iPhone 14 Plus", price: 17990000, category: "iphone", image: "../img/14plus.png", description: "6.7 inch, A15, pin trâu" },
    { id: 12, name: "iPhone 14", price: 15990000, category: "iphone", image: "../img/14.png", description: "6.1 inch, A15, camera kép" },
    
    // iPhone 13 Series
    { id: 13, name: "iPhone 13 Pro Max", price: 19990000, category: "iphone", image: "../img/13promax.png", description: "6.7 inch, A15, 120Hz" },
    { id: 14, name: "iPhone 13 Pro", price: 17990000, category: "iphone", image: "../img/13pro.png", description: "6.1 inch, A15, ProMotion" },
    { id: 15, name: "iPhone 13", price: 13990000, category: "iphone", image: "../img/13.png", description: "6.1 inch, A15, camera kép" },
    
    // iPhone 12
    { id: 16, name: "iPhone 12 Pro Max", price: 16990000, category: "iphone", image: "../img/12promax.png", description: "6.7 inch, A14, LiDAR" },
    
    // Phụ kiện
    { id: 17, name: "Ốp lưng MagSafe Silicon", price: 590000, category: "accessory", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_-_2025-09-11t224647.289.png", description: "Silicon cao cấp, hỗ trợ MagSafe" },
    { id: 18, name: "Sạc nhanh Apple 20W", price: 690000, category: "accessory", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_117_1.png", description: "Sạc nhanh, tương thích mọi iPhone" },
    { id: 19, name: "AirPods Pro 2", price: 5990000, category: "accessory", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple-airpods-pro-2-usb-c_1_.png", description: "Chống ồn chủ động, chip H2" },
    { id: 20, name: "AirPods 4", price: 3990000, category: "accessory", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple-airpods-4-thumb.png", description: "Thiết kế mới, âm thanh xuất sắc" },
    { id: 21, name: "Cáp Type-C Apple", price: 450000, category: "accessory", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_118_1_2.png", description: "Cáp chính hãng, dài 1m" },
    { id: 22, name: "Ốp lưng Clear MagSafe", price: 890000, category: "accessory", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_-_2024-11-06t222938.445.png", description: "Trong suốt, chống ố vàng" },
    { id: 23, name: "Apple Watch S9", price: 11990000, category: "accessory", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_43__4_27.png", description: "Màn hình luôn sáng, chip S9" },
    { id: 24, name: "Sạc MagSafe", price: 1190000, category: "accessory", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/b/o/bo-sac-magsafe-apple-kem-cap-type-c-1m_1__2.png", description: "Sạc không dây 15W" },
    { id: 25, name: "AirPods Max", price: 13990000, category: "accessory", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple-airpods-max-1_1.png", description: "Chụp tai cao cấp" },
    { id: 26, name: "Dán cường lực", price: 250000, category: "accessory", image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/k/i/kinh-cuong-luc-iphone-16-pro-max-zagg-plus-edge-full_2__1.png", description: "Kính 9H, chống bám vân tay" }
];

// ========== GIỎ HÀNG ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('#cart-count').forEach(el => el.textContent = totalItems);
}

function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;
    
    const existing = cart.find(item => item.id == productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    alert(`✅ Đã thêm ${product.name} vào giỏ hàng!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id != productId);
    saveCart();
    renderCart();
}

function updateQuantity(productId, newQty) {
    if (newQty <= 0) {
        removeFromCart(productId);
        return;
    }
    const item = cart.find(item => item.id == productId);
    if (item) {
        item.quantity = newQty;
        saveCart();
        renderCart();
    }
}

function clearCart() {
    if (confirm('Bạn có chắc muốn xóa toàn bộ giỏ hàng?')) {
        cart = [];
        saveCart();
        renderCart();
    }
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const totalContainer = document.getElementById('cart-total');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:2rem;">🛒 Giỏ hàng trống</p>';
        if (totalContainer) totalContainer.innerHTML = '';
        return;
    }
    
    let html = '';
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        html += `
            <div class="cart-item">
                <div style="display:flex; gap:1rem; align-items:center; flex-wrap:wrap;">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <strong>${item.name}</strong><br>
                        ${item.price.toLocaleString('vi-VN')}đ
                    </div>
                </div>
                <div>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span style="margin:0 10px;">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button onclick="removeFromCart(${item.id})" style="margin-left:5px;">🗑️</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    if (totalContainer) {
        totalContainer.innerHTML = `<strong>💰 Tổng cộng: ${total.toLocaleString('vi-VN')}đ</strong>`;
    }
}

// ========== HIỂN THỊ SẢN PHẨM ==========
function renderProducts(productsToShow, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (!productsToShow.length) {
        container.innerHTML = '<p style="text-align:center;">Không có sản phẩm nào.</p>';
        return;
    }
    
    container.innerHTML = productsToShow.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x300?text=iPhone'">
            <h3>${product.name}</h3>
            <p class="description">${product.description}</p>
            <p class="price">${product.price.toLocaleString('vi-VN')}đ</p>
            <button onclick="addToCart(${product.id})">🛒 Thêm vào giỏ</button>
        </div>
    `).join('');
}

// ========== TÌM KIẾM ==========
function searchProducts(keyword) {
    if (!keyword || !keyword.trim()) return [];
    keyword = keyword.toLowerCase().trim();
    return products.filter(p => 
        p.name.toLowerCase().includes(keyword) || 
        p.description.toLowerCase().includes(keyword)
    );
}

function displaySearchResults(keyword) {
    const results = searchProducts(keyword);
    const resultDiv = document.getElementById('search-result');
    const keywordSpan = document.getElementById('search-keyword');
    const resultsDiv = document.getElementById('search-results');
    
    if (!resultDiv || !resultsDiv) return;
    
    keywordSpan.textContent = keyword;
    
    if (!results.length) {
        resultsDiv.innerHTML = `<p>❌ Không tìm thấy sản phẩm nào cho "<strong>${keyword}</strong>"</p>`;
    } else {
        resultsDiv.innerHTML = results.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x300?text=iPhone'">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <p class="price">${product.price.toLocaleString('vi-VN')}đ</p>
                <button onclick="addToCart(${product.id})">🛒 Thêm vào giỏ</button>
            </div>
        `).join('');
    }
    
    resultDiv.style.display = 'block';
    
    // Ẩn danh sách chính
    const mainGrid = document.querySelector('.product-grid:not(#search-results)');
    if (mainGrid) mainGrid.style.display = 'none';
}

function clearSearch() {
    const resultDiv = document.getElementById('search-result');
    if (resultDiv) resultDiv.style.display = 'none';
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    
    // Hiện lại danh sách chính
    const mainGrid = document.querySelector('.product-grid:not(#search-results)');
    if (mainGrid) mainGrid.style.display = 'grid';
}

// ========== ĐĂNG NHẬP / ĐĂNG KÝ ==========
let users = JSON.parse(localStorage.getItem('users')) || [];

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const remember = document.getElementById('remember-me')?.checked || false;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        const session = { name: user.name, email: user.email, loggedIn: true };
        if (remember) {
            localStorage.setItem('currentUser', JSON.stringify(session));
        } else {
            sessionStorage.setItem('currentUser', JSON.stringify(session));
        }
        alert(`👋 Chào mừng ${user.name} đã đăng nhập!`);
        window.location.href = 'index.html';
    } else {
        alert('❌ Email hoặc mật khẩu không đúng!');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const phone = document.getElementById('reg-phone').value;
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm-password').value;
    const terms = document.getElementById('terms-checkbox')?.checked;
    
    if (!name || !email || !password) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }
    if (password !== confirm) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }
    if (password.length < 6) {
        alert('Mật khẩu phải có ít nhất 6 ký tự!');
        return;
    }
    if (!terms) {
        alert('Vui lòng đồng ý với Điều khoản sử dụng!');
        return;
    }
    if (users.find(u => u.email === email)) {
        alert('Email đã được đăng ký!');
        return;
    }
    
    users.push({ id: Date.now(), name, email, phone, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert(`✅ Đăng ký thành công! Chào mừng ${name}. Vui lòng đăng nhập.`);
    switchToLoginTab();
    document.getElementById('login-email').value = email;
}

function switchToLoginTab() {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form-container');
    const registerForm = document.getElementById('register-form-container');
    
    loginTab?.classList.add('active');
    registerTab?.classList.remove('active');
    loginForm?.classList.add('active');
    registerForm?.classList.remove('active');
}

function switchToRegisterTab() {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form-container');
    const registerForm = document.getElementById('register-form-container');
    
    registerTab?.classList.add('active');
    loginTab?.classList.remove('active');
    registerForm?.classList.add('active');
    loginForm?.classList.remove('active');
}

function initAuthPage() {
    document.getElementById('login-tab')?.addEventListener('click', switchToLoginTab);
    document.getElementById('register-tab')?.addEventListener('click', switchToRegisterTab);
    document.getElementById('switch-to-register')?.addEventListener('click', (e) => { e.preventDefault(); switchToRegisterTab(); });
    document.getElementById('switch-to-login')?.addEventListener('click', (e) => { e.preventDefault(); switchToLoginTab(); });
    document.getElementById('forgot-password')?.addEventListener('click', (e) => { e.preventDefault(); alert('🔐 Vui lòng liên hệ 1900 1234 để hỗ trợ.'); });
    document.getElementById('login-form')?.addEventListener('submit', handleLogin);
    document.getElementById('register-form')?.addEventListener('submit', handleRegister);
}

function updateUserStatus() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || JSON.parse(sessionStorage.getItem('currentUser'));
    const accountLink = document.querySelector('nav ul li a[href="login.html"]');
    
    if (currentUser?.loggedIn && accountLink) {
        accountLink.textContent = `👤 ${currentUser.name.split(' ').pop()}`;
        accountLink.href = '#';
        
        if (!document.getElementById('logout-btn')) {
            const logoutLi = document.createElement('li');
            logoutLi.innerHTML = '<a href="#" id="logout-btn">🚪 Đăng xuất</a>';
            accountLink.closest('ul').appendChild(logoutLi);
            document.getElementById('logout-btn').addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('currentUser');
                sessionStorage.removeItem('currentUser');
                alert('Đã đăng xuất!');
                window.location.reload();
            });
        }
    }
}

// ========== LIÊN HỆ ==========
function handleContact(e) {
    e.preventDefault();
    alert('📧 Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong 24h.');
    e.target.reset();
}

// ========== KHỞI TẠO TÌM KIẾM ==========
function initSearch() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    
    searchBtn?.addEventListener('click', () => {
        const keyword = searchInput.value;
        if (keyword.trim()) displaySearchResults(keyword);
        else alert('Vui lòng nhập từ khóa tìm kiếm!');
    });
    
    searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const keyword = searchInput.value;
            if (keyword.trim()) displaySearchResults(keyword);
        }
    });
    
    clearBtn?.addEventListener('click', clearSearch);
}

// ========== LỌC SẢN PHẨM ==========
function initFilters() {
    const filterContainer = document.querySelector('.filter-container');
    if (!filterContainer) return;
    
    filterContainer.innerHTML = `
        <button class="filter-btn active" data-category="all">📱 Tất cả</button>
        <button class="filter-btn" data-category="iphone">🍎 iPhone</button>
        <button class="filter-btn" data-category="accessory">🎧 Phụ kiện</button>
    `;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const filtered = category === 'all' ? products : products.filter(p => p.category === category);
            renderProducts(filtered, 'all-products');
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// ========== DOM CONTENT LOADED ==========
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateUserStatus();
    initSearch();
    initNewsletter();      // Thêm dòng này
    initBackToTop();       // Thêm dòng này
    updateCopyrightYear();
    
    // Auth page
    if (document.querySelector('.auth-wrapper')) initAuthPage();
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) contactForm.addEventListener('submit', handleContact);
    
    // Clear cart
    const clearCartBtn = document.getElementById('clear-cart');
    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
    
    // Home page
    const featuredProducts = document.getElementById('featured-products');
    if (featuredProducts) {
        renderProducts(products.filter(p => p.category === 'iphone').slice(0, 8), 'featured-products');
    }
    
    // Products page
    const allProducts = document.getElementById('all-products');
    if (allProducts) {
        renderProducts(products.filter(p => p.category === 'iphone'), 'all-products');
        initFilters();
    }
    
    // Accessories page
    const accessoriesList = document.getElementById('accessories-list');
    if (accessoriesList) {
        renderProducts(products.filter(p => p.category === 'accessory'), 'accessories-list');
    }
    
    // Cart page
    renderCart();
});
// ========== FOOTER FUNCTIONALITY ==========

// Newsletter Form
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            if (email) {
                alert(`✅ Cảm ơn ${email} đã đăng ký nhận tin! Chúng tôi sẽ gửi ưu đãi đến bạn.`);
                newsletterForm.reset();
            } else {
                alert('Vui lòng nhập email!');
            }
        });
    }
}

// Back to Top Button
function initBackToTop() {
    const backBtn = document.getElementById('back-to-top');
    if (!backBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }
    });
    
    backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Update copyright year automatically
function updateCopyrightYear() {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace(/\d{4}/, currentYear);
    }
}