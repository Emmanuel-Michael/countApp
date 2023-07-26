var  countEl = document.getElementById('count-element');
var addBtn = document.getElementById('add-button');
var refreshBtn = document.querySelector("#refresh-button")



var add = 0;
addBtn.addEventListener('click', function(){
    add = add + 1;
    countEl.innerText = add;

});


// function adding() {
// add = add + 1;
// countEl.innerText = add;
// };

// Sread in js 
// var nums = [9,3,2,8];
// // Math.max();
// Math.max(...num)

