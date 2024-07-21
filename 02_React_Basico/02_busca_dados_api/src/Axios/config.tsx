import axios from "axios";

const myApiConsumer = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

export default myApiConsumer;