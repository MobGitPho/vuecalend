<template>
    <div>
        <div class="loginborder">
            <h2> Connexion</h2>
            <div class="logstru">
                <h2 v-if="resultIns != ''">{{ resultIns }}</h2>
                <form @submit.prevent="">
                    <div>
                        <div class="Forminput">
                            <!--label for="fname">Prenoms</label>
                        <input type="text" id="fname" name="Prenoms" pattern="^[A-Za-z]+$" v-model="name">
                        <label id="fNom" class="falseM"></label><br>

                        <label for="lname">Nom</label>
                        <input type="text" id="lname" name="Nom" pattern="^[A-Za-z]+$" v-model="lastname">
                        <label id="Nom" class="falseM"></label><br-->

                            <label for="lname">Email</label>
                            <input type="email" id="" name="Email" v-model="mail">
                            <label id="femail" class="falseM"></label><br>

                            <label for="lname">Mot de Passe</label>
                            <input type="text" id="" name="Nom" v-model="password">
                            <label id="Nom" class="falseM"></label><br>

                            <!--label for="lname">Confirmation Mot de Passe</label>
                        <input type="password" id="lname" name="Nom" pattern="^[A-Za-z]+$" v-model="passwordc">
                        <label id="Nom" class="falseM"></label><br-->

                        </div>
                        <div class="buttonsubmit">
                            <button @click="inscription">Se Connecter</button>
                            <!--button @click="inscription">S'inscrire</button-->
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import router from '../router';
export default {
    setup() {
        const userDB = useUserStore();
        let name = ref('');
        let myDB = ref([]);
        let lastname = ref('');
        let mail = ref('');
        let password = ref('');
        let passwordc = ref('');
        let resultIns = ref('');

        myDB.value = userDB.userInfo



        const inscription = function (mail, pass) {
            mail = this.mail
            pass = this.password
            resultIns.value = userDB.connecter(mail, pass)

            router.push('/vuecalend/calendrier')
            //console.log("nam",nam);
        }

        return {
            userDB,
            myDB,
            name,
            lastname,
            mail,
            password,
            passwordc,
            inscription,
            resultIns,

        }
    }
}
</script>

<style lang="scss" scoped>
.loginborder {
    //border:  1px solid black ;
   // border: 1px solid black;
    
    border-radius: 5px;
    height: auto;
    width: auto;


    h2 {
        font-size: 2em;
        text-align: center;
        margin-bottom: 30px;
    }

    .logstru {
        //border: 2px solid blue;
        margin: 5% auto;
        padding: 5px auto;
        width: 60%;
        height: auto;
        border: 5px solid #3e28e9;
        border-radius: 5px;
        border-color: #3e28e9;

         .Forminput {
            margin-bottom: 5%;
            padding: 20px ;

            input[type=text],
            select,
            textarea {
                width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                resize: vertical;
            }

            input[type=email] {
                width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 5px;
                box-sizing: border-box;
                margin-top: 6px;
                margin-bottom: 6px;
                resize: vertical;
            }

            input[type=password] {
                width: 100%;
                padding: 12px;
                border: 1px solid #ccc;
                border-radius: 5px;
                box-sizing: border-box;
                margin-top: 6px;
                margin-bottom: 6px;
                resize: vertical;
            }

        }


        input[type=submit]:hover {
            background-color: #45a049;
        }

        .buttonsubmit {
            margin: 10px auto;
            display: flex;
            justify-content: center;

            button {
                width: auto;
                border-radius: 5px;
                padding: 10px;
                font-size: 1em;
                background-color: rgba(#8273f0, 0.9);
                color: rgba(#f3f2f2, 1.0);
                cursor: pointer;


            }
        }
    }
}
</style>