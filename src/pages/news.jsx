import { useState } from "react";
import Header from "../components/header";
import NewsItem from "../components/newsItem";

const news = [
  {
    title: "Первая",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus qui expedita beatae officia distinctio voluptatibus ab dolorum, explicabo dolores corrupti aliquid, optio quos vitae accusantium maxime earum quaerat inventore blanditiis!",
    date: "2020",
    id: "1",
  },
  {
    title: "Вторая",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus qui expedita beatae officia distinctio voluptatibus ab dolorum, explicabo dolores corrupti aliquid, optio quos vitae accusantium maxime earum quaerat inventore blanditiis!",
    date: "2020",
    id: "2",
  },
  {
    title: "Третья",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus qui expedita beatae officia distinctio voluptatibus ab dolorum, explicabo dolores corrupti aliquid, optio quos vitae accusantium maxime earum quaerat inventore blanditiis!",
    date: "2020",
    id: "3",
  },
  {
    title: "Четвертая",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus qui expedita beatae officia distinctio voluptatibus ab dolorum, explicabo dolores corrupti aliquid, optio quos vitae accusantium maxime earum quaerat inventore blanditiis!",
    date: "2020",
    id: "4",
  },
];

const News = () => {
  const [activeNews, setActiveNews] = useState(news);

  const filterNews = ({ target: { value } }) => {
    const filteredUsers = news.filter((item) => ( item.title.toLowerCase().includes(value.toLowerCase())));
    setActiveNews(filteredUsers)
  };

  return (
    <section className="container news">
      <Header></Header>
      <div className="news__search">
        <h2 className="news__search-title">Search:</h2>
        <input className="input news__search-input" onChange={filterNews} type="text" />
      </div>
      <div className="columns">
      {activeNews.map((item) => (
        <NewsItem
          key={item.id}
          title={item.title}
          date={item.date}
          text={item.text}
          className="column"
        />
      ))}
      </div>
    </section>
  );
};
export default News;
