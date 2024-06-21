/*
** EPITECH PROJECT, 2024
** Minecraft IA
** File description:
** messages manager
*/

function responseMsg(bot, message)
{
    let msg = message.toLowerCase();

    if (msg.includes("bonjour") || msg.includes("coucou") || msg.includes("cc")
        || msg.includes("bjr") || msg.includes("salut") || msg.includes("slt")
        || msg.includes("wsh") || msg.includes("wesh"))
        return true;
    return false;
}

module.exports = { responseMsg };
