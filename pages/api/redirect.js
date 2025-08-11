export default function handler(req, res) {
  res.writeHead(302, { Location: "https://chat.zalo.me/" });
  res.end();
}
