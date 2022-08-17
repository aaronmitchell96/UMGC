const toggleSwitch = document.querySelector('input[type="checkbox"]');

if (localStorage.getItem('darkModeEnabled')){
    document.body.className = 'dark';
    toggleSwitch.checked = true;
}
toggleSwitch.addEventListener('click', function(e){
    const {checked} = toggleSwitch
    if (checked){
        localStorage.setItem('darkModeEnabled', checked)
    }
    else{
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? 'dark': '';
})