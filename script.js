const { mouse, Point } = require("@nut-tree-fork/nut-js");
const chalk = require("chalk");

const INTERVALO = 180; // segundos (3 min)

async function moverMouse() {
  const pos = await mouse.getPosition();
  await mouse.move([new Point(pos.x + 10, pos.y)]);
  await mouse.move([new Point(pos.x, pos.y)]);
  console.log("\nMouse movido!");
}

// Função para formatar uso de memória em MB
function formatarMemoria(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}

async function iniciar() {
  let contador = INTERVALO;

  setInterval(async () => {
    if (contador === 0) {
      await moverMouse();
      contador = INTERVALO;
    } else {
      contador--;
    }

    // Mostra contador, memória e CPU
    const memoria = formatarMemoria(process.memoryUsage().rss);

    process.stdout.cursorTo(0);
    process.stdout.write(
      `Próxima ação do mouse em: ${chalk.green(contador)} segundos... | Uso de memória:  ${memoria > 55 ? chalk.red(memoria) : memoria >= 50 ? chalk.yellow(memoria) : chalk.green(memoria)} MB | Para encerrar pressione Ctrl + C`
    );
  }, 1000);
}


iniciar();
