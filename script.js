document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cartButton').addEventListener('click', () => {
        const cart = document.getElementById('cart');
        cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('generateOrderCode').addEventListener('click', () => {
        const orderCode = `${Math.floor(100 + Math.random() * 900)}-${Math.floor(100 + Math.random() * 900)}`;
        alert(`Pedido enviado ao banco de dados. O código do seu pedido é ${orderCode}. Aguarde seu código ser chamado no balcão.`);
    });

    document.getElementById('orderDelivery').addEventListener('click', () => {
        alert('Seu pedido irá ser gerado, aguarde até que ele saia para a entrega.');
    });
});
