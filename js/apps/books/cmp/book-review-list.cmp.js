export default {
  props: ["reviews"],
  template: `
    <ul class="reviews-list clean-list">
        <li class="review-item flex col" v-for="(review,index) in reviews">
        <section class="flex col">
            <h5 class="flex">
                <i class="fas fa-user"></i> 
                Publisher: {{review.name}}
             </h5>
            <h5>
                <i class="far fa-calendar-alt"></i>
                Posted At:{{review.date}}
            </h5>
            <h5>
                <i class="fas fa-star"></i> 
                Rate: {{review.rate}}/5
            </h5>
        </section>
            <h4>
            <span>Review:</span>
            {{review.reviewText}}
            </h4>
            <button class="btn-del-review" @click="deleteReview(index)">X</button>
        </li>
    </ul>
    `,
  methods: {
    deleteReview(idx) {
      this.$emit("delete", idx);
    },
  },
};
