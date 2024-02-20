// displaying payment mode on selecting online payment method 
document.addEventListener('DOMContentLoaded', function() {
    const cashRadio = document.getElementById('cash');
    const onlineRadio = document.getElementById('online');
    const paymentModeDiv = document.querySelector('.payment-mode');

    cashRadio.addEventListener('change', function() {
        if (cashRadio.checked) {
            paymentModeDiv.style.display = 'none';
        }
    });

    onlineRadio.addEventListener('change', function() {
        if (onlineRadio.checked) {
            paymentModeDiv.style.display = 'block';
        }
    });

    // Initialize the state based on the default checked radio button
    if (cashRadio.checked) {
        paymentModeDiv.style.display = 'none';
    } else if (onlineRadio.checked) {
        paymentModeDiv.style.display = 'block';
    }
});
// displaying payment mode on selecting online payment method 

//alert : select any payment method 
document.addEventListener("DOMContentLoaded", function() {
    const payButton = document.querySelector(".pay-button");

    payButton.addEventListener("click", function() {
        const paymentMethodSelected = document.querySelector("input[name='payment-method']:checked");

        if (!paymentMethodSelected) {
            alert("Please select a payment method.");
        }
    });
});
//alert : select any payment method 

//alert : selected any payment mode
document.addEventListener("DOMContentLoaded", function() {
    const payButton = document.querySelector(".pay-button");

    payButton.addEventListener("click", function() {
        const paymentMethodSelected = document.querySelector("input[name='payment-method']:checked");
        const paymentModeSelected = document.querySelector("input[name='payment-mode']:checked");

        if (!paymentMethodSelected) {
            alert("Please select a payment method.");
        } else if (!paymentModeSelected) {
            alert("Please select a payment mode.");
        }
    });
});
//alert : selected any payment mode

// swapping services 
function selfService(e){
    document.getElementById('serv1').style.fontWeight = 'normal'
    e.style.fontWeight = "bold"
    e.style.color = "black"
    document.querySelector(".service-bottom").style.transform = "translateX(100%)"
    convertToSelect(e)
}
function homeService(e){
    document.getElementById('serv2').style.fontWeight = 'normal'
    e.style.fontWeight = "bold"
    e.style.color = "black"
    document.querySelector(".service-bottom").style.transform = "translateX(0%)"
}

// alert : address changed
document.addEventListener("DOMContentLoaded", function () {
    const addressButton1 = document.querySelector(".address-button1");
    const addressTextarea = document.getElementById("floatingTextarea");
  
    addressButton1.addEventListener("click", function () {
      const newAddress = addressTextarea.value;
      addressTextarea.value = newAddress;
      alert("Address is changed");
    });
  });
  // alert : address changed

//   alert : using the same address
document.addEventListener("DOMContentLoaded", function () {
    const addressButton2 = document.querySelector(".address-button2");
  
    addressButton2.addEventListener("click", function () {
      alert("Old address will be used");
    });
  });
