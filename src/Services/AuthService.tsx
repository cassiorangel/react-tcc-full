import api from './api';

const AuthService = {
  login: async (email: string, password: string) => {
    const response = await api
      .post('/login', {
        email,
        password
      });
    return response.data;
  },

  logout: () => {
    //TokenService.removeUser();
  },

};

export default AuthService;