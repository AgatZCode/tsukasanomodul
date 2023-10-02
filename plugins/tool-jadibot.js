import fs from 'fs';
import chalk from 'chalk';
import { connectToServer } from '@libs/whatsapp-server';

export const commands = ["jadibot"];
export const cooldown = 13;
export const isSewa = true;
export const isPrivate = true;
export const isPremium = true;

export const callback = async ({ sock, m }) => {
  connectToServer(sock, m.chat);
};

// Watch for changes and reload the module
const file = new URL(import.meta.url).pathname;
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.whiteBright("├"), chalk.keyword("red")("[ UPDATE ]"), `${file}`);
  delete import.cache[file];
  import(file);
});
