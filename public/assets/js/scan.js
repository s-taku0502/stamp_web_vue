document.addEventListener("DOMContentLoaded", () => {
    const html5QrCode = new Html5Qrcode("reader");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const resultElement = document.getElementById("result");

    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        resultElement.innerText = `QRコード内容: ${decodedText}`;  // decodedText が読み取った内容

        // 新しいウィンドウでstamp.htmlを開く
        const stampWindow = window.open('stamp.html', '_blank');
        
        // 新しいウィンドウが読み込まれた後にデータを渡す
        stampWindow.onload = () => {
            stampWindow.postMessage(decodedText, '*');
        };

        console.log(`Decoded result: ${decodedText}`, decodedResult);
        html5QrCode.stop();
        startButton.disabled = false;
        stopButton.disabled = true;
    };

    // カメラオプション
    const config = { fps: 10, qrbox: 250 };

    // カメラの許可通知
    const requestCameraPermission = () => {
        return new Promise((resolve, reject) => {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    // カメラストリームを停止
                    stream.getTracks().forEach(track => track.stop());
                    /*
                    // 通知を表示
                    alert("カメラアクセスが許可されました。"); */
                    resolve();
                })
                .catch((err) => {
                    // 通知を表示
                    alert("カメラのアクセスが拒否されました。");
                    reject(err);
                });
        });
    };

    // 開始ボタン
    startButton.addEventListener("click", () => {
        requestCameraPermission().then(() => {
            Html5Qrcode.getCameras().then((devices) => {
                if (devices && devices.length) {
                    const cameraId = devices[0].id; // 最初のカメラを選択
                    html5QrCode.start(cameraId, config, qrCodeSuccessCallback)
                        .then(() => {
                            startButton.disabled = true;
                            stopButton.disabled = false;
                        })
                        .catch((err) => {
                            console.error("QRコードスキャンエラー: ", err);
                        });
                }
            }).catch((err) => {
                console.error("カメラデバイスの取得エラー: ", err);
            });
        }).catch((err) => {
            console.error("カメラのアクセスエラー: ", err);
        });
    });

    // 停止ボタン
    stopButton.addEventListener("click", () => {
        html5QrCode.stop().then(() => {
            console.log("スキャン停止");
            startButton.disabled = false;
            stopButton.disabled = true;
        }).catch((err) => {
            console.error("停止エラー: ", err);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const reader = document.getElementById("reader");

    menuToggle.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
            // ハンバーガーメニューが閉じている場合、`::before` を再表示
            reader.style.setProperty("--reader-before-display", "block");
            reader.style.setProperty("--reader-before-display-border", "block"); /* デフォルトで表示 */
        } else {
            // ハンバーガーメニューが開いている場合、`::before` を非表示
            reader.style.setProperty("--reader-before-display", "none");
            reader.style.setProperty("--reader-before-display-border", "none");
        }
    });
});

