// qus 01 (calc)

var x = 5;
var y = x * 3;
document.write("ans 01 ", y)

//qus 02 (area of rectangle)

var l = 8;
var b = 10;
document.write("<br>ans 02 ", l * b);

//qus 03 (area of squre)

var length = 8;
document.write("<br>ans 03 ", length * length);

//qus 04 (area of circle)

var pi = 3.14;
var r = 8;
document.write("<br> ans 04 ", pi * r * r)

//qus 05 (average of 5 numbers)

var n1 = 6;
var n2 = 7;
var n3 = 8;
var n4 = 10;
var n5 = 20;
document.write("<br> ans 05 " + ((n1 + n2 + n3 + n4 + n5) / 5));

//qus 06 (simple intrest)

var p = 8;
var r = 10;
var t = 20;
document.write("<br>ans 06 ", (p * r * t) / 100);

//qus 07(find squre and cube)

var n1 = 8;
var n2 = 10;
var n3 = 20;
document.write("<br> ans 07(squre) ", n1 * n1);
document.write("<br> ans 07(squre) ", n2 * n2);
document.write("<br> ans 07(squre) ", n3 * n3);
document.write("<br> ans 07(cube) ", n1 * n1 * n1);
document.write("<br> ans 07(cube) ", n2 * n2 * n2);
document.write("<br> ans 07(cube) ", n3 * n3 * n3);


//qus 08( celsius to fehrenheit)

var c = 24;
var f = (c * 9 / 5) + 32;
document.write("<br> ans 08(a) ", f);
var c = 37;
var f = (c * 9 / 5) + 32;
document.write("<br> ans 08(b) ", f);
var f = 98.6;
var c = (f - 32) * 5 / 9;
document.write("<br> ans 08(c) ", c);

//qus 09

var f = 24;
var c = (f - 32) * 5 / 9;
document.write("<br> ans 09(a) ", f);
var f = 98.6;
var c = (f - 32) * 5 / 9;
document.write("<br> ans 09(b) ", f);
var c = 37;
var f = (c * 9 / 5) + 32;
document.write("<br> ans 09(c) ", f);

//qus 10 (check even or odd)

var k=8;
if(k%2==0){
    document.write("<br>(ans 10) the number is even");
}else{
    document.write("<br>(ans 10) the number is odd")
}