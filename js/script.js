// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    }),
  )
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Animate skill bars when they come into view
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll(".skill-progress")
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        bar.style.setProperty("--target-width", width)
        bar.style.width = width
        bar.classList.add("animate")
      })
    }
  })
}, observerOptions)

// Observe skills section
const skillsSection = document.querySelector(".skills-section")
if (skillsSection) {
  observer.observe(skillsSection)
}

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.backdropFilter = "blur(10px)"
    } else {
      header.style.background = "#fff"
      header.style.backdropFilter = "none"
    }
  }
})

// Contact form submission
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = contactForm.querySelector('input[type="text"]').value
    const email = contactForm.querySelector('input[type="email"]').value
    const subject = contactForm.querySelectorAll('input[type="text"]')[1].value
    const message = contactForm.querySelector("textarea").value

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields")
      return
    }

    const submitBtn = contactForm.querySelector(".submit-btn")
    const originalText = submitBtn.textContent
    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true

    setTimeout(() => {
      alert("Thank you for your message! I will get back to you soon.")
      contactForm.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  })
}

// Add active class to navigation links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Portfolio item hover effects
document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-10px) scale(1.02)"
  })
  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0) scale(1)"
  })
})

// Service card hover effects
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)"
    card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)"
  })
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
    card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"
  })
})

// Testimonial card animations
document.querySelectorAll(".testimonial-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)"
    card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)"
  })
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
    card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"
  })
})

// Blog card animations
document.querySelectorAll(".blog-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)"
    card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)"
  })
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
    card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"
  })
})

// Fix: Images not showing issue
document.querySelectorAll("img").forEach((img) => {
  const showImage = () => {
    img.style.opacity = "1"
  }

  img.style.opacity = "0"
  img.style.transition = "opacity 0.3s ease-in-out"

  if (img.complete) {
    showImage()
  } else {
    img.addEventListener("load", showImage)
    img.addEventListener("error", showImage)
  }
})

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section")
  sections.forEach((section, index) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"

    setTimeout(() => {
      section.style.opacity = "1"
      section.style.transform = "translateY(0)"
    }, index * 100)
  })
})

// Add scroll-triggered animations
const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
      }
    })
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
)

// Observe animated elements (including hero/about sides)
document.querySelectorAll(
  ".service-card, .testimonial-card, .portfolio-item, .blog-card, .animate-left, .animate-right"
).forEach((el) => {
  scrollObserver.observe(el)
})

