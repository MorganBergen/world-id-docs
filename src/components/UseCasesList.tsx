import { FC } from 'react'
import Image from 'next/image'
import { Link } from '@/components/Link'
import RedirectIcon from './icons/RedirectIcon'
import { UseCasesListItem } from '@/components/UseCasesListItem'

// ANCHOR: LinkCard component for the links in the bottom of the page
const LinkCard: FC<{ href: string; heading: string; description: string }> = ({ href, heading, description }) => {
	return (
		<Link
			className="grid gap-y-2 content-start py-6 px-5 bg-gray-50 border border-gray-100 rounded-xl relative no-underline hover:bg-gray-100/70 transition-colors"
			href={href}
		>
			<span className="text-sm font-medium text-gray-900 !m-0 leading-none">{heading}</span>
			<p className="text-sm text-gray-900/80 m-0 leading-[1.3]">{description}</p>
			<RedirectIcon className="absolute top-4 right-4 h-5 w-5 text-gray-900" />
		</Link>
	)
}

// ANCHOR: Main page component
export const UseCasesList: FC<{}> = () => {
	return (
		<div>
			<div className="flex flex-col items-center">
				<Image src="/images/docs/use-cases/illustration.svg" width={68} height={72} alt="Verified at Orb" />
				<div className="mt-12 font-medium text-sm text-[#007fd3] leading-4 uppercase">
					World ID USE CASES & IDEAS
				</div>
				<h1 className="m-0 mt-2 text-4xl text-center">
					The protocol to bring global proof of personhood to the internet.
				</h1>
				<p className="m-0 mt-4 text-base text-gray-400 leading-6">
					Privacy First. Self Custodial. Decentralized
				</p>
				<div className="mt-6 flex items-center gap-x-2">
					<Link
						className="px-4 py-3 bg-gray-900 text-white leading-4 no-underline rounded-[10px] hover:bg-gray-900/80"
						href="" // FIXME: Add link
					>
						Start building
					</Link>
					<Link
						className="px-5 py-3 bg-gray-200 text-gray-900 leading-4 no-underline rounded-[10px] hover:bg-gray-200/80"
						href="" // FIXME: Add link
					>
						Explore examples
					</Link>
				</div>
			</div>

			<h2 className="m-0 mt-16 font-bold text-sm text-gray-400 leading-4 uppercase">
				Explore World ID uses cases
			</h2>

			<div className="mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
				<UseCasesListItem
					color="#9D50FF"
					image="/images/docs/use-cases/icons/defi-and-fintech.svg"
					title="DeFi and Fintech"
					description="Particularly relying on global proof of personhood, can be used to build a truly democratic, one person one vote, system as well as novel voting systems centered around unique humans."
					items={[
						'Undercollateralized lending & credit',
						'Credit card chargeback protection',
						'Zero-knowledge compliance with nationality, age and sanctions',
						'Private transaction mixer with daily amount limits and ZK compliance for MLP',
						'Private decentralized credit score',
					]}
					linkHref="/use-cases/defi-and-fintech"
				/>

				<UseCasesListItem
					color="#4940E0"
					image="/images/docs/use-cases/icons/voting-platforms.svg"
					title="Voting platforms"
					description="Using World ID’s proof of personhood, a system could be built to ensure aid from NGOs, non-profits, government programs, etc. is distributed equitably to recipients."
					items={[
						'Deduplication in government elections',
						'Novel DAO governance including quadratic, and conviction voting',
						'Anonymous online polls platform',
						'Snapshot integration',
						'Change.org integration',
					]}
					linkHref="/use-cases/voting-platforms"
				/>

				<UseCasesListItem
					color="#487CA5"
					image="/images/docs/use-cases/icons/social-media.svg"
					title="Social Media"
					description="Using World ID’s proof of personhood, a system could be built to ensure aid from NGOs, non-profits, government programs, etc. is distributed equitably to recipients."
					items={[
						'Undercollateralized lending & credit',
						'Credit card chargeback protection',
						'Zero-knowledge compliance with nationality, age and sanctions',
						'Private transaction mixer with daily amount limits and ZK compliance for MLP',
						'Private decentralized credit score',
					]}
					linkHref="/use-cases/social-media"
				/>

				<UseCasesListItem
					color="#00C313"
					image="/images/docs/use-cases/icons/wealth-distribution.svg"
					title="Wealth Distribution"
					description="Particularly relying on global proof of personhood, can be used to build a truly democratic, one person one vote, system as well as novel voting systems centered around unique humans."
					items={[
						'Deduplication in government elections',
						'Novel DAO governance including quadratic, and conviction voting',
						'Anonymous online polls platform',
						'Snapshot integration',
						'Change.org integration',
					]}
					linkHref="/use-cases/wealth-distribution"
				/>

				<UseCasesListItem
					color="#FFB11B"
					image="/images/docs/use-cases/icons/token-airdrops.svg"
					title="Token Airdrops"
					description="Particularly relying on global proof of personhood, can be used to build a truly democratic, one person one vote, system as well as novel voting systems centered around unique humans."
					items={[
						'Undercollateralized lending & credit',
						'Credit card chargeback protection',
						'Zero-knowledge compliance with nationality, age and sanctions',
						'Private transaction mixer with daily amount limits and ZK compliance for MLP',
						'Private decentralized credit score',
					]}
					linkHref="/use-cases/token-airdrops"
				/>

				<UseCasesListItem
					color="#FF5A76"
					image="/images/docs/use-cases/icons/nfts.svg"
					title="NFTs"
					description="Using World ID’s proof of personhood, a system could be built to ensure aid from NGOs, non-profits, government programs, etc. is distributed equitably to recipients."
					items={[
						'Deduplication in government elections',
						'Novel DAO governance including quadratic, and conviction voting',
						'Anonymous online polls platform',
						'Snapshot integration',
						'Change.org integration',
					]}
					linkHref="/use-cases/nfts"
				/>

				<UseCasesListItem
					color="#C4554D"
					image="/images/docs/use-cases/icons/customer-incentives.svg"
					title="Customer Incentives"
					description="Using World ID’s proof of personhood, a system could be built to ensure aid from NGOs, non-profits, government programs, etc. is distributed equitably to recipients."
					items={[
						'Undercollateralized lending & credit',
						'Credit card chargeback protection',
						'Zero-knowledge compliance with nationality, age and sanctions',
						'Private transaction mixer with daily amount limits and ZK compliance for MLP',
						'Private decentralized credit score',
					]}
					linkHref="/use-cases/customer-incentives"
				/>

				<UseCasesListItem
					color="#39B8A8"
					image="/images/docs/use-cases/icons/marketplaces.svg"
					title="Marketplaces"
					description="Particularly relying on global proof of personhood, can be used to build a truly democratic, one person one vote, system as well as novel voting systems centered around unique humans."
					items={[
						'Deduplication in government elections',
						'Novel DAO governance including quadratic, and conviction voting',
						'Anonymous online polls platform',
						'Snapshot integration',
						'Change.org integration',
					]}
					linkHref="/use-cases/marketplaces"
				/>

				<UseCasesListItem
					color="#8A67AB"
					image="/images/docs/use-cases/icons/events.svg"
					title="Events"
					description="Particularly relying on global proof of personhood, can be used to build a truly democratic, one person one vote, system as well as novel voting systems centered around unique humans."
					items={[
						'Undercollateralized lending & credit',
						'Credit card chargeback protection',
						'Zero-knowledge compliance with nationality, age and sanctions',
						'Private transaction mixer with daily amount limits and ZK compliance for MLP',
						'Private decentralized credit score',
					]}
					linkHref="/use-cases/events"
				/>
			</div>

			<h2 className="m-0 mt-12 font-bold text-xl text-black text-center">Join Worldcoin builder community</h2>
			<div className="mt-6 grid md:grid-cols-3 gap-y-6 items-center justify-center">
				<div className="flex flex-col items-center w-[250px]">
					<div className="font-bold text-black text-[64px] leading-[64px]">5.4m</div>
					<div className="mt-2 text-xs text-black/50 leading-4">Developer verifications</div>
				</div>
				<div className="flex flex-col items-center w-[250px]">
					<div className="font-bold text-black text-[64px] leading-[64px]">1.5m</div>
					<div className="mt-2 text-xs text-black/50 leading-4">Biometric credentials</div>
				</div>
				<div className="flex flex-col items-center w-[250px]">
					<div className="font-bold text-black text-[64px] leading-[64px]">42.5k</div>
					<div className="mt-2 text-xs text-black/50 leading-4">Phone credentials</div>
				</div>
			</div>
			<div className="mt-6 text-2xs text-black/50 text-center">
				*as World ID is a fully open protocol and anyone can build their own implementations, it is not possible
				to have numbers on all usage and holders.
			</div>

			<div className="grid gap-y-2 mt-24">
				<h3 className="uppercase text-2xs m-0 font-medium text-gray-500">
					Learn how to use the Developer Portal
				</h3>

				<div className="grid lg:grid-cols-3 gap-2">
					<LinkCard
						href="https://developer.worldcoin.org/"
						heading="Start building"
						description="Build your apps using developer portal."
					/>

					<LinkCard
						href="#" // FIXME: Add proper url
						heading="Worldcoin Grants"
						description="Reach out to our team and talk about all the possibilities."
					/>

					<LinkCard
						href="https://discord.gg/worldcoin"
						heading="Join our Discord community"
						description="Jam on ideas, see what others are building, ask questions. Look for the #developers channel."
					/>
				</div>
			</div>
		</div>
	)
}