import { useState } from 'react';
import './footer.css'

function Footer() {

  const [uzPay , setUzPay] = useState([
    {
      id: 1 ,
      image: 'https://logobank.uz:8005/media/logos_png/Click-01.png'
    },
    {
      id: 2 ,
      image: 'https://logobank.uz:8005/media/logos_png/Apelsin-01.png'
    },
    {
      id: 3 ,
      image: 'https://logobank.uz:8005/media/logos_png/Uzcard-01.png'
    },
    {
      id: 4 ,
      image: 'https://logobank.uz:8005/media/logos_png/payme-01.png'
    }
  ])

  return (
    <div className="Footer">
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>Bog'lanish</h4>
              <ul className='paddingzero'>
                <li className='phonenumber default-li'><i class="fa-solid fa-phone"></i><h2>+998943614656</h2></li>
                <li className='tg-silka default-li'><i class="fab fa-telegram"></i><a href="https://t.me/AA_6464">Asadbek Abdullayev</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Kompaniya</h4>
              <ul>
                <li><a href="#">Biz haqimizda</a></li>
                <li><a href="#">Bizning hizmatlar</a></li>
                <li><a href="#">Xavfsizlik</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Yordam 24/7</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Telegram yordam</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">+998943614656</a></li>
                <li><a href="#">To'lov usullari</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Ijtimoiy tarmoqlar</h4>
              <div class="social-links">
                <a href="#"><i class="fab fa-telegram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="https://instagram.com/zamonshop"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
              </div>
              <div className="uzPay">
                {
                  uzPay.map(item => (
                    <a href=""><button><img src={item.image} alt="" /></button></a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
