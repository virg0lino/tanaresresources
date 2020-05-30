class Monstro {
    constructor() {
        this._level = {};
        this._cor = "";
        this.nome = "";
        this.categoria = "";
        this.fp = 0;
        this.hp = 0;
        this.ba = 0;
        this.def = 0;
        this.dg = 0;
        this.cp = 0;
        this.fcp = 0;
        this.acp = 0;
        this.mv = 6;
        this.mvcp = 0;
        this.feature = "";
        this.attack = [];
        this.strategy = "";
    }

    get level() {
        return this._level;
    }

    set level(level) {
        this._level = level;
        this.hp = level.hp;
        this.ba = level.ba;
        this.def = level.def;
        this.dg = level.dg;
        this.cp = level.cp + this.cor.cp;
        this.fcp = 0;
        this.acp = 0;
    }

    get cor() {
        return this._cor;
    }
    set cor(color) {
        this._cor = color;
        this.cp = this.level.cp + color.cp;
    }

    addAtaque(ataque){
        this.attack.push(ataque);
    }

    dropAtaque(index){
        this.cp -= this.attack[index].capacidadepoder;
        this.attack.splice(index, 1);
    }

    changeCP(valor){
        this.cp -=valor;
    }

    changeHP(valor) {
        this.cp -= valor;

        if (valor > 0) {
            this.hp += 5;
        } else {
            this.hp -= 5;
        }
    }

    changeBA(valor) {
        this.cp -= valor;

        if (valor > 0) {
            this.ba += 1;
        } else {
            this.ba -= 1;
        }
    }

    changeDG(valor) {
        this.cp -= valor/2;

        if (valor > 0) {
            this.dg += 2/2;
        } else {
            this.dg -= 2/2;
        }
    }

    changeDF(valor) {
        this.cp -= valor;

        if (valor > 0) {
            this.def += 1;
        } else {
            this.def -= 1;
        }
    }

    changeFCP(valor) {
        this.cp -= valor/2;
        this.fcp += valor/2;
    }

    changeACP(valor) {
        this.cp -= valor/2;
        this.acp += valor/2;
    }
}