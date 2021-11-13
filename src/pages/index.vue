<template>
	<div class="bg-gradient-to-br from-viscoin-blue-1 via-viscoin-blue-2 to-viscoin-blue-3 md:py-10">
		<div class="max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12">
			<Logo class="filter drop-shadow-lg w-60 mx-auto" />
		</div>
	</div>
	<div
		class="
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			mx-auto
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			py-20
		"
	>
		<div class="col-span-full px-6">
			<h1 class="text-center">Welcome to Viscoin</h1>
			<h3 class="text-center">Money made decentralized.</h3>
			<!-- <div
				class="flex justify-center pt-5"
			>
				<router-link
					to="/litepaper"
				>
					<Button text="Read the Litepaper" />
				</router-link>
			</div> -->
		</div>
	</div>
	<div
		class="
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-40
		"
		style="background-color: #00aeff11;"
	>
		<div class="px-12">
			<div class="text-center">
				<h2 class="">What is Viscoin?</h2>
				<p>
					Viscoin is an experimental digital currency that lives on the internet. Payments can be made by anyone, to anyone, at any time, anywhere in the world, and are carried out collectively by the network with the use of peer-to-peer technology. Cryptography makes trusting a central authority obsolete when anyone with a computer can verify that a transaction is valid.
				</p>
			</div>
		</div>
		<div class="flex justify-center align-middle">
			<img class="w-80" src="/logo.svg" alt="">
		</div>
	</div>
	<div
		class="
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-40
		"
		style="background-color: #00ff9908;"
	>
		<div class="px-6 text-center mb-10">
			<img class="w-80" src="/payment-16.svg" alt="">
		</div>
		<div class="px-6">
			<div class="text-center">
				<h2 class="">Wallet</h2>
				<p>
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
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-40
		"
		style="background-color: #ff800008;"
	>
		<div class="px-6">
			<div class="">
				<h2 class="text-center">Technical</h2>
				<p>
					
				</p>
				<ul>
					<li>1 minute avg block time</li>
					<li>1 Viscoin mining reward</li>
					<li>Live since 2021-01-01 00:00:00</li>
					<li>Argon2d ASIC resistant mining algorithm</li>
				</ul>
			</div>
		</div>
		<div class="px-6 text-center mb-10">
			<img class="w-80" src="/write-16.svg" alt="">
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
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-40
		"
		style="background-color: #ff00ee08;"
	>
		<div class="px-6">
			<div class="text-center">
				<h2 class="">Global currency</h2>
				<p>
					Viscoin is a decentralized entity that lives on the interent. It operates freely around the world, connecting people with currency at the speed of light.
					<br>
					Anyone with an internet connection can use Viscoin.
				</p>
			</div>
		</div>
		<div class="px-6 text-center mb-10">
			<img class="w-80" src="/world-23.svg" alt="">
		</div>
	</div>
	<div
		class="
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-40
		"
		style="background-color: #00ff6a08;"
	>
		<div class="px-6 text-center mb-10">
			<!-- <img class="w-80" src="/world-23.svg" alt=""> -->
			<img class="w-80" src="/blockchain.svg" alt="">
		</div>
		<div class="px-6">
			<div class="text-center">
				<h2 class="">Explorer</h2>
				<p>
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
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-40
		"
		style="background-color: #ff190008;"
	>
		<div class="px-6">
			<div class="text-center">
				<h2 class="">Contributing</h2>
				<p>
					Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
				</p>
			</div>
		</div>
		<div class="px-6 text-center mb-10">
			<img class="w-80" src="/multi-agent-system.svg" alt="">
		</div>
		<div class="col-span-full flex justify-center">
			<a href="https://github.com/viscoin/viscoin">
				<Button text="View on Github" />
			</a>
		</div>
	</div>
	<div
		class="
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-40
		"
		style="background-color: #9000ff08;"
	>
		<div class="px-6 text-center mb-10">
			<img class="w-80" src="/growth-3.svg" alt="">
		</div>
		<div class="px-6">
			<div class="text-center">
				<h2 class="">Community</h2>
				<p>
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
			prose prose-discord
			dark:prose-light
			lg:prose-lg
			mx-auto
			w-full
			xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl
			border-t-2
			py-20
		"
	>
		<div class="px-6">
			<h2>Why?</h2>
			<ul>
				<li>Decentralized blockchain</li>
				<li><a href="https://nodejs.org/">NodeJS</a> runtime environment</li>
				<li>Source code written in <a href="https://www.typescriptlang.org/">Typescript</a></li>
				<li><a href="https://en.wikipedia.org/wiki/Argon2">Argon2</a> ASIC resistant mining algorithm</li>
				<li>Easy to implement in your project</li>
			</ul>
		</div>
		<div class="px-6">
			<h2>Statistics</h2>
			<Stats />
			<p class="text-center">... and growing!</p>
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