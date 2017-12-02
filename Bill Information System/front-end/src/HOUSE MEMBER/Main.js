import React, { Component } from 'react';
import './../App.css';
import autobind from 'react-autobind';

const showField = (fieldname) => {
  if (fieldname === "Add House Member"){
    return <AddHouseMember />
  }else if (fieldname === "Delete House Member"){
    return <DeleteHouseMember />
  }else if (fieldname === "Update House Member"){
    return <UpdateHouseMember />
  }else if (fieldname === "Search House Member"){
    return <SearchHouseMember />
  }else if (fieldname === "Show All House Members"){
    return <ShowAllHouseMembers />
  }else{
    return(
      <div>
      </div>
    )
  }
}


class Main extends Component {
  constructor(props) {
    super(props);
    autobind(this)
    this.state={
      clicked: ""
    };
  }

  changeClicked(e){
    console.log(e.target.value);
    this.setState({
      clicked: e.target.value
    })
  }

  render() {
    return (
      <div>
        <nav id="billNav">
          <input className="tabs" type="button" onClick={this.changeClicked} value="Add House Member" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="Delete House Member" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="Update House Member" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="Search House Member" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="Show All House Members" />
        </nav>
        {showField(this.state.clicked)}
      </div>
    );
  }
}

class AddHouseMember extends Component {
  constructor(props) {
    super(props);
    autobind(this)
    this.state={
      empno:"",
      name:"",
      committee:"",
      typeOfRep:""
    };
  }

  handleEmpNoChange(e){
    this.setState({
      empno: e.target.value
    })
  }

  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleCommChange(e){
    this.setState({
      committee: e.target.value
    })
  }
  handletTypeOfRepChange(e){
    this.setState({
      typeOfRep: e.target.value
    })
  }

  submitAdd(){
    fetch('http://www.localhost:3001/addHouseMember',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(this.state)
    })
    .then(function (data){
      console.log('Request success',data);
    })
    .catch(function(error){
      console.log('Request failure: ',error);
    });
  }

  render(){
      return(
        <fieldset id="add">
        <h3>Add House Member</h3>
        <form>
          <input onChange={this.handleEmpNoChange} placeholder="Employee Number"></input>
          <input onChange={this.handleNameChange} placeholder="Name"></input>
          <input onChange={this.handletTypeOfRepChange} placeholder="Type Of Representative"></input>
          <textarea onChange={this.handleCommChange} placeholder="Committees
          (Separate multiple values with a semi-colon)"></textarea>
          <input id="addButton" type="button" value="Add House Member" onClick={this.submitAdd}></input>
        </form>
      </fieldset>
    )
  }
}

class DeleteHouseMember extends Component {
 constructor(props) {
    super(props);
    autobind(this);
    this.state={
      empno: "",
      housemems: []
    };
  }

  handleEmpNoChange(e){
    this.setState({
      empno: e.target.value
    })
  }

  submitDelete(e){
    fetch('http://www.localhost:3001/deleteHouseMember', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(function (data) {
      console.log('Request success: ', data);
    })
    .catch(function (error) {
      console.log('Request failure: ', error);
    });
  }

  componentDidMount(){
		fetch(`http://localhost:3001/getHouseMems`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        housemems: result
      })
		})
  }

  render(){
    return(
      <fieldset>
        <h3>Delete</h3>
        <form>
        <select onChange={this.handleEmpNoChange}>
        <option selected disabled>Employee Number</option>
        {
          this.state.housemems.map((b) => {
            return(
              <option value={b.Employeenumber}>{b.Employeenumber}</option>
            )
          })
        }
        </select>
        <input type="button" onClick={this.submitDelete} value="Delete"/>
      </form>
      </fieldset>
    )
  }
}

class UpdateHouseMember extends Component {
  constructor(props) {
    super(props);
    autobind(this)
    this.state={
      key: "",
      empno: "",
      value: "",
      housemembers: []
    };

    this.prompt=""
  }

  handleKeyChange(e){
    this.setState({
      key: e.target.value
    });
  }

  handleValueChange(e){
    this.setState({
      value: e.target.value
    });
  }

  handleEmpNoChange(e){
    this.setState({
      empno: e.target.value
    });
  }

  submitUpdate(e){
    fetch('http://www.localhost:3001/updateHouseMember', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(function (data) {
      console.log('Request success: ', data);
    })
    .catch(function (error) {
      console.log('Request failure: ', error);
    });
  }

  componentDidMount(){
  		fetch(`http://localhost:3001/getHouseMems`)
  		.then((response) => { return response.json()})
  		.then((result) => {
        this.setState({
          housemembers: result
        })
  		})
  }

  render(){
    return(
      <fieldset id="updateSearch">
        <h3>Update</h3>
        <form>
          <select onChange={this.handleEmpNoChange}>
          <option selected disabled>Employee Number</option>
          {
            this.state.housemembers.map((b) => {
              return(
                <option value={b.Employeenumber}>{b.Employeenumber}</option>
              )
            })
          }
          </select>
          <select onChange={this.handleKeyChange}>
            <option selected disabled>Field to change</option>
            <option>Name</option>
            <option>Committee</option>
          </select>
          <textarea onChange={this.handleValueChange} placeholder="Enter new value"></textarea>
          <input type="button" onClick={this.submitUpdate} value="Update Bill"></input>
        </form>
      </fieldset>
    )
  }
}

class SearchHouseMember extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state={
      key: "",
      value: "",
      housemembers: [],
      subjects: [],
      comm: []
    };
  }

  handleKeyChange(e){
    this.setState({
      key: e.target.value
    })
  }

  handleValueChange(e){
    this.setState({
      value: e.target.value
    })
  }

  loopCommittees(empno){
    return(
      <td>
      {
        this.state.comm.map((comm) => {
          if (comm.Employeenumber === empno){
            return(
              <p className="subjs" key={this.state.comm.indexOf(comm)}>{comm.Committee}</p>
            )
          }else{
            return(
              <p></p>
            )
          }
        })
      }
      </td>
    )
  }

  submitClicked(e){
		fetch(`http://localhost:3001/housemembers?key=${this.state.key}&value=${this.state.value}`)
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ housemembers: result, key: "", billno: "", value: ""});
		})
		.catch((e) => { console.log(e); });

		fetch(`http://localhost:3001/getHouseMemberCommittees`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        comm: result
      })
		})
		.catch((e) => { console.log(e); });
  }

  render(){
    return(
      <div>
      <fieldset id="updateSearch">
        <h3>Search</h3>
        <form>
          <select onChange={this.handleKeyChange}>
            <option selected disabled>Field to search</option>
            <option>Name</option>
            <option>Committee</option>
          </select>
          <textarea onChange={this.handleValueChange} placeholder="Value to search"></textarea>
          <input type="button" onClick={this.submitClicked} value="Search Bill"></input>
        </form>
      </fieldset>
      <div id="searchResults">
        <h3>SEARCH RESULTS</h3>
        {
          this.state.housemembers.map((hm) => {
            return(
            <table key={this.state.housemembers.indexOf(hm)}><tbody>
              <tr>
                <th>Employee number</th>
                <td>{hm.Employeenumber}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{hm.Name}</td>
              </tr>
              <tr>
                <th>Committees</th>
                {this.loopCommittees(hm.Employeenumber)}
              </tr>
            </tbody></table>
            )
          })
        }
      </div>
      </div>
    )
  }
}

class ShowAllHouseMembers extends Component {
  constructor(props) {
    super(props);
    autobind(this)
    this.state={
      housemembers: [],
      committees: []
    };
  }

  componentDidMount(){
    fetch(`http://localhost:3001/getHouseMems`)
    .then((response) => { return response.json()})
    .then((result) => {
      console.log("RESULT: " + result);
      this.setState({ housemembers: result });
    })
    .catch((e) => { console.log(e); });


    fetch(`http://localhost:3001/getHouseMemberCommittees`)
    .then((response) => { return response.json()})
    .then((result) => {
      this.setState({ committees: result });
    })
    .catch((e) => { console.log(e); });
  }

  loopCommittees(empno){
    return(
      <td>
      {
        this.state.committees.map((comm) => {
          if (comm.Employeenumber === empno){
            return(
              <p className="subjs" key={this.state.committees.indexOf(comm)}>{comm.Committee}</p>
            )
          }else{
            return(
              <p></p>
            )
          }
        })
      }
      </td>
    )
  }

  render(){
    return(
      <div>
      {
        this.state.housemembers.map((emp) => {
          return(
          <table>
          <tbody>
            <tr>
              <th>Employee Number</th>
              <td>{emp.Employeenumber}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{emp.Name}</td>
            </tr>
            <tr>
              <th>Type Of Representative</th>
              <td>{emp.Typeofrepresentative}</td>
            </tr>
            <tr>
              <th>Committees</th>
              {this.loopCommittees(emp.Employeenumber)}
            </tr>
          </tbody>
          </table>
          )
        })
      }
      </div>
    )
  }
}

export default Main;
