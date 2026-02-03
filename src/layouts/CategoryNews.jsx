import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([])
    // console.log(id), data;
    useEffect(()=>{
        if(id =="0"){
            setCategoryNews(data);
            return;
        } else if (id == "1"){
            const filteredNews = data.filter((news)=>news.others.is_today_pick == id);
            console.log(filteredNews);
            setCategoryNews(filteredNews)
        }
        const filteredNews = data.filter((news)=>news.category_id == id);
        // console.log(filteredNews)

        setCategoryNews(filteredNews)
    }, [data, id]);
    return (
        <div>
            
            <h2 className="font-bold">Total <span className="text-secondary">{categoryNews.length}</span> news found</h2>

            <div>
                {
                    categoryNews.map(news=><NewsCard news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;