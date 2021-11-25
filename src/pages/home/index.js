import Pagination from "components/Pagination";
import getData from "utils/getData";

const template = require("./home.pug");

const Home = async () => {
	const characters = await getData();
	return template(characters.results) + Pagination(characters.info);
};

export default Home;
