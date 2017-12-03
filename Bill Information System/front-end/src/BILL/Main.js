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
      name: "",
      year:"",
      status:"",
      title:"",
      primarycommittee:"",
      scope:"",
      secondarycommittee:"",
      subjects:"",
      summdesc:"",
      senators: []
    };
  }

  getEmpno(name){
    for (let i = 0 ; i < this.state.senators.length ; i++){
      if (name === this.state.senators[i].Name){
        return this.state.senators[i].Employeenumber
      }
      return;
    }
  }

  handleSetEmpNo(e){
    this.setState({
      empno: this.getEmpno(e.target.value),
      name: e.target.value
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

  componentDidMount(){
		fetch(`http://localhost:3001/getSenators`)
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ senators: result });
		})
		.catch((e) => { console.log(e); });
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
      alert("Add Successful");
    })
    .catch(function(error){
      alert(error);
    });
  }



  render(){
      return(
        <fieldset id="add">
        <h3>File Bill For Senator</h3>
        <form>
          <select onChange={this.handleSetEmpNo}>
            <option selected disabled>Senator</option>
            {
              this.state.senators.map((senators) => {
                return(
                  <option value={senators.Name}>{senators.Name}</option>
                )
              })
            }
          </select>
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
      name: "",
      year:"",
      status:"",
      title:"",
      primarycommittee:"",
      scope:"",
      secondarycommittee:"",
      subjects:"",
      summdesc:"",
      housemems: []
    };
  }

  handleSetEmpNo(e){
    this.setState({
      empno: this.getEmpno(e.target.value),
      name: e.target.value
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

  getEmpno(name){
    for (let i = 0 ; i < this.state.housemems.length ; i++){
      if (name === this.state.housemems[i].Name){
        return this.state.housemems[i].Employeenumber
      }
      return;
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3001/getHouseMems`)
    .then((response) => { return response.json()})
    .then((result) => {
      this.setState({ housemems: result });
    })
    .catch((e) => { console.log(e); });
  }

  submitAdd(e){
    fetch('http://www.localhost:3001/fileBillForHouseMem',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(this.state)
    })
    .then(function (data){
      alert("Add Successful");
    })
    .catch(function(error){
      alert(error);
    });
  }

  render(){
      return(
        <fieldset id="add">
        <h3>File Bill For House Member</h3>
        <form>
          <select onChange={this.handleSetEmpNo}>
            <option selected disabled>House Member</option>
            {
              this.state.housemems.map((hm) => {
                return(
                  <option value={hm.Name}>{hm.Name}</option>
                )
              })
            }
          </select>
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
      value: "",
      bills: []
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
    fetch('http://www.localhost:3001/updateBills', {
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
      alert("There is an error");
    });
  }

  componentDidMount(){
  		fetch(`http://localhost:3001/getAllbills`)
  		.then((response) => { return response.json()})
  		.then((result) => {
        this.setState({
          bills: result
        })
  		})
  }

  render(){
    return(
      <fieldset id="updateSearch">
        <h3>Update</h3>
        <form>
          <select onChange={this.handleBillNoChange}>
          <option selected disabled>Bill Number</option>
          {
            this.state.bills.map((b) => {
              return(
                <option value={b.Billno}>{b.Billno}</option>
              )
            })
          }
          </select>
          <select onChange={this.handleKeyChange}>
            <option selected disabled>Field to change</option>
            <option>Subjects</option>
            <option>Status</option>
            <option>Summarydesc</option>
            <option>Title</option>
            <option>Primarycommittee</option>
            <option>Scope</option>
            <option>Secondarycommittee</option>
          </select>
          <textarea onChange={this.handleValueChange} placeholder="Enter new value"></textarea>
          <input type="button" onClick={this.submitUpdate} value="Update Bill"></input>
        </form>
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
      bool: false,
      subjects: []
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

  loopSubjects(billno){
      return(
        <td>
        {
          this.state.subjects.map((subj) => {
            if (subj.Billno === billno){
              return(
                <p className="subjs" key={this.state.subjects.indexOf(subj)}>{subj.Subject}</p>
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
		fetch(`http://localhost:3001/bills?key=${this.state.key}&value=${this.state.value}`)
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ bills: result, key: "", billno: "", value: ""});
			alert("Search Successful");
		})
		.catch((e) => { console.log(e); });

		fetch(`http://localhost:3001/getSubjects`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        subjects: result
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
            <option>Billno</option>
            <option>Subjects</option>
            <option>Status</option>
            <option>Summarydesc</option>
            <option>Title</option>
            <option>Primarycommittee</option>
            <option>Scope</option>
            <option>Secondarycommittee</option>
          </select>
          <textarea onChange={this.handleValueChange} placeholder="Value to search"></textarea>
          <input type="button" onClick={this.submitClicked} value="Search Bill"></input>
        </form>
      </fieldset>
      <div id="searchResults">
        <h3>SEARCH RESULTS</h3>
        {
          this.state.bills.map((bill) => {
            return(
            <table key={this.state.bills.indexOf(bill)}><tbody>
              <tr>
                <th>Billno</th>
                <td>{bill.Billno}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{bill.Status}</td>
              </tr>
              <tr>
                <th>Subjects</th>
                {this.loopSubjects(bill.Billno)}
              </tr>
              <tr>
                <th>Title</th>
                <td>{bill.Title}</td>
              </tr>
              <tr>
                <th>Primary Committee</th>
                <td>{bill.Primarycommittee}</td>
              </tr>
              <tr>
                <th>Seconday Committee</th>
                <td>{bill.Secondarycommittee}</td>
              </tr>
              <tr>
                <th>Scope</th>
                <td>{bill.Scope}</td>
              </tr>
              <tr>
                <th>Summary Description</th>
                <td>{bill.Summarydesc}</td>
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
    fetch('http://www.localhost:3001/deleteBills', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(function (data) {
      alert("Add Successful");
    })
    .catch(function (error) {
      alert(error);
    });

    window.location.reload();
  }

  componentDidMount(){
  		fetch(`http://localhost:3001/getAllbills`)
  		.then((response) => { return response.json()})
  		.then((result) => {
        console.log(result);
        this.setState({
          bills: result
        })
  		})
    }

  render(){
    return(
      <fieldset>
        <h3>Delete</h3>
        <form>
        <select onChange={this.handleValueChange}>
        <option selected disabled>Bill Number</option>
        {
          this.state.bills.map((b) => {
            return(
              <option value={b.Billno}>{b.Billno}</option>
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

class ShowAllBills extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state={
      bills: [],
      subjects: []
    };
  }

  componentDidMount(e){
		fetch(`http://localhost:3001/getAllbills`)
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ bills: result });
		})
		.catch((e) => { console.log(e); });

		fetch(`http://localhost:3001/getSubjects`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        subjects: result
      })
		})
		.catch((e) => { console.log(e); });
  }

  loopSubjects(billno){
      return(
        <td>
        {
          this.state.subjects.map((subj) => {
            if (subj.Billno === billno){
              return(
                <p className="subjs" key={this.state.subjects.indexOf(subj)}>{subj.Subject}</p>
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
      <div id="searchResults">
        <h3>ALL BILLS</h3>
        {
          this.state.bills.map((bill) => {
            return(
            <table>
            <tbody>
              <tr>
                <th>Billno</th>
                <td>{bill.Billno}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{bill.Status}</td>
              </tr>
              <tr>
                <th>Subjects</th>
                {this.loopSubjects(bill.Billno)}
              </tr>
              <tr>
                <th>Title</th>
                <td>{bill.Title}</td>
              </tr>
              <tr>
                <th>Primary Committee</th>
                <td>{bill.Primarycommittee}</td>
              </tr>
              <tr>
                <th>Seconday Committee</th>
                <td>{bill.Secondarycommittee}</td>
              </tr>
              <tr>
                <th>Scope</th>
                <td>{bill.Scope}</td>
              </tr>
              <tr>
                <th>Summary Description</th>
                <td>{bill.Summarydesc}</td>
              </tr>
            </tbody>
            </table>
            )
          })
        }
      </div>
      </div>
    )
  }
}

export default Main;
