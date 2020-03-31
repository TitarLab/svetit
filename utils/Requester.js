import Auth from "svetit/components/Auth";


class Requester{

    getUrl(action, query){
        let url = process.env.APP_URL+process.env.API_PATH+action;
        url = this.addQuery(url, query);
        return url;
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
        method = method.toLowerCase();
        return new Promise((resolve, reject) => {
            fetch(url,{
                ...options,
                method:method,
                headers:new Headers({
                    "Authorization":"Bearer "+Auth.getToken(),
                })
            }).then((response) => {
                resolve(response.json());
            }).catch((err) => {
                reject(err);
            })
        })
    }

    addQuery(url, query){
        if(query.length > 0){
            url += "?";
            query.forEach((queryItem, index) => {
                url += queryItem.name+"="+queryItem.value;
                if(index != query.length-1){
                    url += "&";
                }
            })
        }
        return url;
    }

}

export default new Requester();
