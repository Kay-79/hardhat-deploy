require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
    solidity: "0.8.0",
    networks: {
        hardhat: {
            chainId: 1,
        },
        bsctest: {
            url: `${process.env.RPC}`,
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
        dostest: {
            url: "https://test.doschain.com",
            accounts: [process.env.PRIVATE_KEY],
        },
        bsctest: {
            url: `${process.env.RPC}`,
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
        fuji: {
            url: `${process.env.RPC}`,
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
    },
    etherscan: {
        apiKey: {
            bscTestnet: process.env.EXPLORER_API_KEY,
            sepolia: process.env.EXPLORER_API_KEY,
            avalancheFujiTestnet: process.env.EXPLORER_API_KEY,
        },
    },
    defaultNetwork: "1",
};
