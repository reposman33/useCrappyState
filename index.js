const e = React.createElement;
let counter = 0,
	error = false,
	errorMessage = null;

const maxValue = 10,
	minValue = 0,
	minValueErrorMessage = "Alleen minuten groter dan " + minValue,
	maxValueErrorMessage = "Alleen minuten kleiner dan " + maxValue;

function renderApp() {
	ReactDOM.render(e(App), document.querySelector("#root"));
}

function updateCounter(unit) {
	error = false;
	counter = counter + unit; // unit = 1 / -1
	if (counter > maxValue || counter < minValue) {
		error = true;
		if (counter > maxValue) {
			errorMessage = maxValueErrorMessage;
		} else {
			errorMessage = minValueErrorMessage;
		}
		counter = counter - unit; // unit = 1 / -1
	}
	renderApp();
}

function CounterMessage() {
	return e(
		"span",
		{ className: "counter" },
		counter + " minuten tot countdown"
	);
}

function DecrementButton() {
	return e(
		"button",
		{
			className: "button",
			onClick: function() {
				updateCounter(-1);
			}
		},
		"-"
	);
}

function IncrementButton() {
	return e(
		"button",
		{
			className: "button",
			onClick: function onClick() {
				updateCounter(1);
			}
		},
		"+"
	);
}

function textSlider() {
	return e("div", { className: "slideMessage" }, [
		errorMessage,
		e(sliderButton)
	]);
}

function dismissTextSlider() {
	error = false;
	renderApp();
}

function sliderButton() {
	return e(
		"button",
		{
			className: "sliderButton",
			onClick: function() {
				dismissTextSlider();
			}
		},
		"Go away!"
	);
}

function App() {
	return e(
		"div",
		{ className: "counter" },
		e(DecrementButton, null, null),
		e(CounterMessage, null, null),
		e(IncrementButton, null, null),
		error && e(textSlider, null),
		null
	);
}

function _App() {
	return e("ul", {}, [
		e("li", {}, "Chocolate"),
		e("li", {}, "Vanilla"),
		e("li", {}, "Banana")
	]);
}

ReactDOM.render(e(App), document.querySelector("#root"));
