const form = document.getElementById('form-atividade');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

let linha = '<tr>';
linha+=`<td>${inputNomeAtividade.value}</td>`;
linha+=`<td>${inputNotaAtividade.value}</td>`;
linha+=`<td>${}</td>`;
linha+='</tr>';



    alert(`Atividade: ${inputNomeAtividade.value} - Nota ${inputNotaAtividade.value}`)

});
