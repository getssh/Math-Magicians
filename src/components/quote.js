import { useState, useEffect } from 'react';

const RandQuote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState('');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes')
      .then((response) => response.json())
      .then((data) => {
        setQuote(`${JSON.stringify(data.quote)} is it working?`);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return <div>{quote}</div>;
};

export default RandQuote;
