export const loginSubmit = (event, login, cookies) => {
  event.preventDefault();

  const data = {
    email: event.target[0].value,
    password: event.target[1].value,
  };

  login(data)
    .unwrap()
    .then((res) => {
      cookies.set('access', res.data.tokens.access);
      cookies.set('refresh', res.data.tokens.refresh);
      cookies.get('access');
      alert('Успешный вход');
      window.location.reload();
    })
    .catch(() => alert('Неполадки с сервером или проверьте введеные данные'));
};

export const registerSubmit = (event, register) => {
  event.preventDefault();

  const data = {
    full_name: event.target[0].value,
    email: event.target[1].value,
    password: event.target[2].value,
    password2: event.target[3].value,
  };

  register(data)
    .unwrap()
    .then(() => {
      alert('Проверьте почту');
      window.location.reload();
    })
    .catch(() => alert('Неполадки с сервером или проверьте введеные данные'));
};
