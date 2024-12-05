import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    acara: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Di sini bisa ditambahkan logika untuk mengirim data ke backend
    console.log('Form submitted:', formData)
    navigate('/') // Redirect ke halaman utama setelah submit
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container">
      <h1>Pendaftaran Acara Musim Panas</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nama">Nama Lengkap:</label>
        <input 
          type="text" 
          id="nama" 
          name="nama" 
          value={formData.nama}
          onChange={handleChange}
          required 
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />

        <label htmlFor="telepon">Nomor Telepon:</label>
        <input 
          type="tel" 
          id="telepon" 
          name="telepon"
          value={formData.telepon}
          onChange={handleChange}
          required 
        />

        <label htmlFor="acara">Pilih Acara:</label>
        <select 
          id="acara" 
          name="acara" 
          value={formData.acara}
          onChange={handleChange}
          required
        >
          <option value="">Pilih acara...</option>
          <option value="pantai">Pesta Pantai</option>
          <option value="piknik">Piknik Taman</option>
          <option value="konser">Konser Musim Panas</option>
          <option value="olahraga">Turnamen Olahraga</option>
        </select>

        <button type="submit">Daftar Sekarang</button>
      </form>
    </div>
  )
}

export default Register