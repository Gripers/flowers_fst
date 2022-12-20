export const updateProfile = (e, id, updateProfile) => {
  e.preventDefault();

  const data = {
    full_name: e.target[0].value,
    phone: e.target[1].value,
    email: e.target[2].value,
  };

  updateProfile({ id: id, data: data })
    .unwrap()
    .then(() => {
      alert('Изменения успешны');
      window.location.pathname = '/';
    })
    .catch(() => alert('Неполадки с сервером или проверьте введеные данные'));
};
