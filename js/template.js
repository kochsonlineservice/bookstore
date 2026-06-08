function getBookTemplate(book) {
  return `

              <div class="book_card">
                          <div class="book_name">
                              <h2 class="h2">${book.name}</h2> 
                          </div>


                            <div class="img">
                                <img class="img_book"  src="${book.image}">
                            </div>




                      
                 

                        <p class="book_author">${book.author}</p>

                      <p class="book_price">${book.price} €</p>

                      <p class="book_genre">${book.genre} </p>



              </div>
        `;
}



