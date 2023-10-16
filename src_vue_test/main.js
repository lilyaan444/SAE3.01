    // import './assets/main.css'

    // import { createApp } from 'vue'
    // import App from './App.vue'

    // createApp(App).mount('#app')

const app = Vue.createApp({
   data() {
      return {
        showBooks:true,
        url:"https://www.google.com",
        books:[
            
                {title:"name of the wind", author:"Patrick Rothfuss", image: './assets/1.jpg', isFav:true},
                {title:"the way of kings", author:"Brandon Sanderson",image:"./assets/2.jpg",isFav:false},
                {title:"the final empire", author:"Brandon Sanderson" ,image:"./assets/3.jpg",isFav:false}
        ],
         x:0,
         y:0
      }
   },
   methods: {
      changeTitle(title){
         this.title = title
      },
      ToggleShowBooks(){
         this.showBooks = !this.showBooks
      },
      handleEvent(e, data){
         console.log(e, e.type)
         if(data){
            console.log(data)
         }
      },
      handleMousemove(e){
          this.x=e.offsetX
          this.y=e.offsetY
      },
      toggleFav(item){
        item.isFav = !item.isFav
      }
   },
   computed: {
       filteredBooks(){
           return this.books.filter((book) => book.isFav)
       }
   }
})

app.mount("#app")