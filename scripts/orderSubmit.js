function submitOrder() {
    var selectedProducts = document.querySelectorAll('.product:checked');
    var queryString = "?";

    selectedProducts.forEach(function(product, index) {
        var name = product.getAttribute('name');
        var price = product.getAttribute('value');
        queryString += `name${index}=${encodeURIComponent(name)}&price${index}=${encodeURIComponent(price)}&`;
    });

    // Remove the last "&" character from the query string
    queryString = queryString.slice(0, -1);

    // Redirect to the orderSubmit.html page with the query string
    // window.location.href = '../html/orderSubmit.html';
    window.location.href = './html/orderSubmit.html'  + queryString;

}

function getQueryStringParams(query) {
    return query
        .slice(1)
        .split('&')
        .reduce(function (params, param) {
            var [key, value] = param.split('=');
            params[key] = decodeURIComponent(value);
            return params;
        }, {});
}

function displayOrderSummary() {
    var params = getQueryStringParams(window.location.search);
    var orderSummary = document.getElementById('orderSummary');
    var total = 0;

    for (var i = 0; i < Object.keys(params).length / 2; i++) {
        var name = params[`name${i}`];
        var price = parseFloat(params[`price${i}`]);
        let VAT = 0.15;
        total += price;
        var cal = total + (total * VAT);

        var listItem = document.createElement('li');
        listItem.textContent = `${name} - R ${price.toFixed(2)}`;
        orderSummary.appendChild(listItem);
    }

    var totalItem = document.createElement('li');
    totalItem.textContent = `Total: R ${cal.toFixed(2)}`;
    orderSummary.appendChild(totalItem);
}

if (document.getElementById('orderSummary')) {
    displayOrderSummary();
}
