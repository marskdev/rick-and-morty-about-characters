const template = require("./pagination.pug");

const Pagination = (page, pages, search) => {
	console.log("search " + search);
	const pathURL = location.pathname;
	return template({ pathURL, page, pages, search });
};

export default Pagination;
