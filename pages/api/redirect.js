export default function handler(req, res) {
  const { link } = req.query;

  if (link && link.startsWith("http")) {
    res.writeHead(302, { Location: link });
    res.end();
  } else {
    res.writeHead(302, { Location: "https://google.com" });
    res.end();
  }
}
