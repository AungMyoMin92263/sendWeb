import axios from 'axios';
const apiBaseURL = 'www.whatever.com'

export const GET = url => {
    return axios.get(`${apiBaseURL}/${url}`);
}

// if need for headers etc.

const headers = 'some headers';

export const POST = (url, data) => {
    return axios(`${apiBaseURL}/${url}`, {
        method: 'POST',
        headers,
        data,
    });
}