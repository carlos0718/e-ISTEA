export function filterInput(data, searchTerm = '') {
	if (!searchTerm) return data;

	const filteredData = data.filter((item) => {
		return item.title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	return filteredData;
}
