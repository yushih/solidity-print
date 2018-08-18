SOLC = solc

test: test.sol.json
	node test.js

test.sol.json: test.sol
	$(SOLC) --combined-json bin,abi $^ > $@

