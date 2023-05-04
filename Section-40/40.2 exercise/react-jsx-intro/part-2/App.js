const App = () => {
    return (
        <div>
            <Tweet message="Hello!" username="aaronmitchell96" name="Aaron" date="03/13/2023"/>
            <Tweet message="Goodbye!" username="manisharaj95" name="Manisha" date="10/19/2023"/>
            <Tweet message="Im hungry" username="jjthejetplane" name="Jason" date="07/07/2023"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))