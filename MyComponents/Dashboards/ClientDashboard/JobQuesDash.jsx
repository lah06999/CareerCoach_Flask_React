import React, {useEffect, useState} from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import "./JobDash.css";

const JobQuesDash = () => {
  const nav = useNavigate();
  const { state } = useLocation();
  const states = state.state;
  const [options, setOptions] = useState([]);

  const data=async(dat)=>{
    const da = await fetch('http://127.0.0.1:5000/user_data',{
        method: 'POST',
        body: JSON.stringify(dat)
    })
    let d = await da.json();
    
    let data = {"results": d}
    
    nav('/studentresult', {state: data})
}

  function getUserData(e) {
    e.preventDefault();
    var form_data = new FormData(e.target);
    var formData = [];
    
    var isComplete = true;
    for (var pair of form_data.entries()) {
      console.log(pair);
      formData.push(pair);
      if (pair[1] === '') {
        isComplete = false;
        document.querySelectorAll('select').forEach(select => {
          console.log(select.value)
          if (select.value == '') {
            select.style.borderColor = 'red';
          }else {
            select.style.borderColor = '#CED4DA';
          }
        })
      }
    }

    if (isComplete) {
      var priorities = [];
      var finances = [];
      options.forEach(option => {
        priorities.push(option[2]);
        finances.push(option[3]);
      })
      var email = localStorage.getItem("email");
      var obj = {'obj': formData, 'email': email, 'academic_id': states, 'priorities': priorities, 'finances': finances, 'finance': '1'}
      console.log(obj);
      data(obj);
    }
    
  }

  useEffect(() => {
    if (states === '2') {
      var allOptions = [['Option_Psychiatrist&Army_Doctor_Psychiatrist', 'Do you love to study human behavior?', 1, 0],['Option_Psychotherapist','Do you love to help people with their behavior and thier problems?',1 ,0],['Option_Career_Counselor&Career_Information_Specialist','Do you love to help other with their career choices?', 1, 0],['Option_Criminal_Investigator','Do you want to help officials to solve crimes by collecting evidence?', 1, 0], ['Option_Teacher', 'Do you love to teach students?', 1, 0], ['Option_Social_Service_Specialists', 'Do you love to provide human social services?', 1, 0],['Option_Army_Officer', 'Do you love to be part of army officials and contribute towords country? ',1 ,0],['Option_Police_Officer','Do you love to enforcing the law on locals to help control crimes?', 1, 0],["Option_Writer&Journalist",'Do you love to write books, articles and stories for people?', 1, 0]];
      setOptions(allOptions);
    }
    else if (states === '3') {
        var allOptions = [['Option_Chemist', 'Do you love to study atoms and molecules?', 1, 0], ['Option_Pharmocologist', 'Do you love to study Drugs and other pharmaceutical products?', 3, 0],['Option_Lab_Assistant','Do you love support Scientists and Researchers in conducting various tests and experiments?',1 ,0],['Option_Manufacturing_Chemist','Do you want to conduct research to help improve products and develop cost effective production processes?',1,0],['Option_Forensic_Scientist&Crime_Scene_Investigator','Do you want to collect evidence at the scene of a crime and perform scientific and technical analysis in laboratories or offices?', 1, 0],['Option_Medicinal_Chemist','Do you want to do researches and creates chemical compounds for use as drugs' ,1 ,0],['Option_Clinical_Scientist','Do you want to do research and develop techniques and equipment to help prevent, diagnose and treat illness for humans' ,1 ,0],['Option_Chemistry_Teacher', 'Do you love to teach students?', 2, 0]];
        setOptions(allOptions);
    }
    else if (states === '4') {
        var allOptions = [['Option_Aerospace_Engineer','Do you want to design aircraft, spacecraft, satellites, and missiles for country defense?',1,0],['Option_Mathematician', 'Do you love to apply mathematical theory and techniques to solve practical problems?', 1, 0],['Option_Market_Research_Analysts','Do you want to help companies know about their competitors and their customer behavior?',1,0],['Option_Data_Scientist', 'Do you love to compute and apply mathematical operations on data?', 1, 0], ['Option_Maths_Teacher', 'Do you love to teach students?', 1, 0],['Option_Bank_Manager&Accountant','Do you want to help people with thier accounts and finance?',1,0], ['Option_Army_Officer', 'Do you love to be part of army officials and contribute towords country? ',1 ,0],['Option_Police_Officer','Do you love to enforcing the law on locals to help control crimes?', 1, 0]];
        setOptions(allOptions);
    }
    else if (states === '5') {
        var allOptions = [['Option_Physicist', 'Do you love to study properties and laws that govern space, time, energy, and matter?', 1, 0],  ['Option_Data_Analyst', 'Do you love to study data to identify key insights?', 1, 0],['Option_Geophysicist','Do you want to apply the principles and concepts of physics to study the physical characteristics of the earth and other planets?',1,0],['Option_Accelerator_Operators','Do you want to supervise and operate equipment related to scientific experiments?',1,0],['Option_Metallurgist','Do you want to find properties of metals for production of effective goods?',1,0],['Option_Physics_Teacher', 'Do you love to teach students?', 1, 0],['Option_Physics_Lab_Technician','Do you want to assists scientists in laboratories?',1,0],['Option_Army_Officer', 'Do you love to be part of army officials and contribute towords country? ',1 ,0],['Option_Technical_Writer','Do you want to write article about experiments?',1,0]];
        setOptions(allOptions);
    }
    else if (states === '6') {
        var allOptions = [['Option_Attorney', 'Do you love to practice law?', 1, 0],['Option_International_Relations_Specialist','Do you want to be incharge of maintaining international, diplomatic, and financial relations among nations?',1,0], ['Option_Political_Advisors', 'Do you love to gave advise to Politicians?', 1, 0],['Option_Political_Journalism','Do you want do coverage of all aspects of politic and write about it?',1,0],['Option_Public_Affair_Officer','Do you want to help with research, plan, budget, execute, and evaluate operations involving the public?',1,0],['Option_Army_Officer', 'Do you love to be part of army officials and contribute towords country? ',1 ,0],['Option_Pol_Science_Teacher', 'Do you love to teach students?', 1, 0]];
        setOptions(allOptions);
    }
    else if (states === '7') {
        var allOptions = [['Option_Economist', 'Do you love to study data about economy?', 1, 0],['Option_Budget_Analyst','Do you want to help organization with planning their finance?',1,0],['Option_Statistician','Do you want to design surveys, experiments, or opinion polls to collect data?',1,0], ['Option_Economics_Teacher', 'Do you love to teach students?', 1, 0],['Option_Financial_Trader','Do you want to help people with buying and selling of securities, such as stocks, bonds, currencies and commodities?',1,0],['Option_Investment_Analyst','Do you want to help stakeholders make decision about their investments?',1,0], ['Option_Banker', 'Do you have interest in banking?', 1, 0],['Option_Insurance_Underwriter','Do you want to work to help people get and clain their insurance?',1,0]];
        setOptions(allOptions);
    }
  }, []);
  return (
    <div>
      {localStorage.getItem("role") != "user" ? <Navigate to="/" /> : null}
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
          <div className="card card-5">
            <div className="card-heading">
              <h2 className="j-title">INTEREST TEST</h2>
            </div>

            <div className="card-body">
              <form method="POST" action="" id="user_form" onSubmit={e => getUserData(e)}>
                <div className="form-group row" style={{display: 'none'}}>
                  <label className="col-sm-3  col-form-label">
                    Location
                  </label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" placeholder="Location" name="location" value="Lahore" />
                  </div>
                </div>
                <div className="form-group row" style={{display: 'none'}}>
                  <label className="col-sm-3  col-form-label">
                    Family Background
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-select form-control"
                      required=""
                      aria-label="select example"
                      name="family_bg"
                    >
                      <option value="">Choose option</option>
                      <option value="1" selected="selected">Strong</option>
                      <option value="2">Not Strong</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row" style={{display: 'none'}}>
                  <label className="col-sm-3  col-form-label">
                    Available to Migrate?
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-select form-control"
                      required=""
                      aria-label="select example"
                      name="migration"
                    >
                      <option value="">Choose option</option>
                      <option value="1" selected="selected">Yes</option>
                      <option value="2">No</option>
                    </select>
                  </div>
                </div>

                {options.map(function (title, index) {
                  return (
                    <div className="form-group" id="red">
                      <label className="bold col-form-label">
                        {title[1]}
                      </label>
                      <div className="col-sm-12">
                        <select
                          className="form-select form-control"
                          required=""
                          aria-label="select example"
                          name={title[0]}
                        >
                          <option value="">Choose option</option>
                          <option value="1">Strongly Disagree</option>
                          <option value="2">Disagree</option>
                          <option value="3">Neutral</option>
                          <option value="4">Agree</option>
                          <option value="5">Strongly Agree</option>
                        </select>
                      </div>
                    </div>
                  );
                })}


                <center>
                  <button className="btn btn-danger mt-5" type="submit">
                    Discover Yourself!
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobQuesDash;
