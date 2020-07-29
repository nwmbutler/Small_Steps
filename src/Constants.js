const prod = {
  url: {
    API_URL: "https://carbon-backend2.herokuapp.com"
  }
};

const dev = {
  url: {
    API_URL: "http://localhost:5000"
  }
};

export const config =
process.env.NODE_ENV ===
'development' ? dev : prod;
