const EventEmitter = require('events');//import

class WithLog extends EventEmitter { //extend
  execute(taskFunc) {
    console.log('Before executing');
    this.emit('begin');//emit
    taskFunc();
    this.emit('end');//emit
    console.log('After executing');
  }
}
const withLog = new WithLog();//init

withLog.on('begin', () => console.log('About to execute'));//addListener
withLog.on('end', () => console.log('Done to execute'));//addListener

withLog.execute(() => console.log('Executing task'));

