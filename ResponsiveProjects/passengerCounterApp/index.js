// ! when you see the page of documents  don't feel that you need go understand every thing  an for the love of god don't try to learn the code by just reading doc  
// @ | !!YOU wanna slowly learn how to get comfortable reading documentation  but you also wanna ignore  all of the complex stuff that's it's very often wrapped within | 
let counter=0;
// console.log(counter)
// document.getElementById('sayi').innerHTML=counter;
function increment(){
    counter++;
    document.getElementById('sayi').innerText=counter;
 }
// ?a pat on the back TRANSLATE   
//  the Document Object model : DOM ,aka how use JS  to modify a website  
/*what we are interacting with is HTML DOCUMENT 
object because the document keyword  in JS  is of the dataType obj  meaning they've taken the HTML document and shoved it into js obj
model  is basically a representation  or  modulation  real thing  which is in html and it's model which is js reperesentation of Real html element on js */
function save(){
    // ! gercekten en kolay yolu secmisi hic aklima gelmedi string olarak davranip cumleye eklemek concatenation ozelligi ile  MAKE IT WORK FIRST THEN MAKE IT BETTER A NEW PHILOSOPHY
    //$ document.getElementById('previous').innerText+=counter+" - ";
    //spaces doesn't work over there  because innertext  show human readable  elements  so we need to search  for a alternative for it 
    document.getElementById('previous').textContent+=counter+" - ";
    counter=0;
    document.getElementById('sayi').innerText=counter;
}