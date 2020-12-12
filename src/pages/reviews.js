import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Review, Restaurant, StreetView } from '../components';
import StarRating from '../components/StarRating';
import {
  HeaderContainer,
  MainContainer,
  MapContainer,
  RestaurantContainer,
} from '../containers';
import PlacesContext from '../context/places-context';
import { MdKeyboardBackspace } from 'react-icons/md';

export default function Reviews({ history, match }) {
  const { db, places, getReview } = useContext(PlacesContext);
  const [review, setReview] = useState({});

  const filteredPlace = places.filter(
    (place) => match.params.id === place.place_id
  );
  console.log(filteredPlace[0].geometry.location.lat);

  const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?location=${filteredPlace[0].geometry.location.lat},${filteredPlace[0].geometry.location.lng}&size=456x456&key=${process.env.REACT_APP_STREET_API_KEY}`;
  const getReviews = (id) => {
    db.collection('reviews')
      .doc(id)
      .get()
      .then((document) => {
        setReview(document);
        // console.log(document);
      });
  };
  useEffect(() => {
    getReviews(match.params.id);
  }, []);
  console.log(review);
  return (
    <>
      <HeaderContainer showRating={false} />
      <MainContainer>
        <StreetView>
          <StreetView.Image src={streetViewUrl} />
        </StreetView>
        <RestaurantContainer>
          <Review>
            {review && (
              <Restaurant.Title>
                <Review.Header>
                  <span className="back" onClick={() => history.push('/')}>
                    <MdKeyboardBackspace />
                    Back
                  </span>
                  <Restaurant.Title>{review.name}</Restaurant.Title>
                  <Restaurant.Location>
                    {review.formatted_address}
                  </Restaurant.Location>
                  <Restaurant.Rating>
                    <StarRating total={review.rating} />
                  </Restaurant.Rating>
                  <Review.Button>
                    <Link to={`/reviewform/${review.place_id}`}>
                      Add Review
                    </Link>
                  </Review.Button>
                </Review.Header>
              </Restaurant.Title>
            )}

            <Review.Body>
              {review.reviews ? (
                review.reviews.map((review) => (
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
        </RestaurantContainer>
      </MainContainer>
    </>
  );
}
