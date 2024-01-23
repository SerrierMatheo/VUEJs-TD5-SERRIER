import axios from "axios";
const apiKey = 'e>I70.*Sv,aZ'; //

const axiosInstance = axios.create({
    baseURL: 'https://donations.edu.netlor.fr/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "key=${apiKey}"
    }
});
export default axiosInstance;