// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

cats;

function destructivelyRemoveFirstCat(name){
        cats.shift(name);
} 
function destructivelyAppendCat(name){
        cats.push(name);
}

function destructivelyRemoveLastCat(name){
        cats.pop(name);
}

function destructivelyPrependCat(name){
        cats.unshift(name);
}

function removeLastCat(){
        return cats.slice(0, 2);
}

function appendCat(name){
  const newCatArray = [...cats, name];
  return newCatArray;
}

function prependCat(name){
    const newCatArray = [name, ...cats];
    return newCatArray;
  }
  

function removeFirstCat(){
    return cats.slice(1);
}