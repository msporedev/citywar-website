document.getElementById('signupForm').addEventListener('submit', function(e) {
    const captchaInput = document.getElementById('captcha_input');
    const captchaValue = captchaInput.value.trim();

    if (captchaValue !== '1234') {
        e.preventDefault();
        alert('لطفا کد کپچا را صحیح وارد کنید. کد صحیح "1234" است.');
        captchaInput.focus();
        return false;
    }

    // بررسی اینکه قوانین تایید شده باشند
    const lawsAccepted = document.getElementById('laws-accepting').checked;
    if (!lawsAccepted) {
        e.preventDefault();
        alert('لطفا قوانین را تایید کنید.');
        return false;
    }

    // در صورت نیاز میتوانید اعتبارسنجی‌های بیشتری اینجا اضافه کنید

    return true;
});