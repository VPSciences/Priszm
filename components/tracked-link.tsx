'use client'

import { forwardRef, type ComponentProps, type MouseEvent } from 'react'
import Link from 'next/link'
import { sendGAEvent } from '@next/third-parties/google'

type GAParams = Record<string, string | number | boolean>

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string
  eventParams?: GAParams
}

/**
 * A drop-in replacement for next/link that reports a Google Analytics event
 * when clicked. Works inside <Button asChild> since it forwards refs/props.
 */
export const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  function TrackedLink({ eventName, eventParams, onClick, ...props }, ref) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      sendGAEvent('event', eventName, eventParams ?? {})
      onClick?.(event)
    }

    return <Link ref={ref} onClick={handleClick} {...props} />
  }
)
