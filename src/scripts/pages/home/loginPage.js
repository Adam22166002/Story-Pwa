import LoginPresenter from "../../presenters/loginPresenter";

export default class LoginPage {
  constructor() {
    this.presenter = new LoginPresenter(this);
  }

  async render() {
    return `
      <section class="container">
        <h2>Login</h2>
        <form id="loginForm">
        <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Email" required />
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="Password" required />
          <button aria-label="login" type="submit">Login</button>
        </form>
        <p>Belum punya akun? <a href="#/register">Daftar di sini</a></p>
        <p id="loginMessage"></p>
      </section>
    `;
  }

  async afterRender() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      this.presenter.handleLogin(email, password);
    });
  }
  onLoginSuccess(loginResult) {
    localStorage.setItem("token", loginResult.token);
    document.getElementById("loginMessage").textContent = "Login berhasil!";
    window.location.hash = "#/home";
  }
  onLoginError(message) {
    document.getElementById("loginMessage").textContent = message;
  }
}
