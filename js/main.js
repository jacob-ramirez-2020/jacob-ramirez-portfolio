// Inject head
fetch('/partials/head.html')
  .then(response => response.text())
  .then(data => {
    const path = window.location.pathname;

    // Dynamic page title based on path
    let pageTitle = "NextGenScadaProgrammer";
    if (path === "/") {
      pageTitle = "Home | NextGenScadaProgrammer";
    } else if (path.startsWith("/blogs")) {
      pageTitle = "Blog | NextGenScadaProgrammer";
    } else if (path.startsWith("/projects")) {
      pageTitle = "Projects | NextGenScadaProgrammer";
    } else {
      pageTitle = "NextGenScadaProgrammer"; // Default
    }

    document.head.innerHTML = data.replace('%PAGE_TITLE%', pageTitle);
  });

<script>
  const path = window.location.pathname;

  const navLinks = document.querySelectorAll("#nav-links a");

  navLinks.forEach(link => {
    if (path === "/" && link.getAttribute("data-link") === "home") {
      link.classList.add("text-accent");
    }
    if (path.startsWith("/projects") && link.getAttribute("data-link") === "my-projects") {
      link.classList.add("text-accent");
    }
    if (path.startsWith("/blogs") && link.getAttribute("data-link") === "blog") {
      link.classList.add("text-accent");
    }
  });
</script>

// Inject header
fetch('/partials/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
  });

// Inject footer
fetch('/partials/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });

// Initialize AOS animations after content loads
document.addEventListener("DOMContentLoaded", function() {
  AOS.init();
});
