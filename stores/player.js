import { observable, action } from 'mobx'

class PlayerStore {
  @observable players = []
  @action addPlayer ({id, name, items, image}) {
    this.players.push({
      id,
      name,
      items,
      image
    })
  }
  @action removePlayer (id) {
    this.players = this.players.filter(p => {
      return p.id !== id
    })
  }
  getPlayer (id) {
    return this.players.find(p => p.id === id)
  }
}

const playerStore = new PlayerStore()
export default playerStore