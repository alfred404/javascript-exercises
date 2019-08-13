const getTheTitles = (books) => {
  const titles = [];
  books.forEach((element) => {
    titles.push(element.title);
  });
  return titles;
};

module.exports = getTheTitles;
