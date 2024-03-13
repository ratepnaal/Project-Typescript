import Web3 from 'web3';

// تهيئة Web3 مع مزود الويب الذي تستخدمه
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// عنوان العقد الذكي
const contractAddress = '0x123abc...';

// ABI للعقد الذكي
const contractABI = [
  // تعريف الوظائف والأحداث هنا
];

// تعريف الحقل والزر في HTML
const readButton = document.getElementById('readButton') as HTMLButtonElement;
const writeInput = document.getElementById('writeInput') as HTMLInputElement;
const writeButton = document.getElementById('writeButton') as HTMLButtonElement;
const messageOutput = document.getElementById('messageOutput') as HTMLDivElement;

// وظيفة لقراءة الرسائل من العقد الذكي
async function readMessage() {
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  const message = await contract.methods.getMessage().call();
  //messageOutput.textContent = message;
}

// وظيفة لكتابة رسالة جديدة إلى العقد الذكي
async function writeMessage() {
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  const message = writeInput.value;
  await contract.methods.setMessage(message).send({ from: web3.eth.defaultAccount });
  messageOutput.textContent = message;
}

// تعيين وظائف النقر للأزرار
readButton.addEventListener('click', readMessage);
writeButton.addEventListener('click', writeMessage);