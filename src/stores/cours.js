import { defineStore } from 'pinia'
import mesProgram from './program.json'
export const useCourStore = defineStore('cours', {

    state: () => ({
        coursdb: mesProgram,

        fd: localStorage.getItem("coursdb") ? JSON.parse(localStorage.getItem("coursdb")) : [],
        courChoix: localStorage.getItem("coursChoix") ? JSON.parse(localStorage.getItem("coursChoix")) : [],




    }),
    actions: {
        addChoice(tab, hor, jr,i) {
            let idc = hor + "-" + jr 
            let idci = hor + "-" + jr + "-" + i 
            let choix = ({ ...tab, idc: idc, idci: idci, hor: hor, jour: jr, activ: 1, totprice: tab.price })
            let fnd = this.courChoix.find(p => p.id == choix.id)

            //var x = document.getElementById("snackbar");
            if (fnd != undefined) {
                ''
            } else {
                let fndidc = this.courChoix.find(p => p.idc == choix.idc)
                //console.log('fndidc',fndidc);
                if (fndidc != undefined) {
                    let fnda = this.courChoix.find(p => p.idc == choix.idc)
                    //console.log('fnda',fnda.idc);
                    this.courChoix.splice(fnda, 1);
                } else {
                    let fndcid = this.courChoix.find(p => p.id == choix.id)
                    //console.log('fndcid',fndcid);
                    if (fndcid != undefined) {
                        let fnd = this.courChoix.find(p => p.id == choix.id)
                        this.courChoix.splice(fnd, 1);

                    } else {
                        this.courChoix.push(choix)
                    }
                }

            }

            localStorage.setItem("coursChoix", JSON.stringify(this.courChoix))
            let resultadd = JSON.parse(localStorage.getItem('coursChoix'))

            return resultadd
        },

        mesCoursChoix(cour, hor, jr, act) {
            this.courChoix = localStorage.getItem('coursChoix') ? JSON.parse(localStorage.getItem('coursChoix')) : []
            let active = act

            return !active

        },
        totalSomme(pan) {
            let TotalSom = 0
            pan.forEach((value) => {
                TotalSom += value.totprice
            })

            return TotalSom
        },


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
            state.courChoix = localStorage.getItem('coursChoix') ? JSON.parse(localStorage.getItem('coursChoix')) : []

            return state.courChoix

        },
        mesCoursActiv(state) {
            state.courChoix = localStorage.getItem('coursChoix') ? JSON.parse(localStorage.getItem('coursChoix')) : []
            //let active = []
            //let nb = state.NbCourChoice
            //console.log("nb", nb);
            //console.log("state.courChoix", state.courChoix)
            let fnd = state.courChoix.filter(p => p.activ == 1)

            //console.log("mesCoursActiv", fnd);
            const dataToReturn= fnd.map((item) => item.idci)
            //console.log({dataToReturn})
            return dataToReturn
        },
        sommeTotal: (state) => {
            state.courChoix = localStorage.getItem('coursChoix') ? JSON.parse(localStorage.getItem('coursChoix')) : []
            let TotalSom = 0
            state.courChoix.forEach((value) => {
                TotalSom += value.totprice
            })
            return TotalSom
        },




    }



})