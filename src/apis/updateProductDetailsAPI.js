import axios from "axios";

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

const updateProductDetailsAPI = async (values) => {
    console.log(values);

    return axios.post(`https://srizon-5fcc1.el.r.appspot.com/api/admin/updateProductDetails`,values,axiosConfig)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default updateProductDetailsAPI;