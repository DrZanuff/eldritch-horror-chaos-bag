import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { languageContext } from '../../../atoms/mainAtoms'
import { useRecoilState } from 'recoil'
import { useIntl } from 'react-intl'
import type { Languages, SelectChangeEvent } from './LanguageSelect.types'
import * as S from './LanguageSelect.styles'

const languages: Array<Languages> = ['us', 'br']

export function LanguageSelect() {
  const { formatMessage } = useIntl()
  const label = formatMessage({ id: 'select_language' })

  const [language, setLanguage] = useRecoilState(languageContext)

  const handleLanguageSelect = (event: SelectChangeEvent) => {
    const selectedLanguage = languages.find((lang) => lang == event.target.value)
    setLanguage(selectedLanguage || 'us')
  }

  return (
    <S.LanguageSelectContainer>
      <FormControl fullWidth>
        <InputLabel id="select-language">{label}</InputLabel>
        <Select
          labelId="select-language"
          id="select-language"
          size="small"
          label={label}
          value={language}
          onChange={handleLanguageSelect}>
          {languages.map((lang) => (
            <MenuItem key={lang} value={lang}>
              <ListItemText>
                {' '}
                <ListItemIcon>
                  <img src={`https://flagcdn.com/${lang}.svg`} width="25" alt={lang} />
                </ListItemIcon>
                {formatMessage({ id: lang })}
              </ListItemText>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </S.LanguageSelectContainer>
  )
}
