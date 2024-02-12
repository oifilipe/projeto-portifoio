function getProjects() {
    const urlGitHub = "https://api.github.com/users/oifilipe/repos"
    var loadingElement = document.getElementById("loading")

    fetch(urlGitHub, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((response) => {
            loadingElement.style.display = "none"
            showProjects(response)
            console.log(response)
        })
        .catch((e) => {
            console.log(e)
        })
}

function showProjects(data) {
    var listElemnt = document.getElementById('my-project-list')

    for(let i = 0; i < data.length; i++)
    {
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElemnt.appendChild(a)
    }
}

getProjects();
