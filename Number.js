let form = document.querySelector(".form")
let msg=document.querySelector(".msg")
let Generate =document.querySelector(".Generate")



let num= Math.floor(Math.random()*10)




//function to generate new number
Generate.addEventListener("click",()=>
    {
        msg.innerText="";
       document.querySelector(".Input").value='';
       window.location="Guess.html"
       
    })

    


//function to play game
form.addEventListener("submit",function(event)
{
    event.preventDefault()

    let User=document.querySelector("Input").value
    if(num==User)
        {
            msg.innerText= "You win "
        }
        else if(User<num)
            {
                msg.innerText=" User Value is Lower than the Actual Number"
            }
            else if(num<User)
                {
                    msg.innerText="  User Value is Greater than the Actual Number"
                }  
            
})

