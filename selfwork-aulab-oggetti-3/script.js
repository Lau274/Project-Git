let bowling = {
    giocatori : [
        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}
    ],
    punteggi() {
    for (let giocatore of this.giocatori){
        for (let i=0;i<10;i++){
        giocatore.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1))
}
        console.log(giocatore.scores)
        }
    },
    punteggio_finale() {
        
    for (let giocatore of this.giocatori){
        let finale = 0
        for(let i = 0;i<giocatore.scores.length;i++){
            finale += giocatore.scores[i]
        }
        giocatore.totale = finale
        console.log(giocatore.totale)
        }
        
    },
        aggiungiGiocatore(nome) {

        let nuovoGiocatore = {
            name: nome,
            scores: []
        }

        for (let i = 0; i < 10; i++) {

            let punteggio = Math.floor(Math.random() * 10) + 1
            nuovoGiocatore.scores.push(punteggio)
        }
        this.giocatori.push(nuovoGiocatore)
    },


    vincitore() {

        this.punteggio_finale()
        this.giocatori.sort((a, b) => b.totale - a.totale)
        console.log(
            `Il vincitore è ${this.giocatori[0].name} con ${this.giocatori[0].totale} punti`
        )
    },

    classifica() {

        this.punteggio_finale()
        this.giocatori.sort((a, b) => b.totale - a.totale)
        for (let i = 0; i < this.giocatori.length; i++) {

            console.log(
                `${i + 1}° ${this.giocatori[i].name}: ${this.giocatori[i].totale} punti`
            )
        }
    }
}


bowling.punteggi()
bowling.punteggio_finale()
bowling.aggiungiGiocatore("Mario")
bowling.classifica()
bowling.vincitore()