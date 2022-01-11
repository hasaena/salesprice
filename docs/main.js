let buyPrice = 0;
function saveBuyPrice() {
  buyPrice = Number(document.getElementById('input1').value);
}

let deliveryFee = 0;
function saveDeliveryFee() {
  deliveryFee = Number(document.getElementById('input2').value);
}

let weight = 0;
function saveWeight() {
  weight = Number(document.getElementById('input3').value);
}

function calculatePrice() {
  let result = 0;
  if (buyPrice === 0 || deliveryFee === 0 || weight === 0) {
    alert('Please input only number except 0.')
  }
  let expectedLanding = ( buyPrice + deliveryFee + weight * 8.5 ) * 20;
  if (expectedLanding > 1800000) {
    result = Math.ceil(expectedLanding * 1.08 / 10000) * 10000;
  } else if (expectedLanding > 1500000) {
    result = Math.ceil(expectedLanding * 1.09 / 10000) * 10000;
  } else if (expectedLanding > 1200000) {
    result = Math.ceil(expectedLanding * 1.11 / 10000) * 10000;
  } else if (expectedLanding > 900000) {
    result = Math.ceil(expectedLanding * 1.13 / 10000) * 10000;
  } else if (expectedLanding > 600000) {
    result = Math.ceil(expectedLanding * 1.15 / 10000) * 10000;
  } else if (expectedLanding > 300000) {
    result = Math.ceil(expectedLanding * 1.17 / 10000) * 10000;
  } else {
    result = Math.ceil(expectedLanding * 1.19 / 10000) * 10000;
  }
  document.getElementById('result').textContent = 'Sales Price: ' + result;
}
