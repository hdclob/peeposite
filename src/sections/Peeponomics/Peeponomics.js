import React from 'react'
import './Peeponomics.css'
import icon1 from '../../assets/images/supply-chain.png'
import icon2 from '../../assets/images/management.png'
import icon3 from '../../assets/images/benefits.png'

const Peeponomics = () => {
    return (
        <section className='peeponomics' id='peeponomics'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <h3 className='peeponomicsTitle'>
                            Peeponomics
                        </h3>
                    </div>
                
                
                    <div className="col-xl-12 d-flex flex-wrap justify-content-around">
                        <div className="col-lg-4 col-md-5 singleCard">
                            <div>
                                <img className='img-fluid iconImage' src={icon1} alt="supply-chain" />
                            </div>
                            <div className='cardDetails'>
                                <h5>
                                    Total Supply
                                </h5>
                                <p>
                                1,000,000,000,000 Peepos <br />
                                45% Initial Burn. <br />
                                1% Burned Per Day For 5 Days. <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 singleCard">
                            <div>
                                <img className='img-fluid iconImage' src={icon2} alt="supply-chain" />
                            </div>
                            <div className='cardDetails'>
                                <h5>
                                    1% Added to Liquidity
                                </h5>
                                <p>
                                1% of each transaction added to the Liquidity Pool.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 singleCard">
                            <div>
                                <img className='img-fluid iconImage' src={icon3} alt="supply-chain" />
                            </div>
                            <div className='cardDetails'>
                                <h5>
                                9% Distributed to Holders
                                </h5>
                                <p>
                                9% of each transaction distributed to all Holders
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Peeponomics
