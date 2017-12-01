import React, { Component } from 'react';
import './../App.css'
import autobind from 'react-autobind';

const showField = (fieldname) => {
  if (fieldname === "File Senator Bill"){
    return <FileBillSenator />
  }else if (fieldname === "File House Member Bill"){
    return <FileBillHouseMem />
  }else if (fieldname === "Update Bill"){
    return <Update />
  }else if (fieldname === "Delete Bill"){
    return <Delete />
  }else if (fieldname === "Search Bill"){
    return <Search />
  }else if (fieldname === "Show All Bills"){
    return <ShowAllBills />
  }else{
    return(
      <div>
      </div>
    )
  }
}

const showPrompt = (bool) => {
  if (bool){
    return(
      <Prompt
        prompt="Success"
      />
    )
  }else{
    return(
      <Prompt
        prompt=""
      />
    )
  }
}

class Prompt extends Component{
  constructor(props){
    super(props)
    autobind(this)

    this.state = {
      prompt: props.prompt
    }
  }

  render(){
    return(
      <div id="prompt">
        {this.state.prompt}
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
    this.setState({
      clicked: e.target.value
    })
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <nav id="billNav">
          <input className="tabs" type="button" onClick={this.changeClicked} value="File Senator Bill" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="File House Member Bill" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="Delete Bill" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="Update Bill" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="Search Bill" />
          <input className="tabs" type="button" onClick={this.changeClicked} value="Show All Bills" />
        </nav>
        {showField(this.state.clicked)}
      </div>
    );
  }
}

class FileBillSenator extends Component {
  constructor(props) {
    super(props);
    autobind(this)
    this.state={
      empno:"",
      billno:"",
      year:"",
      status:"",
      title:"",
      primarycommittee:"",
      scope:"",
      secondarycommittee:"",
      subjects:"",
      summdesc:"",
      content:"",
    };
  }

  handleSetEmpNo(e){
    this.setState({
      empno:e.target.value
    });
   }
   handleSetYear(e){
    this.setState({
      year:e.target.value
    });
   }
   handleSetBillNo(e){
    this.setState({
      billno: e.target.value
    });
  }
  handleSetStatus(e){
    this.setState({
      status: e.target.value
    });
  }
  handleSetTitle(e){
    this.setState({
      title: e.target.value
    });
  }
  handleSetPrimaryCommittee(e){
    this.setState({
      primarycommittee: e.target.value
    });
  }
  handleSetScope(e){
    this.setState({
      scope: e.target.value
    });
  }

  handleSetSecondaryCommittee(e){
    this.setState({
      secondarycommittee: e.target.value
    });
  }

  handleSetSubjects(e){
    this.setState({
      subjects: e.target.value
    });
  }

  handleSummDesc(e){
    this.setState({
      summdesc: e.target.value
    });
  }

  handleSetContent(e){
    this.setState({
      content: e.target.value
    });
  }

  submitAdd(e){
    fetch('http://www.localhost:3001/fileBillForSenator',{
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
        <h3>File Bill For Senator</h3>
        <form>
          <input onChange={this.handleSetEmpNo} placeholder="Employee Number"></input>
          <input onChange={this.handleSetBillNo} placeholder="Bill Number"></input>
          <input onChange={this.handleSetYear} placeholder="Year"></input>
          <input onChange={this.handleSetStatus} placeholder="Status"></input>
          <input onChange={this.handleSetTitle} placeholder="Title"></input>
          <input onChange={this.handleSetPrimaryCommittee} placeholder="Primary Committee"></input>
          <input onChange={this.handleSetScope} placeholder="Scope"></input>
          <input onChange={this.handleSetSecondaryCommittee} placeholder="Secondary Committee"></input>
          <textarea onChange={this.handleSetSubjects} placeholder="Subjects
          (Separate multiple values with a semi-colon)"></textarea>
          <textarea onChange={this.handleSummDesc} placeholder="Summary Description"></textarea>
          <textarea onChange={this.handleSetContent} id="content" placeholder="Content"></textarea>
          <input id="addButton" type="button" value="Add Bill" onClick={this.submitAdd}></input>
        </form>
      </fieldset>
    )
  }
}

class FileBillHouseMem extends Component {
  constructor(props) {
    super(props);
    autobind(this)
    this.state={
      empno:"",
      billno:"",
      year:"",
      status:"",
      title:"",
      primarycommittee:"",
      scope:"",
      secondarycommittee:"",
      subjects:"",
      summdesc:"",
      content:"",
    };
  }

  handleSetEmpNo(e){
    this.setState({
      empno:e.target.value
    });
   }
   handleSetYear(e){
    this.setState({
      year:e.target.value
    });
   }
   handleSetBillNo(e){
    this.setState({
      billno: e.target.value
    });
  }
  handleSetStatus(e){
    this.setState({
      status: e.target.value
    });
  }
  handleSetTitle(e){
    this.setState({
      title: e.target.value
    });
  }
  handleSetPrimaryCommittee(e){
    this.setState({
      primarycommittee: e.target.value
    });
  }
  handleSetScope(e){
    this.setState({
      scope: e.target.value
    });
  }

  handleSetSecondaryCommittee(e){
    this.setState({
      secondarycommittee: e.target.value
    });
  }

  handleSetSubjects(e){
    this.setState({
      subjects: e.target.value
    });
  }

  handleSummDesc(e){
    this.setState({
      summdesc: e.target.value
    });
  }

  handleSetContent(e){
    this.setState({
      content: e.target.value
    });
  }

  submitAdd(e){
    console.log("File for senator: " + this.state);
    fetch('http://www.localhost:3001/fileBillForHouseMem',{
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
        <h3>File Bill For House Member</h3>
        <form>
          <input onChange={this.handleSetEmpNo} placeholder="Employee Number"></input>
          <input onChange={this.handleSetBillNo} placeholder="Bill Number"></input>
          <input onChange={this.handleSetYear} placeholder="Year"></input>
          <input onChange={this.handleSetStatus} placeholder="Status"></input>
          <input onChange={this.handleSetTitle} placeholder="Title"></input>
          <input onChange={this.handleSetPrimaryCommittee} placeholder="Primary Committee"></input>
          <input onChange={this.handleSetScope} placeholder="Scope"></input>
          <input onChange={this.handleSetSecondaryCommittee} placeholder="Secondary Committee"></input>
          <textarea onChange={this.handleSetSubjects} placeholder="Subjects
          (Separate multiple values with a semi-colon)"></textarea>
          <textarea onChange={this.handleSummDesc} placeholder="Summary Description"></textarea>
          <textarea onChange={this.handleSetContent} id="content" placeholder="Content"></textarea>
          <input id="addButton" type="button" value="Add Bill" onClick={this.submitAdd}></input>
        </form>
      </fieldset>
    )
  }
}

class Update extends Component {
  constructor(props) {
    super(props);
    autobind(this)
    this.state={
      key: "",
      billno: "",
      value: ""
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

  handleBillNoChange(e){
    this.setState({
      billno: e.target.value
    });
  }

  submitUpdate(e){
    console.log(this.state);
    fetch('http://www.localhost:3001/updateBills', {
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

  render(){
    return(
      <fieldset id="updateSearch">
        <h3>Update</h3>
        <form>
          <select onChange={this.handleKeyChange}>
            <option selected disabled>Field to change</option>
            <option>Billno</option>
            <option>Subjects</option>
            <option>Status</option>
            <option>Summarydesc</option>
            <option>Title</option>
            <option>Content</option>
            <option>Primarycommittee</option>
            <option>Scope</option>
            <option>Secondarycommittee</option>
          </select>
          <input onChange={this.handleBillNoChange} placeholder="Enter Bill Number"></input>
          <textarea onChange={this.handleValueChange} placeholder="Enter new value"></textarea>
          <input type="button" onClick={this.submitUpdate} value="Update Bill"></input>
        </form>
        <h6>{this.prompt}</h6>
      </fieldset>
    )
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state={
      key: "",
      value: "",
      bills: [],
      bool: false
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

  submitClicked(e){
		fetch(`http://localhost:3001/bills?key=${this.state.key}&value=${this.state.value}`)
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ bills: result, key: "", billno: "", value: ""});
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
            <option>Billno</option>
            <option>Subjects</option>
            <option>Status</option>
            <option>Summarydesc</option>
            <option>Title</option>
            <option>Content</option>
            <option>Primarycommittee</option>
            <option>Scope</option>
            <option>Secondarycommittee</option>
          </select>
          <textarea onChange={this.handleValueChange} placeholder="Value to search"></textarea>
          <input type="button" onClick={this.submitClicked} value="Search Bill"></input>
        </form>
      </fieldset>
      {
        showPrompt(this.state.bool)
      }
      <div id="searchResults">
        <h3>SEARCH RESULTS</h3>
        <table>
        <tbody>
        <tr>
          <th>Bill no</th>
          <th>Status</th>
          <th>Primary Committee</th>
          <th>Secondary Committee</th>
          <th>Scope</th>
          <th>Title</th>
          <th>Summary Description</th>
          <th>Content</th>
        </tr>
        {
          this.state.bills.map((bill) => {
            return(
            <tr key={this.state.bills.indexOf(bill)}>
              <td id="tdbillno">{bill.Billno}</td>
              <td id="tdstatus">{bill.Status}</td>
              <td id="tdprimarycommittee">{bill.Primarycommittee}</td>
              <td id="tdsecondarycommittee">{bill.Secondarycommittee}</td>
              <td id="tdscope">{bill.Scope}</td>
              <td id="tdtitle">{bill.Title}</td>
              <td id="tdsummdesc">{bill.Summarydesc}</td>
              <td id="tdcontent">{bill.Content}</td>
            </tr>
            )
          })
        }
        </tbody>
      </table>
      </div>
      </div>
    )
  }
}

class Delete extends Component {
 constructor(props) {
    super(props);
    autobind(this);
    this.state={
      key: "",
      billno: "",
      bills: []
    };
  }

  handleKeyChange(e){
    this.setState({
      key: e.target.value
    })
  }

  handleValueChange(e){
    this.setState({
      billno: e.target.value
    })
  }

  submitDelete(e){
    console.log(this.state);
    fetch('http://www.localhost:3001/deleteBills', {
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

  render(){
    return(
      <fieldset>
        <h3>Delete</h3>
        <form>
          <input onChange={this.handleValueChange} placeholder="Bill number to delete"></input>
          <input id="button" type="button" onClick={this.submitDelete} value="Delete Bill"></input>
        </form>
      </fieldset>
    )
  }
}

class ShowAllBills extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state={
      bills: []
    };
  }

  componentDidMount(e){
		fetch(`http://localhost:3001/getAllbills`)
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ bills: result });
		})
		.catch((e) => { console.log(e); });
  }

  render(){
    return(
      <div>
      <div id="searchResults">
        <h3>SEARCH RESULTS</h3>
        <table>
        <tbody>
        <tr>
          <th>Bill no</th>
          <th>Status</th>
          <th>Primary Committee</th>
          <th>Secondary Committee</th>
          <th>Scope</th>
          <th>Title</th>
          <th>Summary Description</th>
          <th>Content</th>
        </tr>
        {
          this.state.bills.map((bill) => {
            return(
            <tr key={this.state.bills.indexOf(bill)}>
              <td id="tdbillno">{bill.Billno}</td>
              <td id="tdstatus">{bill.Status}</td>
              <td id="tdprimarycommittee">{bill.Primarycommittee}</td>
              <td id="tdsecondarycommittee">{bill.Secondarycommittee}</td>
              <td id="tdscope">{bill.Scope}</td>
              <td id="tdtitle">{bill.Title}</td>
              <td id="tdsummdesc">{bill.Summarydesc}</td>
              <td id="tdcontent">{bill.Content}</td>
            </tr>
            )
          })
        }
        </tbody>
      </table>
      </div>
      </div>
    )
  }
}

export default Main;
