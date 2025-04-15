let cart = [];  
let totalPrice = 0;  
var discount = 0;

function addToCart(productName, productPrice) {  
    cart.push({ name: productName, price: productPrice });  
    totalPrice += productPrice;  
    document.getElementById("cart-count").innerText = cart.length;  

    updateCartDisplay();  
}  

// به روز رسانی نمایش سبد خرید  
function updateCartDisplay() {  
    const cartItems = document.getElementById("cart-items");  
    cartItems.innerHTML = "";  

    cart.forEach(item => {  
        const itemElement = document.createElement("div");  
        itemElement.innerText = `${item.name} - ${item.price} CYT`;  
        cartItems.appendChild(itemElement);  
    });  

    document.getElementById("total-price").innerText = `Total: ${totalPrice} CYT`; 
    document.getElementById("discount-amount").innerText = `Discount: ${discount} %`;
    
    if (discount == 0) {
        document.getElementById("total-discount").innerText = `Total After Discount: ${totalPrice} CYT`;
    } else {
        document.getElementById("total-discount").innerText = `Total After Discount: ${totalPrice *(discount / 100)} CYT`;
    }
        
    document.getElementById("wallet-balance").innerText = `${walletBalance} CYT`; // بروزرسانی موجودی کیف پول  
}  


// تابع برای باز کردن سبد خرید  
function openCart() {  
    document.getElementById("cart-modal").style.display = "block";  
}  

// تابع برای بستن سبد خرید  
function closeCart() {  
    document.getElementById("cart-modal").style.display = "none";  
}  

// تابع برای تکمیل خرید  
function completePurchase() {  
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;  

    if (cart.length === 0) {  
        alert("سبد خرید خالی است!");  
        return;  
    }  

    if (paymentMethod === "wallet") {  
        if (walletBalance >= totalPrice) {  
            walletBalance -= totalPrice; // کسر مبلغ از کیف پول  
            alert(`خرید با موفقیت انجام شد! جمع کل: ${totalPrice} CYT و موجودی کیف پول: ${walletBalance} CYT`);  
        } else {  
            alert("موجودی کیف پول کافی نیست!");  
            return;  
        }  
    } else {  
        // در اینجا می‌توانید عملیات پرداخت مستقیم را انجام دهید  
        alert(`خرید با موفقیت انجام شد! جمع کل: ${totalPrice} CYT.`);  
    }  

    cart = []; // سبد خرید را خالی کن  
    totalPrice = 0; // مجموع قیمت را صفر کن  
    document.getElementById("cart-count").innerText = cart.length;  
    updateCartDisplay(); // به روز رسانی نمایش سبد خرید  
}  

// تابع برای فیلتر محصولات  
function filterProducts(category) {  
    const products = document.querySelectorAll(".product");  
    products.forEach(product => {  
        product.style.display = product.getAttribute("data-category") === category ? "block" : "none";  
    });  
}

function searchProducts(event) { 
    const products = document.querySelectorAll(".product");  
    products.forEach(product => {  
        product.style.display = product.getAttribute("data-category").includes(event.value) ? "block" : "none";  
    });  
}

let walletBalance = 0; // موجودی کیف پول  
let transactions = []; // آرایه‌ای برای ذخیره سابقه تراکنش‌ها  

// تابع برای شارژ کیف پول  
function chargeWallet() {  
    const amountInput = document.getElementById("amount");  
    const amount = parseInt(amountInput.value);  

    if (isNaN(amount) || amount <= 0) {  
        document.getElementById("message").innerText = "لطفاً مقدار معتبری وارد کنید";  
        return;  
    }  

    walletBalance += amount; // افزایش موجودی کیف پول
    transactions.push(`+${amount} CYT`); // ثبت تراکنش  
    updateWalletDisplay();  
    amountInput.value = ""; // پاک کردن فیلد ورودی  
}  

// تابع برای بروزرسانی نمایش کیف پول  
function updateWalletDisplay() {  
    document.getElementById("wallet-balance").innerText = `${walletBalance} CYT`;  
    document.getElementById("wallet-dollar").innerText = `$ ${walletBalance / 1000}`;
    document.getElementById("message").innerText = `Your wallet has been successfully topped up with ${walletBalance} CYT.`;  
    updateTransactionHistory();  
}  

// تابع برای بروزرسانی سابقه تراکنش‌ها  
function updateTransactionHistory() {  
    const transactionList = document.getElementById("transaction-list");  
    transactionList.innerHTML = ""; // پاک کردن لیست قبلی  

    transactions.forEach(transaction => {  
        const transactionItem = document.createElement("li");  
        transactionItem.innerText = transaction;  
        transactionList.appendChild(transactionItem);  
    });  
}   

function toggleWalletUsage() {  
    const useWalletCheckbox = document.getElementById("use-wallet");  
    const walletBalanceSection = document.getElementById("wallet-balance-section");  

    if (useWalletCheckbox.checked) {  
        walletBalanceSection.style.display = "block"; // نمایش موجودی کیف پول  
        document.getElementById("wallet-balance-cart").innerText = `${walletBalance}`; // بروزرسانی موجودی کیف پول  
    } else {  
        walletBalanceSection.style.display = "none"; // پنهان کردن موجودی کیف پول  
    }  
}  

// // بارگذاری اولیه موجودی کیف پول  
// document.getElementById("wallet-balance-cart").innerText = `${walletBalance}`;
