import { CurrentPath } from "../../components/path";

export default async function Article({ slug }: { slug: string }) {
	const data = await getData(slug);
	return (
		<article className="p-4 mt-4 -mx-4 border border-blue-400 border-dashed rounded">
			<h1 className="text-4xl font-bold tracking-tight">Article</h1>
			<p>Article content</p>
			<p>{data.slug}</p>
			<CurrentPath />
		</article>
	);
}

export const getData = async (slug: string) => {
	return {
		slug,
	};
};

export const getConfig = async () => {
	return {
		render: "dynamic",
	};
};
