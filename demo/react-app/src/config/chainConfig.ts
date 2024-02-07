import { CustomChainConfig } from "@web3auth/base";

export const CHAIN_CONFIG = {
  mainnet: {
    displayName: "Ethereum Mainnet",
    chainId: "0x1",
    rpcTarget: `https://rpc.ankr.com/eth`,
    blockExplorerUrl: "https://etherscan.io/",
    ticker: "ETH",
    tickerName: "Ethereum",
    logo: "https://images.toruswallet.io/eth.svg",
  } as CustomChainConfig,
  solana: {
    rpcTarget: "https://api.mainnet-beta.solana.com",
    blockExplorerUrl: "https://explorer.solana.com/",
    chainId: "0x1",
    displayName: "Solana",
    ticker: "SOL",
    tickerName: "Solana",
    logo: "https://images.toruswallet.io/sol.svg",
  } as CustomChainConfig,
  polygon: {
    rpcTarget: "https://rpc.ankr.com/polygon",
    blockExplorerUrl: "https://polygonscan.com/",
    chainId: "0x89",
    displayName: "Polygon Mainnet",
    ticker: "matic",
    tickerName: "Matic",
    logo: "https://images.toruswallet.io/matic.svg",
  } as CustomChainConfig,
  "polygon-mumbai": {
    rpcTarget: "https://rpc.ankr.com/polygon_mumbai",
    blockExplorerUrl: "https://mumbai.polygonscan.com/",
    chainId: "0x13881",
    displayName: "Polygon Mumbai",
    ticker: "matic",
    tickerName: "Matic",
    logo: "https://images.toruswallet.io/matic.svg",
  } as CustomChainConfig,
  goerli: {
    rpcTarget: "https://rpc.ankr.com/eth_goerli",
    blockExplorerUrl: "https://goerli.etherscan.io/",
    chainId: "0x5",
    displayName: "Goerli Testnet",
    ticker: "eth",
    tickerName: "Eth",
    logo: "https://images.toruswallet.io/eth.svg",
  } as CustomChainConfig,
  sepolia: {
    chainId: "0xaa36a7",
    rpcTarget: "https://rpc.ankr.com/eth_sepolia",
    displayName: "Sepolia Testnet",
    blockExplorerUrl: "https://sepolia.etherscan.io/",
    ticker: "eth",
    tickerName: "Ethereum",
    logo: "https://images.toruswallet.io/eth.svg",
  } as CustomChainConfig,
  arbitrum_sepolia: {
    rpcTarget: "https://arbitrum-sepolia.infura.io/v3/4efda295156d477f959dcef8ebc33c5f",
    blockExplorerUrl: "https://sepolia.arbiscan.io/",
    chainId: "0x66eee",
    displayName: "Arbitrum Sepolia",
    ticker: "eth",
    tickerName: "Eth",
  } as CustomChainConfig,
} as const;

export type CHAIN_CONFIG_TYPE = keyof typeof CHAIN_CONFIG;
