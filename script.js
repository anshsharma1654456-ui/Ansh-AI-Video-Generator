document.getElementById("generateBtn").addEventListener("click", function () {

const prompt = document.getElementById("prompt").value;

if(prompt.trim() === ""){
alert("Please enter a prompt");
return;
}

document.getElementById("result").innerHTML = `
<h3>Generating AI Video...</h3>
<p>Please wait...</p>
`;

setTimeout(() => {

document.getElementById("result").innerHTML = `
<h3>Prompt Received</h3>
<p>${prompt}</p>
<p>✅ AI Video Generated Successfully</p>
`;

},3000);

});