const parser = new DOMParser();
const xmlString = `<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    <student>
        <name lang="en">
            <first>John</first>
            <second>Doe</second>
        </name>
        <age>40</age>
        <prof>engineer</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Анна</first>
            <second>Смирнова</second>
        </name>
        <age>32</age>
        <prof>doctor</prof>
    </student>
    <student>
        <name lang="en">
            <first>Sarah</first>
            <second>Johnson</second>
        </name>
        <age>45</age>
        <prof>lawyer</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Михаил</first>
            <second>Иванов</second>
        </name>
        <age>50</age>
        <prof>manager</prof>
    </student>
    <student>
        <name lang="en">
            <first>Emily</first>
            <second>Williams</second>
        </name>
        <age>28</age>
        <prof>architect</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Екатерина</first>
            <second>Павлова</second>
        </name>
        <age>37</age>
        <prof>accountant</prof>
    </student>
    <student>
        <name lang="en">
            <first>Michael</first>
            <second>Brown</second>
        </name>
        <age>48</age>
        <prof>scientist</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Дмитрий</first>
            <second>Кузнецов</second>
        </name>
        <age>42</age>
        <prof>musician</prof>
    </student>
    <student>
        <name lang="en">
            <first>Lisa</first>
            <second>Miller</second>
        </name>
        <age>30</age>
        <prof>artist</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Ольга</first>
            <second>Алексеева</second>
        </name>
        <age>25</age>
        <prof>designer</prof>
    </student>`;
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelectorAll("student");
function addStudentInObj() {
	const list = [];
	const studentObj = {
		list: list
	};
	for(let i = 0; i < studentNode.length; i++) {
		const nameNode = studentNode.item(i).querySelector('name');
		const firstNode = nameNode.querySelector('first');
		const secondNode = nameNode.querySelector('second');
		const ageNode = studentNode.item(i).querySelector('age');
		const profNode = studentNode.item(i).querySelector('prof');
		const langAttr = nameNode.getAttribute('lang');
		const result = {
			name: firstNode.textContent + ' ' + secondNode.textContent,
			age: Number(ageNode.textContent),
			prof: profNode.textContent,
			lang: langAttr
		}
		list.push(result);
	}
	console.log(studentObj);
}
addStudentInObj();