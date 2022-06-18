
let search=document.getElementById('search');
search.addEventListener('click',function(){
    let link=document.getElementById('link');
    link.style.opacity = "1";
    let today=new Date();
        let hour=today.getHours();
        let min=today.getMinutes();
        let second=today.getSeconds();
        console.log(hour,min,second);
        
                var currenttime = new Date();
        currenttime.setHours(hour,min,second);

        //Create date object and set the time to that
        var settime = new Date(currenttime);
        settime.setHours(6,10,45);


    let timing=document.getElementById('timing');
    let scdtiming=document.getElementById('scdtiming');
    if(currenttime>settime){
        timing.innerText='13:10';
        // console.log(timing.innerText);
        scdtiming.innerText='13:30'
    }
    else{
        timing.innerText='10:15';
        
    }
})
