let form = document.getElementById('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    let basic =document.getElementById('basic').value
    let benefits =document.getElementById('benefits').value
    if(basic==""|| benefits==""){
        document.getElementById('gross').innerHTML= "check input fields"
    }
    else{
        let gross = Number(basic) + Number(benefits)
        document.getElementById('gross').innerHTML = `Gross salary is ${gross}`
}
}) 
    