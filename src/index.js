import Tonic from '@socketsupply/tonic'
// import { Crypto, Replica } from "https://cdn.earthstar-project.org/js/earthstar.web.v10.2.2.js";
// import { Crypto, Replica } from '@nichoth/earthstar';
import { Crypto } from '@nichoth/earthstar';

import process from 'socket:process'
import os from 'socket:os'

if (process.env.DEBUG) {
  console.log('started in debug mode')
}

const shareKeypair = await Crypto.generateShareKeypair("chatting");
const authorKeypair = await Crypto.generateAuthorKeypair("test");

class MsgForm extends Tonic {
    submit (ev) {
        ev.preventDefault()
        console.log('send message ', ev.target.elements.input.value)
    }

    render () {
        return this.html`
            <form id="msg-form">
                <input id="input" name="input" />
                <button type="submit">send message</button>
            </form>
        `
    }
}

class AppContainer extends Tonic {
  render () {
    const platform = os.platform()

    return this.html`
      <h1>Hello, ${platform}!</h1>
      <msg-form></msg-form>
    `
  }
}

Tonic.add(AppContainer, 'app-container')
Tonic.add(MsgForm, 'msg-form')


// import Tonic from '@socketsupply/tonic'
// import process from 'socket:process'
// import os from 'socket:os'
// import { Crypto, Replica } from "https://cdn.earthstar-project.org/js/earthstar.web.v10.2.2.js";

// // const shareKeypair = await Crypto.generateShareKeypair("chatting");
// // const authorKeypair = await Crypto.generateAuthorKeypair("test");

// // if (Earthstar.notErr(shareKeypair) && Earthstar.notErr(authorKeypair)) {
// // 	console.group("Share keypair");
// // 	console.log(shareKeypair);
// // 	console.groupEnd();

// // 	console.group("Author keypair");
// // 	console.log(authorKeypair);
// // 	console.groupEnd();
// // } else if (Earthstar.isErr(shareKeypair)) {
// // 	console.error(shareKeypair);
// // } else if (Earthstar.isErr(authorKeypair)) {
// // 	console.error(authorKeypair);
// // }

// const replica = new Replica({
// 	driver: new Earthstar.ReplicaDriverWeb(shareKeypair.shareAddress),
// 	shareSecret: shareKeypair.secret,
// });

// class MsgForm extends Tonic {
//     submit (ev) {
//         ev.preventDefault()
//         console.log('send message ', ev.target.elements.input.value)
//     }

//     render () {
//         return this.html`
//             <form id="msg-form">
//                 <input id="input" name="input" />
//                 <button type="submit">send message</button>
//             </form>
//         `
//     }
// }

// if (process.env.DEBUG) {
//   console.log('started in debug mode')
// }

// class AppContainer extends Tonic {
//   render () {
//     const platform = os.platform()

//     return this.html`
//       <h1>Hello, ${platform}!</h1>
//         <div>
//             <msg-form></msg-form>
//         </div>
//     `
//   }
// }

// Tonic.add(AppContainer, 'app-container')
// Tonic.add(MsgForm, 'msg-form')
