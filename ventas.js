// conexcion con el API

fetch(' https://www.datos.gov.co/resource/xdk5-pm3f.json')
.then((response)=> response.json())
.then((data)=> console.log(data))


