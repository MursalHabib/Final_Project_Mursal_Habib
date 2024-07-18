let listOfPortfolios = document.getElementById("list-of-portfolios");

const showList = (e) => {
	const parsed = e
		.map((e) => {
			return `
            <div class="card col-12 col-md-3 p-0 m-2" id="card-hover">
                <img src="${e.url}" class="card-img-top" alt="...">
                <div class="card-body row">
                        <div class="col-10">
                            <p>${e.title}</p>
                            <small>${new Date(
								e.createdAt
							).toLocaleString()}</small>
                        </div>
                    <div class="col-2 text-center">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg></a>
                        <span class="text-secondary">${e.like}</span>
                    </div>
                </div>
            </div>
`;
		})
		.join("");
	return (listOfPortfolios.innerHTML = `<div class="row justify-content-center">${parsed}</div>`);
};

const showDesign = () => {
	listOfPortfolios.innerHTML = "";
	fetch("./js/portfolio.json")
		.then((res) => res.json())
		.then((data) => {
			const designData = data.filter((e) => e.category === "design");
			showList(designData);

			document.getElementById("all").classList.remove("active");
			document.getElementById("website").classList.remove("active");
			document.getElementById("logo").classList.remove("active");
			document.getElementById("design").classList.add("active");
		});
};

const showAll = () => {
	fetch("./js/portfolio.json")
		.then((res) => res.json())
		.then((data) => {
			showList(data);
			document.getElementById("design").classList.remove("active");
			document.getElementById("website").classList.remove("active");
			document.getElementById("logo").classList.remove("active");
			document.getElementById("all").classList.add("active");
		});
};
showAll();

const showWebsite = () => {
	listOfPortfolios.innerHTML = "";
	fetch("./js/portfolio.json")
		.then((res) => res.json())
		.then((data) => {
			const websiteData = data.filter((e) => e.category === "website");
			showList(websiteData);
			document.getElementById("all").classList.remove("active");
			document.getElementById("website").classList.add("active");
			document.getElementById("design").classList.remove("active");
			document.getElementById("logo").classList.remove("active");
		});
};

const showLogo = () => {
	listOfPortfolios.innerHTML = "";
	fetch("./js/portfolio.json")
		.then((res) => res.json())
		.then((data) => {
			const logoData = data.filter((e) => e.category === "logo");
			showList(logoData);
			document.getElementById("all").classList.remove("active");
			document.getElementById("website").classList.remove("active");
			document.getElementById("design").classList.remove("active");
			document.getElementById("logo").classList.add("active");
		});
};
