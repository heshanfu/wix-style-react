const textDriverFactory = ({element}) => ({
  exists: () => !!element,
  getType: () => element.tagName.toLowerCase(),
  getText: () => element.textContent,
  hasEllipsis: () => element.className.includes('ellipsis'),
  getTitle: () => element.title,
  getClassName: () => element.className
});

export default textDriverFactory;
