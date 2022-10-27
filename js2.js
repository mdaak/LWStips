//1 vlaue swaping
let array = [1,2,3,4,5,6,7,8];
// let temp = array[0];
// array[0] = array[4];
// array[4] = temp
// console.log(array)
[array[0],array[4]]=[array[4],array[0]];
console.log(array)

//2 copy text from paragrape

function copyToClipBord(str){
    const element = document.createElement("textarea")
    element.value = str;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert('text copied now pest it any where')
}

function  handleClick(){
    let text = document.querySelector('#text');
    // copyToClipBord(text.innerHTML)
    copyToClipBord(text.innerHTML)

}

// 3 destructring alices
const objectName={
    name:'javascript',
    founder:'alamin'
} 
const {name:objName, founder: founderName}=objectName;
console.log(objName) 

// 4 take a input string value direct as number

const element = document.querySelector('#number').valueAsNumber;
console.log(typeof element);

// 5 r4emove duplocate value from an array

const arrayNumber =[4,5,6,6,7,8,2,3,4,5,1];
let removeDuplicate =[...new Set(arrayNumber)]
console.log(removeDuplicate)
console.log('aaa',
    removeDuplicate.map((a,b)=>a<b)
)

// compare two array by value

const hasSameElement =(a, b)=>{
    return a.length===a.length && a.every((v,i)=> v===b[i] )
}
console.log(hasSameElement([2,1],[1,2]))