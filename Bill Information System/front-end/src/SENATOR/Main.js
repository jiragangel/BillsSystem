import React, { Component } from 'react';
import './../App.css'
import autobind from 'react-autobind';

const showField = (fieldname) => {
  if (fieldname === "Add Senator"){
    return <AddSenator />
  }else if (fieldname === "Delete Senator"){
    return <DeleteSenator />
  }else if (fieldname === "Update Senator"){
    return <UpdateSenator />
  }else if (fieldname === "Search Senator"){
    return <SearchSenator />
  }else if (fieldname === "Show All Senators"){
    return <ShowAllSenators />
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
          <input className="tabs" type="button" onClick={this.changeClicked} value="Add Senator" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="Delete Senator" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="Update Senator" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="Search Senator" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="Show All Senators" />
        </nav>
        {showField(this.state.clicked)}
      </div>
    );
  }
}

class AddSenator extends Component {
  constructor(props) {
    super(props);
    autobind(this)
    this.state={
      empno:"",
      name:"",
      committee:""
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

  submitAdd(){
    fetch('http://www.localhost:3001/addSenator',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(this.state)
    })
    .then(function (data){
      this.setState({
        empno:"",
        name:"",
        committee:""
      })
      alert("Add Successful");
    })
    .catch(function(error){
      alert(error);
    });
  }

  render(){
      return(
        <fieldset id="add">
        <h3>Add Senator</h3>
        <form>
          <input onChange={this.handleEmpNoChange} placeholder="Employee Number"></input>
          <input onChange={this.handleNameChange} placeholder="Name"></input>
          <textarea onChange={this.handleCommChange} placeholder="Committees
          (Separate multiple values with a semi-colon)"></textarea>
          <input id="addButton" type="button" value="Add Senator" onClick={this.submitAdd}></input>
        </form>
      </fieldset>
    )
  }
}

class DeleteSenator extends Component {
 constructor(props) {
    super(props);
    autobind(this);
    this.state={
      empno: "",
      sens: []
    };
  }

  handleEmpNoChange(e){
    this.setState({
      empno: e.target.value
    })
  }

  submitDelete(e){
    fetch('http://www.localhost:3001/deleteSenator', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(function (data) {
      alert("Delete Successful");
    })
    .catch(function (error) {

    });
    window.location.reload();
  }

  componentDidMount(){
		fetch(`http://localhost:3001/getSenators`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        sens: result
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
          this.state.sens.map((b) => {
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

class UpdateSenator extends Component {
  constructor(props) {
    super(props);
    autobind(this)
    this.state={
      key: "",
      empno: "",
      value: "",
      senators: []
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
    fetch('http://www.localhost:3001/updateSenator', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(function (data) {
      alert("Update Successful");
    })
    .catch(function (error) {
      alert(error);
    });
  }

  componentDidMount(){
  		fetch(`http://localhost:3001/getSenators`)
  		.then((response) => { return response.json()})
  		.then((result) => {
        this.setState({
          senators: result
        })
  		})
  }

  render(){
    return(
      <fieldset id="updateSearch">
        <h3>Update</h3>
        <form>
          <select onChange={this.handleEmpNoChange}>
          <option selected disabled>Employee number</option>
          {
            this.state.senators.map((b) => {
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
          <input type="button" onClick={this.submitUpdate} value="Update Senator"></input>
        </form>
      </fieldset>
    )
  }
}

class SearchSenator extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state={
      key: "",
      value: "",
      senators: [],
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
		fetch(`http://localhost:3001/senators?key=${this.state.key}&value=${this.state.value}`)
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ senators: result});
			alert("Search Successful");
		})
		.catch((e) => { console.log(e); });

		fetch(`http://localhost:3001/getSenatorCommittees`)
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
            <option>Employeenumber</option>
            <option>Name</option>
            <option>Committee</option>
          </select>
          <textarea onChange={this.handleValueChange} placeholder="Value to search"></textarea>
          <input type="button" onClick={this.submitClicked} value="Search Senator"></input>
        </form>
      </fieldset>
      <div id="searchResults">
        <h3>SEARCH RESULTS</h3>
        {
          this.state.senators.map((sen) => {
            return(
            <table key={this.state.senators.indexOf(sen)}><tbody>
              <tr>
                <th>Employee number</th>
                <td>{sen.Employeenumber}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{sen.Name}</td>
              </tr>
              <tr>
                <th>Committees</th>
                {this.loopCommittees(sen.Employeenumber)}
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

class ShowAllSenators extends Component {
  constructor(props) {
    super(props);
    autobind(this)
    this.state={
      senators: [],
      committees: []
    };
  }

  componentDidMount(){
    fetch(`http://localhost:3001/getSenators`)
    .then((response) => { return response.json()})
    .then((result) => {
      this.setState({ senators: result });
    })
    .catch((e) => { console.log(e); });


    fetch(`http://localhost:3001/getSenatorCommittees`)
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
        this.state.senators.map((emp) => {
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
