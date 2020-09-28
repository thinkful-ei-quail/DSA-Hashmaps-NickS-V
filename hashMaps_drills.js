const hashMap = require('./hashmap');
function main() {
    const cheeseHashBrown = new hashMap;
    cheeseHashBrown.MAX_LOAD_RATIO = 0.5;
    cheeseHashBrown.SIZE_RATIO = 3;
    cheeseHashBrown.set('Topping','Bacon');
    cheeseHashBrown.set('Topping','Chives');
    cheeseHashBrown.set('Base', 'Potato');
    cheeseHashBrown.set('Dairy','Cheese');
    cheeseHashBrown.set('Dairy', 'Sour Cream');
    cheeseHashBrown.set('Seasoning','Salt');
    cheeseHashBrown.set('Meat Pudding','Brown Gravy');
    cheeseHashBrown.set('Fish','Anchovies');
    cheeseHashBrown.set('australian','Marmite');
    cheeseHashBrown.set('Black','Pudding');
    cheeseHashBrown.set('Roasted','Chestnut');
    cheeseHashBrown.set('Secret Sauce','Drain-o');

    console.log(cheeseHashBrown.get('Dairy'));
}

main();