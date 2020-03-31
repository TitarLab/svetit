import Requester from "../utils/Requester";

const defaultConfigParam = {
    code:{
        optional: false,
        name: "code"
    },
    data:{
        optional:false,
        name:"data"
    },
    message:{
        optional:true,
        name:"message"
    },
    meta:{
        optional:true,
        name:"meta"
    }
};

export default class Config{
    constructor(apiResponse = defaultConfigParam) {
        this.setApiResponse(apiResponse);
    }

    setApiResponse(apiResponse){
        this.apiResponse = apiResponse;
    }

    getApiResponse(){
        return this.apiResponse;
    }

    validateApiResponse(response, model = this.getApiResponse()){
        let valid = true;
        Object.keys(model).forEach((key) => {
            let property = this.getApiResponse()[key];
            if(property.optional === false){
                if(typeof response[property.name] === "undefined"){
                    valid = false;
                    return valid;
                }
            }
            if(typeof property.data === "object"){
                valid = this.validateApiResponse(response, property.data);
            }
        })
        return valid
    }
}
