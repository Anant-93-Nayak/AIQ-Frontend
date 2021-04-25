import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../image/Accenture-logo.png'

const Navbar = () => {

    const [isHome, setIsHome] = useState("");
    const [isInnovation, setIsInnovation] = useState("");
    const [isAiq, setIsAiq] = useState("");
    const [isTeam, setIsTeam] = useState("");
    const [isSignOut, setIsSignOut] = useState("");

    const onNavClick = (e) => {
        setIsHome("");
        setIsInnovation("");
        setIsAiq("");
        setIsTeam("");
        setIsSignOut("");
    
        console.log(e);
        switch (e) {
          case 1: setIsHome("active");
            break;
          case 2: setIsInnovation("active");
            break;
          case 5: setIsTeam("active");
            break;
            case 6: setIsSignOut("active");
            break;
          case "dashboard": if (isAiq === "")  setIsAiq("active");
            break;
    
          default: console.log("error");
    
        }
      }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light-header">
            <div className="container-fluid row">
                {/* <!--<div id="sidebarCollapse">-->
                    <!--<div className="hambergur"></div>-->
                    <!--<div className="hambergur"></div>-->
                    <!--<div className="hambergur"></div>-->
                <!--</div>--> */}
                <div className="col-sm-5 left-section">
                    <div className="application-logo">
                        <img src={logo} title="Accenture High Performance Delivered." alt="Accenture High Performance Delivered." width="128" height="37"/>
                    </div>
                    <div id="applicationName" className="float-right">
                        <h2>Account Innovation questionnaire</h2>
                    </div>
                </div>
                <div className="col-sm-7 right-section">
                    <div className="profile-img-container float-right">
                        <img id="profile-img-header" className="profile-img-card" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="user" />
                    </div>

                    <ul className="list-unstyled components primary-nav float-right">
                        <Link to="/" onClick={()=>onNavClick(1)}>
                            <li className={isHome}  >
                                <button className="home-nav navbar-btn" >
                                    <div className="tab-name">HOME</div>
                                </button>
                            </li>
                        </Link>
                        <Link to="/history" onClick={()=>onNavClick(2)} >
                            <li className={isInnovation}>
                                <button className="about-nav navbar-btn" >
                                    <div className="tab-name">INNOVATION HISTORY</div>
                                </button>
                            </li>
                        </Link>
                        
                        <li className={"dropdown " +isAiq} onClick = {()=>onNavClick("dashboard")} >
                            <button className="aiq-nav navbar-btn is-dropdown" >
                                <div className="tab-name">AIQ</div>
                            </button>
                            <div className="dropdown-content">
                                <Link to="/dashboard" onClick={()=>onNavClick(3)} >
                                    <button className="dashboard-nav navbar-btn" >
                                        <div className="tab-name">DASHBOARD</div>
                                    </button>
                                </Link>
                                <Link to="questionaire" onClick = {()=>onNavClick(4)}>
                                    <button className="start-assessment navbar-btn"  >
                                        <div className="tab-name">Start New Assessment</div>
                                    </button>
                                </Link>
                            </div>
                        </li>
                        <Link to="/aboutus" onClick={()=>onNavClick(5)}>
                            <li className={isTeam}>
                                <button className="contact-nav navbar-btn"  >
                                    <div className="tab-name">Team</div>
                                </button>
                            </li>
                        </Link>
                        <Link to="/login" onClick={()=>onNavClick(6)}>
                            <li className={isSignOut}>
                                <button className="signout-nav navbar-btn" href="#myModal" data-toggle="modal" >
                                    <div className="tab-name">SIGN OUT</div>
                                </button>
                            </li>
                        </Link>
                    </ul>
                </div>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-align-justify"></i>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
