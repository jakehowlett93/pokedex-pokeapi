const capitalize = word => {
	const Capitalizedword = word.charAt(0).toUpperCase() + word.slice(1);
	return Capitalizedword;
};

export default capitalize;