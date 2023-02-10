const playButton = document.getElementById("play-button");
      const grid = document.getElementById("grid");
      let bombs = [];

      playButton.addEventListener("click", function() {
        grid.innerHTML = ""; // resetta grid
        bombs = []; // resetta bombs

        for (let i = 1; i <= 100; i++) {
          const cell = document.createElement("div");
          cell.classList.add("grid-cell");
          cell.textContent = i;
          grid.appendChild(cell);

          cell.addEventListener("click", function() {
            if (cell.classList.contains("clicked")) return;

            cell.classList.add("clicked");
            console.log("Cell clicked:", i);

            if (bombs.includes(i)) {
              cell.classList.remove("clicked");
              cell.classList.add("bomb");
              console.log("Game Over");
              alert("GAME OVER")
            }
          });
        }

        while (bombs.length < 16) {
          const bombIndex = Math.floor(Math.random() * 100) + 1;
          if (!bombs.includes(bombIndex)) bombs.push(bombIndex);
          }
        
        console.log("Bombs:", bombs);
      });