import Button from 'react-bootstrap/Button';
import React, {useState} from 'react'

function Meetup(props){
    const [join, setjoin] = useState("");
    return (
    <div className="meetup">
      <div className="image">
            <img src={require("../asset/foto.jpg")} />
      </div>
      <div className="meetup-next">
        <h3>Hacktiv8 Meetup</h3>
        <p className ="desc">Location : Jakarta</p>
        <p className ="desc">Members : 1,078</p>
        <p className ="desc">Organizers : Andy Wiranata</p>

        <Button variant="info" size="lg" onClick={() => setjoin(alert("sudah join"))}>
          Join Us
        </Button>
      </div>
      
    </div>
    
    )
}

export default Meetup;