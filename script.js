document.getElementById('card-form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const cardNumber = document.getElementById('number').value;
    const cardHolder = document.getElementById('holder').value;
    const expiryDate = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv-input').value;


    document.getElementById('card-number').innerText = cardNumber || '**** **** **** ****';
    document.getElementById('cardholder-name').innerText = cardHolder || 'CARDHOLDER NAME';
    document.getElementById('expiry-date').innerText = expiryDate || 'MM/YY';
    document.getElementById('cvv').innerText = cvv || '123';
});