import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3004/',
})

export const dataAPI = {
    getMaterial(material: string) {
        return instance.get(`data?material=${material}`)
    },
    getPipeMaterial() {
        return instance.get(`data?type=pipe`)
    },
    getFixMaterial() {
        return instance.get(`data?type=fix`)
    }
}
export const configAIP = {
    getConfigData() {
        return instance.get('config')
    }
}
