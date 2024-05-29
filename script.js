document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const historyList = document.getElementById('historyList');
    const clearButton = document.getElementById('clear');

    loadHistory();

    buttons.forEach(buttons => {
        buttons.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === '=') {
                try  {
                    const result = eval(display.value);
                    addHistory(display.value + ' = ' + result);
            } catch{
                display.value ='Error';
            }
        } else {
            if (display.value === 'Error') {
                display.value = '';
            }
            display.value += value;
        }
    }); 
});

clearButton.addEventListener('click', () => {
    display.value = '';
});

function addHistory(operation) {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    history.push(operation);
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
    renderHistorty();
}

function renderHistorty() {
    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
    historyList,innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function loadHistory() {
    renderHistorty();
}

});

