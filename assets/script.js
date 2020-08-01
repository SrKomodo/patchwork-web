const nav = document.getElementById("nav");

if (window.matchMedia("(hover: none)").matches) {
	nav.addEventListener("click", () => nav.classList.toggle("open"));
} else {
	nav.addEventListener("mouseenter", () => nav.classList.add("open"));
}

nav.addEventListener("mouseleave", () => nav.classList.remove("open"));
