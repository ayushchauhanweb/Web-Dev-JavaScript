let todos = []

const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const formBtn = document.querySelector("#form-btn")
const taskCount = document.querySelector("#task-count")
const completeCount = document.querySelector("#complete-count")
const cancelBtn = document.querySelector("#cancel-edit")
const emptytag = document.querySelector("#empty-warning")

let editTodoId = null

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoValue = todoInput.value.trim()

    if (!todoValue) {
        return
    }

    console.log({ editTodoId, todoValue });

    if (editTodoId) {
        todos = todos.map((todo) => {
            if (todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text: todoValue
                }
            }
            return todo
        })

    } else {
        let newTodo = {
            id: Date.now(),
            text: todoValue,
            isCompleted: false
        }
        emptytag.textContent = ""
        todos.push(newTodo)

    }

    todoInput.value = ""
    cancelButton()
    renderTodo() // jab koi naya todo add hoga first update todos render ho jaega
})



function renderTodo() {
    todoList.innerHTML = ""
    todos.forEach((todo) => {

        const li = document.createElement("li")
        li.dataset.id = todo.id
        li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`
        li.innerHTML = `
                   <input data-action="toogle" ${todo.isCompleted ? "checked" : ""} type="checkbox">
                      <p class="flex-1 ${todo.isCompleted ? "line-through text-gray-400 italic" : ""}">${todo.text}</p>
                    <div class="flex gap-2">
                        <button class="text-yellow-600 font-bold text-sm  hover:underline cursor-pointer"data-action="edit" data-id=${todo.id}>Edit</button>
                        <button class="text-pink-500 font-bold text-sm hover:underline cursor-pointer" data-action="delete" data-id=${todo.id}>Delete</button>
                    </div>`


        todoList.append(li)
    })

    taskCount.textContent = `TASKS (${todos.length})`
    completeCount.textContent = `COMPLETED: ${todos.filter((todo) => todo.isCompleted).length}`
}

renderTodo()// jab first time file execute hoga tab exixting todo render ho jaega   

// Use of event deligation
todoList.addEventListener('click', (e) => {

    const li = e.target.closest('li')
    const id = li.dataset.id;

    let action = e.target.dataset.action

    if (action === "edit") {
        console.log("editing...");
    }

    if (action === "delete") {
        // console.log("deleting...");
        todoDelete(e, id)
    }

    if (action === "edit") {
        editTodo(id)
    }

    if (action === "toogle") {
        todos = todos.map((todo) => {
            if (todo.id === Number(id)) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })

    }
    renderTodo()

    cancelBtn.addEventListener('click', (todo) => {
        if (todo.id === editTodoId) {
            todoInput.value = ""
        }
    })

})

function todoDelete(e, id) {
    e.target.closest("li").remove()

    todos = todos.filter((todo) => {
        if (todo.id !== Number(id)) {
            return todo
        }
    })
    formBtn.classList.add("bg-yellow-600")
    formBtn.classList.remove("bg-violet-700")

}

function editTodo(id) {
    editTodoId = id;
    let currentTodo = todos.find((todo) => {
        if (todo.id === Number(id)) {
            return todo
        }
    })

    todoInput.value = currentTodo.text

    formBtn.textContent = "Update"
    cancelBtn.textContent = "Cancel edit"
    formBtn.classList.add("bg-yellow-600")
    formBtn.classList.remove("bg-violet-700")

    cancelBtn.classList.remove("hidden")
}

function cancelButton() {
    todoInput.value = ""
    formBtn.textContent = "Add"
    formBtn.classList.remove("bg-yellow-600")
    formBtn.classList.add("bg-violet-700")

    cancelBtn.classList.add("hidden")
}
cancelBtn.addEventListener('click', () => {
    cancelButton()
})
