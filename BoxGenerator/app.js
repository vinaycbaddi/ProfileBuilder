var a = document.getElementById('theBoxes');
a.addEventListener('click', myFunction);

var old = 0;
var i = 1;
function myFunction() {
    let n = document.getElementById('number').value;
    n = parseInt(old) + parseInt(n);
    for (; i <= n; i++) {
        let b = document.createElement('div');
        b.classList.add('myDiv');
        document.getElementById('box').appendChild(b);
        b.innerHTML += i;
        old = document.getElementById('box').lastElementChild.innerHTML;
    }

}