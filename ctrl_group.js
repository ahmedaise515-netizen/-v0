const handler = async (m, { conn, command }) => {
  if (command === "قفل") {
    await conn.groupSettingUpdate(m.chat, 'announcement');
    m.reply('🔒 *البار مقفول مش عايز صداع خمس دقايق* 🔒');
  } else if (command === "فتح") {
    await conn.groupSettingUpdate(m.chat, 'not_announcement');
    m.reply('🔓 *فتحت البار اهدو بقا* 🔓');
  }
};

handler.usage = ["قفل", "فتح"];
handler.category = "admin";
handler.command = ["قفل", "فتح"];
handler.admin = true;
handler.botAdmin = true;

export default handler;