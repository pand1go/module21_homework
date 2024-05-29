const inputPageNumb = document.querySelector('#inputPageNumb');
const inputLimit = document.querySelector('#inputLimit'); 
const btn = document.querySelector('.btn');
const info = document.querySelector('.info');
const contentRequest = document.querySelector('.contentRequest');
let lastRequest = JSON.parse(localStorage.getItem('lastRequest'));
if (lastRequest) {
    lastRequest.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'col-6';
        div.innerHTML = `<div class="card">
        <img src="${item.download_url}">
    </div>`
    contentRequest.appendChild(div);
    });
}

function flagBoolean (input) {
    let flag;
    return flag = input.value >= 1 && input.value <= 10 && typeof +input.value === 'number';
}
btn.addEventListener('click', () => {
    let flag1 = flagBoolean (inputPageNumb);
    let flag2 = flagBoolean (inputLimit);
    if (!flag1 && flag2) {
        info.textContent = 'Номер страницы вне диапазона от 1 до 10';
        inputPageNumb.value = '';
        inputPageNumb.style.backgroundColor = 'rgba(255, 69, 69, 0.1)';
        inputLimit.style.backgroundColor = 'transparent'
    } else if (flag1 && !flag2) {
        info.textContent = 'Лимит вне диапазона от 1 до 10';
        inputLimit.value = '';
        inputLimit.style.backgroundColor = 'rgba(255, 69, 69, 0.1)';
        inputPageNumb.style.backgroundColor = 'transparent';
    } else if (!flag1 && !flag2) {
        info.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
        inputPageNumb.value = '';
        inputLimit.value = '';
        inputLimit.style.backgroundColor = 'rgba(255, 69, 69, 0.1)';
        inputPageNumb.style.backgroundColor = 'rgba(255, 69, 69, 0.1)';
    } else {
        inputPageNumb.style.backgroundColor = 'transparent';
        inputLimit.style.backgroundColor = 'transparent';
        fetch(`https://picsum.photos/v2/list?page=${inputPageNumb.value}&limit=${inputLimit.value}`)
            .then((response) => {
                const result = response.json();
                return result;
            })
            .then((data) => {
                localStorage.setItem('lastRequest', JSON.stringify(data));
                lastRequest = JSON.parse(localStorage.getItem('lastRequest'));
                contentRequest.innerHTML = '';  
                lastRequest.forEach((item) => {
                    const div = document.createElement('div');
                    div.className = 'col-6';
                    div.innerHTML = `<div class="card">
                    <img src="${item.download_url}">
                </div>`
                contentRequest.appendChild(div);
                });

            })
            .catch(() => {console.log('error')});
    }
})
