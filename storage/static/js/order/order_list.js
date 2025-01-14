const ordersList = document.querySelector('#orders-list');

const fetchOrders = () => {
    fetch('/api/orders/')
        .then(response => response.json())
        .then(data => {
            ordersList.innerHTML = '';
            if (data.length === 0) {
                ordersList.innerHTML = '<li>No orders found.</li>';
            } else {
                data.forEach(order => {
                    const li = document.createElement('li');
                    li.style.position = 'relative';
                    li.classList.add('mb-3');

                    li.innerHTML = `
                                    <a href="#" class="order-link" data-id="${order.id}" style="text-decoration: none; color: inherit;">
                                        <div class="row order" style="border: 1px solid #ddd; padding: 10px; border-radius: 10px; display: flex; margin-bottom: 10px; align-items: center; background-color: #fff;">
                                            <div style="display: flex; flex-direction: column;">
                                                <div style="font-size: 14px; font-weight: bold;">Order: ${order.id}</div>
                                                <div style="font-size: 14px;">Status: ${order.status}</div>
                                                <div style="font-size: 16px; font-weight: bold; margin-top: 10px;">
                                                    Total Price: $${order.get_total_price}
                                                </div>
                                                <div id="order-details-${order.id}"></div>
                                            </div>
                                        </div>
                                    </a>
                                `;



                    if (order.status === 'pending') {
                        li.innerHTML += `
                                <div style="align-items:center; display: flex; position: absolute;right: -4px; top: 3px; gap: 3px ">
                                    <button class="remove-order-btn" data-id="${order.id}" style="background: none; border: none; cursor: pointer;color:#ce7c3d;">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>

                                    <button class="finalize-order-btn" data-id="${order.id}" style="background: none; border: none; cursor: pointer; color:#5c985c;font-size:25px;">
                                        <i class="fa-brands fa-amazon-pay"></i>
                                    </button>
                               </div>
                            `;
                    }

                    ordersList.appendChild(li);
                });
            }

        })
        .catch(err => alert('Error fetching orders: '+ err)).finally(() => countItems())
}

fetchOrders()
