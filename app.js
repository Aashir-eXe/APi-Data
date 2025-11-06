
function getUserData() {
    let users = document.getElementById("users");
    let inputValue = document.getElementById("input").value; 


    fetch(`https://api.github.com/users/${inputValue}`)
        .then((resp) => resp.json())
        .then((data) => {

            users.innerHTML = "";

            const row = `
            <div style="text-align:center; padding:10px; border-radius:15px; width:400px; margin:auto; font-family:Arial;">

                  <img src="${data.avatar_url}" width="400" hight="400px"/>    

                <h1>Name : ${data.name}</h1>
                
                <h1>Followers : ${data.followers}</h1>
                <h1>Following : ${data.following}</h1>
                <h1> Repositories: ${data.public_repos}</h1>

            `;
            users.innerHTML = row;

            
        })
        .catch((err) => console.log(err));
}