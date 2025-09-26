// Footer functionality
document.addEventListener("DOMContentLoaded", () => {
  // Order now button functionality
  const orderBtn = document.querySelector(".order-btn")
  if (orderBtn) {
    orderBtn.addEventListener("click", (e) => {
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

  // Social media links functionality
  const socialIcons = document.querySelectorAll(".social-icon")
  socialIcons.forEach((icon) => {
    icon.addEventListener("click", function (e) {
      e.preventDefault()
      // Add your social media URLs here
      console.log("Social media link clicked:", this.classList[1])
    })
  })

  // Footer links smooth scrolling
  const footerLinks = document.querySelectorAll(".footer-nav a")
  footerLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })
})
