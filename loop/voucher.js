let myArray = [];
let myObj = {};
let i;

                // voucher function starts here
function myGen() {
    inp.innerText = "";

    for (let i = 0; i <=inp.value; i++) {
        let myRandomm = Math.floor(Math.random()*100000000000000000);

        let myObj ={
            myNetwork: netWork.value,
            myAmount: amoUnt.value,
            myPin: myRandomm,
            state:"Not used",
        }
        display.innerHTML +=`<div style="background-color:black; color:white;"> ${myObj.myNetwork} <span style="margin-left:230px">${myObj.myAmount}</span></div> </br> ${myObj.myPin} </br>`
       console.log(myObj.myPin);
        myArray.push(myObj);
        localStorage.voucherMe = JSON.stringify(myArray)
        
    }
    
}

function myGet() {
    let diss = JSON.parse(localStorage.voucherMe);
    let nNetwork;
    let nAmount;
    let nPin;
    for (let i = 0; i < diss.length; i++) {
        let nNetwork = diss[i].myNetwork;
        let nAmount = diss[i].myAmount;
        let nPin = diss[i].myPin;
        display.innerHTML += `</br> ${nNetwork} </br>${nPin}  `
        
        
    }

    
}

// voucher function ends here

// my blank phone starts here

function myTouch() {
    phone1.style.display = "none";
    phone_2.style.display = "block";
}
// my blank phone ends here


// phone  lockscreen function starts here

// the time itself function starts
function myTime() {
    let mmY = new Date();
    time = mmY.toTimeString();
    myTimmy.innerHTML = time;
    setTimeout(myTime, 1000); 
    
}
myTime();
// the time itself function ends
// sub day
const days = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
const d = new Date();
let day = days[d.getDay()];
document.getElementById("myDay").innerHTML = day;

let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
let mT = new Date();
let month = months[mT.getMonth()];
myMonth.innerHTML= month

const dG = new Date();
myNum.innerHTML = dG.getDate()
//sub day

function myTouchOne() {
    phone_2.style.display = "none";
    phone_3.style.display = "block";
    
}
// password starts here
function myPass(num) {
    inpPass.value +=num;
    
}

 function myOkeyy(){

      if( inpPass.value == ""){
         passyInfo.innerHTML = `Enter your pin `
         inpPass.value =""
      } else if( inpPass.value != 1234){
        
          flow.innerText= "Wrong pin"
          inpPass.value =""
      } 
    else{
         phone_3.style.display = "none";
         phone_4.style.display = "block";  

     }
    
 }
// phone shotcut on lockscreen
function phonnyLock() {
    phone_2.style.display = "none"
    phone_3.style.display = "block";
        
       
    
}

// phone shotcut on lockscreen ends
//password ends here
// phone  lockscreen function ends here

function myTime2() {
    let mmA = new Date();
    time = mmA.toTimeString();
    myTim2.innerHTML =  mmA.getHours();
    setTimeout(myTime2, 1000); 
    
}
myTime2();

function myTime3() {
    let mmAy = new Date();
    time = mmAy.toTimeString();
    myTim3.innerHTML =  mmAy.getMinutes();
    if( myTim3.innerHTML <=9){
        myTim3.innerHTML = "0"+ mmAy.getMinutes();
    } else{
        myTim3.innerHTML =  mmAy.getMinutes();
    }
    setTimeout(myTime3, 1000); 
    
}
myTime3();

const days1 = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
const g = new Date();
let exactDay = days1[g.getDay()];
dayMi.innerHTML = exactDay

const month1 =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
const x = new Date();
let exactMonth = month1[x.getMonth()];
monthMi.innerHTML = exactMonth

const fG = new Date();
myNum1.innerHTML = fG.getDate()

// the phonebook section function
function myPhone() {
    phone_4.style.display = "none";
    phone_5.style.display = "block";
   
    
}

function myDial(numOne) {
    inpDig.value += numOne
    
}

// call function starts here
function callOut(){
    if(inpDig.value == ""){
        document.getElementById("mtn1").disabled= true
    }else{
        phone_5.style.display ="none";
     selectNetwork.style.display = "block"

    }
    
      
    
}

if (localStorage.accountBal == null) {
    localStorage.setItem("accountBal", "");
    
}
let allMyBalance = {
    mtnBalance:0,
    gloBalance: 0,
    airtelBalance:0,
    mobolBalance : 0
}
if (localStorage.accountBal == "") {
    localStorage.setItem("accountBal",JSON.stringify(allMyBalance))
}
 bal = amoUnt.value++;
 

function myMTN() {
    let searchMyNet= JSON.parse(localStorage.getItem("voucherMe"))
    bal = amoUnt.value++;
    if(inpDig.value.includes("*555*") ){
     for (let m = 0; m < searchMyNet.length; m++) {
        let searchCode = searchMyNet[m].myPin;
        phone_5.style.display = "none";
        selectNetwork.style.display="none";
        phone_6.style.display ="none";
        phone_7.style.display = "none";
        phone_5b.style.display = "none";
         phone_8.style.display = "block"
        outPut.style.display  = "block" 
      let myBalance = parseInt (searchMyNet[m]. myAmount)
    //    let getS = JSON.parse(localStorage.getItem("accountBal")) 
    //    getS. mtnBalance += myBalance
    let getS = JSON.parse(localStorage.getItem("accountBal"))
    getS.mtnBalance += myBalance
        outPut.innerHTML= `Recharge successful. Your account has been credited with MTN ${searchMyNet[m]. myAmount} and your main balane is  ${getS.mtnBalance }  `
               inpDig.value = ""
               localStorage.setItem("accountBal", JSON.stringify(getS))
console.log(getS.mtnBalance);
console.log(getS);
    
            
        }
            
     } else if(inpDig.value.includes("*556#")){
            localStorage.setItem("accountBal",JSON.stringify(allMyBalance))
            let myGet = JSON.parse(localStorage.getItem("accountBal"));    
            let showMyBalance = myGet.mtnBalance;
            phone_5.style.display = "none";
            selectNetwork.style.display="none";
            phone_6.style.display ="none";
            phone_7.style.display = "none";
            phone_5b.style.display = "none";
            phone_8.style.display = "none";
            outPut.style.display  = "none"
            phone_bal.style.display = "block";
            bal = amoUnt.value++;
            outBal.innerHTML = `Your main balance is ${bal}`  
            inpDig.value = ""
            
     }else if(inpDig.value.length < 11){
        phone_5.style.display = "none";
        selectNetwork.style.display="none";
        phone_6.style.display ="none";
        phone_7.style.display = " none";
             phone_5b.style.display = "block"
            report.innerHTML = `<div style="transform: translateY(40px);">${inpDig.value} is invalid Number</div>`

    }else if (inpDig.value.includes('081')||('090')||("070")||("091")||("080")||("+234")){
        caLLer.innerHTML =`${inpDig.value}   <span><img src="/loop/images/sim-removebg-preview.png" alt="" style="background-color:yellow;height: 30px; width: 30px;border-radius: 50%;transform: translateY(30px);margin-left: -110px;"></span>  </br> </br>  <span style="margin-left:22px;"> calling... </span> `;
        phone_5.style.display = "none";
        selectNetwork.style.display="none";
        phone_6.style.display ="block";
        phone_7.style.display = " block"
        

    } else if(inpDig.value.length ===11){
                phone_5.style.display = "none";
                selectNetwork.style.display="none";
                phone_6.style.display ="block";
                phone_7.style.display = " block"
               

            }



        }

        // let myObj ={
        //     myNetwork: netWork.value,
        //     myAmount: amoUnt.value,
        //     myPin: myRandomm,
        //     state:"Not used",
        // }


        

    
    


// function myMTN(){
//      if(inpDig.value.length ==22){
//          let getNetwork = JSON.parse(localStorage.getItem("voucherMe"));
//          for (let m = 0; m < getNetwork.length; m++) {
//             let getMyCode = getNetwork[m].myPin;
//            if((inpDig.value.slice(0,5)=="*555*")&& (getMyCode.search(inpDig.value.slice(5,22)) !=-1) && (inpDig.value.slice(22,23)=="#")&&(getNetwork[m].myNetwork =="MTN")&&(getNetwork[m].state =="Not used")){
//             alert("hello")
//             // getNetwork[m].state =="used"
//             // phone_5.style.display ="none";
//             // selectNetwork.style.display = "none";
//             // phone_5b.style.display = "block";
            

//             }
//          }
            
//          }

//    }

    
// } 

//function callOut() {
//if( (inpDig.value == "") && (inpDig.value.length <11)){
  //  alert("empty")



//} 
//else if(inpDig.value.includes('*556#')){
  //  phone_5.style.display = "none"; // mtn
   //myNett.style. display ="block";
    
    




//}
//  else if(inpDig.value.includes('#124#')){
//     phone_5.style.display = "none"; //glo
//     myNett.style. display ="block"


// }else if(inpDig.value.includes('*123#')){
//     phone_5.style.display = "none"; //airtel
//     myNett.style. display ="block"


// } else if(inpDig.value.includes('*232#')){
//     phone_5.style.display = "none";//9mobile
//     myNett.style. display ="block"


//}
//else if(inpDig.value.length <11){

//     phone_5.style.display = "none";
//     phone_5b.style.display = "block"
//     report.innerHTML = `<div style="transform: translateY(40px);">${inpDig.value} is invalid Number</div>`
    
    

// }
//else {
    //phone_5.style.display = "none";
  //  selectNetwork.style. display ="block"
    
//}    
//}
// pop up message
function myBack(){
    
    phone_5b.style.display = "none"
    phone_5.style.display = "block";
    outPut.style.display = "none"
    
    
    
}
//pop for invalid end
// clear function
function del() {
    let clear = inpDig.value;
    inpDig.value = clear.slice(0,-1)
    
}
// call function  ends here

// network selection to call
function pickNetwork() {
    // caLLer.innerHTML =`${inpDig.value} </br> <div style="margin-left:40px">${netWork1.value}</div> </br> <div style="margin-top:-20px;margin-left:30px">calling....</div>`;
    // myNett.style. display ="none";
    // phone_6.style. display ="block";
    // phone_7.style.display = "block";

    if( netWork1.MTN.includes('*556#')){
         alert("win")              //for mtn

    } else if (inpDig.value.length <11){
        phone_5.style.display = "none";
    phone_5b.style.display = "block"
    report.innerHTML = `<div style="transform: translateY(40px);">${inpDig.value} is invalid Number</div>`
    

    }

}
// network selection to call end
sim.innerHTML =`<div style="margin-left:150px;">MTN</div>`


// end call for mr A's phone
function myEnd() {
    phone_6.style. display ="none";
    phone_7.style.display = "none";
    phone_5.style. display ="block";
    


    
}


function mbalBack() {
    phone_bal.style.display = "none"
    phone_5.style.display = "block";
   
    
}
