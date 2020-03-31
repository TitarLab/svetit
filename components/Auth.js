import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';

class Auth{


    constructor() {
    }

    setToken(token){
        let decoded = jwtDecode(token);
        localStorage.setItem("token",token);
        localStorage.setItem("token_exp",decoded.exp);
    }
    getToken(){
        return localStorage.getItem("token");
    }

    clearToken(){
        localStorage.removeItem("token");
        localStorage.removeItem("token_exp");
    }

    setTokenExp(exp){
        localStorage.setItem("token_exp",exp);
    }
    getTokenExp(){
        return parseInt(localStorage.getItem("token_exp"));
    }

    checkAuth(){
        if(this.getToken() === null){
            return false;
        }else if(this.getTokenExp() !== null){
            let date = dayjs();
            let now = date.unix();
            if(this.getTokenExp() - now > 0){
                return true
            }else{
                this.clearToken();
                return false;
            }
        }else{
            return true
        }
    }

    logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("token_exp");
        window.location.reload();
    }

}

export default new Auth();
