let namePerson = localStorage.getItem('namePerson');
let entryDate = localStorage.getItem('entryDate');
let name;
let date;
const formatDate = function(date) {
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} в ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
if (!namePerson) {
	name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
	date = new Date();
	localStorage.setItem('namePerson', name);
	localStorage.setItem('entryDate', formatDate(date));
	namePerson = localStorage.getItem('namePerson');
	entryDate = localStorage.getItem('entryDate');
} else {
	alert(`Добрый день, ${namePerson}! Давно не виделись. В последний раз вы были у нас ${entryDate}`);
	date = new Date();
	localStorage.setItem('entryDate', formatDate(date));
	entryDate = localStorage.getItem('entryDate');
}

