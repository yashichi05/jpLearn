import { Service } from './Service'
import _ from 'lodash'
import { BrowserWindow } from 'electron'

export class WinService extends Service {
  async close() {
    BrowserWindow.getAllWindows()[0].close()
    return null
  }

  async minimize() {
    BrowserWindow.getAllWindows()[0].minimize()
    return null
  }

  async move(x,y,getPos = false){
    const win = BrowserWindow.getAllWindows()[0]
    if(!getPos){
      win.setPosition(x,y)
  }

    const pos = win.getPosition()
    return {x:pos[0],y:pos[1]}
  }
}
