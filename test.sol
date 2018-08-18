pragma solidity ^0.4.19;

import './print.sol';

contract Test {
    int public answer ;

    function Test () {
        answer = 42;
        Print(0x0)
        .Int256(-10)
        .Uint256(42)
        .Bool(true)
        .Bool(false)
        .Bytes32(0xdeadbeef)
        .Bytes32(0xff)
        .Address(this)
        .Bytes("hello")
        .String("zzzzkrr")
        .nl();
    }
}
