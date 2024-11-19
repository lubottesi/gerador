document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-menores');
    let lastScrollTop = 0; // Armazena a última posição do scroll

    function checkScroll() {
        const windowHeight = window.innerHeight;
        const currentScrollTop = window.scrollY;

        images.forEach(image => {
            const imageTop = image.getBoundingClientRect().top;

            // Verifica se a imagem entrou na tela ao rolar para baixo e ainda não tem a classe 'appear'
            if (imageTop < windowHeight * 0.8 && imageTop > 0 && currentScrollTop > lastScrollTop && !image.classList.contains('appear')) {
                image.classList.add('appear');
            }
        });

        lastScrollTop = currentScrollTop; // Atualiza a última posição do scroll
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Chama a função para verificar o estado inicial
});
