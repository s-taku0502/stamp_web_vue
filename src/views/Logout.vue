methods: {
  logout() {
    localStorage.removeItem('authToken'); // トークンを削除
    this.$router.push('/login'); // ログイン画面にリダイレクト
  }
}
