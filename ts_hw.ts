// task
// Клас людина:
//   поля:
//     вага,зріст

class Human {
    weight: number;
    height: number;

    constructor(weight: number, height: number) {
        this.weight = weight;
        this.height = height;
    }
}

// Клас депутат(наслідується від людини):
//   поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря

class Deputat extends Human {
    surname: string;
    name: string;
    age: number;
    bravHabar: boolean;
    sizeHabar: number;
    constructor(weight: number, height: number, surname: string, name: string, age: number, 
                bravHabar: boolean, sizeHabar?: number) {
        super(weight, height);
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.bravHabar = bravHabar;
        this.sizeHabar = sizeHabar | 0;
    }

    //   методи:
    //     дати хабаря(зробити відповідні перевірки...
    //       якщо депутат не хабарник то щоб він відмовився,
    //       або ж якщо сума хабаря надто велика то щоб він вагався
    //       чи брати чи ні)

    giveHabar(money: number): void {
        // if (this.bravHabar){
        //     console.log(`Депутат ${this.surname}- Давай сюди свої гроші`);
            // this.sizeHabar += money;
        // } else 
        if (!this.bravHabar && money > 100000) {
            console.log(`Депутат ${this.surname} - подумає`);
        } else if (!this.bravHabar) {
            console.log(`Депутат ${this.surname} - не бере хабарів`);
        } else {
            console.log(`Депутат ${this.surname} - забирає хабар`);
            this.sizeHabar += money;
        }
      }
}

const ivanov = new Deputat (90, 180, 'Ivanov', 'Ivan', 35, true, 500000);
const petrov = new Deputat (120, 175, 'Petrov', 'Petro', 43, true, 1500000);
const smirnova = new Deputat (75, 183, 'Smirnova', 'Irina', 25, false);
const sidorov = new Deputat (95, 180, 'Sidorov', 'Sidor', 41, false);
const vasiliev = new Deputat (100, 176, 'Vasiliev', 'Visil', 29, true, 200000);
const nikolaev = new Deputat (105, 178, 'Nikolaev', 'Nikolay', 56, true, 1000000);

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

class Frakciya {
    frakcName: string;
    deputats: Deputat[] = [];

    constructor(frakcName: string){
        this.frakcName = frakcName;
    }
    //   методи:
    //     додати депутата (вводимо з клави)
    
    addDeputat(deputat: Deputat): void {
        this.deputats.push(deputat)
    }
    //     видалити депутата(теж з клави)
    // delDeputat(surname: string, name: string): void {
    delDeputat(deputat: Deputat): void {
        // this.deputats = this.deputats.filter(value => (value.surname !== surname) && (value.name !== name))
        this.deputats = this.deputats.filter(value => value !== deputat)
    }
    //     видалити всіх негідників які брали хабаря
    delAllWhoTakeHabar(): void {
        this.deputats = this.deputats.filter(value => !value.bravHabar)
    }
    showAllWhoTakeHabar(): void {
        this.deputats = this.deputats.filter(value => value.bravHabar 
                                        && console.log(value.surname, value.name)) 
    }
    //     вивести найбільшого хабарника
    showWhoTakeMaxHabar(): void {
        let [samiyJadibdiy] = this.deputats.sort((a, b) => b.sizeHabar - a.sizeHabar)
        console.log('Депутат ' + samiyJadibdiy.name, samiyJadibdiy.surname + ' набрався найбільше грошей');
        console.log('_____________________');

    }
    //     вивести всіх депутатів
    showAllDeputats(): void {
        this.deputats.forEach(deputat => console.log(deputat.surname, deputat.name))
    }
    //     видалити всіх депутатів
    delAllDeputats(): void {
        this.deputats = [];
    }
    //     вивести загальну суму хабарів для фракції
    sumAllHabarInFraktion(): void {
        let nagrabovane = this.deputats.reduce((a, b) => a + b.sizeHabar, 0);
        console.log(nagrabovane);
    }
}

let space = new Frakciya('Space');
space.addDeputat(ivanov);
space.addDeputat(petrov);
space.addDeputat(smirnova);

let moon = new Frakciya('Moon');
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

class VerhovnaRada {
    frakcionMap: Frakciya[] = [];
    
    //   методи:
    //     додати\видалити фракцію

    addFrakciya(frakciya: Frakciya):void {
        this.frakcionMap.push(frakciya)
    }

    delFrakciya(frakciya: Frakciya): void {
        this.frakcionMap = this.frakcionMap.filter(value => value.frakcName !== frakciya.frakcName)
    }
    //     вивести всі фракції
    showAllFrakcions(): void {
        this.frakcionMap.forEach(value => console.log(value.frakcName))
    }
    //     вивести конкретну фракцію
    showFrakcion(name: string): void {
        this.frakcionMap.filter(value => value.frakcName === name).forEach(value => console.log(value));
    }
    //     додати\видалити депутата з фракції
    addDeputatInFraktion(frakciya: Frakciya, deputat: Deputat): void {
        this.frakcionMap.forEach(value => value.frakcName === frakciya.frakcName 
                                        && frakciya.addDeputat(deputat))
    }
    delDeputatInFraktion(frakciya: Frakciya, deputat: Deputat): void {
        this.frakcionMap.forEach(value => value.frakcName === frakciya.frakcName 
            && frakciya.delDeputat(deputat))
    }
    //     вивести всіх хабарників фракції
    showAllHabarnikInFraktion(frakciya: Frakciya): void {
        this.frakcionMap.forEach(value => value.frakcName === frakciya.frakcName 
            && frakciya.showAllWhoTakeHabar())
    }
    //     вивести найбільшого хабарника у фрації
    showWhoTakeMaxHabarInFraktion(frakciya: Frakciya): void {
        this.frakcionMap.forEach(value => value.frakcName === frakciya.frakcName 
            && frakciya.showWhoTakeMaxHabar())
    }
    //     вивести найбільшого хабарника верховної ради
    showMaxHabarnikInRada(): void {
        let deps = [];
        for (const {deputats} of this.frakcionMap){
            for (const deputat of deputats){
            deps.push(deputat);
            }
        }
        let [samiyJadibdiy] = deps.sort((a, b) => b.sizeHabar - a.sizeHabar)
        console.log('Депутат ' + samiyJadibdiy.name, samiyJadibdiy.surname + ' набрався найбільше грошей');
    }
    
        //     вивести фсіх депутатів фракції
    showAllDeputatsInFraktion(frakciya: Frakciya): void {
        this.frakcionMap.forEach(value => value.frakcName === frakciya.frakcName 
        && frakciya.showAllDeputats())
    }
}

// space.addDeputat(ivanov);
space.addDeputat(petrov);
space.addDeputat(smirnova);

console.log('________VERHOVNA RADA__________');

let vr = new VerhovnaRada();
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

function menu(): void {
    // let mainMenu = prompt('Виберіть пункт меню\n 1 - Верховна рада \n 2 - Фракція \n 3 - Депутат');
    
    // let opis = 'Виберіть пункт меню\n 1 - Верховна рада \n 2 - Фракція \n 3 - Депутат';
    // let mainMenu = prompt(opis);
    
    let mainMenu = '';
    
    console.log('Виберіть пункт меню');
    console.log('1 - Верховна рада');
    console.log('2 - Фракція');
    console.log('3 - Депутат');

    
    switch(mainMenu) {
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
            console.log('Введіть правильний номер меню')
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

function vrMenu(): void {

    console.log('Меню верховної ради');
    console.log('1 - Додати фракцію');
    console.log('2 - Вивести всі фракції');
    console.log('3 - Вивести найбільшого хабарника');

    let subMenu: String = '';
    
    switch(subMenu) {
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
            console.log('Введіть правильний номер меню')
            // vrMenu();
            break;
    }
}

function frakcionsMenu(): void {

}

function deputatsMenu(): void {

}
