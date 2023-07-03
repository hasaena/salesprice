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
  let expectedLanding = ( Number(buyPrice) + Number(deliveryFee) + Number(weight) * 9 ) * 19.5;  
  /* 230130 환율 19.1의 3% 반영 */
  /* 230210 환율 18.65의 3% 반영 */
  /* 230228 환율 18.05의 3% 반영 */
  /* 230403 환율 17.83의 3% 반영 */
  /* 230425 환율 17.58의 3% 반영 */
  /* 230524 서브매니저/스태프에게 오픈하면서 환율 넉넉하게 조정(현재 6.56%) */
  /* 230703 비싼제품들 마진율이 너무 낮아서 환율베이스 계산식으로 다시 쓰고 마진율 조정 */
  
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
    if (expectedLanding > 1500000) {
      result = Math.ceil(expectedLanding * 1.28 / 10000) * 10000;
    } else if (expectedLanding > 900000) {
      result = Math.ceil(expectedLanding * 1.30 / 10000) * 10000;
    } else if (expectedLanding > 700000) {
      result = Math.ceil(expectedLanding * 1.32 / 10000) * 10000;
    } else if (expectedLanding > 500000) {
      result = Math.ceil(expectedLanding * 1.34 / 10000) * 10000 + 10000;
    } else if (expectedLanding > 400000) {
      result = Math.ceil(expectedLanding * 1.36 / 10000) * 10000 + 20000;
    } else if (expectedLanding > 300000) {
      result = Math.ceil(expectedLanding * 1.38 / 10000) * 10000 + 30000;
    } else if (expectedLanding > 200000) {
      result = Math.ceil(expectedLanding * 1.40 / 10000) * 10000 + 40000;
    } else {
      result = Math.ceil(expectedLanding * 1.42 / 10000) * 10000 + 50000;
    }
  }
  document.getElementById('result').textContent = '판매가 : ' + result;
}
