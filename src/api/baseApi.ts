import axios from 'axios';

const baseApi = async (method: 'get' | 'post' | 'delete', url: string, data?: any) => {
    const token = localStorage.getItem('token');
    const config = {
        method,
        url: `http://127.0.0.1:8000/${url}`, 
        data,
        headers: {
            'Authorization': token ? `Bearer ${token}` : '',
            'Content-Type': 'application/json'
        }
    };

    const response = await axios(config);
    return response.data;
};

export default baseApi;
