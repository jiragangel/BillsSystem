import React, { Component } from 'react';
import autobind from 'react-autobind';
import './../App.css'

const showField = (fieldname) => {
  if (fieldname === "View all bills filed at the Senate on a specific year."){
    return <SenateYear />
  }else if (fieldname === "View all bills filed at the Senate by a specific senator"){
    return <BillSenator />
  }else if (fieldname === "View all bills filed at the House by House member house member"){
    return <BillHouseMember />
  }else if (fieldname === "View all bills passed at the Senate on First Reading"){
    return <SenateFirst />
  }else if (fieldname === "View all bills passed at the Senate on Second Reading"){
    return <SenateSecond />
  }else if (fieldname === "View all bills passed at the Senate on Third Reading"){
    return <SenateThird />
  }else if (fieldname === "View all bills passed at the House on First Reading"){
    return <HouseFirst />
  }else if (fieldname === "View all bills passed at the House on Second Reading"){
    return <HouseSecond />
  }else if (fieldname === "View all bills passed at the House on Third Reading"){
    return <HouseThird />
  }
}

class Main extends Component {
  constructor(props){
    super(props);
    autobind(this);

    this.state = {
      clicked: ""
    }
  }

  handleChangeClick(e){
    console.log(e.target.value);
    this.setState({
      clicked: e.target.value
    })
  }

  render() {
    return(
      <div>
        <nav>
          <select onChange={this.handleChangeClick} id="reports">
            <option>View all bills filed at the Senate on a specific year.</option>
            <option>View all bills filed at the Senate by a specific senator</option>
            <option>View all bills filed at the House by House member house member</option>
            <option>View all bills passed at the Senate on First Reading</option>
            <option>View all bills passed at the Senate on Second Reading</option>
            <option>View all bills passed at the Senate on Third Reading</option>
            <option>View all bills passed at the House on First Reading</option>
            <option>View all bills passed at the House on Second Reading</option>
            <option>View all bills passed at the House on Third Reading</option>
          </select>
        </nav>
        {showField(this.state.clicked)}
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
      year: 0,
      subjects: []
    }
  }

  handleYearChange(e){
    this.setState({
      year: e.target.value
    })
  }

  componentDidMount(){
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

  submitClicked(e){
		fetch(`http://localhost:3001/senatebillyear?year=${this.state.year}`)
		.then((response) => { return response.json()})
		.then((result) => {
			this.setState({ bills: result });
		})
		.catch((e) => { console.log(e); });

    fetch(`http://localhost:3001/housebillyear?year=${this.state.year}`)
  		.then((response) => { return response.json()})
  		.then((result) => {
  			this.setState({ bills: this.state.bills.concat(result) });
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
            </tbody></table>
            )
          })
        }
      </div>
      </div>
    )
  }
}

class BillSenator extends Component {
  constructor(props){
    super(props);
    autobind(this);

    this.state = {
      bills: [],
      senator: "",
      subjects: [],
      senators: []
    }
  }

  handleSenatorChange(e){
    this.setState({
      senator: e.target.value
    })
  }

  componentDidMount(){
		fetch(`http://localhost:3001/getSubjects`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        subjects: result
      })
		})
		.catch((e) => { console.log(e); });

    fetch(`http://localhost:3001/getSenators`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        senators: result
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

  submitClicked(e){
    fetch(`http://localhost:3001/searchSenBills?name=${this.state.senator}`)
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
        <select onChange={this.handleSenatorChange}>
          <option selected disabled>Senators</option>
          {
            this.state.senators.map((sen) => {
              return(
                <option>{sen.Name}</option>
              )
            })
          }
        </select>
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
                <th>Title</th>
                <td>{bill.Title}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{bill.Status}</td>
              </tr>
              <tr>
                <th>Billno</th>
                <td>{bill.Billno}</td>
              </tr>
              <tr>
                <th>Author</th>
                <td>{this.state.senator}</td>
              </tr>
              <tr>
                <th>Subjects</th>
                {this.loopSubjects(bill.Billno)}
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

class BillHouseMember extends Component {
  constructor(props){
    super(props);
    autobind(this);

    this.state = {
      bills: [],
      housemem: "",
      subjects: [],
      housemems: []
    }
  }

  handleHousememChange(e){
    this.setState({
      senator: e.target.value
    })
  }

  componentDidMount(){
		fetch(`http://localhost:3001/getSubjects`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        subjects: result
      })
		})
		.catch((e) => { console.log(e); });

    fetch(`http://localhost:3001/getHouseMems`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        housemems: result
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

  submitClicked(e){
    fetch(`http://localhost:3001/searchHMBills?name=${this.state.senator}`)
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
        <select onChange={this.handleHousememChange}>
          <option selected disabled>House Members</option>
          {
            this.state.housemems.map((sen) => {
              return(
                <option>{sen.Name}</option>
              )
            })
          }
        </select>
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
                <th>Title</th>
                <td>{bill.Title}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{bill.Status}</td>
              </tr>
              <tr>
                <th>Billno</th>
                <td>{bill.Billno}</td>
              </tr>
              <tr>
                <th>Author</th>
                <td>{this.state.senator}</td>
              </tr>
              <tr>
                <th>Subjects</th>
                {this.loopSubjects(bill.Billno)}
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

class SenateFirst extends Component {
  constructor(props){
    super(props);
    autobind(this);

    this.state = {
      bills: [],
      subjects: []
    }
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

  componentDidMount(){
    let string = "Approved on First Reading by the Senate"
		fetch(`http://localhost:3001/passed?status=${string}`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        bills: result
      })
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
        {this.state.bills.map((bill) => {
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
        )})}
      </div>
    )
  }
}

class SenateSecond extends Component {
  constructor(props){
    super(props);
    autobind(this);

    this.state = {
      bills: [],
      subjects: []
    }
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

  componentDidMount(){
    let string = "Approved on Second Reading by the Senate"
		fetch(`http://localhost:3001/passed?status=${string}`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        bills: result
      })
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
        {this.state.bills.map((bill) => {
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
        )})
      }
      </div>
    )
  }
}

class SenateThird extends Component {
  constructor(props){
    super(props);
    autobind(this);

    this.state = {
      bills: [],
      subjects: []
    }
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

  componentDidMount(){
    let string = "Approved on Third Reading by the Senate"
		fetch(`http://localhost:3001/passed?status=${string}`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        bills: result
      })
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
        {this.state.bills.map((bill) => {
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
    )
  }
}

class HouseFirst extends Component {
  constructor(props){
    super(props);
    autobind(this);

    this.state = {
      bills: [],
      subjects: []
    }
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

  componentDidMount(){
    let string = "Approved on First Reading by the House of Representatives"
		fetch(`http://localhost3001/passed?status=${string}`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        bills: result
      })
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
        {this.state.bills.map((bill) => {
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
        )})
      }
      </div>
    )
  }
}

class HouseSecond extends Component {
  constructor(props){
    super(props);
    autobind(this);

    this.state = {
      bills: [],
      subjects: []
    }
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

  componentDidMount(){
    let string = "Approved on Second Reading by the House of Representatives"
		fetch(`http://localhost3001/passed?status=${string}`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        bills: result
      })
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
        {this.state.bills.map((bill) => {
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
        )})
      }
      </div>
    )
  }
}

class HouseThird extends Component {
  constructor(props){
    super(props);
    autobind(this);

    this.state = {
      bills: [],
      subjects: []
    }
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

  componentDidMount(){
    let string = "Approved on Third Reading by the House of Representatives"
		fetch(`http://localhost3001/passed?status=${string}`)
		.then((response) => { return response.json()})
		.then((result) => {
      this.setState({
        bills: result
      })
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
        {this.state.bills.map((bill) => {
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
        )})
      }
      </div>
    )
  }
}

export default Main;
