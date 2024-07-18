console.info("script loaded");

const removeTodo = (id) => {
	const todos = window.localStorage.getItem("todos");
	JSON.parse(todos)
		.filter((e) => {
			e.id !== id;
		})
		.map((e) => e);
};

const displayTodo = () => {
	const todos = window.localStorage.getItem("todos");
	if (todos) {
		const list = `
        <div>
        ${JSON.parse(todos)
			.map((e) => {
				return `
            <div class="card mt-2">
				<div class="card-body p-1">
					<div class="d-flex align-items-center justify-content-start">
					<div class="input-group-text bg-transparent border-0">
    <input class="form-check-input mt-0" type="checkbox" value="">
  </div>
						<div class="">
							${e.todo}
						</div>
						<div class="text-center ms-auto">
							<button class="btn btn-sm text-danger" onclick="removeTodo(${e.id})">
								<svg 
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-trash3"
									viewBox="0 0 16 16"
								>
									<path
										d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
            `;
			})
			.reverse()
			.join("")}
        </div>
        `;
		document.getElementById("listTodos").innerHTML = list;
	}
};
const submitTodo = () => {
	console.log("begin submit");
	let todos = JSON.parse(window.localStorage.getItem("todos"));
	console.log(todos);
	const newTodo = document.getElementById("newTodo").value;
	if (newTodo) {
		let inputTodo = {
			id: new Date().getTime(),
			todo: newTodo,
			isCompleted: false,
			isDeleted: false,
		};

		todos.push(inputTodo);
		window.localStorage.setItem("todos", JSON.stringify(todos));
		displayTodo();
	}
};

displayTodo();

const checkTodo = () => {};
