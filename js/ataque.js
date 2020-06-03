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

    changeDG(valor) {
        let fator = valor/2;
        this.capacidadepoder -= fator;

        if (valor > 0) {
            this.danoacerto += 2/2;
        } else {
            this.danoacerto -= 2/2;
        }
        return fator;
    }

    changeMDG(valor) {
        let fator = valor/2;
        this.capacidadepoder -= fator;

        if (valor > 0) {
            this.danoerro += 1;
        } else {
            this.danoerro -= 1;
        }
        return fator;
    }

    changeHCP(valor) {
        let fator = valor/2;
        this.capacidadepoder -=fator;
        this.handpowercp += fator;
        return fator;
    }

    changeBCP(valor) {
        let fator = valor/2;
        this.capacidadepoder -= fator;
        this.beneficiocp += fator;
        return fator;
    }
        
    changePCP(valor) {
        let fator = valor/2;
        this.capacidadepoder -= fator;
        this.penalidadecp += fator;
        return fator;
    }

    changeECP(valor) {
        let fator = valor/2;
        this.capacidadepoder -= fator;
        this.efeitocp += fator;
        
        return fator;
    }

    changeCP(valor) {
        this.capacidadepoder += valor;
        return valor;
    }

}