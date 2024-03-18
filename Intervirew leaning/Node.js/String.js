

let string = 'my sring';

const spit_name = string.split(" ");

const reverse_word = spit_name.map(item =>{
    return item.split("").reverse().join("");
});

const reverse_string = reverse_word.join(" ");

console.log("reversed string : ",reverse_string);


function maual_reversedstring(string){
    let reversed = '';

    for(let i = string.length-1; i >= 0 ; --i ){
        // console.log("jjjjj222",string[i]);
        reversed += string[i];
        // console.log("jjjjj333",string[i]);
    }
    return reversed;
}

let word = '';
let reversed_string ='';

for(let i = 0 ; i < string.length; i++){
    if(string[i] !== ' '){
        
        word += string[i];
    } else{
        // reversed_string = reversed_string+' '+maual_reversedstring(string);
        // word = '';
    }
    // console.log("jjjjj",string[i]);
}

if(word !== ''){
    // reversed_string = maual_reversedstring(string);
}

console.log("Reversed string after split : ", reversed_string.trim());
