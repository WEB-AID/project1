let articleTextBlock = document.querySelector('.article-block__text');
let articleButton = articleTextBlock.querySelector('.article-block__button');
let articleFullText = articleTextBlock.querySelector('.article-block__fullText');

let open = function() {
  articleFullText.style.display = 'unset';

  articleButton.textContent = ('Скрыть');
  articleButton.style.background = 'url(./img/hidemore-icon.svg) no-repeat -5px';
  articleButton.removeEventListener('click', open);
  articleButton.addEventListener('click', close);
}

let close = function() {
  articleFullText.style.display = 'none';

  articleButton.textContent = ('Читать далее');
  articleButton.style.background = 'url(./img/readmore-icon.svg) no-repeat -5px';
  articleButton.removeEventListener('click', close);
  articleButton.addEventListener('click', open);
}

articleButton.addEventListener('click', open)