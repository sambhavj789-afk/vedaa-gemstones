import { useEffect } from 'react'

const BASE = 'Vedaa | Natural Gemstones'

/**
 * Gives each page its own browser-tab and search-result title, e.g.
 * "Emerald | Vedaa". Pass nothing on the home page to keep the brand title.
 */
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Vedaa` : BASE
  }, [title])
}
