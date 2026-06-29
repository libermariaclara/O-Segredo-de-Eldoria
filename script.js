// Seleciona o botão de início pelo ID
const botaoIniciar = document.getElementById('btn-iniciar');

// Função que define o que acontece ao clicar
function iniciarAventura() {
    alert("A aventura começou!");
    
    // Para redirecionar para a primeira fase no futuro, descomente a linha abaixo:
    // window.location.href = "fase1.html";
}

// Adiciona o evento de clique ao botão
botaoIniciar.addEventListener('click', iniciarAventura);