class Blogpost extends HTMLElement{
    constructor(){
        super();
       
        const shadowRoot =  this.attachShadow({
            mode: "open"
        })

      shadowRoot.innerHTML = 
   `
   <style>
            
                /* Style for the input box */
                input[type="text"] {
                    padding: 10px;
                    border: 2px solid #ccc;
                    border-radius: 4px;
                    margin-right: 10px;
                    font-size: 16px;
                }
                /* Style for the submit button */
                button {
                    padding: 10px 20px;
                    background-color: blue;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                }
                /* Hover effect for the submit button */
                button:hover {
                    background-color: #218838;
                }
                /* Style for the status paragraph */
                p {
                    margin-top: 50px;
                    font-size: 14px;
                    color: #555;
                }
                
            </style>
    <div >
    <input type="text" placeholder="Enter the pincode" id="pincode"  /> 
    <button id="submitBtn" >Submit</button>
    </div>   
    <p id="printstatus"> </p>
    `
    } 

    
    connectedCallback() {
        this.shadowRoot.querySelector('#submitBtn').addEventListener('click', () => submit(this.shadowRoot));
    }

   
}
   

customElements.define("blog-post", Blogpost );


const submit =  (shadowRoot) =>{
        let pincode = shadowRoot.querySelector("#pincode").value;
        if( pincode.length != 6)
         {
            shadowRoot.querySelector("#printstatus").innerText = "Invalid pincode ! Please write the correct one...";
             
         }
         else{
             let url =" https://api.postalpincode.in/pincode/" + pincode;
             let data = "<table align='center' border='' cellspacing='0px' cellpadding='10px' >";
             data = data + "<tr> <th> Place </th> <th> Delivery Status </th> </tr>"
             fetch(url)
             .then(response => response.json())
             .then(responsedata =>{
                if( responsedata[0].PostOffice &&  responsedata[0].PostOffice.length > 0)
                    {
                        responsedata[0].PostOffice.map( (place, index )=>
                       {
                            data = data + "<tr key={index} style='align:center;'> <td>" + place.Name + " </td> <td> " + place.DeliveryStatus +  "</td> </tr>"
                        })
         
                         data = data + "</table>"
                         shadowRoot.querySelector("#printstatus").innerHTML = data;
                    }
              else{
                shadowRoot.querySelector("#printstatus").innerText = "No place exist at given pincode !!";
              }
           
                 
             })
         }
     }








