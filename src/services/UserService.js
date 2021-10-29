import axios from "axios";

export class UserService {

    baseUrl = "https://jsonplaceholder.typicode.com/users";

    readAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }
}

