// loadNavbar.js
document.addEventListener("DOMContentLoaded", function () {
	fetch("./navbar.html")
		.then((response) => response.text())
		.then((data) => {
			document.getElementById("navbar-placeholder").innerHTML = data;

			// Now highlight the active navbar item
			highlightActiveNavItem();
		});
});

function highlightActiveNavItem() {
	const path = window.location.pathname;
	const page = path.split("/").pop();

	let activeLinkId = "";
	switch (page) {
		case "index.html" || "index":
			activeLinkId = "home-link";
			break;
		case "portfolio.html" || "index":
			activeLinkId = "portfolio-link";
			break;
		case "blog.html" || "index":
			activeLinkId = "blog-link";
			break;
		case "about.html" || "index":
			activeLinkId = "about-link";
			break;
		case "contact.html" || "index":
			activeLinkId = "contact-link";
			break;
		default:
			break;
	}

	if (activeLinkId) {
		document.getElementById(activeLinkId).classList.add("active");
	}
}
