<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta lang="en">
    <meta viewport="width=device-width, initial-scale=1">
    <title>Title</title>
    <!--<link rel="stylesheet" href="css/style.css">-->
    <!--<script src="js/script.js" defer>-->
</head>
<body>
    
</body>
</html>

function doMath() {
    var num1 = document.getElementById("num1").value;
    num1 = Number(num1);
    var num2 = document.getElementById("num2").value;
    num2 = Number(num2);
    
    var add = num1 +num2;
    var sub = num1 - num2;
    var mul = num1 * num2;
    var div = num1 / num2;
    var mod = num1 % num2;
    var pow = num1 ** num2; // Exponent
    var sqn1 = Math.sqrt(num1);
    var sqn2 = Math.sqrt(num2);

    var p = document.getElementById("output");
    var out = "";
    out = out + "Add: " + add + "<br/>";
    out = out + "Subtract: " + sub + "<br/>";
    out = out + "Multiply: " + mul + "<br/>";
    out = out + "Divide: " + div + "<br/>";
    out = out + "Modulus: " + mod + "<br/>";
    out = out + "Pow: " + pow + "<br/>";
    out = out + "sqrt(num1): " + sqn1 + "<br/>";
    out = out + "sqrt(num2): " + sqn2 + "<br/>";
    p.innerHTML = out;

}