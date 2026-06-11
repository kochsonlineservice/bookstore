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

function addComment(bookId){
        
        
    let book = books[bookId];

    let input = document.getElementById(`commentInput${bookId}`);

    let text = input.value
    

    if (text.trim() === "") {
    return;
}

        input.value = "";
    

    book.comments.push({
        name: "Gast",
        comment: text
    });

    renderBookList();
}


function toggleLike(bookId){
         let book = books[bookId];

         if (book.liked) {
                book.likes--;
                book.liked = false;
         }
        else{
            book.likes++;
            book.liked = true;
        }

        renderBookList();
}
     










