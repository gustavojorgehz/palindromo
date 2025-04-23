const checkPalindrome = () => {
  const input = document.querySelector('#text-input').value.normalize('NFKD');
  const result = document.querySelector('#result');

  if (!input) {
      alert('Please input a value');
      return;
  }

  const cleanedInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedInput = cleanedInput.split('').reverse().join('');

  if (cleanedInput === reversedInput) {
      result.textContent = `${input} is a palindrome.`;
  } else {
      result.textContent = `${input} is not a palindrome.`;
  }
}

const checkPalindromeBtn = document.querySelector('#checkBtn');

checkPalindromeBtn.addEventListener('click', () => {
  checkPalindrome(); 
});

document.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
   checkPalindrome();
  }
});