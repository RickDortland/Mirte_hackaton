document.addEventListener("DOMContentLoaded", function() {
    var stripe = Stripe('YOUR_PUBLIC_KEY');
    var elements = stripe.elements();

    var card = elements.create('card');
    card.mount('#card-element');

    var form = document.getElementById('payment-form');
    var errorElement = document.getElementById('card-errors');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        stripe.createToken(card).then(function(result) {
            if (result.error) {
                errorElement.textContent = result.error.message;
            } else {
                console.log(result.token);
            }
        });
    });
});
