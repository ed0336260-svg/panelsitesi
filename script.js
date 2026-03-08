const form = document.getElementById('apiForm');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const tc = document.getElementById('tc').value;
  const gsm = document.getElementById('gsm').value;

  let output = '';

  // Örnek: İsim-Soyisim ile sorgu
  if(name && surname){
    const res = await fetch(`https://apilerimya.onrender.com/query?name=${name}&surname=${surname}&format=text`);
    const text = await res.text();
    output += `Query:\n${text}\n\n`;
  }

  // Örnek: TC ile sorgu
  if(tc){
    const res = await fetch(`https://apilerimya.onrender.com/tc?tc=${tc}&format=text`);
    const text = await res.text();
    output += `TC:\n${text}\n\n`;
  }

  // Örnek: GSM ile sorgu
  if(gsm){
    const res = await fetch(`https://apilerimya.onrender.com/gsm?gsm=${gsm}&format=text`);
    const text = await res.text();
    output += `GSM:\n${text}\n\n`;
  }

  result.textContent = output;
});
