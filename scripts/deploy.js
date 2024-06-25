require("hardhat");

async function main() {
    console.log("Deploying contract");
    const TEST = await ethers.deployContract("Test");
    const test = await TEST.waitForDeployment();
    console.log("Verifying TEST contract on explorer");
    run("verify:verify", {
        address: test.target,
        constructorArguments: [],
    });
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
