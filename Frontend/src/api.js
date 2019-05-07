import axios from 'axios';

class API {
    get(url) {
        return axios.get('http://localhost:3001' + url, {
        }).then(response => {
            return response.data;
        });
    }

    post(url, body, options = {}) {
        return axios.post('http://localhost:3001' + url, body, {
            ...options,
        }).then(response => {
            return response.data;
        });
    }

    delete(url) {
        return axios.delete('http://localhost:3001' + url, {
        }).then(response => {
            return response.data;
        });
    }
}

export let api = new API();

export function transformApiException(e) {
    if (e.response.status === 500) {
        return 'There was a server error.';
    } else {
        return JSON.parse(e.request.response).errors;
    }
}
