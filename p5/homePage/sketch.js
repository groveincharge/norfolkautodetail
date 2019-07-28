  let subFirst = " "
 let subLast = " ";
 let subEmail = " ";
 let subAddress = " ";
 let subCity = " ";
 let subState = " ";
 let subZip = " ";
 let subPhone = " ";

 let cusFirst = ' ';
 let cusLast = ' ';
 let cusEmail = ' ';
 let cusAddress = ' ';
 let cusCity = ' ';
 let cusState = ' ';
 let cusZip = ' ';
 let cusPhone = ' ';

 function hideForm(){
        suiteFour();
        suitesix();
        togglevacPicture();
        suiteseven();
        suitenine();
        suiteeight();
       };

    function togglevacPicture(){                
            let picture =  document.getElementById("vacImage");
            let features =  document.getElementById("vacDescription");
            let toggle =  document.getElementById("voggle").value;

                if((toggle) === ("description"))
                          {
                      if(features.style.display = "none")
                             {
                         features.style.display = "block";
                         picture.style.display = "none";
                             }
                        else
                          {
                           picture.style.display = "none";
                         }      
                       };
                                                
               if((toggle) === ('mini-Vac'))
                           {
                        if(picture.style.display = "none")
                              {
                             picture.style.display = "block";
                             features.style.display = "none";
                            } 
                            else
                              { features.style.display = "none";}
                           };
                        
               return false;
               
                };//end togglevacPicture

      function togglejumperPicture(){
                   let jumpPicture =  document.getElementById("jumpStarter");
                   let jumpFeatures =  document.getElementById("description");
                   let jumpToggle =  document.getElementById("joggle").value;

                if((jumpToggle) === ("description"))
                          {
                      if(jumpFeatures.style.display = "none")
                             {
                         jumpFeatures.style.display = "block";
                         jumpPicture.style.display = "none";
                             }
                        else
                          {
                           jumpPicture.style.display = "none";
                         }      
                       };
                                                
               if((jumpToggle) === ('jumpStarter'))
                           {
                        if(jumpPicture.style.display = "none")
                              {
                             jumpPicture.style.display = "block";
                             jumpFeatures.style.display = "none";
                            } 
                            else
                              { jumpFeatures.style.display = "none";}
                           };
               return false;
         };//end togglejumpPicture    

function suiteFour(){
          document.getElementById("subscribe").style.display = "block";
          document.getElementById("vacuumId").style.display = "none";
          document.getElementById("buyButton").style.display = "none";
          document.getElementById("subscribe").addEventListener("click", function(){
                                        document.getElementById("subscribe").style.display = "none";
                                        document.getElementById("vacuumId").style.display = "block";
                                                 });

           document.getElementById("vacuumId").addEventListener("click", function(){
                                        document.getElementById("vacuumId").style.display = "none";
                                         document.getElementById("buyButton").style.display = "block";
                                                 })
                                      };

  function suitesix(){
          document.getElementById("checkOut").style.display = "block";
          document.getElementById("productId").style.display = "none"; 
          document.getElementById("probuyButton").style.display = "none";
          document.getElementById("checkOut").addEventListener("click", function(){
                                        document.getElementById("checkOut").style.display = "none";
                                        document.getElementById("productId").style.display = "block"; 
                                                 });

           document.getElementById("productId").addEventListener("click", function(){
                                        document.getElementById("productId").style.display = "none";
                                        document.getElementById("probuyButton").style.display = "block";
                                                 })
                                      };

   function suiteseven(){
                  document.getElementById("vacIntro").style.display = "block";
                  document.getElementById("vacImage").style.display = "block"; 
                  document.getElementById("vacDescription").style.display = "none";
                  document.getElementById("showSubscriber").style.display = "none";
                  document.getElementById("subForm").style.display = "none"; 
                  document.getElementById("thanks").style.display = "none";
                  document.getElementById("voggle").style.display = "block";
                  document.getElementById("subscribe").addEventListener("click", function(){
                                     if(document.getElementById("vacDescription").style.display = "block"){
                                          document.getElementById("vacDescription").style.display = "none";
                                         };
                                         document.getElementById("vacIntro").style.display = "none";
                                         document.getElementById("vacImage").style.display = "none";  
                                         document.getElementById("subForm").style.display = "block";
                                         document.getElementById("voggle").style.display = "none";
                                                 });
                   document.getElementById("vacuumId").addEventListener("click", function(){ 
                                        document.getElementById("showSubscriber").style.display = "block";
                                        document.getElementById("subForm").style.display = "none"; 
                                        document.getElementById("thanks").style.display = "block";
                                        document.getElementById("voggle").style.display = "none";
                                        newSubscriber();
                                                 }) 
                 }; //end suiteseven   

        function suitenine(){
                  document.getElementById("jumperIntro").style.display = "block";
                  document.getElementById("jumpStarter").style.display = "block"; 
                  document.getElementById("description").style.display = "none";
                  document.getElementById("disclaimer").style.display = "none";
                  document.getElementById("showBuyer").style.display = "none"; 
                  document.getElementById("productForm").style.display = "none";
                  document.getElementById("joggle").style.display = "block";
                  document.getElementById("checkOut").addEventListener("click", function(){
                                 if(document.getElementById("description").style.display = "block"){
                                          document.getElementById("description").style.display = "none";
                                         };
                                         document.getElementById("jumperIntro").style.display = "none";
                                         document.getElementById("jumpStarter").style.display = "none";  
                                         document.getElementById("productForm").style.display = "block";
                                         document.getElementById("joggle").style.display = "none";
                                                 });
                   document.getElementById("productId").addEventListener("click", function(){ 
                                        document.getElementById("showBuyer").style.display = "block";
                                        document.getElementById("productForm").style.display = "none"; 
                                        document.getElementById("disclaimer").style.display = "block";
                                         newCustomer();
                                                 }) 
                 }; //end suitenine 
       function suiteeight(){
                      document.getElementById("intro").style.display = "block";
                      document.getElementById("serviceChart").style.display = "none"; 
                      document.getElementById("priceChart").style.display = "none";
                      document.getElementById("serviceInput").addEventListener("click", function(){ 
                                   document.getElementById("intro").style.display = "none";
                                   document.getElementById("serviceChart").style.display = "block";
                                   document.getElementById("priceChart").style.display = "none"; 
                                                 }); 
                      document.getElementById("priceInput").addEventListener("click", function(){ 
                                   document.getElementById("intro").style.display = "none";
                                   document.getElementById("serviceChart").style.display = "none";
                                   document.getElementById("priceChart").style.display = "block"; 
                                                 });
                   }; //end suiteeight                                                     

 function newSubscriber(){ 
              subFirst = document.getElementById('firstName').value;
              subLast = document.getElementById('lastName').value;
              subEmail = document.getElementById('email').value;
              subAddress = document.getElementById('address').value;
              subCity = document.getElementById('city').value;
              subState = document.getElementById('state').value;
              subZip = document.getElementById('zipCode').value;
              subPhone = document.getElementById('phoneNumber').value;
     loadJSON('/miniVac/'+subFirst+'/'+subLast+'/'+subEmail+'/'+subAddress+'/'+subCity+'/'+subState+'/'+subZip+'/'+subPhone, finished);
        function finished(data){ 
                              
                    
            };//end finished    
               displaySubscriber();                         
         };//end newSubscriber 

         function displaySubscriber() {
                   document.getElementById("displayStatus").innerHTML = "Subscription accepted.";
                   document.getElementById("displayfirstName").innerHTML = "First: "+subFirst;
                   document.getElementById("displaylastName").innerHTML = "Last: "+subLast;
                   document.getElementById("displayemail").innerHTML = "Email: "+subEmail;
                   document.getElementById("displayaddress").innerHTML = "Address: "+subAddress;
                   document.getElementById("displaycity").innerHTML = "City: "+subCity;
                   document.getElementById("displaystate").innerHTML = "State: "+subState; 
                   document.getElementById("displayzipCode").innerHTML = "Zip: "+subZip;
                   document.getElementById("displayphoneNumber").innerHTML = "Phone: "+subPhone;                   
                               };                    
                     
         function newCustomer(){ 
              cusFirst = document.getElementById('firstname').value;
              cusLast = document.getElementById('lastname').value;
              cusEmail = document.getElementById('Email').value;
              cusAddress = document.getElementById('Address').value;
              cusCity = document.getElementById('City').value;
              cusState = document.getElementById('State').value;
              cusZip = document.getElementById('zipcode').value;
              cusPhone = document.getElementById('phonenumber').value;

        loadJSON('/jumper/'+cusFirst+'/'+cusLast+'/'+cusEmail+'/'+cusAddress+'/'+cusCity+'/'+cusState+'/'+cusZip+'/'+cusPhone, finished);

        function finished(data){ 
                              
                    
            };//end finished   
               displayCustomer();                          
         };//end newSubscriber  

         function displayCustomer() {
                          document.getElementById("displaystatus").innerHTML = "We appreciate your purchase.";
                          document.getElementById("displayfirstname").innerHTML = "First Name: "+cusFirst;
                          document.getElementById("displaylastname").innerHTML = "Last Name: "+cusLast;
                          document.getElementById("displayEmail").innerHTML = "Email: "+cusEmail;
                          document.getElementById("displayAddress").innerHTML = "Address: "+cusAddress;
                          document.getElementById("displayCity").innerHTML = "City: "+cusCity;
                          document.getElementById("displayState").innerHTML = "State: "+cusState; 
                          document.getElementById("displayzipcode").innerHTML = "Zip Code: "+cusZip;
                          document.getElementById("displayphonenumber").innerHTML = "Phone Number: "+cusPhone;                     
                               };           
function draw() {
 
    };
