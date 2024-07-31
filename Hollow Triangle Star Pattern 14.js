let rows=5;
let print="";
for (let i = 1; i <= rows; i++) {
    for(let j=1;j<=i;j++){
        if(j === 1 || j === i || i === rows)print+="*";
        else{
            print +=" ";
        }
    }
    print+="\n";
}
console.log(print);