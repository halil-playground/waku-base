import { Link } from 'waku';

import { Counter } from '../components/counter';

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <p>dynamic {data.time}</p>
      <Counter />
      <Link to="/about" className="inline-block mt-4 underline">
        About page
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
    time: new Date().toLocaleTimeString(),
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
