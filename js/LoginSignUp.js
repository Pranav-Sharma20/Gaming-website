const pass_field = document.querySelector(".pass-key"); //sbse pehle pass key uthaen hum wo tha css m pass:key~valid mein
const showBtn = document.querySelector(".show"); //show ka bhi same hai css m
showBtn.addEventListener("click", function () { //agar show ke class prr hit hota hai toh kya krna hai wo hai neeche if else condition mein
  if (pass_field.type === "password") {  //sbse pehle show prr hit hone baad dekhta hai ki wo hai kya agar type aur value same hai aur wo password hai toh usko text mein convert krte hain
                                         //value aur type dono check krta hai 3 equal to
    pass_field.type = "text";
    showBtn.textContent = "HIDE";
    showBtn.style.color = "#3498db";
  } else {
    pass_field.type = "password";
    showBtn.textContent = "SHOW";
    showBtn.style.color = "#222";
  }
});
 
//show password show ni hoga kyoki html mein password wle mein pass-key class daalna hoga