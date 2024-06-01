const socks = require('socksv5');
const username = 'user'; // Defina o nome de usuário desejado
const password = 'pass'; // Defina a senha desejada

// Função de autenticação
function authenticate(user, pass, cb) {
  if (user === username && pass === password) {
    cb(true);
  } else {
    cb(false);
  }
}

const server = socks.createServer((info, accept, deny) => {
  const socket = accept(true);
});

server.useAuth(socks.auth.UserPassword(authenticate));

server.listen(1080, '::1', () => {
  console.log('SOCKS server listening on port 1080');
});

server.on('error', (e) => {
  console.error('Error: %s', e.message);
});
