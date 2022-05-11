import axios from "axios";

const getuserslistAPI = async () => {
    return axios.get('https://srizon-5fcc1.el.r.appspot.com/api/admin/getUserlist')
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getuserslistAPI;