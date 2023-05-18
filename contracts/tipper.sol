// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;


contract tipper{
    
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner; //owner is going to recieve the funds
    constructor(){
        owner = payable(msg.sender);

    } 
    function sendTip(string calldata name,string calldata message) external payable{
        require(msg.value>0,"Come on send me a little something");
        owner.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp,msg.sender));
    
    }
    function getMemos() public view returns(Memo[] memory){
        return memos;
    }
}