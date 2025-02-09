const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

window.onload = function() {
    const select = document.getElementById('product');  

    
    products.forEach(product => {
        let option = document.createElement('option');
        option.value = product.name;  
        option.textContent = product.name;  
        select.appendChild(option);  
    });

    
    let counter = localStorage.getItem('reviewCount') || 0;
    counter++; 
    localStorage.setItem('reviewCount', counter);  

    
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        counterElement.textContent = `Número de avaliações: ${counter}`;
    }


    const lastModificationElement = document.getElementById('last-modification');
    if (lastModificationElement) {
        const lastModifiedDate = new Date(document.lastModified);
        lastModificationElement.textContent = `Last Modification: ${lastModifiedDate.toLocaleString()}`;
    }
};
