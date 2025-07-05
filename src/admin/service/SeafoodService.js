import axios from 'axios';

var SEAFOOD_BASE_REST_API_URL = 'http://localhost:3000/seafood';

class SeafoodService{
    getAllSeafoods(){
        return axios.get(SEAFOOD_BASE_REST_API_URL)
    }
    // hàm thêm hải sản
    createSeafood(seafood){
        return axios.post(SEAFOOD_BASE_REST_API_URL, seafood);
    }

    // hàm cho phép lấy seafood
    getSeafoodByID(seafoodID){
        return axios.get(SEAFOOD_BASE_REST_API_URL + '/' +seafoodID);
    }
    // hàm cho phép cập nhật seafood
    updateSeafoods(seafoodID, seafood){
        return axios.put(SEAFOOD_BASE_REST_API_URL + '/' + seafoodID, seafood);
    }

    deleteSeafoods(seafoodID){
        return axios.delete(SEAFOOD_BASE_REST_API_URL + '/' + seafoodID);
    }
}
export default new SeafoodService();