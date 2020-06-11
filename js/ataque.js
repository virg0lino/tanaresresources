class Ataque {
    constructor() {
        this.nome = "";
        this._level = {};
        this.fontedepoder = [];
        this.alcance = "";
        this.alvo = "";
        this.handpower = "";
        this.handpowercp = 0;
        this.beneficio = "";
        this.beneficiocp = 0;
        this.penalidade = "";
        this.penalidadecp = 0;
        this.danoacerto = 0;
        this.danoerro = 0;
        this.efeito = "";
        this.efeitocp = 0;
        this.capacidadepoder = 0;
    }

    get level() {
        return this._level;
    }

    set level(level) {
        this._level = level;
        this.danoacerto = level.danoacerto;
    }

    setMissForLevl() {
        switch (this._level.id) {
            case 1:
                this.danoerro = 5;
                break;
            case 2:
                this.danoerro = 8;
                break;
            case 3:
                this.danoerro = 10;
                break;
            default:
                break;
        }
    }

    changeDG(valor) {
        let fator = valor;
        this.capacidadepoder -= fator;
        this.danoacerto += valor;

        return fator;
    }

    changeMDG(valor) {
        let fator = valor;
        this.capacidadepoder -= fator;
        this.danoerro += fator;

        return fator;
    }

    changeHCP(valor) {
        let fator = valor;
        this.capacidadepoder -= fator;
        this.handpowercp += fator;

        return fator;
    }

    changeBCP(valor) {
        let fator = valor;
        this.capacidadepoder -= fator;
        this.beneficiocp += fator;

        return fator;
    }

    changePCP(valor) {
        let fator = valor;
        this.capacidadepoder -= fator;
        this.penalidadecp += fator;

        return fator;
    }

    changeECP(valor) {
        let fator = valor;
        this.capacidadepoder -= fator;
        this.efeitocp += fator;

        return fator;
    }

    changeCP(valor) {
        this.capacidadepoder += valor;

        return valor;
    }

}