import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Restaurant } from '../components';
import StarRating from '../components/StarRating';
import PlacesContext from '../contexts/places-context';

export default function RestaurantContainer() {
  const { places, getReviews, reviews, filtered } = useContext(PlacesContext);
  console.log(reviews);
  return (
    <>
      {filtered.length !== 0 || filtered.length == 'undefined'
        ? filtered &&
          filtered.slice(0, 6).map((restaurant, idx) => (
            <Restaurant
              key={restaurant.place_id}
              onClick={() => getReviews(restaurant.places_id)}
            >
              <div className="restaurant__image">
                {/* {restaurant.photos ? (
              <Restaurant.Image
                src={getImageUrl(restaurant.photos[0].photo_reference)}
              />
            ) : (
              // <Restaurant.Image src="./assets/mariosdefault.png" />
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '12px',
                  color: 'grey',
                }}
              >
                Image Unavailable
              </div>
            )} */}
              </div>

              <div className="restaurant__details">
                <Link to="/reviews">
                  <Restaurant.Title
                    onClick={() => {
                      console.log('clicked!!', restaurant.place_id);
                      getReviews(restaurant.place_id);
                    }}
                  >
                    {restaurant.name}
                  </Restaurant.Title>
                </Link>
                <Restaurant.Location>{restaurant.vicinity}</Restaurant.Location>
                <Restaurant.Rating>
                  <StarRating total={restaurant.rating} />
                </Restaurant.Rating>
              </div>
            </Restaurant>
          ))
        : places &&
          places.slice(0, 6).map((restaurant, idx) => (
            <Restaurant key={restaurant.place_id}>
              <div className="restaurant__image">
                <svg
                  width="96"
                  height="96"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="96" height="96" fill="#454444" />
                  <path
                    d="M58.4867 49.1983C59.3545 49.2091 60.2158 49.0459 61.0195 48.7184C61.8233 48.391 62.5534 47.9058 63.1667 47.2917L69.2983 41.16C69.7019 40.754 69.9284 40.2049 69.9284 39.6325C69.9284 39.0601 69.7019 38.511 69.2983 38.105C69.0969 37.9019 68.8573 37.7407 68.5932 37.6307C68.3292 37.5207 68.046 37.4641 67.76 37.4641C67.474 37.4641 67.1908 37.5207 66.9268 37.6307C66.6627 37.7407 66.4231 37.9019 66.2217 38.105L60.025 44.215C59.8236 44.4181 59.5839 44.5793 59.3199 44.6893C59.0559 44.7993 58.7727 44.8559 58.4867 44.8559C58.2006 44.8559 57.9174 44.7993 57.6534 44.6893C57.3894 44.5793 57.1498 44.4181 56.9483 44.215L64.6183 36.5667C64.8204 36.3646 64.9806 36.1248 65.0899 35.8609C65.1993 35.5969 65.2555 35.314 65.2555 35.0283C65.2555 34.7426 65.1993 34.4597 65.0899 34.1958C64.9806 33.9318 64.8204 33.692 64.6183 33.49C64.4163 33.288 64.1765 33.1277 63.9125 33.0184C63.6486 32.9091 63.3657 32.8528 63.08 32.8528C62.7943 32.8528 62.5114 32.9091 62.2475 33.0184C61.9835 33.1277 61.7437 33.288 61.5417 33.49L53.8933 41.16C53.4898 40.754 53.2633 40.2049 53.2633 39.6325C53.2633 39.0601 53.4898 38.511 53.8933 38.105L60.025 31.9733C60.227 31.7713 60.3873 31.5315 60.4966 31.2675C60.6059 31.0036 60.6622 30.7207 60.6622 30.435C60.6622 30.1493 60.6059 29.8664 60.4966 29.6025C60.3873 29.3385 60.227 29.0987 60.025 28.8967C59.823 28.6946 59.5832 28.5344 59.3192 28.4251C59.0553 28.3157 58.7724 28.2595 58.4867 28.2595C58.201 28.2595 57.9181 28.3157 57.6541 28.4251C57.3902 28.5344 57.1504 28.6946 56.9483 28.8967L50.8167 35.0283C49.5994 36.2471 48.9157 37.8992 48.9157 39.6217C48.9157 41.3442 49.5994 42.9962 50.8167 44.215L48 47.01L30.0817 29.0267L29.865 28.8967C29.7542 28.8 29.6302 28.7198 29.4967 28.6583L29.1067 28.5067L28.8467 28.3333H28.2617C28.1325 28.3127 28.0008 28.3127 27.8717 28.3333C27.7405 28.3811 27.6166 28.4467 27.5033 28.5283L27.1567 28.745H27.005L26.875 28.9617C26.7833 29.0761 26.7034 29.1995 26.6367 29.33C26.5732 29.4621 26.5224 29.6 26.485 29.7417V29.98C25.9592 33.6447 26.2944 37.3815 27.4641 40.8942C28.6337 44.4068 30.6056 47.5987 33.2233 50.2167L38.9433 55.915L27.2217 67.615C27.0186 67.8164 26.8574 68.0561 26.7474 68.3201C26.6374 68.5841 26.5808 68.8673 26.5808 69.1533C26.5808 69.4394 26.6374 69.7226 26.7474 69.9866C26.8574 70.2506 27.0186 70.4902 27.2217 70.6917C27.4241 70.8925 27.6642 71.0513 27.9282 71.1592C28.1922 71.267 28.4749 71.3216 28.76 71.32C29.0452 71.3216 29.3278 71.267 29.5918 71.1592C29.8558 71.0513 30.0959 70.8925 30.2983 70.6917L43.45 57.735L49.5817 51.6033L53.915 47.27C55.124 48.492 56.7677 49.1853 58.4867 49.1983ZM41.9117 53.1417L36.2133 47.4217C33.09 44.2556 31.1343 40.1227 30.6667 35.7L44.9883 50L41.9117 53.1417ZM55.4317 54.3767C55.0237 53.9658 54.4692 53.7338 53.8902 53.7318C53.3111 53.7298 52.755 53.9578 52.3442 54.3658C51.9333 54.7738 51.7013 55.3283 51.6993 55.9073C51.6973 56.4864 51.9253 57.0425 52.3333 57.4533L65.9833 71.1033C66.3972 71.4799 66.9407 71.6818 67.5 71.6667C67.7851 71.6683 68.0678 71.6137 68.3318 71.5058C68.5958 71.398 68.8359 71.2391 69.0383 71.0383C69.2414 70.8369 69.4026 70.5973 69.5126 70.3332C69.6226 70.0692 69.6792 69.786 69.6792 69.5C69.6792 69.214 69.6226 68.9308 69.5126 68.6667C69.4026 68.4027 69.2414 68.1631 69.0383 67.9617L55.4317 54.3767Z"
                    fill="#FFE455"
                  />
                </svg>
              </div>
              <div className="restaurant__details">
                <Link to="/reviews">
                  <Restaurant.Title
                    onClick={() => {
                      console.log('clicked!!', restaurant.place_id);
                      getReviews(restaurant.place_id);
                    }}
                  >
                    {restaurant.name}
                  </Restaurant.Title>
                </Link>
                <Restaurant.Location>{restaurant.vicinity}</Restaurant.Location>
                <Restaurant.Rating>
                  <StarRating total={restaurant.rating} />
                </Restaurant.Rating>
              </div>
            </Restaurant>
          ))}
    </>
  );
}
