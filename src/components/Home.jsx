import React from 'react'
import './Home.css'
const Home = () => {
    
  return (
    <div className="home">
      <div className="hero-container">
        <div className="hero">
          <div className="hero-content">
              <h1>Selamat Datang di Acara Musim Panas</h1>
              <p>Nikmati liburan musim panas terbaik dengan berbagai acara seru!</p>
              <a href="#events" className="btn">Lihat Acara</a>
          </div>
        </div>
        <div id="events" className="section events">
              <h2>Acara Mendatang</h2>
              <div className="event-list">
                  <div className="event-card">
                      <img src="party.avif" alt="Pesta Pantai" />
                      <div className="event-card-content">
                          <h3>Pesta Pantai Tahunan</h3>
                          <p>31 Agustus 2024</p>
                          <a href="#" className="btn">Detail</a>
                      </div>
                  </div>
                  <div className="event-card">
                      <img src="konser.jpg" alt="Konser Musim Panas" />
                      <div className="event-card-content">
                          <h3>Konser musik</h3>
                          <p>29 Agustus 2024</p>
                          <a href="#" className="btn">Detail</a>
                      </div>
                  </div>
                  <div className="event-card">
                      <img src="kuliner.jpg" alt="Festival Kuliner" />
                      <div className="event-card-content">
                          <h3>Festival Kuliner Musim Panas</h3>
                          <p>31 Agustus 2024</p>
                          <a href="#" className="btn">Detail</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="section">
        <h2>Tentang Kami</h2>
        <p>Kami adalah penyelenggara acara musim panas terbesar di kota ini. Dengan pengalaman kurang dari 1 tahun, kami berkomitmen untuk memberikan pengalaman liburan yang tak terlupakan bagi Anda.</p>
        <a href="regis.html" className="btn">Daftar Sekarang</a>
      </div>
      <footer className="footer">
        <p>2024 Acara Musim Panas. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  )
}

export default Home