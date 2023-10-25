import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state : () => ({
    tasks: [
      {id: 1, title : "buy some milk", isFav: true},
      {id: 2, title: "do the bed", isFav: false}
    ]
  })

})
