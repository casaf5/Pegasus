export default{
    props: ['text'],
    template: `
    <section class="long-text flex">
        <h3>Description:</h3>
        <p>{{getFirstWords}}
            <span v-show="readMore">{{getRestOfWords}}</span>
            <button class="btn-more-less" @click="readMore=!readMore" v-show="isLong">{{getWord}}</button >
        </p>
    </section>
    `,
    data() {
        return {
            textToShow: this.text,
            readMore: false,
        }
    },
    computed: {
        getFirstWords() {
            return this.textToShow.substring(0, 100)
        },
        getRestOfWords() {
            return this.textToShow.substring(100)
        },
        isLong(){
            return this.text.length > 100
        },
        getWord(){
            if(this.readMore)return 'Less..'
            return 'More..'
        }
    },
}