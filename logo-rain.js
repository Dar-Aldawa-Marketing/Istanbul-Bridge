const logoNames = [
  "bridge-01",
  "bridge-02",
  "bridge-03",
  "bridge-04",
  "bridge-05",
  "bridge-06",
  "bridge-07",
];

const layer = document.createElement("div");
layer.className = "logo-rain";
layer.setAttribute("aria-hidden", "true");

for (let index = 0; index < 18; index += 1) {
  const drop = document.createElement("span");
  const image = document.createElement("img");
  const logoName = logoNames[index % logoNames.length];

  drop.className = "logo-rain__drop";
  drop.style.setProperty("--left", `${(index * 31 + 7) % 96}%`);
  drop.style.setProperty("--duration", `${22 + (index % 6) * 2.4}s`);
  drop.style.setProperty("--delay", `${-((index * 4.1) % 31)}s`);
  drop.style.setProperty("--drift", `${(index % 2 === 0 ? 1 : -1) * (18 + (index % 5) * 9)}px`);
  drop.style.setProperty("--tilt", `${-4 + (index % 5) * 2}deg`);
  drop.style.setProperty("--scale", `${0.72 + (index % 4) * 0.1}`);

  image.src = new URL(`assets/logo-rain/${logoName}.png`, document.baseURI).href;
  image.alt = "";
  image.decoding = "async";
  image.loading = "eager";
  drop.appendChild(image);
  layer.appendChild(drop);
}

document.body.prepend(layer);
