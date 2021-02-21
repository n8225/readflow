interface Window {
  initialReduxState: any
  vapidPublicKey: string
  deferredPrompt: BeforeInstallPromptEvent
  runConfig: {
    authority: string
    clientID: string
    redirectURL: string
    apiBaseURL: string
  }
}
