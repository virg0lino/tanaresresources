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
        this.attack = [new Ataque()];
        this.hasSpecial = false;
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

        this.attack[0].handpowercp = 0;
        this.attack[0].beneficiocp = 0;
        this.attack[0].penalidadecp = 0;
        switch (level.id) {
            case 1:
                this.attack[0].danoerro = 5;
                break;
            case 2:
                this.attack[0].danoerro = 8;
                break;
            case 3:
                this.attack[0].danoerro = 10;
                break;
            default:
                this.attack[0].danoerro = 0;
                break;
        }
        this.attack[0].danoacerto = this.dg;
        this.attack[0].efeitocp = 0;
        this.attack[0].capacidadepoder = 0;
    }

    get cor() {
        return this._cor;
    }
    set cor(color) {
        this._cor = color;
        this.cp = this.level.cp + color.cp;
    }

    addAtaque(ataque) {
        this.attack.push(ataque);
    }

    dropAtaque(index) {
        this.cp -= this.attack[index].capacidadepoder;
        this.attack.splice(index, 1);
    }

    changeCP(valor) {
        this.cp -= valor;
    }

    changeHP(valor) {
        this.cp -= valor;
        this.hp += valor * 5;
    }

    changeBA(valor) {
        this.cp -= valor;
        this.ba += valor;
    }

    changeDG(valor) {
        this.cp -= valor;
        this.dg += valor;
    }

    changeDF(valor) {
        this.cp -= valor;
        this.def += valor;
    }

    changeFCP(valor) {
        this.cp -= valor;
        this.fcp += valor;
    }

    changeACP(valor) {
        this.cp -= valor;
        this.acp += valor;
    }
}