import React, { useEffect, useState }  from 'react';
import { getList } from '../services/list';
const rating = (data)=> {
    switch (data.toLowerCase()) {
        case 'novice':
            return (<div>
                <i className="fa fa-star fa-2x"></i>
                <i className="fa fa-star fa-2x"></i>
            </div>);

        case 'beginner':
            return (<div>
                <i className="fa fa-star fa-2x"></i>
                <i className="fa fa-star fa-2x"></i>
                <i className="fa fa-star fa-2x"></i>
            </div>);

        case 'practitioner':
            return (<div>
                <i className="fa fa-star fa-2x"></i>
                <i className="fa fa-star fa-2x"></i>
                <i className="fa fa-star fa-2x"></i>
                <i className="fa fa-star fa-2x"></i>
            </div>);

        case 'leader':
            return (<div>
                <i className="fa fa-star fa-2x"></i>
                <i className="fa fa-star fa-2x"></i>
                <i className="fa fa-star fa-2x"></i>
                <i className="fa fa-star fa-2x"></i>
                <i className="fa fa-star fa-2x"></i>
            </div>);

        default:
            return (
                <div>NA</div>
            )
    }
}

const Dashboard = () => {
    const [dashboarddata, setDashboarddata] = useState([]);
      useEffect(() => {
        console.log('Inside useEffect')
        getList()
          .then(items => {
                console.log(items.surveys)
                setDashboarddata(items.surveys.surveyList)
          })
      }, [])
    const renderDashboradData = dashboarddata.map((data) => {
        console.log(data)
        return (
            <div key= {data.surveyId} className={`container survey-box`}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="col-sm-3 s-box-pad">
                        <div className="row s-box-1 box-bold">{data.marketUnit}</div>
                        <div className="row s-box-1 box-bold">{data.project}</div>
                        <div className="row s-box-2">Date: {data.submittedOn ? data.submittedOn : '-'}</div>
                        </div>
                        <div className="col-sm-2 s-box-pad">
                            <div className="row s-box-3 box-bold">Score</div>
                        <div className="row s-box-4">{data.score}</div>
                        </div>
                        <div className="col-sm-2 s-box-pad">
                            <div className="row s-box-3 box-bold">Rating</div>
                            <div className="row s-box-4">{data.rating}</div>
                        </div>
                        <div className="col-sm-2 s-box-pad">
                            <div className="row s-box-7 box-bold">Status</div>
                            <div className="row s-box-8 is-submitted">{data.status}</div>
                        </div>
                        <div className="col-sm-3 s-box-pad ">
                            <div className="row s-box-5 box-bold">Overall Level </div>
                            <div className="row s-box-6">{data.level}</div>
                            <div className="row s-box-6 star-icons">{rating(data.level ? data.level : '') }</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className="search-survey-container page-fragment" id="dashboard" >
            <div className="container marb20">
                <div className="row float-right">
                    <button type="submit" className="assessment-btn btn btn-primary dashboard-assesment-btn">Start new Assessment</button>
                </div>
            </div>
            {renderDashboradData}
        </div>
    )
}
export default Dashboard
