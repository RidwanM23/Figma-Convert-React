import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container">
      <h1>Login Acara Musim Panas</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Kata Sandi:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Masuk</button>
      </form>
      <div className="register-link">
        Belum punya akun? <Link to="/register">Daftar di sini</Link>
      </div>
    </div>
  )
}

export default Login