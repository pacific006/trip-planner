import { GoogleGenAI } from "@google/genai";

export async function main(FINAL_PROMT) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY,
  });
  const config = {
    thinkingConfig: {
      thinkingBudget: 0,
    },
    responseMimeType: "application/json",
  };
  const model = "gemini-2.5-flash-preview-04-17";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `Generate Travel Plan for Location: Las Vegas, for 3 Days for couple with a moderate budget, Give me a hotels options list with HotelName, Hotel addresss Price, Hotel Image Url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place image Url , Geo Coordinates, ticket Pricing, rating, time to travel each of the location for 3  days with each day plan with best time to visit in JSON format.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `\`\`\`json
  {
    "hotels": [
      {
        "hotel_name": "The Mirage",
        "hotel_address": "3400 S Las Vegas Blvd, Las Vegas, NV 89109",
        "price_range": "$100 - $250 per night",
        "hotel_image_url": "https://example.com/mirage_image.jpg",
        "geo_coordinates": {
          "latitude": 36.1201,
          "longitude": -115.1734
        },
        "rating": 4.5,
        "description": "Iconic hotel on the Strip with a volcano show, tropical pool, and variety of dining options."
      },
      {
        "hotel_name": "New York-New York Hotel & Casino",
        "hotel_address": "3790 S Las Vegas Blvd, Las Vegas, NV 89109",
        "price_range": "$80 - $200 per night",
        "hotel_image_url": "https://example.com/nyny_image.jpg",
        "geo_coordinates": {
          "latitude": 36.1016,
          "longitude": -115.1717
        },
        "rating": 4.0,
        "description": "Features a rollercoaster, replica New York City landmarks, and diverse entertainment."
      },
      {
        "hotel_name": "Treasure Island - TI Hotel & Casino, a Radisson Hotel",
        "hotel_address": "3300 S Las Vegas Blvd, Las Vegas, NV 89109",
        "price_range": "$70 - $180 per night",
        "hotel_image_url": "https://example.com/ti_image.jpg",
        "geo_coordinates": {
          "latitude": 36.1224,
          "longitude": -115.1727
        },
        "rating": 4.2,
        "description": "Known for its Sirens of TI show (check schedule), diverse dining, and lively atmosphere."
      },
      {
        "hotel_name": "Luxor Hotel & Casino",
        "hotel_address": "3900 S Las Vegas Blvd, Las Vegas, NV 89119",
        "price_range": "$60 - $150 per night",
        "hotel_image_url": "https://example.com/luxor_image.jpg",
        "geo_coordinates": {
          "latitude": 36.0955,
          "longitude": -115.1765
        },
        "rating": 3.9,
        "description": "Pyramid-shaped hotel with unique architecture, an incline elevator, and various attractions."
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "theme": "Strip Exploration and Iconic Views",
        "best_time_to_visit_day": "Morning and Evening",
        "plan": [
          {
            "place_name": "Welcome to Las Vegas Sign",
            "place_details": "A classic photo opportunity to commemorate your trip.",
            "place_image_url": "https://example.com/welcomesign_image.jpg",
            "geo_coordinates": {
              "latitude": 36.0819,
              "longitude": -115.1712
            },
            "ticket_pricing": "Free",
            "rating": 4.6,
            "time_to_travel": "30 minutes"
          },
          {
            "place_name": "Bellagio Fountains",
            "place_details": "Witness the captivating water show choreographed to music.",
            "place_image_url": "https://example.com/bellagiofountains_image.jpg",
            "geo_coordinates": {
              "latitude": 36.1117,
              "longitude": -115.1747
            },
            "ticket_pricing": "Free",
            "rating": 4.8,
            "time_to_travel": "1 hour (including multiple shows)"
          },
          {
            "place_name": "The Venetian Resort Las Vegas",
            "place_details": "Experience the charm of Venice with gondola rides and intricate architecture.",
            "place_image_url": "https://example.com/venetian_image.jpg",
            "geo_coordinates": {
              "latitude": 36.1210,
              "longitude": -115.1697
            },
            "ticket_pricing": "Free to explore (Gondola rides are extra, ~$30-$40 per person)",
            "rating": 4.7,
            "time_to_travel": "2-3 hours"
          },
          {
            "place_name": "High Roller Observation Wheel",
            "place_details": "Get panoramic views of the Las Vegas Strip from this towering observation wheel.",
            "place_image_url": "https://example.com/highroller_image.jpg",
            "geo_coordinates": {
              "latitude": 36.1166,
              "longitude": -115.1687
            },
            "ticket_pricing": "$25 - $40 per person (prices vary based on time of day)",
            "rating": 4.5,
            "time_to_travel": "1.5 - 2 hours"
          },
          {
            "place_name": "Fremont Street Experience",
            "place_details": "Vibrant pedestrian mall with a dazzling light show, street performers, and live music.",
            "place_image_url": "https://example.com/fremontstreet_image.jpg",
            "geo_coordinates": {
              "latitude": 36.1696,
              "longitude": -115.1462
            },
            "ticket_pricing": "Free",
            "rating": 4.5,
            "time_to_travel": "2-3 hours (evening)"
          }
        ]
      },
      {
        "day": 2,
        "theme": "Entertainment and Cultural Experiences",
        "best_time_to_visit_day": "Afternoon and Evening",
        "plan": [
          {
            "place_name": "The Mob Museum",
            "place_details": "Delve into the history of organized crime and law enforcement in America.",
            "place_image_url": "https://example.com/mobmuseum_image.jpg",
            "geo_coordinates": {
              "latitude": 36.1713,
              "longitude": -115.1439
            },
            "ticket_pricing": "$29.95 - $49.95 per person",
            "rating": 4.7,
            "time_to_travel": "2-3 hours"
          },
          {
            "place_name": "Neon Museum",
            "place_details": "Explore a collection of iconic Las Vegas signs, offering a glimpse into the city's past.",
            "place_image_url": "https://example.com/neonmuseum_image.jpg",
            "geo_coordinates": {
              "latitude": 36.1841,
              "longitude": -115.1283
            },
            "ticket_pricing": "$20 - $28 per person",
            "rating": 4.6,
            "time_to_travel": "1.5 - 2 hours"
          },
          {
            "place_name": "Enjoy a Vegas Show",
            "place_details": "Catch a world-class performance, from Cirque du Soleil to magic or comedy.",
            "place_image_url": "https://example.com/vegas_show_image.jpg",
            "geo_coordinates": {
              "latitude": "Varies depending on venue",
              "longitude": "Varies depending on venue"
            },
            "ticket_pricing": "Varies greatly ($50 - $200+ per person)",
            "rating": "Varies greatly",
            "time_to_travel": "2-3 hours (evening)"
          },
          {
            "place_name": "Dinner at a themed restaurant",
            "place_details": "Experience unique dining at one of Las Vegas' many themed restaurants.",
            "place_image_url": "https://example.com/themed_restaurant_image.jpg",
            "geo_coordinates": {
              "latitude": "Varies depending on restaurant",
              "longitude": "Varies depending on restaurant"
            },
            "ticket_pricing": "Varies greatly",
            "rating": "Varies greatly",
            "time_to_travel": "1.5 - 2 hours (evening)"
          }
        ]
      },
      {
        "day": 3,
        "theme": "Relaxation and Culinary Delights",
        "best_time_to_visit_day": "Morning and Afternoon",
        "plan": [
          {
            "place_name": "Explore a Hotel Pool",
            "place_details": "Relax and soak up the sun at your hotel's pool or consider a day pass to another pool.",
            "place_image_url": "https://example.com/hotel_pool_image.jpg",
            "geo_coordinates": {
              "latitude": "Varies depending on hotel",
              "longitude": "Varies depending on hotel"
            },
            "ticket_pricing": "Free (for hotel guests) or Day Pass (~$20 - $50+)",
            "rating": "Varies greatly",
            "time_to_travel": "2-4 hours"
          },
          {
            "place_name": "Forum Shops at Caesars Palace",
            "place_details": "Enjoy high-end shopping in a beautiful Roman-inspired setting.",
            "place_image_url": "https://example.com/forumshops_image.jpg",
            "geo_coordinates": {
              "latitude": 36.1168,
              "longitude": -115.1744
            },
            "ticket_pricing": "Free to explore",
            "rating": 4.6,
            "time_to_travel": "2-3 hours"
          },
          {
            "place_name": "Buffet Brunch or Lunch",
            "place_details": "Indulge in a famous Las Vegas buffet experience.",
            "place_image_url": "https://example.com/vegas_buffet_image.jpg",
            "geo_coordinates": {
              "latitude": "Varies depending on buffet",
              "longitude": "Varies depending on buffet"
            },
            "ticket_pricing": "$30 - $60+ per person",
            "rating": "Varies greatly",
            "time_to_travel": "1.5 - 2 hours"
          },
          {
            "place_name": "Mirage Volcano",
            "place_details": "Catch the free volcano show at the Mirage (check showtimes).",
            "place_image_url": "https://example.com/miragevolcano_image.jpg",
            "geo_coordinates": {
              "latitude": 36.1203,
              "longitude": -115.1734
            },
            "ticket_pricing": "Free",
            "rating": 4.6,
            "time_to_travel": "30 minutes (including viewing)"
          },
          {
            "place_name": "Romantic Dinner with a View",
            "place_details": "Enjoy a special dinner at a restaurant with a view of the Strip.",
            "place_image_url": "https://example.com/romantic_dinner_image.jpg",
            "geo_coordinates": {
              "latitude": "Varies depending on restaurant",
              "longitude": "Varies depending on restaurant"
            },
            "ticket_pricing": "Varies greatly",
            "rating": "Varies greatly",
            "time_to_travel": "2-3 hours (evening)"
          }
        ]
      }
    ]
  }
  \`\`\``,
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: FINAL_PROMT,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let resultText = "";
  for await (const chunk of response) {
    if (chunk.text) {
      resultText += chunk.text;
    }
    // console.log(chunk.text);
  }
  return resultText;
}
