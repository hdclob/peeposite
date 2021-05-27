import React from 'react'
import './HeaderMain.css'
import pdf from '../../assets/peepocoin-whitepaper.pdf'

const HeaderMain = () => {
    return (
        <section className='headerMain' id="home">
            <div className="container">
                <div className="row headerMainRow">
                    <div className="col-xl-8 col-lg-8">
                        <div>
                        <h1>
                            From The Peepo To The People
                        </h1>
                        <p><strong>Peepo</strong> is a community driven cryptocurrency project focused on creating a platform for streamers and content creators to mint NFTs of their content.</p>
                     </div>
                        <div className='d-flex flex-wrap'>
                            <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xFD42e634c21f493534EEd85A5820d11B6b94cd94" target='blank' className='panCakeBtn'>Buy on PanCakeSwap</a>
                            <a
                                href={pdf}
                                className='joinTelegramBtn mx-4'
                                target='blank'
                            >
                                Whitepaper
                            </a>
                            <a href="https://t.me/PeepoCoinBSC" target='blank' className='joinTelegramBtn mr-lg-3'>Join Our Telegram</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderMain
