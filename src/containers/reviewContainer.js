import React, { useContext } from 'react';
import { Review, Restaurant } from '../components';
import StarRating from '../components/StarRating';
import PlacesContext from '../contexts/places-context';

export default function ReviewContainer() {
  const { reviews } = useContext(PlacesContext);
  return (
    <>
      <Review>
        {reviews && (
          <>
            <Review.Header>
              <Restaurant.Title>{reviews.name}</Restaurant.Title>
              <Restaurant.Location>
                {reviews.formatted_address}
              </Restaurant.Location>
              <Restaurant.Rating>
                <StarRating total={reviews.rating} />
              </Restaurant.Rating>
              <Review.Button>Add Review</Review.Button>
            </Review.Header>
          </>
        )}

        <Review.Body>
          {reviews.reviews ? (
            reviews.reviews.map((review) => (
              <>
                <Review.Title>{review.author_name}</Review.Title>
                <Review.Rating>
                  <StarRating total={review.rating} />
                </Review.Rating>
                <Review.Text>{review.text}</Review.Text>
              </>
            ))
          ) : (
            <>
              <Review.Text>There are no Reviews yet!</Review.Text>
            </>
          )}
        </Review.Body>
      </Review>
    </>
  );
}
