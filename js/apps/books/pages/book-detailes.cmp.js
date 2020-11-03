import { bookService } from "../service/book-service.js";
import longText from "../cmp/long-text.cmp.js";
import bookReview from "../cmp/book-review.cmp.js";

export default {
  template: `
    <div  class="book-details col-layout" v-if="book">
      <section class="book-nav flex">
        <!-- <i class="fas fa-arrow-left fa-3x" @click="nextBook(-1)"></i> -->
        <button @click="closeDetails" class="btn-close-details">
            -Close-
        </button>
        <!-- <i class="fas fa-arrow-right fa-3x" @click="nextBook(1)" ></i> -->
      </section>
      <div class="all-details">
            <div class="basic-book-details flex space-between">
              <section class="summary flex col">
                  <h3 class="book-title">{{book.title}}</h3>
                  <h4 class="book-subt">{{book.subtitle}}</h4>
                  <h5><span>Authors: </span>{{getAuthors}}</h5>     
                  <h5><span>Categories: </span>{{getCategories}}</h5>
                  <h5><span>First Published: </span>{{book.publishedDate}} {{getBookAge}}</h5>
                  <h5><span>Pages: </span>{{book.pageCount}} {{getBookLength}}</h5>
                  <h5><span>Book Language: </span>'{{book.language}}'</h5>
              </section>
              <section class="img-and-price flex col-layout">
                  <img  class="book-thumbnail" :src="book.thumbnail"/>
                  <h5 class="book-price" :class="priceClass">Price: {{getPrice}}</h5>
              </section>
              </div>
              <img class="sale" src="../../../../img/sale.png" v-show="book.listPrice.isOnSale">
          <long-text :text="book.description" />
      </div>
      <book-review :book="book"/>
    </div>

    `,
  data() {
    return {
      book: null, 
    };
  },
  computed: {
    getBookLength() {
      var bookPageCount = this.book.pageCount;
      if (bookPageCount >= 500) return "-Long Reading";
      if (bookPageCount >= 200) return "-Decent Reading";
      if (bookPageCount <= 100) return "-Light Reading";
    },
    getBookAge() {
      var bookPubTime = this.book.publishedDate;
      var year = new Date().getFullYear();
      if (year - bookPubTime >= 10) return "-Veteran Book ! ";
      if (year - bookPubTime <= 1) return "-New!";
    },
    priceClass() {
      return {
        priceRed: this.book.price > 150,
        priceGreen: this.book.price < 20,
      };
    },
    getPrice() {
      var price = this.book.listPrice.amount;
      if (price === 0) return "Not For Sale";
      var currency = this.book.listPrice.currencyCode;
      if (currency === "USD") return "$" + price;
      if (currency === "ILS") return "₪" + price;
      else return price + "€";
    },
    getCategories() {
      var categories = this.book.categories.join(",");
      return categories;
    },
    getAuthors() {
      var authors = this.book.authors.join(",");
      return authors;
    },
  },
  methods: {
    closeDetails() {
      this.$router.push("/books");
    },
    nextBook(diff) {
      bookService.getNextBook(this.book.id,diff)
      .then((bookId) =>{
        this.$router.go(`/books/${bookId}`);
    });
    },
  },
  created() {
    const { bookId } = this.$route.params;
    console.log(bookId);
    bookService.getBookById(bookId).then((book) => {
      this.book = book;
      console.log(this.book);
    });
  },
  components: {
    longText,
    bookReview,
  },
};
