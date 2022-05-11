import axios from "axios";

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

const updateSmallWidthBannersAPI = async (values) => {
    return axios.post(`https://srizon-5fcc1.el.r.appspot.com/api/admin/updateSmallWidthBanners`,values,axiosConfig)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default updateSmallWidthBannersAPI;