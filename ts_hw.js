// task
// Клас людина:
//   поля:
//     вага,зріст
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    return Human;
}());
// Клас депутат(наслідується від людини):
//   поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
var Deputat = /** @class */ (function (_super) {
    __extends(Deputat, _super);
    function Deputat(weight, height, surname, name, age, bravHabar, sizeHabar) {
        var _this = _super.call(this, weight, height) || this;
        _this.surname = surname;
        _this.name = name;
        _this.age = age;
        _this.bravHabar = bravHabar;
        _this.sizeHabar = sizeHabar | 0;
        return _this;
    }
    //   методи:
    //     дати хабаря(зробити відповідні перевірки...
    //       якщо депутат не хабарник то щоб він відмовився,
    //       або ж якщо сума хабаря надто велика то щоб він вагався
    //       чи брати чи ні)
    Deputat.prototype.giveHabar = function (money) {
        // if (this.bravHabar){
        //     console.log(`Депутат ${this.surname}- Давай сюди свої гроші`);
        // this.sizeHabar += money;
        // } else 
        if (!this.bravHabar && money > 100000) {
            console.log("\u0414\u0435\u043F\u0443\u0442\u0430\u0442 " + this.surname + " - \u043F\u043E\u0434\u0443\u043C\u0430\u0454");
        }
        else if (!this.bravHabar) {
            console.log("\u0414\u0435\u043F\u0443\u0442\u0430\u0442 " + this.surname + " - \u043D\u0435 \u0431\u0435\u0440\u0435 \u0445\u0430\u0431\u0430\u0440\u0456\u0432");
        }
        else {
            console.log("\u0414\u0435\u043F\u0443\u0442\u0430\u0442 " + this.surname + " - \u0437\u0430\u0431\u0438\u0440\u0430\u0454 \u0445\u0430\u0431\u0430\u0440");
            this.sizeHabar += money;
        }
    };
    return Deputat;
}(Human));
var ivanov = new Deputat(90, 180, 'Ivanov', 'Ivan', 35, true, 500000);
var petrov = new Deputat(120, 175, 'Petrov', 'Petro', 43, true, 1500000);
var smirnova = new Deputat(75, 183, 'Smirnova', 'Irina', 25, false);
var sidorov = new Deputat(95, 180, 'Sidorov', 'Sidor', 41, false);
var vasiliev = new Deputat(100, 176, 'Vasiliev', 'Visil', 29, true, 200000);
var nikolaev = new Deputat(105, 178, 'Nikolaev', 'Nikolay', 56, true, 1000000);
nikolaev.giveHabar(500000);
console.log(nikolaev);
console.log('Habar 100 000');
sidorov.giveHabar(100000);
console.log('_________________');
console.log('Habar 1 000 000');
console.log('_________________');
sidorov.giveHabar(1000000);
console.log(sidorov);
// Клас фракція
//   поля:
//     список депутатів
var Frakciya = /** @class */ (function () {
    function Frakciya(frakcName) {
        this.deputats = [];
        this.frakcName = frakcName;
    }
    //   методи:
    //     додати депутата (вводимо з клави)
    Frakciya.prototype.addDeputat = function (deputat) {
        this.deputats.push(deputat);
    };
    //     видалити депутата(теж з клави)
    // delDeputat(surname: string, name: string): void {
    Frakciya.prototype.delDeputat = function (deputat) {
        // this.deputats = this.deputats.filter(value => (value.surname !== surname) && (value.name !== name))
        this.deputats = this.deputats.filter(function (value) { return value !== deputat; });
    };
    //     видалити всіх негідників які брали хабаря
    Frakciya.prototype.delAllWhoTakeHabar = function () {
        this.deputats = this.deputats.filter(function (value) { return !value.bravHabar; });
    };
    Frakciya.prototype.showAllWhoTakeHabar = function () {
        this.deputats = this.deputats.filter(function (value) { return value.bravHabar
            && console.log(value.surname, value.name); });
    };
    //     вивести найбільшого хабарника
    Frakciya.prototype.showWhoTakeMaxHabar = function () {
        var samiyJadibdiy = this.deputats.sort(function (a, b) { return b.sizeHabar - a.sizeHabar; })[0];
        console.log('Депутат ' + samiyJadibdiy.name, samiyJadibdiy.surname + ' набрався найбільше грошей');
        console.log('_____________________');
    };
    //     вивести всіх депутатів
    Frakciya.prototype.showAllDeputats = function () {
        this.deputats.forEach(function (deputat) { return console.log(deputat.surname, deputat.name); });
    };
    //     видалити всіх депутатів
    Frakciya.prototype.delAllDeputats = function () {
        this.deputats = [];
    };
    //     вивести загальну суму хабарів для фракції
    Frakciya.prototype.sumAllHabarInFraktion = function () {
        var nagrabovane = this.deputats.reduce(function (a, b) { return a + b.sizeHabar; }, 0);
        console.log(nagrabovane);
    };
    return Frakciya;
}());
var space = new Frakciya('Space');
space.addDeputat(ivanov);
space.addDeputat(petrov);
space.addDeputat(smirnova);
var moon = new Frakciya('Moon');
moon.addDeputat(sidorov);
moon.addDeputat(vasiliev);
moon.addDeputat(nikolaev);
console.log('_____________________');
console.log(space);
console.log('_________DELETE DEPUTAT____________');
// space.delDeputat('Petrov', 'Petro');
space.delDeputat(petrov);
console.log(space);
console.log('_______DELETE HABARNIKIV______________');
space.delAllWhoTakeHabar();
console.log(space);
console.log('________V KOGO MAX HABAR_____________');
moon.showWhoTakeMaxHabar();
console.log(moon);
console.log('_________VSI DEPUTATI____________');
space.showAllDeputats();
console.log('________DELETE ALL DEPUTATS_____________');
space.delAllDeputats();
console.log(space);
console.log('_________SUMMA HABARIV V FRAKCII____________');
moon.sumAllHabarInFraktion();
console.log('_____________________');
// клас Верховна рада
//   поля:
//     мапа фракцій
var VerhovnaRada = /** @class */ (function () {
    function VerhovnaRada() {
        this.frakcionMap = [];
    }
    //   методи:
    //     додати\видалити фракцію
    VerhovnaRada.prototype.addFrakciya = function (frakciya) {
        this.frakcionMap.push(frakciya);
    };
    VerhovnaRada.prototype.delFrakciya = function (frakciya) {
        this.frakcionMap = this.frakcionMap.filter(function (value) { return value.frakcName !== frakciya.frakcName; });
    };
    //     вивести всі фракції
    VerhovnaRada.prototype.showAllFrakcions = function () {
        this.frakcionMap.forEach(function (value) { return console.log(value.frakcName); });
    };
    //     вивести конкретну фракцію
    VerhovnaRada.prototype.showFrakcion = function (name) {
        this.frakcionMap.filter(function (value) { return value.frakcName === name; }).forEach(function (value) { return console.log(value); });
    };
    //     додати\видалити депутата з фракції
    VerhovnaRada.prototype.addDeputatInFraktion = function (frakciya, deputat) {
        this.frakcionMap.forEach(function (value) { return value.frakcName === frakciya.frakcName
            && frakciya.addDeputat(deputat); });
    };
    VerhovnaRada.prototype.delDeputatInFraktion = function (frakciya, deputat) {
        this.frakcionMap.forEach(function (value) { return value.frakcName === frakciya.frakcName
            && frakciya.delDeputat(deputat); });
    };
    //     вивести всіх хабарників фракції
    VerhovnaRada.prototype.showAllHabarnikInFraktion = function (frakciya) {
        this.frakcionMap.forEach(function (value) { return value.frakcName === frakciya.frakcName
            && frakciya.showAllWhoTakeHabar(); });
    };
    //     вивести найбільшого хабарника у фрації
    VerhovnaRada.prototype.showWhoTakeMaxHabarInFraktion = function (frakciya) {
        this.frakcionMap.forEach(function (value) { return value.frakcName === frakciya.frakcName
            && frakciya.showWhoTakeMaxHabar(); });
    };
    //     вивести найбільшого хабарника верховної ради
    VerhovnaRada.prototype.showMaxHabarnikInRada = function () {
        var deps = [];
        for (var _i = 0, _a = this.frakcionMap; _i < _a.length; _i++) {
            var deputats = _a[_i].deputats;
            for (var _b = 0, deputats_1 = deputats; _b < deputats_1.length; _b++) {
                var deputat = deputats_1[_b];
                deps.push(deputat);
            }
        }
        var samiyJadibdiy = deps.sort(function (a, b) { return b.sizeHabar - a.sizeHabar; })[0];
        console.log('Депутат ' + samiyJadibdiy.name, samiyJadibdiy.surname + ' набрався найбільше грошей');
    };
    //     вивести фсіх депутатів фракції
    VerhovnaRada.prototype.showAllDeputatsInFraktion = function (frakciya) {
        this.frakcionMap.forEach(function (value) { return value.frakcName === frakciya.frakcName
            && frakciya.showAllDeputats(); });
    };
    return VerhovnaRada;
}());
// space.addDeputat(ivanov);
space.addDeputat(petrov);
space.addDeputat(smirnova);
console.log('________VERHOVNA RADA__________');
var vr = new VerhovnaRada();
vr.addFrakciya(space);
vr.addFrakciya(moon);
console.log(vr);
console.log('__________________________');
console.log('______DELETE FRAKCION_________');
vr.delFrakciya(moon);
console.log(vr);
console.log('__________________________');
console.log('______SHOW ALL FRAKCIONS_________');
vr.addFrakciya(moon);
vr.showAllFrakcions();
console.log('__________________________');
console.log('______SHOW FRAKCION________');
vr.showFrakcion('Moon');
console.log('__________________________');
console.log('______ADD DEPUTAT IN FRAKCION________');
vr.addDeputatInFraktion(moon, ivanov);
vr.showFrakcion('Moon');
console.log('__________________________');
console.log('______DELETE DEPUTAT IN FRAKCION________');
vr.delDeputatInFraktion(moon, ivanov);
vr.showFrakcion('Moon');
console.log('__________________________');
console.log('______VSI HABARNIKI IN FRAKCION________');
vr.showAllHabarnikInFraktion(moon);
console.log('__________________________');
console.log('______WHO TAKE MAX HABAR IN FRAKCION________');
vr.showWhoTakeMaxHabarInFraktion(space);
console.log('__________________________');
vr.showFrakcion('Space');
console.log('__________________________');
console.log('______SHOW MAX HABARNIK IN RADA________');
vr.showMaxHabarnikInRada();
console.log('__________________________');
console.log('______SHOW ALL DEPUTATS IN FRAKCION________');
vr.showAllDeputatsInFraktion(space);
console.log('__________________________');
// в майні зробити через switch меню
//   1 - Верховна рада
//   2 - Фракція
//   3 - Депутат
function menu() {
    // let mainMenu = prompt('Виберіть пункт меню\n 1 - Верховна рада \n 2 - Фракція \n 3 - Депутат');
    // let opis = 'Виберіть пункт меню\n 1 - Верховна рада \n 2 - Фракція \n 3 - Депутат';
    // let mainMenu = prompt(opis);
    var mainMenu = '';
    console.log('Виберіть пункт меню');
    console.log('1 - Верховна рада');
    console.log('2 - Фракція');
    console.log('3 - Депутат');
    switch (mainMenu) {
        case '1':
            vrMenu();
            break;
        case '2':
            frakcionsMenu();
            break;
        case '3':
            deputatsMenu();
            break;
        default:
            // alert('Введіть правильний номер меню')
            console.log('Введіть правильний номер меню');
            // menu();
            break;
    }
}
menu();
// відповідно при вводі з клави певної цифри ми попадаєио в інше меню
//   якщо ми нажали 1 то нам промалюється в консолі таке меню
//   1-додати фракцію
//   2-вивести всі фракції
//   3-вивести найбільшого хабарника
// меню робимо на свій смак
function vrMenu() {
    console.log('Меню верховної ради');
    console.log('1 - Додати фракцію');
    console.log('2 - Вивести всі фракції');
    console.log('3 - Вивести найбільшого хабарника');
    var subMenu = '';
    switch (subMenu) {
        case '1':
            vr.addFrakciya;
            break;
        case '2':
            vr.showAllFrakcions();
            break;
        case '3':
            vr.showMaxHabarnikInRada();
            break;
        default:
            // alert('Введіть правильний номер меню')
            console.log('Введіть правильний номер меню');
            // vrMenu();
            break;
    }
}
vrMenu();
function frakcionsMenu() {
}
function deputatsMenu() {
}
