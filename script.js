const Component = {
    data() {
      return {
            prenom: "Jérôme",
            nom:"Bélanger",
            entreprise:"Le Bocal Academy",
            poste:"Développeur Web",
            adresse:"26, Bd Carabacel, 06000 NICE",
            phone:"06.51.51.01.41",
            email:"jerome.belanger@skema.edu",
            card:"",
      }
      
    },

//methodes pour rendre les champs de saisie live
    methods:{
        saisiePrenom(e){
            this.prenom=e.target.value;
        },
        saisieNom(e){
            this.nom=e.target.value;
        },
        saisiePoste(e){
            this.poste=e.target.value;
        },
        saisieEntreprise(e){
            this.entreprise=e.target.value;
        },
        saisieAdresse(e){
            this.adresse=e.target.value;
        },
        saisiePhone(e){
            this.phone=e.target.value;
        },
        saisieEmail(e){
            this.email=e.target.value;
        },

//Boutton de changement de couleur
        black: function(){
            this.card="basic";
        },
        red:function(){
            this.card="red";
        },
        yellow:function(){
            this.card="yellow";
        }
    }

    
}

 
  Vue.createApp(Component).mount('#root')