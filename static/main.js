async function getGuildAvatar(guildID, iconID) {
    console.log("Getting guild icon.")
    let path;

    // checks if the icon is animated or not
    if (/^a_/.test(iconID)) {
        path = `icons/${guildID}/${iconID}.gif`
    } else {
        path = `icons/${guildID}/${iconID}.png`
    }
    let imageTxt = await fetch(`/images/${path}`).then(val => val.text(), () => "discord-small.png");
    console.log(`image path is :${imageTxt}`);
    return imageTxt;
}

window.onload = async function() {
    const iconId = "a_824f9eef349f89034c1e54f088b52958";
    let guildImageURL = await getGuildAvatar("574287921717182505", iconId);
    document.getElementById("guild-icon").setAttribute("src", guildImageURL);
}
