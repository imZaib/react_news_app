import React from 'react'

const NewsItem = (props)=> {


    let {title, description, imageUrl, url, date,author} = props;
    return (
      <div className='my-3'>
        <div className="card" >
        <img src={!imageUrl?"https://ktla.com/wp-content/uploads/sites/4/2022/05/GettyImages-464646860.jpg?w=1280":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={url} target='_blank' className="btn btn-dark btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
