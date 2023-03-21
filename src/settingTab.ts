import { App, PluginSettingTab, Setting } from "obsidian";
import MyPlugin from "./main";

export class SettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		containerEl.createEl("h2", { text: "Smart Assistant Setting" });

		new Setting(containerEl).setName("OpenAI API key").addText((text) =>
			text
				.setValue(this.plugin.settings.apiKey)
				.onChange(async (value) => {
					console.log(`Secret: ${value}`);
					this.plugin.settings.apiKey = value;
					await this.plugin.saveSettings();
				})
		);
	}
}
