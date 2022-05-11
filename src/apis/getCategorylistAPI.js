import axios from "axios";

const getCategorylistAPI = async () => {
    return axios.get('https://srizon-5fcc1.el.r.appspot.com/api/client/getCategoryList')
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getCategorylistAPI;