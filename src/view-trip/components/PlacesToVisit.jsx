import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  //console.log(trip.tripData?.itinerary);
  console.log(trip);
  return (
    <div>
      <h2 className="font-bold text-lg mt-3">Places to Visit</h2>

      <div>
        {trip.tripData?.itinerary.map((item, index) => (
          <div className="mt-5">
            <h2 className="font-medium text-xl">
              Day-{item.day} :{" "}
              <span className="text-lg  text-gray-800  ">{item.theme}</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.plan.map((place, index) => (
                <div>
                  {/* <h2 className="font-medium text-sm text-orange-600">
                    {place.time_to_travel}
                  </h2> */}
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
