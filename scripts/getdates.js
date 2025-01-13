// scripts/getdates.js

// Exibe o ano atual no rodapé
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Exibe a última data de modificação do documento
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
