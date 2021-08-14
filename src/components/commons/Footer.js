import React from 'react'
import { constants } from '../../utils/constants/constants';

const Footer = () => {
    return (
        <div className="footer__fixed">
            <div className="footer">
                <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-3 is-hidden-mobile">
                        <p className="title">{constants.footer.widget1.title}</p>
                        <p className="content is-hidden-tablet-only">{constants.footer.widget1.content}</p>
                    </div>
                    <div className="column is-3 is-hidden-mobile">
                        <p className="title">{constants.footer.widget2.title}</p>
                        <p className="content is-hidden-tablet-only">{constants.footer.widget2.content}</p>
                    </div>
                    <div className="column price">
                        <p className="total-pay">$295.95</p>
                        <p className="content">{constants.footer.legendTotal}</p>
                    </div>
                    <div className="column is-1 price">
                        <button className="button is-info is-normal">{constants.footer.buttonBuy}</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
