import Requester from "../utils/Requester";

export class Model{
    constructor() {
        this.entity = {};
    }

    async getList(url){
        Requester.get(url);
    }
}