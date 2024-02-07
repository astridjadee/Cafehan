    document.addEventListener('DOMContentLoaded', function () {
        let storedCart = localStorage.getItem('cart');

        if (storedCart) {
            cart = JSON.parse(storedCart);
            updateCartDropdown();
        }

        closeCartDropdown();
    });

    function toggleUserDropdown() {
        var userdropdown = document.getElementById("UserDropdown");
        userdropdown.classList.toggle("show");
    }

    function toggleMenuDropdown() {
        var dropdownMenu = document.getElementById("dropdownMenu");
        dropdownMenu.classList.toggle("show");
    }

    function incrementQuantity() {
        let quantityInput = document.querySelector('.quantity input');
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
    }

    function decrementQuantity() {
        let quantityInput = document.querySelector('.quantity input');
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = Math.max(0, currentQuantity - 1);
    }

    let cart = [];

    function addToCart(productId, productName, productPrice, productImage) {
        let quantityInput = document.querySelector('.quantity input');
        let quantity = parseInt(quantityInput.value);

        if (quantity > 0) {
            let existingItemIndex = cart.findIndex(item => item.id === productId);

            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += quantity;
            } else {
                let cartItem = {
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: quantity,
                    image: productImage
                };

                cart.push(cartItem);
            }

            updateCartDropdown();

            quantityInput.value = 0;

        } else {
            alert("Please select a quantity greater than 0.");
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartDropdown() {
        let cartDropdown = document.getElementById("cartDropdown");
        cartDropdown.innerHTML = '';

        let totalAmount = 0;

        cart.forEach((item, index) => {
            totalAmount += item.price * item.quantity;

            let cartItemDiv = document.createElement("div");
            cartItemDiv.classList.add("cart-number" + (index + 0));

            cartItemDiv.innerHTML = `
                <div class="cart-number1">
                    <img src="${item.image}" class="hotlatte">
                    <div class="cart-container">
                        <h3>${item.name}</h3>
                        <div class="price">$${item.price.toFixed(2)} / ${item.quantity}</div>
                    </div>
                    <i class="bi bi-x-circle" onclick="cancelCartItem(${index})"></i>
                </div>
            `;

            cartItemDiv.addEventListener('click', function (event) {
                event.stopPropagation();
            });

            cartDropdown.appendChild(cartItemDiv);
        });

        let totalDiv = document.createElement("div");
        totalDiv.classList.add("total");
        totalDiv.innerHTML = `
            <span>Total:</span>
            <span class="ttlamount">$${totalAmount.toFixed(2)}</span>
        `;
        cartDropdown.appendChild(totalDiv);

        let checkoutButton = document.createElement("button");
        checkoutButton.className = "checkout";
        checkoutButton.textContent = "CHECKOUT NOW";
        checkoutButton.onclick = checkout;
        cartDropdown.appendChild(checkoutButton);

        cartDropdown.classList.add("show");

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function cancelCartItem(index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }

        updateCartDropdown();
    }

    function closeCartDropdown() {
        let cartDropdown = document.getElementById("cartDropdown");

        isCartDropdownOpen = false;
        cartDropdown.classList.remove("show");
    }

    function toggleCartDropdown() {
        var cartDropdown = document.getElementById("cartDropdown");

        if (isCartDropdownOpen) {
            closeCartDropdown();
        } else {
            cartDropdown.classList.add("show");
            isCartDropdownOpen = true;
        }
    }

    function checkout() {
        if (cart.length > 0) {
            cart = [];
            updateCartDropdown();

            alert('You have checked out the items successfully!');
        } else {
            alert('Your cart is empty. Please add items before checking out.');
        }
    }