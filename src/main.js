import { http } from "node:http";

// Função que será chamada para lidar com requisições
const requestHandler = (request, response) => {
  // Configura o cabeçalho da resposta com status 200 e Content-Type text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // Escreve 'Olá' como corpo da resposta
  response.end('Olá');
}

// Cria um servidor HTTP e define a função de requestHandler para lidar com as requisições
const server = http.createServer(requestHandler);

// Define a porta em que o servidor irá escutar
const PORT = 8000;

// Inicia o servidor e imprime uma mensagem indicando que está rodando
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
