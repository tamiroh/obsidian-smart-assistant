import { Editor, Notice, Plugin } from "obsidian";
import { SettingTab } from "./settingTab";
import { Settings } from "./types/Settings";
import { DEFAULT_SETTINGS } from "./constants";

export default class MyPlugin extends Plugin {
	settings: Settings;

	override async onload() {
		await this.loadSettings();
		this.addStatusBarItem().setText("Status Bar Text");
		this.addCommands();
		this.addSettingTab(new SettingTab(this.app, this));
	}

	addCommands() {
		this.addCommand({
			id: "sample-editor-command",
			name: "Sample editor command",
			editorCallback: (editor: Editor) => {
				new Notice(editor.getSelection());
				editor.replaceSelection("Sample Editor Command");
			},
		});
	}

	async loadSettings() {
		this.settings = {
			...DEFAULT_SETTINGS,
			...(await this.loadData()),
		};
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
