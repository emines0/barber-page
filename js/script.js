const navbar = document.getElementById("main-nav");
let scrolled = false;

/* Header on scroll */
window.addEventListener("scroll", () => {
	if (scrollY >= 150) {
		navbar.classList.add("top");
	} else {
		navbar.classList.remove("top");
	}
});

/* Scrolling 150px above section*/
$("#main-nav a, .btn").on("click", function (e) {
	if (this.hash !== "") {
		e.preventDefault();

		const hash = this.hash;

		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top - 200,
			},
			50
		);
	}
});
