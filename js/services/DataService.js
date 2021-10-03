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
    //TODO: this.ifAuthenticed()

    const response = await fetch(url, requestConfig);
    try {
      const data = await response.json()
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw errror;
    }
  },

  registerUser: async function (username, password) {
    const url = 'http://localhost:8000/auth/register';
    return await this.post(url, { username, password });
  }
}