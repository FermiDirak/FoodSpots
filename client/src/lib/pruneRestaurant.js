/**
 * Converts a google maps restaurant object into a neater format
 * @param {object} google maps restaurant object
 * @return {object} pruned restaurant object
 */
let pruneRestaurant = (restaurant) => {
  console.log('!!!', restaurant);

  return {
    address: restaurant.formatted_address,
    short_address: restaurant.vicinity,
    phone_number: restaurant.formatted_phone_number,
    location: {
      lng: restaurant.geometry.location.lng(),
      lat: restaurant.geometry.location.lat(),
    },
    icon: restaurant.icon,
    id: restaurant.place_id,
    name: restaurant.name,
    opening_hours: {
      periods: restaurant.opening_hours ? restaurant.opening_hours.periods : [],
      weekday_text: restaurant.opening_hours ? restaurant.opening_hours.weekday_text : [],
    },
    photos: restaurant.photos,
    price_level: restaurant.price_level,
    rating: restaurant.rating,
    reviews: restaurant.reviews,
    tags: restaurant.types,
    website: restaurant.website,
  }
}

export default pruneRestaurant;