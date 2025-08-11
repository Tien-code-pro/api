export default function handler(req, res) {
  const { to } = req.query;

  if (!to) {
    return res.status(400).json({ error: "Missing 'to' parameter" });
  }

  // Chỉ cho phép http/https
  if (!/^https?:\/\/.+/i.test(to)) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  res.writeHead(302, { Location: to });
  res.end();
}
