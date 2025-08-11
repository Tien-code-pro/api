export default function handler(req, res) {
  const { to } = req.query;

  if (!to) {
    return res.status(400).send("Missing 'to' parameter");
  }

  try {
    // Redirect sang link đích
    res.writeHead(302, { Location: to });
    res.end();
  } catch (err) {
    res.status(500).send("Redirect failed");
  }
}
