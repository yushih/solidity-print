Although Ethereum has debugging/tracing support for transactions (e.g. 
https://truffleframework.com/tutorials/debugger-variable-inspection, Geth `debug_traceTransaction` API and remix debugger),
old habits die hard and I miss being able to `print()` in my code at develop time, so I patched truffle's EVM to make `print()` available.

To use it, first apply patches on this branch to your local ethereum-vm repo https://github.com/yushih/ethereumjs-vm/commits/print . Then have your truffle load the patched ethereum-vm or rebuild truffle with it. Note truffle depends on ganache-cli which depends on ganache-core which depends on ethereum-vm. The process is a little tricky due to truffle's strange structure. I will work on an automation to simplified it.

Then import print.sol in your code, this is the only file required for usage, all other files in this repo are development facillities and are not required for usage. Now you can print like a boss:

```
import './print.sol';

contract Foo {
  function bar () {
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
```
You should see this in the console where truffle/ganache-cli runs:
```
-10 42 true false 00000000000000000000000000000000000000000000000000000000deadbeef 00000000000000000000000000000000000000000000000000000000000000ff e50e30d57d8fe8a72799ae882effca0ac89fae3c 68656c6c6f zzzzkrr
```
Note that estimating gas actually executes the code, so you may see duplicate outputs.

That's it. I find it very handy.
