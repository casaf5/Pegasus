export default {
  template: `
    <section class="note-filter flex justify-center">
        <input type="search" placeholder="Search your notes" v-model="filterBy.txt" @input="onFilter"/>
        <select class="filter-opt" v-model="filterBy.type" @change="onFilter">
            <option value="all">All</option>
            <option value="noteText">Text</option>
            <option value="noteImage">Image</option>
            <option value="noteTodo">Todo</option>
            <option value="noteVideo">Video</option>
            <option value="noteAudio">Audio</option>
        </select>   
    </section>
    `,
  data() {
    return {
      filterBy: {
        txt: "",
        type: "all",
      },
    };
  },
  computed: {},
  methods: {
    onFilter() {
      this.filterBy.txt = this.filterBy.txt.toLowerCase();
      this.$emit("filter", this.filterBy);
    },
  },
};
