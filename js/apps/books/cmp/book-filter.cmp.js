export default {
  template: `
    <div class="book-filter flex space-between">
         <input type="text" placeholder="Local filter By Name" v-model="filterBy.name" @input="onFilter" />
         <input type="number" placeholder="From Price" v-model.number="filterBy.fromPrice" @input="onFilter" />
         <input type="number" placeholder="To Price" v-model.number="filterBy.toPrice"  @input="onFilter"/>
    </div>
    `,
  data() {
    return {
      filterBy: {
        name: "",
        fromPrice: "",
        toPrice: "",
      },
    };
  },
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy);
    },
  },
};
