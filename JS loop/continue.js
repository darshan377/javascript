//continue means---> skip this one and go for the next one
//break means--->exactly stop at that position where break found

for(let i=0;i<10;i++){
    if(i%2===1){
        continue;
    }
    console.log(i);
}

console.log('using break...')
for(let i=0;i<10;i++){
    if(i%2===1){
        break;
    }
    console.log(i);
}