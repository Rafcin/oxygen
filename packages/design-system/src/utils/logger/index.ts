export type LogLevel = 'info' | 'error' | 'warn'

export function Logger(level: LogLevel, message: any, content?: any) {
  if (process.env.NODE_ENV === 'development') {
    const packageName = '[@oxygen]'
    switch (level) {
      case 'warn':
        console.warn(`%c${packageName} ${message}`, 'color:yellow', content)
        break
      case 'error':
        console.error(`%c${packageName} ${message}`, content, 'color:red', content)
        break
      default:
        console.log(`%c${packageName} ${message}`, 'color:green', content)
    }
  }
}
