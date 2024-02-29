export function topToc() {
  if (document.querySelector('main h2')) {
    // see: https://github.com/tscanlin/tocbot#usage
    tocbot.init({
      tocSelector: '#top-toc',
      contentSelector: '.content',
      ignoreSelector: '[data-toc-skip]',
      headingSelector: 'h2, h3, h4',
      orderedList: false,
      scrollSmooth: false
    });
  }
}
/*

tocbot.init({
  tocSelector:"#top-toc",
  contentSelector:".content",
  ignoreSelector:"[data-toc-skip]",
  headingSelector:"h2, h3, h4",
  orderedList:!1,
  scrollSmooth:!1
})

*/