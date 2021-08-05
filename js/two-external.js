function message() {
    alert("test");
}

function changeButton(msg) {
    document.getElementById("stuff").innerHTML = "Clicked " + msg + " button";
}

function changeButtontwo(msg) {
    document.getElementById("c").innerHTML = "Clicked " + msg + " button";
}

function openMe() {
    x = document.getElementById("sec1");
    //equivalent to document.querySelector("#sec1")
    //document.querySelectorAll(".closed");
    x.className = "half";
}


function closeMe() {
    x = document.getElementById("sec1");
    x.className = "closed";
    
}

function displayId(element) {
    console.log(element.innerHTML);
}



function displayFriend() {
    var friends = ['Anthony', 'Allie', 'Joe', 'Evan'];
    document.getElementById("frnd").innerHTML = friends;
    for(i = 0; i < friends.length; i++) {
        //document.write(friends[i]);
        console.log(friends[i]);
        //document.getElementById("frnd").innerHTML = friends[i];
    }
}
