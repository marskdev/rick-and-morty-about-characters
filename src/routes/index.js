import Header from "templates/header";
import Home from "pages/home";
import Footer from "templates/footer";
import Character from "components/Character";
import Error404 from "pages/Error404";
import "styles/main.sass";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
	"/": Home,
};

const router = async () => {
	const header = null || document.getElementById("header");
	const content = null || document.getElementById("content");
	const footer = null || document.getElementById("footer");

	let route = await resolveRoutes("/");
	let render = routes[route] ? routes[route] : Error404;

	header.innerHTML = await Header();
	content.innerHTML = await render("/");
	footer.innerHTML = routes[route] ? await Footer() : "";

	const cards = document.querySelectorAll(".card");

	cards.forEach((card) => {
		card.addEventListener("click", async () => {
			let id = card.children[0].textContent;

			content.innerHTML += await Character(id);

			const myModal = new bootstrap.Modal(
				document.getElementById("characterModal")
			);
			myModal.toggle();
			router();
		});
	});

	const pagLink = document.querySelectorAll(".page-link");

	pagLink.forEach((link) => {
		link.addEventListener("click", () => {
			window.scrollTo(0, 0);
		});
	});
};

export default router;
