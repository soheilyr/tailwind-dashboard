import { cn } from '@/lib/utils';

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	description?: string;
	children?: React.ReactNode;
}

export function PageHeader({
	title,
	description,
	children,
	className,
	...props
}: PageHeaderProps) {
	return (
		<div
			className={cn('flex items-center justify-between space-y-2', className)}
			{...props}
		>
			<div>
				<h1 className="text-3xl font-bold tracking-tight">{title}</h1>
				{description && <p className="text-muted-foreground">{description}</p>}
			</div>
			{children}
		</div>
	);
}
