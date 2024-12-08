import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import {sortPlacesByDistance} from '../loc.js'
import { fetAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlace] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const fetchPlace = async () => {
      setIsFetching(true);
      // const response = await fetch("http://localhost:3000/places");
      // const resData = await response.json();
      // console.log(resData);
      const places = await fetAvailablePlaces();
      // we can't use asyn await cause getCurrentPosition is not yield a promise
      navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlace = sortPlacesByDistance(
          places,
          position.coords.latitude,
          position.coords.longitude
        );
        setAvailablePlace(sortedPlace);
        setIsFetching(false);
      });

      // setAvailablePlace(resData.places);
    };
    fetchPlace();
  }, []);
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
