const mainElement = document.querySelector('.main');
const tipAmountValueElement = document.querySelector('.tip-amount-value');
const totalValueElement = document.querySelector('.total-value');

let data = {
	bill: 0,
	tip: 0,
	numOfPeople: 0,
};

mainElement.addEventListener('change', updateData);

function updateData(e) {
	const value = e.target.value;
	const name = e.target.name;
	console.log(name, value);
	if (name == 'num-of-people') {
		if (value == 0) {
			console.log('Can t be zero');
		}
		data.numOfPeople = value;
	}
	if (name == 'bill') {
		data.bill = value;
	}
	if (name == 'tip') {
		data.tip = value;
	}
	const valuesAreOk = checkValues();
	if (valuesAreOk) {
		const splittedBill = splitBill();
		displaySplittedBill(splittedBill);
	} else {
        tipAmountValueElement.innerHTML = `<span>$</span>00.00`;
	    totalValueElement.innerHTML = `<span>$</span>00.00`;
    }
}

function checkValues() {
	if (data.bill > 0 && data.tip > 0 && data.numOfPeople > 0) {
		return true;
	} else {
		return false;
	}
}

function splitBill() {
	const bill = data.bill;
	const tip = data.tip;
	const numOfPeople = data.numOfPeople;
	let tipAmount = bill * (tip / 100);
	let tipPerPerson = (tipAmount / numOfPeople).toFixed(2);
	let totalPerPerson = ((bill + tipAmount) / numOfPeople).toFixed(2);
    
	return { tipPerPerson, totalPerPerson };
}
function displaySplittedBill(splittedBill) {
	const { tipPerPerson, totalPerPerson } = splittedBill;

	tipAmountValueElement.innerHTML = `<span>$</span>${tipPerPerson}`;
	totalValueElement.innerHTML = `<span>$</span>${totalPerPerson}`;
}
