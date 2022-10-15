import styles from "../styles/LoginPage.module.css";
function login() {
  return <div className={styles.formContainer}>
    <form className={styles.form}>
      <h1>Admin Login</h1>
    <input type="text" /><input type="password" autoComplete="on"/>
    <input type="submit"></input>
    </form>
    </div>;
}

export default login;
