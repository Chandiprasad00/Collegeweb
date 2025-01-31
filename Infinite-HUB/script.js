// Sidebar functionality
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const closeSidebar = document.getElementById("close-sidebar");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.add("open");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

// Dropdown menu functionality
const userAvatar = document.getElementById("user-avatar");
const dropdownMenu = document.getElementById("dropdown-menu");

userAvatar.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!userAvatar.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("show");
    }
});

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    e.target.reset();
});