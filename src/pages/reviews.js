import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Review, Restaurant, StreetView } from '../components';
import StarRating from '../components/StarRating';
import {
  HeaderContainer,
  MainContainer,
  MapContainer,
  RestaurantContainer,
} from '../containers';
import PlacesContext from '../contexts/places-context';
import { MdKeyboardBackspace } from 'react-icons/md';

export default function Reviews({ history, match, places }) {
  const { reviews, getReview } = useContext(PlacesContext);
  const filteredPlace = places.filter(
    (place) => match.params.id === place.place_id
  );
  console.log(filteredPlace[0].geometry.location.lat);

  const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?location=${filteredPlace[0].geometry.location.lat},${filteredPlace[0].geometry.location.lng}&size=456x456&key=${process.env.REACT_APP_STREET_API_KEY}`;

  return (
    <>
      <HeaderContainer />
      <MainContainer>
        <StreetView>
          <StreetView.Image src={streetViewUrl} />
        </StreetView>
        <RestaurantContainer>
          <Review>
            {reviews && (
              <Restaurant.Title>
                <Review.Header>
                  <span className="back" onClick={() => history.push('/')}>
                    <MdKeyboardBackspace />
                    Back
                  </span>
                  <Restaurant.Title>{reviews.name}</Restaurant.Title>
                  <Restaurant.Location>
                    {reviews.formatted_address}
                  </Restaurant.Location>
                  <Restaurant.Rating>
                    <StarRating total={reviews.rating} />
                  </Restaurant.Rating>
                  <Review.Button>
                    <Link to={`/reviewform/${reviews.place_id}`}>
                      Add Review
                    </Link>
                  </Review.Button>
                </Review.Header>
              </Restaurant.Title>
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
        </RestaurantContainer>
      </MainContainer>
    </>
  );
}
