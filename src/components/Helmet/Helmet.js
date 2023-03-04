const Helmet = (props) =>{
    document.title = "Zamon Parfum - " + props.title;
    return <div className="w-100">{props.children}</div>
}

export default Helmet