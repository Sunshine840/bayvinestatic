document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");

  header.className = "site-header";

  header.innerHTML = `
    <div class="container nav">

      <a class="brand" href="/" aria-label="Bay Vine Solution Limited home">
        <img
          src="/assets/logo.svg"
          alt="Bay Vine Solution Limited logo"
          width="58"
          height="58"
          class="brand-logo"
        >
        <span>Bay Vine Solution Limited</span>
      </a>

      <button
        class="menu-btn"
        aria-label="Open menu"
        aria-expanded="false"
        type="button"
      >
        ☰
      </button>

      <nav class="nav-links">
        <a href="/about.html">About</a>
        <a href="/services.html">Services</a>
        <a href="/jobs.html">Jobs</a>
        <a href="/contact.html" class="btn btn-primary">Contact Us</a>
      </nav>

    </div>
  `;

  document.body.insertBefore(header, document.body.firstChild);

  const menuButton = header.querySelector(".menu-btn");
  const nav = header.querySelector(".nav-links");

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("mobile-open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
  });
});