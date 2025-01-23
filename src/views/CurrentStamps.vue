<template>
  <div id="CurrentStamps">
    <h1>取得したスタンプ</h1>
    <div v-if="stamps.length > 0" class="stamps-container">
      <div v-for="stamp in stamps" :key="stamp.id" class="stamp">
        <img :src="stamp.imageUrl" alt="Stamp Image" />
        <p>{{ stamp.description }}</p>
      </div>
    </div>
    <div v-else>
      <p>スタンプがありません。</p>
    </div>
  </div>
</template>

<script>
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { QrcodeStream } from 'vue-qrcode-reader';
import { setDoc } from "firebase/firestore";
import { checkAuthAndRedirect } from "@/utils/auth";

export default {
  name: "CurrentStamps",
  components: {
    QrcodeStream,
  },
  data() {
    return {
      stamps: [],
      scanning: false,
    };
  },
  async created() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const db = getFirestore();
        const userStampRef = doc(db, "currentStamps", user.email);
        const userStampSnap = await getDoc(userStampRef);

        if (userStampSnap.exists()) {
          const stampIds = Object.keys(userStampSnap.data());
          const stamps = await Promise.all(
            stampIds.map(async (id) => {
              const stampRef = doc(db, "stamps", id);
              const stampSnap = await getDoc(stampRef);
              if (stampSnap.exists()) {
                return { id, ...stampSnap.data() };
              }
              return null;
            })
          );
          this.stamps = stamps.filter(stamp => stamp !== null);
        } else {
          console.error("スタンプ情報が見つかりません。");
        }
      } else {
        console.error("ユーザーが認証されていません。");
      }
    });
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

          if (userStampSnap.exists() && userStampSnap.data()[text]) {
            console.log("スタンプは既に存在します。");
            alert("このスタンプは既に取得済みです。");
          } else {
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
#CurrentStamps {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
}

.stamps-container {
  display: flex;
  flex-wrap: wrap;
}

.stamp {
  margin: 10px;
  text-align: center;
}

.stamp img {
  width: 100px;
  height: 100px;
}

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

img {
  margin-top: 20px;
  max-width: 100%;
  height: auto;
}
</style>