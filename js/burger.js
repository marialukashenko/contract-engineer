document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы с проверкой
    const burgerMenu = document.getElementById('burgerMenu');
    const mainMenu = document.getElementById('mainMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuLinks = document.querySelectorAll('.hero-menu a');
    
    // Проверяем что элементы существуют
    if (!burgerMenu || !mainMenu || !menuOverlay) {
        console.error('Не найдены элементы меню');
        return;
    }
    
    // Переключение меню
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        mainMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = mainMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Закрытие меню при клике на overlay
    menuOverlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // Выбор пункта меню
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Убираем активный класс у всех ссылок
            menuLinks.forEach(l => l.classList.remove('active'));
            // Добавляем активный класс к текущей ссылке
            this.classList.add('active');
            
            // Закрываем меню на мобильных
            if (window.innerWidth <= 1024) {
                closeMenu();
            }
        });
    });
    
    // Закрытие меню при ресайзе окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            closeMenu();
        }
    });
    
    // Функция закрытия меню
    function closeMenu() {
        burgerMenu.classList.remove('active');
        mainMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(e) {
        if (mainMenu.classList.contains('active') && 
            !e.target.closest('.hero-menu') && 
            !e.target.closest('.burger-menu')) {
            closeMenu();
        }
    });
    
    // Закрытие меню при нажатии Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mainMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});