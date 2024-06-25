chain=fuji

deploy:
	npx hardhat run --network $(chain) scripts/deploy.js