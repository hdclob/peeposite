import React from 'react'
import './Footer.css'
import bscscan from '../../assets/images/bscscan.svg'
import telegram from '../../assets/images/telegram.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-12 footerTitle">
                    <h1>
                        Follow us
                    </h1>
                    </div>
                </div>
                <div className="row justify-content-between align-items-center px-3">
                    <a target="_blank" className="col-lg-3 col-md-6 footerItemCard" href="https://bscscan.com/token/0xFD42e634c21f493534EEd85A5820d11B6b94cd94">
                        <img src={bscscan} alt="bscscan" className='img-fluid' />
                    </a>
                    <a target="_blank" className="col-lg-3 col-md-6 footerTelegramCard" href="https://t.me/peepotokenpublic">
                        <img src={telegram} alt="bscscan" className='img-fluid' />
                        Broadcast Channel
                    </a>
                    <a target="_blank" className="col-lg-3 col-md-6 footerTelegramCard" href="https://t.me/peepocoinbsc">
                        <img src={telegram} alt="bscscan" className='img-fluid' />
                        Community Channel
                    </a>
                    <a target="_blank" className="col-lg-3 col-md-6 footerTwitterCard" href="https://twitter.com/PeepoCoinBSC">
                        <img src={twitter} alt="bscscan" className='img-fluid' />
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
