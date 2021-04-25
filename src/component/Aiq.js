//import { render } from '@testing-library/react';
import React, { useState } from 'react'

const Aiq = ({setDisplayPage}) => {

    const [aiqDisplay, setAiqDisplay] = useState(1);

    // const [form1field1,setform1field1] = useState(0);
    // const [form1field2,setform1field2] = useState(0);
    // const [form1field3,setform1field3] = useState(0);
    // const [form1field4,setform1field4] = useState(0);
    // const [form1field5,setform1field5] = useState(0);

    // const [form2field1,setform2field1] = useState(0);
    // const [form2field2,setform2field2] = useState(0);
    // const [form2field3,setform2field3] = useState(0);
    // const [form2field4,setform2field4] = useState(0);

    // const [form3field1,setform3field1] = useState(0);
    // const [form3field2,setform3field2] = useState(0);
    // const [form3field3,setform3field3] = useState(0);
    // const [form3field4,setform3field4] = useState(0);

    // const [form4field1,setform4field1] = useState(0);
    // const [form4field2,setform4field2] = useState(0);
    // const [form4field3,setform4field3] = useState(0);
    // const [form4field4,setform4field4] = useState(0);

    // const [form5field1,setform5field1] = useState(0);
    // const [form5field2,setform5field2] = useState(0);
    // const [form5field3,setform5field3] = useState(0);
    // const [form5field4,setform5field4] = useState(0);

    // const [form6field1,setform6field1] = useState(0);
    // const [form6field2,setform6field2] = useState(0);
    // const [form6field3,setform6field3] = useState(0);
    // const [form6field4,setform6field4] = useState(0);

    // const [form7field1,setform7field1] = useState(0);
    // const [form7field2,setform7field2] = useState(0);
    // const [form7field3,setform7field3] = useState(0);
    // const [form7field4,setform7field4] = useState(0);

    // const [form8field1,setform8field1] = useState(0);
    // const [form8field2,setform8field2] = useState(0);
    // const [form8field3,setform8field3] = useState(0);
    // const [form8field4,setform8field4] = useState(0);

    // const [form9field1,setform9field1] = useState(0);
    // const [form9field2,setform9field2] = useState(0);
    // const [form9field3,setform9field3] = useState(0);
    // const [form9field4,setform9field4] = useState(0);

    const formData= {
        form1data : [
           {
               Q : 'Market Unit:',
               A :[
                   {option1 : 'MU-1'},
                   {option1 : 'MU-2'},
                   {option1 : 'MU-3'},
                   {option1 : 'MU-4'},
                   {option1 : 'MU-5'}
               ]
           },
            {
                Q : 'Client Group:',
                A :[
                   {option1 : 'CG-1'},
                   {option1 : 'CG-2'},
                   {option1 : 'CG-3'},
                   {option1 : 'CG-4'},
                   {option1 : 'CG-5'}
               ]
            },
            {
                Q : 'Delivery Unit:',
                A :[
                   {option1 : 'DU-1'},
                   {option1 : 'DU-2'},
                   {option1 : 'DU-3'},
                   {option1 : 'DU-4'},
                   {option1 : 'DU-5'}
               ]
            },
            {
                Q : 'Client Name:',
                A :[
                   {option1 : 'Client-1'},
                   {option1 : 'Client-2'},
                   {option1 : 'Client-3'},
                   {option1 : 'Client-4'},
                   {option1 : 'Client-5'}
               ]
            },
            {
                Q : 'CAL:',
                A :[
                   {option1 : 'CAL1'},
                   {option1 : 'CAL2'},
                   {option1 : 'CAL3'},
                   {option1 : 'CAL4'},
                   {option1 : 'CAL5'}
               ]
            }
        ]
    }

    const showNextForm=(currentForm)=>{
        //check if all fields are filled of a form, before proceeding to next
        if(true){
            setAiqDisplay(aiqDisplay + 1);
        }
    }
    

    const showFormOne = () => {
        const renderFormData = formData.form1data.map((data) => {
            const renderQuestionsOptions = data.A.map((optionData) => {
                return (
                    <option value={optionData.option1}>{optionData.option1}</option>
                )
            })
            return (
                <div key={data.Q} className="col-sm-12 marT30">
                    <div className="form-group row">
                        <label htmlFor="newName">{data.Q}</label>
                        <select className="form-control" onChange={(e) => console.log(e.target.value)}>
                            {renderQuestionsOptions}
                        </select>
                    </div>
                </div>
            )
        })
        return (
            <div id="input-Data" className="next-0 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                        <h2>Input Data</h2>
                                    </div>
                                    {renderFormData}
                                    <div className="form-group row">
                                        <label htmlFor="newName">Innovation Responsible:</label>
                                        <input type="text" className="form-control cus_input" id="" name=""
                                            value="" />
                                    </div>
                                    <div className="form-group row float-right">
                                        <label htmlFor="newName"></label>
                                        <input className="btn btn-primary next-btn form-control cus_input_btn" data-next="1" type="button"
                                            value="Next" onClick={() => { showNextForm(1) }} />
                                    </div>
                                    {/* <div className="col-sm-12 marT30">
                                        <form action="">
                                            <div className="form-group row">
                                                <label htmlFor="newName">Market Unit:</label>
                                                <select className="form-control" onChange={() => { console.log("change") }}>
                                                    <option value="0" defaultValue>MU-1</option>
                                                    <option value="1">MU-2</option>
                                                    <option value="2">MU-3</option>
                                                    <option value="3">MU-4</option>
                                                    <option value="4">MU-5</option>
                                                </select>

                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newName">Client Group:</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>CG-1</option>
                                                    <option value="1">CG-2</option>
                                                    <option value="2">CG-3</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newName">Delivery Unit:</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>DU-1</option>
                                                    <option value="1">DU-2</option>
                                                </select>

                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newName">Client Name:</label>
                                                <select className="form-control">
                                                    <option value="0" defaultValue>Client-1</option>
                                                    <option value="1">Client-2</option>
                                                    <option value="2">Client-3</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newName">CAL:</label>
                                                <select className="form-control" onChange={(e) => { console.log(e) }}>
                                                    <option value="0" defaultValue>CAL-1</option>
                                                    <option value="1">CALL-2</option>
                                                </select>

                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newName">Delivery Lead:</label>
                                                <select className="form-control" onChange={(e) => { console.log(e) }}>
                                                    <option value="0" defaultValue>DL-1</option>
                                                    <option value="1">DL-2</option>
                                                </select>

                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="newName">Innovation Responsible:</label>
                                                <input type="text" className="form-control cus_input" id="" name=""
                                                    value="" />
                                            </div>
                                            <div className="form-group row float-right">
                                                <label htmlFor="newName"></label>
                                                <input className="btn btn-primary next-btn form-control cus_input_btn" data-next="1" type="button"
                                                    value="Next" onClick={() => { showNextForm(1) }} />
                                            </div>
                                        </form>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const showFormTwo = () => {
        return (
            <div id="client-challenge" className="next-1 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                        <h2>Understand Client Challenges and Objectives</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            <div className="form-group row">
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
                                            </div>
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

    const showFormThree = () => {
        return (
            <div id="client-innovation" className="next-2 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                        <h2>Client Co Innovation Framework</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            <div className="form-group row">
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
                                            </div>
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

    const showFormFour = () => {
        return (
            <div id="innovation-capabilities" className="next-3 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                        <h2>Innovation Capabilities within engagement</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            <div className="form-group row">
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
                                            </div>
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

    const showFormFive = () => {
        return (
            <div id="degree-innovation" className="next-4 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                        <h2>Degree of Innovation</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            <div className="form-group row">
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
                                            </div>
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

    const showFormSix = () => {
        return (
            <div id="client-value" className="next-5 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                        <h2>Client Value</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            <div className="form-group row">
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
                                            </div>
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

    const showFormSeven = () => {
        return (
            <div id="client-testimonials" className="next-6 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                        <h2>Client Testimonials (Audio & Video)</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            <div className="form-group row">
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
                                            </div>
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

    const showFormEight = () => {
        return (
            <div id="leverage-architecture" className="next-7 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                        <h2>Leverage Accenture Innovation Architecture</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            <div className="form-group row">
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
                                            </div>
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

    const showFormNine = () => {
        return (
            <div id="contribution-architecture" className="next-8 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="user_info">
                                    <div className="col-sm-12">
                                        <h2>Contribution to Accenture Innovation Architecture</h2>
                                    </div>
                                    <div className="col-sm-12 marT30">
                                        <form className="px-4 py-3">
                                            <div className="form-group row">
                                                <label htmlFor="filter">1. Do you plan account showcases at Accenture
                                                    Innovation Hub?</label>
                                                <select className="form-control">
                                                    <option value="0" selected>No, I haven't discussed any innovation
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
                                                <label htmlFor="filter">2. Do you collaborate with Accenture Innovation Hub
                                                / Accenture Studio for client innovation framework /
                                                    architecture?</label>
                                                <select className="form-control">
                                                    <option value="0" selected>Not particularly other than the line of
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
                                                <label htmlFor="filter">3. Do you showcase client assets to Accenture
                                                    Innovation Hub/ Accenture Studio?</label>
                                                <select className="form-control">
                                                    <option value="0" selected>All Snippets</option>
                                                    <option value="1">Featured</option>
                                                    <option value="2">Most popular</option>
                                                    <option value="3">Top rated</option>
                                                    <option value="4">Most commented</option>
                                                </select>
                                            </div>
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
                                                        className="next-btn btn btn-primary float-right" onClick={() => { showNextForm(9) }}>Next</button>
                                                    {/* <button type="submit"
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

    const showResult = () => {
        return (
            <div id="table-detail" className="next-9 page-fragment">
                <div className="container-fluid dash_cus">
                    <div className="container">
                        <div className="user_info">
                            <div className="row">
                                <div className="col-sm-12">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>Understand Client Challenges and Objectives</th>
                                                <th>Client Co Innovation Framework</th>
                                                <th>Innovation Capabilities within engagement</th>
                                                <th>Degree of Innovation</th>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>0</td>
                                                <td>3</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td>BEGINNER</td>
                                                <td>NOVICE</td>
                                                <td>NOVICE</td>
                                                <td>NOVICE</td>
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
                                                <th>Client Value</th>
                                                <th>Client Testimonials (Audio & Video)</th>
                                                <th>Leverage Accenture Innovation Architecture</th>
                                                <th>Contribution to Accenture Innovation Architecture</th>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>NOVICE</td>
                                                <td>NOVICE</td>
                                                <td>NOVICE</td>
                                                <td>NOVICE</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row invoice-detail">
                                <div className="col-sm-12">
                                    <div className="col-sm-3">Overall AIQ Score : 12</div>
                                    <div className="col-sm-3">Rating : 2.4</div>
                                    <div className="col-sm-3">NOVICE</div>
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
                <div className="wrapper-1">
                    <div className="wrapper-2">
                        <h1>Thank you !</h1>
                        <div className="container marT30 ">
                            <div className="row">
                                <button type="button" className="go-to-dashboard btn btn-primary" onClick={()=>{setDisplayPage(4)}}>Go To Dashboard</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    switch (aiqDisplay) {
        case 1:
            return (showFormOne());

        case 2:
            return (showFormTwo());

        case 3:
            return (showFormThree());

        case 4:
            return (showFormFour());

        case 5:
            return (showFormFive());

        case 6:
            return (showFormSix());

        case 7:
            return (showFormSeven());

        case 8:
            return (showFormEight());

        case 9:
            return (showFormNine());

        case 10:
            return (showResult());

        case 11:
            return (showFinalMsg());

        default:
            return ("Default of aiq form");
    }
}

export default Aiq
