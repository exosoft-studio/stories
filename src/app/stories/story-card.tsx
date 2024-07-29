
interface StoryCardProps {
	title: string
	description: string
	topic: string
	id: number
}

export default function StoryCard({ title, description, id}: StoryCardProps) {
	return (
		// <a href="" className="lg:h-[350px] lg:w-[350px] min-h-[350px] mx-auto flex flex-col justify-start items-center space-y-5">
		// 	<span>{topic}</span>
		// 	<div className="border border-color3 shadow">
		// 	<div>
		// 	</div>
		// 		<h1>{title}</h1>
		// 		<p className='flex justify-center items-center'>{description}</p>
		// 	</div>
		// </a>
		<a href={`/stories/${id}`} className="block max-w-sm p-6 bg-color3 border border-color4 rounded-lg shadow hover:bg-color4">
			<h2 className="mb-2 text-3xl font-bold tracking-tight text-color1">{title}</h2>
			<p className="font-normal text-color2 text-ellipsis">{description}</p>
		</a>
	)
}