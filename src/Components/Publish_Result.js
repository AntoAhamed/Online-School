import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Publish_Result(props) {
  const navigate = useNavigate('')

  const classs = [9, 10, 11, 12];
  const handleAddrTypeChangeOfClasss = (e) => {
    const selectedClasss = classs[e.target.value];
    props.setClasss(selectedClasss);
  }

  const group = ["science", "commerce", "arts"];
  const handleAddrTypeChangeOfGroup = (e) => {
    const selectedGroup = group[e.target.value];
    props.setGroup(selectedGroup);
  }

  async function submit(e) {
    e.preventDefault();

    var s = props.subject;

    var finalSub = s.charAt(0).toUpperCase()+s.slice(1);

    props.setSubject(finalSub);

    if (props.classs !== '' && props.group !== '' && props.subject !== '') {
      navigate("/publish-result-2");
    }
    else {
      alert("Empty field can't be submitted!");
    }
  }

  useEffect(() => {
    props.setClasss(9);
    props.setGroup("science");
  }, [])

  return (
    <div className='container' style={{ marginTop: '2%', border: "1px solid #66a3ff", borderRadius: "5px", backgroundColor: "#66a3ff" }}>
      <div className="row mb-3">
        <div className="col" style={{ textAlign: "center", fontSize: "45px" }}>
          <b>Publish Result</b>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <form action='' method='' className='login-form'>
            <div className="mb-3">
              <label htmlFor="class" className="form-label">Class</label>
              < select onChange={e => handleAddrTypeChangeOfClasss(e)} className="form-select" id="class" aria-label="Default select example">
                {
                  classs.map((e, index) => <option key={index} value={index}>{e}{console.log(e)}</option>)
                }
              </select >
            </div>
            <div className="mb-3">
              <label htmlFor="group" className="form-label">Group</label>
              < select onChange={e => handleAddrTypeChangeOfGroup(e)} className="form-select" id="group" aria-label="Default select example">
                {
                  group.map((e, index) => <option key={index} value={index}>{e}{console.log(e)}</option>)
                }
              </select >
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" value={props.subject} onChange={(e) => { props.setSubject(e.target.value) }} id="subject" placeholder="Bangla/English/Math/ICT" />
            </div>
            <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Publish_Result
