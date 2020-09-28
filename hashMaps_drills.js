const HashMap = require('./hashmap');
const magicLand = [{"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
{"Wizard": "Gandalf"}, {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
{"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"},
{"Ent": "Treebeard"}]
const generateMap = (obj)=>{
    const result = new HashMap;
    result.MAX_LOAD_RATIO = 0.5;
    result.SIZE_RATIO = 3;
    for(const valuePair of obj)
    {
        const key = Object.keys(valuePair)[0]
        const value = valuePair[key];
        
        result.set(key, value);
    }
    return result;

}
const removeDuplicates = (str)=>
{
    let result = "";
    for(const char of str)
    {
        if(result.indexOf(char) === -1)
        {
            result += char;
        }
    }
    return result;
}
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
function checkPalindrome(str)
{
    
    let singles = 0;
    for(const char of str)
    {
        
        if((str.split(char).length % 2) === 0)
        {
            singles++;
        }

        if(singles > 1)
        {
            return false;
        }
    }
    return true;
}

function groupAnagram(words)
{
    result = [];
    const hash = new HashMap;
    for(const word of words)
    {
        const key = hash._hashString(word);
        const index = key % 8;
        if(!result[index])
        {
            result[index] = {};
        }
        Object.assign(result[index][key] = word)
    }
    return result;
}
function main() {
    const mWorld = generateMap(magicLand);
    
    //console.log(groupAnagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
    //console.log(textHolder._hashTable);
    //console.log(removeDuplicates("google all that you think can think of"));
    //console.log(checkPalindrome("acecarr"))
    console.log(mWorld._capacity,mWorld._hashTable)
    /* the capacity load capcity exceded innitial capacity, which triggered trippling the initial capacity, so the capacity for the 11 items is 24 .*/
    
    while(1){}
    
}


main();

/* 

3. Demonstrate understanding of Hash maps
*You don't need to write code for the following two drills. use any drawing app or simple pen and paper *

1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 
into a hash map of length 11 using open addressing and a hash function k mod m, where k is the key and m is the length.

2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10
into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9,
 and let the hash function be k mod m.

*/