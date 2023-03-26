import config from '../../lib/config.yaml'



// async function GameRoundController(){

//   const  card = config.cards[0];
//   const distractors = [
//     config.cards[1],
//     config.cards[2],
//     config.cards[3]
//   ];

//   const options = [
//     {... [0],correct:false,selected:false},
//     {...distractors[1],correct:false,selected:false},
//     {...card, correct:true, selected:false}
//   ]

// }
// console.log(config.cards[0])
// function RoundController(
//   card = config.cards[0],
//   distractors = [
//     config.cards[1],
//     config.cards[2],
//     config.cards[3],
//   ]
// ) {

//   return {
//     getCard() {
//       return card
//     },
//     distractors() {
//       return distractors
//     }
//   }

// }

  // const { cards } = config
  // const gameState = {
  //   card: cards[0],
  //   options: [
  //     cards[0],
  //     cards[1],
  //     cards[2]
  //   ]
  // }



  // const [selected, setSelected] = useState(card.name)
  // const [canSelect, setCanSelect] = useState(true)
  // const [revealSolution, setRevealSolution] = useState(false)
  // const [selectedIndex, setSelectedIndex] = useState(null)


  // const handleSelectOption = (option, index) => () => {
  //   // if (revealSolution) return
  //   // setSelected(option.name)    
  //   // setCanSelect(false)
  //   // option.selected = true
  //   setSelectedIndex(index)
  //   setRevealSolution(true)
  //   // setObfuscated(false )
  // }
export class GameRoundController {

	constructor(){
      // card = config.cards[0];
    this.refreshOptions()
    //   this.selectedIndex = null
    //   const { card, options } = this.getNewOptions()
    // this.card = card
    // this.revealSolution = false
    // this.options = options
	}

  refreshBucket(){
    this.bucket = [
      ...config.cards
    ]
    
  }

  refreshOptions(){

    if (!this.bucket || this.bucket.length === 0) {
      this.refreshBucket()
    }
    const card = this.bucket.splice(~~(Math.random() * this.bucket.length),1)[0]
    const set = [...config.cards].filter(a => a.name !== card.name)
    const d1 = set.splice(~~(Math.random() * set.length),1)[0]
    const d2 = set.splice(~~(Math.random() * set.length),1)[0]

    const options = [
      {...d1, correct:false},
      {...d2, correct : false}
    ]

    options.splice(
      ~~(Math.random() * options.length),
      0,
      {...card, correct:true},
    )

    console.log("Left in bucket...", this.bucket)
    // console.table(options)

    this.card = card
    this.revealSolution = false
    this.options = options
    this.selectedIndex = null


    // return {
    //   card,
    //   options 
    // }
  }

  getState(){
    return {
      card : this.card,
      options : this.options,
      selectedIndex : this.selectedIndex,
      revealSolution : this.revealSolution, 
      handleSelectOption : this.handleSelectOption
    }
  }

  handleSelectOption(index){
    if (this.revealSolution) return
    this.selectedIndex = index
    this.revealSolution = true
  }

  // distractors = [
  //   config.cards[1],
  //   config.cards[2],
  //   config.cards[3]
  // ];

  // options = [
  //   {...distractors[0],correct:false,selected:false},
  //   {...distractors[1],correct:false,selected:false},
  //   {...card, correct:true, selected:false}
  // ]

}