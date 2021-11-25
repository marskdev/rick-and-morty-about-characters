import logoSmall from "images/logo-small.png";
import info from "utils/info";

const template = require("./footer.pug");

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return template({ ...info, year, logoSmall });
};

export default Footer;
