let notification = document.getElementById('notification');
    let successMsg = 'Successfully submitted';

    function validateForm(){
        let submit = document.getElementById('submit');
        
        submit.addEventListener('click', function(event) {
            event.preventDefault();
            let firstName = document.getElementById('first').value;
            let lastName = document.getElementById('last').value;
            let email = document.getElementById('email').value;
            let timeSlot = document.getElementById('timeslot').value;
            let partySize = document.getElementById('size').value;
            let description = document.getElementById('description').value;

            function showNotification(message, className){
                let noti = document.createElement('div');
                noti.classList.add('notification');
                noti.classList.add(className);
                noti.innerHTML = message;
                notification.appendChild(noti);
            }

            notification.innerHTML = "";

            if(/\d/.test(firstName) || /\d/.test(lastName)){
                showNotification("Name must only contain letters", "error");
            }
            else if(!email.endsWith("@gmail.com")){
                showNotification("Email must end with @gmail.com", "error");
            }
            else if (timeSlot === ""){
                showNotification("Please select a time slot", "error");
            }
            else if (partySize < 2){
                showNotification("Party size can only be larger than 1", "error");
            }
            else if(/[a-zA-Z]/.test(partySize.toString())){
                showNotification("Party size can only contain numbers", "error");
            }
            else if(description.split(/\s+/).length < 10 || description.split(/\s+/).length > 100){
                showNotification("Event description needs to contain at least 10 words, max 100", "error");
            }
            else {
                showNotification(successMsg, "success");
            }

        });
    }

    function changeColor(color) {
        let headings = document.querySelectorAll('h1, h4');
        let tableHeaders = document.querySelectorAll('th');
        let navLinks = document.querySelectorAll('.nav-list a');

        if (color === 'purple') {
            headings.forEach(element => {
                element.style.color = 'purple';
            });
            tableHeaders.forEach(element => {
                element.style.color = 'purple';
            });
            navLinks.forEach(element => {
                element.style.color = 'purple';
            });
        } else if (color === 'orange') {
            headings.forEach(element => {
                element.style.color = 'orange';
            });
            tableHeaders.forEach(element => {
                element.style.color = 'orange';
            });
            navLinks.forEach(element => {
                element.style.color = 'orange';
            });
        } else { // Default to brown
            headings.forEach(element => {
                element.style.color = 'brown';
            });
            tableHeaders.forEach(element => {
                element.style.color = 'brown';
            });
            navLinks.forEach(element => {
                element.style.color = 'brown';
            });
        }
    }

validateForm();
