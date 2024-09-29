const mouseCursor = document.querySelector(".cursor");
// let navlinks = document.querySelectorAll();

document.addEventListener('mousemove', cursor);

function cursor(e) {
    console.log(e);
    mouseCursor.style.left = e.pageX + 'px';
    mouseCursor.style.top = e.pageY + 'px';
}
