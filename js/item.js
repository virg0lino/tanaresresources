class Item {
    constructor(myobj) {
        this.id = myobj.id,
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
        this.Propertycp = 0;
    }

    changeDG(valor) {
        this.capacidadepoder -= valor;
        this.dano += valor;
    }

    changeATT(valor) {
        this.capacidadepoder -= valor;
        this.ataque += valor;
    }

    changeDEF(valor) {
        this.capacidadepoder -= valor;
        this.defesa += valor;
    }

    changeHP(valor) {
        this.capacidadepoder -= valor;
        this.hp += valor * 5;
    }

    changePCP(valor) {
        this.capacidadepoder -= valor;
        this.Propertycp += valor;
    }

    changeCP(valor) {
        this.capacidadepoder += valor;
    }

}