export default {
  props: ["note"],
  template: `
        <section class="audio-area"> 
        <audio controls :src="url">
            Your browser does not support the
            <code>audio</code> element.
         </audio>
         <textarea ref="textarea" v-model="url" v-if="note.isOnEdit" @blur="saveChanges"></textarea>
        </section>
    `,
  data() {
    return {
      url: this.note.info.url,
    };
  },
  methods: {
    saveChanges() {
      this.$emit("save");
    },
  },
};
