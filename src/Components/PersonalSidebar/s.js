export const logOut = (cookies) => {
  cookies.remove('refresh');
  cookies.remove('access');
  window.location.reload();
};
