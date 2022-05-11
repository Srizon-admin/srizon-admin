import axios from "axios";

const deleteUserApI = async (id) => {
    return axios.get(`https://srizon-5fcc1.el.r.appspot.com/api/admin/deleteUser/${id}`)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default deleteUserApI;