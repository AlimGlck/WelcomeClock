


function NameWriter(){

    let div = document.querySelector("#div");
                
     let ad = prompt("Adınızı Giriniz:");

     

     div.classList.remove("hide");

     let ad1=  document.getElementById("myName"); 

     ad1.innerHTML = ad;

     time();

}





function timeCorrector(i){

   return i<10 ? "0" + i: i;

}

function time(){
    setTimeout(time,1000);
    
    let date = new Date();    
    let time1 = timeCorrector(date.getSeconds()); 
    let time2 =timeCorrector(date.getHours());
    let time3= timeCorrector(date.getMinutes()); 
    let gun = DayWriter();


    let zaman = document.getElementById("myClock");
    zaman.innerHTML = `${time2}:${time3}:${time1} ${gun} `

    

     

    
}

function DayWriter(){
    let date1= new Date();
    let day = date1.getDay();
    let kalan = day%7;
    switch(kalan){
        case 0:
         return " Pazar";
           
        case 1:
         return "Pazartesi";
           
        case 2:
         return "Salı";
           
        case 3:
         return "Çarşamba";
           
        case 4:
         return "Perşembe";
           
        case 5:
         return "Cuma";
           
        case 6:
         return "Cumartesi";
           
            default:
         return    "Yanlış Zaman";
        }
        
}


