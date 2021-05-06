import React, { useContext, useState, useEffect } from "react";
// Components
import { ReviewForm, Restaurant } from "../components";
import RatingIcon from "../components/RatingIcon";
import StarRating from "../components/StarRating";
// Containers
import {
  HeaderContainer,
  MainContainer,
  RestaurantContainer,
} from "../containers";
// Context
import PlacesContext from "../context/places-context";
// Icons
import { MdKeyboardBackspace } from "react-icons/md";

export default function FormReview({ history, match }) {
  // useContext/Context/PlacesContext
  const { addReview } = useContext(PlacesContext);
  // reviews state
  const [reviews, setReviews] = useState();
  // rating state
  const [rating, setRating] = useState(0);
  // hoverRating state
  const [hoverRating, setHoverRating] = useState(0);
  // form input states
  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [review, setReview] = useState(null);
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    rating: "",
  });
  // handle star rating gestures
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };
  // handle form submit
  const onSubmit = (e) => {
    e.preventDefault();
    //form error handling
    if (firstname === null && lastname === null) {
      setErrors({
        firstname: "Enter your first name please",
        lastname: "Enter your last name please",
        rating: "Please rate us before you submit!",
      });
    } else if (firstname === null) {
      setErrors({
        firstname: "Enter your first name please",
      });
    } else if (lastname === null) {
      setErrors({
        lastname: "Enter your last name please",
      });
    } else if (rating === 0) {
      setErrors({ rating: "Please rate us before you submit!" });
    }

    if (firstname !== null && lastname !== null && rating !== 0) {
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      setRating(0);
      addReview(match.params.id, `${firstname} ${lastname}`, rating, review);

      setTimeout(() => {
        history.goBack();
      }, 2000);
    }
  };
  // on initial load/reload
  useEffect(() => {
    const getReview = async () => {
      // get reviews from localStorage
      const Rev = await JSON.parse(window.localStorage.getItem("reviews"));
      const filterReview = Rev.filter(
        (review) => review.place_id === match.params.id
      );
      setReviews(filterReview);
    };
    getReview();
  }, [match.params.id]);

  return (
    <>
      <HeaderContainer showRating={false} />
      {reviews && (
        <MainContainer>
          <RestaurantContainer style={{ gridColumn: "1/-1" }}>
            <>
              <span className="back__form" onClick={() => history.goBack()}>
                <MdKeyboardBackspace />
                Back
              </span>
              <Restaurant.Title style={{ textAlign: "center" }}>
                {reviews[0].name}
              </Restaurant.Title>
              <Restaurant.Location style={{ textAlign: "center" }}>
                {reviews[0].formatted_address}
              </Restaurant.Location>
              <Restaurant.Rating style={{ textAlign: "center" }}>
                <StarRating total={reviews[0].rating} />
              </Restaurant.Rating>
            </>

            <ReviewForm onSubmit={onSubmit}>
              <ReviewForm.Title>
                What did you think about {reviews[0].name.replace(/ .*/, "")}?
              </ReviewForm.Title>
              <ReviewForm.Rating>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {[1, 2, 3, 4, 5].map((index) => {
                    return (
                      <RatingIcon
                        index={index}
                        rating={rating}
                        hoverRating={hoverRating}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onSaveRating={onSaveRating}
                      />
                    );
                  })}
                </div>
                {errors.rating && (
                  <div
                    style={{
                      display: "block",
                      color: "red",
                      fontSize: "10px",
                      alignText: "left",
                      margin: 0,
                      padding: 0,
                    }}
                  >
                    {errors.rating}
                  </div>
                )}
              </ReviewForm.Rating>
              <ReviewForm.FirstName
                name="author_name"
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />

              {errors.firstname && (
                <div
                  style={{
                    color: "red",
                    fontSize: "10px",
                    alignText: "left",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {errors.firstname}
                </div>
              )}

              <ReviewForm.LastName
                name="lastname"
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastname && (
                <div
                  style={{
                    color: "red",
                    fontSize: "10px",
                    alignText: "left",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {errors.lastname}
                </div>
              )}
              <ReviewForm.Review
                name="text"
                placeholder="Review"
                onChange={(e) => setReview(e.target.value)}
              />
              <ReviewForm.Button type="submit">Share Review</ReviewForm.Button>
            </ReviewForm>
          </RestaurantContainer>
        </MainContainer>
      )}
    </>
  );
}
