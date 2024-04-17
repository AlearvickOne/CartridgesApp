import { cookies } from "next/headers";

class CookiesCurrentUser {
  private CURRENT_USER_KEY = "currentUser";

  addCookies(user: {}) {
    document.cookie = `${this.CURRENT_USER_KEY}=${JSON.stringify(user)}; path=/`;
  }

  getCookies() {
    cookies;
  }
}
