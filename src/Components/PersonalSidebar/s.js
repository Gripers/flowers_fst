export const logOut = async (cookies, navigate) => {
  cookies.remove('refresh');
  cookies.remove('access');
  navigate('/');
};
