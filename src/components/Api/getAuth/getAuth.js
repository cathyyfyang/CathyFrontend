const getUser = () => fetch('http://localhost:3000/auth', {
  method: 'GET',
  headers: {
    'X-Auth-Token': localStorage.getItem('JWT_TOKEN_NAME'),
  },
});

export default getUser;