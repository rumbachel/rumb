const connectWalletButton = document.getElementById('connectWallet');
const generateNFTButton = document.getElementById('generateNFT');
const walletAddressElement = document.getElementById('walletAddress').querySelector('span');
const nftImage = document.getElementById('nftImage');

const images = [
    'https://via.placeholder.com/200/FF5733/FFFFFF?text=NFT+1',
    'https://via.placeholder.com/200/33FF57/FFFFFF?text=NFT+2',
    'https://via.placeholder.com/200/3357FF/FFFFFF?text=NFT+3',
    'https://via.placeholder.com/200/F7DC6F/FFFFFF?text=NFT+4'
];

// Проверка MetaMask
if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} else {
    alert('Please install MetaMask to use this dApp!');
}

// Подключение кошелька
connectWalletButton.addEventListener('click', async () => {
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        walletAddressElement.textContent = account;
        generateNFTButton.disabled = false;  // Разблокировать кнопку генерации NFT

    } catch (error) {
        console.error('Error connecting to wallet:', error);
    }
});

// Генерация случайного NFT
generateNFTButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    nftImage.src = images[randomIndex];
    nftImage.alt = `NFT ${randomIndex + 1}`;
});
