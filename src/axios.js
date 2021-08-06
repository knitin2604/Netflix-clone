import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance; //we call it default so this file can be imported without calling it instance instead by name of axios