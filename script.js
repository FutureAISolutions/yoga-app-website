const API = "http://localhost:5000/api/yoga";

async function getYoga(category) {

    let url = API;

    if (category !== "all") {
        url = `${API}/${category}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    const container = document.getElementById("yogaContainer");
    container.innerHTML = "";

    data.forEach(item => {
        container.innerHTML += `
        <div class="card">
            <img src="${item.image}" />
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </div>
        `;
    });
}