const RandomNum = () => {
    const rand = Math.floor(Math.random() * 10) + 1;
    return React.createElement("h1", null, rand);
    
}