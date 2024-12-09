ocument.addEventListener("DOMContentLoaded", () => {
	const submit = document.getElementById("submit");
	const newTask = document.getElementById("task");

	submit.disabled = true;

	newTask.addEventListener("input", () => {
		// Enabling the submit button only if the input field is not empty
		submit.disabled = newTask.value.trim() === "";
	});

	document.querySelector("form").addEventListener("submit", (event) => {
		event.preventDefault();

		const taskText = newTask.value.trim();

		if (taskText !== "") {
			const listItem = document.createElement("li");
			listItem.textContent = taskText;

			document.querySelector("ul").append(listItem);

			newTask.value = "";
			submit.disabled = true;
		}

		return false;
	});
});