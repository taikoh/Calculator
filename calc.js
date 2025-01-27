const display = document.getElementById("display");

function appendToDisplay(input) {
	display.value += input;
}

function clearDisplay() {
	display.value = "";
}

function calculate() {
	try {
		let expression = display.value;
        if (expression.includes("sqrt(") && !expression.includes(")")) {
            expression += ")";
        }
        display.value = math.evaluate(expression);
	} catch (error) {
		display.value = "ERROR";
	}
}

document.addEventListener("keydown", function (event) {
	const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const operators = ["/", "*", "-", "+", "%", "^"];

	if (numbers.includes(event.key)) {
		display.value += event.key;
	} else if (["Backspace", "Escape"].includes(event.key)) {
		display.value = "";
	} else if (operators.includes(event.key)) {
		display.value += event.key;
	} else if (event.key === "Enter") {
        calculate();
	}
});
