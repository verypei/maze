let input = 17;
let door = 2;
let flag = false;
for (let i = 1; i <= input; i++) {
    let result = "";
    if(i %2 !== 0){
        if(!flag){
            for (let j = 1; j <= input; j++) {
                if(j === door){
                    result += " ";
                }
                else{
                    result += "@";
                }
            }
            flag = true;
        }
        else{
            for (let j = 1; j <= input; j++) {
                if(j === input-1){
                    result += " ";
                }
                else{
                    result += "@";
                }
            }
            flag = false;
        }
    }
    else{
        for (let j = 1; j <= input; j++) {
            if(j === 1 || j === input){
                result += "@";
            }
            else{
                result += " ";
            }
        }
    }
    console.log(result);
}