export default {

  delete: async function (url, body = {}) {
    return await this.request('DELETE', url, body);
  },

  post: async function (url, body = {}) {
    return await this.request('POST', url, body);
  },

  put: async function (url, body = {}) {
    return await this.request('PUT', url, body);
  },

  request: async function (method, url, body) {
    const requestConfig = {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }

    if (this.isAuthenticed()) {
      const token = localStorage.getItem('AUTH_TOKEN');
      requestConfig.headers['Authorization'] = `Bearer ${token}`;
      console.log("Estas logueado");
    }

    const response = await fetch(url, requestConfig);
    try {
      const data = await response.json()
      if (response.ok) {
        console.log("Request to backend was succesfull");
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error;
    }
  },

  registerUser: async function (username, password) {
    const url = 'http://localhost:8000/auth/register';
    return await this.post(url, { username, password });
  },

  login: async function (username, password) {
    const url = 'http://localhost:8000/auth/login';
    const data = await this.post(url, { username, password });
    const token = data.accesToken;
    localStorage.setItem('AUTH_TOKEN', token);
  },

  isAuthenticed: function () {
    return localStorage.getItem('AUTH_TOKEN') !== null;
  },

  // When something fails in this function, we want to return null so that isAthenticed () works correctly
  getAuthUserId: function () {
    const token = localStorage.getItem('AUTH_TOKEN');
    if (token === null) return null;

    const base64Parts = token.split('.');
    if (base64Parts.length !== 3) return null;

    const base64Data = base64Parts[1];
    try {
      // atob() decodes a data string that has been encoded using base - 64 encoding
      const userJSON = atob(b64Data)
      const user = JSON.parse(userJSON);
      return user.userId;
    } catch (error) {
      console.error('The token could not be decoded', error);
      return null;
    }
  }
}