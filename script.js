function comprar(produto) {
    let numero = "244936790809"; // seu número do WhatsApp
    let mensagem = `Olá, quero comprar: ${produto}`;
    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
