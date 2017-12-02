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
      console.log('Request success',data);
    })
    .catch(function(error){
      console.log('Request failure: ',error);
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
          <input id="addButton" type="button" value="Add Bill" onClick={this.submitAdd}></input>
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
      console.log('Request success: ', data);
    })
    .catch(function (error) {
      console.log('Request failure: ', error);
    });
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

}

class SearchSenator extends Component {

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


    fetch(`http://localhost:3001/getCommittees`)
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
              <th>Subjects</th>
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
