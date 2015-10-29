var quoteArray = ["Strive not to be a success, but rather to be of value. ", "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "I attribute my success to this: I never gave or took any excuse.", "You miss 100% of the shots you don’t take.", "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "The most difficult thing is the decision to act, the rest is merely tenacity. ", "Every strike brings me closer to the next home run.", "Life is what happens to you while you’re busy making other plans.", "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "Life is 10% what happens to me and 90% of how I react to it."];
var authorArray = ["–Albert Einstein", "–Robert Frost", "–Florence Nightingale", "-Wayne Gretzky", "–Michael Jordan", "–Amelia Earhart", "–Babe Ruth", "–John Lennon", "–Mark Twain", "–Charles Swindoll"];

var quoteIndex = 0;

window.onload = generateRandomQuote(true);

function generateRandomQuote(boolean){
  quoteIndex = (Math.floor(Math.random()*quoteArray.length));
  quote = quoteArray[quoteIndex];
  author = authorArray[quoteIndex];
  document.getElementById("quoteText").innerHTML = quote;
  document.getElementById("authorText").innerHTML = author;
  tweetSubmit(boolean);
}

function tweetSubmit(boolean){
    // Remove existing iframe
    $('#tweetBtn iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-text', quote + ' ' + author);
    if (boolean !== true) {
    $('#tweetBtn').append(tweetBtn);
    }
    twttr.widgets.load();
};