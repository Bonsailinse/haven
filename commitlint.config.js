const Configuration = {
	extends: ['@commitlint/config-conventional'],
	formatter: '@commitlint/format',
	rules: {
		'type-enum': [2, 'always', ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']],
		'subject-case': [0, 'never'],
	},
	/*
     * Functions that return true if commitlint should ignore the given message.
     */
	ignores: [(commit) => commit === 'Push version'],
	/*
     * Whether commitlint uses the default ignore rules.
     */
	defaultIgnores: true,
	/*
     * Custom URL to show upon failure
     */
	helpUrl:
		'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};

module.exports = Configuration;
