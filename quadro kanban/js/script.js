let tarefas = JSON.parse(localStorage.getItem('tarefas-kaban')) || { fazer: [], emprogresso: [], concluido: [] };

// Função para renderizar tarefas
function renderizarTarefas() {
    Object.keys(tarefas).forEach(coluna => {
        const colunaElement = document.getElementById(`${coluna}-tarefas`);
        colunaElement.innerHTML = ''; // Limpa a coluna antes de adicionar tarefas
        tarefas[coluna].forEach(tarefa => {
            const tarefaElement = document.createElement('div');
            tarefaElement.classList.add('tarefa');
            tarefaElement.innerHTML = `<div class="tarefa-titulo">${tarefa.titulo}</div>
                                       <div class="tarefa-descricao">${tarefa.descricao || ''}</div>`;
            colunaElement.appendChild(tarefaElement);
        });
    });
}

document.querySelectorAll('.btn-adicionar-tarefas').forEach(button => {
    button.addEventListener('click', function() {
        const coluna = this.getAttribute('data-column');
        document.getElementById('modal-tarefa').style.display = 'block';
        document.getElementById('btn-salvar-tarefa').onclick = function() {
            adicionarTarefa(coluna);
        };
    });
});

function adicionarTarefa(coluna) {
    const titulo = document.getElementById('titulo-tarefa').value;
    const descricao = document.getElementById('descricao-tarefa').value;
    const novaTarefa = { titulo, descricao };
    tarefas[coluna].push(novaTarefa);
    localStorage.setItem('tarefas-kaban', JSON.stringify(tarefas));
    document.getElementById('modal-tarefa').style.display = 'none';
    renderizarTarefas();
}

renderizarTarefas();
