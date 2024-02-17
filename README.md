# SuperToken Wizard

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
