'use client'

import { faGavel } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Building() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-4 px-4">
      <FontAwesomeIcon icon={faGavel} className="text-4xl" />
      <h1 className="text-xl font-bold text-center">Looks like we&apos;re still building this web page</h1>
      <p className="text-sm text-center">Please check back later. If you think this is a mistake, please contact us at <a className="underline" href="mailto:hello@stellarworks.dev">hello@stellarworks.dev</a>.</p>
    </div>
  )
}
