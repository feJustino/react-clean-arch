import React from 'react'
import Styles from './login-styles.scss'
import icon from './logo'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <img className={Styles.icon} src={icon}></img>
        <h1>Enquetes para Desenvolvedores</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <span className={Styles.hint}>ERRO</span>
        </div>
        <div className={Styles.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <span className={Styles.hint}></span>
        </div>
        <button type="submit">Entrar</button>
        <span className={Styles.link}>criar conta</span>
      </form>
      <footer className={Styles.footer}></footer>
    </div>
  )
}

export default Login
