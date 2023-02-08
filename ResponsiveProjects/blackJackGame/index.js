 /*
 Create two variable first and second card
   set their values to a random number betweeen 2-11
   creat a varialbe sum and set it to the sum of the two cards */


   let firstCard;
   // we add two because the random give us number bigger than zero and less than 1 so when we multiplied it with 10 it give us number between 0 and 9  if we add 2 that will give us numbers between 2 and 11
   let secondCard ;


   let summation;


   function newCards(){
    document.getElementById('sum').textContent='sum : '
    firstCard=Math.floor((Math.random()*10)+2);
    secondCard=Math.floor((Math.random()*10)+2);
    document.getElementById('cart1').textContent=firstCard
    document.getElementById('cart2').textContent=
    secondCard
    summation =firstCard+secondCard;
    document.getElementById('sum').textContent+=summation
    //  return summation
    
   }
  //  let variable=newCards();
  //  console.log(variable)
   //how black jack work before we formulate this in JS  so the point of the black jack is to get a 
  //  hand that sums up to exactly 21 
  // and if you don't get 21 at least you want to get as close as possible to 21 
  //but never above 21 because if so you're out of the game 
  // king =10 Ace =11  if you got those you got black jack  

  

  function play()

  {
   console.log(summation)

    // let variable=newCards();

    if (summation<21){
      document.getElementById('message').textContent='you stay in the game '
    }
    else if(summation>21)
    {
      document.getElementById('message').textContent='you lose your money '
    }
    else if (summation ===21){
      document.getElementById('message').textContent='YOOOOOOOu Are the Winner '
    }
 
    
  }