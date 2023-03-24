function getArticle() {
    return fetch('https://nodejs-for-web-prog.azurewebsites.net/article')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch (error => {
        console.log(error);
    })
}

function addArticle(newArticle) {
    return fetch('https://nodejs-for-web-prog.azurewebsites.net/article', {
        method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newArticle),
})
.then(response => response.json())
.then(data => {
    return data;
})
.catch(error => {
    console.log(error);
});
}

function deleteArticle(id) {
    return fetch(`https://nodejs-for-web-prog.azurewebsites.net/article/${id}`, {
        method: 'DELETE',

})
.then((response) => response.json())
.then((data) => {
    return data;
})
.catch((error) => {
    console.log(error);
});
}

export { getArticle,addArticle, deleteArticle };