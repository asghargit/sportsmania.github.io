const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

    // Function to update subtotal and grand total
    function updateQuantity(index) {
        var cartRows = document.querySelectorAll('.cart-row');
        var cartRow = cartRows[index];

        if (cartRow) {
            var priceElement = cartRow.querySelector('.cart-price');
            var quantityElement = cartRow.querySelector('.cart-quantity-input');
            var subtotalElement = cartRow.querySelector('.cart-subtotal');

            var price = parseFloat(priceElement.textContent.replace('Rs.', ''));
            var quantity = parseInt(quantityElement.value);
            var subtotal = price * quantity;

            subtotalElement.textContent = 'Rs.' + subtotal.toFixed(2);

            updateCartTotal();
        }
    }

    // Function to update cart total
    function updateCartTotal() {
        var cartRows = document.querySelectorAll('.cart-row');
        var cartTotalPriceElement = document.querySelector('.cart-total-price');
        var cartGrandTotalElement = document.querySelector('.cart-grand-total');

        var total = 0;
        cartRows.forEach(function(cartRow) {
            var subtotalElement = cartRow.querySelector('.cart-subtotal');
            var subtotal = parseFloat(subtotalElement.textContent.replace('Rs.', ''));
            total += subtotal;
        });

        cartTotalPriceElement.textContent = 'Rs.' + total.toFixed(2);
        cartGrandTotalElement.textContent = 'Rs.' + total.toFixed(2);
    }

    // Initialize cart total
    updateCartTotal();