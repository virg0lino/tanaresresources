class Progressao {
    constructor() {
        this.nome = "";
        this._level = {};
        this.alcance = "";
        this.alvo = "";
        this.uso = "";
        this.usocp = 0;
        this.efeito = "";
        this.efeitocp = 0;
        this.capacidadepoder = 0;
        this.temp = false;
    }

    

    get level() {
        return this._level;
    }

    set level(level) {
        this._level = level;
        this.capacidadepoder = level.cp;
    }

    load(item){
        this.nome = item.nome;
        this._level = item._level;
        this.alcance = item.alcance;
        this.alvo = item.alvo;
        this.uso = item.uso;
        this.usocp = item.usocp;
        this.efeito = item.efeito;
        this.efeitocp = item.efeitocp;
        this.capacidadepoder =item.capacidadepoder;
        this.temp = item.temp;
    }

    changeUCP(valor) {
        let fator = valor;
        this.capacidadepoder -= fator;
        this.usocp += fator;
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