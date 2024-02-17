"use client";
import { useState, useEffect } from "react";
import { ModalProvider } from "@particle-network/connectkit";
import {
  Ethereum,
  Polygon,
  EthereumGoerli,
  PolygonMumbai,
  Base,
  Avalanche,
  BNBChain,
  Celo,
  EthereumSepolia
} from "@particle-network/chains";
import { evmWallets } from "@particle-network/connectors";
import "@particle-network/connectkit/dist/index.css";

const projectId = process.env.NEXT_PUBLIC_PARTICLE_PROJECT_ID;
const clientKey = process.env.NEXT_PUBLIC_PARTICLE_CLIENT_KEY;
const appId = process.env.NEXT_PUBLIC_PARTICLE_APP_ID;

const supportedChains = [
  Ethereum,
  EthereumGoerli,
  EthereumSepolia,
  Polygon,
  PolygonMumbai,
  Base,
  Avalanche,
  BNBChain,
  Celo
];

export default function Web3Provider({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <ModalProvider
      theme="dark"
      language="en"
      options={{
        projectId,
        clientKey,
        appId,
        chains: supportedChains,
        connectors: [
          ...evmWallets({
            projectId: "21d2a01621c47fb5f34b06c6390ac0bb",
            showQrModal: true
          })
        ],
        authTypes: ["email", "phone", "google", "github", "microsoft"],
        wallet: {
          customStyle: {
            visible: true,
            supportChains: supportedChains
          }
        },
        fiatCoin: "USD",
        erc4337: {
          name: "SIMPLE",
          version: "1.0.0"
        }
      }}
    >
      {mounted && children}
    </ModalProvider>
  );
}
