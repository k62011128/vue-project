import axios from 'axios'

export default function ajax(url:any, data = {}, type = 'GET') {
    return new Promise((resolve, reject) => {
        let promise
        if (type === 'GET') {
            promise = axios.get(url, {
                params: data
            });
        } else {
            promise = axios.post(url, data);
        }
        promise.then((res:any) => {
            resolve(res.data)
        }).catch((err:any)=> {
            console.log('出错了!')
            console.log(err.message)
        })
    })

}
