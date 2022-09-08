function Header(props){
    const changeLogin = () => {
        console.log("berhasil");
    }
    return (
        <>
            <ul>
            <li>
                <a href="Qtemu.com">{props.navTitle}</a>
            </li>
            <li>
                <a href="Meetup.com">{props.navText}</a>
            </li>
            <li>
                <a href="Explore.com">{props.navText2}</a>
            </li>
            <li onClick={()=>changeLogin()} className="login">
                <a href="login.com">{props.navLogin}</a>
            </li>
            </ul>
        </>

    );
}

export default Header;