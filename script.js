//data
const Quotes=[
    {
        quote:`Without continual growth and progress, such words as improvement, achievement, and success have no meaning`,
        author:`raji`   
     },
     {
        quote:`"The purpose of our lives is to be happy`,
        author:`Dalai Lama`  
     },
     {
        quote:`You only live once, but if you do it right, once is enough`,
        author:`Mae West`  
     },

     {
        quote:`Many of life’s failures are people who did not realize how close they were to success when they gave up`,
        author:`Thomas A. Edison`  
     },

     {
        quote:`Never let the fear of striking out keep you from playing the game`,
        author:` Babe Ruth`  
     },

     {
        quote:`Money and success don’t change people; they merely amplify what is already there`,
        author:`Will Smith`  
     },

     {
        quote:`Not how long, but how well you have lived is the main thing`,
        author:`Seneca`  
     },

     {
        quote:`The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”– Henry Ford`,
        author:` Henry Ford`  
     
     }

]


// acess the elements
const DisplayElem=document.getElementById('display');
const AuthorElem=document.getElementById('Author');
const Btn=document.getElementById('generate');

//function to generate diffrent quotes
//normal function
//function Random Quotes(){}
//}
//arrow function
const RandomQuotes=()=>{
    //logic to generate random Quotes
    let index=Math.floor(Math.random()*(Quotes.length))
    //to display the output
    DisplayElem.innerHTML=Quotes[index].quote
    // // to display the output of the author
    AuthorElem.innerHTML=`~`+Quotes[index].author
}

//button functionality 
//Btn.onclick=Random Quotes
Btn.addEventListener('click',RandomQuotes)