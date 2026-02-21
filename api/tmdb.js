export default async function handler(req, res) {
  const { path } = req.query;

  const url = `https://api.themoviedb.org/3/${path}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  });

  const data = await response.json();

  res.status(200).json(data);
}
