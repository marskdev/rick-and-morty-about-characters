import Header from "templates/header";
import "styles/main.sass";

const routes = {
	"/": "",
};

const router = async () => {
	const header = null || document.getElementById("header");
	const content = null || document.getElementById("content");
	const footer = null || document.getElementById("footer");

	header.innerHTML = await Header();
};

export default router;
