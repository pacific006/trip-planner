export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole travels in exploration",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: " Two travels in tandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 peole",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seeks",
    icon: "⛵",
    people: "5 to 10 People",
  },
];
export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of cost",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: " Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about cost",
    icon: "💸",
  },
];

//export const AI_PROMT = "Generate Travel Plan for Location: {location}";
export const AI_PROMT =
  "Generate Travel Plan for Location:{location}, for {totalDays} Days for {traveler} with a {budget} budget, Give me a hotels options list with HotelName, Hotel addresss Price, Hotel Image Url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place image Url , Geo Coordinates, ticket Pricing, rating, time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.";
