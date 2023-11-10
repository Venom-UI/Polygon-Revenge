let turrets = [
    {atk: 0, dano: 0, custo: 0, image: "turret-placeholder"},
    {atk: 0, dano: 0, custo: 0, image: "turret2-placeholder"}
];

let turID = 0;

function changeID(e) {
    if(e.deltaY < 0 && turID < turrets.length - 1) {
        turID++;
    }
    if(e.deltaY > 0 && turID > 0) {
        turID--;
    }
}

function spawnTurret(e) {
    let newEl = document.createElement("turret");
    let image = document.createElement("img");
    image.src = `imgs/${turrets[turID].image}.png`;
    newEl.appendChild(image);
    image.style.width = "10vmin";
    image.style.height = "10vmin";
    newEl.style.position = "absolute";
    newEl.style.top = e.pageY - viewport_convert(0, 0, 5) + 'px';
    newEl.style.left = e.pageX - viewport_convert(0, 5, 0) + 'px';
    newEl.id = "turret";
    newEl.dataset.damage = turrets[turID].dano;
    battleEl.appendChild(newEl);
}

battleEl.addEventListener("mouseup", (e) => {
    spawnTurret(e);
});

battleEl.addEventListener("wheel", (e) => {
    changeID(e);
});