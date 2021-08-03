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
}
