// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}

export function test(req, res) {
  const { id } = req.params;
  res.status(200).send(id);
}
