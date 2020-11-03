import { addBookService } from '../service/search-book-service.js'
import { bookService } from '../service/book-service.js'
import foundBookList from '../cmp/book-add-list.cmp.js'


export default {
    template: `
    <div class="add-new-book col-layout">
        <section class="flex">
            <input type="text" placeholder="Online - Search " v-model="bookToSearch" />
            <button class="btn-search-book" @click="searchBook">
            <i class="fas fa-search"></i> Search Book</button>
        </section>
        <found-book-list :foundBooks="booksFound" @addBook="onAddBook"/>
    </div>
    `,
    data() {
        return {
            bookToSearch: '',
            booksFound: [],
        }
    },
    methods: {
        searchBook() {
            var keywords = this.bookToSearch.toLowerCase()
            addBookService.searchForAbook(keywords)
                .then(booksFound => this.booksFound = booksFound)
                .catch('Somthing Went Wrong..')
        },
        onAddBook(book) {
            bookService.createNewBook({ ...book })
        }
    },
    components: {
        foundBookList,
    }
}