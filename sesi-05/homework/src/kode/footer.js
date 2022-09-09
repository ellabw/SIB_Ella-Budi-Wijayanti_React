import PropTypes from 'prop-types';

function Footer(props){
    return(
        <div className="footer">
            <hr></hr>
            <p>
                {props.footerText}
            </p>
        </div>
    )
}

Footer.propTypes = {
    props: PropTypes.string,
}

export default Footer