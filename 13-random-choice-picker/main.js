;(() => {
  const textarea = document.querySelector('#textarea');
  const tags = document.querySelector('#tags');

  function createTags(inputVal) {
    const html = inputVal
      .split(',')
      .filter((tag) => tag.trim() !== '')
      .map((tag) => `<span class="tag">${tag}</span>`).join('');

    tags.innerHTML = html;
  }

  function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
      const randomTag = pickUpRandomTag();

      highlightTag(randomTag);

      setTimeout(() => unHighlightTag(randomTag), 100);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const randomTag = pickUpRandomTag();
        highlightTag(randomTag);
      }, 100);

    }, 100 * times)
  }

  function pickUpRandomTag() {
    const tagList = document.querySelectorAll('.tag');
    return tagList[Math.floor(Math.random() * tagList.length)];
  }

  function highlightTag(tag) {
    tag.classList.add('active');
  }

  function unHighlightTag(tag) {
    tag.classList.remove('active');
  }

  textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      randomSelect();
      return;
    }

    createTags(e.target.value);
  });
})()
