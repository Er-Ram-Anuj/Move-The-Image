const movingImage = document.getElementById('movingImage');
    let positionX = 0;
    let positionY = 0;
    const updatePosition = () => {
      movingImage.style.left = positionX + 'px';
      movingImage.style.top = positionY + 'px';
    };
    const handleArrowKeys = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          positionY -= 10;
          break;
        case 'ArrowDown':
          positionY += 10;
          break;
        case 'ArrowLeft':
          positionX -= 10;
          break;
        case 'ArrowRight':
          positionX += 10;
          break;
      }
      updatePosition();
    };
    window.addEventListener('keydown', handleArrowKeys);
    updatePosition();
