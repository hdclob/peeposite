import React, { useState } from 'react'
import { Col, FormControl, InputGroup, Toast } from 'react-bootstrap'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import './BuyPeepo.css'
const BuyPeepo = () => {
    const [showA, setShowA] = useState(false);
  
    const toggleShowA = () => setShowA(!showA);
    return (
        <section className='buypeepo'>
            <div className="container">
                <div className="row align-items-center buyPeepoRow justify-content-center">
                    <div className="col-lg-12 d-flex flex-column align-items-center justify-content-center">
                         
                    <h1>
                        Buy $peepo
                    </h1>
                        <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xFD42e634c21f493534EEd85A5820d11B6b94cd94" target='blank' className='panCakeBtn'>Buy on PancakeSwap</a>
                        
                        <div className="col-10">
                        <InputGroup className="mb-3">
                                <FormControl
                         readOnly
                        placeholder="Contract Address 0xFD42e634c21f493534EEd85A5820d11B6b94cd94"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                                <InputGroup.Append>
                                <CopyToClipboard text='0xFD42e634c21f493534EEd85A5820d11B6b94cd94'
                                >
                                 <button className='copyBtn' onClick={toggleShowA}>
                                    copy
                                </button>
                                </CopyToClipboard>
                             
                        </InputGroup.Append>
                            </InputGroup>
                            <Col className='d-flex justify-content-center'>
                            <Toast show={showA} onClose={toggleShowA} delay={3000} autohide>  
                            <Toast.Body> !!  Copied text Successfully !!</Toast.Body>
                            </Toast>
                            </Col>
                            
                            <h3>
                                Up your slippage to 11%
                            </h3>
                        </div>

                   </div>
                </div>
            </div>
        </section>
    )
}

export default BuyPeepo
