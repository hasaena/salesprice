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
  let expectedLanding = ( Number(buyPrice) + Number(deliveryFee) + Number(weight) * 8.74 ) * 20;  
  /* 230130 환율 19.1의 3% 반영 */
  /* 230210 환율 18.65의 3% 반영 */
  /* 230228 환율 18.05의 3% 반영 */
  /* 230403 환율 17.83의 3% 반영 */
  /* 230425 환율 17.58의 3% 반영 */
  /* 230524 서브매니저/스태프에게 오픈하면서 환율 넉넉하게 조정(현재 6.56%) */
  /* 230703 비싼제품들 마진율이 너무 낮아서 환율베이스 계산식으로 다시 쓰고 마진율 조정 */
  /* 240717 스태프들 가격 계산 너무 비싸서 다시 조정, 무게 9->8.5, 환율 19.2 -> 19.4, 마진 낮추기 */
  /* 250331 도토리몰 다같이 사용하기 위해 다시 조정. 무게 8.5유지, 환율 19.4 -> 19 환율조정, 마진2%씩 낮춤 */
  /* 250618 판매가격 너무 싸다고 살짝씩 올려달라고 해서 실제환율 19.01 + 5%해서 20으로 변경 */
  
  if (checkNum(buyPrice) === false || checkNum(weight) === false) {
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
      result = Math.ceil(expectedLanding * 1.20 / 10000) * 10000;
    } else if (expectedLanding > 900000) {
      result = Math.ceil(expectedLanding * 1.22 / 10000) * 10000;
    } else if (expectedLanding > 700000) {
      result = Math.ceil(expectedLanding * 1.24 / 10000) * 10000;
    } else if (expectedLanding > 500000) {
      result = Math.ceil(expectedLanding * 1.26 / 10000) * 10000;
    } else if (expectedLanding > 400000) {
      result = Math.ceil(expectedLanding * 1.27 / 10000) * 10000;
    } else if (expectedLanding > 300000) {
      result = Math.ceil(expectedLanding * 1.30 / 10000) * 10000 + 10000;
    } else if (expectedLanding > 200000) {
      result = Math.ceil(expectedLanding * 1.32 / 10000) * 10000 + 20000;
    } else {
      result = Math.ceil(expectedLanding * 1.34 / 10000) * 10000 + 30000;
    }
  }
  document.getElementById('result').textContent = '판매가 : ' + result;
}
