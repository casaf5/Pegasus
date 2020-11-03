import { bookService } from "../service/book-service.js";
import bookList from "../cmp/book-list.cmp.js";
import bookFilter from "../cmp/book-filter.cmp.js";
import addBook from "../cmp/bookSearchAndAdd.cmp.js"


export default {
  template: `
    <main class="books-app">
        <add-book/>
        <book-filter v-show="!selectedBook" @filter="setFilter"/>
        <book-list :books="booksToShow" @selected="selectBook"></book-list> 
    </main>
    `,
  data() {
    return {
      books: null,
      filterBy: null,
      selectedBook: null,
    };
  },
  methods: {
    selectBook(book) {
      this.selectedBook = book;
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    booksToShow() {
      var filterBy = this.filterBy;
      if (!filterBy) return this.books;
      var filteredBooks = this.books.filter((book) => {
        return book.title.toLowerCase().includes(filterBy.name.toLowerCase());
      });
      filteredBooks = filteredBooks.filter((book) => {
        var price = book.listPrice.amount;
        if (!filterBy.fromPrice && !filterBy.toPrice) return true;
        if (!filterBy.fromPrice) return price <= filterBy.toPrice;
        if (!filterBy.toPrice) return price >= filterBy.fromPrice;
        else {
          return price >= filterBy.fromPrice && price <= filterBy.toPrice;
        }
      });
      return filteredBooks;
    },
  },
  created() {
    bookService.getBooks().then(books => {
      this.books = books;
    });
  },
  components: {
    bookFilter,
    bookList,
    addBook,
  },
  
};


