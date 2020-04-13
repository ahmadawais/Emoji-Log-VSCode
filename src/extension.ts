import * as vscode from 'vscode';
import { GitExtension, Repository } from './api/git';
import EmojiLog from './EmojiLog/EmojiLog';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.EmojiLog', (uri?) => {
		const git = getGitExtension();

		if (!git) {
			vscode.window.showErrorMessage('Unable to load Git Extension');
			return;
		}

		let emojis = EmojiLog;
		let items = [];

		for (let i = 0; i < emojis.length; i++) {
			items.push({
				label: `${emojis[i].emoji}`,
				description: `${emojis[i].description}`,
				emoji: emojis[i].emoji,
			});
		}

		vscode.window
			.showQuickPick(items, { placeHolder: 'Select a particular Emoji Log git commit.' })
			.then(function (selected) {
				if (selected) {
					vscode.commands.executeCommand('workbench.view.scm');

					if (uri) {
						let selectedRepository = git.repositories.find((repository) => {
							return repository.rootUri.path === uri._rootUri.path;
						});
						if (selectedRepository) {
							prefixCommit(selectedRepository, selected.emoji);
						}
					} else {
						for (let repo of git.repositories) {
							prefixCommit(repo, selected.emoji);
						}
					}
				}
			});
	});

	context.subscriptions.push(disposable);
}

function prefixCommit(repository: Repository, prefix: String) {
	repository.inputBox.value = `${prefix} ${repository.inputBox.value}`;
}

function getGitExtension() {
	const vscodeGit = vscode.extensions.getExtension<GitExtension>('vscode.git');
	const gitExtension = vscodeGit && vscodeGit.exports;
	return gitExtension && gitExtension.getAPI(1);
}

export function deactivate() {}
