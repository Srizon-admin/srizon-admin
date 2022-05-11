import axios from "axios";

const getProductDetailsAPI = async (id) => {
    return axios.get(`https://srizon-5fcc1.el.r.appspot.com/api/client/getProductDetails/${id}`)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getProductDetailsAPI;