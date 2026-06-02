async function generateImage() {

    const prompt = document.getElementById("prompt").value;
    const result = document.getElementById("result");
    const ratio = document.getElementById("aspectRatio").value;

    if (!prompt.trim()) {
        alert("Please enter a prompt");
        return;
    }

    result.innerHTML = `
        <h2>Generating AI Images...</h2>
        <p>Please wait...</p>
    `;

    const width = ratio.split("x")[0];
    const height = ratio.split("x")[1];

    let images = "";

    for(let i = 1; i <= 4; i++){

        const imageUrl =
        `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${Date.now()+i}`;

        images += `
            <div class="image-card">
                <img src="${imageUrl}" alt="AI Image">

                <a class="download-btn"
                   href="${imageUrl}"
                   target="_blank">
                   Download
                </a>
            </div>
        `;
    }

    result.innerHTML = `
        <div class="gallery">
            ${images}
        </div>
    `;
}
