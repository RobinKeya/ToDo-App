const classNames= {
    todocontainer : 'list',
    todo_label : 'label',
    delete : 'delete'
}
const list= document.getElementById('list')
const totalcount = document.getElementById('totalcount')
const checkedCount = document.getElementById('checkedCount')
let count = 0
function addTodo(){
 let todo = prompt("Add Todo")
 if(todo){
     count =count +1;
     const node = document.createElement('li')
     node.innerHTML = 
     `<div class ="${classNames.todocontainer}">
     <input type= "checkbox" onchange = "checkBox()">
     <label class= "${classNames.todo_label}"> ${todo} </label>
     <button class = "${classNames.delete}" onclick= "delButton(${count})"> Delete</Delete>
     `

     node.id = count
     list.appendChild(node)
    totalCount()
 }

}
function totalCount(){
    totalcount.innerHTML = document.querySelectorAll('li').length
}
function checkBox(){
    checkedCount.innerHTML = document.querySelectorAll('input[type="checkbox"]').length-document.querySelectorAll('input[type= "checkbox"]:checked').length
}
function delButton(id){
    let del = document.getElementById(id)
    del.parentNode.removeChild(del)
    totalCount()
}