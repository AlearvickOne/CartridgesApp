import styles from "@/styles/home/Home.module.scss";
import { session } from "@/app/api/auth/configs/session";
import { useAuthState } from "@/hooks/useAuthState";

async function AuthorizationPage() {
  const { inputsAuth, setInputLogin, setInputPassword } = useAuthState();

  const { session } = session;

  return (
    <main className={styles.authContainer}>
      <div className={styles.authForm_wrapper}>
        <h1 className="mb-5 text-center text-white text-xl">Авторизация</h1>
        <p className="mb-5 text-center text-white text-xl"></p>
        <form className={styles.authForm}>
          <input
            type="text"
            placeholder="Введите логин"
            value={inputsAuth.login}
            onChange={(ev) => setInputLogin(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Введите пароль"
            value={inputsAuth.password}
            onChange={(ev) => setInputPassword(ev.target.value)}
          />
          <button onClick={() => () => {}}>Войти в систему</button>
        </form>
      </div>
    </main>
  );
}

export default AuthorizationPage;
