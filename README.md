# MQR Pay

MQR Pay is a cutting-edge payment solution designed to eliminate long lines and delays caused by slow payment systems. Utilizing blockchain technology and QR codes, MQR Pay provides a fast, secure, and seamless transaction experience for businesses and individuals alike.

## Features
Instant Payments: Make payments quickly with just a scan of a QR code.
Secure Transactions: Powered by blockchain technology for enhanced security.
User-Friendly: Simple interface designed for ease of use.
Versatile Integration: Suitable for malls, universities, businesses, and more.

### Product Demo: 
https://www.youtube.com/watch?v=BYqrJ6f4LZc



## Installation
Follow these steps to set up SakaAI on your local environment:

### Prerequisites

- A connection to the internet.
- A command line interface.
- [Node.js](https://nodejs.org/en) (v18 or later downloaded and installed.)
- [DFINITY IC SDK,](https://internetcomputer.org/docs/current/developer-docs/setup/install/)
```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```
- dfx (v15 or later installed.)
  ```bash
  sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
  
  dfx --version

  echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
  ```
   
### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/EmmanuelHaggai/SakaAI-on-ICP.git
   
   cd SakaAI-on-ICP
   ```
   
2. **Install Dependencies:**

   ```bash
   npm install @dfinity/auth-client
   
   npm install
   ```
3. **Pull the interner identity canister using dfx deps:**
   ```bash
   dfx deps pull
   ```
4. **Initialize the canister:**
   ```bash
   dfx deps init internet_identity --argument '(null)'
   ```
5. **Deploy to Internet Computer:**

   ```bash
   dfx start --clean --background
   dfx deps deploy
   dfx deploy
   ```

## Contribute

MQR Pay is an open-source project, and we welcome contributions from the community. Whether it's adding new features, improving existing ones, or helping with documentation, your contributions are invaluable to us.

Join us in redefining the future with blockchain technology and AI. Together, we can build a smarter, more secure, and more connected world.
