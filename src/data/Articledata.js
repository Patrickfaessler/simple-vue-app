const getArticle = async () => {
    try {
        const response = await fetch('');
        const article = await response.json();
        return article;
    } catch (error) {
        console.error(error);
      }
}

export { getArticle };