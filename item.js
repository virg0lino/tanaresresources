class Item {
    constructor(myobj) {
        this.id=myobj.id,
        this._level = myobj.level;
        this.proficiency = myobj.proficiency;
        this.bonus = myobj.bonus;
        this.nome = myobj.nome;
        this.Property = myobj.Property;
        this.Propertycp = myobj.Propertycp;

        this.fontesPoder = myobj.fontesPoder;
        this.tipo = myobj.tipo;
        this.categoria = myobj.categoria;
        this.dano = myobj.dano;
        this.ataque = myobj.ataque;
        this.hp = myobj.hp;
        this.defesa = myobj.defesa;

        this.capacidadepoder = myobj.capacidadepoder;
    }

    get level() {
        return this._level;
    }

    set level(level) {
        this._level = level;
        this.dano = 0;
        this.ataque = 0;
        this.hp = 0;
        this.defesa = 0;
        this.capacidadepoder = level.cp;
    }

    changeDG(valor) {
        this.capacidadepoder -= valor/2;

        if (valor > 0) {
            this.dano += 2/2;
        } else {
            this.dano -= 2/2;
        }
    }

    changeATT(valor) {
        this.capacidadepoder -= valor;

        if (valor > 0) {
            this.ataque += 1;
        } else {
            this.ataque -= 1;
        }
    }

    changeDEF(valor) {
        this.capacidadepoder -= valor;

        if (valor > 0) {
            this.defesa += 1;
        } else {
            this.defesa -= 1;
        }
    }

    changeHP(valor) {
        this.capacidadepoder -= valor/2;

        if (valor > 0) {
            this.hp += 10/2;
        } else {
            this.hp -= 10/2;
        }
    }
    changePCP(valor) {
        this.capacidadepoder -= valor/2;
        this.Propertycp += valor/2;
    }

    changeCP(valor) {
        this.capacidadepoder += valor;
    }

}