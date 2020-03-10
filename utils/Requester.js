
class Requester{

    getUrl(action){
        return process.env.APP_URL+process.env.API_PATH+action;
    }

    get(url, options = null){
        return new Promise((resolve, reject) => {
            this.request(url,'get',options).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err)
            })
        })
    }

    post(url, body, options = null){
        options = {
            ...options,
            body:body
        };
        return new Promise((resolve, reject) => {
            this.request(url,'post',options).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err)
            })
        })
    }

    put(url, body, options = null){
        options = {
            ...options,
            body:body
        };
        return new Promise((resolve, reject) => {
            this.request(url,'put',options).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err)
            })
        })
    }

    delete(url, options = null){
        options = {
            ...options,
        };
        return new Promise((resolve, reject) => {
            this.request(url,'delete',options).then((data) => {
                resolve(data);
            }).catch((err) => {
                reject(err)
            })
        })
    }

    request(url, method, options = null){
        loader.update(value => true);
        method = method.toLowerCase();
        return new Promise((resolve, reject) => {
            fetch(url,{
                ...options,
                method:method
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            })
        })
    }

}

export default new Requester();
