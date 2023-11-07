
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {

  state: () => ({
    userdb: [
      {
        id: 1,
        nom: 'AZERTY',
        prenoms: 'Kodjo',
        mail: 'azertkodjo@gmail.com',
        password: 'AZ12'
        
      },
      {
        id: 2,
        nom: 'PASCAL',
        prenoms: 'Kossi',
        mail: 'pascal@yahoo.fr',
        password: 'PK12'
      }
    ],

    users: localStorage.getItem('userdb') ? JSON.parse(localStorage.getItem('userdb')) : [],


  }),

  actions: {
    connecter(mail,pass) {
      //let userSave = (mail:mail,password:pass})
      let fnd = this.users.find(p => (p.mail == mail) && (p.password == pass))  
      if(fnd != undefined){ 
        this.msgtxt = 'Non '
      }else{
       // this.users.push(userSave)
        this.msgtxt = 'LoginPage'
      }
     
      //localStorage.setItem("user",JSON.stringify(this.users))

      return this.msgtxt
    }

  },

  getters: {
    userInfo: (state) =>{
      state.users = localStorage.getItem('userdb') ? JSON.parse(localStorage.getItem('userdb')) : []
      
      return state.users
    }
  }


})
