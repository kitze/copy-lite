export const copyToClipboard = (content: string, richHtml = false) => {
  const textArea = document.createElement('textarea');
  textArea.style.maxHeight = '0';
  textArea.style.height = '0';
  textArea.style.opacity = '0';
  textArea.value = content;
  document.body.appendChild(textArea);
  textArea.select();

  const listener = (e: ClipboardEvent) => {
    e.preventDefault();

    if (e.clipboardData) {
      e.clipboardData.setData('text/html', content);
      e.clipboardData.setData('text/plain', content);
    }
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
