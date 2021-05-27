import React from 'react'
import './RoadMap.css'
import img from '../../assets/images/Peepo_Construction.png'

const RoadMap = () => {
    return (
        <section className='roadMap' id='raodmap'>
            <div className="container">
                <div className="row">
                <div className='col-lg-12 roadMapTitleCard'>
                        <div className='col-lg-6 col-md-12 col-12'>
                        <h2 className='roadMapTitle'>
                            Road Map
                        </h2>
                        </div>
                    </div>
                    <div className="col-lg-12 CardDeckDiv position-relative">
                        <div className="col-lg-6 Peepo_ConstructionImg">
                            <img src={img} alt="Peepo_Construction" />
                    </div>
                        <div className='col-lg-6 roadMapDetails col-12'>
                        <div className="col-lg-12 col-md-12 roadMapCard">
                            
                            <div className='roadMapCardDetails'>
                                <h5>
                                    Q2 2021
                                </h5>
                                <ul>
                                    <li>PROJECT LAUNCH</li>
                                    <li>LOGO & WEBSITE LAUNCH</li>
                                    <li>WHITEPAPER</li>
                                    <li>REDDIT AMA</li>
                                    <li>COINGECKO &  COINMARKETCAP LAUNCH</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 roadMapCard">
                            <div className='roadMapCardDetails'>
                                <h5>
                                    Q3 2021
                                </h5>
                                <ul>
                                    <li>MARKETING PUSHING</li>
                                    <li>EXCHANGE LISTING</li>
                                    <li>ECOSYSTEM DEVELOPMENT</li>
                                    <li>INFLUENCER ONBOARDING</li>
                                    <li>AUDITS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 roadMapCard">
                            <div className='roadMapCardDetails'>
                                <h5>
                                    Q4 2021
                                </h5>
                                <ul>
                                    <li>MERCH</li>
                                    <li>contests</li>
                                    <li>Stream Clip minting system</li>
                                    <li>ntf platform</li>
                                    <li>Giveaways</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoadMap
