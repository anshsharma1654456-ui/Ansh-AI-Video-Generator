function generateImage() {

    const prompt = document.getElementById("prompt").value;
    const result = document.getElementById("result");

    if(prompt.trim() === ""){
        alert("Please enter a prompt");
        return;
    }

    result.innerHTML = "<h2>Generating Image...</h2>";

    setTimeout(() => {
        result.innerHTML = `
            <img src="https://picsum.photos/800/500?random=${Date.now()}" alt="Generated Image">
        `;
    }, 1500);
}
