function copiarUrl() {
    let url=document.getElementById('url');
    let button=document.getElementById('botonCopiar');

    navigator.clipboard.writeText(url.textContent);
    button.textContent='Copiado';
}