<script lang="ts">
	import File from 'lucide-svelte/icons/file';
	import Home from 'lucide-svelte/icons/home';
	import LineChart from 'lucide-svelte/icons/line-chart';
	import ListFilter from 'lucide-svelte/icons/list-filter';
	import Package from 'lucide-svelte/icons/package';
	import PanelLeft from 'lucide-svelte/icons/panel-left';
	import CirclePlus from 'lucide-svelte/icons/circle-plus';
	import Search from 'lucide-svelte/icons/search';
	import Settings from 'lucide-svelte/icons/settings';
	import UsersRound from 'lucide-svelte/icons/users-round';

	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index';
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Input } from '$lib/components/ui/input/index';
	import * as Sheet from '$lib/components/ui/sheet/index';
	import * as Table from '$lib/components/ui/table/index';
	import * as Tabs from '$lib/components/ui/tabs/index';
	import * as Tooltip from '$lib/components/ui/tooltip/index';

	import TableRow from '$lib/components/TableRow.svelte';
</script>

<div class="flex min-h-screen w-full flex-col bg-muted/40">
	<aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
		<nav class="flex flex-col items-center gap-4 px-2 py-4">
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<a
						href="/"
						class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
						use:builder.action
						{...builder}
					>
						<Home class="h-5 w-5" />
						<span class="sr-only">Dashboard</span>
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">Dashboard</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<a
						href="/"
						class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors text-muted-foreground hover:text-foreground md:h-8 md:w-8"
						use:builder.action
						{...builder}
					>
						<Package class="h-5 w-5" />
						<span class="sr-only">Posts</span>
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">Posts</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<a
						href="/"
						class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors text-muted-foreground hover:text-foreground md:h-8 md:w-8"
						use:builder.action
						{...builder}
					>
						<UsersRound class="h-5 w-5" />
						<span class="sr-only">Users</span>
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">Users</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<a
						href="/"
						class="flex h-9 w-9 items-center justify-center rounded-lg transition-colors text-muted-foreground hover:text-foreground md:h-8 md:w-8"
						use:builder.action
						{...builder}
					>
						<LineChart class="h-5 w-5" />
						<span class="sr-only">Analytics</span>
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">Analytics</Tooltip.Content>
			</Tooltip.Root>
		</nav>
		<nav class="mt-auto flex flex-col items-center gap-4 px-2 py-4">
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<a
						href="##"
						class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
						use:builder.action
						{...builder}
					>
						<Settings class="h-5 w-5" />
						<span class="sr-only">Settings</span>
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">Settings</Tooltip.Content>
			</Tooltip.Root>
		</nav>
	</aside>
	<div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
		<header
			class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
		>
			<Sheet.Root>
				<Sheet.Trigger asChild let:builder>
					<Button builders={[builder]} size="icon" variant="outline" class="sm:hidden">
						<PanelLeft class="h-5 w-5" />
						<span class="sr-only">Toggle Menu</span>
					</Button>
				</Sheet.Trigger>
				<Sheet.Content side="left" class="sm:max-w-xs">
					<nav class="grid gap-6 text-lg font-medium">
						<a
							href="##"
							class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
						>
							<Home class="h-5 w-5" />
							Dashboard
						</a>

						<a href="##" class="flex items-center gap-4 px-2.5 text-foreground">
							<Package class="h-5 w-5" />
							Posts
						</a>
						<a
							href="##"
							class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
						>
							<UsersRound class="h-5 w-5" />
							Customers
						</a>
						<a
							href="##"
							class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
						>
							<LineChart class="h-5 w-5" />
							Settings
						</a>
					</nav>
				</Sheet.Content>
			</Sheet.Root>
			<Breadcrumb.Root
				class="hidden md:flex"
				data-x-chunk-name="dashboard-06-chunk-0"
				data-x-chunk-description="A breadcrumb with two links and a page indicator."
			>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="##">Dashboard</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Link href="##">All Posts</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Page>SEO</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
			<div class="relative ml-auto flex-1 md:grow-0">
				<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input
					type="search"
					placeholder="Search..."
					class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
				/>
			</div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button
						builders={[builder]}
						variant="outline"
						size="icon"
						class="overflow-hidden rounded-full"
					>
						<img
							src="/favicon.png"
							width={36}
							height={36}
							alt="Avatar"
							class="overflow-hidden rounded-full"
						/>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Settings</DropdownMenu.Item>
					<DropdownMenu.Item>Support</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Logout</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</header>
		<main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
			<Tabs.Root value="all">
				<div class="flex items-center">
					<Tabs.List>
						<Tabs.Trigger value="all">All</Tabs.Trigger>
						<Tabs.Trigger value="active">Active</Tabs.Trigger>
						<Tabs.Trigger value="draft">Draft</Tabs.Trigger>
						<Tabs.Trigger value="archived" class="hidden sm:flex">Archived</Tabs.Trigger>
					</Tabs.List>
					<div class="ml-auto flex items-center gap-2">
						<DropdownMenu.Root>
							<DropdownMenu.Trigger asChild let:builder>
								<Button builders={[builder]} variant="outline" size="sm" class="h-7 gap-1">
									<ListFilter class="h-3.5 w-3.5" />
									<span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Filter </span>
								</Button>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content align="end">
								<DropdownMenu.Label>Filter by</DropdownMenu.Label>
								<DropdownMenu.Separator />
								<DropdownMenu.CheckboxItem checked>Active</DropdownMenu.CheckboxItem>
								<DropdownMenu.CheckboxItem>Draft</DropdownMenu.CheckboxItem>
								<DropdownMenu.CheckboxItem>Archived</DropdownMenu.CheckboxItem>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
						<Button size="sm" variant="outline" class="h-7 gap-1">
							<File class="h-3.5 w-3.5" />
							<span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Export </span>
						</Button>
						<Button size="sm" class="h-7 gap-1">
							<CirclePlus class="h-3.5 w-3.5" />
							<span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> New Posts </span>
						</Button>
					</div>
				</div>
				<Tabs.Content value="all">
					<Card.Root
						data-x-chunk-name="dashboard-06-chunk-1"
						data-x-chunk-description="A list of posts in a table with actions. Each row has an image, name, status, created by and actions."
					>
						<Card.Header>
							<Card.Title>Posts</Card.Title>
							<Card.Description>Manage your posts here.</Card.Description>
						</Card.Header>
						<Card.Content>
							<Table.Root>
								<Table.Header>
									<Table.Row>
										<Table.Head>Posts Image</Table.Head>
										<Table.Head>Posts Title</Table.Head>
										<Table.Head>Category</Table.Head>
										<Table.Head>Status</Table.Head>
										<Table.Head class="md:table-cell">Created By</Table.Head>
										<Table.Head>Published Date</Table.Head>
										<Table.Head>
											<span>Actions</span>
										</Table.Head>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									<TableRow
										imageSrc="/favicon.png"
										postTitle="SEO Data"
										postCategory="SEO"
										postStatus="Draft"
										author="Mani"
										publishedDate="2023-07-12 10:42 Am"
										actions="Actions"
									/>
									<TableRow
										imageSrc="/favicon.png"
										postTitle="SEO Data 2"
										postCategory="SEO"
										postStatus="Draft"
										author="Mani"
										publishedDate="2024-04-02 14:42 Am"
										actions="Actions"
									/>
								</Table.Body>
							</Table.Root>
						</Card.Content>
						<Card.Footer>
							<div class="text-xs text-muted-foreground">
								Showing <strong>1-10</strong> of <strong>32</strong> posts
							</div>
						</Card.Footer>
					</Card.Root>
				</Tabs.Content>
			</Tabs.Root>
		</main>
	</div>
</div>
