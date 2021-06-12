import MY_API_ENDPOINT from '../globals/endpoint';
 
class TheRestaurantDbSource {
  static async listRestaurant() {
     const response = await fetch(MY_API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }
  
  static async detailRestaurant(id) {
    const response = await fetch(MY_API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default TheRestaurantDbSource;