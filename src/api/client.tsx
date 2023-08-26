import axios from "axios";

const baseURL = "http://fmsportal:8080/v1.0";



const useGet = async (url :String, params :String) : Promise<any> => {
    // console.log('useGet -> ')
    const token = localStorage.getItem('token')
    // console.log(token)
    const response = await axios.get(baseURL + url + params,{ headers: {'Authorization': `Bearer ${token}`} }).then((response) => {
      return response;
    }).catch(err => { console.log('err -> ', err) ; return err });
    return response
}

const usePost = async (url :String, payload: any) : Promise<any> => {
    // console.log('usePost -> ', baseURL + url, payload)
    const token = localStorage.getItem('token')
    const response = await axios.post(baseURL + url, payload).then((response) => {
        // console.log('response -> ', response)
      return response;
    }).catch(err => { console.log('err -> ', err) ; return err });
    return response
}

const client = { get: useGet, post: usePost }

export default client