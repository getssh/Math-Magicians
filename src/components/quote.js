import { useState, useEffect } from 'react';

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
        setQuote(`${data[0].quote}`);
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
