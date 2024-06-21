/*
** EPITECH PROJECT, 2024
** Minecraft IA
** File description:
** index.js
*/

const mineflayer = require('mineflayer');
const { pathfinder, goals } = require('mineflayer-pathfinder');
const pvp = require('mineflayer-pvp').plugin
const armorManager = require('mineflayer-armor-manager');
const env = require('dotenv').config();
const { lookPlayer } = require('./movements.js');
const { responseMsg } = require('./message.js');
const { attackPlayer, stopAttack } = require('./attacks.js');

// Configuration du bot
const bot = mineflayer.createBot({
  host: process.env.HOST,
  port: process.env.PORT,       // Port du LAN
  username: process.env.BOTNAME  // Nom du bot
})
let target = null;

//Chargement des plugins
bot.loadPlugin(pathfinder);
bot.loadPlugin(pvp);
bot.loadPlugin(armorManager);

//Gestion des messages envoyés
bot.on('chat', (username, msg) => {
  if (username == bot.username) return;
  if (responseMsg(bot, msg))
    return bot.chat(`Bonjour ${username}`);
  if (msg == "attack")
    target = attackPlayer(bot); //Attaque le joueur
  if (msg == "stop")
    target = stopAttack(bot); //Arrête d'attaquer
});

bot.on('physicsTick', () => {
  if (target) {
    const distance = bot.entity.position.distanceTo(target.position);

    if (distance > 1 && distance < 15) {
      bot.pathfinder.setGoal(new goals.GoalFollow(target, 1), true);
      lookPlayer(bot, target);
    } else {
      bot.pathfinder.setGoal(null);
    }
  }
});
