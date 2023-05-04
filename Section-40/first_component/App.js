const App = () => {
    return (
        <div>
            <Alert>
                <h1>HELLO!!!!</h1>
            </Alert>
            <RandomChoice choices ={['red','green','yellow']}/>
            <Animal name ="Stevie Chicks" species="Silkie Chicken"/>
            <Animal name ="WHOOO?? DEEEEE!!" species="Hound Mix"/>
            <RandomNum/>
            <RandomNum/>
            <RandomNum/>
            <Bouncer age={19} />
            <Bouncer age={11} />
            <Bouncer age={39} />
            <TodoList todos = {['walk chickens', 'feed chickens','eat chickens']}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))