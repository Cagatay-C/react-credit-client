import React,{useState} from 'react'
import axios from 'axios'

const CreditApplication = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [identityNO, setIdentityNO] = useState("")
    const [phoneNO, setPhoneNO] = useState("")
    const [salaryInMonth, setSalaryInMonth] = useState("")
    const [approved, setApproved] = useState(null)
    const [limit, setLimit] = useState(0);
    

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8081/api/creditStatus`, {firstName,lastName,identityNO,phoneNO,salaryInMonth})
      .then(res => {
        setApproved(res.data.approved);
        setLimit(res.data.limit);
      })
  }
    
    return (
        <div className="container mt-5">
            {approved == null ? <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                    <div className="col-sm-5">
                    <input onChange={e => setFirstName(e.target.value)} type="text" className="form-control" id="name" placeholder="Enter name..." required/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="lastname">Last Name:</label>
                    <div className="col-sm-5">
                    <input onChange={e => setLastName(e.target.value)} type="text" className="form-control" id="lastname" placeholder="Enter last name..." required/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="identity">Identity:</label>
                    <div className="col-sm-5">
                    <input onChange={e => setIdentityNO(e.target.value)} type="text" className="form-control" id="identity" placeholder="Enter identity number..." required/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="phone">Phone:</label>
                    <div className="col-sm-5">
                    <input onChange={e => setPhoneNO(e.target.value)} type="text" className="form-control" id="phone" placeholder="Enter phone number..." required />
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="salary">Salary:</label>
                    <div className="col-sm-5">
                    <input onChange={e => setSalaryInMonth(e.target.value)} type="text" className="form-control" id="salary" placeholder="Enter amount of salary..." required/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <button onClick={onSubmit} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form> : approved == false ? deniedComponent : approvedComponent}
        </div>
    )
}

const deniedComponent =
    (<div>
        <h2 className="font-weight-light">Credit request has been denied</h2>
    </div>);
const approvedComponent = (<div>
    <h2 className="font-weight-light">Credit request has been approved</h2>
</div>)


export default CreditApplication
