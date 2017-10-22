let test:Set<string> = new Set<string>();
test.add("1");
test.add("2");

for(let i in test){
    console.log(test[i]);
}


let pets = new Set(["고양이", "개", "새"]);
pets["species"] = "mammals";

console.log("in...")
for (let pet in pets) {
   console.log(pet); // "species"
}

console.log("of...")
for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}