<template>
	<div class="
		flex
		flex-col
		justify-between h-full
		mx-6
	">
		<div
			class="
				prose prose-discord
				dark:prose-light
				lg:prose-lg
				mx-auto
				pb-8
				w-full
				mt-8
			"
		>
			<h4 class="flex justify-between">
				<span>{{ this.faces[Math.floor(Math.random() * this.faces.length)] }}</span>
				<!-- <span v-if="show === 'transaction'">Send</span>
				<span v-if="show === 'private_key'">Private</span> -->
				<ToggleButton :defaultState=explorer labelEnableText="Vis.gg" labelDisableText="Legacy"
					v-on:change="toggle_explorer" />
			</h4>
			<div class="pt-10">
				<router-link v-if="show === ''" to="/wallet">
					<span>Back</span>
				</router-link>
				<router-link v-else :to="'/wallet/' + this.address" @click="this.show = ''">
					<span>Back</span>
				</router-link>
			</div>
		</div>
		<div
			v-if="show === ''"
			class="
				max-w-3xl sm:mx-auto text-center sm:px-16 flex flex-col gap-10 md:px-12
			"
		>
			<WalletAddress
				title="address (public)"
				class="max-w-screen-sm
				filter drop-shadow-lg mx-auto
					pb-40
				" :address=wallet?.address />
				<!-- <Button @click="show_qr_code = !show_qr_code" class="mx-auto" text="QR" /> -->
				<!-- <a :href=qr_url class="w-10 mx-auto" >
					<img @click="show_qr_code = !show_qr_code"
						src="qrcode-solid.svg" alt="">
				</a> -->
				<!-- <Button @click="share" text="Share" class="mx-auto" /> -->
		</div>
		<div
			v-if="wallet"
			class="
				prose prose-discord
				dark:prose-light
				lg:prose-lg
				mx-auto
				w-full
			"
		>
			<div
				v-if="show==='transaction'"
				class="
					max-w-3xl sm:mx-auto sm:px-16 flex flex-col md:px-12
				"
			>
				<div class="flex flex-col sm:flex-row justify-between mb-10">
					<strong>Sending&nbsp;from</strong>
					<span class="underline">{{ this.address }}</span>
				</div>
				<label style="font-size: .8rem;" for="address">The base58 address of the recipient.</label>
				<input
					name="address"
					class="
						bg-gray-200
						text-gray-800
						hover:bg-gray-300
						hover:text-black
						dark:bg-gray-800
						dark:text-gray-200
						dark:hover:bg-gray-900
						dark:hover:text-white
						mb-10
					"
					v-model=transaction.to
					type="text" placeholder="Enter address...">
				<label style="font-size: .8rem;" for="amount">How much the recipient will receive.</label>
				<input
					name="amount"
					class="
						bg-gray-200
						text-gray-800
						hover:bg-gray-300
						hover:text-black
						dark:bg-gray-800
						dark:text-gray-200
						dark:hover:bg-gray-900
						dark:hover:text-white
						mb-10
					"
					v-model=transaction.amount
					type="text" placeholder="Enter amount...">
				<label style="font-size: .8rem;" for="miner-fee">How much the miner will receive.</label>
				<input
					name="miner-fee"
					class="
						bg-gray-200
						text-gray-800
						hover:bg-gray-300
						hover:text-black
						dark:bg-gray-800
						dark:text-gray-200
						dark:hover:bg-gray-900
						dark:hover:text-white
						mb-6
					"
					v-model=transaction.miner_fee
					type="text" placeholder="Enter miner fee...">
				<Button
					style="user-select: none;"
					class="mx-auto mb-10"
					@click="sign_transaction" text="Sign Transaction" />
				<textarea
					v-if=transaction_str
					class="
						custom-scroll
						bg-gray-200
						text-gray-800
						hover:bg-gray-300
						hover:text-black
						dark:bg-gray-800
						dark:text-gray-200
						dark:hover:bg-gray-900
						dark:hover:text-white
						resize-none
						text-xs
						mb-6
					"
					v-model=transaction_str
				name="" id="" cols="30" rows="6"></textarea>
				<a v-if="explorer && transaction_json" :href="'https://vis.gg/#/search/' + transaction_json">
					<Button
						style="user-select: none;"
						class="mx-auto bg-indigo-600 hover:bg-indigo-700"
						@click="sign_transaction"
						text="Sign & Broadcast" />
				</a>
				<router-link v-else-if=transaction_json :to="'/api?search=' + transaction_json">
					<Button
						style="user-select: none;"
						class="mx-auto"
						@click="sign_transaction"
						text="Sign & Broadcast" />
				</router-link>
			</div>
			<div
				v-if="show==='private_key'"
				class="
					max-w-3xl sm:mx-auto text-center sm:px-16 flex flex-col gap-10 md:px-12
				"
			>
				<div class="flex flex-row justify-center">
					<Button
						class="mx-auto
						hover:bg-red-600
						bg-red-500"
						@click="del" text='Delete' />
					<Button
						class="mx-auto"
						@click="show_key = !show_key" :text="show_key ? 'Hide Key' : 'Show Key'" />
				</div>
				<WalletKey
					v-if=show_key
					title="address (public)"
					class="max-w-screen-sm w-60" :private="wallet?.key" />
				<!-- <div v-if="show_key && qr_key" class="flex justify-center mt-6">
					<div class="flex flex-col justify-center center align-center">
						<div style="font-size: 1rem;" class="mx-auto">Scan address QR</div>
						<div style="font-size: .8rem;" class="mx-auto">{{ qr_key }}</div>
					</div>
				</div>
				<div v-if="show_key && qr_key">
					<QRCode :data=qr_key />
				</div> -->
			</div>
			<!-- <div v-if="show === '' && qr_address" class="flex justify-center mt-6">
				<div class="flex flex-col justify-center center align-center">
					<div style="font-size: 1rem;" class="mx-auto">Scan address QR</div>
					<div style="font-size: .8rem;" class="mx-auto">{{ qr_address }}</div>
				</div>
			</div> -->
			<!-- <div v-if="show === '' && qr_address" class="flex justify-center">
				<QRCode :data=qr_address />
			</div> -->
			<!-- <Button class="w-20 mx-auto" text="Share" @click="share" /> -->
			<div v-if="show === ''" style="user-select: none;" class="flex flex-row justify-evenly w-full py-10">
				<Button text="Create Transaction" v-on:click="show = show === 'transaction' ? show='' : 'transaction'" />
				<a v-if="explorer" :href="'https://vis.gg/#/explorer/' + wallet.address">
					<Button
						class="mx-auto bg-indigo-600 hover:bg-indigo-700"
						text="Check Balance" />
				</a>
				<router-link v-else :to="'/api?search=balance/' + wallet.address">
					<Button
						class="mx-auto"
						text="Check Balance" />
				</router-link>
			</div>
		</div>
		<div>
			<div v-if="show === ''" style="user-select: none;" class="flex flex-row justify-evenly w-full mb-10">
				<Button text="Private Key" v-on:click="show = show === 'private_key' ? show='' : 'private_key'" />
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			faces: [
				'(✿◠‿◠)',
				'≧◡≦',
				'(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
				'(づ｡◕‿‿◕｡)づ',
				'(▰˘◡˘▰)',
				'◎[▪‿▪]◎',
				'(✿ ♥‿♥)',
				'♥‿♥',
				'(￣。￣)～ｚｚｚ',
				'( ´_⊃｀)',
				'( ͡° ͜ʖ ͡°)',
				'(　ﾟ,_ゝﾟ)'
			],
            address: this.$route.params.address,
			wallets: [],
			node_input: '',
			nodes: [],
			show_key: false,
			wallet: null,
			show_qr_code: false,
			transaction: {
				to: this.$route.query.to || '',
				amount: this.$route.query.amount || '',
				miner_fee: ''
			},
			transaction_str: '',
			transaction_json: '',
			show: '',
			explorer: true
		}
	},
	methods: {
		toggle_explorer(e) {
			if (typeof e !== 'boolean') return
			this.explorer = e
		},
		sign_transaction() {
			this.transaction_json = null
			try {
				if (!this.transaction.to) throw new Error('Recipient address is empty')
				const valid = Address.verifyChecksumAddress(base58.decode(this.transaction.to))
				if (!valid) throw new Error('Recipient address invalid checksum')
				const to = Address.toBuffer(this.transaction.to)
				if (this.transaction.to === this.address) throw new Error('Recipient address is the same as sender address')
				if (!this.transaction.amount) throw new Error('Amount is empty')
				const amount = beautifyBigInt(parseBigInt(this.transaction.amount))
				if (!this.transaction.miner_fee) throw new Error('Miner fee is empty')
				const minerFee = beautifyBigInt(parseBigInt(this.transaction.miner_fee))
				const privateKey = this.wallet.key
				const transaction = new Transaction({
					to,
					amount,
					minerFee,
					timestamp: Date.now()
				})
				transaction.sign(base58.decode(privateKey))
				const code = transaction.isValid()
				if (code) throw new Error(`Transaction invalid 0b${code.toString(2)}`)
				this.transaction_str = JSON.stringify(transaction)
				this.transaction_json = this.transaction_str
			}
			catch (err) {
				this.transaction_str = err
			}
		},
		del() {
			this.wallets = this.wallets.filter(e => e.address !== this.address)
			this.wallet = null
			this.$router.push('/wallet')
		},
		async share() {
			const data = this.qr_address
			// console.log(data)
			const settings = { errorCorrectionLevel: 'H', color: { dark: '000000', light: 'ffffff' } }
			const b64toBlob = (dataURI) => {
				let byteString = atob(dataURI.split(',')[1])
				let ab = new ArrayBuffer(byteString.length)
				let ia = new Uint8Array(ab)
				for (var i = 0; i < byteString.length; i++) {
					ia[i] = byteString.charCodeAt(i)
				}
				return new Blob([ab], { type: 'image/png' })
			}
			const getQRCode = async () => {
				return new File([b64toBlob(await qrcode.toDataURL(data, settings))], 'qrcode.png', { type: 'image/png' })
			}
			window.navigator.share({
                title: 'Send Viscoin',
                url: data,
                files: [
                    await getQRCode()
                ]
            })
		}
	},
	mounted() {
		document.title = 'Viscoin.net - Wallet - ' + this.$route.params.address
		if (localStorage.keys) {
			this.wallets = JSON.parse(localStorage.keys).map(key => {
				const key_buffer = base58.decode(key)
				const address_v1 = addressFromPublicKey(publicKeyFromPrivateKey(key_buffer))
				const address_v2 = Address.convertToChecksumAddress(address_v1)
				const address = base58.encode(address_v2)
				return { key, address }
			})
			this.wallet = this.wallets.find(e => e.address === this.address)
		}
		if (localStorage.nodes) {
			this.nodes = JSON.parse(localStorage.nodes)
		}
		this.qr_address = `${location.origin}/#/wallet?to=${this.wallet?.address}`
		this.qr_key = `${location.origin}/#/wallet/import?key=${this.wallet?.key}`
	},
	watch: {
		wallets: {
			handler(new_wallets) {
				localStorage.keys = JSON.stringify(new_wallets.map(e => e = e.key))
			},
			deep: true
		},
		nodes: {
			handler(new_nodes) {
				localStorage.nodes = JSON.stringify(new_nodes)
			},
			deep: true
		}
	}
}
</script>