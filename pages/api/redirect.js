export default function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing 'url' query parameter" });
  }

  try {
    // Chỉ cho phép redirect nếu URL bắt đầu bằng http hoặc https
    if (!/^https?:\/\//.test(url)) {
      return res.status(400).json({ error: "Invalid URL format" });
    }

    res.writeHead(302, { Location: url });
    res.end();
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
