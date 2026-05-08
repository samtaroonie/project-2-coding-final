// JavaScript Document

const btn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  btn.textContent = isOpen ? "✕" : "☰";
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    btn.textContent = "☰";
  }
});


/*
Mobile Navigation Toggle Logic

- Selects the hamburger button (#menuBtn) and the navigation container (#nav).
- When the button is clicked:
    • Toggles the "open" class on the nav (shows/hides it in mobile view).
    • Changes the button icon from hamburger (☰) to close (✕) based on state.
- When a navigation link (<a>) inside the nav is clicked:
    • Removes the "open" class to close the menu.
    • Resets the button icon back to the hamburger (☰).

This allows the mobile menu to open, close, and automatically collapse
after a user selects a navigation link.
*/