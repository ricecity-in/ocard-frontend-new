export const isLogin = () =>{
    let data = localStorage.getItem("isLogin");
    if (data){
        return true;
    }
    else{
        return false;
    }
}

export const doLogin = (email) =>{
    localStorage.setItem("isLogin", true)
    localStorage.setItem("email", email)
}

export const doLogout= () =>{
    localStorage.removeItem("isLogin");
    localStorage.removeItem("email");
}