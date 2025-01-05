// メッセージを受け取るリスナーを設定
window.addEventListener('message', (event) => {
    const receivedData = event.data;

    // 受信データを「読み取った文字」として表示
    const messageElement = document.getElementById('message');
    messageElement.innerText = `読み取った文字: ${receivedData}`;

    // 条件に応じて画像を表示
    /*
    const imageContainer = document.getElementById('image-container');
    if (receivedData === 'aiueo') {
        const img = document.createElement('img');
        img.src = './assets/images/sample.png'; // 表示する画像のパス
        img.alt = 'Sample Image';
        imageContainer.innerHTML = ''; // 以前の内容をクリア
        imageContainer.appendChild(img);
    } else {
        imageContainer.innerHTML = '<p>このデータに対応する画像はありません。</p>';
    }
    */
  });
