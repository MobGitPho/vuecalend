import { defineStore } from 'pinia'
import mesProgram from './program.json'
export const useCourStore = defineStore('cours', {
  state: () => ({
    coursdb: mesProgram,

    fd: localStorage.getItem('coursdb') ? JSON.parse(localStorage.getItem('coursdb')) : [],
    courChoix: localStorage.getItem('coursChoix')
      ? JSON.parse(localStorage.getItem('coursChoix'))
      : []
  }),
  persist: {
    storage: localStorage,
  },
  actions: {
    addChoice(tab, hor, jr, i) {
      let resultadd = []
      let idc = hor + '-' + jr
      let idci = hor + '-' + jr + '-' + i
      let choix = {
        ...tab,
        idc: idc,
        idci: idci,
        hor: hor,
        jour: jr,
        activ: 1,
        totprice: tab.price
      }
      let fndidci = this.courChoix.find((p) => p.idci == choix.idci)

      //console.log('courChoix',this.courChoix);
      if (fndidci != undefined) {
        // idci exist 1-2-1

        // Cours deja select donc on verifie son idc 1-2
        let fndidcidel = this.courChoix.find((p) => p.idc == fndidci.idc)

        if (fndidcidel != undefined) {
          let del = this.courChoix.find((p) => p.idci == choix.idci)
          let posdel = this.courChoix.indexOf(del)
          this.courChoix.splice(posdel, 1)

          localStorage.setItem('coursChoix', JSON.stringify(this.courChoix))
          resultadd = JSON.parse(localStorage.getItem('coursChoix'))
        } else {
          console.log('CR EXIST idc NOT IDTQ')
        }
      } else {
        // Le cours n'existe pas dans les courChoix
        let del = this.courChoix.find((p) => p.idc == choix.idc)

        if (del != undefined) {
          let delc = this.courChoix.find((p) => p.idci == del.idci)
          console.log('delc', delc)
          let posdelc = this.courChoix.indexOf(delc)

          console.log('posdelc', posdelc)

          this.courChoix.splice(posdelc, 1)

          this.courChoix.push(choix)

          localStorage.setItem('coursChoix', JSON.stringify(this.courChoix))
          resultadd = JSON.parse(localStorage.getItem('coursChoix'))
        } else {
          //idc# idci#
          this.courChoix.push(choix)

          localStorage.setItem('coursChoix', JSON.stringify(this.courChoix))
          resultadd = JSON.parse(localStorage.getItem('coursChoix'))
        }
      }

      return resultadd
    },

    mesCoursChoix(cour, hor, jr, act) {
      this.courChoix = localStorage.getItem('coursChoix')
        ? JSON.parse(localStorage.getItem('coursChoix'))
        : []
      let active = act

      return !active
    },
    totalSomme(pan) {
      let TotalSom = 0
      pan.forEach((value) => {
        TotalSom += value.totprice
      })

      return TotalSom
    }
  },

  getters: {
    mesHoraires: (state) => {
      state.fd = state.coursdb
      let fnd = state.fd

      return fnd
    },
    NbCourChoice(state) {
      return state.courChoix.length ? state.courChoix.length : 0
    },
    mesCours: (state) => {
      state.courChoix = localStorage.getItem('coursChoix')
        ? JSON.parse(localStorage.getItem('coursChoix'))
        : []

      return state.courChoix
    },
    mesCoursActiv(state) {
      state.courChoix = localStorage.getItem('coursChoix')
        ? JSON.parse(localStorage.getItem('coursChoix'))
        : []
      //let active = []
      //let nb = state.NbCourChoice
      //console.log("nb", nb);
      //console.log("state.courChoix", state.courChoix)
      let fnd = state.courChoix.filter((p) => p.activ == 1)

      //console.log("mesCoursActiv", fnd);
      const dataToReturn = fnd.map((item) => item.idci)
      //console.log({dataToReturn})
      return dataToReturn
    },
    sommeTotal: (state) => {
      state.courChoix = localStorage.getItem('coursChoix')
        ? JSON.parse(localStorage.getItem('coursChoix'))
        : []
      let TotalSom = 0
      state.courChoix.forEach((value) => {
        TotalSom += value.totprice
      })
      return TotalSom
    }
  }
})
