// let walletBalance = 0; // موجودی کیف پول  
// let transactions = []; // آرایه‌ای برای ذخیره سابقه تراکنش‌ها  

// // تابع برای شارژ کیف پول  
// function chargeWallet() {  
//     const amountInput = document.getElementById("amount");  
//     const amount = parseInt(amountInput.value);  

//     if (isNaN(amount) || amount <= 0) {  
//         document.getElementById("message").innerText = "لطفاً مقدار معتبری وارد کنید.";  
//         return;  
//     }  

//     walletBalance += amount; // افزایش موجودی کیف پول  
//     transactions.push(`+${amount} CYT`); // ثبت تراکنش  
//     updateWalletDisplay();  
//     amountInput.value = ""; // پاک کردن فیلد ورودی  
// }  

// // تابع برای بروزرسانی نمایش کیف پول  
// function updateWalletDisplay() {  
//     document.getElementById("wallet-balance").innerText = `${walletBalance} CYT`;  
//     document.getElementById("message").innerText = `کیف پول با موفقیت به مبلغ ${walletBalance} CYT شارژ شد.`;  
//     updateTransactionHistory();  
// }  

// // تابع برای بروزرسانی سابقه تراکنش‌ها  
// function updateTransactionHistory() {  
//     const transactionList = document.getElementById("transaction-list");  
//     transactionList.innerHTML = ""; // پاک کردن لیست قبلی  

//     transactions.forEach(transaction => {  
//         const transactionItem = document.createElement("li");  
//         transactionItem.innerText = transaction;  
//         transactionList.appendChild(transactionItem);  
//     });  
// }  

// // مقداردهی اولیه برای موجودی کیف پول، در صورت نیاز می‌توانید از محلی ذخیره‌سازی استفاده کنید  
// walletBalance = 100; // به عنوان مثال موجودی اولیه را 100 CYT قرار دهید  
// updateWalletDisplay();