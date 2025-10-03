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
    let text = document.createElement('p')
    text.classList = "copy_message"
    text.innerHTML = "текст скопирован"
    text.style.display = "block"
    text.style.opacity = "1"
    document.querySelector('main').appendChild(text)
    setTimeout(()=> {document.querySelector('.copy_message').remove()}, 2000)
}