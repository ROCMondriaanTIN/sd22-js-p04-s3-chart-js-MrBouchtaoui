console.log("Main loaded");

const backgroundColours = ["red", "blue", "yellow", "green", "purple", "orange"];

const chartExample = document.querySelector(".chart-example");

createChart(chartExample);

function createChart(canvasElement) {
	new Chart(canvasElement, {
		type: "bar",
		data: {
			labels: ["T1H", "T1J", "T1K", "T1L", "T1M", "T1N"],
			datasets: [
				{
					backgroundColor: backgroundColours,
					label: "# Aantal studenten per klas",
					data: [20, 18, 21, 18, 17, 19],
					borderWidth: 1,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: true,
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	});
}
//Werk hieronder opdracht 1 en opdracht 2 uit.

const assignment1Url = "json/assignment1.json";
const assignment2Url = "json/assignment2.json";

const chartAssignment1 = document.querySelector(".chart-assignment-1");
const chartAssignment2 = document.querySelector(".chart-assignment-2");

fetch(assignment1Url)
	.then((response) => response.json())
	.then((data) => {
		console.log("Data uit json file: ", data);
		drawDiagram(data);
	});

fetch(assignment2Url)
	.then((response) => response.json())
	.then((data) => {
		console.log("Data uit json file: ", data);

		drawMultipleDiagrams(data);
	});

function drawDiagram(dataJS) {
	new Chart(chartAssignment1, {
		type: "bar",
		data: {
			labels: dataJS.years,
			datasets: [
				{
					backgroundColor: backgroundColours,
					label: "# Aantal studenten per klas",
					data: dataJS.JavaScript,
					borderWidth: 1,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: true,
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	});
}

function drawMultipleDiagrams(data) {
	new Chart(chartAssignment2, {
		type: "line",
		data: {
			labels: data.years,
			datasets: [
				{
					backgroundColor: backgroundColours,
					label: "Java",
					data: data.Java,
					borderWidth: 1,
				},
				{
					backgroundColor: backgroundColours,
					label: "Python",
					data: data.Python,
					borderWidth: 1,
				},
				{
					backgroundColor: backgroundColours,
					label: "JavaScript",
					data: data.JavaScript,
					borderWidth: 1,
				},
				{
					backgroundColor: backgroundColours,
					label: "PHP",
					data: data.PHP,
					borderWidth: 1,
				},
				{
					backgroundColor: backgroundColours,
					label: "C#",
					data: data["C#"],
					borderWidth: 1,
				},
				{
					backgroundColor: backgroundColours,
					label: "C++",
					data: data["C++"],
					borderWidth: 1,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: true,
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	});
}

// drawDiagram({});
