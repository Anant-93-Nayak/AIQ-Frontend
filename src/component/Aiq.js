import React, { useState, useEffect } from 'react';
import { getFormData } from '../services/formsData';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Aiq = ({setDisplayPage}) => {

    const [aiqDisplay, setAiqDisplay] = useState();
    const [showFormTwoData, setshowFormTwoData] = useState([]);   
    const [showFormThreeData, setshowFormThreeData] = useState([]); 
    const [showFormFourData, setshowFormFourData] = useState([]); 
    const [showFormFiveData, setshowFormFiveData] = useState([]); 
    const [showFormSixData, setshowFormSixData] = useState([]);  
    const [showFormSevenData, setshowFormSevenData] = useState([]); 
    const [showFormEightData, setshowFormEightData] = useState([]); 
    const [showFormNineData, setshowFormNineData] = useState([]); 
    const [showResultData, setshowResultData] = useState([]);

    // const [form1field1,setform1field1] = useState(0);
   // cosnt [ formHomePage, setFormHomePage] = useState([]);
   const [ formData, setFormData] = useState([]);
   const[message, setMessage] = useState();
    //const formData;
  
    const showNextForm=(currentForm)=>{
        //check if all fields are filled of a form, before proceeding to next
        if(true){
            setAiqDisplay(aiqDisplay + 1);
        }
    }

    const postList = (formData) =>{
        console.log(formData.survey.innovationParams)
        formData.survey.innovationParams.map((data) => {
            if (data.id === 1){
                setshowFormTwoData(data);
            }else if(data.id ===2){
                setshowFormThreeData(data);
            }else if(data.id ===3){
                setshowFormFourData(data);
            }else if(data.id ===4){
                setshowFormFiveData(data);
            }else if(data.id ===5){
                setshowFormSixData(data);
            }else if(data.id ===6){
                setshowFormSevenData(data);
            }else if(data.id ===7){
                setshowFormEightData(data);
            }else if(data.id ===8){
                setshowFormNineData(data);
            }
        })
    }
    useEffect(() => {
            getFormData().then( (items) =>{
                console.log(items.survey)
                setFormData(items);
                setMessage(items.survey.homePage.innovationLead);
                setAiqDisplay(1);
                postList(items);
            });
                
            
        
     },[]);
    
    

    const updateDefaultState=(value,qid,showFormData)=>{

      const updateFormData = showFormData;

      console.log(updateFormData.questions.filter(item => item.id === qid)[0].options.map(item => {
        if(item.value===value){
          return(item.default=true)
        }else{
          return(item.default = false)
        }
      }));

      switch(showFormData.orderId){
        case 1:
          setshowFormTwoData(updateFormData);
          break;
        case 2:
          setshowFormThreeData(updateFormData);
          break;
        case 3:
          setshowFormFourData(updateFormData);
          break;
        case 4:
          setshowFormFiveData(updateFormData);
          break;
        case 5:
          setshowFormSixData(updateFormData);
          break;
        case 6:
          setshowFormSevenData(updateFormData);
          break;
        case 7:
          setshowFormEightData(updateFormData);
          break;
        case 8:
          setshowFormNineData(updateFormData);
          break;
        default:
          console.log("default");
          break;
      }

      console.log(showFormData);
    }

    const updateFirstFormState = (optionValue,unitName) => {
        let updatedFormData = formData;
        switch(unitName){
            case 'marketUnit':
                updatedFormData.survey.homePage.marketUnit.map((options) =>{
                    if(options.value == optionValue){
                        options.default = true;
                    }else{
                        options.default = false;  
                    }
            });
            break;
            case 'clientGroup':
                updatedFormData.survey.homePage.clientGroup.map((options) =>{
                    if(options.value == optionValue){
                        options.default = true;
                    }else{
                        options.default = false;  
                    }
                });
                break;
            case 'deliveryUnit':
                updatedFormData.survey.homePage.deliveryUnit.map((options) =>{
                    if(options.value == optionValue){
                        options.default = true;
                    }else{
                        options.default = false;  
                    }
                });
                break;
            case 'clientName':
                updatedFormData.survey.homePage.clientName.map((options) =>{
                    if(options.value == optionValue){
                        options.default = true;
                    }else{
                        options.default = false;  
                    }
                });
                break;
            case 'cal':
                updatedFormData.survey.homePage.cal.map((options) =>{
                    if(options.value == optionValue){
                        options.default = true;
                    }else{
                        options.default = false;  
                    }
                });
                break;
            case 'deliveryMD':
                updatedFormData.survey.homePage.deliveryMD.map((options) =>{
                    if(options.value == optionValue){
                        options.default = true;
                    }else{
                        options.default = false;  
                    }
                });
                break;
                

        }
        
        setFormData(updatedFormData);
    }

    const submitQuestionnaire = () =>{
        /*formData.survey.innovationParams.map((data) => {
            if (data.id === 1){
                formData.survey.innovationParams[1]= showFormTwoData;  
            }else if(data.id ===2){
                formData.survey.innovationParams[2]= showFormThreeData;  
            }else if(data.id ===3){
                formData.survey.innovationParams[3]= showFormFourData;  
            }else if(data.id ===4){
                formData.survey.innovationParams[4]= showFormFiveData;  
            }else if(data.id ===5){
                formData.survey.innovationParams[5]= showFormSixData;  
            }else if(data.id ===6){
                formData.survey.innovationParams[6]= showFormSevenData;  
            }else if(data.id ===7){
                formData.survey.innovationParams[7]= showFormEightData;  
            }else if(data.id ===8){
                formData.survey.innovationParams[8]= showFormNineData;  
            }
        })*/
        let optionData = [];
        formData.survey.innovationParams.map((innovation) =>{
            innovation.questions.map((question) => {
                question.options.map((option) => {
                    if(option.default){
                        optionData.push( {
                            "name":"",
                            "value": option.value,
                            "comments":" comments 001"
                        });
                    }
                })
            })
        })
        let marketUnit = formData.survey.homePage.marketUnit.filter(unit => unit.default)[0].value;
        let requestParameter={
            "userId": formData.survey.userId,
	        "surveyId": formData.survey.surveyId,
	        "projectId":13,
	        "marketUnit": formData.survey.homePage.marketUnit.filter(unit => unit.default)[0].value,
	        "clientGroup": formData.survey.homePage.clientGroup.filter(unit => unit.default)[0].value,
	        "deliveryUnit": formData.survey.homePage.deliveryUnit.filter(unit => unit.default)[0].value,
	        "clientName": formData.survey.homePage.clientName.filter(unit => unit.default)[0].value,
	        "cal": formData.survey.homePage.cal.filter(unit => unit.default)[0].value,
	        "deliveryMD": formData.survey.homePage.deliveryMD.filter(unit => unit.default)[0].value,
	        "innovationLead": message,
            "optionsData": optionData   
            
        }
        requestParameter = JSON.stringify(requestParameter);
        console.log(requestParameter);
       /* axios.post('http://localhost:8081/survey/save', requestParameter)
        .then(response => console.log('>>>>>>>>>>',response));*/
        return axios.put('http://localhost:8081/survey/submit', requestParameter,{
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Allow": "*",
                "Content-type": "Application/json",
                "Access-Control-Allow-Credentials":true
            },
            type: 'PUT',
            contentType: 'application/json',
            dataType: "json",
        })
        .then(response => {
            console.log('>>>>>>>>>>',response);
            setshowResultData(response.data);
            showNextForm(9)
        });

    }


    const showFormOne = () => {
        //console.log(formData.survey.homePage.cal)
        
        return (
            <div id="input-Data" className="next-0 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12 row">
                                    <h2>{formData.survey.surveyTitle}</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form action="">
                                            <div className="form-group row">
                                                <label htmlFor="newName">Market Unit:</label>
                                                <select className="form-control"  onChange={(e) => updateFirstFormState(e.target.value,'marketUnit') }>
                                                    {formData.survey.homePage.marketUnit.map((answer)=>{
                                                        return(
                                                        <option key={answer.value} value={answer.value} selected={answer.default}>{answer.value}</option>
                                                        )
                                                    })}
                                                </select>

                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newName">Client Group:</label>
                                                <select className="form-control" onChange={(e) => updateFirstFormState(e.target.value,'clientGroup')}>
                                                    {formData.survey.homePage.clientGroup.map((answer)=>{
                                                        return(
                                                          <option key={answer.value} value={answer.value} selected={answer.default}>{answer.value}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newName">Delivery Unit:</label>
                                                <select className="form-control" onChange={(e) => updateFirstFormState(e.target.value,'deliveryUnit')}>
                                                    {formData.survey.homePage.deliveryUnit.map((answer)=>{
                                                        return(
                                                          <option key={answer.value} value={answer.value} selected={answer.default}>{answer.value}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newName">Client Name:</label>
                                                <select className="form-control" onChange={(e) => updateFirstFormState(e.target.value,'clientName')}>
                                                    {formData.survey.homePage.clientName.map((answer)=>{
                                                        return(
                                                          <option key={answer.value} value={answer.value} selected={answer.default}>{answer.value}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newName">CAL:</label>
                                                <select className="form-control" onChange={(e) => updateFirstFormState(e.target.value,'cal')}>
                                                    {formData.survey.homePage.cal.map((answer)=>{
                                                        return(
                                                          <option key={answer.value} value={answer.value} selected={answer.default}>{answer.value}</option>
                                                        )
                                                    })}
                                                </select>

                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newName">Delivery Lead:</label>
                                                <select className="form-control" onChange={(e) => updateFirstFormState(e.target.value,'deliveryMD')}>
                                                    {formData.survey.homePage.deliveryMD.map((answer)=>{
                                                        return(
                                                          <option key={answer.value} value={answer.value} selected={answer.default}>{answer.value}</option>
                                                        )
                                                    })}
                                                </select>    
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newName">Innovation Responsible:</label>
                                                <input type="text" className="form-control cus_input" value={message} 
                                                       onChange={e => {setMessage(e.target.value)}}/>
                                            </div>
                                            
                                            <div className="form-group row float-right">
                                                <label htmlFor="newName"></label>
                                                <input className="btn btn-primary next-btn form-control cus_input_btn" data-next="1" type="button"
                                                    value="Next" onClick={() => { showNextForm(1) }} />
                                            </div>
                                           
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    

    const showFormTwo = (showFormTwoData) => {
        console.log(showFormTwoData)
        const renderFormTwoData = showFormTwoData.questions.map((questions) => {
            const renderFormTwoDataOptions = questions.options.map((options)=> {
                return (
                  <option key={options.orderId} value={options.value} selected={options.default} onClick = {() => console.log('RAM')}>{options.answer}</option>
                  )
            })
             return (
                <div key= {questions.id} className="form-group row">
                <label htmlFor="filter">{questions.orderId} : {questions.question}</label>
                <select className="form-control"  onChange={(e) => updateDefaultState(e.target.value,questions.id,showFormTwoData) }>
                    {renderFormTwoDataOptions}
                </select>
            </div>
            )
        })
        return (
            <div id="client-challenge" className="next-1 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                    <h2>{showFormTwoData.innovationParam}</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            {renderFormTwoData}
                                            {/* <div className="form-group row">
                                                <label htmlFor="filter">1. Do you have discussed innovation program in the
                                                    account with your client?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>No, I haven't discussed any innovation
                                                        program with client at this point in time</option>
                                                    <option value="1">Yes, the discussion has come in few meetings where
                                                    Accenture capabilities in driving innovation were mentioned but
                                                        hasn’t progressed thereafter</option>
                                                    <option value="2">Yes, I have regular connects with clients talking
                                                        on innovation program and objectives within the account</option>
                                                    <option value="3">Yes, I have strategic level connects with senior
                                                    stakeholders where innovation is a key contributor to business
                                                    bottomline and brand value where also Accenture is a key partner
                                                        in driving growth of business</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">2. Do you understand your client business
                                                    challenges?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>Not particularly other than the line of
                                                        business Accenture is contracted to work and deliver</option>
                                                    <option value="1">Yes we are aware, but we don’t necessarily talk
                                                    about it as we are not driven by contractual obligations to
                                                        delve into other sides of business</option>
                                                    <option value="2">Yes, we are aware about the client business
                                                    challenges and they are being discussed at project deliverable
                                                        connects with business stakeholders</option>
                                                    <option value="3">Yes, client business challenges are discussed at
                                                    CXO levels with ATCI and do constitute a strategic lever for
                                                    Accenture to develop/sustain business relationship in the future
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">3. Have you been shared with business objectives of
                                                    your client partners?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">4. Are you aware of long term and short term
                                                    strategic goals of your client?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">5. Is your project aligned to deliver business value
                                                    to the client?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div> */}
                                            <div className="form-group row">
                                                <label htmlFor="filter">Addition Comments</label>
                                                <input type="text" className="form-control cus_input" id="" name=""
                                                    value="" />
                                            </div>
                                            <div className="form-group row mrgn-btm">
                                                <div className="col-sm-8 padding-lt">
                                                    <button type="button" className="btn btn-primary back-btn float-left"
                                                        data-back="0" onClick={() => { setAiqDisplay(aiqDisplay - 1) }}>back</button>
                                                </div>
                                                <div className="col-sm-4 padding-rt">
                                                    <button type="button" data-next="2"
                                                        className="next-btn btn btn-primary float-right" onClick={() => { showNextForm(2) }}>Next</button>
                                                    {/* <button type="button"
                                                        className="btn btn-primary float-right mrgn-rt">Save and
                                                        Close</button> */}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const showFormThree = (showFormThreeData) => {
        const renderFormThreeData = showFormThreeData.questions.map((questions) => {

            const renderFormThreeDataOptions = questions.options.map((options)=> {
                return (
                <option key={options.orderId} value={options.value} selected={options.default}>{options.answer}</option>
                )
            })
             return (
                <div key={questions.id} className="form-group row">
                <label htmlFor="filter">{questions.orderId} : {questions.question}</label>
                <select className="form-control" onChange={(e) => updateDefaultState(e.target.value,questions.id,showFormThreeData) }>
                    {renderFormThreeDataOptions}
                </select>
            </div>
            )
        })
        return (
            <div id="client-innovation" className="next-2 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                    <h2>{showFormThreeData.innovationParam}</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            {renderFormThreeData}
                                            {/* <div className="form-group row">
                                                <label htmlFor="filter">1. Do you have co-innovation framework in
                                                    place?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>No, I haven't discussed any innovation
                                                        program with client at this point in time</option>
                                                    <option value="1">Yes, the discussion has come in few meetings where
                                                    Accenture capabilities in driving innovation were mentioned but
                                                        hasn’t progressed thereafter</option>
                                                    <option value="2">Yes, I have regular connects with clients talking
                                                        on innovation program and objectives within the account</option>
                                                    <option value="3">Yes, I have strategic level connects with senior
                                                    stakeholders where innovation is a key contributor to business
                                                    bottomline and brand value where also Accenture is a key partner
                                                        in driving growth of business</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">2. Do you have co-innovation roadmap
                                                    defined?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>Not particularly other than the line of
                                                        business Accenture is contracted to work and deliver</option>
                                                    <option value="1">Yes we are aware, but we don’t necessarily talk
                                                    about it as we are not driven by contractual obligations to
                                                        delve into other sides of business</option>
                                                    <option value="2">Yes, we are aware about the client business
                                                    challenges and they are being discussed at project deliverable
                                                        connects with business stakeholders</option>
                                                    <option value="3">Yes, client business challenges are discussed at
                                                    CXO levels with ATCI and do constitute a strategic lever for
                                                    Accenture to develop/sustain business relationship in the future
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">3. Do you conduct co-innovation workshops with
                                                    client?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">4. Do you conduct co-innovation workshops within
                                                    project?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div> */}
                                            <div className="form-group row">
                                                <label htmlFor="filter">Addition Comments</label>
                                                <input type="text" className="form-control cus_input" id="" name=""
                                                    value="" />
                                            </div>
                                            <div className="form-group row mrgn-btm">
                                                <div className="col-sm-8 padding-lt">
                                                    <button type="button" className="btn btn-primary back-btn float-left"
                                                        data-back="1" onClick={() => { setAiqDisplay(aiqDisplay - 1) }}>back</button>
                                                </div>
                                                <div className="col-sm-4 padding-rt">
                                                    <button type="button" data-next="3"
                                                        className="next-btn btn btn-primary float-right" onClick={() => { showNextForm(3) }}>Next</button>
                                                    {/* <button type="button"
                                                        className="btn btn-primary float-right mrgn-rt">Save and
                                                        Close</button> */}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const showFormFour = (showFormFourData) => {
        const renderFormFourData = showFormFourData.questions.map((questions) => {
            const renderFormFourDataOptions = questions.options.map((options)=> {
                return (
                <option key={options.orderId} value={options.value} selected={options.default}>{options.answer}</option>
                )
            })
             return (
                <div key={questions.id} className="form-group row">
                <label htmlFor="filter">{questions.orderId} : {questions.question}</label>
                <select className="form-control" onChange={(e) => updateDefaultState(e.target.value,questions.id,showFormFourData) }>
                    {renderFormFourDataOptions}
                </select>
            </div>
            )
        })
        return (
            <div id="innovation-capabilities" className="next-3 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                    <h2>{showFormFourData.innovationParam}</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            {renderFormFourData}
                                            {/* <div className="form-group row">
                                                <label htmlFor="filter">1. What is the level of employee engagement in
                                                    innovation within your project?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>No, I haven't discussed any innovation
                                                        program with client at this point in time</option>
                                                    <option value="1">Yes, the discussion has come in few meetings where
                                                    Accenture capabilities in driving innovation were mentioned but
                                                        hasn’t progressed thereafter</option>
                                                    <option value="2">Yes, I have regular connects with clients talking
                                                        on innovation program and objectives within the account</option>
                                                    <option value="3">Yes, I have strategic level connects with senior
                                                    stakeholders where innovation is a key contributor to business
                                                    bottomline and brand value where also Accenture is a key partner
                                                        in driving growth of business</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">2. What has been the diversity of view, voice and
                                                    experience of participation</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>Not particularly other than the line of
                                                        business Accenture is contracted to work and deliver</option>
                                                    <option value="1">Yes we are aware, but we don’t necessarily talk
                                                    about it as we are not driven by contractual obligations to
                                                        delve into other sides of business</option>
                                                    <option value="2">Yes, we are aware about the client business
                                                    challenges and they are being discussed at project deliverable
                                                        connects with business stakeholders</option>
                                                    <option value="3">Yes, client business challenges are discussed at
                                                    CXO levels with ATCI and do constitute a strategic lever for
                                                    Accenture to develop/sustain business relationship in the future
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">3. What is the scope of new technology used for
                                                    ideation?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">4. What is the level of participation in innovation
                                                    bootcamps and new technology trainings?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">5. Do you have infrastructure within engagement on
                                                    innovative thinking?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div> */}
                                            <div className="form-group row">
                                                <label htmlFor="filter">Addition Comments</label>
                                                <input type="text" className="form-control cus_input" id="" name=""
                                                    value="" />
                                            </div>
                                            <div className="form-group row mrgn-btm">
                                                <div className="col-sm-8 padding-lt">
                                                    <button type="button" className="btn btn-primary back-btn float-left"
                                                        data-back="2" onClick={() => { setAiqDisplay(aiqDisplay - 1) }}>back</button>
                                                </div>
                                                <div className="col-sm-4 padding-rt">
                                                    <button type="button" data-next="4"
                                                        className="next-btn btn btn-primary float-right" onClick={() => { showNextForm(4) }}>Next</button>
                                                    {/* <button type="button"
                                                        className="btn btn-primary float-right mrgn-rt">Save and
                                                        Close</button> */}
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const showFormFive = (showFormFiveData) => {
        const renderFormFiveData = showFormFiveData.questions.map((questions) => {
            const renderFormFiveDataOptions = questions.options.map((options)=> {
                return (
                <option key={options.orderId} value={options.value} selected={options.default}>{options.answer}</option>
                )
            })
             return (
                <div key={questions.id} className="form-group row">
                <label htmlFor="filter">{questions.orderId} : {questions.question}</label>
                <select className="form-control" onChange={(e) => updateDefaultState(e.target.value,questions.id,showFormFiveData) }>
                    {renderFormFiveDataOptions}
                </select>
            </div>
            )
        })
        return (
            <div id="degree-innovation" className="next-4 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                    <h2>{showFormFiveData.innovationParam}</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            {renderFormFiveData}
                                            {/* <div className="form-group row">
                                                <label htmlFor="filter">1. What do you think you do- continuous improvement
                                                    or incremental innovation?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>No, I haven't discussed any innovation
                                                        program with client at this point in time</option>
                                                    <option value="1">Yes, the discussion has come in few meetings where
                                                    Accenture capabilities in driving innovation were mentioned but
                                                        hasn’t progressed thereafter</option>
                                                    <option value="2">Yes, I have regular connects with clients talking
                                                        on innovation program and objectives within the account</option>
                                                    <option value="3">Yes, I have strategic level connects with senior
                                                    stakeholders where innovation is a key contributor to business
                                                    bottomline and brand value where also Accenture is a key partner
                                                        in driving growth of business</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">2. Do you have any cases that you can quote as
                                                    breakthrough innovation?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>Not particularly other than the line of
                                                        business Accenture is contracted to work and deliver</option>
                                                    <option value="1">Yes we are aware, but we don’t necessarily talk
                                                    about it as we are not driven by contractual obligations to
                                                        delve into other sides of business</option>
                                                    <option value="2">Yes, we are aware about the client business
                                                    challenges and they are being discussed at project deliverable
                                                        connects with business stakeholders</option>
                                                    <option value="3">Yes, client business challenges are discussed at
                                                    CXO levels with ATCI and do constitute a strategic lever for
                                                    Accenture to develop/sustain business relationship in the future
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">3. Do you have any transformational
                                                    innovation?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div> */}
                                            <div className="form-group row">
                                                <label htmlFor="filter">Addition Comments</label>
                                                <input type="text" className="form-control cus_input" id="" name=""
                                                    value="" />
                                            </div>
                                            <div className="form-group row mrgn-btm">
                                                <div className="col-sm-8 padding-lt">
                                                    <button type="button" className="btn btn-primary back-btn float-left"
                                                        data-back="3" onClick={() => { setAiqDisplay(aiqDisplay - 1) }}>back</button>
                                                </div>
                                                <div className="col-sm-4 padding-rt">
                                                    <button type="button" data-next="5"
                                                        className="next-btn btn btn-primary float-right" onClick={() => { showNextForm(5) }}>Next</button>
                                                    {/* <button type="button"
                                                        className="btn btn-primary float-right mrgn-rt">Save and
                                                        Close</button> */}
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const showFormSix = (showFormSixData) => {
        const renderFormSixData = showFormSixData.questions.map((questions) => {
            const renderFormSixDataOptions = questions.options.map((options)=> {
                return (
                <option key={options.orderId} value={options.value} selected={options.default}>{options.answer}</option>
                )
            })
             return (
                <div key={questions.id} className="form-group row">
                <label htmlFor="filter">{questions.orderId} : {questions.question}</label>
                <select className="form-control" onChange={(e) => updateDefaultState(e.target.value,questions.id,showFormSixData) }>
                    {renderFormSixDataOptions}
                </select>
            </div>
            )
        })
        return (
            <div id="client-value" className="next-5 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                        <h2>{showFormSixData.innovationParam}</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            {renderFormSixData}
                                            {/* <div className="form-group row">
                                                <label htmlFor="filter">1. Do you have any technology innovation using new
                                                    technologies?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>No, I haven't discussed any innovation
                                                        program with client at this point in time</option>
                                                    <option value="1">Yes, the discussion has come in few meetings where
                                                    Accenture capabilities in driving innovation were mentioned but
                                                        hasn’t progressed thereafter</option>
                                                    <option value="2">Yes, I have regular connects with clients talking
                                                        on innovation program and objectives within the account</option>
                                                    <option value="3">Yes, I have strategic level connects with senior
                                                    stakeholders where innovation is a key contributor to business
                                                    bottomline and brand value where also Accenture is a key partner
                                                        in driving growth of business</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">2. Do you have a co-innovation nomination?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>Not particularly other than the line of
                                                        business Accenture is contracted to work and deliver</option>
                                                    <option value="1">Yes we are aware, but we don’t necessarily talk
                                                    about it as we are not driven by contractual obligations to
                                                        delve into other sides of business</option>
                                                    <option value="2">Yes, we are aware about the client business
                                                    challenges and they are being discussed at project deliverable
                                                        connects with business stakeholders</option>
                                                    <option value="3">Yes, client business challenges are discussed at
                                                    CXO levels with ATCI and do constitute a strategic lever for
                                                    Accenture to develop/sustain business relationship in the future
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">3. What is the stakeholder involvement level in
                                                    innovation program?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">4. What are the high impact ideas to the
                                                    client?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">5. What are the business benefits enabled and
                                                    realized in $ value w.r.t innovation?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div> */}
                                            <div className="form-group row">
                                                <label htmlFor="filter">Addition Comments</label>
                                                <input type="text" className="form-control cus_input" id="" name=""
                                                    value="" />
                                            </div>
                                            <div className="form-group row mrgn-btm">
                                                <div className="col-sm-8 padding-lt">
                                                    <button type="button" className="btn btn-primary back-btn float-left"
                                                        data-back="4" onClick={() => { setAiqDisplay(aiqDisplay - 1) }}>back</button>
                                                </div>
                                                <div className="col-sm-4 padding-rt">
                                                    <button type="button" data-next="6"
                                                        className="next-btn btn btn-primary float-right" onClick={() => { showNextForm(6) }}>Next</button>
                                                    {/* <button type="button"
                                                        className="btn btn-primary float-right mrgn-rt">Save and
                                                        Close</button> */}
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    
    const showFormSeven = (showFormSevenData) => {
        const renderFormSevenData = showFormSevenData.questions.map((questions) => {
            const renderFormSevenDataOptions = questions.options.map((options)=> {
                return (
                <option key={options.orderId} value={options.value} selected={options.default}>{options.answer}</option>
                )
            })
             return (
                <div key={questions.id} className="form-group row">
                <label htmlFor="filter">{questions.orderId} : {questions.question}</label>
                <select className="form-control" onChange={(e) => updateDefaultState(e.target.value,questions.id,showFormSevenData) }>
                    {renderFormSevenDataOptions}
                </select>
            </div>
            )
        })
        return (
            <div id="client-testimonials" className="next-6 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                        <h2>{showFormSixData.innovationParam}</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            {renderFormSevenData}
                                            {/* <div className="form-group row">
                                                <label htmlFor="filter">1. Do you have any co-innovation stories ?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>No, I haven't discussed any innovation
                                                        program with client at this point in time</option>
                                                    <option value="1">Yes, the discussion has come in few meetings where
                                                    Accenture capabilities in driving innovation were mentioned but
                                                        hasn’t progressed thereafter</option>
                                                    <option value="2">Yes, I have regular connects with clients talking
                                                        on innovation program and objectives within the account</option>
                                                    <option value="3">Yes, I have strategic level connects with senior
                                                    stakeholders where innovation is a key contributor to business
                                                    bottomline and brand value where also Accenture is a key partner
                                                        in driving growth of business</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">2. What is the stakeholder level for client
                                                    testimonial ?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>Not particularly other than the line of
                                                        business Accenture is contracted to work and deliver</option>
                                                    <option value="1">Yes we are aware, but we don’t necessarily talk
                                                    about it as we are not driven by contractual obligations to
                                                        delve into other sides of business</option>
                                                    <option value="2">Yes, we are aware about the client business
                                                    challenges and they are being discussed at project deliverable
                                                        connects with business stakeholders</option>
                                                    <option value="3">Yes, client business challenges are discussed at
                                                    CXO levels with ATCI and do constitute a strategic lever for
                                                    Accenture to develop/sustain business relationship in the future
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">3. Do you have any video and/or audio
                                                    testimonials?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">4. Can we reference your client for
                                                    innovation?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div> */}
                                            <div className="form-group row">
                                                <label htmlFor="filter">Addition Comments</label>
                                                <input type="text" className="form-control cus_input" id="" name=""
                                                    value="" />
                                            </div>
                                            <div className="form-group row mrgn-btm">
                                                <div className="col-sm-8 padding-lt">
                                                    <button type="button" className="btn btn-primary back-btn float-left"
                                                        data-back="5" onClick={() => { setAiqDisplay(aiqDisplay - 1) }}>back</button>
                                                </div>
                                                <div className="col-sm-4 padding-rt">
                                                    <button type="button" data-next="7"
                                                        className="next-btn btn btn-primary float-right" onClick={() => { showNextForm(7) }}>Next</button>
                                                    {/* <button type="button"
                                                        className="btn btn-primary float-right mrgn-rt">Save and
                                                        Close</button> */}
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const showFormEight = (showFormEightData) => {
        const renderFormEightData = showFormEightData.questions.map((questions) => {
            const renderFormEightDataOptions = questions.options.map((options)=> {
                return (
                <option key={options.orderId} value={options.value} selected={options.default}>{options.answer}</option>
                )
            })
             return (
                <div key={questions.id} className="form-group row">
                <label htmlFor="filter">{questions.orderId} : {questions.question}</label>
                <select className="form-control" onChange={(e) => updateDefaultState(e.target.value,questions.id,showFormEightData) }>
                    {renderFormEightDataOptions}
                </select>
            </div>
            )
        })
        return (
            <div id="leverage-architecture" className="next-7 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                    <h2>{showFormEightData.innovationParam}</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            {renderFormEightData}
                                            {/* <div className="form-group row">
                                                <label htmlFor="filter">1. Do you involve Accenture Studio / Accenture Labs
                                                    / Ecosystem partners to solve client problems?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>No, I haven't discussed any innovation
                                                        program with client at this point in time</option>
                                                    <option value="1">Yes, the discussion has come in few meetings where
                                                    Accenture capabilities in driving innovation were mentioned but
                                                        hasn’t progressed thereafter</option>
                                                    <option value="2">Yes, I have regular connects with clients talking
                                                        on innovation program and objectives within the account</option>
                                                    <option value="3">Yes, I have strategic level connects with senior
                                                    stakeholders where innovation is a key contributor to business
                                                    bottomline and brand value where also Accenture is a key partner
                                                        in driving growth of business</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">2. How do you demonstrate leveraging industry
                                                    assets?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>Not particularly other than the line of
                                                        business Accenture is contracted to work and deliver</option>
                                                    <option value="1">Yes we are aware, but we don’t necessarily talk
                                                    about it as we are not driven by contractual obligations to
                                                        delve into other sides of business</option>
                                                    <option value="2">Yes, we are aware about the client business
                                                    challenges and they are being discussed at project deliverable
                                                        connects with business stakeholders</option>
                                                    <option value="3">Yes, client business challenges are discussed at
                                                    CXO levels with ATCI and do constitute a strategic lever for
                                                    Accenture to develop/sustain business relationship in the future
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">3. Do you plan for Innovation Hub visits during
                                                    client visits?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="filter">4. Do you remote showcase Accenture Studio / Lab
                                                    assets to your clients?</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div> */}
                                            <div className="form-group row">
                                                <label htmlFor="filter">Addition Comments</label>
                                                <input type="text" className="form-control cus_input" id="" name=""
                                                    value="" />
                                            </div>
                                            <div className="form-group row mrgn-btm">
                                                <div className="col-sm-8 padding-lt">
                                                    <button type="button" className="btn btn-primary back-btn float-left"
                                                        data-back="6" onClick={() => { setAiqDisplay(aiqDisplay - 1) }}>back</button>
                                                </div>
                                                <div className="col-sm-4 padding-rt">
                                                    <button type="button" data-next="8"
                                                        className="next-btn btn btn-primary float-right" onClick={() => { showNextForm(8) }}>Next</button>
                                                    {/* <button type="button"
                                                        className="btn btn-primary float-right mrgn-rt">Save and
                                                        Close</button> */}
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const showFormNine = (showFormNineData) => {
        const renderFormNineData = showFormNineData.questions.map((questions) => {
            const renderFormNineDataOptions = questions.options.map((options)=> {
                return (
                <option key={options.orderId} value={options.value} selected={options.default}>{options.answer}</option>
                )
            })
             return (
                <div key={questions.id} className="form-group row">
                <label htmlFor="filter">{questions.orderId} : {questions.question}</label>
                <select className="form-control" onChange={(e) => updateDefaultState(e.target.value,questions.id,showFormNineData) }>
                    {renderFormNineDataOptions}
                </select>
            </div>
            )
        })
        return (
            <div id="contribution-architecture" className="next-8 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                    <h2>{showFormNineData.innovationParam}</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            {renderFormNineData}
                                            
                                            <div className="form-group row">
                                                <label htmlFor="filter">Addition Comments</label>
                                                <input type="text" className="form-control cus_input" id="" name=""
                                                    value="" />
                                            </div>
                                            <div className="form-group row mrgn-btm">
                                                <div className="col-sm-8 padding-lt">
                                                    <button className="btn btn-primary back-btn float-left"
                                                        data-back="7" onClick={() => { setAiqDisplay(aiqDisplay - 1) }}>back</button>
                                                </div>
                                                <div className="col-sm-4 padding-rt">
                                                    <button data-next="9" type="button"
                                                        className="next-btn  btn btn-primary float-right final-submit-btn" onClick={() => { submitQuestionnaire() }}>Submit</button>
                                                    
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const showResult = (showResultData) => {
        let paramTitle =[],paramlevel = [],paramScore =[];
        showResultData.surveyResultResponse.innoParamResults.map((result) => {
            paramTitle.push(<th className="col-sm-3">{result.innoParamTitle}</th>);
            paramlevel.push(<td className="col-sm-3">{result.level}</td>);
            paramScore.push(<td className="col-sm-3">{result.score}</td>);
        });
       

        return (
            <div id="table-detail" className="next-9 page-fragment result-page">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="user_info">
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table">
                                        <tbody>
                                                                                
                                            <tr>
                                                {paramTitle.splice(0, 4)}
                                            </tr>
                                            <tr>
                                                {paramlevel.splice(0, 4)}
                                            </tr>
                                            <tr>
                                                {paramScore.splice(0, 4)}
                                                
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table">
                                        <tbody>
                                                                                
                                            <tr>
                                                {paramTitle.splice(-4)}
                                            </tr>
                                            <tr>
                                                {paramlevel.splice(-4)}
                                            </tr>
                                            <tr>
                                                {paramScore.splice(-4)}
                                                
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row invoice-detail">
                                <div className="col-sm-12">
                                    <div className="col-sm-3">Overall AIQ Score : {showResultData.surveyResultResponse.surveyScore}</div>
                                    <div className="col-sm-3">Rating : {showResultData.surveyResultResponse.surveyRating}</div>
                                    <div className="col-sm-3">{showResultData.surveyResultResponse.level}</div>
                                    <button className="btn btn-primary float-right next-btn finish-btn"
                                        data-next="10" type="button" onClick={() => { showNextForm(10) }}>FINISH</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    const showFinalMsg=()=>{
        return(
            <div className="content next-10 page-fragment" id="thank-you">
                <div className="">
                    <div className="wrapper-2">
                    <p>
                        <i class="fa fa-check-circle fa-5x"></i>
                    </p>
                        <h1>Thank you for your Submission !</h1>
                        <div className="container marT30 ">
                            <div className="row">
                            <Link to="/dashboard" >
                                <button type="button" className="go-to-dashboard btn btn-primary">Go To Dashboard</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    switch (aiqDisplay) {
        // case 0:
        //     return (showHomePage());
        case 1:
            return (showFormOne());

        case 2:
            return (showFormTwo(showFormTwoData));

        case 3:
            return (showFormThree(showFormThreeData));

        case 4:
            return (showFormFour(showFormFourData));

        case 5:
            return (showFormFive(showFormFiveData));

        case 6:
            return (showFormSix(showFormSixData));

        case 7:
            return (showFormSeven(showFormSevenData));

        case 8:
            return (showFormEight(showFormEightData));

        case 9:
            return (showFormNine(showFormNineData));

        case 10:
            return (showResult(showResultData));

        case 11:
            return (showFinalMsg());

        default:
            return ("Default of aiq form");
    }
}

export default Aiq