<!-- filepath: /home/takum1/vuetify/stamp_web_vue/src/views/Contact.vue -->
<template>
    <div>
      <main>
        <form id="contact-form" method="post" action="https://script.google.com/macros/s/AKfycbypfud-gElSNTgIhY4HnjnLu2cs9YNvFgUgnc9-cExUifcRtatjmLeSGf32Hw_39W8HMA/exec">

            <label for="inquiry-type">
                お問い合わせ内容をお選びください。
                <span style="color: red;"> *</span>
                <span class="error-message">この質問は必須です。</span>
            </label>

            <select id="inquiry-type" name="inquiry-type" v-model="inquiryType" required>
                <option value="" disabled selected>選択</option>
                <option value="パスワード再設定">パスワードを忘れた</option>
                <option value="スタンプらり～情報">スタンプらり～に関するお問い合わせ</option>
                <option value="出店情報">会員の出店について</option>
                <option value="活動情報">活動に関するお問い合わせ</option>
                <option value="個人情報">個人情報に関するお問い合わせ</option>
                <option value="意見・要望">当ウェブサイトへのご意見・ご要望</option>
                <option value="その他">その他</option>
            </select>
  
            <div v-if="inquiryType === 'パスワード再設定'">
                <label for="email">メールアドレス<span style="color: red;"> *</span><p>主催団体より連絡させていただく場合がございます。</p></label>
                <input type="email" id="email" name="email" placeholder="例）nuka@sample.com" required />
            </div>

            <div v-else-if="inquiryType === 'その他'">
                <label for="inquiry-details">お問い合わせ内容をお書きください。<span style="color: red;"> *</span></label>
                <p style="color: red;"><a href="https://www4.city.kanazawa.lg.jp/soshikikarasagasu/zeimuka/gyomuannai/2/6/4325.html" target="_blank">金沢市へのお問い合わせはこちら</a></p>
                <textarea id="inquiry-details" name="inquiry-details" rows="4" required></textarea>
    
                <label for="urgent">
                至急の内容の場合は☑を入れてください。
                <input type="checkbox" id="urgent" name="urgent" value="至急">
                </label>
    
                <hr />
    
                <label for="name">氏名<span style="color: red;"> *</span></label>
                <input type="text" id="name" name="name" placeholder="額　太郎" required />
    
                <label for="email">メールアドレス<span style="color: red;"> *</span><p>主催団体より連絡させていただく場合がございます。</p></label>
                <input type="email" id="email" name="email" placeholder="例）nuka@sample.com" required />
    
                <label for="organization">所属</label>
                <input type="text" id="organization" name="organization" placeholder="回答を入力" />
    
                <label for="phone">お電話番号</label>
                <input type="tel" id="phone" name="phone" placeholder="回答を入力" />
            </div>

            <div v-else>
                <label for="inquiry-details">お問い合わせ内容をお書きください。<span style="color: red;"> *</span></label>
                <attendance>項目によって記入内容が異なります。</attendance>
                <!-- <p style="color: red;">金沢市へのお問い合わせはこちら</p> -->
                <textarea id="inquiry-details" name="inquiry-details" rows="4" required></textarea>
    
                <label for="urgent">
                至急の内容の場合は☑を入れてください。
                <input type="checkbox" id="urgent" name="urgent" value="至急">
                </label>
    
                <hr />
    
                <label for="name">氏名<span style="color: red;"> *</span></label>
                <input type="text" id="name" name="name" placeholder="額　太郎" required />
    
                <label for="email">メールアドレス<span style="color: red;"> *</span><p>主催団体より連絡させていただく場合がございます。</p></label>
                <input type="email" id="email" name="email" placeholder="例）nuka@sample.com" required />
    
                <label for="organization">所属</label>
                <input type="text" id="organization" name="organization" placeholder="回答を入力" />
    
                <label for="phone">お電話番号</label>
                <input type="tel" id="phone" name="phone" placeholder="回答を入力" />
    
            </div>

            <div class="button-group">
                <button type="submit">送信</button>
                <button type="reset">フォームをクリア</button>
            </div>

        </form>

      </main>

    </div>

</template>
  
  <script>
  export default {
    name: 'Contact',
    data() {
      return {
        inquiryType: ''
      };
    }
  };
  </script>
  
  <style scoped>
  attendance {
    font-size: 12px;
    text-align: start;
  }

  form {
    max-inline-size: 600px;
    margin: auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
  }
  
  label {
    display: block;
    margin-block-end: 8px;
    font-weight: bold;
  }
  
  label .p {
    font-weight: lighter;
  }
  
  select, input, textarea {
    inline-size: 100%;
    padding: 10px;
    margin-block-end: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  textarea {
    resize: none;
  }
  
  input[type="checkbox"] {
    margin-inline-end: 8px;
  }
  
  .error-message {
    color: red;
    font-size: 12px;
    margin-block-start: -15px;
    margin-block-end: 20px;
  }
  
  button {
    background-color: #6200ea;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #4500b0;
  }
  
  .button-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .urgent-button {
    align-self: flex-end;
  }
  </style>