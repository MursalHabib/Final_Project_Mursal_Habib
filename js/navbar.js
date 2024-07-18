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
			activeLinkId = "home-link";
			break;
		case "portfolio.html":
			activeLinkId = "portfolio-link";
			break;
		case "blog.html":
			activeLinkId = "blog-link";
			break;
		case "about.html":
			activeLinkId = "about-link";
			break;
		case "contact.html":
			activeLinkId = "contact-link";
			break;
		default:
			break;
	}

	if (activeLinkId) {
		const activeLink = document.getElementById(activeLinkId);
		if (activeLink) {
			activeLink.classList.add("active");
		}
	}
}
