function receiver(){
    var fn = document.getElementById('first_name').value;
    var ln = document.getElementById('last_name').value;
    var ml =  document.getElementById('mail').value
    var address =  document.getElementById('address').value;
    var num =  document.getElementById('phone').value;
    var feedback =  document.getElementById('feed').value;
    if (!fn || !ln || !ml || !address || !num || !feedback){
        alert("Looks like you haven't fill all those inputs!");
    }
    else{
        alert("Submitted Successfully!");
    }
}
