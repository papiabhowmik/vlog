export const BLOG_DATA = "BLOG_DATA";
export const LOGIN_USER = "LOGIN_USER";

export const handleBlogData=()=> {
    return {
       type: BLOG_DATA
    }
}

export const handleUserLogin=(loginResponse)=> {
    return {
        type: LOGIN_USER,
        payload: loginResponse
    }
}

