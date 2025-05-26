import { PrivyProvider } from '@privy-io/react-auth'
import App from 'App'
import 'index.css'
import { render } from 'preact'

render(
  <PrivyProvider
    appId="cmb5be0ea01u4l90mij6zd9ag"
    clientId="client-WY6LzG5bq4CSDNd8A1AgijvmwnVFqREzGBKrBtf9C71jF"
  >
    <App />
  </PrivyProvider>,
  document.getElementById('root') as Element
)
