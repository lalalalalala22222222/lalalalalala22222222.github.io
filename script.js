// Получаем все ссылки панели
навигации
const navLinks = document.querySelectorAll('.nav-link');
// Получаем все разделы страницы
const sections = document.querySelectorAll('.section');
// Добавляем обработчик события для
каждой ссылки
navLinks.forEach(link => {
 link.addEventListener('click', () => {
 // Получаем идентификатор
раздела, на который ссылается
ссылка
 const targetId = link.getAttribute('href').substring(1);
 // Отображаем целевой раздел,
скрывая все остальные
 sections.forEach(section => {
 if (section.id === targetId) {
 section.classList.add('active');
 } else {
 section.classList.remove('active');
 }
 });
 });
});
