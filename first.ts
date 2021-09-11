/*
 let number = 324324;
let string = 'helo';
let boolean = true; 
*/
let money:number = 5;
let honey:string = 'ohh my honey';
let kony:boolean = true;


function add (first:number,second:number):number{
    const result = first+second;
    return result;
}

const output: number = add(34,78);

function doubleConsole(number:number):void{
    console.log(2*number);
}


//multi purpose
/* function add (first:number|string,second:number|string):number|string{
    const result:number|string = first+second;
    return result;
}

const output: number = add(34,78);
const fullName= add('adam','sendla');
 */
