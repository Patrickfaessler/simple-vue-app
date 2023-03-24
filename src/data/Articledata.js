function getArticle() {
    return fetch('http://localhost:3333/article')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch (error => {
        console.log(error);
    })
}

function addArticle(newArticle) {
    return fetch('http://localhost:3333/article', {
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
    return fetch(`http://localhost:3333/article/${id}`, {
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