// TODO: FORMATEAR FORMULARIO PARA QUE NO PUEDAN INYECTAR SCRIPT!!!

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
    const token = data.accessToken;
    localStorage.setItem('AUTH_TOKEN', token);
  },

  logout: function () {
    const token = localStorage.removeItem('AUTH_TOKEN');
  },

  isAuthenticed: function () {
    return localStorage.getItem('AUTH_TOKEN') !== null;
  },

  // When something fails in this function, we want to return null so that isAthenticed () works correctly
  getAuthUser: function () {
    const token = localStorage.getItem('AUTH_TOKEN');
    if (token === null) return null;

    const base64Parts = token.split('.');
    if (base64Parts.length !== 3) return null;

    const base64Data = base64Parts[1];
    try {
      // atob() decodes a data string that has been encoded using base - 64 encoding
      const userJSON = atob(base64Data)
      const user = JSON.parse(userJSON);
      return [user.userId, user.username];
    } catch (error) {
      console.error('The token could not be decoded', error);
      return null;
    }
  },

  getPosts: async function (url = "http://localhost:8000/api/posts?_expand=user") {
    const response = await fetch(url);
    if (response.ok) {
      const posts = await response.json();
      return posts.map(post => this.parsePost(post));
    } else {
      throw new Error('Unable to get the ads');
    }
  },

  getPostDetail: async function (postID) {
    const url = `http://localhost:8000/api/posts/${postID}?_expand=user`
    const response = await fetch(url);

    if (response.ok) {
      const post = await response.json();
      return this.parsePost(post);
    } else {
      if (response.status === 404) {
        return null;
      } else {
        throw new Error('Error loading post');
      }
    }
  },

  createPost: async function (name, price, description, sale, photo = null) {
    const url = "http://localhost:8000/api/posts";
    console.log("Post created!");
    return await this.post(url, {
      name,
      price,
      description,
      sale,
      photo,
    });
  },

  deletePost: async function (postID) {
    const url = `http://localhost:8000/api/posts/${postID}`;
    return await this.delete(url);
  },

  parsePost: function (post) {
    if (this.isAuthenticed()) {
      post.canBeDeleted = post.userId === this.getAuthUser()[0];
    }
    post.sale = post.sale ? "I want sell" : "I want buy";
    return post;
  }

}
