import { CHAIN_NAMESPACES, EVM_WALLET_ADAPTERS, SOLANA_WALLET_ADAPTERS } from "@web3auth/base";

import { DefaultAdaptersModalConfig } from "./interface";

export const defaultSolanaModalConfig: DefaultAdaptersModalConfig = {
  chainNamespace: CHAIN_NAMESPACES.SOLANA,
  adapters: {
    [SOLANA_WALLET_ADAPTERS.TORUS_SOLANA_WALLET]: {
      visible: true,
      showOnMobile: true,
      showOnDesktop: true,
      configurationRequired: false,
      // options: { chainConfig: { chainId: 3, host: "ropsten" } },
    },
    [SOLANA_WALLET_ADAPTERS.OPENLOGIN_WALLET]: {
      visible: true,
      showOnMobile: true,
      showOnDesktop: true,
      configurationRequired: true,
    },
    [SOLANA_WALLET_ADAPTERS.CUSTOM_AUTH]: {
      visible: true,
      showOnMobile: true,
      showOnDesktop: true,
      configurationRequired: true,
    },
    [SOLANA_WALLET_ADAPTERS.PHANTOM_WALLET]: {
      visible: true,
      showOnMobile: true,
      showOnDesktop: true,
      configurationRequired: false,
    },
  },
};

export const defaultEvmModalConfig: DefaultAdaptersModalConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  adapters: {
    [EVM_WALLET_ADAPTERS.METAMASK_WALLET]: {
      // label: "metaMask",
      visible: true,
      showOnMobile: true,
      showOnDesktop: true,
      configurationRequired: false,
    },
    [EVM_WALLET_ADAPTERS.TORUS_EVM_WALLET]: {
      visible: true,
      showOnMobile: true,
      showOnDesktop: true,
      configurationRequired: false,
    },
    [SOLANA_WALLET_ADAPTERS.OPENLOGIN_WALLET]: {
      visible: true,
      showOnMobile: true,
      showOnDesktop: true,
      configurationRequired: true,
    },
    [EVM_WALLET_ADAPTERS.CUSTOM_AUTH]: {
      visible: true,
      showOnMobile: true,
      showOnDesktop: true,
      configurationRequired: true,
    },
  },
};