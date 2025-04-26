// function loadPartial(url, targetId) {
//   fetch(url)
//     .then(response => {
//       if (!response.ok) throw new Error(`Failed to load ${url}`);
//       return response.text();
//     })
//     .then(data => {
//       document.getElementById(targetId).innerHTML = data;
//     })
//     .catch(error => console.error(error));
// }

function loadHead() {
  fetch('/partials/head.html')
    .then(response => {
      if (!response.ok) throw new Error('Failed to load head.html');
      return response.text();
    })
    .then(data => {
      const path = window.location.pathname;
      let pageTitle = "NextGenScadaProgrammer";

      if (path === "/") {
        pageTitle = "Home | NextGenScadaProgrammer";
      } else if (path.startsWith("/blogs")) {
        pageTitle = "Blog | NextGenScadaProgrammer";
      } else if (path.startsWith("/projects")) {
        pageTitle = "Projects | NextGenScadaProgrammer";
      }

      document.head.innerHTML = data.replace('%PAGE_TITLE%', pageTitle);
    })
    .catch(error => console.error(error));
}


function highlightNav() {
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
}

// function loadPageContent() {
//   const path = window.location.pathname;
//   let page = "home"; // default
//   if (path.startsWith("/about")) {
//     page = "about";
//   } else if (path.startsWith("/projects")) {
//     page = "projects";
//   } else if (path.startsWith("/blogs")) {
//     page = "blogs";
//   }

//   fetch(`/pages/${page}.html`)
//     .then(response => {
//       if (!response.ok) throw new Error(`Failed to load ${page}.html`);
//       return response.text();
//     })
//     .then(data => {
//       document.getElementById('page-content').innerHTML = data;
//     })
//     .catch(error => console.error(error));
// }

document.addEventListener("DOMContentLoaded", function() {
  // loadHead();
  // loadPartial('/partials/header.html', 'header-placeholder');
  // loadPartial('/partials/footer.html', 'footer-placeholder');

  if (typeof AOS !== 'undefined') {
    AOS.init();
  }
});

