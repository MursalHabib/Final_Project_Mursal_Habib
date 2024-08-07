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
	console.log(page);

	let activeLinkId = "";
	switch (page) {
		case "index.html":
		case "":
			activeLinkId = "home-link";
			break;
		case "portfolio.html":
		case "portfolio":
			activeLinkId = "portfolio-link";
			break;
		case "blog.html":
		case "blog":
			activeLinkId = "blog-link";
			break;
		case "about.html":
		case "about":
			activeLinkId = "about-link";
			break;
		case "contact.html":
		case "contact":
			activeLinkId = "contact-link";
			break;
		default:
			break;
	}

	if (activeLinkId) {
		document.getElementById(activeLinkId).classList.add("active");
	}
}
