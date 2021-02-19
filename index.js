var quote = document.getElementById('quote')

const res =  fetch("https://quotes.rest/qod?category=inspire").then(res=>res.json()).then(data =>quote.innerHTML=data.contents.quotes[0].quote );
