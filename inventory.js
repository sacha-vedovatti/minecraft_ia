/*
** EPITECH PROJECT, 2024
** Minecraft IA
** File description:
** inventory's bot manager
*/

function getArmor(bot)
{
    bot.armorManager.equipAll();

    const swordItem = bot.inventory.items().find(item => item.name.includes('sword'));
    const shieldItem = bot.inventory.items().find(item => item.name.includes('shield'));
    if (swordItem) bot.equip(swordItem, 'hand');
    else bot.chat(`/give ${process.env.BOTNAME} minecraft:netherite_sword`);
    if (shieldItem) bot.equip(shieldItem, 'off-hand');
    else bot.chat(`/give ${process.env.BOTNAME} minecraft:shield`);
}

module.exports = { getArmor };
