import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={locationIcon} style={{ marginRight: '8px' }} />
        Wildfire Tracker (Powered By NASA)
      </h1>
    </header>
  )
}

export default Header
