pragma solidity ^0.5.4;
 contract Inbox {
     string public message;
     uint public sum;
     constructor(string memory initialMesage) public {
         message=initialMesage;
         
     }
     function setMessage(string memory newMessage) public {
         message=newMessage;
     }
     
   
 }
 