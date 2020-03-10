import Requester from "../utils/Requester";
import Config from "./Config";

export class Model{
    constructor(url, config = new Config) {
        this.config = config;
        this.entity = {};
        this.url = "/";
    }

    async getList(url = null){
        url = url !== null ? url : this.url;
        let response = Requester.get(url);
        if(this.config.validateApiResponse(response) == true){
            return response[this.config.data.name];
        }
    }

    async getItem(id, url = null){
        url = url !== null ? url : this.url;
        let response = Requester.get(url+"/"+id);
        if(this.config.validateApiResponse(response) == true){
            return response[this.config.data.name];
        }
    }

    async update(id, data, url = null){
        url = url !== null ? url : this.url;
        let response = Requester.post(url+"/"+id,data);
        if(this.config.validateApiResponse(response) == true){
            return response[this.config.data.name];
        }
    }

    async create(data, url = null){
        url = url !== null ? url : this.url;
        let response = Requester.post(url,data);
        if(this.config.validateApiResponse(response) == true){
            return response[this.config.data.name];
        }
    }
}