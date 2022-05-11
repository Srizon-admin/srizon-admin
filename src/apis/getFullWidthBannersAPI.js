import axios from "axios";

const getFullWidthBannersAPI = async () => {
    return axios.get(`https://srizon-5fcc1.el.r.appspot.com/api/client/getHomeSliders`)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getFullWidthBannersAPI;