import Axios from '../../Service/axiosService/axiosService'
const httpService = new Axios();

export default class userService {
    baseUrl = 'https://backend-bookstore.herokuapp.com/bookstore_user'
    userRegister = (data) => {
        // return axios.post(`${BaseURL}/userSignUp`,data)
        return httpService.Post(`${this.baseUrl}/registration`, data);
    }

    login = (data) => {
        return httpService.Post(`${this.baseUrl}/login`, data);
    }
 

}