function init(){
    renderBookList()
}


function renderBookList(){

    let html = "";

    let contentRef = document.getElementById('bookList')

    for (let index = 0; index < books.length; index++) {
        let book = books[index]

   

        html += getBookTemplate(book)
    }
        contentRef.innerHTML = html;
}













