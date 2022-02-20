const QUOTES = [
  { quote: "Go ahead, make my day.", author: "Harry Callahan" },
  { quote: "If you build it, they will come.", author: "Joe Jackson" },
  { quote: "May the Force be with you.", author: "Star Wars" },
  { quote: "There's no place like home.", author: "Dorothy" },
  {
    quote: "Keep your friends close, but your enemies closer.",
    author: "Michael Corleone",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
