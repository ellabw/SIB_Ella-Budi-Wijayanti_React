import Button from 'react-bootstrap/Button';

function Pastmeetups(){
    return(
        <div className="container-past"> 
            <div className="card">
                <p>25 November 2017</p>
                <hr></hr>
                <p>#39 JakartaJS April Meetup with kumparan</p>
                <p>139 went</p>
                <Button variant="secondary" size="lg">
                View
                </Button>
            </div>
            <div className="card">
                <p>27 Oktober 2017</p>
                <hr></hr>
                <p>#38 JakartaJS April Meetup with Blibli</p>
                <p>113 went</p>
                <Button variant="secondary" size="lg">
                View
                </Button>
            </div>
            <div className="card">
                <p>27 September 2017</p>
                <hr></hr>
                <p>#37 JakartaJS April Meetup with Hacktiv8</p>
                <p>110 went</p>
                <Button variant="secondary" size="lg">
                View
                </Button>
            </div>
        </div>
    )
}

export default Pastmeetups