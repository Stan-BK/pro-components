// source by https://github.com/ant-design/pro-components/blob/master/packages/utils/src/isImg/index.ts

const imagePattern = 'png|jpg|jpeg|svg|webp|gif|bmp';
const suffixPattern = new RegExp(`\\w.(${imagePattern})$`, 'i');
const base64Pattern = new RegExp(`^data:image\\/(${imagePattern})`, 'i');

/** 判断是否是图片链接 */
function isImg(path: string): boolean {
  return suffixPattern.test(path) || base64Pattern.test(path);
}

export default isImg;
