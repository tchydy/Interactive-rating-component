// grab the scores, submit button, score result, thankyou-card and rating card

const allScores = [...document.querySelectorAll(".score")]
const btn = document.querySelector ('.btn');
const ratingCard = document.querySelector('.rating-card-container');
const thankyouCard = document.querySelector('.thankyou-card-container');
const scoreResult = document.querySelector ('.score-result');
let scoreValue = null;


// replace score result text content
allScores.forEach (score => {
 score.addEventListener('click', (e) => {
   scoreValue = e.currentTarget.id;
  scoreResult.innerHTML = ` You selected ${scoreValue} out of 5`;
  // hide rating and show thank you container
  btn.addEventListener ('click', () => {
   // make button unclickable
   if (scoreValue == null ){
    btn.disabled = true;
   }else{
    btn.disabled = false;
    // scoreValue = e.currentTarget.id;
    thankyouCard.classList.remove('hide')
    ratingCard.classList.add('hide')
   }
  })
 })
})