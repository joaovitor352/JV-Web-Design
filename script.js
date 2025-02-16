function redirectToWhatsApp() {
    // Número de telefone (substitua pelo número desejado)
    const phoneNumber = "5586995782422"; // Exemplo: 55 é o código do Brasil, 11 é o DDD e 999999999 é o número

    // Mensagem pré-definida (opcional)
    const message = "Olá, gostaria de um serviço!";

    // Codifica a mensagem para uso em URL
    const encodedMessage = encodeURIComponent(message);

    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/qr/SIRJHAXLP55ZO1`;

    // Redireciona o usuário para o WhatsApp
    window.location.href = whatsappUrl;
}