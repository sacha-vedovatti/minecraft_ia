/*
** EPITECH PROJECT, 2024
** Minecraft IA
** File description:
** movements manager
*/

const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');

function lookPlayer(bot, player)
{
    const pos = player.position.offset(0, player.height, 0);

    bot.lookAt(pos);
}

function followPlayer(bot, player)
{
    if (!player)
        return bot.chat("Il n'y a pas de joueur autour");

    const mcData = require('minecraft-data')(bot.version);
    const movements = new Movements(bot, mcData);
    const goal = new goals.GoalFollow(player, 1);

    bot.pathfinder.setMovements(movements);
    bot.pathfinder.setGoal(goal, true);
}

module.exports = { followPlayer, lookPlayer };