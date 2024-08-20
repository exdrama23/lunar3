document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.getElementById('menuItems');
    const cartItems = document.getElementById('cartItems');

    // Simulação de API para McDonald's
    const mcdonaldsMenu = [
        { id: 1, name: 'Big Mac', price: 20 },
        { id: 2, name: 'McChicken', price: 18 }
    ];

    // Simulação de API para Burger King
    const burgerKingMenu = [
        { id: 3, name: 'Whopper', price: 22 },
        { id: 4, name: 'Cheeseburger', price: 17 }
    ];

    // Adicionando itens ao menu
    const allMenuItems = [...mcdonaldsMenu, ...burgerKingMenu];
    allMenuItems.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
            <span>${item.name} - R$${item.price.toFixed(2)}</span>
            <button onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Adicionar ao Carrinho</button>
        `;
        menuItems.appendChild(div);
    });
});

let cart = [];

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
}
