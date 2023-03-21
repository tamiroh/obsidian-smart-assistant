import { Plugin } from "obsidian";
import { SettingTab } from "./settingTab";
import { Settings } from "./types/Settings";
import { DEFAULT_SETTINGS } from "./constants/defaultSettings";

export default class MyPlugin extends Plugin {
	settings: Settings;

	override async onload() {
		await this.loadSettings();
		this.addCommands();
		this.addSettingTab(new SettingTab(this.app, this));
	}

	// eslint-disable-next-line class-methods-use-this
	addCommands() {
		//
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
