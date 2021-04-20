const refs = {
    digits: document.querySelector('.digits'),
    manipulations: document.querySelector('.manipulation'),
    example: document.querySelector('.render'),
    result: document.querySelector('.result')
}
function onClickBtn(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return
    }
    else if (e.target.textContent === 'clear') {
        refs.example.textContent = '';
        refs.result.textContent = '';
    }
    else if (e.target.textContent === '=') {
        refs.result.textContent = eval(refs.example.textContent).toFixed(3);
    }
    else
        refs.example.textContent += e.target.textContent;
};

refs.digits.addEventListener('click', onClickBtn);
refs.manipulations.addEventListener('click', onClickBtn)
