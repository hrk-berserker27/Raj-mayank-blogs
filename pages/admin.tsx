import { FormEvent } from "react";
import styles from "../styles/LoginPage.module.css";
function login() {

  const handleSubmit = (e: FormEvent<HTMLInputElement>)=> {
    e.preventDefault();
    console.log("hello");
  }
  return(
  <div className={styles.formContainer}>
    <form className={styles.form}>
      <h1>Admin Login</h1>
    <input type="text" /><input type="password" autoComplete="on"/>
    <input type="submit" onSubmit={handleSubmit}></input>
    </form>
    </div>);
}

export default login;
