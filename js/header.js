
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

      <nav class="nav-links" aria-label="Main navigation">
        <a href="/about.html">About</a>
        <a href="/jobs.html">Jobs</a>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScKiw4e8Ha39n4GiYZLz19j9xCTygHsY5YHkPgcNSLV33HH4g/viewform?usp=sharing&amp;ouid=115637538471534633622"
          class="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Job Contract ↗
        </a>

        <a href="mailto:bayvine.nz@gmail.com" class="btn btn-primary">
  Email Us
</a>
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

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
  });
});
