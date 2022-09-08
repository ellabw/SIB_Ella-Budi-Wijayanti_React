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

export default Footer