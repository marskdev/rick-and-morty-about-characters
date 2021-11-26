const template = require("./pagination.pug");

const Pagination = (page) => {
	const pathURL = location.pathname;
	return template({ pathURL, page });
};

export default Pagination;
