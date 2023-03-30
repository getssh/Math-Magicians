import { useState, useEffect } from 'react';
import './quote.css';

const RandQuote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState('');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': 'Jf7syCWXxeX0DMtv1WoSPg==n4AwYFivkgYCUFOH',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0]);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="quote-wrap">Loading...</div>;
  }

  if (error) {
    return (
      <div className="quote-wrap">
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="quote-wrap">
      <p>
        {quote.quote}
      </p>
      <br />
      <p className="author">
        {quote.author}
      </p>
    </div>
  );
};

export default RandQuote;
