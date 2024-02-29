document.getElementById('collapse_lang').addEventListener('shown.bs.collapse', function () {
    // Przewiń #modal_menu_body na sam dół po rozwinięciu sekcji z animacją
    var modalMenuBody = document.getElementById('modal_menu_body');
    modalMenuBody.scrollTo({
        top: modalMenuBody.scrollHeight,
        behavior: 'smooth'
    });
});