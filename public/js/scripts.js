// نمونه داده مقالات  
const articles = [  
    {  
      title: "چنل یوتیوب ما",  
      excerpt: "چنل رسمی یوتیوب سرور بزرگ سیتی وار...",  
      image: "https://uploadkon.ir/uploads/75b920_25citywar-icon.jpg",  
      url: "http://www.youtube.com/@citywar_secondlife"
    },  
    {  
      title: "آموزش ماینکرافت",  
      excerpt: "در این بخش، میتوانید درمورد بازی ماینکرافت اطلاعات جمع آوری کنید...",  
      image: "https://uploadkon.ir/uploads/55ea20_25Default-citywar-minecraft-server-NFT-2.jpg",  
      url: "#"  
    },  
    {  
      title: "روش‌های پیشنهادی کسب درآمد",  
      excerpt: "در این مقاله با روش های پیشنهادی کسب درآمد در سرور آشنا میشوید",  
      image: "https://uploadkon.ir/uploads/c2e715_25photo-2025-03-16-04-45-31.jpg",  
      url: "#"  
    },  
    {  
      title: "اخبار سرور",  
      excerpt: "اطلاع از آخرین اخبار درمورد سازه ها، کسب و کار ها، سهام و دیگر اخبار...",  
      image: "https://uploadkon.ir/uploads/18c915_25Leonardo-Phoenix-10-A-futuristic-cityscape-with-sleek-skyscrap-3.jpg",  
      url: "https://t.me/citywar_server"  
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