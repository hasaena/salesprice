let buyPrice = -1;
function saveBuyPrice() {
  buyPrice = document.getElementById('input1').value;
}

let deliveryFee = -1;
function saveDeliveryFee() {
  deliveryFee = document.getElementById('input2').value;
}

let weight = -1;
function saveWeight() {
  weight = document.getElementById('input3').value;
}

function checkNum(string) {
  if (string === '0') {
    return true;
  } else if (Number(string) === 0) {
    return false;
  } else if (string === -1) {
    return false;
  }
  return true
}

function calculatePrice() {
  let result = 0;
  let expectedLanding = ( Number(buyPrice) + Number(deliveryFee) + Number(weight) * 9 ) * 20;  
  /* 230130 환율 19.1의 3% 반영 */
  /* 230210 환율 18.65의 3% 반영 */
  /* 230228 환율 18.05의 3% 반영 */
  /* 230403 환율 17.83의 3% 반영 */
  /* 230425 환율 17.58의 3% 반영 */
  /* 230524 서브매니저/스태프에게 오픈하면서 환율 넉넉하게 조정(현재 6.56%) */
  
  if (checkNum(buyPrice) === false || checkNum(deliveryFee) === false || checkNum(weight) === false) {
    alert('Vui lòng nhập một số vào trường trống');
    result = 'Error';
  } else if (Number(buyPrice) < 0 || Number(deliveryFee) < 0 || Number(weight) < 0) {
    alert('Vui lòng nhập một số lớn hơn 0');
    result = 'Error';
  } else if (Number(buyPrice) < 5000) {
    alert('Đối với các sản phẩm dưới 5.000 KRW, hãy hỏi Manager');
    result = 'Error';
  } else {
    /*
    if (expectedLanding > 1800000) {
      result = Math.ceil(expectedLanding * 1.08 / 10000) * 10000;
    } else if (expectedLanding > 1500000) {
      result = Math.ceil(expectedLanding * 1.09 / 10000) * 10000;
    } else if (expectedLanding > 1200000) {
      result = Math.ceil(expectedLanding * 1.11 / 10000) * 10000;
    } else if (expectedLanding > 900000) {
      result = Math.ceil(expectedLanding * 1.15 / 10000) * 10000;
    } else if (expectedLanding > 600000) {
      result = Math.ceil(expectedLanding * 1.18 / 10000) * 10000;
    } else if (expectedLanding > 300000) {
      result = Math.ceil(expectedLanding * 1.22 / 10000) * 10000;
    } else {
      result = Math.ceil(expectedLanding * 1.25 / 10000) * 10000;
    }
    */
    result = Math.ceil((expectedLanding + 50000) / 10000)* 10000;
  }
  document.getElementById('result').textContent = '판매가 : ' + result;
}
