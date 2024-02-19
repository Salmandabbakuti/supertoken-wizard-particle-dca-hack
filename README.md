# SuperToken Wizard

## Okay, First, What are SuperTokens and Superfluid Protocol

Super Tokens extend the ERC20 token standard by integrating additional functionalities like streams and distributions. Superfluid Protocol is a framework for building programmable and composable tokens on blockchain. It enables real-time, permissionless, and frictionless token transfers with customizable properties such as continuous token streams, instantaneous payments, and tokenized memberships. Superfluid tokens can represent various assets, including money, services, or even shares in a DAO. 

The SuperToken Wizard is a web-based interface that allows developers or individuals to easily deploy a Super Token contract without the need for manually searching for the right contracts and parameters or configuring them individually. With this wizard, you can quickly generate a customized Super Token contract based on your specific needs, copy it or open in remix directly for further customization and deployment, Wizard also allow you to deploy and initialize Super Token contract right from the app. Utilizing Particle Auth, it offers seamless social login integration, enabling authentication via Google, GitHub, email, phone, and blockchain wallets like MetaMask, WalletConnect, and RainbowKit. You can also switch between different blockchain networks with in the wizard to deploy Super Tokens on your preferred network.

![Screen1](https://github.com/Salmandabbakuti/supertoken-wizard-particle-dca-hack/assets/29351207/f26d0fa3-86ee-4290-bc41-ee3735dba734)

![Screen2](https://github.com/Salmandabbakuti/supertoken-wizard-particle-dca-hack/assets/29351207/4c0a615b-f62b-4ae7-8df0-4c68240622ff)

![Screen3](https://github.com/Salmandabbakuti/supertoken-wizard-particle-dca-hack/assets/29351207/e3c29e07-4663-47e2-be55-78167deecd11)

![Screen4](https://github.com/Salmandabbakuti/supertoken-wizard-particle-dca-hack/assets/29351207/593b5976-8288-48d4-bd29-06a57b894470)

## Features

**1. Connect Wallet and Switch Networks:** The wizard allows you to connect your wallet and switch between different blockchain networks, enabling you to deploy Super Tokens on your preferred network.

**2. Social Login and Multi-Network Support:** Leveraging Particle Auth, the SuperToken Wizard offers a streamlined authentication process. Users can sign in using popular social platforms such as Google, GitHub, email, phone, as well as blockchain wallets like MetaMask, WalletConnect, and RainbowKit. The SuperToken Wizard supports deployment on various blockchain networks, allowing users to seamlessly switch between networks based on their preferences and requirements. 

**3. Customizable Contract Generation:** You can input parameters such as token name, token symbol, premint quantity, and premint receiver address to generate a customized contract code for your Super Token. Additionally, you can enable or disable features like mintable, burnable, capped supply and access control(ownable or roles) for the token.

**4. Copy and Open in Remix:** The generated contract code can be easily copied or opened in Remix IDE directly for further customization and deployment.

**5. Compile and Copy Artifacts:** The wizard provides the functionality to compile the contract code and copy the compiled artifacts, including the ABI and bytecode, for future reference or integration with other tools.

**6. Deploy and Initialize:** The wizard allows you to deploy and initialize the Super Token contract right from the app. You can also view the transaction details and the deployed contract address.

#### Tech Stack

- Frontend: Next.js, Antd, Particle Auth(Social wallets, connection and chain management)
- Backend: Node.js, Express.js
- Web3 Client: ethers.js, Particle Auth(Provider, Social wallets, connection and chain management)
- Smartcontracts: Solidity, Hardhat, OpenZeppelin, Superfluid Contracts

## Getting Started

### Prerequisites

- [Node.js 16+](https://nodejs.org/en/download/)

First, run the backend development server(hardhat compiler API):

```bash
npm install
npm run dev
```

## Usage(Compiler API)

```
curl -X POST -H "Content-Type: application/json" -d '{"code": "pragma solidity ^0.8.0; contract MyToken { string public name; constructor(string memory _name) { name = _name; } }"}' http://localhost:4000/api/compile
```

The response will contain the compiled ABI and bytecode of the contract.

Then, run the frontend development server:

> Note: Copy `client/.env.example` to `client/.env` and update the values with your own.

```bash
cd client
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Demo

TBA

## Credits & Resources:

- [Particle Network Auth](https://developers.particle.network/reference/auth-web)
- [Particle Network Connect](https://developers.particle.network/reference/connect-web#connect-core)
- [SuperTokens Overview](https://docs.superfluid.finance/docs/protocol/super-tokens/overview)
- [Superfluid Protocol Overview](https://docs.superfluid.finance/docs/protocol/quickstart)
- [Superfluid Bounties](https://github.com/superfluid-finance/custom-supertokens/issues/25)
- [Superfluid Guides](https://docs.superfluid.finance/superfluid/resources/integration-guides)
- [Hardhat](https://hardhat.org/getting-started/)
- [Ethers.js](https://docs.ethers.io/v5/)
- [Next.js](https://nextjs.org/docs/getting-started)

## Safety

This is experimental software and subject to change over time.

The SuperToken Wizard is provided as a convenience tool and does not guarantee the accuracy or security of the generated contract code or deployments. Please review and audit the generated code before using it in a production environment. Use at your own risk.
I do not give any warranties and will not be liable for any loss incurred through any use of this codebase.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details
