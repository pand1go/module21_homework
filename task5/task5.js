const inputValue = document.querySelector('#inputId');
const list = document.querySelector('.list');
const btn = document.querySelector('.btn');
const info = document.querySelector('.info');

btn.addEventListener('click', () => {
    list.innerHTML = '';
    let userId = inputValue.value;
    fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/todos')
      .then((response) => {
        const result = response.json();
        return result;
      })
      .then((data) => {
        console.log(data);
        if (data.length) {
            info.textContent = `To-do list userID ${userId}`;
            data.forEach((item) => {
                const li = document.createElement('li');
                li.innerHTML = item.title;
                if (item.completed) {
                    li.style.textDecoration = "line-through";
                }
            list.appendChild(li);
            });
        } else {
            info.textContent = 'User with the specified id was not found';
        }
      })
      .catch(() => { console.log('error') });
      inputValue.value = '';
  });