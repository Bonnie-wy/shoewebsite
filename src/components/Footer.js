const Footer = () => {
    return (
        <div className="container">
            <div className="row footerContainter text-center">
                <div className="col-4">
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Store Locations</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li><a href="#">Customer Support</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <ul>
                        <li><a href="#">Our Company</a></li>
                        <li>
                            <a href="#">
                                Follow Us  
                                <i className="fab fa-facebook-square"></i>  
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center">
                <small>
                    <p>GoldenShoes Limited, London</p>
                    <p>Registered in England & Wales.  Registered Company Number: 00112233</p>
                </small>
            </div>
        </div>
    )
}

export default Footer