import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../../features/news/programming/newsSliceTech";
import Card from "../../molekuls/Card/Card";

const NewsListTech = () => {
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.articles.entities);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  console.log(allNews);

  return (
    <>
      <div className="mx-6">
        <h1 className="text-2xl my-2">Programming News</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 w-68 m-3">
        {allNews.map((news, index) => {
          return (
            <div key={index} className="border-1 border-gray-700/30 rounded">
              <Card
                source={news.source.name}
                Image={news.urlToImage}
                titleImg={news.title}
                title={news.title}
                author={news.author}
                description={news.description}
                url={news.url}
              />
            </div>

            // <div key={index} className="border-1 border-gray-700/30 rounded">
            //   <p className="px-4 text-xs opacity-75 my-2">{news.source.name}</p>
            //   <img
            //     src={news.urlToImage}
            //     alt={news.title}
            //     className="w-full px-4"
            //   />
            //   <h1 className="text-lg px-4">{news.title}</h1>
            //   <p className="text-xs opacity-75 my-2 px-4">{news.author}</p>
            //   <p className="text-sm px-4">{news.description}</p>
            //   <div className="flex flex-row justify-between mt-4 px-4 py-2">
            //     <a
            //       href={news.url}
            //       target="_blank"
            //       className="bg-blue-300 py-2 px-4 rounded"
            //     >
            //       News Pages
            //     </a>
            //     <button className="bg-blue-700 text-white py-2 px-4 rounded">
            //       Save
            //     </button>
            //   </div>
            // </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsListTech;
