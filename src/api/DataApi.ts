


// import axios from 'axios';
 
// export async function baseApi(method: string, url: string, data?: any) {
//     try {
//         const response = await axios({
//             method,
//             url: `http://127.0.0.1:8000/${url}`,
//             data,
//         });
//         return response.data;
//     } catch (error) {
//         console.error(`API request failed: ${error}`);
//         throw error;
//     }
// }


// export async function runPostApi(url: string, data: any) {
//     return await baseApi("POST", url, data);
// }

// export async function runGetApi(url: string) {
//     return await baseApi("GET", url);
// }

// export async function runDeleteApi(url: string) {
//     return await baseApi("DELETE", url);
// }


// export async function logIn(data: any) {
//     const result = await runGetApi("access/users", data );
//     if (result?.token) {
//         localStorage.setItem('token', result.token);
//     }
//     return result;
// }


// export const signUp = async (data: {
//   name: string;
//   email: string;
//   // password: string;
//   // phoneNumber: string;
// }) => {
//     return await runPostApi("access/users", data);
// };


import axios from 'axios';

export async function baseApi(method: string, url: string, data?: any) {
    try {
        const response = await axios({
            method,
            url: `http://127.0.0.1:8000/${url}`,
            data,
        });
        return response.data;
    } catch (error) {
        console.error(`API request failed: ${error}`);
        throw error;
    }
}

export async function runPostApi(url: string, data: any) {
    return await baseApi("POST", url, data);
}

export async function runGetApi(url: string) {
    return await baseApi("GET", url);
}

export async function runDeleteApi(url: string) {
    return await baseApi("DELETE", url);
}

export async function logIn(data: {name:string; email:string}) {
    const result = await runGetApi("access/users", data);
    if (result?.token) {
        localStorage.setItem('token', result.token);
        
    }
    return result;

}


export const signUp = async (data: { name: string; email: string }) => {
    return await runPostApi("access/users", data);
};

// New function to check if user exists by email
export async function checkUserExists(email: string) {
    try {
        const response = await runGetApi(`access/users?email=${email}`);
        return response && response.exists; // Assuming backend returns an `exists` field
    } catch (error) {
        console.error(`Failed to check if user exists: ${error}`);
        throw error;
    }
}
