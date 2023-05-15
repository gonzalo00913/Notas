import axios from "axios";
const URL = "http://localhost:3001/notas";

const getAll = () => {
  const request = axios.get(URL);
  return request.then((response) => response.data);
};


export default getAll;
