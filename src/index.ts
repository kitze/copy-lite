export const copyToClipboard = (content: string, richHtml = false) => {
  const textArea = document.createElement('textarea');
  textArea.style.maxHeight = '0px';
  textArea.style.height = '0px';
  textArea.style.opacity = '0';
  textArea.value = content;
  document.body.appendChild(textArea);
  textArea.select();

  const listener = (e: any) => {
    e.clipboardData.setData('text/html', content);
    e.clipboardData.setData('text/plain', content);
    e.preventDefault();
  };

  const copy = () => document.execCommand('copy');

  if (richHtml) {
    document.addEventListener('copy', listener);
    copy();
    document.removeEventListener('copy', listener);
  } else {
    copy();
  }

  document.body.removeChild(textArea);
};
