const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233246443604";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_52_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTIxLFxuICAgICAgICA4MixcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU3LFxuICAgICAgICA4NixcbiAgICAgICAgNyxcbiAgICAgICAgNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjExLFxuICAgICAgICA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDc3LFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTIyLFxuICAgICAgICA0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk4LFxuICAgICAgICA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NixcbiAgICAgICAgODAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MixcbiAgICAgICAgODUsXG4gICAgICAgIDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3LFxuICAgICAgICA5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNixcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXWU5idUUybmFMNWVyT2FFWHR6OG4vQTQyNGdjQXk4MUxhY3JmQ044SHdVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSTlk2NlN1d1NCdVZnTkMxQmlfQVp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiNjYxYmYwLWY4YTQtNDNiMy05Y2I0LTIwYmM4MWIyNDkxM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NixcbiAgICAgIDk0LFxuICAgICAgNTksXG4gICAgICAyMTUsXG4gICAgICA2MCxcbiAgICAgIDEwMSxcbiAgICAgIDEyNSxcbiAgICAgIDE2NSxcbiAgICAgIDI0MSxcbiAgICAgIDg4LFxuICAgICAgMTMsXG4gICAgICA0LFxuICAgICAgMTE0LFxuICAgICAgMjQ2LFxuICAgICAgODYsXG4gICAgICAyNCxcbiAgICAgIDE0NixcbiAgICAgIDQsXG4gICAgICAyMyxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NCxcbiAgICAgIDI0NSxcbiAgICAgIDE4MixcbiAgICAgIDIzNCxcbiAgICAgIDE1NyxcbiAgICAgIDE3NixcbiAgICAgIDEyNCxcbiAgICAgIDIzMixcbiAgICAgIDE5MCxcbiAgICAgIDExNyxcbiAgICAgIDIwNCxcbiAgICAgIDMwLFxuICAgICAgMTY3LFxuICAgICAgNTYsXG4gICAgICA0MCxcbiAgICAgIDMxLFxuICAgICAgMTgxLFxuICAgICAgNzIsXG4gICAgICAyNDksXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3OU1MN1NZRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQ2NDQzNjA0OjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8Jakm05KXCIsXG4gICAgXCJsaWRcIjogXCIxNzc2NDAxODI5NjAzMzM6MzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnplbjZzRUVNTHp5YklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI5bWhEaEdNQzJwZ0dLcVFOWkFYa0JiZmFkbTdBZGRTd1NVbmdOTXZUZXk0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5HcC9lUmM5bVh4b2JUUWpCS3l1b2hMSTJVdllWbVlCSkg5cjdMUDZ5Y0JDVDEwMnlIVFJjK2hrZmtXVS9iNVpYRlNXSEN0aEZNSGVlaTdRUWxtK0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpoLzN0MGJWVEtvOHFEYlJRR05PTk9MREo0QXYvd2VHTVRCUmRtTm52WEJOWWJtRkk4UnplYys3UFJUclJnOTgvSHM2ZEozeVRzRXlqcXd2NHJwaURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzI0NjQ0MzYwNDozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NjgxMTU4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
