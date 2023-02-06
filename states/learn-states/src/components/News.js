import React from "react";
import './News.css'

function News({ props }) {
    return (
        <div>
            <img src={news.urlToImage} alt={news.title} />
            <h2>{news.title}</h2>
            <p>{news.discription}</p>
            <button className="btn-read-more" onClick={() => window.open(news.url)}>Read more</button>
        </div>
    )
}

export default News; 