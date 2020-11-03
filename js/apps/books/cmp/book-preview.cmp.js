export default {
  props: ["book"],
  template: `
        <li class="book-preview col-layout justify-end">
        <img :src="book.thumbnail"/>
        <h5>{{book.title}}</h5>
        <h6 :style="getStyle">{{getPrice}}</h6>
        </li>
    `,
  computed: {
    getPrice() {
      var price = this.book.listPrice.amount;
      if (price === 0) return "Not For Sale";
      var currency = this.book.listPrice.currencyCode;
      if (currency === "USD") return "$" + price;
      if (currency === "ILS") return "₪" + price;
      else return price + "€";
    },
    getStyle() {
      const color = this.book.listPrice.amount < 150 ? "green" : "red";
      return { color:color };
    },
  },
};
