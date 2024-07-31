let rows=5;
let print="";
for (let i=1;i<=rows;i++){
    for(let j=1;j<=5;j++){
      if(i==1 || i==3 || i==5|| j==1)  print+="*";
        
    }
    print+="\n";
}
console.log(print);