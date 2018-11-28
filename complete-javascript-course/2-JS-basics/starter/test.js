
console.log("Jon's Demo Test");

var firstName = "Jon";
var lastName = "Welch"

var age = "30";

//age = 'twenty eight';

var job = "QA";

console.log(firstName +' '+ lastName + ' is a '+ age +' year old '+ job);

alert(firstName +' '+ lastName + ' is a '+ age +' year old '+ job);

var middleName = prompt("What is his middle name?")
console.log(firstName +' '+ middleName +' '+ lastName)

var yobJon , yobMeg;

now = "2018";

var ageMeg = "22";
var ageJoeBloggs = "35";

yobJon = (now - age) -1;
yobMeg = now - ageMeg;

console.log("Jon was born in" +' '+ yobJon)
console.log("Meg was born in" +' '+ yobMeg)

var jonOlder = age > ageMeg;
console.log(jonOlder)

if (jonOlder === true){
    console.log("Jon is older than Meg");
}
else{
    console.log("Meg is older than Jon");
}


if (age >= 28 && age <30 ){
    console.log("This is the age of" +' '+ firstName);
}
else if (age >=22 && age <28 ){
    console.log("This is the age of Meg");
}
else {
    console.log("This is the age of Joe Bloggs");
}
    

