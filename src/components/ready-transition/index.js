import Ready from './newUser/ready.js'
import Set from './newUser/set.js'
import Go from './newUser/go.js'

const App = StackNavigator({
      Ready: { screen: Ready },
      Set: { screen: Set },
      Go: { screen: Go },
    })