<template>
	<div class="bg-gradient-to-br from-viscoin-blue-1 via-viscoin-blue-2 to-viscoin-blue-3 md:py-10">
		<div class="
			prose prose-discord
			prose-light
			lg:prose-lg
			mx-auto
			h-full
			col-span-full px-6
			py-20
			drop-shadow-lg
		">
			<h1 class="text-center drop-shadow-lg">Welcome to Viscoin</h1>
			<h3 class="text-center drop-shadow-lg">Money made decentralized</h3>
		</div>
	</div>
	<div
		class="
			dark:prose-light
			prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			py-32
		"
		style="background-color: #00aeff11;"
	>
		<div class="px-6">
			<div class="text-center">
				<h2 class="font-bold">What is Viscoin?</h2>
				<p class="dark:text-gray-100">
					Viscoin is an experimental digital currency that lives on the internet.
					<br>
					Payments can be made by anyone, to anyone, at any time, anywhere in the world, and are carried out collectively by the network with the use of peer-to-peer technology.
					<br>
					Cryptography makes trusting a central authority obsolete when anyone with a computer can verify that a transaction is valid.
				</p>
			</div>
		</div>
		<div class="flex justify-center align-middle">
			<img class="w-60 lg:w-80" src="/logo.svg" alt="">
		</div>
	</div>
	<div
		class="
			dark:prose-light
			prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-32
		"
		style="background-color: #00ff9908;"
	>
		<div class="px-6 text-center mb-10">
			<img class="w-60 lg:w-80" src="/payment-16.svg" alt="">
		</div>
		<div class="px-6">
			<div class="text-center">
				<h2 class="font-bold">Wallet</h2>
				<p class="dark:text-gray-100">
					Send, receive and store Viscoin.
				</p>
			</div>
		</div>
		<div class="col-span-full flex justify-center">
			<router-link
				to="/wallet"
			>
				<Button text="Open Wallet" />
			</router-link>
		</div>
	</div>
	<div
		class="
			dark:prose-light
			prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-32
		"
		style="background-color: #ff00ee08;"
	>
		<div class="px-6">
			<div class="text-center">
				<h2 class="font-bold">Global currency</h2>
				<p class="dark:text-gray-100">
					Viscoin is a decentralized entity that lives on the interent. It operates freely around the world, connecting people with currency at the speed of light.
					<br>
					Anyone with an internet connection can use Viscoin.
				</p>
			</div>
		</div>
		<div class="px-6 text-center mb-10">
			<img class="w-60 lg:w-80" src="/world-23.svg" alt="">
		</div>
	</div>
	<div
		class="
			dark:prose-light
			prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-32
		"
		style="background-color: #00ff6a08;"
	>
		<div class="px-6 text-center mb-10">
			<!-- <img class="w-60 lg:w-80" src="/world-23.svg" alt=""> -->
			<img class="w-60 lg:w-80" src="/blockchain.svg" alt="">
		</div>
		<div class="px-6">
			<div class="text-center">
				<h2 class="font-bold">Explorer</h2>
				<p class="dark:text-gray-100">
					<a href="https://vis.gg">Vis.gg</a> is a place where you can explore Viscoin's blockchain.
				</p>
			</div>
		</div>
		<div class="col-span-full flex justify-center">
			<a href="https://vis.gg">
				<Button text="Open Explorer" />
			</a>
		</div>
	</div>
	<div
		class="
			dark:prose-light
			prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-32
		"
		style="background-color: #ff190008;"
	>
		<div class="px-6">
			<div class="text-center">
				<h2 class="font-bold">Contributing</h2>
				<p class="dark:text-gray-100">
					Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
				</p>
			</div>
		</div>
		<div class="px-6 text-center mb-10">
			<img class="w-60 lg:w-80" src="/multi-agent-system.svg" alt="">
		</div>
		<div class="col-span-full flex justify-center">
			<a href="https://github.com/viscoin/viscoin">
				<Button text="View on Github" />
			</a>
		</div>
	</div>
	<div
		class="
			dark:prose-light
			prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-32
		"
		style="background-color: #9000ff08;"
	>
		<div class="px-6 text-center mb-10">
			<img class="w-60 lg:w-80" src="/growth-3.svg" alt="">
		</div>
		<div class="px-6">
			<div class="text-center">
				<h2 class="font-bold">Community</h2>
				<p class="dark:text-gray-100">
					Here you can ask questions, learn more about Viscoin and get involved if you want to.
					<br>
					We are happy to welcome you in and answer your questions.
				</p>
			</div>
		</div>
		<div class="col-span-full flex justify-center">
			<router-link
				to="/community"
			>
				<Button text="See Community" />
			</router-link>
		</div>
	</div>
	<div
		class="
			dark:prose-light
			prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-32
		"
		style="background-color: #ff800008;"
	>
		<div class="px-6">
			<div class="text-center">
				<h2 class="text-center font-bold">Technical</h2>
				<p class="dark:text-gray-100">
					1 minute avg block time
					<br>
					1 Viscoin mining reward
					<br>
					Live since 2021-01-01 00:00:00
					<br>
					Argon2d CPU mining algorithm
				</p>
			</div>
		</div>
		<div class="px-6 text-center mb-10">
			<img class="w-60 lg:w-80" src="/write-16.svg" alt="">
		</div>
		<div class="col-span-full flex justify-center">
			<router-link
				to="/litepaper"
			>
				<Button text="Read the Litepaper" />
			</router-link>
		</div>
	</div>
	<div
		class="
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			mx-auto
			w-full
			grid gap-y-6 grid-cols-2 max-w-7xl
			md:grid md:grid-cols-3 md:gap-x-12 md:max-w-7xl
			py-32
			px-6
			md:px-12
			lg:px-24
		"
	>
		<div class="px-6">
			<h2>External</h2>
			<div class="dark:text-gray-200">
				<ul>
					<li>
						<a href="https://github.com/viscoin/viscoin">Github</a>
					</li>
					<li>
						<a href="https://www.npmjs.com/package/viscoin">Package npm</a>
					</li>
					<li>
						<a href="https://www.reddit.com/r/viscoin">Reddit</a>
					</li>
					<li>
						<a href="https://www.youtube.com/channel/UCmbUxFHp_FG3gtRLG2yZ1tw">Youtube</a>
					</li>
					<li>
						<a href="https://vis.gg">Explorer</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="px-6">
			<h2>Internal</h2>
			<div class="dark:text-gray-200">
				<ul>
					<li>
						<router-link to="/litepaper">Litepaper</router-link>
					</li>
					<li>
						<router-link to="/wallet">Wallet</router-link>
					</li>
					<li>
						<router-link to="/docs">Documentation</router-link>
					</li>
					<li>
						<router-link to="/community">Community</router-link>
					</li>
					<li>
						<router-link to="/api">API</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="px-6">
			<h2>Statistics</h2>
			<div class="dark:text-gray-200">
				<Stats />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	mounted() {
		document.title = 'Viscoin.net'
	}
}
</script>