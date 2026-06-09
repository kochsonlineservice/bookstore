function getBookTemplate(book) {

    let commentsHtml = "";

    for (let index = 0; index < book.comments.length; index++) {

        let comment = book.comments[index];

        commentsHtml += `
            <p><b>${comment.name}</b>: ${comment.comment}</p>
        `;
    }

    return `

      <article class="book_card">

          <div class="book_name">
                <h2>${book.name}</h2>
          </div>

          <div class="img">
              <img class="img_book" src="${book.image}">
          </div>

          <div class="book_price_like">
              <p class="book_price">${book.price} €</p>

              <div class="book_like">
                  ${book.likes} ❤️
              </div>
          </div>

          <div class="book_details">
              <p>Autor: ${book.author}</p>
              <p>Erscheinungsjahr: ${book.publishedYear}</p>
              <p>Genre: ${book.genre}</p>
          </div>

          <div class="book_comments">

              <h3 class="comments_title">Kommentare:</h3>

              <div class="comments_container">
                  ${commentsHtml}
              </div>

          </div>

      </article>
    `;
}