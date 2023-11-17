"use strict"
const configObj = {
  'size' : {
      'small':[50, 20],
      'big': [100, 40],
  },
  'staffing' : {
      'cheese':[10, 20],
      'salad':[20, 5],
      'potatoes':[15, 10],
  },
   'topping' : {
       'seasoning':[15,0],
       'mayonnaise':[20,5],
       'ketchup':[25,5],
   },
    'action' : ['Cost','Calories'],
};
const staffingKeys = Object.keys(configObj.staffing);
const toppingKeys = Object.keys(configObj.topping);

class Hamburger {
    size;
    staffing = [0, 0];
    topping = [0, 0];
    orderNumber;
    sumCost = 0;
    sumCalories = 0;

    static orderNumber = 0;
    constructor(size) {
        this.size = size || [0, 0];
        this.orderNumber = ++Hamburger.orderNumber;
    }

    addStaffing(staffing){
        this.staffing = configObj.staffing[staffing];
    }

    addTopping(topping){
        this.topping = configObj.topping[topping];
    }

    calculate(kindOfAction) {
        let num = 0;
        switch (kindOfAction) {
            case configObj.action[0]:
                num = 0; break;
            case configObj.action[1]:
                num = 1; break;
        }
        this['sum'+kindOfAction] = this.size[num] + this.staffing[num] + this.topping[num];
        console.log(`Total ${kindOfAction} of order ${this.orderNumber} is ${this['sum'+kindOfAction]}`);
        return this['sum'+kindOfAction];
    }
}


const myHamburger1 = new Hamburger(configObj.size.small); // База заказа №1 - малий гамбургер;
const myHamburger2 = new Hamburger(configObj.size.big);   // База заказа №2 - великий гамбургер;
console.log(myHamburger1);
myHamburger1.addStaffing(staffingKeys[0]); //Вибираємо сир у якості начинки;
myHamburger1.addTopping(toppingKeys[1]); //Вибираємо майонез у якості добавки;
myHamburger1.calculate(configObj.action[0]); // Запитуємо поточну ціну заказа;
myHamburger1.calculate(configObj.action[1]); // Запитуємо калорийність;
myHamburger1.addStaffing(staffingKeys[1]); //Вибираємо салат у якості начинки;
myHamburger1.addTopping(toppingKeys[2]) //Вибираємо кетчуп у якості добавки;
myHamburger1.calculate(configObj.action[0]); // Запитуємо поточну ціну заказа;
myHamburger1.calculate(configObj.action[1]); // Запитуємо калорийність;


console.log(myHamburger2);
myHamburger2.addStaffing(staffingKeys[2]); //Вибираємо картоплю у якості начинки;
myHamburger2.addTopping(toppingKeys[1]); //Вибираємо майонез у якості добавки;
myHamburger2.calculate(configObj.action[0]); // Запитуємо поточну ціну заказа;
myHamburger2.calculate(configObj.action[1]); // Запитуємо калорийність;
myHamburger2.addStaffing(staffingKeys[0]); //Вибираємо сир у якості начинки;
myHamburger2.addTopping(toppingKeys[2]) //Вибираємо кетчуп у якості добавки;
myHamburger2.calculate(configObj.action[0]); // Запитуємо поточну ціну заказа;
myHamburger2.calculate(configObj.action[1]); // Запитуємо калорийність;