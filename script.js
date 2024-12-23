// Navegación entre páginas
document.getElementById('yesButton').addEventListener('click', () => {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('click', () => {
    alert("Elegiste mal. Por favor, intenta de nuevo.");
});