var quote = document.getElementById('quote')

const res =  ("Have a nice day","Hello","Believe in yourself").then(res=>res.json()).then(data =>quote.innerHTML=data.contents.quotes[0].quote );
