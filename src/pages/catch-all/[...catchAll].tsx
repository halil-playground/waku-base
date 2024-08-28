import { CurrentPath } from "../../components/path";

export default async function CatchAll({ catchAll }: { catchAll: string[] }) {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight">Catch all</h1>
      <p>{catchAll.join('/')}</p>
      <CurrentPath />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  };
};
