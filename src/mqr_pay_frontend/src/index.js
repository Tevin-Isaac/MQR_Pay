import { createActor, mqr_pay_backend } from "../../declarations/mqr_pay_backend";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";


let actor = mqr_pay_backend;

console.log(process.env.CANISTER_ID_INTERNET_IDENTITY);


const loginButton = document.getElementById("login");

loginButton.onclick = async (e) => {

    //I  want to set a delay here
    var delayInMilliseconds = 1000; //1 second

    setTimeout(function() {
      //your code to be executed after 1 second
      var element5 = document.getElementById("accept_payment");
      element5.style.display = "block";
  
      var element1 = document.getElementById("login");
      element1.style.display = "none";
      var element2 = document.getElementById("login2");
      element2.style.display = "none";
      var element3 = document.getElementById("login3");
      element3.style.display = "none";
      var element4 = document.getElementById("login4");
      element4.style.display = "none";

    }, delayInMilliseconds);
  


    e.preventDefault();

    // create an auth client
    let authClient = await AuthClient.create();

    // start the login process and wait for it to finish
    await new Promise((resolve) => {
        authClient.login({
            identityProvider:
                process.env.DFX_NETWORK === "ic"
                    ? "https://identity.ic0.app"
                    : `http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943`,
            onSuccess: resolve,
        });
    });


    // At this point we're authenticated, and we can get the identity from the auth client:
    const identity = authClient.getIdentity();
    // Using the identity obtained from the auth client, we can create an agent to interact with the IC.
    const agent = new HttpAgent({ identity });
    // Using the interface description of our webapp, we create an actor that we use to call the service methods.
    actor = createActor(process.env.CANISTER_ID_II_INTEGRATION_BACKEND, {
        agent,
    });

    console.log("After loading");

    return false;
};





//-------------
// document.querySelector("form").addEventListner("submit", async (e) => {
//   e.PreventDefault();
//   const button = e.target.


// }

// whoAmIButton.onclick = async (e) => {
//   e.preventDefault();
//   whoAmIButton.setAttribute("disabled", true);
//   const principal = await actor.whoami();
//   whoAmIButton.removeAttribute("disabled");
//   document.getElementById("principal").innerText = principal.toString();
//   return false;
// };

//----------------

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const name = document.getElementById("name").value.toString();

//   button.setAttribute("disabled", true);

//   // Interact with foo actor, calling the greet method
//   const greeting = await mqr_pay_backend.greet(name);

//   button.removeAttribute("disabled");

//   document.getElementById("greeting").innerText = greeting;

//   return false;
// });

