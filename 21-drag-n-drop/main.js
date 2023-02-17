;(() => {
  const fill = document.querySelector('.fill');
  const empties = document.querySelectorAll('.empty');

  function dragStart() {
    this.classList.add('hold');
    setTimeout(() => {
      this.classList.remove('fill');
      
    }, 0);
  }

  function dragEnd() {
    this.classList = 'fill';
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hoverd');
  }

  function dragLeave() {
    this.classList.remove('hoverd');
  }

  function dragDrop() {
    this.classList = 'empty';
    this.append(fill);
  }

  function bindEvent() {
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);

    empties.forEach((empty) => {
      empty.addEventListener('dragover', dragOver);
      empty.addEventListener('dragenter', dragEnter);
      empty.addEventListener('dragleave', dragLeave);
      empty.addEventListener('drop', dragDrop);
    })
  }

  function init() {
    bindEvent();
  }

  init();
})()