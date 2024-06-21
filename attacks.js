const { getArmor } = require("./inventory");
const { followPlayer } = require("./movements");

function attackPlayer(bot)
{
    const filter = (entity) => entity.type === 'player';
    target = bot.nearestEntity(filter);

    if (target) {
        getArmor(bot);
        followPlayer(bot, target);
        bot.pvp.attack(target);
    }
    return target;
}

function stopAttack(bot)
{
    bot.pvp.stop();
    bot.pathfinder.setGoal(null);
    target = null;
    return target;
}

module.exports = { attackPlayer, stopAttack };
