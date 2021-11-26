import Pagination from "components/Pagination";
import getData from "utils/getData";
import getHash from "utils/getHash";

const template = require("./home.pug");

const Home = async () => {
	const hash = getHash();
	const page = parseInt(hash === "/" ? "1" : hash);
	const characters = await getData({ page });
	return template(characters.results) + Pagination(page);
};

export default Home;
