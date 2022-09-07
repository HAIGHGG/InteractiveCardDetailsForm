const inputName = document.querySelector('#name')
const inputNumber = document.querySelector('#card-number')
const inputDateMM = document.querySelector('#date-mm')
const inputDateYY = document.querySelector('#date-yy')
const inputCVC = document.querySelector('#cvc')
const nameCard = document.querySelector('.name')
const numberCard = document.querySelector('.top-card-number')
const dateCard = document.querySelector('.date')
const cvcCard = document.querySelector('.bottom-card-cvc')
const inputs = document.querySelectorAll('input')
const btnConfirm = document.querySelector('.btn-confirm')
const popup = document.querySelector('.popup')
const panel = document.querySelector('.panel')

const updateCardNumber = () => {
	const numbers = inputNumber.value.padEnd(16, '0')
	numberCard.textContent = `${numbers.slice(0, 4)} ${numbers.slice(4, 8)} ${numbers.slice(8, 12)} ${numbers.slice(12)}`
	if (isNaN(inputNumber.value)) {
		inputNumber.classList.add('input-error')
		inputNumber.closest('div').querySelector('.error-msg').textContent = "Wrong format, numbers only"
	} else {
		inputNumber.classList.remove('input-error')
		inputNumber.closest('div').querySelector('.error-msg').textContent = ""
	}}

const updateCardName = () => {
	inputName.value === '' ? (nameCard.textContent = 'Jane Appleseed') : (nameCard.textContent = inputName.value)
}

const updateCardDate = () => {
	dateCard.textContent = `${inputDateMM.value.padEnd(2, '0')}/${inputDateYY.value.padEnd(2, '0')}`
	if (isNaN(inputDateMM.value) || isNaN(inputDateYY.value)) {
		inputDateMM.classList.add('input-error')
		inputDateYY.classList.add('input-error')
		inputDateMM.closest('div').querySelector('.error-msg').textContent = "Wrong format, numbers only"
	} else {
		inputDateMM.classList.remove('input-error')
		inputDateYY.classList.remove('input-error')
		inputDateMM.closest('div').querySelector('.error-msg').textContent = ""
	}
}
const updateCardCVC = () => {
	inputCVC.value === '' ? (cvcCard.textContent = '000') : (cvcCard.textContent = inputCVC.value)
	if (isNaN(inputCVC.value)) {
		inputCVC.classList.add('input-error')
		inputCVC.closest('div').querySelector('.error-msg').textContent = "Wrong format, numbers only"
	} else {
		inputCVC.classList.remove('input-error')
		inputCVC.closest('div').querySelector('.error-msg').textContent = ""
	}
}

const isBlank = () => {
	inputs.forEach(input => {
		if (input.value === '') {
			input.classList.add('input-error')
			input.closest('div').querySelector('.error-msg').textContent = "Can't be blank"
		} else {
			input.classList.remove('input-error')
			input.closest('div').querySelector('.error-msg').textContent = ''
		}
	})
}

const isCardNumberProper = () => {
	if (inputNumber.value.length < 16 && inputNumber.value.length != 0) {
		inputNumber.classList.add('input-error')
		inputNumber.closest('div').querySelector('.error-msg').textContent = 'Wrong format, need 16 digits'
	} else {inputNumber.classList.remove('input-error')}
}

const confimation = () => {
	const errorMsgs = document.querySelectorAll('.error-msg')
	let errors = 0
	errorMsgs.forEach(msg => {
		if (msg.textContent != '') {
			errors++
		}
	})
	if (errors === 0) {
		panel.classList.add('hidden')
		popup.classList.add('active')
		popup.querySelector('a').classList.remove('unactive')
	}
}

inputName.addEventListener('input', updateCardName)
inputNumber.addEventListener('input', updateCardNumber)
inputCVC.addEventListener('input', updateCardCVC)
inputDateMM.addEventListener('input', updateCardDate)
inputDateYY.addEventListener('input', updateCardDate)
btnConfirm.addEventListener('click', isBlank)
btnConfirm.addEventListener('click', isCardNumberProper)
btnConfirm.addEventListener('click', confimation)