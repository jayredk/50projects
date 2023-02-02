;(() => {
  const faqList = document.querySelector('.faqList');

  function toggle(e) {
    const { nodeName, parentNode } = e.target;
    if (nodeName !== 'BUTTON') return;

    parentNode.classList.toggle('active');
  }

  faqList.addEventListener('click', toggle);
})()
