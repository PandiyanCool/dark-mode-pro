(function () {
  const darkModeStyleId = "dark-mode-style";

  function toggleDarkMode() {
    const existingStyle = document.getElementById(darkModeStyleId);
    if (existingStyle) {
      existingStyle.remove();
    } else {
      const style = document.createElement("style");
      style.id = darkModeStyleId;
      style.textContent = `
        body, html {
          background-color: #1a202c !important; /* Tailwind dark background */
          color: #cbd5e0 !important; /* Tailwind dark text color */
        }
        a, a:visited {
          color: #63b3ed !important; /* Tailwind blue */
        }
        header, nav, footer, section, article, aside, main, div, span, p, li, ul, ol, table, th, td, tr, form, input, textarea, button, select {
          background-color: #2d3748 !important; /* Tailwind dark background */
          color: #cbd5e0 !important; /* Tailwind dark text color */
          border-color: #4a5568 !important; /* Tailwind dark border color */
        }
        img, video {
          filter: brightness(0.8) !important;
        }
        ::placeholder {
          color: #a0aec0 !important; /* Tailwind placeholder color */
        }
        input, textarea, button, select {
          background-color: #4a5568 !important; /* Tailwind input background */
          color: #e2e8f0 !important; /* Tailwind input text color */
        }
        input[type="text"], input[type="email"], input[type="password"], textarea {
          border: 1px solid #718096 !important; /* Tailwind input border */
        }
        button {
          background-color: #2d3748 !important; /* Tailwind button background */
          color: #e2e8f0 !important; /* Tailwind button text color */
        }
        button:hover {
          background-color: #4a5568 !important; /* Tailwind button hover background */
        }
        /* Add more styles as needed */
      `;
      document.head.append(style);
    }
  }

  toggleDarkMode();
})();
