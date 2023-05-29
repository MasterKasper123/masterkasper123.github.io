const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: "You wake up in a strange place and there is a rotten banana in front of you.",
    options: [
      {
        text: 'Take the rotten banana',
        setState: { rottenBanana: true },
        nextText: 2
      },
      {
        text: 'Leave the banana',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: "You don't know where you are, so you start to explore your surroundings. To your surprise you're in the middle of a desert. After a while you meet a sus salesman on a white horse.",
    options: [
      {
        text: 'Trade the rotten banana for a sword',
        requiredState: (currentState) => currentState.rottenBanana,
        setState: { rottenBanana: false, sword: true },
        nextText: 3
      },
      {
        text: 'Trade the banana for a shield',
        requiredState: (currentState) => currentState.rottenBanana,
        setState: { rottenBanana: false, shield: true },
        nextText: 3
      },
      {
        text: 'Ignore the salesman',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'You leave the salesman and start to follow a small road. After a while you start to feel tired and the road leads you to a crossing. One road leads to a small village, another to a really big and epic sandstone temple and the third to a deep and sinister-looking forest made of holy banana trees.',
    options: [
      {
        text: 'Explore the Epic Temple',
        nextText: 4
      },
      {
        text: 'Find a room to sleep in at the village',
        nextText: 12
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: "Tired and with hurting legs you walk into the temple. There you find a big chest made of tree. You figure that's a good place to sleep. So you open the chest, and that's the last thing you ever do.",
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into one of the rooms in the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: "You're in prison, restart",
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: "You wake up, well rested and ready to take on the next day.",
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      },
      {
        text: 'Explore the sinister banana-forest',
        nextText: 13
      }
    ]
  },
  {
    id: 7,
    text: "You enter the big temple, feeling excited, maybe a little too excited. After only a few minutes you're lost in a maze of tunnels and rooms with ancient paintings and curses on the walls. You're walking down a hallway when you see two rooms.",
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the rotten banana at it',
        requiredState: (currentState) => currentState.rottenBanana,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: "You don't have any money so you can't rent a room in the village's only inn.",
    options: [
      {
        text: 'Try to secretly break into one of the empty houses in the village',
        nextText: 5
      },
      {
        text: 'Trade the rotten banana for a room instead of money.',
        requiredState: (currentState) => currentState.rottenBanana,
        nextText: 6
      },
      {
        text: 'Trade the sword for a room instead of money.',
        requiredState: (currentState) => currentState.sword,
        nextText: 6
      },
      {
        text: 'Trade the wooden shield for a room instead of money.',
        requiredState: (currentState) => currentState.shield,
        nextText: 6
      }
  }
}
startGame()
