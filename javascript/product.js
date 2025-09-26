document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainProductImg = document.getElementById("mainProductImg");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      thumbnails.forEach((t) => t.classList.remove("active"));

      this.classList.add("active");

      const imgSrc = this.querySelector("img").getAttribute("src");
      mainProductImg.setAttribute("src", imgSrc);
    });
  });

  const expandableHeaders = document.querySelectorAll(".expandable-header");

  expandableHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const item = this.parentElement;

      item.classList.toggle("active");

      expandableHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.parentElement.classList.remove("active");
        }
      });
    });
  });

  const addToCartBtn = document.querySelector(".add-to-cart");
  addToCartBtn.addEventListener("click", function () {
    this.style.background = "#28a745";
    this.innerHTML = "Added to Cart ✓";

    setTimeout(() => {
      this.style.background = "#ff6b35";
      this.innerHTML = "Add to Cart →";
    }, 2000);
  });
});
