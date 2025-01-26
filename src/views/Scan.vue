<template>
  <div id="Scan">
    <main>
      <h1>QRコードをスキャン</h1>

      <!-- QRコードスキャナーのコンポーネント -->
      <qrcode-stream
        v-if="scanning"
        @detect="onDetect"
        class="scanner"
      ></qrcode-stream>

      <!-- スキャン開始 / 停止 ボタン -->
      <button @click="toggleScanning">
        {{ scanning ? 'スキャン停止' : 'スキャン開始' }}
      </button>
    </main>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader';
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { checkAuthAndRedirect } from "@/utils/auth";

export default {
  components: {
    QrcodeStream,
  },
  data() {
    return {
      scanning: false,
    };
  },
  async created() {
    await checkAuthAndRedirect(this.$router);
  },
  methods: {
    async onDetect(decodedText) {
      this.scanning = false;
      console.log("decodedText:", decodedText); // デバッグ情報を出力

      const user = auth.currentUser;

      // QRコードの内容が配列の場合、最初の要素を取得
      if (Array.isArray(decodedText)) {
        decodedText = decodedText[0];
      }

      // QRコード内容の詳細を確認
      let text = typeof decodedText === "string" ? decodedText : decodedText.rawValue;
      console.log("text:", text);

      if (user) {
        // 文字列が空かどうかチェック
        if (typeof text === "string" && text.trim() !== "") {
          // Firestoreにスタンプ情報を保存
          const userStampRef = doc(db, "currentStamps", user.email);
          const userStampSnap = await getDoc(userStampRef);

          if (userStampSnap.exists()) {
            const userStamps = userStampSnap.data();

            // QRコードのスタンプが既に存在するか確認
            if (userStamps && userStamps[text]) {
              console.log("スタンプは既に存在します。");
              alert("このスタンプは既に取得済みです。");
            } else {
              // 新しいスタンプをFirestoreに保存
              await setDoc(userStampRef, { [text]: true }, { merge: true });
              console.log("スタンプを保存しました。");

              // 次の画面に遷移
              try {
                this.$router.push({ name: "CurrentStamps", query: { text } });
              } catch (error) {
                console.error("画面遷移に失敗しました: ", error);
                alert(`${text}: 画面遷移に失敗しました`);
              }
            }
          } else {
            // スタンプデータがなかった場合、新規作成
            await setDoc(userStampRef, { [text]: true });
            console.log("新しいスタンプを保存しました。");

            try {
              this.$router.push({ name: "CurrentStamps", query: { text } });
            } catch (error) {
              console.error("画面遷移に失敗しました: ", error);
              alert(`${text}: 画面遷移に失敗しました`);
            }
          }
        } else {
          console.error("QRコードの内容が無効です:", text);
          alert(`${text}: 無効なQRコードです`);
        }
      } else {
        alert("ユーザーが認証されていません");
      }
    },
    toggleScanning() {
      this.scanning = !this.scanning;
    },
  },
};
</script>

<style scoped>
main {
  align-items: center;
  text-align: center;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

button {
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
}

button:disabled {
  background-color: #bbb;
  cursor: not-allowed;
}

h1 {
  margin-top: 20px;
  color: #333;
  text-align: center;
}

#Scan {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scanner {
  width: 100%;
  max-width: 500px;
  height: 500px;
  margin: 20px 0;
  border: 2px dashed #cccccc;
  position: relative;
}

.scanner video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scanner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #4CAF50;
  box-sizing: border-box;
  animation: blink 1.5s infinite;
  display: block;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/*ここのコードは基本変えない*/
img {
  margin-block-start: 20px;
  max-inline-size: 100%;
  block-size: auto;
}
</style>

