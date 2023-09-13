import { AboutLink } from '../AboutLink'

export function EldritchHorrorLink() {
  return (
    <AboutLink
      href="https://www.fantasyflightgames.com/en/products/eldritch-horror/"
      text="Eldritch Horror Board Game"
    />
  )
}

export function JosipLink() {
  return <AboutLink href="https://boardgamegeek.com/user/Batela" text="Josip" />
}

export function ThreadLink() {
  return (
    <AboutLink
      href="https://boardgamegeek.com/thread/2890913/mythos-phase-chaos-bag-variant"
      text="Thread"
    />
  )
}

export function PDFLink() {
  return <AboutLink href="/rules.pdf" text="PDF" />
}

export function ArkhamHorrorLink() {
  return (
    <AboutLink
      href="https://www.fantasyflightgames.com/en/products/arkham-horror-the-card-game/"
      text="Arkham Horror card game"
    />
  )
}

export function FGGLink() {
  return <AboutLink href="fantasyflightgames.com" text="FFG" />
}

export function WikiLink() {
  return <AboutLink href="eldritchhorror.fandom.com" text="Eldritch Horror Wiki" />
}
