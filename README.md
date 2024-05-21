# This is a assignment that is all about the checking pincode place delivery status

## In this assignment I have used HTML, CSS and JAVASCRIPT  and build from scratch

### For this I made a Custom component class Blogpost and define it as tag blog-post
    Here, in this custom tag i made input box and button for submitting.  And for controlling it's subcomponent accessibility i used shadowRoot. This shadowRoot have mode open or closed. 
    This shadowRoot make the ShadowDOM (create new DOM tree for that component). This ShadowDOM is object based not class based. For Accessing it's subcomponent one have to start from ShadowRoot.
    At submit, submit function have been called, I defined this submit function outside the class. we can define it inside also. 

    Because ShadowDOM is object specific, so whenever we called the submit function we have to send the object for which we are calling it.
    
