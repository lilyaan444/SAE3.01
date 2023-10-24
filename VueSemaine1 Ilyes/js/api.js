const BDELEVE ="BD_ELEVE"

// Retourner la bdd
function getBDEleves() {
    if (localStorage.getItem(BDELEVE) === null) {
        localStorage.setItem(BDELEVE, JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem(BDELEVE))
}

//metre a jour la bdd
function updateBDD(bdd) {
    localStorage.setItem(BDELEVE, JSON.stringify(bdd))
}


// Ajouter un élève
function addBDEleve(eleve) {
    const bdd = getBDEleves()
    eleve.id = Date.now()+""
    bdd.push(eleve)
    updateBDD(bdd)
}

// mettre a jour l'eleve
function updateEleve(eleve) {
    const bdd = getBDEleves()
    const updatebdd = bdd.map(function(dataEleve){
        if(dataEleve.id === eleve.id){
            return{
                nom: eleve.nom,
                prenom: eleve.prenom,
                dateNaissance: eleve.dateNaissance,
                niveau: eleve.Niveau,
                id: eleve.id
            }
        }
        return dataEleve
    })

    updateBDD(updatebdd)
}

// supprimer un eleve
function deleteEleve(eleve){
    const bdd = getBDEleves()
    const updatebdd = bdd.filter(function(dataEleve){
        return dataEleve.id !== eleve.id
    })
    updateBDD(updatebdd)
}

// recuperer l'étudiant par rapport a son id
function getEleve(id){
    const bdd = getBDEleves()
    var filterBDD = bdd.filter((data) => data.id === id)
    if(filterBDD.length > 0){
        return filterBDD[0]
    }
    return null
}  

// rechercher un étudiant par rapport a son nom
function searchEleve(nom){
    const bdd = getBDEleves()
    const filterBDD = bdd.filter((data) =>{
        return data.nom.toLowerCase().includes(nom.toLowerCase()) || data.prenom.toLowerCase().includes(nom.toLowerCase())
    })
    
    return filterBDD
}

function checkIfEleveExiste(nom, prenom){
    const bdd = getBDEleves()
    const filterBDD = bdd.filter((data) =>{
        return data.nom.toLowerCase() == nom.toLowerCase || data.prenom.toLowerCase() == prenom.toLowerCase()
    })
    
    return filterBDD.length > 0
}
