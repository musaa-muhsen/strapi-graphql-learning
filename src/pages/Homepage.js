import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery, gql} from '@apollo/client';
// useQuery to send a query to the graphql server it's bit like the useFetch that we previsouliy created but instead of passing in an api endpoint as an arguement we pass in a graphql query 
// gql function we import is used by apollo to convert a query string into a format it can use

const REVIEWS = gql`
  query GetReviews {
    reviews {
      title,
      id,
      rating,
      body,  
      categories {
        name,
        id
    }
    }
  }
`

export default function Homepage() {
    const {loading, error,data} = useQuery(REVIEWS);
   
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log(data)

    return (
        <div>
           {data.reviews.map(review => (
               <div key={review.id} className="review-card">
                   <div className="rating">
                       {review.rating}
                   </div>
                   <h2>{review.title}</h2>
                   {review.categories.map(c => (
                     <small key={c.id}>{c.name}</small>
                   ))}
                   <p>{review.body.substring(0, 200)}...</p>
                   <Link to={`/details/${review.id}`}>Read More</Link> 
               </div>
           ))} 
        </div>
    )
}
