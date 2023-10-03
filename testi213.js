
class henkilo {
    constructor(etuN, sukuN, kutsumaN, syntymaAika){
        this.etuN = etuN;
        this.sukuN = sukuN;
        this.kutsumaN = kutsumaN;
        this.syntymaAika = syntymaAika;

    }
}

class urheilija extends henkilo {
    constructor(etuN, sukuN, kutsumaN, syntymaAika, linkkiKuvaan, omapaino, laji, saavutukset) {
        super(etuN, sukuN, kutsumaN, syntymaAika);
        this.omapaino = omapaino;
        this.laji = laji;
        this.saavutukset = saavutukset;
    }
    getLinkkiKuvaan() {
        return this.linkkiKuvaan;
    }

    setLinkkiKuvaan(newLink) {
        this.linkkiKuvaan = newLink;
    }

    getOmaPaino() {
        return this.omapaino;
    }
   
    setOmaPaino(newWeight) {
        this.omapaino = newWeight;
    }

    getLaji() {
        return this.laji;
    }

    setLaji(newSport) {
        this.laji = newSport;
    }

    getSaavutukset() {
        return this.saavutukset;
    }

    setSaavutukset(newAchievements) {
        this.saavutukset = newAchievements;
    }
}

//luodaan  esimerkki urheilija
const urheilijaTesti123 = new urheilija("matti","meikalainen","maza","1234.5.6","image312.png",95.2 ,"painonnosto","SM kultaa 2020");

//tarkistetaan paino ja laji
console.log(urheilijaTesti123.getOmaPaino() + "kg ja lahi on " + urheilijaTesti123.getLaji());




