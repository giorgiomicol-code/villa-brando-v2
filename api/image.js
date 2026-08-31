module.exports = async function handler(req, res) {
  const value = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;

  if (!value) {
    res.status(400).json({ error: 'Missing image URL' });
    return;
  }

  let target;
  try {
    target = new URL(value);
  } catch (_) {
    res.status(400).json({ error: 'Invalid image URL' });
    return;
  }

  if (target.protocol !== 'https:' || target.hostname !== 'lh3.googleusercontent.com') {
    res.status(403).json({ error: 'Image host not allowed' });
    return;
  }

  try {
    const upstream = await fetch(target.toString(), {
      headers: {
        'user-agent': 'Mozilla/5.0 (compatible; VillaBrandoPreview/1.0)',
        'referer': 'https://www.villabrando.com/'
      },
      redirect: 'follow'
    });

    if (!upstream.ok) {
      res.status(upstream.status).json({ error: `Upstream image error ${upstream.status}` });
      return;
    }

    const body = Buffer.from(await upstream.arrayBuffer());
    const contentType = upstream.headers.get('content-type') || 'image/jpeg';

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000');
    res.status(200).send(body);
  } catch (error) {
    res.status(502).json({ error: 'Unable to retrieve image' });
  }
};
