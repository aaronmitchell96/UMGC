const Alert = (props) => {
    console.log(props)
    return (
        <div>
            *******************
            <p>{props.message}</p>
            *******************
        </div>
    )
}