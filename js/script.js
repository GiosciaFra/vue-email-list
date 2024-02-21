// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista
// (non ci interessa che siano tutti diversi).
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue

createApp({
    data() {
        return {
            emails: [],

        }
    },

    mounted() {

        // utilizzo il ciclo for per chiamare 10 volte l'API con axios, ogni richiesta
        // viene aggiunta all'array [emails]
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((result) => {
                    this.emails.push({ success: result.data.success, 
                                      response: result.data.response });
                })
        }
    },

    }).mount('#app')