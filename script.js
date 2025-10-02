document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('click', function() {
            this.classList.toggle('active'); // Добавляем или удаляем класс 'active'
        });
    });
});

function Copy() {
    var Url = document.getElementById("copy_url");
    navigator.clipboard.writeText(Url.innerHTML)
    var text = document.getElementById("copy_message");
    text.style.display = "block"
    setTimeout(()=> {text.style.display = "none"}, 3000)
}