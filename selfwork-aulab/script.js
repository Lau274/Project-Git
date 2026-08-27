let agenda = {

    contacts: [
        { nome: "Nicola", telefono: "3331111111" },
        { nome: "Lorenzo", telefono: "3332222222" },
        { nome: "Paola", telefono: "3333333333" },
        { nome: "Jenny", telefono: "3334444444" }
    ],

    mostraTutti() {

        for (let contatto of this.contacts) {
            console.log(contatto.nome, contatto.telefono)
        }

    },

    mostraContatto(nome) {

        for (let contatto of this.contacts) {

            if (contatto.nome === nome) {
                console.log(contatto.nome, contatto.telefono)
                return
            }

        }
        console.log("Contatto non trovato")
    },

    eliminaContatto(nome) {

        for (let i = 0; i < this.contacts.length; i++) {

            if (this.contacts[i].nome === nome) {
                this.contacts.splice(i, 1)
                return
            }

        }

        console.log("Contatto non trovato")
    },

    aggiungiContatto(nome, telefono) {

        let nuovoContatto = {
            nome: nome,
            telefono: telefono
        }

        this.contacts.push(nuovoContatto)

    },

    modificaContatto(nome, nuovoTelefono) {

        for (let contatto of this.contacts) {

            if (contatto.nome === nome) {
                contatto.telefono = nuovoTelefono
                return
            }
        }
        console.log("Contatto non trovato")
    }
}
