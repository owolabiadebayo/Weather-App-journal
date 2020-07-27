    let Form = document.getElementById("myForm");
    let contactForm = document.getElementById("contactForm");
    
  
    Form.addEventListener("submit", performAction,false)
    
    function performAction(e) {
        if(e.target.value != ""){e.preventDefault()
     let Enquiry = document.getElementById("inlineForm").value;
     let flx1 = document.getElementById("flx1").value;
     let flx2 = document.getElementById("flx2").value;
     let flx3 = document.getElementById("flx3").value;
     
  
  
     const data = {Enquiry, flx1, flx2, flx3};
     const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch('/api', options);
    } else {
        console.error("input value")
    }}

    contactForm.addEventListener("submit", performAction2,false)
    
    function performAction2(e) {
        if(e.target.value != ""){e.preventDefault()
     let names = document.getElementById("name").value;
     let emails = document.getElementById("email").value;
     let subject = document.getElementById("subject").value;
     let messages = document.getElementById("message").value;
     
  
  
     const data = {names, emails, subject, messages};
     const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch('/api', options);
    } else {
        console.error("input value")
    }}
