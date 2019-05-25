import React, { useState, useEffect } from 'react';
import getData from './getData';
import getRandomNum from './getRandomNum';
import './App.scss';

const App = () => {
  const [quotes, setQuotes] = useState(null);
  const [quote, setQuote] = useState('');
  const changeQuote = () => {
    const randomNum = getRandomNum(quotes.length - 1);
    setQuote(quotes[randomNum]);
  };
  useEffect(() => {
    const url =
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    getData(url)
      .then(data => {
        setQuotes(data.quotes);
        const randomNum = getRandomNum(data.quotes.length - 1);
        setQuote(data.quotes[randomNum]);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <main className="main-container">
      <div id="quote-box">
        <div className="quote-container">
          <h1 id="text">{quote ? quote.quote : 'Loading...'}</h1>
          <h2 id="author">{quote ? `- ${quote.author}` : ''}</h2>
        </div>
        <div className="buttons-container">
          <button className="button" onClick={changeQuote} id="new-quote">
            New Quote
          </button>
          <a
            className="button"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${quote.quote}-${
              quote.author
            }`}
            target="_blank"
          >
            Tweet Quote
          </a>
        </div>
      </div>
    </main>
  );
};

export default App;
