// ./api/__mocks__/http.fake.js
// 直接读取本地假数据
export default function http({ url = "", data = {}, method = "get", statusCode = 200 }) {
  return new Promise((resolve, reject) => {
    const lastSlash = url.lastIndexOf("/");
    const module = url.substring(lastSlash + 1);
    const mockData = require(`../__mockData__/${module}.data`).default;
    
    const result = mockData[`${method.toUpperCase()} ${statusCode}`];
    
    process.nextTick(() => result ? resolve(result) : reject('error'));
  });
}
