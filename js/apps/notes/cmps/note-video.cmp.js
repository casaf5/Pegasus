export default {
  props: ["note"],
  template: `
        <div class="video-area" > 
            <iframe :src="url"
            frameborder="0" allow="accelerometer; encrypted-media; gyroscope;" 
            allowfullscreen></iframe>
            <textarea ref="textarea" v-model="url" v-if="isOnEdit" @blur="setEmbedVid"></textarea>
        </div>
    `,
  data() {
    return {
      url: "",
    };
  },
  created() {
    this.setEmbedVid();
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
    setEmbedVid() {
      let videoUrl = this.note.info.url;
      if (videoUrl.includes("embed")) {
        this.url = videoUrl;
        return;
      }
      let url = new URL(this.note.info.url);
      let params = new URLSearchParams(url.search);
      const videoId = params.get("v");
      let embedUrl = `https://www.youtube.com/embed/${videoId}`;
      this.url = embedUrl;
      this.$emit("edit");
    },
  },
};
