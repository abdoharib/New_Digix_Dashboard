const axios = require("axios").default;

const axiosConfig = {
    baseURL: 'https://78izffozm8.execute-api.eu-central-1.amazonaws.com/digix',
    timeout: 30000,
    Headers:{
      "Authorization":localStorage.getItem("AccessToken")
    }
  };
  
export default axios.create(axiosConfig)