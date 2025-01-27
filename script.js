document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Função para ajustar o layout dinamicamente
    function adjustLayout() {
        if (window.innerWidth >= 768) {
            // Aplica o layout para desktop
            body.classList.add("desktop-layout");
        } else {
            // Remove o layout de desktop para dispositivos móveis
            body.classList.remove("desktop-layout");
        }
    }

    // Chama a função ao carregar a página
    adjustLayout();

    // Monitora redimensionamento da janela
    window.addEventListener("resize", adjustLayout);

    // Atualiza a data de última modificação
    const lastModified = document.getElementById("last-modified");
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
});
