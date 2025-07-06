const fabButton = document.querySelector('.fab.main-fab');
const fabMenu = document.querySelector('.fab-menu');

fabButton.addEventListener('click', () => {
  const isOpen = fabMenu.classList.toggle('show');
  fabButton.classList.toggle('open', isOpen);

  fabButton.setAttribute('aria-expanded', isOpen);
  fabMenu.setAttribute('aria-hidden', !isOpen);
});

// بستن منو اگر کلیک بیرون از دکمه و منو اتفاق بیفتد
document.addEventListener('click', (event) => {
  if (!fabButton.contains(event.target) && !fabMenu.contains(event.target)) {
    fabMenu.classList.remove('show');
    fabButton.classList.remove('open');
    fabButton.setAttribute('aria-expanded', false);
    fabMenu.setAttribute('aria-hidden', true);
  }
});

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




