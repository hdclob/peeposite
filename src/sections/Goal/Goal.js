import React from 'react'
import './Goal.css'
import img from '../../assets/images/peepothinking.png'

const Goal = () => {
    return (
        <section className='goal'>
            <div className="container">
                <div className="row goalRow position-relative">
                <div className="col-lg-6 col-md-12">
                        <div >
                        <h1>
                            Our goal
                        </h1>
                            <p>Peepo Coin is a community-based and community-driven token, guaranteeing complete and utter transparency through every step of this project.</p>
                            <p>
                            Our responsibility is to create a fast, secure and easy way for streamers to receive crypto donations from their viewers.
                            Wether you want to donate $PEEPO, $BNB or any other cryptocurrency, we are here to help you.
                            </p>
                     </div>
                    </div>
                    <div className="col-lg-4 col-md-6 goalPicture">
                        <img src={img} alt="goal picture" className='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Goal
