import React from 'react'

const API = import.meta.env.VITE_BACKEND_API;
const API_TOKEN = import.meta.env.VITE_BACKEND_API_TOKEN;
export const get = (path) => {

    return (
        
        fetch(API + path, {
            headers: {
                Authorization: "Bearer " + API_TOKEN,
                "Content-Type": "application/json;charset=utf-8"
            }
        }).then(result => result.json())
    )

}
