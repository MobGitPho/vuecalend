<template>
    <div class="acceuil">
        <div class="brand"> CALENDRIER
        </div>
        <div class="linebrand">
        </div>
        <div class=" navbar">
            <div class="navl">
                <h4>SESSION DECEMBRE 2022</h4>
            </div>
            <div class="navcent">
                <h4>04 dec. 2022 - 19 janv. 2023</h4>
            </div>
            <div class="navr">
                <span>{{ TotalSom }} £</span><button @click="inscription">
                    <RouterLink to="/vuecalend/">S'inscrire</RouterLink>
                </button>
            </div>

        </div>
        <div class=" row col-12 calend">
            <table>
                <tr>
                    <th>Horaire</th>
                    <th>Lundi</th>
                    <th>Mardi</th>
                    <th>Mercredi</th>
                    <th>Jeudi</th>
                    <th>Vendredi</th>
                    <th>Samedi</th>
                    <th>Dimanche</th>
                </tr>
                <tbody class="tbody">
                    <tr v-for="hr, in allCours" :key="hr">
                        <td class="horaire horairecol">
                            {{ hr.horaire }} H
                        </td>
                        <td class="horairecol" v-for="ls in hr.cours" :key="ls">
                            <div id="btnline" v-for="(lss, i) in ls" :key="lss"
                                :class="{ 'active': (Object.values(activCour).includes((`${hr.id}-${lss.jour}-${i}`))) }"
                                @click="addUnCour(lss, hr.id, lss.jour, i, activCour)">
                                {{ lss.name }}

                            </div>
                        </td>
                        <!--td class="horairecol"  idc == ((hr.id) + '-' + (lss.jour))  ((activCour.jour === lss.jour) && (activCour.id === lss.id) && (activCour.hor === hr.id))>
                            <div class="btnline" >
                                MASQ
                            </div>
                        </td>
                        <td class="horairecol">
                            <div class="btnline">
                                Salsa 2
                            </div>
                            <div class="btnline">
                                Kiz 1
                            </div>
                            <div class="btnline">
                                Raete 4
                            </div>
                        </td>
                        <td class="horairecol">
                            <div class="btnline">
                                Salsa 2
                            </div>
                            <div class="btnline">
                                Kiz 1
                            </div>
                            <div class="btnline">
                                Raete 4
                            </div>
                        </td>
                        <td class="horairecol">
                            <div class="btnline">
                                Kiz 1
                            </div>
                            <div class="btnline">
                                Salsa 4
                            </div>
                        </td>
                        <td class="horairecol">

                        </td>
                        <td class="horairecol">

                        </td>
                        <td class="horairecol">
                            <div class="btnline">
                                Salsa 2
                            </div>
                            <div class="btnline">
                                Kiz 3
                            </div>
                            <div class="btnline">
                                Salsa 4
                            </div>
                        </td-->
                    </tr>
                    <!--div class="program">
                            <td>

                            </td>
                            <td>
                                <div class="btnline">
                                    Salsa 1
                                </div>
                                <div class="btnline">
                                    Kiz 1
                                </div>
                                <div class="btnline">
                                    Salsa 4
                                </div>
                            </td>
                            <td>
                                <div class="btnline">
                                    Salsa 2
                                </div>
                                <div class="btnline">
                                    Kiz 1
                                </div>
                                <div class="btnline">
                                    Raete 4
                                </div>
                            </td>
                            <td>
                                <div class="btnline">
                                    Kiz 1
                                </div>
                                <div class="btnline">
                                    Salsa 4
                                </div>
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                <div class="btnline">
                                    Salsa 2
                                </div>
                                <div class="btnline">
                                    Kiz 3
                                </div>
                                <div class="btnline">
                                    Salsa 4
                                </div>
                            </td>

                        </div-->
                    <!--tr>
                        <td class="horaire">
                            19 : 15
                        </td>
                        <div class="program">
                            <td>

                            </td>
                            <td>
                                <div class="btnline">
                                    Kiz 2
                                </div>
                                <div class="btnline">
                                    Ruead 3
                                </div>
                                <div class="btnline">
                                    Ruead 4
                                </div>
                            </td>
                            <td>
                                <div class="btnline">
                                    Bachata 2
                                </div>
                                <div class="btnline">
                                    Salsa 3
                                </div>
                                <div class="btnline">
                                    Salsa 1
                                </div>
                            </td>
                            <td>
                                <div class="btnline">
                                    Salsa 2
                                </div>
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                <div class="btnline">
                                    Bachata 2
                                </div>
                                <div class="btnline">
                                    Rueadf 3
                                </div>
                            </td>

                        </div>
                    </tr-->
                </tbody>



            </table>
        </div>

        <div class=" aboutform">
            <div class="about">
                <div class="nousecrire">
                    <div class="nous">
                        NOUS
                    </div>
                    <div class="ecrire">
                        ECRIRE
                    </div>


                </div>
                <span>Envoyez-nous vos demandes</span>

            </div>
            <div class="form">
                <form @submit.prevent="">
                    <div class="Forminput">
                        <div class="inputbox">
                            <input type="text" name="Nom" placeholder="Nom">
                            <input type="email" name="Email" placeholder="Email">
                        </div>
                        <div class="inputbox">
                            <input type="text" name="Tel" placeholder="Telephone">
                            <input type="text" name="Sujet" placeholder="Sujet">
                        </div>
                        <textarea name="" id="" placeholder="Message"></textarea>

                    </div>
                    <div class="buttonsubmit">
                        <button @click="inscription">Envoyer</button>
                    </div>
                </form>
            </div>

        </div>


    </div>
</template>

<script>
import { ref } from 'vue';
import { useCourStore } from '../stores/cours.js';
export default {

    setup() {
        const coursDb = useCourStore()
        const allCours = ref('')
        const mesCours = ref([])
        let TotalSom = ref(0);
        let activCour = ref([])

        allCours.value = coursDb.mesHoraires
        mesCours.value = coursDb.mesCours
        TotalSom.value = coursDb.sommeTotal ? coursDb.sommeTotal : 0
        activCour.value = coursDb.mesCoursActiv


        const addUnCour = function (cour, hor, jour, i) {
            mesCours.value = coursDb.addChoice(cour, hor, jour, i)
            TotalSom.value = coursDb.totalSomme(mesCours.value)

            activCour.value = coursDb.mesCoursActiv
            //console.log("activCour", (Object.values(activCour.value)));
            //let mid = (`${hor}-${jour}-${i}`)
            //console.log("activCourInclude", (Object.values(activCour.value)).includes(mid));
            //console.log("idci", mid);
        }

        return {
            coursDb,
            allCours,
            mesCours,
            addUnCour,
            TotalSom,
            activCour,


        }
    }
}
</script>

<style lang="scss" scoped>
.acceuil {
    background-color: white;
}

.brand {
    text-align: center;
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 2%;
}

.linebrand {

    width: 10%;
    //border-top: 1px solid black;



}

.navbar {
    width: 100%;
    height: auto;
    background-color: rgb(252, 246, 246);
    display: inline-flex;
    justify-content: space-between;
    padding: 10px;

    .navl {
        float: left;
        text-decoration: none;
        font-size: 1em;
        text-align: center;

        h4 {
            padding: 5px;
            text-decoration-color: rgba(0, 0, 0, 0.9);
            font-weight: bold;
        }

    }

    .navcent {
        font-size: 1em;
        text-align: center;

        h4 {
            padding: 5px;
            text-decoration-color: rgba(0, 0, 0, 0.9);
            font-weight: bold;
        }
    }

    .navr {
        span {
            font-size: 1.0em;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
        }

        button {
            display: flex;
            justify-content: center;
            align-content: center;
            width: auto;
            border-radius: 5px;
            border: none;
            padding: 10px;
            font-size: 1em;
            background-color: rgba(#09023f, 0.9);
            color: rgba(#f3f2f2, 1.0);
            cursor: pointer;

            a {
                text-decoration: none;
                color: rgba(#f3f2f2, 1.0);
                cursor: pointer;
            }
        }
    }

}

.calend {
    width: 100%;
    height: auto;
    margin-bottom: 1.5%;

    table {
        width: 100%;
        height: auto;
        border: 1px solid gray;
        border-spacing: 1px;
        border-spacing: 0px;

        th {
            width: 12.5%;
            background-color: rgba(#09023f, 0.9);
            color: rgba(#ffff, 0.9);
            border: 1px gray;
            border: 1px solid white;
            padding: 10px;
        }

        .tbody {
            border: 1px solid gray;
            border-spacing: 1px;
            cursor: pointer;

            tr {
                width: auto;
                height: auto;
                border-spacing: 1px;
                border: 1px solid gray;
                padding: 15px;

                .horaire {
                    width: 10%;
                    text-align: center;
                }

                .horairecol {
                    cursor: pointer;
                    color: black;
                    font-size: 1em;
                    text-align: center;
                    padding: 5px;
                    width: auto;
                    height: auto;
                    border: 1px solid gray;
                    //padding: 10px;


                    #btnline {
                        display: grid;
                        justify-items: center;
                        justify-content: center;
                        border: 1px solid black;
                        background-color: white;
                        margin-bottom: 5px;
                        width: 100%;
                        height: auto;
                        cursor: pointer;
                        color: black;
                        //padding: 5px;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        padding-left: 10px;
                        padding-right: 10px;

                        &.active {
                            background-color: #fd0c2c;
                            color: rgba(255, 255, 255, 1);
                            text-decoration: none;
                            font-size: 1.2em;
                            font-weight: bold;

                        }
                    }



                }

            }
        }

    }

}

.aboutform {
    width: 100%;
    height: 200px;
    padding: 0%;
    display: -webkit-inline-box;
    justify-content: center;
    align-content: center;

    .about {
        width: 34%;
        height: 200px;
        background-color: #3d3196;
        //border: 1px solid black;
        margin-right: 1%;
        color: white;
        text-align: center;

        //display: grid;
        //justify-content: center;
        //align-content: center;
        .nousecrire {
            margin-top: 10%;
            height: auto;
            width: auto;
            //border: 1px solid red;

            display: flex;
            justify-content: center;

            .nous {
                margin-right: 10px;
                padding-bottom: 10px;
                border-bottom: 1px solid white;
                height: auto;

            }
        }

        span {
            margin-top: 10%;
            margin-bottom: 20%;
            display: flex;
            justify-content: center;
            font-size: 1em;
        }

    }

    .form {
        width: 64%;
        height: auto;
        background-color: #a1a1a3;
        //border: 1px solid black;
        padding: 10px;

        .Forminput {
            margin-left: 5%;

            .inputbox {
                display: flex;
                align-content: center;

                input[type=text],
                select {
                    width: 45%;
                    padding: 5px;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                    margin-top: 6px;
                    margin-bottom: 6px;
                    margin-right: 5%;
                    resize: vertical;
                }



            }

            textarea {
                width: 95%;
                padding: 5px;
                border: 1px solid #ccc;
                box-sizing: border-box;
                margin-top: 6px;
                margin-bottom: 6px;
                //margin-right: 5%;
                resize: vertical;
            }

            input[type=email] {
                width: 45%;
                padding: 5px;
                border: 1px solid #ccc;
                box-sizing: border-box;
                margin-top: 6px;
                margin-bottom: 6px;
                resize: vertical;
            }

        }

        .buttonsubmit {
            margin-top: 10px;
            //margin-bottom: 5%;
            margin-left: 5%;

            button {
                width: auto;
                border: none;
                padding: 7px;
                font-size: 1em;
                background-color: rgba(#e00909, 0.9);
                color: rgba(#f3f2f2, 1.0);
                cursor: pointer;

            }
        }
    }
}

@media screen and (max-width: 425px) {

    .calend {
        overflow-x: scroll;
    }

    .aboutform {
        width: 100%;
        height: 200px;
        padding: 0%;
        display: -webkit-inline-box;
        justify-content: center;
        align-content: center;

        .about {
            width: 34%;
            height: 200px;
            background-color: #3d3196;
            //border: 1px solid black;
            margin-right: 1%;
            color: white;
            text-align: center;

            //display: grid;
            //justify-content: center;
            //align-content: center;
            .nousecrire {
                margin-top: 10%;
                height: auto;
                width: auto;
                //border: 1px solid red;

                display: grid;
                justify-content: center;

                .nous {
                    margin-right: 10px;
                    margin-bottom: 5px;
                    padding-bottom: 2px;
                    border-bottom: 1px solid white;
                    height: auto;

                }
            }

            span {
                margin-top: 10%;
                margin-bottom: 20%;
                display: flex;
                justify-content: center;
                font-size: 1em;
            }

        }

        .form {
            width: 64%;
            height: auto;
            background-color: #a1a1a3;
            //border: 1px solid black;
            padding: 10px;

            .Forminput {
                margin-left: 5%;

                .inputbox {
                    display: flex;
                    align-content: center;

                    input[type=text],
                    select {
                        width: 45%;
                        padding: 5px;
                        border: 1px solid #ccc;
                        box-sizing: border-box;
                        margin-top: 6px;
                        margin-bottom: 6px;
                        margin-right: 5%;
                        resize: vertical;
                    }



                }

                textarea {
                    width: 95%;
                    padding: 5px;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                    margin-top: 6px;
                    margin-bottom: 6px;
                    //margin-right: 5%;
                    resize: vertical;
                }

                input[type=email] {
                    width: 45%;
                    padding: 5px;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                    margin-top: 6px;
                    margin-bottom: 6px;
                    resize: vertical;
                }

            }

            .buttonsubmit {
                margin-top: 10px;
                //margin-bottom: 5%;
                margin-left: 5%;

                button {
                    width: auto;
                    border: none;
                    padding: 7px;
                    font-size: 1em;
                    background-color: rgba(#e00909, 0.9);
                    color: rgba(#f3f2f2, 1.0);
                    cursor: pointer;

                }
            }
        }
    }

}
</style>