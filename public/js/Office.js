function searchProducts(event) { 
    const products = document.querySelectorAll(".selection");  
    products.forEach(product => {  
        product.style.display = product.getAttribute("data-category").includes(event.value) ? "block" : "none";  
    });  
}