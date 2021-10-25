import axios from "axios";

export default class PostService {
    static async getAll(limit=10, offset=0) {
        const response = await axios.get(`https://lldev.thespacedevs.com/2.2.0/launch/upcoming/`, {
            params:{
                _limit: limit,
                _offset: offset
            }
        });
        
        return response;
    }
}