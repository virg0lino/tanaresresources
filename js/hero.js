class Hero {
    constructor() {
        this.name = "";
        this._atributosrole = {};
        this._passivarole = {};

        this.hp = new Field(0, 0);
        this.ba = new Field(0, 0);
        this.df = new Field(0, 0);
        this.mv = new Field(0, 0);
        this.range = "";

        this.passiva = {};

        let primaryone = new Attack();
        primaryone.tipo = new Field("Primary Attack", 14);

        let primarytwo = new Attack();
        primarytwo.tipo = new Field("Primary Attack", 14);

        let specialone = new Attack();
        specialone.tipo = new Field("Special Attack", 28);

        let specialtwo = new Attack();
        specialtwo.tipo = new Field("Special Attack", 28);

        this.attacks = [primaryone, primarytwo, specialone, specialtwo];

        this.companion = new Companion();

        this.atributosrole = Role[0];
        this.passivarole = Role[0];

    }

    load(item) {
        this.name = item.name;
        this._atributosrole = item._atributosrole;
        this._passivarole = item._passivarole;

        this.hp = item.hp;
        this.ba = item.ba;
        this.df = item.df;
        this.mv = item.mv;
        this.range = item.range;

        this.passiva = item.passiva;
        this.attacks = [];
        for (const attack of item.attacks) {
            let newattaque = new Attack();
            newattaque.load(attack);
            this.attacks.push(newattaque);
        }

        let novocompanion = new Companion();
        this.companion = novocompanion.load(item.companion);

        return this;
    }
    get atributosrole() {
        return this._atributosrole;
    }

    set atributosrole(value) {
        this._atributosrole = value;
        this.hp = this._atributosrole.atributos.hp;
        this.ba = this._atributosrole.atributos.ba;
        this.df = this._atributosrole.atributos.df;
        this.mv = this._atributosrole.atributos.mv;
    }

    get passivarole() {
        return this._passivarole;
    }
    set passivarole(value) {
        this._passivarole = value;
        this.passiva = this._passivarole.passiva;
    }

    changeHP(value) {
        this.hp.value += value;
    }

    changeBA(value) {
        this.ba.value += value;
    }

    changeDF(value) {
        this.df.value += value;
    }

    changeMV(value) {
        this.mv.value += value;
    }

    getRangeDescription() {
        let descriptio = "";
        switch (this.range) {
            case "1":
                descriptio = "MEELE(1)";
                break;
            case "2":
                descriptio = "MEELE(2)";
                break;
            case "8":
                descriptio = "RANGED";
                break;
        }
        return descriptio;
    }
}

class Companion {
    constructor() {
        this.name = "";

        this.hp = new Field(0, 0);
        this.ba = new Field(0, 0);
        this.df = new Field(0, 0);
        this.mv = new Field(0, 0);
        this.range = "";

        this.specialFeature = {
            name: "",
            effect: new Field("", 0)
        };

        this.attacks = [];
    }

    load(item) {
        this.name = item.name;

        this.hp = item.hp;
        this.ba = item.ba;
        this.df = item.df;
        this.mv = item.mv;
        this.range = item.range;
        this.specialFeature = item.specialFeature;

        this.attacks = [];
        for (const attack of item.attacks) {
            let newattaque = new Attack();
            newattaque.load(attack);
            this.attacks.push(newattaque);
        }
        return this;

    }

    changeEffectCp(value) {
        this.specialFeature.effect.cp += value;
    }

    addAttack() {
        let primary = new Attack();
        primary.tipo = new Field("Primary Attack", 0);
        this.attacks.push(primary);
    }
    dropAttack(index) {
        this.attacks.splice(index, 1);
    }

    changeHP(value) {
        this.hp.value += value;
    }

    changeBA(value) {
        this.ba.value += value;
    }

    changeDF(value) {
        this.df.value += value;
    }

    changeMV(value) {
        this.mv.value += value;
    }

    getRangeDescription() {
        let descriptio = "";
        switch (this.range) {
            case "1":
                descriptio = "MEELE(1)";
                break;
            case "2":
                descriptio = "MEELE(2)";
                break;
            case "8":
                descriptio = "RANGED";
                break;
        }
        return descriptio;
    }
}

class Attack {
    constructor() {
        this.name = "";
        this.tipo = new Field("", 0);
        this.range = "";
        this.target = "";
        this.numberTarget = 1;
        this.benefit = new Field("", 0);
        this.drawback = new Field("", 0);
        this.hit = new Field(0, 0);
        this.effect = new Field("", 0);
        this.miss = new Field("", 0);
        this.totalCp = 0;
    }

    load(item) {
        this.name = item.name;
        this.tipo = item.tipo;
        this.range = item.range;
        this.target = item.target;
        this.numberTarget = item.numberTarget;
        this.benefit = item.benefit;
        this.drawback = item.drawback;
        this.hit = item.hit;
        this.effect = item.effect;
        this.miss = item.miss;
        this.totalCp = item.totalCp;

        return this;
    }

    updateCp() {
        //calculo do multiplo target
        let hitcp = this.hit.cp;
        if (this.numberTarget > 1) {
            let adicionalcp = hitcp / 2;
            hitcp += adicionalcp * (this.numberTarget - 1)
        }

        this.totalCp = this.benefit.cp + this.drawback.cp + hitcp + this.effect.cp + this.miss.cp;
    }
    changeNumberTarget(value) {
        this.numberTarget += value;
        this.updateCp();
    }

    changeBenefitCp(value) {
        this.benefit.cp += value;
        this.updateCp();
    }
    changeDrawbackCp(value) {
        this.drawback.cp += value;
        this.updateCp();
    }
    changeHitCp(value) {
        this.hit.cp += value;
        this.hit.value += value;
        this.updateCp();
    }
    changeEffectCp(value) {
        this.effect.cp += value;
        this.updateCp();
    }
    changeMissCp(value) {
        this.miss.cp += value;
        this.updateCp();
    }
   
}

class Field {
    constructor(value, cp) {
        this.value = value;
        this.cp = cp;
    }
}

var ranges = ["1", "2", "8"];

var Role = [
    {
        name: "Brute",
        atributos: {
            hp: new Field(65, 0),
            ba: new Field(8, 0),
            df: new Field(6, 0),
            mv: new Field(6, 0)
        },
        passiva: {
            name: "Brutality",
            trigger: "Hit a target that isn’t adjacent to any of your allies (on your first hit of your turn).",
            effect: "Target takes 4 damage",
        }
    },
    {
        name: "Bruiser",
        atributos: {
            hp: new Field(65, 0),
            ba: new Field(8, 0),
            df: new Field(7, 0),
            mv: new Field(5, 0)
        },
        passiva: {
            name: "Circle of Retribution",
            trigger: "Enemy starts its turn adjacent to you and includes you as a target of its attack",
            effect: " Enemy takes 4 damage. This can’t lower its HP below 1.",
        }
    },
    {
        name: "Tactician",
        atributos: {
            hp: new Field(60, 0),
            ba: new Field(7, 0),
            df: new Field(7, 0),
            mv: new Field(6, 0)
        },
        passiva: {
            name: "Tactics",
            trigger: "Hit a target that is adjacent to at least one of your allies (on your first hit of your turn)",
            effect: "Target takes 4 damage.",
        }
    },
    {
        name: "Tank",
        atributos: {
            hp: new Field(70, 0),
            ba: new Field(6, 0),
            df: new Field(8, 0),
            mv: new Field(6, 0)
        },
        passiva: {
            name: "Circle of Protection",
            trigger: " Enemy starts its turn adjacent to you and the first target of its attack isn’t you.",
            effect: "Enemy takes a -2 penalty to its first roll and 4 damage. This can’t lower its HP below 1.",
        }
    },
    {
        name: "Healer",
        atributos: {
            hp: new Field(60, 0),
            ba: new Field(6, 0),
            df: new Field(7, 0),
            mv: new Field(5, 0)
        },
        passiva: {
            name: "Hope",
            trigger: "Hit a target (on your first hit of your turn).",
            effect: " An ally within range may regain 4 HP but it can’t regain HP again this turn.",
        }
    },
    {
        name: "Shooter",
        atributos: {
            hp: new Field(55, 0),
            ba: new Field(8, 0),
            df: new Field(6, 0),
            mv: new Field(5, 0)
        },
        passiva: {
            name: "Accuracy",
            trigger: "Hit a target from at least 5 squares away (on your first hit of your turn).",
            effect: "Target takes 4 damage.",
        }
    },
    {
        name: "Controller",
        atributos: {
            hp: new Field(60, 0),
            ba: new Field(7, 0),
            df: new Field(6, 0),
            mv: new Field(5, 0)
        },
        passiva: {
            name: "Despair",
            trigger: "Hit a target (on your first hit of your turn).",
            effect: "Another enemy within 5 squares of you takes 4 damage.",
        }
    },
    {
        name: "Commander",
        atributos: {
            hp: new Field(55, 0),
            ba: new Field(6, 0),
            df: new Field(7, 0),
            mv: new Field(5, 0)
        },
        passiva: {
            name: "Companion",
            trigger: "Your initial position on the grid is determined.",
            effect: "Place your Companion on your team's half of the battlegrid, within 3 squares of you. On your turns, before or after your actions, the Companion may take a Move and Basic Attack.",
        }
    },
    {
        name: "Special",
        atributos: {
            hp: new Field(0, 0),
            ba: new Field(0, 0),
            df: new Field(0, 0),
            mv: new Field(0, 0)
        },
        passiva: {
            name: "",
            trigger: "",
            effect: "",
        }
    },
]
