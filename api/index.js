import handler from '../dist/server/index.js';

export default async function (req, res) {
  const url = new URL(req.url, `https://${req.headers.host}`);
  const request = new Request(url.toString(), {
    method: req.method,
    headers: req.headers,
    body: req.method === 'GET' || req.method === 'HEAD' ? null : req,
  });

  const response = await handler(request);
  res.status(response.status);
  response.headers.forEach((value, name) => {
    res.setHeader(name, value);
  });

  const arrayBuffer = await response.arrayBuffer();
  res.end(Buffer.from(arrayBuffer));
}
