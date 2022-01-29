const NewsItem = ({ title, text, date, className }) => {
  return (
    <article className={className}>
      <div className="card">
        <div className="card-content">
            <p>{title}</p>
            <p>{text}</p>
            <p>{date}</p>
        </div>
      </div>
    </article>
  );
};
export default NewsItem;
