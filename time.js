
        let time = new Date();
        console.log(time);
        let first = document.getElementById('first')
        let second = document.getElementById('second')
        let third = document.getElementById('third')
        let fourth = document.getElementById('fourth')
        let min = time.getMinutes();
        let hour = time.getHours();
        if (hour < 7 ) {
            first.innerText='ev will start at 7:15'
            second.innerText = ''
                third.innerText = 'ev will start at 7:15'
                fourth.innerText = ''
            // console.log('ev will start at 7:15')
        }
        else if (hour == 7 ) {
            if (min > 0 && min < 15) {
                first.innerText = time.getHours() + ':' + '00';
                second.innerText = time.getHours() + ':' + '15';
                third.innerText = time.getHours() + ':' + '15';
                fourth.innerText = time.getHours() + ':' + '30';
            }
            else if (min > 15 && min <= 30) {
                first.innerText = time.getHours() + ':' + '15';
                second.innerText = time.getHours() + ':' + '30';
                third.innerText = time.getHours() + ':' + '30';
                fourth.innerText = time.getHours() + ':' + '45';
            }
            else if (min > 30 && min <= 45) {
                first.innerText = time.getHours() + ':' + '30';
                second.innerText = time.getHours()  + ':' + '45';
                third.innerText = time.getHours() + ':' + '45';
                fourth.innerText = time.getHours() + 1 + ':' + '00';
            }
            else if (min > 45 && min < 59) {
                first.innerText = time.getHours() + ':' + '45';
                second.innerText = time.getHours() + 1 + ':' + '00';
                third.innerText = time.getHours() + 1 + ':' + '00';
                fourth.innerText = time.getHours() + 1 + ':' + '15';
            }
        }
        else if ((hour <= 8 && min<30) ) {
            if (min >= 0 && min < 15) {
                first.innerText = time.getHours() + ':' + '00';
                second.innerText = time.getHours() + ':' + '15';
                third.innerText = time.getHours() + ':' + '15';
                fourth.innerText = time.getHours() + ':' + '30';
            }
            else if (min > 15 && min <= 30) {
                first.innerText = time.getHours() + ':' + '15';
                second.innerText = time.getHours() + ':' + '30';
                third.innerText = time.getHours() + ':' + '30';
                fourth.innerText = time.getHours() + ':' + '45';
            }
            
        }
        else if (hour ==10 ) {
            if (min > 0 && min <= 10) {
                first.innerText = time.getHours() + ':' + '00';
                second.innerText = time.getHours() + ':' + '10';
                third.innerText = time.getHours() + ':' + '10';
                fourth.innerText = time.getHours() + ':' + '20';
            }
            else if (min > 10 && min <= 20) {
                first.innerText = time.getHours() + ':' + '10';
                second.innerText = time.getHours() + ':' + '20';
                third.innerText = time.getHours() + ':' + '20';
                fourth.innerText = time.getHours() + ':' + '30';
            }
            else if (min > 20 && min <= 30) {
                first.innerText = time.getHours() + ':' + '20';
                second.innerText = time.getHours() + ':' + '30';
                third.innerText = time.getHours() + ':' + '30';
                fourth.innerText = time.getHours() + ':' + '40';
            }
            else if (min > 30 && min <= 45) {
                first.innerText = time.getHours() + ':' + '30';
                second.innerText = time.getHours()  + ':' + '45';
                third.innerText = time.getHours() + ':' + '45';
                fourth.innerText = time.getHours() + 1 + ':' + '00';
            }
            else if (min > 45 && min < 59) {
                first.innerText = time.getHours() + ':' + '45';
                second.innerText = time.getHours() + 1 + ':' + '00';
                third.innerText = time.getHours() + 1 + ':' + '00';
                fourth.innerText = time.getHours() + 1 + ':' + '15';
            }
        }
        else if (hour ==11 ) {
            if (min >= 0 && min < 30) {
                first.innerText = time.getHours() + ':' + '00';
                second.innerText = time.getHours() + ':' + '30';
                third.innerText = time.getHours() + ':' + '15';
                fourth.innerText = time.getHours() + ':' + '40';
            }
            else if (min >30 && min <= 50) {
                first.innerText = time.getHours() + ':' + '30';
                second.innerText = time.getHours() + ':' + '50';
                third.innerText = time.getHours() + ':' + '40';
                fourth.innerText = time.getHours()+1 + ':' + '00';
            }
            else if (min >50 && min <= 59) {
                first.innerText = time.getHours() + ':' + '50';
                second.innerText = time.getHours() +1 + ':' + '15';
                third.innerText = time.getHours() +1+ ':' + '00';
                fourth.innerText = time.getHours() + 1 + ':' + '30';
            }
            
        }
        else if (hour ==12 ) {
            if ( min <= 15) {
                first.innerText = time.getHours()-1 + ':' + '50';
                second.innerText = time.getHours() + ':' + '00';
                third.innerText = time.getHours() + ':' + '15';
                fourth.innerText = time.getHours() + ':' + '30';
            }
            else if(min>15 && min<30){
                first.innerText = time.getHours() + ':' + '15';
                second.innerText = time.getHours() + ':' + '30';
                third.innerText = time.getHours() + ':' + '30';
                fourth.innerText = time.getHours() + ':' + '40';
            }
            else{
                 if (min > 30 && min <= 40) {
                    first.innerText = time.getHours() + ':' + '30';
                    second.innerText = time.getHours()  + ':' + '40';
                    third.innerText = time.getHours() + ':' + '40';
                    fourth.innerText = time.getHours()  + ':' + '50';
                }
                else if (min >40 && min <=50) {
                    first.innerText = time.getHours() + ':' + '40';
                    second.innerText = time.getHours()  + ':' + '50';
                    third.innerText = time.getHours()  + ':' + '50';
                    fourth.innerText = time.getHours() + 1 + ':' + '00';
                }
                else if (min >50 && min <=59) {
                    first.innerText = time.getHours() + ':' + '50';
                    second.innerText = time.getHours()+1  + ':' + '00';
                    third.innerText = time.getHours()+1  + ':' + '00';
                    fourth.innerText = time.getHours() + 1 + ':' + '10';
                }
            }  
        }
        else if (hour ==13 ) {
           
            if (min > 0 && min <= 10) {
                    first.innerText = time.getHours() + ':' + '00';
                    second.innerText = time.getHours() + ':' + '10';
                    third.innerText = time.getHours() + ':' + '10';
                    fourth.innerText = time.getHours() + ':' + '20';
                }
                else if (min >= 10 && min <= 20) {
                    first.innerText = time.getHours() + ':' + '10';
                    second.innerText = time.getHours() + ':' + '20';
                    third.innerText = time.getHours() + ':' + '20';
                    fourth.innerText = time.getHours() + ':' + '30';
                }
                else{
                    first.innerText ='no ev till 17:40'
                    second.innerText = ''
                    third.innerText =''
                    fourth.innerText = ''
                }
            }  
        
        else if(hour==17 && min>40){
             if (min >40 && min <=50) {
                    first.innerText = time.getHours() + ':' + '40';
                    second.innerText = time.getHours()  + ':' + '50';
                    third.innerText = time.getHours()  + ':' + '50';
                    fourth.innerText = time.getHours() + 1 + ':' + '00';
                }
                else if (min >50 && min <=59) {
                    first.innerText = time.getHours() + ':' + '50';
                    second.innerText = time.getHours()+1  + ':' + '00';
                    third.innerText = time.getHours()+1  + ':' + '00';
                    fourth.innerText = time.getHours() + 1 + ':' + '10';
                }
        }
        else if((hour>=18 && hour<20) || ((hour>=8 ) && hour<10)){
                if (min > 0 && min <= 10) {
                    first.innerText = time.getHours() + ':' + '00';
                    second.innerText = time.getHours() + ':' + '10';
                    third.innerText = time.getHours() + ':' + '10';
                    fourth.innerText = time.getHours() + ':' + '20';
                }
                else if (min > 10 && min <= 20) {
                    first.innerText = time.getHours() + ':' + '10';
                    second.innerText = time.getHours() + ':' + '20';
                    third.innerText = time.getHours() + ':' + '20';
                    fourth.innerText = time.getHours() + ':' + '30';
                }
                else if (min > 20 && min <= 30) {
                    first.innerText = time.getHours() + ':' + '20';
                    second.innerText = time.getHours() + ':' + '30';
                    third.innerText = time.getHours() + ':' + '30';
                    fourth.innerText = time.getHours() + ':' + '40';
                }
                else if (min > 30 && min <= 40) {
                    first.innerText = time.getHours() + ':' + '30';
                    second.innerText = time.getHours()  + ':' + '40';
                    third.innerText = time.getHours() + ':' + '40';
                    fourth.innerText = time.getHours()  + ':' + '50';
                }
                else if (min >40 && min <=50) {
                    first.innerText = time.getHours() + ':' + '40';
                    second.innerText = time.getHours()  + ':' + '50';
                    third.innerText = time.getHours()  + ':' + '50';
                    fourth.innerText = time.getHours() + 1 + ':' + '00';
                }
                else if (min >50 && min <=59) {
                    first.innerText = time.getHours() + ':' + '50';
                    second.innerText = time.getHours()+1  + ':' + '00';
                    third.innerText = time.getHours()+1  + ':' + '00';
                    fourth.innerText = time.getHours() + 1 + ':' + '10';
                }
            }
            else if(hour==20){
                if (min >= 0 && min <= 10) {
                    first.innerText = time.getHours() + ':' + '00';
                    second.innerText = time.getHours() + ':' + '10';
                    third.innerText = time.getHours() + ':' + '10';
                    fourth.innerText = time.getHours() + ':' + '20';
                }
                else if (min > 10 && min <= 20) {
                    first.innerText = time.getHours() + ':' + '10';
                    second.innerText = time.getHours() + ':' + '20';
                    third.innerText = time.getHours() + ':' + '20';
                    fourth.innerText = time.getHours() + ':' + '30';
                }
                else if (min > 20 && min <= 30) {
                    first.innerText = time.getHours() + ':' + '20';
                    second.innerText = time.getHours() + ':' + '30';
                    third.innerText = time.getHours() + ':' + '30';
                    fourth.innerText = time.getHours() + ':' + '40';
                }
                else if (min > 30 && min <= 45) {
                    first.innerText = time.getHours() + ':' + '30';
                    second.innerText = time.getHours() + ':' + '45';
                    third.innerText = time.getHours() + ':' + '45';
                    fourth.innerText = time.getHours()+1 + ':' + '00';
                }
                else if (min > 45 && min <= 59) {
                    first.innerText = time.getHours() + ':' + '45';
                    second.innerText = time.getHours()+1 + ':' + '00';
                    third.innerText = time.getHours()+1 + ':' + '00';
                    fourth.innerText = time.getHours()+1 + ':' + '15';
                }
            }
            else{
                if(hour==21){
                 if (min >= 0 && min <= 30) {
                    first.innerText = time.getHours() + ':' + '00';
                    second.innerText = time.getHours() + ':' + '30';
                    third.innerText = time.getHours() + ':' + '15';
                    fourth.innerText = time.getHours()+1 + ':' + '40';
                }
                else if (min > 30 && min <= 50) {
                    first.innerText = time.getHours() + ':' + '30';
                    second.innerText = time.getHours() + ':' + '50';
                    third.innerText = time.getHours() + ':' + '40';
                    fourth.innerText = time.getHours()+1 + ':' + '00';
                }
                else if (min > 50 && min <= 59) {
                    first.innerText = time.getHours() + ':' + '50';
                    second.innerText = time.getHours()+1 + ':' + '15';
                    third.innerText = time.getHours() + ':' + '00';
                    fourth.innerText = time.getHours()+1 + ':' + '30';
                }
                }
                else if(hour==22){
                 if (min > 0 && min <= 15) {
                    first.innerText = time.getHours()-1 + ':' + '50';
                    second.innerText = time.getHours() + ':' + '15';
                    third.innerText = time.getHours() + ':' + '00';
                    fourth.innerText = time.getHours() + ':' + '30';
                }
                else if (min > 15 && min <= 30) {
                    first.innerText = time.getHours() + ':' + '15';
                    second.innerText = time.getHours() + ':' + '30';
                    third.innerText = time.getHours() + ':' + '30';
                    fourth.innerText = time.getHours()+1 + ':' + '00';
                }
                else if (min > 30 && min <= 59) {
                    first.innerText = time.getHours() + ':' + '30';
                    second.innerText = time.getHours()+1 + ':' + '00';
                    third.innerText = time.getHours()+1 + ':' + '00';
                    fourth.innerText = time.getHours()+1 + ':' + '15';
                }
                }
                else if(hour==23){
                 if (min > 0 && min <= 15) {
                    first.innerText = time.getHours() + ':' + '00';
                    second.innerText = time.getHours() + ':' + '15';
                    third.innerText = time.getHours() + ':' + '15';
                    fourth.innerText = time.getHours() + ':' + '30';
                }
                else if (min > 15 && min <= 30) {
                    first.innerText = time.getHours() + ':' + '15';
                    second.innerText = time.getHours() + ':' + '30';
                    third.innerText = time.getHours() + ':' + '30';
                    fourth.innerText = time.getHours() + ':' + '45';
                }
                else{
                    first.innerText = time.getHours() + ':' + '30';
                    second.innerText = 'No ev now'
                    third.innerText = time.getHours() + ':' + '45';
                    fourth.innerText ='No ev now'
                }
                }
                else{
                    first.innerText ='no ev till 17:40'
                    second.innerText = ''
                    third.innerText =''
                    fourth.innerText = ''
                }
            }
            
        
    