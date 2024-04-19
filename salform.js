let form = document.getElementById('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    let basic =Number(document.getElementById('basic').value)
    let benefits =Number(document.getElementById('benefits').value)
    let gross = basic + benefits
    document.getElementById('gross').innerHTML = `Gross salary is ${gross}`
})