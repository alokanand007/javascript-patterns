let rows=5;
let rowws=5;
let print="";
for (let i = 1; i <= rows; i++) {
    for (let j=1;j<=i;j++){
        print += "$";
    }
    print += "\n";
}
for (let i = 1; i <= rowws; i++) {
    for (let j=rowws;j>=i;j--){
        print += "%";
    }
    print += "\n";
}
console.log(print);