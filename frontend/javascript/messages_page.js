window.onload = () => {

    const messages = document.getElementById("messages") 
    let fullName =""

    fetch("http://localhost/backend/read_messages.php")
    .then(response => response.json())
    .then(data => { console.log(data)
        info = data

        for(let i = 0; i < info.length ; i++){
            fullName = data[i].full_name
            messageContent = data[i].message
            messages.innerHTML += `<div class="messageHolder">
                <p class="sender">${fullName}</p>
                <P class="messageContent">${messageContent}</P>
            </div>`
        }
    
    })
}