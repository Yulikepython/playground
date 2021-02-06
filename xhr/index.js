var btn = document.getElementById("btn")
var div = document.getElementById("ajax")
var xhr = new XMLHttpRequest()

btn.addEventListener('click', loadData)

// function loadData(){
//     xhr.open("GET", "./test.json")
//     xhr.onload = function(){
//         div.innerHTML = xhr.responseText
//     }
//     xhr.send()
// }
var i = 0
function loadData(){
    xhr.open("GET", "./test.json")
    xhr.onload = function(){
        div.innerHTML = i
    }
    i += 1
    xhr.send()
}