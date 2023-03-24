const getArticle = async () => {
    try {
        const response = await fetch('https://nodejs-for-web-prog.azurewebsites.net');
        const article = await response.json();
        return article;
    } catch (error) {
        console.error(error);
      }
}

export { getArticle };