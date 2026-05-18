const input = document.getElementById("input-todo")
const addBtn = document.getElementById("add-btn")
const list = document.getElementById("todo-list")

const saved = localStorage.getItem('todos')
const todos = saved? JSON.parse(saved) : []

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

function createTodoNode(todo, index) {
    const li = document.createElement('li')

    const checkbox = document.createElement("input")
    checkbox.type = 'checkbox'
    checkbox.checked = !!todo.completed

    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked
        saveTodos()
    })

    const spanText = document.createElement("span")
    spanText.textContent = todo.text;
    spanText.style.margin = '0 8px'

    if(todo.completed) {
        spanText.style.textDecoration = 'line-through'
    }
}

function render() {
    
    list.innerHTML = ""
    
    todos.forEach((todo, index) => {
        const node = createTodoNode(todo, index)
        list.appendChild(node)

    });
}
