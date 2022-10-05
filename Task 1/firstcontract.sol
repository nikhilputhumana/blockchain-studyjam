pragma solidity ^0.8.9;

contract mycontract {
    uint256 public a;

    function changeval(uint256 n) public {
        a = n;
    }

    function retval() public view returns(uint256) {
        return a;
    }
}