import {eventBus} from '../../../services/event-bus.service.js'

export default {
  props: ["note"],
  template: `
       <section class="todos-area">
            <ul class="clean-list">
                <label class="new-todo label flex space-between" @click="openCloseAdd">
                Add New Task
                </label>
                <section class="add-task flex space-between" v-if="isAddClicked">
                  <input  ref="todoInput" v-model="newTodo" @keyup.enter="addTodo" 
                          type="text" placeholder="Enter New Task..">
                  <i class="fas fa-plus-circle" @click="addTodo"></i>
                </section>
                <li v-for="(todo,idx) in note.info.todos" class="flex space-between" >
                  <label :for="todo.id" class="check-todo" :class="{ isDone: todo.doneAt}" >
                      <input  type="checkbox" v-model="todo.isDone" :id="todo.id" @click="changeTodoStatus(idx)"  >
                      {{todo.txt}}
                      <span class="checkmark-todo"></span>
                  </label>
            </label>
                  <i class="fas fa-trash-alt justify-self-end" @click="removeTodo(idx)" ></i>
                </li>
            </ul>
        </section> 
    `,
  data() {
    return {
      isAddClicked: false,
      newTodo: "",
    };
  },
  created() {
    eventBus.$on(`edit-${this.id}`, () => this.onFocus());
  },
  computed: {
    doneClass() {
      return { isDone: this.todo.isDone };
    },
  },
  methods: {
    openCloseAdd() {
      this.isAddClicked = !this.isAddClicked;
    },
    addTodo() {
      let newTodo = {
        txt: this.newTodo,
        isDone: false,
        doneAt: null,
      };
      this.note.info.todos.push(newTodo);
      this.newTodo=''
      this.$emit("edit");
    },
    removeTodo(idx) {
      this.note.info.todos.splice(idx, 1);
      this.$emit("edit");
    },
    changeTodoStatus(idx) {
      let selectedTodo = this.note.info.todos[idx];
      if (!selectedTodo.isDone) {
        selectedTodo.isDone = true;
        selectedTodo.doneAt = new Date().toLocaleString();
      } else {
        selectedTodo.isDone = false;
        selectedTodo.doneAt = null;
      }
      this.note.info.todos[idx] = selectedTodo;
      this.$emit("edit");
    },
  },
};
