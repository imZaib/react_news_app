import React, { useEffect, useState } from 'react'
import NewsItem from '../NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)



    const capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
    }

    
    const updateNews = async () =>{
      props.setProgress(10)
      const url= `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      props.setProgress(40)
      let parsedata = await data.json()
      props.setProgress(70)
      setArticles(parsedata.articles)
      setTotalResults(parsedata.totalResults)
      props.setProgress(100)
    }

 useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - MemoNews`;
    updateNews()
    // eslint-disable-next-line
 }, [])

  async function fetchMoreData() {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(articles.concat(parsedata.articles));
    setTotalResults(parsedata.totalResults);
  }
      
    return (
      <div className='container my-4'>
      <h2 className='my-4 text-center' style={{paddingTop: "70px"}}>MemoNews Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!== totalResults}
          loader={!articles.length?<h4>Loading...</h4>:''}
        >
        <div className="container">
        <div className="row">
          {articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    )
  }

News.defaultProps = {
  country: 'in',
  pageSize : 9,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  // pageSize: PropTypes.number,
}

export default News
