const sortCardsByTitle = (array) => {
  [...array].sort((a, b) => {
    const title1 = a.title.toLowerCase();
    const title2 = b.title.toLowerCase();

    if (title1 < title2) {
      return -1;
    }
    if (title1 > title2) {
      return 1;
    }

    return 0;
  });
};

export default sortCardsByTitle;
