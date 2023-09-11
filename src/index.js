import Tonic from '@socketsupply/tonic'

import process from 'socket:process'
import os from 'socket:os'

if (process.env.DEBUG) {
  console.log('started in debug mode')
}

class AppContainer extends Tonic {
  render () {
    const platform = os.platform()

    return this.html`
      <h1>Hello, ${platform}!</h1>
    `
  }
}

Tonic.add(AppContainer, 'app-container')

// // import Tonic from '@socketsupply/tonic'
// // import * as Earthstar from '@nichoth/earthstar'
// // import * as Earthstar from "https://cdn.earthstar-project.org/js/earthstar.web.v10.2.2.js";
// // import earthstar from "https://cdn.earthstar-project.org/js/earthstar.web.v10.2.2.js";

// import process from 'socket:process'
// import os from 'socket:os'

// if (process.env.DEBUG) {
//   console.log('started in debug mode')
// }

// class AppContainer extends Tonic {
//   render () {
//     const platform = os.platform()

//     return this.html`
//       <h1>Hello, ${platform}!</h1>
//     `
//   }
// }

// Tonic.add(AppContainer, 'app-container')
