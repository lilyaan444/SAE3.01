const checkIfEmptyValue = (value) => {
    let isEmpty = false
    for (const key in value) {
        if (value[key] === "") {
            isEmpty = true
        }
    }
}

const messageSuccess = (message) => {
    Swal.fire({
        position : "top-center",
        icon : "success",
        title : message,
        showConfirmButton : false,
        timer : 1500
    })
}

const messageError = (message) => {
    Swal.fire({
        position : "top-center",
        icon : "error",
        title : "Oups...",
        text : message,
        showConfirmButton : false,
        timer : 1500
    })
}

const App = {
    data() {
        return {
            showHome : false,
            showCreateForm : false,
            showStudentList : false,
            newEleve : {
                nom : "",
                prenom : "",
                dateNaissance : "",
                niveau : ""
            },
        }
    },

    mounted(){
        this.changeNavigation("home")
    },

    methods:{
        goToHome(){
            this.changeNavigation("home")
        },

        goToCreateForm(){
            this.changeNavigation("create")
        },

        goToStudentList(){
            this.changeNavigation("list")
        },

        addEleve(){
            if(!checkIfEmptyValue(this.newEleve)){
                if(!checkIfEleveExiste(this.newEleve.nom, this.newEleve.prenom)){
                    addBDEleve(this.newEleve)
                    this.newEleve = {
                        nom : "",
                        prenom : "",
                        dateNaissance : "",
                        niveau : ""
                    }
                    messageSuccess("Etudiant ajouté avec succès !")
                }else{
                    messageError("Cet étudiant existe déjà !")
                }
            }else{
                messageError("Veuillez remplir tous les champs")
            }
        },

        changeNavigation(destination){
            this.showHome = false
            this.showCreateForm = false
            this.showStudentList = false

            switch(destination){
                case "home":
                    this.showHome = true
                    break
                case "create":
                    this.showCreateForm = true
                    break
                case "list":
                    this.showStudentList = true
                    break

                default:
                    this.showHome = true
                    break
            }
        },
    }
}

Vue.createApp(App).mount("#app")