console.log('qr-interface.js is CONNECTED');



$(document).ready(function() {
  //when qr-form is submitted 
    //save text input value as var = qrURL
    //generate qr code with qrURL as its content
    //render qr image as png on index.ejs
    //render download button linked to qr png image file


  // $('#qr-form').submit(function(event){
  //     event.preventDefault();
  //     var qrURL = $('#qr-url').val();
  //     var qrName = $('#qr-name').val();

  //     generateQR(qrURL, qrName);


  // }) //form .submit()
}) //document.ready