var  url = 'https://nodejs-for-web-prog.azurewebsites.net/article/'; //http://localost:3333/article/

function getArticle() {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch (error => {
        console.log(error);
    })
}

function addArticle(newArticle) {
    return fetch(url, {
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
    return fetch(url+id, {
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