import axios from "axios";

const getOrderlistAPI = async () => {
    return axios.get('https://srizon-5fcc1.el.r.appspot.com/api/admin/getOrderlist')
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getOrderlistAPI;