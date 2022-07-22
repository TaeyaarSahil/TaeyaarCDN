/* 

1. Add your custom JavaScript code below
2. Place the this code in your template:

  

*/

$(document).ready(function(){
    $("#153db45d-e01f-4754-8bbd-6c7cf52a12e0").change(function(e){
            var fileName = e.target.files[0].name;
            $("#career-span").text(fileName);
        });
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('email-address')){
        let emailId = searchParams.get('email-address');
        $("#c9204231-7756-4e10-cb50-60870fb4bb73").val(emailId);
    }    
    // Saving values to session if in page RFQ Form is filled
    $("#inpage-rfq-submit").click(function(){
        var firstName = $("#f0993b8b-0049-4bfb-d618-25a6abb74921").val();
        var lastName = $("#9f15f8b6-7787-4830-ddf2-81d8e86b4994").val();
        var email = $("#4c4d8a54-4ff8-4dfc-ebbc-db598354bb16").val();
        var company = $("#fed2cdb5-299e-4632-c066-e5538c44482d").val();
        if(firstName && lastName  && email  || company){
           sessionStorage.setItem("firstName", firstName);
           sessionStorage.setItem("lastName", lastName);
           sessionStorage.setItem("email", email);
           sessionStorage.setItem("company", company);
           $("#umbraco_form_e998f2743bcd4e05865f42e69ccf7d04 form").submit();
        }
    });
    
    
    if ( window.location.pathname == '/' ){
        // Index (home) page
    
    } else {
        // Other page
     
        $("#header").addClass("es-non-sticky");
    }
   $(window).scroll(function (event) {
        if ( window.location.pathname == '/' ){
            // Index (home) page
        
        } else {
            // Other page
            $("#header").addClass("es-non-sticky");
     
        }
   });
   

    $("#newsletterForm").submit(function(e){
        e.preventDefault();
        $(".loader-wrapper").fadeIn("slow");
        var formObj = {
                    "Email": $("#newsletterForm #newsletter_email").val(),
                    "Referrer":referrerHTTP,
                    "MarketingGroup":marketingGroup,
                    "Campaign": es_page_title    
        };
        $.ajax(baseApiURL+'/api/formnewsletters', {
            type: 'POST',  // http method
            data: JSON.stringify(formObj),  // data to submit
            dataType: 'json',
            contentType: 'application/json',
            cache: false,
    		processData: false,
    		success: function (data, status, xhr) {
                $(".loader-wrapper").fadeOut("slow");
                window.location.href = "/thank-you";
            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log("Error");
                console.log(errorMessage);
                $(".loader-wrapper").fadeOut("slow");
            }
        });

    });
    
    
});

/*YouTube Modal view */

    $(document).ready(function(){
    var videoSrc = $("#video-1 iframe").attr("src");
$('#video-1').on('show.bs.modal', function () { // on opening the modal
  // set the video to autostart
  $("#video-1 iframe").attr("src", videoSrc+"&amp;autoplay=1");
});
$("#video-1").on('hidden.bs.modal', function (e) { // on closing the modal
  // stop the video
  $("#video-1 iframe").attr("src", null);
});
    });
    
     $(document).ready(function(){
    var videoSrc = $("#video iframe").attr("src");
$('#video').on('show.bs.modal', function () { // on opening the modal
  // set the video to autostart
  $("#video iframe").attr("src", videoSrc+"&amp;autoplay=1");
});
$("#video").on('hidden.bs.modal', function (e) { // on closing the modal
  // stop the video
  $("#video-1 iframe").attr("src", null);
});
    });
