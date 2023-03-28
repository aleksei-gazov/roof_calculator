import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3004/',

})

// export const get = ()=> {
//     instance.get('data?material=metal')
//         .then((res)=>{console.log(res)})
// }
export const dataAPI = {
    getMaterial(material: string) {
        return instance.get(`data?material=${material}`)
    }
}
export const configAIP = {
    getConfigData() {
        return instance.get('config')
    }
}
