// Chapter 6
// Q.1

var x=0;
++x;
console.log(x);
alert("x=1");

// Q.2
var  x=100;
--x;
console.log(x);
alert("x=99");

// Q.3
var  x=50;
var y=x++;
console.log(y);
alert("y=50");


// Q.4

var  x=50;
var y=--x;
console.log(y);
alert("y=49");

// Q.5
var  num=50;
var y=num--;
console.log(y);
alert("y=50");

// Q.6

var  num=70;
var y=num++;
console.log(y);
alert("y=70");

// Q.7
var  num=70
var y=++num;
alert(y)
alert("y=71");

// Chapter 7
// Q.1

var  calculatednum=2+(2*6)
console.log(calculatednum)
alert("Calculated Number is 14")

// Q.2
var  calculatednum= (2+2) *6
console.log(calculatednum)
alert("Calculated Number is 24")

// Q.3
var  calculatednum= (2+2) * (4+2)
console.log(calculatednum)
alert("Calculated Number is 24")

// Q.4
var  calculatednum= ((2+2) * 4) +2
console.log(calculatednum)
alert("Calculated Number is 18")

// Q.5
var  calculatednum=(2*(2*(4+10)))
console.log(calculatednum)
alert("Calculated Number is 56")

// Q.6
var  calculatednum=(2+(2*4)+10)
console.log(calculatednum)
alert("Calculated Number is 20")

// Chapter 8
// Q.1

var  num="2"+"2";
console.log(num);
alert(num);
alert("num=22");

// Q.2
var  message="Hello, "+"Dolly";
console.log(message);
alert(message);

// Q.3
alert("333");
alert("33"+3);

// Q.4
alert("Pakistan "+"Zindabad");

// Q.5
var obtain_mrks=650;
var message1="Your obtain marks is ";
alert(message1+obtain_mrks);

// Q.6
var str1="Pakistan ";
var str2="Zindabad";
var message=str1+str2;
alert(message);

// Chapter 9
// Q.1
var firstName=prompt("Enter your first name : ");

// Q.2
var country=prompt("Enter Country : ", "China");
alert(country)

// Q.3
var yourName=prompt("Enter your name : ");

// Q.4
var leaveplace=prompt("Enter your city name : ", "Karachi");
alert(leaveplace);

// Q.5
var str1="What is your contry name : ";
var str2="Pakistan";
var leaveplace=prompt(str1,str2);
alert(leaveplace);

// Q.6
var leaveplace=prompt("Enter your city name : ", "Karachi");
alert(leaveplace);

// Chapter 10
// Q.1
var city="Karachi"
if (city === "Karachi") {
    console.log("The city of lighs")
}

// Q.2
var x=5
var y=5

if (x === y) {
    var z=+prompt("Enter value of Z :")
}

// Q.3
var zipCode=+prompt("Enter your zip code :")

if (zipCode === 10010) {
   alert("Karachi")
} else {
    alert("Please write correct city")
}

// Q.4

// Q.5
var zipCode=+prompt("Enter your zip code :")

if (zipCode === 10010) {
   alert("Karachi")
} else {
    alert("Please write correct city")
}

// Chapter 11
// Q.1

if (x !== y) {
    var z=+prompt("Enter value of Z :")
}

// Q.2
if (x !== y) {
    var z=+prompt("Enter value of Z :")
}

// Q.3
if (x !== 5) {
    var x=5
}

// Q.4
var num=+prompt("Enter Number :")

if (num !==10 && num !==20) {
   alert("Congratulation")
}

// Q.5
var firstName=prompt("Enter your First Name :")

if (firstName !== "saeed") {
   alert("No Match")
}