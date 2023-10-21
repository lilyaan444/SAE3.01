<template>
  <div class="home">
          <v-text-field
          @click:append="addTask"
          @keyup.enter="addTask"
          v-model="newTaskTitile"
          class="pa-3"
          label="Add new task"
            append-inner-icon="mdi-plus"
            variant="outlined"
            hide-details
            clearable 
          ></v-text-field>

    <v-list flat class="pt-0">
      <div v-for="task in tasks" :key="task.id">
        <v-list-item @click="doneTask(task.id)" :class="{'blue': task.done}">
          <template v-slot:prepend>
            <v-list-item-action start>
              <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
              
            
            </v-list-item-action>
              <v-btn
              @click.stop="deleteTask(task.id)"
            color="red"
            icon="mdi-delete"
            variant="text"
          ></v-btn>          
          
          </template>
          
          <v-list-item-title :class="{'strikeout': task.done}"> {{ task.title }} </v-list-item-title>
        
        </v-list-item>
        
        <v-divider></v-divider>
      </div>
      
    </v-list>
    
  </div>
</template>

<script>
export default ({
  name: 'TodoView',
  data() {
    return {
      newTaskTitile: '',
      tasks : [
        {id: 1, title: 'Wake up', done: false},
        {id: 2, title: 'Eat', done: false},
        {id: 3, title: 'Sleep', done: false},
      ]
    }
  },

  methods: {
    doneTask(id) {
      let task = this.tasks.filter(task => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    addTask() {
      console.log("ok");
      if (this.newTaskTitile) {
        this.tasks.push({
          id: this.tasks.length + 1,
          title: this.newTaskTitile,
          done: false
        });
        this.newTaskTitile = '';
      }
    }
  }
});
</script>

<style scoped>
.strikeout {
  text-decoration: line-through;
}
</style>