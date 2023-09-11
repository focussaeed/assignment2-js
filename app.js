// Capter 6 to 8
// Q.1

var num_A=10;

document.write("<br> Result:");
document.write("<br> The value of a is: "+num_A);
++num_A;

document.write("<br><br> The value of ++a is: "+num_A);
document.write("<br> Now the value of ++a is: "+num_A);

num_A++;

document.write("<br><br> The value of a++ is: "+num_A);
document.write("<br> Now the value of a++ is: "+num_A)

--num_A;

document.write("<br><br> The value of --a is: "+num_A)
document.write("<br> Now the value of --a is: "+num_A)

num_A--;

document.write("<br><br> The value of a-- is: "+num_A);
document.write("<br> Now the value of a-- is: "+num_A);

// Q.2

var a=2;
var b=1;

document.write("<br> a is : "+a);
document.write("<br> b is : "+b);
document.write("<br> Result:");
result= --a;
document.write("<br> Result of --a: "+result);

result= --a - --b;
document.write("<br> Result of --a - --b : "+result);

result= --a - --b + ++b;
document.write("<br> Result of --a - --b + ++b : "+result);

result= --a - --b + ++b + b--;
document.write("<br> Result of --a - --b + ++b + b-- : "+result);

// Q.3
var user_Name=prompt("Enter Your name");

document.write("Wel come to "+user_Name);

// Q.5

var tab_no=+prompt("Enter Number for table");
var mulNo=1

if (tab_no ===0){

    tab_no=5;
}

var result2 = mulNo * tab_no
document.write("<br> Table of "+tab_no);
document.write("<br><br> "+tab_no+" X "+mulNo+" = "+result2);
++mulNo;
var tabNo2 = mulNo * tab_no
document.write("<br><br> "+tab_no+" X "+mulNo+" = "+result2);
++mulNo;
var tabNo2 = mulNo * tab_no
document.write("<br><br> "+tab_no+" X "+mulNo+" = "+result2);
++mulNo;
var tabNo2 = mulNo * tab_no
document.write("<br><br> "+tab_no+" X "+mulNo+" = "+result2);
++mulNo;
var tabNo2 = mulNo * tab_no
document.write("<br><br> "+tab_no+" X "+mulNo+" = "+result2);
++mulNo;
var tabNo2 = mulNo * tab_no
document.write("<br><br> "+tab_no+" X "+mulNo+" = "+result2);
++mulNo;
var tabNo2 = mulNo * tab_no
document.write("<br><br> "+tab_no+" X "+mulNo+" = "+result2);
++mulNo;
var tabNo2 = mulNo * tab_no
document.write("<br><br> "+tab_no+" X "+mulNo+" = "+result2);
++mulNo;
var tabNo2 = mulNo * tab_no
document.write("<br><br> "+tab_no+" X "+mulNo+" = "+result2);
++mulNo;
var tabNo2 = mulNo * tab_no
document.write("<br><br> "+tab_no+" X "+mulNo+" = "+result2);

// Q.6
var subJect_1=prompt("Select Ist Subject ");
var subJect_2=prompt("Select 2nd Subject ");
var subJect_3=prompt("Select 3rd Subject ");

var marks_sub1=+prompt("Enter Obtain Marks of "+subJect_1+": ");
var marks_sub2=+prompt("Enter Obtain Marks of "+subJect_2+": ");
var marks_sub3=+prompt("Enter Obtain Marks of "+subJect_3+": ");

var subttl_marks=100
var ttl_marks=300;


var obtain_marks= marks_sub1+marks_sub2+marks_sub3;

var grnd_percenage=(obtain_marks/ttl_marks)*100;

var sub1_percetage=(marks_sub1/subttl_marks)*100;
var sub2_percetage=(marks_sub2/subttl_marks)*100;
var sub3_percetage=(marks_sub3/subttl_marks)*100;

document.write("<br>Subject "+"    Total Marks"+"    Obtain Marks"+"    Percentage");
document.write("<br> "+subJect_1+"________"+subttl_marks+"________"+marks_sub1+"_______"+sub1_percetage+"%");
document.write("<br> "+subJect_2+"________"+subttl_marks+"________"+marks_sub2+"_______"+sub2_percetage+"%");
document.write("<br> "+subJect_3+"________"+subttl_marks+"________"+marks_sub3+"_______"+sub3_percetage+"%");
document.write("<br> ____________"+ttl_marks+"________"+obtain_marks+"________"+grnd_percenage+"%");

// Capter 9 to 11
// Q.1
var cityName=prompt("Enter city name");
if(cityName="Karachi")
{
    document.write("Wel come to city of lights")
}

// Q.2
var userGender=prompt("Enter Gender");
if(userGender==="male")
{
    alert("Good Morning Sir")
} else if (userGender==="female")
{
    alert("Good Morning Ma'am")
} else {
    alert("SORRY")
}

// Q.3

var sig_Light=prompt("Enter Traffic signal light color");

if(sig_Light==="Red")

{
    alert("Must Stop")
} else if (sig_Lighht==="Yellow")

{
    alert("Ready to move")
} else if (sig_Light==="Green") 

{
    alert("Move Now")
} else {
    alert("SORRY")
}

// Q.4

var car_Fuel= +prompt("Please Enter remaining fuel in car");

if(car_Fuel >0 && car_Fuel<= 5)

{
    alert("Please refill the fuel in your car")
}

// Q.5

var a=4;
if (++a === 5)
{
    console.log(a)
    alert("Given condition for variable a is true")
}

var b=82;
if (b++ === 83)
{
    console.log(b)
    alert("Given condition for variable b is true")
}

var c=12;
if (c++ === 13)
{
    console.log(c)
    alert("Condition 1 is true ")
}
if (c++ === 13)
{
    console.log(c)
    alert("Condition 2 is true ")
}

if (++c < 14)
{
    console.log(c)
    alert("Condition 3 is true ")
}
if (c === 14)
{
    console.log(c)
    alert("Condition 4 is true ")
}

var matrialCost=20000;
var laborCost=2000;
var totalCost=matrialCost+laborCost;
if (totalCost ===matrialCost+laborCost);
{ alert("The cost is equals")}

if(true);{
    alert("true")
}

if(false); {
    alert("false")
}

if("car" < "cat"); {
    alert("car is smaller than cat")
}

// Q.6

var mathsMarks = +prompt("Enter your Maths Marks");
var phyMarks = +prompt("Enter your Physics Marks");
var engsMarks = +prompt("Enter your English Marks");
var tMarks=300
var std_Grade=" "
var std_Remarks=" "
var obtMarks= mathsMarks + phyMarks + engsMarks
var per_age= (obtMarks/tMarks)*100

if ( per_age >= 80 )
{   std_Grade="A-one"
    std_Remarks="Excellent"
} else if ( per_age >= 70 )
{   std_Grade="A"
    std_Remarks="Good"
} else if ( per_age >= 60 )
{   std_Grade="B"
    std_Remarks="You need to improve."
} else if ( per_age <=50 )
{   std_Grade="Fail"
    std_Remarks="S O R R Y "
}
document.write("<br> Marks Sheet<br>");
document.write("<br> Total Marks : "+tMarks);
document.write("<br> Marks Obtain : "+obtMarks);
document.write("<br> Percentage : "+per_age);
document.write("<br> Grade : "+std_Grade);
document.write("<br> Remarks: "+std_Remarks);

// Q.7

var sec_Num=5
var guess_Num = +prompt("Guess the secrect number  1-9");
var num_Diff= guess_Num-sec_Num
var Remarks=" "

if ( guess_Num === sec_Num )
{   
    Remarks="Bingo! Correct answer"
} else if (num_Diff=== 1 )
{   Remarks="Close enough to the correct answer "
} else {   
    Remarks="S O R R Y "
}

document.write("<br> "+Remarks);

// Q.8

var Num1 = +prompt("Enter a number ");
var modu_Num= Num1 % 3
var Remarks=" "

if ( modu_Num === 0 )
{   
    document.write("<br> Number is divisibe by 3 ");
} 

// Q.9

var Num2 = +prompt("Enter a number ");
var modu_Num1= Num2 % 2
var Remarks=" "

if ( modu_Num1 === 0 )
{   
    document.write("<br> Even Number ");
} else {
    document.write("<br> odd Number ");
}

// Q.10

var tdy_Temprature = +prompt("Enter Today Temprature");
var tmp_Remarks

if ( tdy_Temprature >= 40 )
{    tmp_Remarks="It is too hot outside"
} else if ( tdy_Temprature >= 30 )
{   tmp_Remarks="The Weather today is Normal"
} else if ( tdy_Temprature >= 20)
{   tmp_Remarks="Today's Weather is Cool"
} else if ( tdy_Temprature>= 10 )
{   tmp_Remarks="OMG! Today's Weather is so Cool"
}

document.write("<br> "+tmp_Remarks);

// Q.11
var num_1st = +prompt("Enter Ist Number");
var num_2nd = +prompt("Enter 2nd Number");
var op_sign = prompt("Seect Operator (+,-,*,/,%)");
var result;

if ( op_sign === "+" )
{   result=num_1st+num_2nd
} 
if ( op_sign === "-" )
{   result=num_1st-num_2nd
} 
if ( op_sign === "*" )
{   result=num_1st*num_2nd
} 
if ( op_sign === "/" )
{   result=num_1st/num_2nd
} 
if ( op_sign === "%" )
{   result=num_1st%num_2nd
} 
document.write("Result is "+result)


