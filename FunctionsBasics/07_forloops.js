const map = new Map(); //if you only add key then value will be undefined
map.set("1", "name");
map.set("2", "age")
map.set("3", "address")
map.set("4", "pincode")
// console.log(map);

//For Of Loop
for (const key of map) {
    //console.log(map[key[0]]);///it give you element
}
for (const [key, value] of map) {
    //console.log(key, value);///it  give only keys
}
for (const [key, value] of map) {
    //console.log(value);///it will give only values
}


//For Of and For In
const heros = ['Srk', 'Hrx', 'NTR', 'Mahesh Babu', 'Charan']

for (const hero in heros) {
    // console.log(hero); //it will give index of arrays
}
for (const hero in heros) {
    // console.log(heros[hero]); //it will give value of that index
}
const studentDetails = [{
    name: "student1",
    email: "student@gmail.com"
}, {
    name: "student2",
    email: "student2@gmail.com"
}, {
    name: "student3",
    email: "student3@gmail.com"
}]

for (const studnet of studentDetails) {
    console.log(studnet.name);

}
