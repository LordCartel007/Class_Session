// cart.js

document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    
    function updateTotal() {
        let total = 0;
        const items = cart.querySelectorAll('.item');
        items.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').dataset.price);
            const quantity = parseInt(item.querySelector('.item-quantity').textContent);
            total += price * quantity;
        });
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    cart.addEventListener('click', (event) => {
        const target = event.target;
        const item = target.closest('.item');

        if (target.classList.contains('increase')) {
            const quantityElement = item.querySelector('.item-quantity');
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        } else if (target.classList.contains('decrease')) {
            const quantityElement = item.querySelector('.item-quantity');
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        } else if (target.classList.contains('delete')) {
            item.remove();
            updateTotal();
        } else if (target.classList.contains('like')) {
            target.classList.toggle('liked');
        }
    });
});
