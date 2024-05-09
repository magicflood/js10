let a = +prompt("Birinchi son yozing...")
let b = +prompt("Ikkinchi son yozing...")
let c;

function hisoblash(a, b) {
    if (a > b) {
        alert(" Eng katta son " + a)
    } else if(a === b) {
        alert(a + " va " + b + " bir biriga teng")
    } else {
        alert(" Eng katta son " + b)
    }
}

hisoblash(a, b);