import Requester from "../utils/Requester";
import Config from "./Config";

export default class Model{
    constructor(url, config = new Config) {
        this.config = config;
        this.entity = {};
        this.url = url;
    }

    async getList(url = null, query = []){
        url = url !== null ? url : this.url;

        return Requester.get(Requester.getUrl(url, query)).then((response) => {
            if(this.config.validateApiResponse(response) == true){
                return response[this.config.getApiResponse().data.name];
            }else{
                return false;
            }
        });
    }

    async getItem(id, url = null, query = []){
        url = url !== null ? url : this.url;
        return  Requester.get(Requester.getUrl(url+"/"+id, query)).then((response) => {
            if(this.config.validateApiResponse(response) == true){
                return response[this.config.getApiResponse().data.name];
            }else{
                return false;
            }
        });

    }

    async update(id, data, url = null, query = []){
        url = url !== null ? url : this.url;
        return Requester.post(Requester.getUrl(url+"/"+id, query),data).then((response) => {
            if(this.config.validateApiResponse(response) == true){
                return response[this.config.getApiResponse().data.name];
            }else{
                return false;
            }
        })
    }

    async create(data, url = null, query = []){
        url = url !== null ? url : this.url;
        return Requester.post(Requester.getUrl(url, query),data).then((response) => {
            if(this.config.validateApiResponse(response) == true){
                return response[this.config.getApiResponse().data.name];
            }else{
                return false;
            }
        });
    }
}
