'use client'

import { useEffect } from 'react'
import { NextStudio } from 'next-sanity/studio'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import config from '../../../sanity.config'

const shouldForwardProp = (prop: string) => isPropValid(prop) && prop !== 'ratio'

export function StudioWrapper() {
  useEffect(() => {
    // 1. Intercept network fetch to npm registry / ping.sanity.io to return valid 200 mock
    const originalFetch = window.fetch
    window.fetch = async function (input: RequestInfo | URL, init?: RequestInit) {
      const urlStr =
        typeof input === 'string'
          ? input
          : input instanceof URL
          ? input.toString()
          : input.url

      if (urlStr.includes('registry.npmjs.org') || urlStr.includes('ping.sanity.io')) {
        return new Response(
          JSON.stringify({
            name: 'sanity',
            'dist-tags': { latest: '3.0.0' },
            versions: { '3.0.0': {} },
          }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          }
        )
      }
      return originalFetch.call(this, input, init)
    }

    // 2. Intercept console.error to suppress package version status and styled-components prop logs
    const originalConsoleError = console.error
    console.error = (...args: any[]) => {
      if (
        typeof args[0] === 'string' &&
        (args[0].includes('Failed to fetch version for package') ||
         args[0].includes('fetchLatestAvailableVersionForPackage') ||
         args[0].includes('unknown prop "ratio"') ||
         args[0].includes('styled-components: it looks like an unknown prop'))
      ) {
        return
      }
      originalConsoleError.apply(console, args)
    }

    return () => {
      window.fetch = originalFetch
      console.error = originalConsoleError
    }
  }, [])

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <NextStudio config={config} />
    </StyleSheetManager>
  )
}
