interface Emoji {
	readonly emoji: any;
	readonly description: any;
}

let EmojiLog: Array<Emoji> = [
	{
		emoji: '📦 NEW:',
		description: 'Add something entirely new.',
	},
	{
		emoji: '👌 IMPROVE:',
		description: 'Improve piece of code like refactoring.',
	},
	{
		emoji: '🐛 FIX:',
		description: 'Fix a bug — need I say more?',
	},
	{
		emoji: '📖 DOC:',
		description: 'Anything documentation related.',
	},
	{
		emoji: '🚀 RELEASE:',
		description: 'Release a new version.',
	},
	{
		emoji: '🤖 TEST:',
		description: 'Testing related commits.',
	},
	{
		emoji: '‼️ BREAKING:',
		description: 'Change that breaks previous versions.',
    },
    {
		emoji: '💅STYLE:',
		description: 'UI/UX design related commits.',
	},
];
export default EmojiLog;
