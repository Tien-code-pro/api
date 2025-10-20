export default async function handler(req, res) {
  const { to } = req.query;

  if (!to) {
    return res.status(400).json({
      success: false,
      message: "Missing 'to' parameter. Example: /?to=https://google.com",
    });
  }

  // Nếu thiếu http hoặc https → tự động thêm vào
  const redirectUrl =
    to.startsWith("http://") || to.startsWith("https://")
      ? to
      : `https://${to}`;

  // Redirect tạm thời (302)
  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
