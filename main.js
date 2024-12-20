
const Discord = require('discord.js');

const { Client, GatewayIntentBits, Partials,MessageAttachment, EmbedBuilder} = require('discord.js');
//const { InteractionTypes } = require('discord.js/typings/enums');
const { all, round, e } = require('mathjs');

// const myIntents = new Intents();
// myIntents.add(Intents.FLAGS.GUILD_MESSAGES);

const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION" ],
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// const bot = new Discord.Client({
//     partials: ["MESSAGE", "CHANNEL", "REACTION" ],
//     intents: [
//         GatewayIntentBits.Guilds, 
//         GatewayIntentBits.GuildMessages,
//         GatewayIntentBits.MessageContent,
//    ]
// });
//const button = require('discord-buttons');
//button(client);

const GOD = client.users.cache.get('533486454123266049');
const GODid = '533486454123266049';

const cmdlistWeber = new EmbedBuilder()
    .setTitle("Command List")
    .setColor(0x4c00b0)
    .setImage('https://1000logos.net/wp-content/uploads/2021/07/Weber-State-Wildcats-logo-500x281.png')
    .addFields(
        // {
        //     name: '!q',
        //     value: '(puts you in 6mans queue)',
        // },
        // {
        //     name: '!leave',
        //     value: '(takes you out of 6mans queue)',
        // },
        // {
        //     name: '!status',
        //     value: '(shows how many players are in the queue)',
        // },    commands?.create({

        {
            name: '/RLrole',
            value: '(puts you in the Rocket League role)',
        },
        {
            name: '/outRLrole',
            value: '(takes you out of the Rocket League role)',
        },
        {
            name: '/6mansrole',
            value: '(puts you in the 6mans role)',
        },
        {
            name: '/out6mansrole',
            value: '(takes you out of the 6mans role)',
        },
        {
            name: '/tryout',
            value: '(puts you in the tryouts role)',
        },
        {
            name: '/stoptryout',
            value: '(takes you out of tryouts)',
        },
        {
            name: '/6manslist',
            value: '(shows everyone currently in the 6mans role)',
        },
                );

    const cmdlistSAA = new EmbedBuilder()
    .setTitle("Command List")
    .setColor(0xFF0000)
    .setImage('https://www.1westconstruction.com/file/b416ff83-5328-4fc1-b2ae-e304329b219f')
    .addFields(
        // {
        //     name: '!q',
        //     value: '(puts you in 6mans queue)',
        // },
        // {
        //     name: '!leave',
        //     value: '(takes you out of 6mans queue)',
        // },
        // {
        //     name: '!status',
        //     value: '(shows how many players are in the queue)',
        // },
        {
            name: '/food',
            value: '(shows a list of food)',
        },
                );
              

    //             message.channel.send({embeds: [cmdlist]});;
// global.fdchoicelist = new Discord.MessageEmbed()
//     .setTitle("Food Choices")
//     .setColor('RED');


const token = 'Token';



//client.commands = new Discord.Collection();




var adj = ' is daddy';

var inbreds = `<@${'638777923142418485'}>` && `<@${'638777923142418485'}>`;



const { enterQueue, leaveQueue, getQueueStatus, reactionrole } = require('./actions');
//const { join_team, new_team } = require('./team');
global.queue = [];

randomDm = [];

var allFood = 12;
var foodCount = 0;
var storedRandNum = 0;
var foodList = [];
var i = 0;
var foodChoiceCount = 0;
var newFoodChoiceCount = 0;

//const attachment = new MessageAttachment("https://images.app.goo.gl/fBrWC2MnqvPNqoiYA");

// module.exports = {
//   name: "commandlist",
//   description: "sends the list of commands for RL Bot",
//   run: async (client, interaction) => {
//     const cmdlist = new MessageEmbed()
//         .setTitle("Command List")
//         .setColor("PURPLE")
//         .setImage('https://1000logos.net/wp-content/uploads/2021/07/Weber-State-Wildcats-logo-500x281.png'
//         );

//         interaction.followUp({ embeds: [cmdlist] })
//   },

// };
// module.exports = {
//   join_team,
//   new_team,
// }

const privateMessage = require('./private-messaging');

// let localIP;

// var os = require('os');
// var ifaces = os.networkInterfaces();
// //const { networkInterfaces } = require('os');
// Object.keys(ifaces).forEach(function (ifname) {
//    var alias = 0;

//    ifaces[ifname].forEach(function (iface) {
//       if ('IPv4' !== iface.family || iface.internal !== false) {
//          // Skip over internal (i.e. 127.0.0.1) and non-IPv4 addresses
//          return;
//       }

//       if(ifname === 'Ethernet') {
//          if (alias >= 1) {
//             // This single interface has multiple IPv4 addresses
//             // console.log(ifname + ':' + alias, iface.address);
//          } else {
//             // This interface has only one IPv4 address
//             // console.log(ifname, iface.address);
//          }
//          ++alias;
//          localIP = iface.address;
//       }
//    });
// });
//console.log(localIP);


client.on('ready', () => {
    console.log('daddy is online!');
    console.log('SLASH is online!');
    
    // const guildId = '771047720248279043';
    // const guild = client.guilds.cache.get(guildId)
    let commands;

    // if (guild) {
    //     commands = guild.commands;/
    // }
    // else {
   
    commands = client.application?.commands;
    //}

    client.application.commands.set([]);

    commands?.create({
         name: 'commandlist',
         description: 'Sends the list of commands for RL Bot'
     })
    commands?.create({
        name: 'tryout',
        description: 'Adds the user to the tryout role and sends them info'
    })
    commands?.create({
        name: 'stoptryout',
        description: 'Takes you out of the tryout role'
    })
    commands?.create({
        name: 'rlrole',
        description: 'Gives you the Rocket League role',
    })
    commands?.create({
        name: 'outrlrole',
        description: 'Takes you out of the Rocket League role',
    })
    commands?.create({
        name: '6mansrole',
        description: 'Gives you the 6mans role',
    })
    commands?.create({
        name: 'out6mansrole',
        description: 'Takes you out of the 6mans role',
    })
    commands?.create({
        name: '6manslist',
        description: 'Prints out all users with 6mans role'
    })
    commands?.create({
        name: 'food',
        description: 'picks a food place',
    })
    commands?.create({
        name: '再起動',
        description: 'Restarts the bot',
    })

    //commands.cache.find(c => c.name === 'commandlist').delete()

});

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand()){
        return;
    }

    const { commandName, options } = interaction;

    if(commandName === 'commandlist') {
        if(interaction.guild.id == '296818414914240524'){
            interaction.reply({
            embeds: [ cmdlistWeber ],
            ephemeral: true,
            })
        }
        else if (interaction.guild.id == '971467890211569674'){
            interaction.reply({
                embeds: [ cmdlistSAA ],
                ephemeral: false,
                })
        }

    }
    else if (commandName === 'tryout') {
        if(!interaction.member.roles.cache.has('1055775867218968616') && interaction.guild.id == '296818414914240524'){
            interaction.reply({content: `Aight you're in for tryout messages!\nThanks  <@${interaction.user.id}> <3`, ephemeral: true});
            //interaction.followUp({content: `<@${interaction.user.id}> <3`, ephemeral: true})
            interaction.member.roles.add('1055775867218968616');
            interaction.user.send("Here is the link to the tryout form: https://forms.gle/GjDcqi4x7CeG1R576")
            interaction.user.send("Right now the set date is September 8th, 7:00 PM");
            interaction.user.send("Here is address for the Wattis eSports Lab below: \n1351 Edvalson St, Ogden, UT 84408, United States\n\n");
            console.log(`<@${interaction.user}> now has the tryout role`)
            client.users.send(GODid, `<@${interaction.user.id}> has used the "tryouts" command.`)
        
        }  
        else if(interaction.member.roles.cache.has('1055775867218968616') && interaction.guild.id == '296818414914240524'){
            interaction.reply({
                content: `<@${interaction.user.id}> bruh you're already in lmao`,
                ephemeral: true,
            });
            
        }
        else {
            interaction.reply({
                content: "wrong server",
                ephemeral: true,
            })
        }
    }

    else if (commandName === 'stoptryout') {
        if(interaction.member.roles.cache.has('1055775867218968616') && interaction.guild.id == '296818414914240524'){
            interaction.reply({content: `Aight you're out of tryout messages. <@${interaction.user.id}> </3`, ephemeral: true});
            //interaction.followUp({content: `<@${interaction.user.id}> <3`, ephemeral: true})
            interaction.member.roles.remove('1055775867218968616');
            console.log(`<@${interaction.user}> has left the tryout role`)
            client.users.send(GODid, `<@${interaction.user.id}> has used the "stoptryout" command.`)
            
        }  
        else if(!interaction.member.roles.cache.has('1055775867218968616') && interaction.guild.id == '296818414914240524'){
            interaction.reply({
                content: `<@${interaction.user.id}>... bruh you weren't even in tryouts...`,
                ephemeral: true,
            });
            
        }
        else {
            interaction.reply({
                content: "wrong server",
                ephemeral: true,
            })
        }
    }

    else if (commandName === 'rlrole'){
        if(!interaction.member.roles.cache.has('408855019056529418') && interaction.guild.id == '296818414914240524'){
            interaction.member.roles.add('408855019056529418');
            interaction.reply({content: `You now have the RL role. W <@${interaction.user.id}>`,
            ephemeral: true,})
        }
        else if(interaction.member.roles.cache.has('408855019056529418') && interaction.guild.id == '296818414914240524') {
            interaction.reply({content: 'u already have the RL role bro, stop sweatin :heart:',
            ephemeral: true,})
        }
        else {
            interaction.reply({
                content: "wrong server",
                ephemeral: true,
        })
    }
}

    else if(commandName === 'outrlrole'){
        if(interaction.member.roles.cache.has('408855019056529418') && interaction.guild.id == '296818414914240524'){
            interaction.member.roles.remove('408855019056529418');
            interaction.reply({content: 'You are out of the RL role. You an L fr ong',
            ephemeral: true,})
        }
        else if(!interaction.member.roles.cache.has('408855019056529418') && interaction.guild.id == '296818414914240524'){
            interaction.reply({content: 'You never had the RL role lmao :skull:',
            ephemeral: true,})
        }
        else {
            interaction.reply({
                content: "wrong server",
                ephemeral: true,
            })
        }
    }

    else if (commandName === '6mansrole'){
        if(!interaction.member.roles.cache.has('1010988886614351893') && interaction.guild.id == '296818414914240524'){
            interaction.member.roles.add('1010988886614351893');
            interaction.reply({content: `You now have the 6mans role. W <@${interaction.user.id}>`,
            ephemeral: false,})
        }
        else if(interaction.member.roles.cache.has('1010988886614351893') && interaction.guild.id == '296818414914240524') {
            interaction.reply({content: 'u already have the 6mans role bro, stop sweatin :heart:',
            ephemeral: true,})
        }
        else {
            interaction.reply({
                content: "wrong server",
                ephemeral: true,
        })
    }
}

    else if(commandName === 'out6mansrole'){
        if(interaction.member.roles.cache.has('1010988886614351893') && interaction.guild.id == '296818414914240524'){
            interaction.member.roles.remove('1010988886614351893');
            interaction.reply({content: 'You are out of the 6mans role. You an L fr ong',
            ephemeral: false,})
        }
        else if(!interaction.member.roles.cache.has('1010988886614351893') && interaction.guild.id == '296818414914240524'){
            interaction.reply({content: 'You never had the 6mans role lmao :skull:',
            ephemeral: true,})
        }
        else {
            interaction.reply({
                content: "wrong server",
                ephemeral: true,
            })
        }
    }

    
    else if(commandName === '6manslist'){
        if(interaction.guild.id == '296818414914240524'){
            // interaction.reply({
            //     content: interaction.guild.roles.get('1010988886614351893').members.map(m=>m.user.tag),
            //     ephemeral: true,})
            interaction.reply({
                content: interaction.guild.roles.cache.find(role => role.id === "1010988886614351893").members.map(m => m.id).length, //the role to check
                ephemeral: true,
            })
                
        }
        else{
            interaction.reply({
                content: 'Needs to be in the Weber State Server.',
                ephemeral: true,})
        }
    }

    else if(commandName === 'areweback'){
        console.log("We are so back")
        interaction.reply({
            content: "we are so back",
            ephemeral: false,
        })

    }

    else if(commandName === 'food'){
         if(interaction.guild.id == '971467890211569674'){
                // interaction.reply({
                //     content: interaction.guild.roles.get('1010988886614351893').members.map(m=>m.user.tag),
                //     ephemeral: true,})if(interaction.user.id == '431265663185846283'){
                // message.channel.send("jump (my bot can say it tannice, L)", {files: ["https://images.app.goo.gl/fBrWC2MnqvPNqoiYA"]});
    
    
    
                    //else {
                    
                    var foodChoices = ["The bird", "HugHes", "Little Ceasars", "Wendys", "Ice Berg", "Cafe Rio", "Marco's Pizza", "Panda Express", "Mr. D", "Jersey Mikes", "Zaxbys"]
                    // var linksToEach = [];
                    
                    var foodLinks = ["https://www.lovethebird.com/menu/", "https://www.hughescafe.com/menus/", "https://littlecaesars.com/en-us/nutrition/?gclid=EAIaIQobChMI7sv0keLL9wIVm__jBx1lQwmJEAAYASACEgJadfD_BwE&gclsrc=aw.ds",
                     "https://order.wendys.com/categories?site=menu", "https://www.allmenus.com/ut/syracuse/728415-iceberg-drive-inn/menu/", "https://www.caferio.com/our-food",
                     "https://www.marcos.com/menu/", "https://www.pandaexpress.com/", "https://www.mrdeliciousmexicanfood.com/menu/", "https://www.jerseymikes.com/menu", "https://www.zaxbys.com/menu#category-fingerz-wings-mealz"]
    
                    var food = 0;
                    
                    while(food < 1){
                        var randNum = Math.floor(Math.random() * foodChoices.length);
                        if(randNum != storedRandNum) {
                            foodChoiceCount++;
                            console.log("New food choice: " + foodChoices[randNum])
                            console.log("Choice: " + foodChoiceCount + " out of " + foodChoices.length + " choices.")
                            
                            if(foodChoiceCount == foodChoices.length){
                                console.log("Went through all choices");
                                message.channel.send("No more choices");
                                message.channel.send("Restarting wheel...")
                                message.channel.send("--------------------------------");
                                while(foodList.length){
                                    foodList.pop();
                                }
                                foodChoiceCount = 0;
                            }
    
                            food++;
                        }
                    }
    
                    
    
    
                    //message.channel.send(linksToEach[randNum]);
                interaction.reply({
                    content: "Food Choice for the day (excluding: " + foodChoices[storedRandNum] + "):\n" +
                        "\n" + foodChoices[randNum] +
                        "\n" + "--------------------------------" +
                        "\n" + "Menu Link:" +
                        "\n" + foodLinks[randNum],
                    ephemeral: false,
                })
               storedRandNum = randNum;
               food++;
                    
            }


            else{
                interaction.reply({
                    content: 'Need to be in a different server.',
                    ephemeral: true,})
            }
        }
        
        
        // if(interaction.member.roles.cache.has('1010988886614351893')){
        //     interaction.member.roles.remove('1010988886614351893');
        //     interaction.reply({content: 'You are out of the 6mans role',
        //     ephemeral: true,})
        // }
        // else {
        //     interaction.reply({content: 'You never had the 6mans role lmao :skull:',
        //     ephemeral: true,})
        // }
    

    else if(commandName === '再起動'){
        if(interaction.user.id === GODid){
            interaction.reply({
            content: 'bot restarted',
            ephemeral: true,})
            client.application.commands.set([]);
            // interaction.reply({
            // content: 'restarting bot',
            // ephemeral: true,
            // })
            
            setTimeout(() => { process.exit(); }, 2000);
            
        }
        else{
            interaction.reply({
                content: 'You do not have permissions to run this command.',
                ephemeral: true,})
        }
        
    }
    })
    

client.on('messageCreate', (message) => {

const PREFIX = "!";
var args = message.content.slice (PREFIX.length).split (" ")[0],
    topic = message.content.split (" ")[1],
    otherTopic = message.content.split(" ")[2];
let args2S = message.content.substring(PREFIX.length).toLowerCase().split(" ");
let mainrole = message.member.roles.cache.some(r => r.name === "we high as kites");
const channel = message.author.lastMessage;
const userId = message.author.id;
const userIndexInQueue = queue.findIndex(userObj => userObj.id === userId);
const GOD = client.users.cache.get('533486454123266049');



// if(message.content.includes('who')){
//     console.log("AHHHHHHHHHHHHHHHHHH");
//      if((message.channel.id == '401194514578145290' || message.channel.id == '1010987190618177596' || message.channel.id == '885298922686406696' || message.channel.id == '634875998558748683') && message.content.length <= 5){
//         canum = round(Math.random());
//         console.log('Bot sent "who" command to Channel Name: ' + '"' + `${message.channel.name}` + '"');
//         user.send('Bot sent "who" command to Channel Name: ' + '"' + `${message.channel.name}` + '" in the server: "' + `${message.guild.name}` +'"')
//         if(canum == 1){
//             setTimeout(() => { message.channel.send('cares'); }, 1500);
//          }
//          else if(canum ==0){
//             setTimeout(() => { message.channel.send('asked'); }, 1500);
//          }
//          }
//          else{
//             console.log('Channel Name: ' + '"' + `${message.channel.name}` + '"' + ' in the "' + `${message.guild.name}` + '" server is not in the "who" command list lmfao' );
//          }
//  }
// if(!message.content.startsWith(PREFIX))return;

if(message.content.includes('are we back?')){
    console.log("AHHHHHHHHHHHHHHHHHH");
     if(message.channel.id == '971467890211569677' || message.channel.id == '779096064019005440'){
        //canum = round(Math.random());
        console.log('Bot sent "are we back?" command to Channel Name: ' + '"' + `${message.channel.name}` + '"');
        //user.send('Bot sent "are we back?" command to Channel Name: ' + '"' + `${message.channel.name}` + '" in the server: "' + `${message.guild.name}` +'"')
        // if(canum == 1){
        //     setTimeout(() => { message.channel.send('cares'); }, 1500);
        //  }
        //  else if(canum ==0){
        //     setTimeout(() => { message.channel.send('asked'); }, 1500);
        //  }
        message.channel.send("we are so back");
         }
         else{
         //   console.log('Channel Name: ' + '"' + `${message.channel.name}` + '"' + ' in the "' + `${message.guild.name}` + '" server is not in the "are we back?" command list lmfao' );
         }
 }
if(!message.content.startsWith(PREFIX))return;

switch(args.toLowerCase()){

// case 'ticket':
//     console.log("I cant take this anymore");
//     if(message.channel.id == '779096064019005440'){
        
//         rl.question('What is the subject ? ', function (emailSubject) {
//         rl.question('What is the body ? ', function (body) {
//             //question who is the caller
//             //database of teachers/admins
            
//     console.log(`Subject--->${emailSubject} --------------- BODY ----------> ${body}`);
   
//     // rl.close();


// // rl.on('close', function () {
// //   console.log('\nBYE BYE !!!');
// //   process.exit(0);
// // });

// const nodemailer = require('nodemailer');
// //const emailSubject = interaction.options.getString("Subject: ");
// var transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "b3c79a217199ee",
//       pass: "e2466ce249fcef"
//     }
//   });

//   message = {
//     from: "iporter@saacharter.org",
//     to: "iporter@saacharter.org",
//     subject: emailSubject,
//     text: body
// }
// transporter.sendMail(message,  function (err, info){
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(info);
//     }
// })  
// });
 //});
// }


    

      /*  case 'button':
            invite(message, args, Client);
        */
        // case 'reactionrole':
        //   reactionrole(message, Discord, client);
        // break;
        
        // case 'q':
        //     enterQueue(message, queue);
        // break;

        // case 'leave':
        //     leaveQueue(message, queue);
        // break;

        // case 'status':
        //     // var teamInfo = new discord.MessageEmbed()
        //     //     .setTitle("Current Apes in Queue :)");
        //     //     for (var i=0; i < queue.length; i++)
        //     //     {
        //     //         teamInfo.addField(queue[i]);
        //     //     }
        //     //     message.channel.send(teamInfo);
        //     getQueueStatus(message, queue);

        // break;

        // default:
        // return;

        // case 'youtube':
        //     message.channel.send('https://www.youtube.com/channel/UC31L7TKlel0fEj7RZV2Lo8w');
        // break;

        // case 'twitch':
        //     message.channel.send("https://www.twitch.tv/zesty_rl");
        // break;

        // case 'get':
        //     if(args[1] === 'on'){
        //         message.channel.bulkDelete(1);
        //         channel.send(`get onnnnnn <@${'638777923142418485'}> , <@${'517532403913457664'}> , <@${'533486454123266049'}> , <@${'431265663185846283'}>`);
        //     }
        //     else{
        //         message.channel.bulkDelete(1);
        //     }
        //     break;
        
        // case 'carson':
        //     message.channel.send('conner is carsons female dog');
        //     message.channel.send('bitch for short');
        // break;
        // case 'conner':
        //     message.channel.send('conner a bitch');
        // break;
        // case 'damn':
        //     message.channel.send('damn damn');
        // break;

        // case 'whos':
        //     if(args[1] === 'daddy'){
        //         message.channel.send('zesty' + adj);
        //     }
        //     else if (args[1] === 'god'){
        //         message.channel.send('IF GOD EXISTS ITS FUCKING ME - carson shreeve');
        //     }
        //     else if(args[1] === 'isaac' | args[1] === 'zesty'){
        //         message.channel.send(args[1] + adj);
        //     }
        //     else if(args[1] === 'tyson' | args[1] === 'kairos'){
        //         message.channel.send(args[1] + 'is baby to isaac');
        //     }
        //     else if(args[1] === 'conner' | args[1] === 'drastic'){
        //         message.channel.send(args[1] +' still a bitch');
        //     }
        //     else if(args[1] === 'keldon'){
        //         message.channel.send(args[1] + ' is my dad');
        //     }
        //     else{
        //         message.channel.send('that bih dont exist here');
        //     }
        //     break;
            
        // case 'clear':
        //     if(mainrole || message.member.roles.cache.has("885346333588869170" || message.member.roles.cache.has("748007706618757120"))){
        //       //if(!args[1]) return message.reply('please use another word after clear')
        //         message.channel.bulkDelete(args[1]); 
        //      }
        //      else{
        //         message.channel.bulkDelete(1);
        //         message.channel.send('You aint slick enough lmaoo, cant send that');
        //         setTimeout(() => { message.channel.bulkDelete(1); }, 2000);
        //      }
        // break;
        /*
        case 'join':
            if(!message.member.roles.cache.has('778416924514058271')){
        message.channel.send('yoooo why arent u an inbred??? here ya go lmao');

        message.member.roles.add('778416924514058271');
        setTimeout(() => { channel.send(`THE HOLY <@${message.author.id}>, YOU HAVE NOW ACHEIVED THE GREAT ROLE OF ~inbred~`); }, 1000);

    }else{
         channel.send(`<@${message.author.id}>... ur already an inbred bro lmaoooo`);
    }
      break;
      case 'role':
        if(!message.member.roles.cache.has('746241023486984304')){
    message.channel.send('yoooo why arent u an member yet bruh??? here ya go lmao');

    message.member.roles.add('746241023486984304');
    setTimeout(() => { channel.send(`THE HOLY <@${message.author.id}>, YOU HAVE NOW ACHEIVED THE GREAT ROLE OF ~member~`); }, 1000);

}else{
     channel.send(`<@${message.author.id}>... ur already a member bro lmaoooo`);
}*/
//  break;


  case 'tryout':
    if(!message.member.roles.cache.has('1055775867218968616')){
    message.channel.send("Aight you're in for tryout messages!");
    message.member.roles.add('1055775867218968616');
    setTimeout(() => { message.channel.send(`<@${message.author.id}> <3`); }, 1000);
    message.author.send("No tryout link until summer season.");
    message.author.send("Here is address for the eSports Lab below: \nUniversity Village Community Center, 1321 E 4600 S, Ogden, UT 84403\n\nTRYOUTS WILL NOT BE OCCURING UNTIL SUMMER SEASON.");
    user.send(`<@${message.author.id}> has used the "tryouts" command.`)
}  
    else{
    message.channel.send(`<@${message.author.id}> bruh you're already in lmao`);
    
}
break;

case 'stoptryout':
    if(message.member.roles.cache.has('1055775867218968616')){
    message.channel.send("Aight you will not receive tryout messages.");
    message.member.roles.add('1055775867218968616');
    setTimeout(() => { message.channel.send(`<@${message.author.id}> </3`); }, 1000);
    user.send(`<@${message.author.id}> is now out of tryouts.`)
}  
    else{
    message.channel.send(`<@${message.author.id}> bro wasnt in tryouts to begin with :skull:`);
    
}

 break;

    case 'out6Mans':
        if(message.member.roles.cache.has('1010988886614351893')){
            message.channel.send("Aight you're out of the 6mans role!");
            message.member.roles.remove('1010988886614351893');
        }
        break;

        case '6mans':
        if(!message.member.roles.cache.has('1010988886614351893')){
            message.channel.send(`You now have the 6mans role! <@${message.author.id}>`);
            message.member.roles.add('1010988886614351893');
        }
        else{
            message.channel.send("yo u already got the role dummy");
        }
        break;

    // case 'commandlist':
           
    //     cmdlist.addFields(
    //     // {
    //     //     name: '!q',
    //     //     value: '(puts you in 6mans queue)',
    //     // },
    //     // {
    //     //     name: '!leave',
    //     //     value: '(takes you out of 6mans queue)',
    //     // },
    //     // {
    //     //     name: '!status',
    //     //     value: '(shows how many players are in the queue)',
    //     // },
    //     {
    //         name: '!6mans',
    //         value: '(puts you in the 6mans role)',
    //     },
    //     {
    //         name: '!out6mans',
    //         value: '(puts you in tryouts)',
    //     },
    //     {
    //         name: '!tryout',
    //         value: '(puts you in the tryouts role)',
    //     },
    //     {
    //         name: '!stoptryout',
    //         value: '(takes you out of tryouts)',
    //     },
            

    //            );
              

    //             message.channel.send({embeds: [cmdlist]});
    //             cmdlist.fields = [];
    //         break;
            
            case 'foodchoices':

                fdchoicelist.addFields(
                    {
                        name: 'The bird',
                        value: '------------------',
                    },
                    {
                        name: 'HugHes',
                        value: '------------------',
                    },
                    {
                        name: 'Little Ceasars',
                        value: '------------------',
                    },
                    {
                        name: 'Wendys',
                        value: '------------------',
                    },
                    {
                        name: 'Ice Berg',
                        value: '------------------',
                    },
                    {
                        name: 'Cafe Rio',
                        value: '------------------',
                    },
                    {
                        name: 'Marcos Pizza',
                        value: '------------------',
                    },
                    {
                        name: 'Panda Express',
                        value: '------------------',
                    },
                    {
                        name: 'Mr D',
                        value: '------------------',
                    },
                    {
                        name: 'Jersey Mikes',
                        value: '------------------',
                    },
                    {
                        name: 'Zaxbys',
                        value: '------------------',
                    },
                        
            
                           );
                          
            
                            message.channel.send({embeds: [fdchoicelist]});
                            fdchoicelist.fields = [];
                        break;

            case 'foodfind':
                var foodChoices = ["The bird", "HugHes", "Little Ceasars", "Wendys", "Ice Berg", "Cafe Rio", "Marcos Pizza", "Panda Express", "Mr D", "Jersey Mikes", "Zaxbys"]
                // var linksToEach = [];
                
                var foodLinks = ["https://www.lovethebird.com/menu/", "https://www.hughescafe.com/menus/", "https://littlecaesars.com/en-us/nutrition/?gclid=EAIaIQobChMI7sv0keLL9wIVm__jBx1lQwmJEAAYASACEgJadfD_BwE&gclsrc=aw.ds",
                 "https://order.wendys.com/categories?site=menu", "https://www.allmenus.com/ut/syracuse/728415-iceberg-drive-inn/menu/", "https://www.caferio.com/our-food",
                 "https://www.marcos.com/menu/", "https://www.pandaexpress.com/", "https://www.mrdeliciousmexicanfood.com/menu/", "https://www.jerseymikes.com/menu", "https://www.zaxbys.com/menu#category-fingerz-wings-mealz"]

                var index;
                var LCfoodChoices = foodChoices.map(value => value.toLowerCase());
         
                if(otherTopic){
                    index = LCfoodChoices.indexOf(topic.toLowerCase() + " " + otherTopic.toLowerCase());
                    if(index == -1){
                        message.channel.send("Not in the current food choices man");
                    }
                    else{
                        message.channel.send("Menu Link for " + foodChoices[index]);
                        message.channel.send(foodLinks[index]);
                    }
                }
                else if (topic){
                    //topic = topic.toLowerCase;
                    index = LCfoodChoices.indexOf(topic.toLowerCase());
                    if(index == -1){
                        message.channel.send("Not in the current food choices man - Type '!foodchoices' for the current food list");
                    }
                    else{
                        message.channel.send("Menu Link for " + foodChoices[index]);
                        message.channel.send(foodLinks[index]);
                    }
                }
                else{
                    message.channel.send("You need to type something after lmao");
                }

                 

                 break;

            case 'food':
                if(message.author.id == '431265663185846283'){
                    message.channel.send("jump (my bot can say it tannice, L)", {files: ["https://images.app.goo.gl/fBrWC2MnqvPNqoiYA"]});

                }

                else {
                
                var foodChoices = ["The bird", "HugHes", "Little Ceasars", "Wendys", "Ice Berg", "Cafe Rio", "Marco's Pizza", "Panda Express", "Mr. D", "Jersey Mikes", "Zaxbys"]
                // var linksToEach = [];
                
                var foodLinks = ["https://www.lovethebird.com/menu/", "https://www.hughescafe.com/menus/", "https://littlecaesars.com/en-us/nutrition/?gclid=EAIaIQobChMI7sv0keLL9wIVm__jBx1lQwmJEAAYASACEgJadfD_BwE&gclsrc=aw.ds",
                 "https://order.wendys.com/categories?site=menu", "https://www.allmenus.com/ut/syracuse/728415-iceberg-drive-inn/menu/", "https://www.caferio.com/our-food",
                 "https://www.marcos.com/menu/", "https://www.pandaexpress.com/", "https://www.mrdeliciousmexicanfood.com/menu/", "https://www.jerseymikes.com/menu", "https://www.zaxbys.com/menu#category-fingerz-wings-mealz"]

                var food = 0;
                
                while(food < 1){
                    var randNum = Math.floor(Math.random() * foodChoices.length);
                    if(randNum != storedRandNum) {
                        message.channel.send("Food Choice for the day (excluding: " + foodChoices[storedRandNum] + "):");
                        message.channel.send(foodChoices[randNum]);
                        message.channel.send("--------------------------------");
                        message.channel.send("Menu Link:")
                        message.channel.send(foodLinks[randNum]);
                        foodChoiceCount++;
                        console.log("New food choice: " + foodChoices[randNum])
                        console.log("Choice: " + foodChoiceCount + " out of " + foodChoices.length + " choices.")
                        
                        if(foodChoiceCount == foodChoices.length){
                            console.log("Went through all choices");
                            message.channel.send("No more choices");
                            message.channel.send("Restarting wheel...")
                            message.channel.send("--------------------------------");
                            while(foodList.length){
                                foodList.pop();
                            }
                            foodChoiceCount = 0;
                        }

                        food++;
                    }
                }

                storedRandNum = randNum;


                //message.channel.send(linksToEach[randNum]);
                }
                break;

            case 'newfood':

                if(message.author.id == '431265663185846283'){
                    message.reply("Shut up", attachment);

                }

                else {

                
                
                var foodChoices = ["The bird", "HugHes", "Little Ceasars", "Wendys", "Ice Berg", "Cafe Rio", "Marco's Pizza", "Panda Express", "Mr. D", "Jersey Mikes", "Zaxbys"]
                // var linksToEach = [];
                
                var foodLinks = ["https://www.lovethebird.com/menu/", "https://www.hughescafe.com/menus/", "https://littlecaesars.com/en-us/nutrition/?gclid=EAIaIQobChMI7sv0keLL9wIVm__jBx1lQwmJEAAYASACEgJadfD_BwE&gclsrc=aw.ds",
                    "https://order.wendys.com/categories?site=menu", "https://www.allmenus.com/ut/syracuse/728415-iceberg-drive-inn/menu/", "https://www.caferio.com/our-food",
                    "https://www.marcos.com/menu/", "https://www.pandaexpress.com/", "https://www.mrdeliciousmexicanfood.com/menu/", "https://www.jerseymikes.com/menu", "https://www.zaxbys.com/menu#category-fingerz-wings-mealz"]


                var randNum = Math.floor(Math.random() * foodChoices.length);

    
                // foodList.push(randNum);
                





                var f = 0;

                while(f == 0){
                if(foodList.includes(randNum)){       
                   randNum = Math.floor(Math.random() * foodChoices.length);
                   if(!foodList.includes(randNum)){
                    foodFinder();
                    f++       
                   }
 
               }
               else{
                if(!foodList.includes(randNum)){
                foodFinder();
                f++;
                }
               }
                }
                    

               
            function foodFinder(){
                    message.channel.send("New food choice: ");
                    message.channel.send(foodChoices[randNum]);
                    message.channel.send("--------------------------------");
                    message.channel.send("Menu:");
                    message.channel.send(foodLinks[randNum]);
                    newFoodChoiceCount++;
                   foodList.push(randNum);
                   
                
                   user.send(`${message.author}` + " just sent !newfood in the " + `${message.guild.name}` + " discord.\n" + "New food choice: " + foodChoices[randNum] + " -> (" + newFoodChoiceCount + " out of " + foodChoices.length + " choices)");
                   //user.send("New food choice: " + foodChoices[randNum] + " -> (" + newFoodChoiceCount + " out of " + foodChoices.length + " choices)")
                   console.log("New food choice: " + foodChoices[randNum] + " -> (" + newFoodChoiceCount + " out of " + foodChoices.length + " choices)")
             
                if(newFoodChoiceCount == foodChoices.length){
                    console.log("Went through all choices");
                    console.log("resetting...")
                    
                    message.channel.send("No more choices");
                    message.channel.send("Restarting wheel... :)")
                    message.channel.send("--------------------------------");
                    while(foodList.length){
                        foodList.pop();
                    }
                    newFoodChoiceCount = 0;
                }
            }
        }
                 break;
            case '2food':
                let filter = (message) => !message.author;
                // Options define how long the collector should remain open
                //    or the max number of messages it will collect
                let options = {
                max: 3,
                time: 10000
                };
                let collector = message.channel.createMessageCollector(options, filter);
            
                // The 'collect' event will fire whenever the collector receives input
                collector.on('collect', (m) => {
                console.log(`Collected ${m.content}`);
              
               
                });
                
                // The 'end' event will fire when the collector is finished.
                collector.on('end', (collected) => {
                console.log(`Collected ${collected.size} items`);
                
                if(collected.size != 3){
                    console.log("jump u fuck")
                    message.channel.send("You need to put in two choices! dumb f");
                }
                else if(collected.size == 3){
                    console.log("jump u idiot")
                    choice = Math.random();
                    choice = round(choice);
                    console.log(choice);
                    message.channel.send(`${collected.at(choice+1)}`+ " was the clear choice idiot");
                    message.channel.send("!foodfind " + `${collected.at(choice+1)}`)

                    //setTimeout(() => { message.channel.send('L u'); }, 1500);

                }

                });
                message.reply('Type both options in seperate lines');
                
            

                
                //message.channel.send(collector[0]);
                
                



                break;

            // case 'areweback':
            //         if(message.author.id == '431265663185846283'){
            //             message.channel.send("jump (my bot can say it tannice, L)", {files: ["https://images.app.goo.gl/fBrWC2MnqvPNqoiYA"]});
    
            //         }
            //         break;
    //         case 'role':
    //             if(args[1] === 'rl'){
    //                 if(!message.member.roles.cache.has('956709171141681172')){
    //                 message.channel.send("theres the role");
    //                 message.channel.send("gamers gonna game");
    //                 message.member.roles.add('956709171141681172');
    //                 setTimeout(() => { message.channel.send(`<@${message.author.id}> <3`); }, 1000);
    //                 message.author.send('u got pink tunicas ??' + ':nerd_face:');
                
    //             } 
    //                 else{
    //                 message.channel.send(`<@${message.author.id}> bruh you're already in lmao`);
    //             }
    //         }
    //             else if (args[1] === 'god'){
    //                 message.channel.send('IF GOD EXISTS ITS FUCKING ME - carson shreeve');
    //             }
    //             else if(args[1] === 'isaac' | args[1] === 'zesty'){
    //                 message.channel.send(args[1] + adj);
    //             }
    //             else if(args[1] === 'tyson' | args[1] === 'kairos'){
    //                 message.channel.send(args[1] + 'is baby to isaac');
    //             }
    //             else if(args[1] === 'conner' | args[1] === 'drastic'){
    //                 message.channel.send(args[1] +' still a bitch');
    //             }
    //             else if(args[1] === 'keldon'){
    //                 message.channel.send(args[1] + ' is my dad');
    //             }
    //             else{
    //                 message.channel.send('that bih dont exist here')
    //             }
    //             break;
                
        
      
//const ytdl = require("ytdl-core");

// require('events').EventEmitter.defaultMaxListeners = 15;

// var servers = {};
//     switch(args[0]){
        
//         case 'play':

//             function play(connection, message){
//                 var server = servers[message.guild.id];

//                 server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));

//                 server.queue.shift();

//                 server.dispatcher.on("end", function(){
//                     if(server.queue[0]){
//                         play(connection, message);
//                     }else {
//                         connection.disconnect();
//                     }
//                 });
//             }


//             if(!args[1]){
//                 message.channel.send("You need a link or name bruh");
//                 return;
//             }
//             if(!message.member.voice.channel){
//                 message.channel.send("Bruh go into a channel lmaooo");
//                 return;
//             }

//             if (!servers[message.guild.id]) servers[message.guild.id] = {
//                 queue: []
//             }

//             var server = servers[message.guild.id];

//             server.queue.push(args[1]);

//             if(!message.member.voice.connection) message.member.voice.channel.join().then(function(connection){
//                 play(connection, message);
//             });
//             break;
//         case 'leave':
//             if(message.member.voice.connection) message.member.voice.channel.leave().then(function(connection){
//                 leave(connection, message);
//             })
//         }

        
      
}
    
});



client.login(token);

module.exports = client