export default {
  template: `
    <section class="color-picker">
        <ul class="colors-list clean-list flex" @mouseleave="closeColors">
            <li v-for="color in colors" class="color" :style="{backgroundColor:color}" 
                    @click="setColor(color)" >
            </li>
        </ul>
    </section>
    `,
  data() {
    return {
      colors: [
        "#ffffff",
        "#f28b82",
        "#fabd05",
        "#fcf475",
        "#ccff8f",
        "#a7feec",
        "#cbf1f9",
        "#afcbfa",
        "#d6affb",
        "#fdcfe8",
        "#e6c9a8",
        "#e8eaed"
      ],
    };
  },
  methods:{
    setColor(color){
      this.$emit('setColor',color)
    },
    closeColors(){
      this.$emit('close')
    }
  }
};
