// نمونه داده مقالات  
const articles = [  
    {  
      title: "چگونه سئو سایت را بهبود دهیم؟",  
      excerpt: "در این مقاله نکات مهم برای بهبود سئو سایت شما بررسی شده است...",  
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",  
      url: "#"  
    },  
    {  
      title: "راهنمای مقدماتی React",  
      excerpt: "شروع کار با React و ایجاد رابط کاربری داینامیک و حرفه‌ای...",  
      image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80",  
      url: "#"  
    },  
    {  
      title: "روش‌های مدیریت زمان موثر",  
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
        excerpt: ""
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