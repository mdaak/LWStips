
// const sentenceArray = ['afg','sfgf','dre','ferer','arer','drer','ferer']
const sentence = 'The Array.toString() method returns a string with all array values separated by commas';

const capetalize = (values)=>{
  let words = values.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
const newSentencee = words.join(" ");
console.log(newSentencee)
}
capetalize('se nte nce')


///////////////////
