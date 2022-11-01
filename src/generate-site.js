const generateTeam = (team) => {
    console.log(team)
    const html = [];

    const generateManager = manager => {
        console.log(manager);
        let managerhtml = `
        <div class = "card" style= "width: 18rem;">
        <div class="card-header">
        ${manager.name} <br/>
        <i class="fas fa-mug-hot"></i>Manager</div>
        <ul class="list-group list group-flush">
        <li class = "list-group-iem">ID: ${manager.id}</li>
        <li class = "list-group-item"> Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>
        `;
        html.push(managerhtml);
 }
const generateEngineer = engineer => {
    console.log(engineer);
    let engineerHtml = `
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${engineer.name} <br/>
    <i class = "fas fa-glasses"></i>Engineer</div>
    <ul class ="list-group list-group-flush">
    <li class="list-group-item"> ID: ${engineer.id}</li>
    <li class = "list-group-item"> Email: <span id="email><a href+ "mailto:${engineer.email}</a></span></li>
    <li class = "list-group-item"> Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
   </ul>
   </div> 
   `;
   html.push(engineerHtml)

}
const generateIntern = intern => {
    console.log(intern);
    let internHtml = `
    <div class="card" style="width: 18rem;">
    <div class ="card-header">
    ${intern.name} <br/>
    <i class ="fas fa-user-graduate"></i>Intern</div>
    <ul class="list-group-item">ID: ${intern.id}</li>
    <li class = "list-group-item"> Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}></a></li>
    <li class="list-group-item">School:${intern.school}</li>
    </ul>
    </div>
    `;
    html.push(internHtml);

}

for(let i = 0; i <team.length; i++) {
    if (team[i].getRole() === "Manager") {
        generateManager(team[1]);

    }
        if (team[i].getRole() === "Engineer") {
            generateManager(team[1]);
        }
           
        if (team[i].getRole() === "Intern") {
            generateManager(team[1]);
            
}
}

return html.join('');

}

module.exports = team => {
    console.log(team)
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href"../style.css" />    
    <title>Team Profile Generator</title>

</head>
<body>
    <header>
    <h1> My team </h1>
    </header>

    <main> ${generateTeam(team)} </main>


</body>
</html>

`;
}