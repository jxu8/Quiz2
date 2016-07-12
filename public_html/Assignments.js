/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Assignments = (function (){
    //Assignment1
    var assignment1=function(){
        var userName = document.myform.username.value;
        var passWord = document.myform.password.value;
        document.getElementById("username").innerHTML = "Username: " + userName;
        document.getElementById("password").innerHTML = "Password: " + passWord;
    };
    
    return {
      assignment1: assignment1  
    };
})();

