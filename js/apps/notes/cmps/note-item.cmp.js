import { eventBus } from "../../../services/event-bus.service.js";
import editBar from "./note-editbar.cmp.js";
import noteText from "./note-txt.cmp.js";
import noteImage from "./note-img.cmp.js";
import noteVideo from "./note-video.cmp.js";
import noteTodo from "./note-todos.cmp.js";
import noteAudio from "./note-audio.cmp.js";
import colorPicker from "../cmps/note-colorpick.cmp.js";

export default {
  props: ["note"],
  template: `
        <section class="note-item flex col space-around" :note="note" :style="getStyle"> 
            <i class="fas fa-thumbtack align-self-end" @click="changeNoteStatus" :class="pinnedClass"></i>
            <textarea class="title"  ref="title-area"  v-model="note.info.title"
                       @blur="onEdit" @click="onFocus" rows="1"></textarea>
             <component :is="note.type" :note="note" @edit="saveChanges" :key="note.id"/></component>
             <section class="edited">
                 {{getNoteChangedTime}}
             </section>
              <edit-bar :note="note" @hover="hoverState"/>
              <color-picker v-show="colorHover" @setColor="onSetColor" @close="hoverState" />
        </section>
    `,
  data() {
    return {
      noteColor: this.note.style.backgroundColor,
      colorHover: false,
    };
  },
  computed: {
    pinnedClass() {
      if (this.note.isPinned) return "pinned";
      else return "pin-icon";
    },
    getNoteChangedTime() {
      if (!this.note.editedAt) return "Created: " + this.note.createdAt;
      else return "Edited: " + this.note.editedAt;
    },
    getStyle() {
      return this.note.style;
    },
  },
  methods: {
    saveChanges() {
      this.note.isOnEdit = false;
      eventBus.$emit("update", this.note);
    },
    changeNoteStatus() {
      eventBus.$emit("pinStat", this.note.id);
    },
    onFocus(){
      this.$refs["title-area"].focus()
      this.$refs["title-area"].select()
    },
    onEdit(){
      eventBus.$emit("update", this.note);
    },
    onSetColor(color) {
      this.note.style.backgroundColor = color;
      eventBus.$emit("update", this.note);
    },
    hoverState() {
      this.colorHover = !this.colorHover;
    },
    
  },
  components: {
    editBar,
    noteText,
    noteImage,
    noteVideo,
    noteTodo,
    noteAudio,
    colorPicker,
  },
};
