// /opt/npu/src/theme/customPrism.js
const customPrism = {
  ...require('prism-react-renderer').themes.vsDark,
  plain: {
    backgroundColor: '#2D2E2E', // 블랙 테마 배경
    color: '#D4D4D4', // 기본 텍스트 색상
  },
  styles: [
    ...require('prism-react-renderer').themes.vsDark.styles,
    {
      types: ['comment'],
      style: { color: '#727475' }, // 회색 (주석)
    },
    {
      types: ['string'],
      style: { color: '#00a67d' },  // 초록색 openai string
    },
    {
      types: ['function'], // sudo, apt, docker 같은 명령어를 function으로
      style: { color: '#2e95d3' }, // 차분한 초록 (명령어)
    },
    {
      types: ['keyword'],
      style: { color: '#2e95d3' }, // 파란색 함수등등등
    },
 
    {
      types: ['number'],
      style: { color: '#df3079' }, // 숫자 거의빨간색색
    },
    {
      types: ['variable'],
      style: { color: '#e9950c' }, // 변수
    },
  ],
};

module.exports = customPrism;