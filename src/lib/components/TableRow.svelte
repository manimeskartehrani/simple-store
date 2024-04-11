<script lang="ts">
	import * as icons from 'lucide-svelte';
	import Ellipsis from 'lucide-svelte/icons/ellipsis';
	import { Badge } from '$lib/components/ui/badge/index';
	import { Button } from '$lib/components/ui/button/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import * as Table from '$lib/components/ui/table/index';

	export let imageSrc: string;
	export let postTitle: string;
	export let postCategory: string;
	export let postStatus: string;
	export let author: string;
	export let publishedDate: string;
	export let actions: string;
</script>

<Table.Row>
	<Table.Cell class="hidden sm:table-cell">
		<img
			alt="Post example"
			class="aspect-square rounded-md object-cover"
			height="64"
			src={imageSrc}
			width="64"
		/>
	</Table.Cell>
	<Table.Cell class="font-medium">{postTitle}</Table.Cell>
	<Table.Cell class="font-medium">{postCategory}</Table.Cell>
	<Table.Cell>
		<Badge variant="outline">{postStatus}</Badge>
	</Table.Cell>
	<Table.Cell>{author}</Table.Cell>

	<Table.Cell class="hidden md:table-cell">{publishedDate}</Table.Cell>
	<Table.Cell>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button aria-haspopup="true" size="icon" variant="ghost" builders={[builder]}>
					<Ellipsis class="h-4 w-4" />
					<span class="sr-only">{actions}</span>
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content align="end">
				<!-- <DropdownMenu.Label>Actions</DropdownMenu.Label> -->
				<DropdownMenu.Item>Edit</DropdownMenu.Item>
				<DropdownMenu.Item>Delete</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Table.Cell>
</Table.Row>
