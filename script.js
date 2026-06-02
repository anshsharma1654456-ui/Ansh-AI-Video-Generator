async function generateImage() {

    const prompt = document.getElementById("prompt").value;
    const result = document.getElementById("result");

    if (!prompt.trim()) {
        alert("Please enter a prompt");
        return;
    }

    result.innerHTML = "<h2>Generating AI Image...</h2>";

    const imageUrl =
        `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

    result.innerHTML = `
        <img src="${imageUrl}" alt="AI Generated Image">
    `;
}
