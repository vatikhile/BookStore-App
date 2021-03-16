import Axios from '../../Service/axiosService/axiosService'
const baseUrl = "https://backend-bookstore.herokuapp.com/bookstore_user";
const httpService = new Axios();

export default class productServices {
  getBooks = () => {
    return httpService.get(`${baseUrl}/get/book`);
  };
}