import axios from 'axios';

export default {
    install: (App, options) => {

        const api = axios.create({
            baseURL: options.baseURL,
            headers: {
                "Content-type": "application/json",
                'Authorization': `key=${options.apiKey}`
            }
        });

        App.config.globalProperties.$api = api;
    },
};