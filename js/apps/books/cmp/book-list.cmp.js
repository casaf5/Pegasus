import bookPreview from './book-preview.cmp.js';

export default{
    props: ['books'],
    template: `
        <ul class="book-list clean-list flex wrap">
            <book-preview v-for="book in books" :book="book" :key="book.id" v-on:click.native="bookSelected(book.id)"/>
        </ul>
    `,
    methods:{
        bookSelected(bookId) {
            this.$router.push(`/books/${bookId}`)
        }
    },
    components:{
        bookPreview,
    }
}