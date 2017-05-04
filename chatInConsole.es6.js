Array.prototype.last = function () {
  return this[this.length - 1]
}

function Chat () {
  this.messages = []
  this.hint = function () {
    console.info('For send a message use function: %cSend(new Message(text))', 
                 'font-style: italic; background: #F5F5F5; padding: 2px;')
  }
  
  this.send = function (newMessage) {
    this.update(newMessage)
    return true
  }
  
  this.update = function (newMessage) {
    var state = this.messages
    var newState = this.messages
                      .slice(-5)
                      .map(msg => msg)

    newState.push(newMessage)
    
    if (this.shouldRender(state, newState)) {
      this.messages = newState
      this.render()
    }
  }
  
  this.shouldRender = function (state, newState) {
    if (state.length === 0) {
      return true
    }
    
    if (newState.last().text === state.last().text ) {
      return false
    } else {
      return true
    }
  }
  
  this.render = function () {
    console.clear()
    console.table(this.messages)
    this.hint()
  }
  
  // startup
  this.render()
}

function Message (text) {
  this.author = 'user'
  this.date = new Date()
  this.text = text
}

var chat = new Chat ()
var send = chat.send // shortcut in window scope
