// Hero section functionality
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for shop button
  const shopBtn = document.querySelector(".shop-btn")
  if (shopBtn) {
    shopBtn.addEventListener("click", (e) => {
      e.preventDefault()
      const target = document.querySelector("#shop")
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  }

  // Animate customer badge on scroll
  const customerBadge = document.querySelector(".customer-badge")
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.8s ease forwards"
      }
    })
  })

  if (customerBadge) {
    observer.observe(customerBadge)
  }
})
