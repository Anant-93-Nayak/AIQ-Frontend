import React from 'react'
import HighPerformanceImg from '../image/innovation-about.svg'

const Home = () => {
    return (
        <div className="homePage page-fragment">
            <div className="container about-section">
                <div className="row">
                    <div className="innovation-about-image float-left">
                        <img src={HighPerformanceImg} alt="Accenture High Performance Delivered." width="450"/>
                    </div>
                        <div className="innovation-about-description float-left">
                            <h2>Lorem Ipsum</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container carousel-container">
                    <div className="row">
                        {/* <h2 className="carousel-heading"></h2> */}
                    </div>
                    <div className="carousel-list">
                        <div id="myCarousel" className="carousel slide" data-interval="2500" data-ride="carousel">
                            {/* <!-- Carousel indicators --> */}
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            {/* <!-- Carousel items --> */}
                            <div className="carousel-inner">
                                <div className="active item carousel-fade" id="carousel-slide-1" >
                                    <h2>Innovation is taking two things that exist and putting them together in a new way.</h2>
                                    <div className="carousel-caption">
                                        <h3>Innovation takes birth in sync with the evolution of customer’s expectations and demands or vice versa</h3>
                                        <h3>Either way, organizations around the world have to continually innovate themselves and keep up with the people’s wants</h3>
                                    </div>
                                </div>
                                <div className="item carousel-fade" id="carousel-slide-2" >
                                    <h2>What is the calculus of innovation?</h2>
                                    <div className="carousel-caption">
                                        <h3>The calculus of innovation is really quite simple:</h3>
                                        <h3>Knowledge drives innovation, innovation drives productivity, productivity drives economic growth</h3>
                                    </div>
                                </div>
                                <div className="item carousel-fade" id="carousel-slide-3" >
                                    <h2>A ship is safe in harbor, but that’s not what ships are for</h2>
                                    <div className="carousel-caption">
                                        <h3>There is no innovation and creativity without failure. Period.</h3>
                                        <h3>If I have a thousand ideas and only one turns out to be good, I am satisfied.</h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Carousel nav --> */}
                            <a className="carousel-control left" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                            </a>
                            <a className="carousel-control right" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Home
