import React, { useState, useEffect } from 'react';

const RandQuote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setIsLoading(false);
      })
    }, []);
}

export default RandQuote;
