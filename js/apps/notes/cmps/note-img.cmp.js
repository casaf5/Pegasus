export default {
  props: ["note"],
  template: `
         <section class="image-area">
             <img :src="url"/>
             <textarea v-model="url" v-if="isOnEdit" @blur="onEdit"></textarea>
          </section>
              
      `,
  data() {
    return {
      url:this.note.info.url
    };
  },
  computed: {
    isOnEdit() {
      return this.note.isOnEdit;
    },
  },
  methods: {
    saveChanges() {
      this.$emit("save");
    },
    onEdit() {
      this.$emit("edit");
    },
  },
};
