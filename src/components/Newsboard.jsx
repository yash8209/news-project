import React, { useState, useEffect } from 'react';
import Newsitem from './newsitem';

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=${category}`;
    const apiKey = '90f3644761954f858ed83fd25c145656';

    fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {error ? (
            <p>Error: {error}</p>
          ) : (
            <div>
              <h2 className="text-center">
                LATEST <span className="badge bg-danger"> NEWS </span>
              </h2>
              {articles.map((news, index) => (
                <Newsitem
                  key={index}
                  title={news.title}
                  description={news.description}
                  src={news.urlToImage}
                  url={news.url}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Newsboard;

