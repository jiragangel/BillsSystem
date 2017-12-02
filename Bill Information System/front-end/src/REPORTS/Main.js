import React, { Component } from 'react';
import autobind from 'react-autobind';
import './../App.css'

class Main extends Component {
  render() {
    return(
      <div>
        <nav>
          <select id="reports">
            <option>View all bills filed at the Senate on a specific year.</option>
            <option>View all bills field at the Senate by a specific senator</option>
            <option>View all bills filed at the House by House member house member</option>
            <option>View all bills passed at the Senate on First Reading</option>
            <option>View all bills passed at the Senate on Second Reading</option>
            <option>View all bills passed at the Senate on Third Reading</option>
            <option>View all bills passed at the House on First Reading</option>
            <option>View all bills passed at the House on Second Reading</option>
            <option>View all bills passed at the House on Third Reading></option>
          </select>
        </nav>
        <SenateYear />
      </div>
    )
  }
}

class SenateYear extends Component {
  constructor(props){
    super(props);
    autobind(this);

    this.state = {
      bills: [],
      year: 0
    }
  }

  handleYearChange(e){
    this.setState({
      year: e.target.value
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
		fetch(`http://localhost:3001/senatebillyear?year=${this.state.year}`)
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

  render(){
    return(
      <div>
      <fieldset id="updateSearch">
        <h3>Search</h3>
        <form>
          <input onChange={this.handleYearChange} placeholder="Year"></input>
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
              <tr>
                <th>Content</th>
                <td>{bill.Content}</td>
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

export default Main;
