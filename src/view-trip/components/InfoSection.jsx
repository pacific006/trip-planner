import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
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
    <div>
      <img
        src={photUrl ? photUrl : "/placeholder.jpg"}
        className="h-[340px] w-full object-cover  rounded-xl"
      />
      <div className=" flex justify-between items-center">
        <div className="my-5 flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {" "}
            {trip?.useSelection?.location?.label}{" "}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              📅 {trip?.useSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              💰 {trip?.useSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              🥂 No Of Traveler: {trip?.useSelection?.traveler}{" "}
            </h2>
          </div>
        </div>
        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
