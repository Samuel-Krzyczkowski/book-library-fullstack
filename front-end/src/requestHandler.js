import axios from "axios";

const axios = require('axios').default;

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000'
})

api.get('/books/').then(res => {
    return res.data
  })