async function postFormData(val){
    const formData = await axios.post('http://127.0.0.1:5000', {
    guess: val
})
console.log(formData)
return formData
}

submitForm = $('button')
submitForm.on('click',function(e){
    e.preventDefault()
    formValue = $('input').val()
    postFormData(formValue)
    console.log('guess submitted to server!')
})
