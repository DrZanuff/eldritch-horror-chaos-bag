import {
  EldritchHorrorLink,
  JosipLink,
  ThreadLink,
  PDFLink,
  ArkhamHorrorLink,
  FGGLink,
  WikiLink
} from './component/Links'
import * as S from './AboutModal.styles'

export function AboutModal() {
  return (
    <S.AboutModalContainer data-testid="about-modal">
      <S.AboutContent>
        <h2>About</h2>
        <p>
          This web app is a helper tool for playing a variant for <EldritchHorrorLink />. The
          variant was created by the user <JosipLink /> from BGG. You can find more about the
          variant on his <ThreadLink /> and the PDF rules on this <PDFLink />.
        </p>
        <p>
          In a regular game of Eldritch Horror, the player must build the Mythos Deck before each
          game based on the Ancient One. The Mythos Phase is the bigger part of the game and tends
          to slow down the flow of the game with a lot of effects and bad/good stuff triggering more
          effects. The variant streamline the Mythos Phase using a bag of tokens like the{' '}
          <ArkhamHorrorLink />.
        </p>
        <p>
          After the player spends his actions he/she must get one token from the bag, each token
          containing a singular effect from the Mythos Phase. Read more about the thread for a
          deeper explanation.
        </p>
        <h2>Goal</h2>
        <p>
          In order to play the Chaos Bag variant, you must print the tokens and a bag to play. SSo
          if you want to try the variant without all the hassle of printing and setting up the bag,
          you can use this tool, which will follow all rules from the variant.
        </p>
        <h2>How to use</h2>
        <p>
          Select an Ancient One from the list and the number of players then click start. Just click
          on the Get Token button and follow the effect description. The game auto saves, so if you
          close the app you can resume to the game.
        </p>
        <h2>Credits</h2>
        <p>
          First for Josip for creating the variant. All used icons and images owned by <FGGLink />.
          All icons courtesy of <WikiLink /> with some small edits.
        </p>
      </S.AboutContent>
    </S.AboutModalContainer>
  )
}
