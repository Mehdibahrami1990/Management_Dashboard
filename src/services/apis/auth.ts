import getAxiosInstance from './baseURLapi';
const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};
export const sendLoginVerify = (username: string, password: string) => {
  getAxiosInstance.post('login', {
    username,
    password,
  });
};
export const register = async (
  email: string,
  password: string,
  username: string
) => {
  const userData = {
    user: {
      email,
      password,
      username,
    },
  };
  //   console.log(userData);
  try {
    const response: any = await getAxiosInstance.post(
      'users',
      userData,
      options
    );
    console.log(response);
    return response;
  } catch (err: unknown) {
    return err;
  }
};

export const sendOtp = async (email: string, password: string) => {
  const userData = {
    user: {
      email,
      password,
    },
  };
  //   console.log(userData);
  try {
    const response: any = await getAxiosInstance.post(
      'users/login',
      userData,
      options
    );
    console.log(response);
    return response;
  } catch (err: unknown) {
    return err;
  }
};
