var mineflayer = require('mineflayer');
var colors = require('colors');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Server ip: '.yellow, (serverIP) => {
      console.log("---------------------------------------------")
      console.log("Set to: ".cyan + `${serverIP}`.bold.white)
      resolve(serverIP)
      servIP = `${serverIP}`;
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    console.log("---------------------------------------------")
    rl.question('Server port (optional): '.yellow, (serverPORT) => {
      if (serverPORT == ""){
            var serverPORT = "25565"
            console.log("Set to: ".cyan + `${serverPORT}`.bold.white)
            resolve()
            servPORT = `${serverPORT}`;
      } else {
        console.log("Set to: ".cyan + `${serverPORT}`.bold.white)
        resolve(serverPORT)
        servPORT = `${serverPORT}`;
      }
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    console.log("---------------------------------------------")
    rl.question('Bot name: '.yellow, (botName) => {
      console.log("Set to: ".cyan + `${botName}`.white)
      resolve(botName)
      bName = `${botName}`;
    })
  })
}

const question4 = () => {
  return new Promise((resolve, reject) => {
    console.log("---------------------------------------------")
    rl.question('Your pseudo: '.yellow, (playerName) => {
      console.log("Set to: ".cyan + `${playerName}`.white)
      resolve(playerName)
      pName = `${playerName}`;
    })
  })
}

const question5 = () => {
  return new Promise((resolve, reject) => {
    console.log("---------------------------------------------")
    rl.question('Run? '.yellow, (runyn) => {
      if (runyn == "yes"){
      
     console.log("/tell *bot pseudo* minesploit_tpa | to tp the bot to you".cyan)
     console.log()
     resolve()

      //Bot config
      var bot = mineflayer.createBot({
        
        host: servIP,
        port: servPORT,
        username: bName,

	  })

      bot.on('login', function(){
      
        console.log("A bot joined !".bold.yellow);
        bot.chat("/register minesploit minesploit");
        bot.chat("/login minesploit");

	  })

      bot.on('message', (message) => {
      
        console.log(message.toAnsi());

	  })

      bot.on('whisper', (username, message) => {
      
        if(message = "minesploit_tpa"){
      
            bot.chat("/tpa " + pName);

		}

	  })

	  } else if (runyn == "no"){
      
        console.log("Exiting...".red)
        resolve()
        process.exit()

	  }
    })
  })
}

const main = async () => {
    console.clear()
  await question1()
  await question2()
  await question3()
  await question4()
  await question5()
  rl.close()
}

 main()