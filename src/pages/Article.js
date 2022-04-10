import React, {useState, useEffect} from "react";
import articleContent from "./ArticleContent";
import {useParams} from "react-router-dom";
import Articles from '../component/Articles'
import NotFound from "./NotFound";
import Comment from "../component/Comment";
import AddCommentForm from "../component/AddComments"

const Article = () =>{
    const { name } = useParams();
    const [articleInfo, setArticalInfo] = useState({comment : []});

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch(`/api/articles/${name}`);
          const body = await result.json();
          setArticalInfo(body);
        };
        fetchData();
      }, [name]);

    const article = articleContent.find((article) => {
        if(article.name === name) return article;
    });
    if(!article) return <NotFound />
    
    const otherArticles = articleContent.filter((article) => article.name !== name);
    return(
        <div className="mb-20">
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
                { article && article.title}
            </h1>
            {article && article.content.map((paragraph, index) =>{
                return  <p className="mx-auto leading-relaxed text-base mb-4" key = {index}>{paragraph}</p>
            }
               
            )}
            <Comment comments = {articleInfo.comment}/>
            <h3 className = "font-bold italic">Connor_384783</h3>
            <p>This is such a great article, thank you Wang!</p>
            <AddCommentForm articleName = {name} setArticleInfo = {setArticalInfo} />
            <h1 className='sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900'>
                    Other Articles
                </h1>
            <div className='flex flex-wrap -m-4'>
                    <Articles article={otherArticles} />
            </div>
        </div>
    )
}

export default Article;