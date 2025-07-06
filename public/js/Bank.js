// داده نمونه سوابق تراکنش برای نمایش  
const transactions = [
    { date: "۱۴۰۴/۰۲/۱۰", time: "۱۰:۳۰", type: "واریز", amount: 2000000, description: "افزایش موجودی کیف پول" },
    { date: "۱۴۰۴/۰۲/۱۲", time: "۱۵:۲۰", type: "انتقال", amount: 500000, description: "انتقال به حساب شماره 1234567890" },
    { date: "۱۴۰۴/۰۲/۱۵", time: "۰۹:۰۰", type: "پرداخت قسط", amount: 2000000, description: "پرداخت قسط وام خودرو" },
];

// مدیریت وضعیت نمایش بخش‌ها و تغییر کلاس فعال در منو  
function showSection(sectionId) {  
    // غیرفعال کردن همه بخش‌ها  
    document.querySelectorAll(".section").forEach(sec => {  
        sec.classList.remove("active");  
    });  
    // فعال کردن بخش انتخاب شده  
    const section = document.getElementById(sectionId);  
    if (section) section.classList.add("active");  

    // تغییر کلاس روی دکمه‌های منو  
    document.querySelectorAll(".sidebar-nav button").forEach(btn => {  
        btn.classList.remove("active");  
        if (btn.getAttribute("onclick") === `showSection('${sectionId}')`) {  
            btn.classList.add("active");  
        }  
    });  
}  

// نمایش سوابق تراکنش به صورت دینامیک  
function loadTransactionHistory() {
    const tbody = document.getElementById("historyBody");
    tbody.innerHTML = "";
    transactions.forEach(t => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${t.date}</td>
            <td>${t.time}</td> <!-- اضافه شد -->
            <td>${t.type}</td>
            <td>${t.amount.toLocaleString('fa-IR')}</td>
            <td>${t.description}</td>
        `;
        tbody.appendChild(tr);
    });
}


// سطح حساب فعلی نمونه (می‌توانید مقدار اولیه را تغییر دهید)
let accountLevelValue = 0; // 0 = سطح معمولی، 1 = حساب تجاری سطح 1، 2 = سطح 2

// برای بروزرسانی سطح حساب داخل صفحه
function updateAccountLevelDisplay() {
    const levelSpan = document.getElementById("accountLevel");
    let levelText = "";
    switch (accountLevelValue) {
        case 0:
            levelText = "سطح 0 - حساب معمولی";
            break;
        case 1:
            levelText = "سطح 1 - حساب تجاری سطح 1";
            break;
        case 2:
            levelText = "سطح 2 - حساب تجاری سطح 2";
            break;
        default:
            levelText = "سطح نامشخص";
    }
    levelSpan.textContent = levelText;
}

// تابع افزایش موجودی کیف پول (نمونه)  
function addMoney(amount) {  
    alert(`موجودی شما به مقدار ${amount.toLocaleString('IR')} تومان افزایش یافت.`);  
    // اینجا می‌توان کدهای سرور را فراخوانی کرد تا موجودی واقعی بروزرسانی شود  
}  

// موجودی کیف پول به تومان (متغیر داخلی برای شبیه‌سازی)  
let walletBalance = 0;  

// متد بروز رسانی نمایش موجودی داخل کارت  
function updateWalletDisplay() {  
    const walletBalanceElem = document.getElementById("walletBalance");  
    walletBalanceElem.textContent = walletBalance.toLocaleString('IR');  
}  

// تابع برای رفرش (شبیه سازی گرفتن موجودی جدید)  
document.getElementById("refreshWalletBtn").addEventListener("click", () => {  
    // شبیه‌سازی رفرش (می‌توانید داده واقعی را از سرور فراخوانی کنید)  
    alert("موجودی کیف پول به روز شد.");  
    updateWalletDisplay();  
});  

// تابع افزایش موجودی کیف پول از input  
document.getElementById("addBalanceBtn").addEventListener("click", () => {  
    const amountInput = document.getElementById("addAmount");  
    const walletMessage = document.getElementById("walletMessage");  
    let amount = Number(amountInput.value);  

    if (!amount || amount < 1000) {  
        walletMessage.textContent = "لطفا مبلغ صحیح بالاتر از 1,000 بالانس وارد کنید.";  
        walletMessage.classList.add("error");  
        return;  
    }  

    walletBalance += amount;  
    updateWalletDisplay();  
    walletMessage.textContent = `موجودی کیف پول به مقدار ${amount.toLocaleString('IR')} بالانس افزایش یافت.`;  
    walletMessage.classList.remove("error");  
    amountInput.value = "";  
});  



// فرم انتقال پول  
function handleTransfer(event) {  
    event.preventDefault();  
    const toAccount = document.getElementById("toAccount").value.trim();  
    const amount = Number(document.getElementById("amount").value);  
    const messageElem = document.getElementById("transferMessage");  

    if (!toAccount || amount <= 0) {  
        messageElem.style.color = "red";  
        messageElem.textContent = "لطفا اطلاعات صحیح وارد کنید.";  
        return;  
    }  

    // شبیه‌سازی فرآیند انتقال  
    messageElem.style.color = "green";  
    messageElem.textContent = `مبلغ ${amount.toLocaleString('fa-IR')} بالانس به حساب ${toAccount} با موفقیت ارسال شد.`;  

    // پاک کردن فرم  
    document.getElementById("transferForm").reset();  

    // ثبت تراکنش در داده‌ها (اختیاری)  
    transactions.push({   
        date: new Date().toLocaleDateString('fa-IR'),   
        type: "انتقال",   
        amount: amount,   
        description: `انتقال به حساب ${toAccount}`   
    });  

    loadTransactionHistory();  
}  

// تابع جستجوی ساده در خدمات منو  
function searchServices(input) {  
    const filter = input.value.trim();  
    const buttons = document.querySelectorAll(".sidebar-nav button");  

    buttons.forEach(btn => {  
        if (btn.textContent.includes(filter) || filter === "") {  
            btn.style.display = "block";  
        } else {  
            btn.style.display = "none";  
        }  
    });  
}  








// نمونه داده برای اقساط و بدهکاری  
const installmentsData = [  
    {  
        type: "اقساط",  
        title: "وام خودرو",  
        status: "در حال پرداخت",  
        amount: 20000,  
        dueDate: "۱۴۰۴/۰۲/۳۰ ۱۴:۰۰",  
        totalCount: 12,  
        unpaidCount: 3,  
        remainingAmount: 60000
    },  
    {  
        type: "بدهکاری",  
        title: "اقساط وام مسکن",  
        status: "تسویه نشده",  
        amount: 50000,  
        dueDate: "۱۴۰۴/۰۳/۱۵ ۱۰:۳۰",  
        totalCount: 24,  
        unpaidCount: 5,  
        remainingAmount: 250000  
    },  
    {  
        type: "اقساط",  
        title: "وام بیزینس",  
        status: "پرداخت شده",  
        amount: 30000,  
        dueDate: "۱۴۰۳/۱۲/۳۰ ۰۹:۰۰",  
        totalCount: 6,  
        unpaidCount: 0,  
        remainingAmount: 0  
    }  
];  

// تابع برای بارگذاری داده‌ها در جدول اقساط  
function loadInstallments() {  
    const tbody = document.getElementById("installmentsBody");  
    tbody.innerHTML = "";  
    installmentsData.forEach(item => {  
        const tr = document.createElement("tr");  
        tr.innerHTML = `  
            <td>${item.type}</td>  
            <td>${item.title}</td>  
            <td>${item.status}</td>  
            <td>${item.amount.toLocaleString('fa-IR')}</td>  
            <td>${item.dueDate}</td>  
            <td>${item.totalCount}</td>  
            <td>${item.unpaidCount}</td>  
            <td>${item.remainingAmount.toLocaleString('fa-IR')}</td>  
        `;  
        tbody.appendChild(tr);  
    });  
}  


// تابع ذخیره وضعیت مالیاتی
function saveTaxInfo() {
    const status = document.getElementById("taxStatus").value;
    const percent = document.getElementById("taxPercent").value;
    const message = document.getElementById("taxMessage");
    message.textContent = `وضعیت مالیاتی شما ذخیره شد: ${status}, درصد: ${percent}%`;
    message.style.color = "green";
}



window.onload = function() {  
    loadTransactionHistory();  
    updateWalletDisplay();  
    loadInstallments();  // اضافه شد برای بارگذاری جدول اقساط  
    updateAccountLevelDisplay(); // این خط رو اضافه کنید
};  