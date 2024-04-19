let form = document.getElementById('myform')

form.addEventListener('submit',function(e){
    e.preventDefault()
    let first_name = document.getElementById('f_name').value
    let second_name = document.getElementById('s_name').value
    let full_name = first_name +" " +second_name
    document.getElementById('full_name').innerHTML = full_name
})