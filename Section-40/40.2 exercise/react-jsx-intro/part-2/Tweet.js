const Tweet = (props) => {
    return(
        <span>
            <b>Message: {props.message}</b>
            <p> username: {props.username}</p>
            <p> name: {props.name}</p>
            <p> date: {props.date}</p>
        </span>
    )
}