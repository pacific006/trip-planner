import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PlaceCardItem({ place }) {
  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);
  const [photUrl, setPhotoUrl] = useState("");

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.place_name,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      // console.log(resp.data.places[0].photos[4].name);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
      // console.log(PhotoUrl);
    });
  };

  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place.place_name}
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all cursor-pointer hover:shadow-md">
        <img
          src={photUrl ? photUrl : "/placeholder.jpg"}
          className="w-[130px] h-[130px] rounded-xl object-cover"
        />
        <div>
          <h2 className="font-bold text-lg ">{place.place_name}</h2>
          <p className="text-sm text-gray-400">{place.place_details}</p>
          <h2 className="mt-2">🕙{place.time_to_travel}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
