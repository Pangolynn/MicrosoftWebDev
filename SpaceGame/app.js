function loadTexture(path) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = path
    img.onload = () => {
      resolve(img)
    }
  })
}

function createEnemies(ctx, canvas, enemyImg) {
  // TODO draw enemies
}

window.onload = async () => {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  const width = canvas.width;
  const height = canvas.height;

  const heroImg = await loadTexture('assets/player.png');
  const monsterImg = await loadTexture('assets/enemyShip.png');

  ctx.fillStyle = 'black';

  ctx.fillRect(0,0, width, height);
  ctx.drawImage(heroImg, canvas.width / 2 - 45, canvas.height - canvas.height / 4 );
  // TODO uncomment the next line when you add enemies to screen
  //createEnemies(ctx, canvas, enemyImg);
}
