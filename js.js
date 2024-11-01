function makePrediction() {
  const data = {
      chieuDai: parseFloat(document.getElementById("chieuDai").value),
      chieuNgang: parseFloat(document.getElementById("chieuNgang").value),
      dienTich: parseFloat(document.getElementById("dienTich").value),
      Phongngu: parseInt(document.getElementById("Phongngu").value),
      SoTang: parseFloat(document.getElementById("SoTang").value),
      PhongTam: parseFloat(document.getElementById("PhongTam").value),
      Loai: document.getElementById("Loai").value,
      GiayTo: document.getElementById("GiayTo").value,
      TinhTrangNoiThat: document.getElementById("TinhTrangNoiThat").value,
      Phuong: document.getElementById("Phuong").value
  };
  console.log(data)

  fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    console.log('1')
    document.getElementById("result").innerText = `Giá dự đoán: ${result.prediction} $`;
  })
  .catch(error => console.error('Error:', error));
}
