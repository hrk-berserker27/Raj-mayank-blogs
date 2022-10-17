import { FormEvent } from "react";
import styles from "../styles/LoginPage.module.css";
function login() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    console.log("hello");
  }
  return(
  <div className={styles.formContainer}>
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Admin Login</h1>
    <label>Enter your name<input type="text" /></label>
    <label>Enter your password<input type="password" autoComplete="on"/></label>
    <input type="submit"></input>
    </form>
    </div>);
}

export default login;
