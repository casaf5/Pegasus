
export default {
    props: ['foundBooks'],
    template: `
        <ul class="found-books-list flex col">
            <li class="found-book flex space-between" v-for="book in foundBooks">
                {{book.volumeInfo.title}}
                <button class="btn-add-book" @click="add(book)">+</button>
            </li>
        </ul>
    `,
    methods: {
        add(book) {
            this.$emit('addBook', book)
        }

    }
}