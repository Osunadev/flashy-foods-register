class RegisterForm {
	constructor(name, lastname, nickname, birthdate, weight, height, pass) {
		this.name = name;
		this.lastname = lastname;
		this.nickname = nickname;
		this.birthdate = birthdate;
		this.weight = weight;
		this.height = height;
		this.pass = pass;
	}
}

let registerFormList = [];

const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastname');
const nickNameInput = document.getElementById('nickname');
const birthDateInput = document.getElementById('birthdate');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const passInput = document.getElementById('pass');
const confirmPassInput = document.getElementById('confirm-pass');

const tableResults = document.getElementById('table-results');

let rowIdx = 0;

const register = () => {
	if (
		nameInput.value != '' &&
		lastNameInput.value != '' &&
		nickNameInput.value != '' &&
		birthDateInput.value != '' &&
		weightInput.value != '' &&
		heightInput.value != '' &&
		passInput.value != '' &&
		confirmPassInput.value != ''
	) {
		if (passInput.value === confirmPassInput.value) {
			registerFormList.push(
				new RegisterForm(
					nameInput.value,
					lastNameInput.value,
					nickNameInput.value,
					birthDateInput.value,
					weightInput.value,
					heightInput.value,
					passInput.value
				)
			);

			addRow(registerFormList[rowIdx]);
			cleanInputs();
		} else {
			alert('¡Las contraseñas no coinciden!');
		}
	} else {
		alert('Por favor llena todos los campos.');
	}
};

const addRow = registerFormObj => {
	let newRow = tableResults.insertRow();
	let count = 0;

	for (const key in registerFormObj) {
		let newCell = newRow.insertCell(count++);
		newCell.innerHTML = registerFormObj[key];
	}
};

const cleanInputs = () => {
	nameInput.value = '';
	lastNameInput.value = '';
	nickNameInput.value = '';
	birthDateInput.value = '';
	weightInput.value = '';
	heightInput.value = '';
	passInput.value = '';
	confirmPassInput.value = '';
};
