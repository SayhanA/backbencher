// Product section functionality
document.addEventListener("DOMContentLoaded", () => {
  // Product image switching
  const thumbnails = document.querySelectorAll(".thumbnail")
  const mainProductImg = document.getElementById("mainProductImg")

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      // Remove active class from all thumbnails
      thumbnails.forEach((t) => t.classList.remove("active"))

      // Add active class to clicked thumbnail
      this.classList.add("active")

      // Update main image based on color
      const color = this.dataset.color
      let newImageSrc = "/placeholder.svg?height=320&width=240"

      switch (color) {
        case "blue":
          newImageSrc += "&query=blue nasal clip breathing device"
          break
        case "black":
          newImageSrc += "&query=black nasal clip breathing device"
          break
        case "white":
          newImageSrc += "&query=white nasal clip breathing device"
          break
        case "blue-alt":
          newImageSrc += "&query=light blue nasal clip breathing device"
          break
      }

      mainProductImg.src = newImageSrc
    })
  })

  // Expandable sections functionality
  const expandableHeaders = document.querySelectorAll(".expandable-header")

  expandableHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const item = this.parentElement
      const content = item.querySelector(".expandable-content")

      // Toggle active class
      item.classList.toggle("active")

      // Close other expandable items
      expandableHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.parentElement.classList.remove("active")
        }
      })
    })
  })

  // Add to cart functionality
  const addToCartBtn = document.querySelector(".add-to-cart")
  addToCartBtn.addEventListener("click", function () {
    // Add visual feedback
    this.style.background = "#28a745"
    this.innerHTML = "Added to Cart ✓"

    // Reset after 2 seconds
    setTimeout(() => {
      this.style.background = "#ff6b35"
      this.innerHTML = "Add to Card →"
    }, 2000)
  })
})
