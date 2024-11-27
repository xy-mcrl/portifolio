// Exemplos de funcionalidades do site

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica de autenticação aqui
  });
  
  document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica de cadastro aqui
  });
  
  document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
  });
  // Seleciona o formulário de login
const loginForm = document.getElementById("login-form");

// Adiciona o evento de submit ao formulário
loginForm.addEventListener("submit", function (event) {
  // Impede o envio padrão do formulário
  event.preventDefault();

  // Obtém os valores inseridos nos campos de e-mail e senha
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Aqui você pode adicionar lógica para verificar as credenciais do usuário (como uma chamada a um backend)

  // Verifica se o e-mail e senha são válidos (você pode substituir isso por uma validação real)
  if (email === "usuario@exemplo.com" && senha === "senha123") {
    // Redireciona para a página inicial (index.html)
    window.location.href = "index.html";
  } else {
    // Exibe uma mensagem de erro se as credenciais forem inválidas
    alert("Credenciais inválidas. Tente novamente.");
  }
});
