document.addEventListener("DOMContentLoaded", () => {
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
