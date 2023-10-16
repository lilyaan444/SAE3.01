const app = Vue.createApp({
    data() {
       return {
         resultat:0,
         signe:"",
         bool:false,
         var1:"",
         var2:"",
    }
},
    methods: {
        clear(){
            this.resultat=0,
            this.var1="",
            this.var2="",
            this.signe="",
            this.bool=false
        },
        Signe(e){
            this.signe=e,
            this.bool=true

        },
        add(e){
           if(this.bool){
            this.var2+=e
           }
           else{
            this.var1+=e
           }
           
        },
        remove(){
            if(this.bool){
                if(this.var2.length>0){
                    this.var2=this.var2.slice(0,-1)
                }
                else{
                    this.signe=""
                    this.bool=false
                }}
            else{
                this.var1=this.var1.slice(0,-1)
            }
        },
        calcul(){
            if(this.signe=="+"){
                this.resultat=parseInt(this.var1)+parseInt(this.var2)
            }
            else if(this.signe=="-"){
                this.resultat=parseInt(this.var1)-parseInt(this.var2)
            }
            else if(this.signe=="*"){
                this.resultat=parseInt(this.var1)*parseInt(this.var2)
            }
            else if(this.signe=="/"){
                this.resultat=parseInt(this.var1)/parseInt(this.var2)
            }
        }
        

    },
    
 })

 app.mount("#app")