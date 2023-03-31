let home = document.querySelector(".nav_link");
let btn = document.getElementById('back-menu');


btn.addEventListener('click', () => {
    home.classList.toggle('moblie-menu');
});



$(document).ready(function () {
    $(".backTo_top").click(function (e) {
        e.preventDefault();
        $(window).scrollTop(0);

    })
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll <= 300) {
            $('.scroll_top').css({ opacity: '0', })
        }
        if (scroll >= 300) {
            $('.scroll_top').css({ opacity: '1', })

        }
    });

})
const scrollFunction = (id) => {
    let position = $(`#${id}`).position().top;
    console.log(position);
    $(window).scrollTop(position - 117);
}
