import Firebase from 'firebase'
import { EventEmitter } from 'events'

const config = {
  apiKey: 'AIzaSyA3Hy5W2F93ygm2mBT_SjIQVG0ELrkJ5bs',
  authDomain: 'grouper-prototype.firebaseio.com',
  databaseURL: 'https://grouper-prototype.firebaseio.com/',
  storageBucket: 'grouper-prototype.appspot.com'
}

Firebase.initializeApp(config)

export const db = Firebase.database()
export const Interests = []

let User = null

Firebase.auth().onAuthStateChanged(user => {
  if (user) {
    User = user 
  } else {
    User = null
  }
})

Firebase.auth().signInWithEmailAndPassword('arian@ari.an', 'spaghetti').catch(error => {
  console.log(error.code)
  console.log(error.message)
})


/*
 * Interface for adding channels
 */

export function createInterest (name, isPrivate) {
  db.ref('interests/').push({
    interestName : name,
    private: isPrivate,
    owner: User.uid
  })
}

export function getInterestsOnce () {
  return db.ref('/interests/').once('value').then(snapshot => {
    console.log(snapshot.val())
  })
}
