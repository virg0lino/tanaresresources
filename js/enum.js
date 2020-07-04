var fontesPoder = ["Dark", "Martial", "Primal ", "Mystic"];
var tiposItens = ["Weapon", "Armor"];
var categoriaArma = ["Meele", "Ranged"];
var categoriaArmadura = ["Heavy", "Light"];
var Proficiency = ["Tank", "Bruiser", "Brute", "Tactician", "Shooter", "Commander", "Controller", "Healer"];
var itemlevels = [
    { id: 1, cp: 2 },
    { id: 2, cp: 3 },
    { id: 3, cp: 5 },
];
var monsterCategory = ["Magic Beast", "Undead", "Humanoid", "Boss"];
var monsterlevels = [
    { id: 1, hp: 30, ba: 7, def: 6, dg: 12, cp: 2, attackroll: 0 },
    { id: 2, hp: 40, ba: 9, def: 8, dg: 15, cp: 3, attackroll: 1 },
    { id: 3, hp: 50, ba: 11, def: 10, dg: 18, cp: 4, attackroll: 2 },
];
var monstercolors = [
    { id: 0, cor: 'verde', color: 'green', cp: 1 },
    { id: 1, cor: 'azul', color: 'blue', cp: 1 },
    { id: 2, cor: 'laranja', color: 'orange', cp: 2 },
    { id: 3, cor: 'vermelho', color: 'red', cp: 2 },
];
var alcances = ["1", "2", "8"];
var attacklevels = [
    { id: 1, danoacerto: 14 },
    { id: 1, danoacerto: 14 },
    { id: 2, danoacerto: 18 },
    { id: 3, danoacerto: 22 },
];

var skilllevels = [
    { id: 1, cp: 2 ,color: 'LIGHTGRAY'},
    { id: 1, cp: 2 ,color: 'LIGHTGRAY'},
    { id: 1, cp: 2 ,color: 'LIGHTGRAY'},
    { id: 2, cp: 5 ,color: 'GOLDENROD'},
    { id: 2, cp: 5 ,color: 'GOLDENROD'},
    { id: 3, cp: 8 ,color: 'SKYBLUE'},
];

var ItensMenu=[
    {
        title:"SKILL TREE",
        subtitle:"CHOSE YOUR PATH",
        description:"Construa as arvores de habiilidades que os herois escolherão, ajude-os a trilhar o melhor caminho.",
        image:"img/skilltree.jpg",
        url:"skilltree.html",
        isnew:true
    },
    {
        title:"ITEM SET",
        subtitle:"FORGE POWER",
        description:"A grande forja onde você poderá criar itens unicos que serão escolhidos a cada missão, aumentando o poder dos herois e danocada vez mais variabilidade as partidas",
        image:"img/item.jpg",
        url:"item.html"
    },
    {
        title:"ATTACK SET",
        subtitle:"BUILD POSSIBILITIES",
        description:"Construa ataques que trarão escolhas e versatilidade para o gameplay, e farão nossos herois poderosos",
        image:"img/ataque.jpg",
        url:"ataque.html"
    },
    {
        title:"MONSTERS SET",
        subtitle:"INSPIRE FEAR",
        description:"Construa monstros, que irão desafiar os jogadores e os farão pensar em cada movimento",
        image:"img/monstro.jpg",
        url:"monstro.html"
    },
]