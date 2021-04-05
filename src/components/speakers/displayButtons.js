const displayButton = (contentBtn, pages, activeIndex) => {
  let btns = pages.map((_, pageIndex) => {
    return `
      <button class="page-btn ${activeIndex === pageIndex ? 'active-btn' : 'null'}" data-index="${pageIndex}">
        ${pageIndex +1}
      </button>
    `;
  });
  btns.unshift('<button class="prev-btn">prev</button>');
  btns.push('<button class="prev-btn">next</button>');
  contentBtn.innerHTML = btns.join('')
}
export default displayButton;