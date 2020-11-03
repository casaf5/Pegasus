import { bookService } from "../service/book-service.js";
import reviewsList from '../cmp/book-review-list.cmp.js'
import { eventBus } from "../../../services/event-bus.service.js";

{/* <button type="button" class="btn-open-reviews" @click="isShowReviews=!isShowReviews">{{toggleReviewBtnName}}</button> */}

export default {
  props: ["book"],
  template: `
      <div class="book-review ">
        <h2>Reviews:</h2>
           <form @submit.prevent="onAddReview" class="flex">
           <section class="flex">
                <input type="text" id="reviewer-name" placeholder="Your Name" v-model:value="newReview.name"/>
                <label for="rate">Rate:</label>
                  <select id="rate" v-model:value="newReview.rate">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                  </select>
               </section>
               <textarea id="review-area" rows="3" cols="65" placeholder="Write Your Review" v-model:value="newReview.reviewText" />
               <button type="submit" class="btn-submit-review">Send</button>
           </form>
           <div class="reviews">
              <reviews-list  :reviews="book.reviews" @delete="onDeleteReview" />
            </div>
          
      </div>
      `,
  data() {
    return {
      newReview: {
        name: 'New Reader',
        rate: 5,
        date: `${new Date().toLocaleDateString()},${new Date().toLocaleTimeString()}`,
        reviewText: "",
      },
      isShowReviews: false,
    };
  },
  computed: {
    toggleReviewBtnName() {
      return this.isShowReviews ? 'Close Reviews' : 'Open Reviews'
    }
  },
  methods: {
    onAddReview() {
      bookService.addReview(this.book.id, { ...this.newReview });
      eventBus.$emit('message', 'Review Added!', 'good-msg') 
    },
    onDeleteReview(reviewIdx) {
      bookService.deleteReview(this.book.id, reviewIdx)
      eventBus.$emit('message', 'Review Deleted', 'bad-msg')
    },

  },
  components: {
    reviewsList,
  }
};
