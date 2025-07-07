import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import { TicketPercent } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserTripCardItem({ trip }) {
  console.log(trip);

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);
  const [photUrl, setPhotoUrl] = useState("");

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.useSelection?.location?.label,
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
    <Link to={"/view-trip/" + trip?.id}>
      <div className="hover:scale-105 transition-all">
        <img
          src={photUrl ? photUrl : "/placeholder.jpg"}
          className="object-cover rounded-xl h-[220px] "
        />
        <div>
          <h2 className="font-bold text-md">
            {trip?.useSelection?.location?.label}
          </h2>
          <h2 className="text-sm text-gray-500">
            {" "}
            {trip?.useSelection?.noOfDays} Days trip with{" "}
            {trip?.useSelection?.budget} Budget
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default UserTripCardItem;
