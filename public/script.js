function getUserInfo() {
    const input = document.getElementById("userName").value;
    const url = "/showprofile/" + input;
    axios.get(url)
    .then(response => {
    document.getElementById("userInfo").innerHTML = response.data;
    })
}

// Create a new function called handleSubmit and 
// use DOM manipulation to get values from the inputs
function handleSubmit() {
    const userName = document.getElementById("user-name").value;
    const userId = document.getElementById("user-id").value;
    const message = document.getElementById("message").value;
    console.log(userName, userId, message);

    // Creating a Payload Object
    const payload = {
        username: userName,
        id: userId,
        message
    }

    // Making a post request with axios
    axios.post("/api/", payload)
        .then(response => {
            console.log(response.data)
        }) 
}

function getAllUsers() {
    axios.get("/getallusers/")
        .then(response => {
        document.getElementById("result").innerHTML = JSON.stringify(response.data)
        })
}
