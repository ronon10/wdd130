document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const lastModified = document.getElementById("last-modified");
  
    // Alterna o menu hambúrguer
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      // Atualiza o ícone do botão hambúrguer
      hamburger.textContent = menu.classList.contains("hidden") ? "☰" : "✖";
    });
  
    // Atualiza a data de modificação do rodapé
    lastModified.textContent = document.lastModified;
  });
  