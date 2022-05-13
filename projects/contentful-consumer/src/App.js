import { useEffect, useState } from "react";
import useContentful from "./hooks/useContentful";

function App() {
  const { getArticles } = useContentful();
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const articles = await getArticles();
    setArticles(articles);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {articles.map(({ title, description }, i) => (
        <div key={i}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
