//using ++ , -- , -= , +=

for (k = 1; k <= 8; k++) {
    document.write("<br> 01the number is:", k);
}

for (k = 8; k >= 1; k--) {
    document.write("<br> 02the number is:", k);
}

for (k = 1; k <= 8; k += 2) {
    document.write("<br> 03the number is:", k);
}

for (k = 8; k >= 1; k -= 2) {
    document.write("<br> 04 the number is:", k);
}

//table

for (x = 8, i = 1; i <= 10; i++) {
    document.write("<br>", x, "*", i, "=", x * i)
}

//break 

for(x=1;x<=10;x++){
    if(x===8){
        break;
    }
    document.write("<br>",x)
} 

//continue

for(x=1;x<=10;x++){
    if(x===8){
        continue;
    }
    document.write("<br>",x)
}