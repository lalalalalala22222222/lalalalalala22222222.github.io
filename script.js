// Получаем все ссылки панелинавигации
const navLinks = document.querySelectorAll('.nav-link');
// Получаем все разделы страницы
const sections = document.querySelectorAll('.section');
// Добавляем обработчик события длякаждой ссылки
navLinks.forEach(link => {
 link.addEventListener('click', () => {
 // Получаем идентификаторраздела, на который ссылаетсяссылка
 const targetId = link.getAttribute('href').substring(1);
 // Отображаем целевой раздел,скрывая все остальные
 sections.forEach(section => {
 if (section.id === targetId) {
 section.classList.add('active');
 } else {
 section.classList.remove('active');
 }
 });
 });
});
