// script.js

// Simulate Load More functionality
document.addEventListener("DOMContentLoaded", () => {
  const loadMoreBtn = document.querySelector(".pagination button");
  const productGrid = document.querySelector(".product-grid");

  if (loadMoreBtn && productGrid) {
    loadMoreBtn.addEventListener("click", () => {
      for (let i = 0; i < 4; i++) {
        const product = document.createElement("div");
        product.className = "product-card";
        product.innerHTML = `
          <img src="assets/product1.jpg" alt="Product" />
          <h3>Smart Watch</h3>
          <p>$59.99</p>
          <button class="buy-btn">Buy Now</button>
        `;
        productGrid.appendChild(product);
      }
    });
  }
});
