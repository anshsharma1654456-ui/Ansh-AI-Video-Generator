async function generateImage() {

    const prompt = document.getElementById("prompt").value;
    const result = document.getElementById("result");
    const ratio = document.getElementById("aspectRatio").value;

    if (!prompt.trim()) {
        alert("Please enter a prompt");
        return;
    }

    result.innerHTML = `
        <h2>Generating AI Image...</h2>
        <br>
        <p>Please wait a few seconds...</p>
    `;

    const width = ratio.split("x")[0];
    const height = ratio.split("x")[1];

    const imageUrl =
        `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}`;

    result.innerHTML = `
        <img src="${imageUrl}" alt="AI Generated Image">

        <br>

        <a
            class="download-btn"
            href="${imageUrl}"
            target="_blank"
        >
            Download Image
        </a>
    `;
}
