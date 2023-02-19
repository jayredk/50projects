;(() => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');
  const decreaseBtn = document.querySelector('#decrease');
  const increaseBtn = document.querySelector('#increase');
  const fontSize = document.querySelector('#size');
  const colorPalette = document.querySelector('#color');
  const clearBtn = document.querySelector('#clear');
  
  let isPressed = false;
  let size = 20;
  let color = 'black';
  let x;
  let y;
  
  function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
  
  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = size * 2;
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  
  function calculateSize(method) {
    if (method === 'plus') {
      size += 5;
    } else if (method === 'minus') {
      size -= 5;
    }
    fontSize.textContent = size;
  }

  function bindEvent() {
    canvas.addEventListener('mousedown', (e) => {
      isPressed = true;
      x = e.offsetX;
      y = e.offsetY;
    
    })
    
    canvas.addEventListener('mousemove', (e) => {
      if(!isPressed) return;
    
      const x2 = e.offsetX;
      const y2 = e.offsetY;
    
      drawCircle(x2, y2);
      drawLine(x, y, x2, y2);
      x = x2;
      y = y2;
    })
    
    canvas.addEventListener('mouseup', (e) => {
      isPressed = false;
      x = undefined;
      y = undefined;
    })

    decreaseBtn.addEventListener('click', () => {
      const currentSize = +fontSize.textContent;
      if (currentSize === 5) return;

      calculateSize('minus');
    })

    increaseBtn.addEventListener('click', () => {
      const currentSize = +fontSize.textContent;
      if (currentSize === 50) return;

      calculateSize('plus');
    })

    colorPalette.addEventListener('change', (e) => {
      color = e.target.value;
    })

    clearBtn.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    })
  }
  
  function init() {
    bindEvent();
  }

  init();
})()

