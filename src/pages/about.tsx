import { Link } from 'waku';

export default async function AboutPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <p>static {data.time}</p>
      <Link to="/" className="inline-block mt-4 underline">
        Return home
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'About',
    headline: 'About Waku',
    body: 'The minimal React framework',
    time: new Date().toLocaleTimeString(),
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
