function getBookTemplate(book) {
  return `

      <article class="book_card">

<!-- book-title -->
          <div class="book_name">
                <h2 class="h2">${book.name}</h2> 
          </div>

<!-- book-img -->
          <div class="img">
              <img class="img_book"  src="${book.image}">
          </div>


<!-- book-price-and-likes -->      
          <div class="book_price_like">

              <p class="book_price">${book.price} €</p>

            <div class="book_like">
                <span>1249</span>
                <span>❤️</span>
            </div>

          </div>


                      
                 

                        <p class="book_author">${book.author}</p>

                      

                      <p class="book_genre">${book.genre} </p>



              </article>
        `;
}



