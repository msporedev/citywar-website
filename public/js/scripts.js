// نمونه داده مقالات  
const articles = [  
    {  
      title: "چگونه وارد سرور شویم؟",  
      excerpt: "در این مقاله تمام مراحل ورود به سرور را آموزش میدهیم...",  
      image: "https://uploadkon.ir/uploads/75b920_25citywar-icon.jpg",  
      url: "#"
    },  
    {  
      title: "آموزش ماینکرافت",  
      excerpt: "در این بخش، میتوانید درمورد بازی ماینکرافت اطلاعات جمع آوری کنید...",  
      image: "https://uploadkon.ir/uploads/55ea20_25Default-citywar-minecraft-server-NFT-2.jpg",  
      url: "#"  
    },  
    {  
      title: "روش‌های پیشنهادی کسب درآمد",  
      excerpt: "در این مقاله با تکنیک‌های مدیریت زمان آشنا می‌شوید تا بهره‌وری‌تان را افزایش دهید.",  
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",  
      url: "#"  
    },  
    {  
      title: "چطور برنامه نویس بهتری شویم؟",  
      excerpt: "مهم‌ترین مهارت‌هایی که به شما کمک می‌کند برنامه نویسی را عمیق‌تر یاد بگیرید.",  
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80",  
      url: "#"  
    },
    {
        title: "",
        excerpt: "",
        image: "",
        url: "#"
    }
  ];  
  
  const container = document.getElementById('articlesRow');  
  
  // ایجاد کارت‌های مقاله و اضافه کردن به DOM  
  articles.forEach(article => {  
    const card = document.createElement('div');  
    card.className = 'article-card';  
  
    card.innerHTML = `  
      <div class="article-image" style="background-image: url('${article.image}')"></div>  
      <div class="article-content">  
        <h2 class="article-title">${article.title}</h2>  
        <p class="article-excerpt">${article.excerpt}</p>  
        <div class="read-more"><a href="${article.url}">ادامه مطلب</a></div>  
      </div>  
    `;  
  
    container.appendChild(card);  
  });  