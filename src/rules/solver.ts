const axios = require('axios');

axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    },
    headers: 'Bearer' + accessKey
  });