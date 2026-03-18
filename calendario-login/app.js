const sessao = localStorage.getItem('sessao')

if (!sessao) {
    window.location.href = 'login.html'
}

document.getElementById('nomeUsuario').textContent = 'Olá, ' + sessao + '!'

document.getElementById('btnSair').addEventListener('click', function(){
    localStorage.removeItem('sessao')
    alert('Encerrando sessão!')
    window.location.href = 'login.html'
})