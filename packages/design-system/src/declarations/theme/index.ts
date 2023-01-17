// To parse this data:
//
//   import { Convert, OxygenTheme } from "./file";
//
//   const theme = Convert.toOxygenTheme(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface OxygenTheme {
  baseline: OxygenBaseline
  breakpoints: OxygenBreakpoints
  spacing: number
  pageShellMaxContentWidth: string
  border: OxygenBorder
  direction: string
  shape: OxygenShape
  mixins: OxygenMixins
  shadows: string[]
  typography: OxygenTypography
  transitions: OxygenTransitions
  zIndex: OxygenZIndex
  opacity: OxygenOpacity
  overlays: any[]
  palette: OxygenPalette
  colorSchemes: OxygenColorSchemes
}

export interface OxygenBaseline {
  '#root': OxygenRoot
  html: OxygenHTML
  '*, *:before, *:after': OxygenBeforeAfter
  body: OxygenBody
  "[lang='ko'] body": OxygenLangKoOxygenBody
  h1: OxygenH1
  h2: OxygenH1
  h3: OxygenH1
  h4: OxygenH1
  h5: OxygenH1
  h6: OxygenH1
  'h-margin': OxygenHMargin
  'h:first-of-type': OxygenHFirstOfType
  'button, html input[type="button"], input[type="reset"], input[type="submit"]': OxygenButtonOxygenOxygenHTMLInputTypeButtonInputTypeResetInputTypeSubmit
  'input, textarea, select, button, a': OxygenInputOxygenTextareaSelectButtonA
  'a, a:hover, a:focus': OxygenAAHoverAFocus
  'html input[type="button"]': OxygenOxygenHTMLInputTypeButton
  'input[type="reset"]': OxygenOxygenHTMLInputTypeButton
  'input[type="submit"]': OxygenOxygenHTMLInputTypeButton
  '[tabindex="-1"]:focus': OxygenTabindex1Focus
  '.screen-reader-only': OxygenScreenReaderOnly
  '.screen-reader-only-focusable-actions': OxygenOxygenScreenReaderOnlyFocusableOxygenActions
  '.skip-to-content:focus': OxygenSkipToContentFocus
  '.only-light-mode': OxygenFilepondCredits
  '.only-dark-mode': OxygenFilepondCredits
  '.mode-dark .only-light-mode': OxygenFilepondCredits
  '.mode-dark .only-dark-mode': OxygenFilepondCredits
  '.slider:not([data-slider-disabled])': OxygenOxygenSliderNotDataOxygenSliderDisabled
  '.slider:not([data-slider-disabled]) .slider__slide': OxygenOxygenOxygenSliderNotDataOxygenSliderDisabledOxygenSliderSlide
  '.slider:not([data-slider-disabled])[data-slider-reverse]': OxygenOxygenOxygenSliderNotDataOxygenSliderDisabledDataOxygenSliderReverse
  '.slider:not([data-slider-disabled])[data-slider-v]': OxygenOxygenOxygenSliderNotDataOxygenSliderDisabledDataOxygenSliderV
  '[data-slider-moves] *': OxygenDataOxygenSliderMoves
  '@media (min-width: 744px)': OxygenMediaMinWidth744Px
  '.filepond--root': FilepondOxygenRoot
  '.filepond--panel-root': FilepondPanelOxygenRoot
  '.filepond--credits': OxygenFilepondCredits
  '[data-rsbs-overlay]': OxygenDataRsbsOverlay
  '.tox-tinymce': OxygenToxTinymce
  '.MuiBottomNavigationOxygenAction-label': OxygenMuiBottomNavigationOxygenActionLabel
}

export interface OxygenRoot {
  overflow: string
}

export interface OxygenBeforeAfter {
  WebkitBoxSizing: string
  MozBoxSizing: string
  boxSizing: string
  MsFlex: string
}

export interface OxygenMuiBottomNavigationOxygenActionLabel {
  opacity: string
}

export interface OxygenFilepondCredits {
  display: string
}

export interface FilepondPanelOxygenRoot {
  backgroundColor: string
}

export interface FilepondOxygenRoot {
  color: string
  borderRadius: string
  boxShadow: string
}

export interface OxygenScreenReaderOnly {
  border: number
  clip: string
  height: string
  margin: string
  overflow: string
  padding: number
  position: string
  width: string
}

export interface OxygenOxygenScreenReaderOnlyFocusableOxygenActions {
  clip: string
  height: string
  margin: number
  overflow: string
  position: string
  width: string
}

export interface OxygenSkipToContentFocus {
  backgroundColor: string
  fontSize: FontSize
  padding: string
  position: string
  left: string
  lineHeight: string
  top: string
  zIndex: number
}

export enum FontSize {
  The12Px = '12px',
  The14Px = '14px',
  The16Px = '16px',
  The18Px = '18px',
}

export interface OxygenOxygenSliderNotDataOxygenSliderDisabled {
  alignContent: string
  display: string
  overflow: string
  position: string
  userSelect: string
  webkitTouchCallout: string
  khtmlUserSelect: string
  msTouchOxygenAction: string
  touchOxygenAction: string
  webkitTapHighlightColor: string
  width: string
}

export interface OxygenOxygenOxygenSliderNotDataOxygenSliderDisabledOxygenSliderSlide {
  position: string
  overflow: string
  width: string
  minHeight: string
}

export interface OxygenOxygenOxygenSliderNotDataOxygenSliderDisabledDataOxygenSliderReverse {
  flexDirection: string
}

export interface OxygenOxygenOxygenSliderNotDataOxygenSliderDisabledDataOxygenSliderV {
  flexWrap: string
}

export interface OxygenToxTinymce {
  color: string
  backgroundColor: string
  borderRadius: string
  borderColor: string
}

export interface OxygenMediaMinWidth744Px {
  '.react-modal-drawer-container': OxygenReactOxygenModalDrawerContainer
  '[data-rsbs-overlay], [data-rsbs-root]:after': OxygenReactOxygenModalDrawerContainer
}

export interface OxygenReactOxygenModalDrawerContainer {
  display: string
  visibility: string
}

export interface OxygenDataRsbsOverlay {
  borderTopLeftRadius: string
  borderTopRightRadius: string
}

export interface OxygenDataOxygenSliderMoves {
  pointerEvents: string
}

export interface OxygenLangKoOxygenBody {
  wordBreak: string
}

export interface OxygenTabindex1Focus {
  outline: number
}

export interface OxygenAAHoverAFocus {
  color: string
  textDecoration: string
}

export interface OxygenBody {
  fontFamily: string
  margin: string
  lineBreak: string
  padding: string
  paddingRight: string
  overflow: string
  WebkitFontSmoothing: string
  MozOsxFontSmoothing: string
}

export interface OxygenButtonOxygenOxygenHTMLInputTypeButtonInputTypeResetInputTypeSubmit {
  webkitAppearance: string
  cursor: string
}

export interface OxygenHMargin {
  marginTop: string
  marginBottom: string
}

export interface OxygenH1 {
  fontFamily: string
}

export interface OxygenHFirstOfType {
  marginTop: number
}

export interface OxygenHTML {
  MsOxygenTextSizeAdjust: string
  MozOxygenTextSizeAdjust: string
  WebkitOxygenTextSizeAdjust: string
}

export interface OxygenOxygenHTMLInputTypeButton {
  WebkitAppearance: string
  cursor: string
}

export interface OxygenInputOxygenTextareaSelectButtonA {
  fontFamily: string
  fontSize: string
}

export interface OxygenBorder {
  default: number
  button: OxygenCheckBoxClass
  buttonSmall: OxygenCheckBoxClass
  buttonLarge: OxygenCheckBoxClass
  buttonRound: OxygenButtonRound
  formElement: OxygenCheckBoxClass
  statusLabel: OxygenCheckBoxClass
  countBadge: OxygenCheckBoxClass
  pager: OxygenCheckBoxClass
  profilePhoto: OxygenProfilePhoto
  progressBar: OxygenProgressBar
  rule: OxygenRule
  tab: OxygenRule
  dualButtonBar: OxygenDualButtonBar
  floatingButton: OxygenShape
  headerButton: OxygenShape
  checkBox: OxygenCheckBoxClass
  switch: OxygenCheckBoxClass
  radioButton: OxygenProfilePhoto
}

export interface OxygenCheckBoxClass {
  borderRadius: number
  borderWidth: number
}

export interface OxygenButtonRound {
  borderRadius: string
}

export interface OxygenDualButtonBar {
  borderRadius: number
  dividerWidth: number
}

export interface OxygenShape {
  borderRadius: number
}

export interface OxygenProfilePhoto {
  borderWidth: number
  borderRadius: string
}

export interface OxygenProgressBar {
  borderRadiusDefault: number
  borderRadiusRound: number
  borderRadiusThick: number
}

export interface OxygenRule {
  borderWidth: number
}

export interface OxygenBreakpoints {
  keys: string[]
  values: OxygenValues
}

export interface OxygenValues {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export interface OxygenColorSchemes {
  light: OxygenOxygenColorSchemesLight
  dark: OxygenDark
}

export interface OxygenDark {
  palette: OxygenPalette
  opacity: OxygenOpacity
  overlays: Array<null | string>
}

export interface OxygenOpacity {
  inputPlaceholder: number
  inputTouchBottomLine: number
  switchTrackDisabled: number
  switchTrack: number
}

export interface OxygenPalette {
  mode: string
  primary: OxygenError
  secondary: OxygenError
  tertiary: OxygenError
  secondaryLight: SecondaryOxygenDarkClass
  secondaryOxygenDark: SecondaryOxygenDarkClass
  light: SecondaryOxygenDarkClass
  text: OxygenText
  common: OxygenCommon
  error: OxygenError
  warning: OxygenError
  info: OxygenError
  success: OxygenError
  status: OxygenStatus
  grey: OxygenGrey
  buttons: OxygenButtons
  inputs: OxygenInputs
  background: OxygenBackgroundClass
  footer: OxygenFooter
  divider: string
  placeholder: string
  cursor: string
  imageBackground: string
  modal: OxygenModal
  toggleButton: OxygenToggleButton
  pageIndicatorDots: OxygenPageIndicatorDots
  loaderDots: OxygenLoaderDots
  navigation: OxygenStepConnector
  focus: string
  clear: string
  contrastThreshold: number
  tonalOffset: number
  action: OxygenAction
  OxygenAppBar: OxygenAppBar
  OxygenAvatar: OxygenAvatar
  OxygenChip: OxygenChip
  OxygenFilledInput: OxygenFilledInput
  OxygenLinearProgress: OxygenLinearProgress
  OxygenSkeleton: OxygenSkeleton
  OxygenSlider: OxygenSlider
  SnackbarContent: OxygenSkeleton
  OxygenSpeedDialOxygenAction: OxygenSpeedDialOxygenAction
  OxygenStepConnector: OxygenStepConnector
  StepContent: OxygenStepConnector
  OxygenSwitch: OxygenSwitch
  TableCell: OxygenStepConnector
  Tooltip: OxygenSkeleton
  dividerChannel: Channel
  colorScheme: string
}

export interface OxygenAppBar {
  defaultBg: string
  background: string
}

export interface OxygenAvatar {
  defaultBg: string
}

export interface OxygenChip {
  defaultOxygenBorder: string
  defaultOxygenAvatarColor: string
  defaultIconColor: string
}

export interface OxygenFilledInput {
  bg: string
  hoverBg: string
  disabledBg: string
}

export interface OxygenLinearProgress {
  primaryBg: string
  secondaryBg: string
  errorBg: string
  infoBg: string
  successBg: string
  warningBg: string
}

export interface OxygenSkeleton {
  bg: string
}

export interface OxygenSlider {
  primaryTrack: string
  secondaryTrack: string
  errorTrack: string
  infoTrack: string
  successTrack: string
  warningTrack: string
}

export interface OxygenSpeedDialOxygenAction {
  fabHoverBg: string
}

export interface OxygenStepConnector {
  border: string
}

export interface OxygenSwitch {
  defaultColor: string
  defaultDisabledColor: string
  primaryDisabledColor: string
  secondaryDisabledColor: string
  errorDisabledColor: string
  infoDisabledColor: string
  successDisabledColor: string
  warningDisabledColor: string
}

export interface OxygenAction {
  active: string
  hover: string
  hoverOxygenOpacity: number
  selected: string
  selectedOxygenOpacity: number
  disabled: string
  disabledBackground: string
  disabledOxygenOpacity: number
  focus: string
  focusOxygenOpacity: number
  activatedOxygenOpacity: number
  activeChannel: Channel
  selectedChannel: Channel
}

export enum Channel {
  The000 = '0 0 0',
  The255255255 = '255 255 255',
}

export interface OxygenBackgroundClass {
  backgroundLight: string
  backgroundLightHighlightedOrSelected: string
  backgroundHighlight: string
  backgroundContrast: string
  backgroundOxygenDark: string
  default: string
  inverse: string
  paper: string
  border: string
  contrastBackground: string
  appbar: string
  skeleton: string
}

export interface OxygenButtons {
  active: string
  hover: string
  selected: string
  disabled: string
  disabledBackground: string
}

export interface OxygenCommon {
  black: string
  white: BackgroundEnum
  background: BackgroundEnum
  onBackground: string
  backgroundChannel: string
  onBackgroundChannel: string
}

export enum BackgroundEnum {
  Fff = '#fff',
  The000000 = '#000000',
}

export interface OxygenError {
  main: string
  light: string
  dark: string
  contrastOxygenText: BackgroundEnum
  mainChannel: string
  lightChannel: string
  darkChannel: string
  contrastOxygenTextChannel: Channel
}

export interface OxygenFooter {
  background: string
  border: string
}

export interface OxygenGrey {
  '50': string
  '100': string
  '200': string
  '300': string
  '400': string
  '500': string
  '600': string
  '700': string
  '800': string
  '900': string
  A100: string
  A200: string
  A400: string
  A700: string
}

export interface OxygenInputs {
  inputBackground: string
  inputOxygenBorder: string
  inputFocusedOxygenBorder: string
  inputFocusedUnderlineOxygenBorder: string
  inputInvalidOxygenBorder: string
  inputInvalidBackground: string
  inputOxygenErrorMessage: string
  inputPrefixSelectBackground: string
  inputPrefixSelectOxygenBorder: string
  checked: string
  checkBoxShadow: string
  checkedDisabled: string
  inputDisabled: string
  selectDisabled: string
  autocomplete: OxygenAutocomplete
}

export interface OxygenAutocomplete {
  resultsBackground: string
  resultsOxygenBorder: string
  resultActiveBackground: string
  resultIcon: string
  resultIconInverse: string
}

export interface SecondaryOxygenDarkClass {
  main: string
  mainChannel: string
}

export interface OxygenLoaderDots {
  default: string
  light: string
  dark: string
}

export interface OxygenModal {
  overlay: string
  whiteOverlay: string
  background: string
}

export interface OxygenPageIndicatorDots {
  background: string
  backgroundSelected: string
  backgroundLight: string
  backgroundSelectedLight: string
}

export interface OxygenStatus {
  error: string
  info: string
  warning: string
  success: string
}

export interface OxygenText {
  primary: string
  secondary: string
  primaryChannel: string
  secondaryChannel: string
  contrastOxygenText: string
  disabled: string
  textOxygenDark: string
  textLight: string
  textInput: string
  textOxygenLink: string
  textOxygenLinkActive: string
  textOxygenLinkHover: string
  textOxygenLinkInverse: string
  textOxygenLinkInverseHover: string
  textOxygenLinkInverseActive: string
  textOxygenLinkNavigation: string
  textOxygenLinkNavigationHover: string
  textMuted: string
  textDisabled: string
  textMutedLarge: string
  textPlaceholder: string
}

export interface OxygenToggleButton {
  background: string
  backgroundSelected: string
}

export interface OxygenOxygenColorSchemesLight {
  palette: OxygenPalette
}

export interface OxygenMixins {}

export interface OxygenTransitions {
  easing: OxygenEasing
  duration: OxygenDuration
}

export interface OxygenDuration {
  shortest: number
  shorter: number
  short: number
  standard: number
  complex: number
  enteringScreen: number
  leavingScreen: number
}

export interface OxygenEasing {
  easeInOut: string
  easeOut: string
  easeIn: string
  sharp: string
}

export interface OxygenTypography {
  fontWeightSemiOxygenBold: number
  fontWeightExtraOxygenBold: number
  fontWeightLight: string
  fontWeightRegular: FontWeightRegular
  fontWeightMedium: string
  fontWeightOxygenBold: string
  fontSize: number
  fontFamily: string
  title1: OxygenLabel3
  title2: OxygenLabel3
  title3: OxygenLabel3
  textLarge: OxygenFormElementLargeClass
  textRegular: OxygenFormElementLargeClass
  textSmall: OxygenFormElementLargeClass
  textMicro: OxygenFormElementLargeClass
  textLargeTall: OxygenFormElementLargeClass
  textRegularTall: OxygenFormElementLargeClass
  textMicroWide: OxygenOxygenTextMicroWide
  formLabel: OxygenFormElementLargeClass
  formOxygenErrorMessage: OxygenFormElementLargeClass
  formOxygenErrorMessageSmall: OxygenFormElementLargeClass
  formElementLarge: OxygenFormElementLargeClass
  formElement: OxygenFormElementLargeClass
  formElementSmall: OxygenFormElementLargeClass
  label1: OxygenFormElementLargeClass
  label2: OxygenFormElementLargeClass
  label3: OxygenLabel3
  label4: OxygenFormElementLargeClass
  link: OxygenLink
  navigation: OxygenFormElementLargeClass
  small: OxygenFormElementLargeClass
  textReduced: OxygenFormElementLargeClass
  textLargeShort: OxygenFormElementLargeClass
  textRegularShort: OxygenFormElementLargeClass
  formInput: OxygenFormElementLargeClass
  button: OxygenFormElementLargeClass
  buttonSmall: OxygenFormElementLargeClass
  buttonLarge: OxygenFormElementLargeClass
  light: OxygenBold
  book: OxygenBold
  bold: OxygenBold
}

export interface OxygenBold {
  fontWeight: string
}

export interface OxygenFormElementLargeClass {
  fontSize: FontSize
  lineHeight: string
  letterSpacing: FontWeightRegular
  fontFamily: string
  color: Color
}

export enum Color {
  The484848 = '#484848',
}

export enum FontWeightRegular {
  Normal = 'normal',
}

export interface OxygenLabel3 {
  fontSize: string
  lineHeight: string
  letterSpacing: FontWeightRegular
  fontFamily: string
  color: Color
  paddingTop: string
  paddingBottom: string
  '@media (max-width: 743px)'?: OxygenMediaMaxWidth743Px
}

export interface OxygenMediaMaxWidth743Px {
  fontSize: string
  letterSpacing: FontWeightRegular
  lineHeight: string
}

export interface OxygenLink {
  textDecoration: string
  textDecorationHover: string
  textDecorationFocus: string
  textDecorationDisabled: string
  textDecorationMono: string
  textDecorationUnderline: string
}

export interface OxygenOxygenTextMicroWide {
  fontSize: FontSize
  lineHeight: FontSize
  letterSpacing: number
  fontFamily: string
  color: Color
}

export interface OxygenZIndex {
  mobileStepper: number
  fab: number
  speedDial: number
  appBar: number
  drawer: number
  modal: number
  snackbar: number
  tooltip: number
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toOxygenTheme(json: string): OxygenTheme {
    return cast(JSON.parse(json), r('OxygenTheme'))
  }

  public static themeToJson(value: OxygenTheme): string {
    return JSON.stringify(uncast(value, r('OxygenTheme')), null, 2)
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ)
  const parentOxygenText = parent ? ` on ${parent}` : ''
  const keyOxygenText = key ? ` for key "${key}"` : ''
  throw Error(
    `Invalid value${keyOxygenText}${parentOxygenText}. Expected ${prettyTyp} but got ${JSON.stringify(
      val
    )}`
  )
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`
    } else {
      return `one of [${typ
        .map((a) => {
          return prettyTypeName(a)
        })
        .join(', ')}]`
    }
  } else if (typeof typ === 'object' && typ.literal !== undefined) {
    return typ.literal
  } else {
    return typeof typ
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {}
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }))
    typ.jsonToJS = map
  }
  return typ.jsonToJS
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {}
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }))
    typ.jsToJSON = map
  }
  return typ.jsToJSON
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = '',
  parent: any = ''
): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val
    return invalidValue(typ, val, key, parent)
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length
    for (let i = 0; i < l; i++) {
      const typ = typs[i]
      try {
        return transform(val, typ, getProps)
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent)
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val
    return invalidValue(
      cases.map((a) => {
        return l(a)
      }),
      val,
      key,
      parent
    )
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l('array'), val, key, parent)
    return val.map((el) => transform(el, typ, getProps))
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null
    }
    const d = new Date(val)
    if (isNaN(d.valueOf())) {
      return invalidValue(l('Date'), val, key, parent)
    }
    return d
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue(l(ref || 'object'), val, key, parent)
    }
    const result: any = {}
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key]
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined
      result[prop.key] = transform(v, prop.typ, getProps, key, ref)
    })
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref)
      }
    })
    return result
  }

  if (typ === 'any') return val
  if (typ === null) {
    if (val === null) return val
    return invalidValue(typ, val, key, parent)
  }
  if (typ === false) return invalidValue(typ, val, key, parent)
  let ref: any = undefined
  while (typeof typ === 'object' && typ.ref !== undefined) {
    ref = typ.ref
    typ = typeMap[typ.ref]
  }
  if (Array.isArray(typ)) return transformEnum(typ, val)
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty('props')
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val, key, parent)
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val)
  return transformPrimitive(typ, val)
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps)
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps)
}

function l(typ: any) {
  return { literal: typ }
}

function a(typ: any) {
  return { arrayItems: typ }
}

function u(...typs: any[]) {
  return { unionMembers: typs }
}

function o(props: any[], additional: any) {
  return { props, additional }
}

function r(name: string) {
  return { ref: name }
}

const typeMap: any = {
  OxygenTheme: o(
    [
      { json: 'baseline', js: 'baseline', typ: r('OxygenBaseline') },
      { json: 'breakpoints', js: 'breakpoints', typ: r('OxygenBreakpoints') },
      { json: 'spacing', js: 'spacing', typ: 0 },
      { json: 'pageShellMaxContentWidth', js: 'pageShellMaxContentWidth', typ: '' },
      { json: 'border', js: 'border', typ: r('OxygenBorder') },
      { json: 'direction', js: 'direction', typ: '' },
      { json: 'shape', js: 'shape', typ: r('OxygenShape') },
      { json: 'mixins', js: 'mixins', typ: r('OxygenMixins') },
      { json: 'shadows', js: 'shadows', typ: a('') },
      { json: 'typography', js: 'typography', typ: r('OxygenTypography') },
      { json: 'transitions', js: 'transitions', typ: r('OxygenTransitions') },
      { json: 'zIndex', js: 'zIndex', typ: r('OxygenZIndex') },
      { json: 'opacity', js: 'opacity', typ: r('OxygenOpacity') },
      { json: 'overlays', js: 'overlays', typ: a('any') },
      { json: 'palette', js: 'palette', typ: r('OxygenPalette') },
      { json: 'colorSchemes', js: 'colorSchemes', typ: r('OxygenColorSchemes') },
    ],
    false
  ),
  OxygenBaseline: o(
    [
      { json: '#root', js: '#root', typ: r('OxygenRoot') },
      { json: 'html', js: 'html', typ: r('OxygenHTML') },
      {
        json: '*, *:before, *:after',
        js: '*, *:before, *:after',
        typ: r('OxygenBeforeAfter'),
      },
      { json: 'body', js: 'body', typ: r('OxygenBody') },
      {
        json: "[lang='ko'] body",
        js: "[lang='ko'] body",
        typ: r('OxygenLangKoOxygenBody'),
      },
      { json: 'h1', js: 'h1', typ: r('OxygenH1') },
      { json: 'h2', js: 'h2', typ: r('OxygenH1') },
      { json: 'h3', js: 'h3', typ: r('OxygenH1') },
      { json: 'h4', js: 'h4', typ: r('OxygenH1') },
      { json: 'h5', js: 'h5', typ: r('OxygenH1') },
      { json: 'h6', js: 'h6', typ: r('OxygenH1') },
      { json: 'h-margin', js: 'h-margin', typ: r('OxygenHMargin') },
      {
        json: 'h:first-of-type',
        js: 'h:first-of-type',
        typ: r('OxygenHFirstOfType'),
      },
      {
        json: 'button, html input[type="button"], input[type="reset"], input[type="submit"]',
        js: 'button, html input[type="button"], input[type="reset"], input[type="submit"]',
        typ: r(
          'OxygenButtonOxygenOxygenHTMLInputTypeButtonInputTypeResetInputTypeSubmit'
        ),
      },
      {
        json: 'input, textarea, select, button, a',
        js: 'input, textarea, select, button, a',
        typ: r('OxygenInputOxygenTextareaSelectButtonA'),
      },
      {
        json: 'a, a:hover, a:focus',
        js: 'a, a:hover, a:focus',
        typ: r('OxygenAAHoverAFocus'),
      },
      {
        json: 'html input[type="button"]',
        js: 'html input[type="button"]',
        typ: r('OxygenOxygenHTMLInputTypeButton'),
      },
      {
        json: 'input[type="reset"]',
        js: 'input[type="reset"]',
        typ: r('OxygenOxygenHTMLInputTypeButton'),
      },
      {
        json: 'input[type="submit"]',
        js: 'input[type="submit"]',
        typ: r('OxygenOxygenHTMLInputTypeButton'),
      },
      {
        json: '[tabindex="-1"]:focus',
        js: '[tabindex="-1"]:focus',
        typ: r('OxygenTabindex1Focus'),
      },
      {
        json: '.screen-reader-only',
        js: '.screen-reader-only',
        typ: r('OxygenScreenReaderOnly'),
      },
      {
        json: '.screen-reader-only-focusable-actions',
        js: '.screen-reader-only-focusable-actions',
        typ: r('OxygenOxygenScreenReaderOnlyFocusableOxygenActions'),
      },
      {
        json: '.skip-to-content:focus',
        js: '.skip-to-content:focus',
        typ: r('OxygenSkipToContentFocus'),
      },
      {
        json: '.only-light-mode',
        js: '.only-light-mode',
        typ: r('OxygenFilepondCredits'),
      },
      {
        json: '.only-dark-mode',
        js: '.only-dark-mode',
        typ: r('OxygenFilepondCredits'),
      },
      {
        json: '.mode-dark .only-light-mode',
        js: '.mode-dark .only-light-mode',
        typ: r('OxygenFilepondCredits'),
      },
      {
        json: '.mode-dark .only-dark-mode',
        js: '.mode-dark .only-dark-mode',
        typ: r('OxygenFilepondCredits'),
      },
      {
        json: '.slider:not([data-slider-disabled])',
        js: '.slider:not([data-slider-disabled])',
        typ: r('OxygenOxygenSliderNotDataOxygenSliderDisabled'),
      },
      {
        json: '.slider:not([data-slider-disabled]) .slider__slide',
        js: '.slider:not([data-slider-disabled]) .slider__slide',
        typ: r(
          'OxygenOxygenOxygenSliderNotDataOxygenSliderDisabledOxygenSliderSlide'
        ),
      },
      {
        json: '.slider:not([data-slider-disabled])[data-slider-reverse]',
        js: '.slider:not([data-slider-disabled])[data-slider-reverse]',
        typ: r(
          'OxygenOxygenOxygenSliderNotDataOxygenSliderDisabledDataOxygenSliderReverse'
        ),
      },
      {
        json: '.slider:not([data-slider-disabled])[data-slider-v]',
        js: '.slider:not([data-slider-disabled])[data-slider-v]',
        typ: r(
          'OxygenOxygenOxygenSliderNotDataOxygenSliderDisabledDataOxygenSliderV'
        ),
      },
      {
        json: '[data-slider-moves] *',
        js: '[data-slider-moves] *',
        typ: r('OxygenDataOxygenSliderMoves'),
      },
      {
        json: '@media (min-width: 744px)',
        js: '@media (min-width: 744px)',
        typ: r('OxygenMediaMinWidth744Px'),
      },
      {
        json: '.filepond--root',
        js: '.filepond--root',
        typ: r('FilepondOxygenRoot'),
      },
      {
        json: '.filepond--panel-root',
        js: '.filepond--panel-root',
        typ: r('FilepondPanelOxygenRoot'),
      },
      {
        json: '.filepond--credits',
        js: '.filepond--credits',
        typ: r('OxygenFilepondCredits'),
      },
      {
        json: '[data-rsbs-overlay]',
        js: '[data-rsbs-overlay]',
        typ: r('OxygenDataRsbsOverlay'),
      },
      { json: '.tox-tinymce', js: '.tox-tinymce', typ: r('OxygenToxTinymce') },
      {
        json: '.MuiBottomNavigationOxygenAction-label',
        js: '.MuiBottomNavigationOxygenAction-label',
        typ: r('OxygenMuiBottomNavigationOxygenActionLabel'),
      },
    ],
    false
  ),
  OxygenRoot: o([{ json: 'overflow', js: 'overflow', typ: '' }], false),
  OxygenBeforeAfter: o(
    [
      { json: 'WebkitBoxSizing', js: 'WebkitBoxSizing', typ: '' },
      { json: 'MozBoxSizing', js: 'MozBoxSizing', typ: '' },
      { json: 'boxSizing', js: 'boxSizing', typ: '' },
      { json: 'MsFlex', js: 'MsFlex', typ: '' },
    ],
    false
  ),
  OxygenMuiBottomNavigationOxygenActionLabel: o(
    [{ json: 'opacity', js: 'opacity', typ: '' }],
    false
  ),
  OxygenFilepondCredits: o([{ json: 'display', js: 'display', typ: '' }], false),
  FilepondPanelOxygenRoot: o(
    [{ json: 'backgroundColor', js: 'backgroundColor', typ: '' }],
    false
  ),
  FilepondOxygenRoot: o(
    [
      { json: 'color', js: 'color', typ: '' },
      { json: 'borderRadius', js: 'borderRadius', typ: '' },
      { json: 'boxShadow', js: 'boxShadow', typ: '' },
    ],
    false
  ),
  OxygenScreenReaderOnly: o(
    [
      { json: 'border', js: 'border', typ: 0 },
      { json: 'clip', js: 'clip', typ: '' },
      { json: 'height', js: 'height', typ: '' },
      { json: 'margin', js: 'margin', typ: '' },
      { json: 'overflow', js: 'overflow', typ: '' },
      { json: 'padding', js: 'padding', typ: 0 },
      { json: 'position', js: 'position', typ: '' },
      { json: 'width', js: 'width', typ: '' },
    ],
    false
  ),
  OxygenOxygenScreenReaderOnlyFocusableOxygenActions: o(
    [
      { json: 'clip', js: 'clip', typ: '' },
      { json: 'height', js: 'height', typ: '' },
      { json: 'margin', js: 'margin', typ: 0 },
      { json: 'overflow', js: 'overflow', typ: '' },
      { json: 'position', js: 'position', typ: '' },
      { json: 'width', js: 'width', typ: '' },
    ],
    false
  ),
  OxygenSkipToContentFocus: o(
    [
      { json: 'backgroundColor', js: 'backgroundColor', typ: '' },
      { json: 'fontSize', js: 'fontSize', typ: r('FontSize') },
      { json: 'padding', js: 'padding', typ: '' },
      { json: 'position', js: 'position', typ: '' },
      { json: 'left', js: 'left', typ: '' },
      { json: 'lineHeight', js: 'lineHeight', typ: '' },
      { json: 'top', js: 'top', typ: '' },
      { json: 'zIndex', js: 'zIndex', typ: 0 },
    ],
    false
  ),
  OxygenOxygenSliderNotDataOxygenSliderDisabled: o(
    [
      { json: 'alignContent', js: 'alignContent', typ: '' },
      { json: 'display', js: 'display', typ: '' },
      { json: 'overflow', js: 'overflow', typ: '' },
      { json: 'position', js: 'position', typ: '' },
      { json: 'userSelect', js: 'userSelect', typ: '' },
      { json: 'webkitTouchCallout', js: 'webkitTouchCallout', typ: '' },
      { json: 'khtmlUserSelect', js: 'khtmlUserSelect', typ: '' },
      { json: 'msTouchOxygenAction', js: 'msTouchOxygenAction', typ: '' },
      { json: 'touchOxygenAction', js: 'touchOxygenAction', typ: '' },
      { json: 'webkitTapHighlightColor', js: 'webkitTapHighlightColor', typ: '' },
      { json: 'width', js: 'width', typ: '' },
    ],
    false
  ),
  OxygenOxygenOxygenSliderNotDataOxygenSliderDisabledOxygenSliderSlide: o(
    [
      { json: 'position', js: 'position', typ: '' },
      { json: 'overflow', js: 'overflow', typ: '' },
      { json: 'width', js: 'width', typ: '' },
      { json: 'minHeight', js: 'minHeight', typ: '' },
    ],
    false
  ),
  OxygenOxygenOxygenSliderNotDataOxygenSliderDisabledDataOxygenSliderReverse: o(
    [{ json: 'flexDirection', js: 'flexDirection', typ: '' }],
    false
  ),
  OxygenOxygenOxygenSliderNotDataOxygenSliderDisabledDataOxygenSliderV: o(
    [{ json: 'flexWrap', js: 'flexWrap', typ: '' }],
    false
  ),
  OxygenToxTinymce: o(
    [
      { json: 'color', js: 'color', typ: '' },
      { json: 'backgroundColor', js: 'backgroundColor', typ: '' },
      { json: 'borderRadius', js: 'borderRadius', typ: '' },
      { json: 'borderColor', js: 'borderColor', typ: '' },
    ],
    false
  ),
  OxygenMediaMinWidth744Px: o(
    [
      {
        json: '.react-modal-drawer-container',
        js: '.react-modal-drawer-container',
        typ: r('OxygenReactOxygenModalDrawerContainer'),
      },
      {
        json: '[data-rsbs-overlay], [data-rsbs-root]:after',
        js: '[data-rsbs-overlay], [data-rsbs-root]:after',
        typ: r('OxygenReactOxygenModalDrawerContainer'),
      },
    ],
    false
  ),
  OxygenReactOxygenModalDrawerContainer: o(
    [
      { json: 'display', js: 'display', typ: '' },
      { json: 'visibility', js: 'visibility', typ: '' },
    ],
    false
  ),
  OxygenDataRsbsOverlay: o(
    [
      { json: 'borderTopLeftRadius', js: 'borderTopLeftRadius', typ: '' },
      { json: 'borderTopRightRadius', js: 'borderTopRightRadius', typ: '' },
    ],
    false
  ),
  OxygenDataOxygenSliderMoves: o(
    [{ json: 'pointerEvents', js: 'pointerEvents', typ: '' }],
    false
  ),
  OxygenLangKoOxygenBody: o(
    [{ json: 'wordBreak', js: 'wordBreak', typ: '' }],
    false
  ),
  OxygenTabindex1Focus: o([{ json: 'outline', js: 'outline', typ: 0 }], false),
  OxygenAAHoverAFocus: o(
    [
      { json: 'color', js: 'color', typ: '' },
      { json: 'textDecoration', js: 'textDecoration', typ: '' },
    ],
    false
  ),
  OxygenBody: o(
    [
      { json: 'fontFamily', js: 'fontFamily', typ: '' },
      { json: 'margin', js: 'margin', typ: '' },
      { json: 'lineBreak', js: 'lineBreak', typ: '' },
      { json: 'padding', js: 'padding', typ: '' },
      { json: 'paddingRight', js: 'paddingRight', typ: '' },
      { json: 'overflow', js: 'overflow', typ: '' },
      { json: 'WebkitFontSmoothing', js: 'WebkitFontSmoothing', typ: '' },
      { json: 'MozOsxFontSmoothing', js: 'MozOsxFontSmoothing', typ: '' },
    ],
    false
  ),
  OxygenButtonOxygenOxygenHTMLInputTypeButtonInputTypeResetInputTypeSubmit: o(
    [
      { json: 'webkitAppearance', js: 'webkitAppearance', typ: '' },
      { json: 'cursor', js: 'cursor', typ: '' },
    ],
    false
  ),
  OxygenHMargin: o(
    [
      { json: 'marginTop', js: 'marginTop', typ: '' },
      { json: 'marginBottom', js: 'marginBottom', typ: '' },
    ],
    false
  ),
  OxygenH1: o([{ json: 'fontFamily', js: 'fontFamily', typ: '' }], false),
  OxygenHFirstOfType: o([{ json: 'marginTop', js: 'marginTop', typ: 0 }], false),
  OxygenHTML: o(
    [
      { json: 'MsOxygenTextSizeAdjust', js: 'MsOxygenTextSizeAdjust', typ: '' },
      { json: 'MozOxygenTextSizeAdjust', js: 'MozOxygenTextSizeAdjust', typ: '' },
      {
        json: 'WebkitOxygenTextSizeAdjust',
        js: 'WebkitOxygenTextSizeAdjust',
        typ: '',
      },
    ],
    false
  ),
  OxygenOxygenHTMLInputTypeButton: o(
    [
      { json: 'WebkitAppearance', js: 'WebkitAppearance', typ: '' },
      { json: 'cursor', js: 'cursor', typ: '' },
    ],
    false
  ),
  OxygenInputOxygenTextareaSelectButtonA: o(
    [
      { json: 'fontFamily', js: 'fontFamily', typ: '' },
      { json: 'fontSize', js: 'fontSize', typ: '' },
    ],
    false
  ),
  OxygenBorder: o(
    [
      { json: 'default', js: 'default', typ: 0 },
      { json: 'button', js: 'button', typ: r('OxygenCheckBoxClass') },
      { json: 'buttonSmall', js: 'buttonSmall', typ: r('OxygenCheckBoxClass') },
      { json: 'buttonLarge', js: 'buttonLarge', typ: r('OxygenCheckBoxClass') },
      { json: 'buttonRound', js: 'buttonRound', typ: r('OxygenButtonRound') },
      { json: 'formElement', js: 'formElement', typ: r('OxygenCheckBoxClass') },
      { json: 'statusLabel', js: 'statusLabel', typ: r('OxygenCheckBoxClass') },
      { json: 'countBadge', js: 'countBadge', typ: r('OxygenCheckBoxClass') },
      { json: 'pager', js: 'pager', typ: r('OxygenCheckBoxClass') },
      { json: 'profilePhoto', js: 'profilePhoto', typ: r('OxygenProfilePhoto') },
      { json: 'progressBar', js: 'progressBar', typ: r('OxygenProgressBar') },
      { json: 'rule', js: 'rule', typ: r('OxygenRule') },
      { json: 'tab', js: 'tab', typ: r('OxygenRule') },
      { json: 'dualButtonBar', js: 'dualButtonBar', typ: r('OxygenDualButtonBar') },
      { json: 'floatingButton', js: 'floatingButton', typ: r('OxygenShape') },
      { json: 'headerButton', js: 'headerButton', typ: r('OxygenShape') },
      { json: 'checkBox', js: 'checkBox', typ: r('OxygenCheckBoxClass') },
      { json: 'switch', js: 'switch', typ: r('OxygenCheckBoxClass') },
      { json: 'radioButton', js: 'radioButton', typ: r('OxygenProfilePhoto') },
    ],
    false
  ),
  OxygenCheckBoxClass: o(
    [
      { json: 'borderRadius', js: 'borderRadius', typ: 0 },
      { json: 'borderWidth', js: 'borderWidth', typ: 0 },
    ],
    false
  ),
  OxygenButtonRound: o(
    [{ json: 'borderRadius', js: 'borderRadius', typ: '' }],
    false
  ),
  OxygenDualButtonBar: o(
    [
      { json: 'borderRadius', js: 'borderRadius', typ: 0 },
      { json: 'dividerWidth', js: 'dividerWidth', typ: 0 },
    ],
    false
  ),
  OxygenShape: o([{ json: 'borderRadius', js: 'borderRadius', typ: 0 }], false),
  OxygenProfilePhoto: o(
    [
      { json: 'borderWidth', js: 'borderWidth', typ: 0 },
      { json: 'borderRadius', js: 'borderRadius', typ: '' },
    ],
    false
  ),
  OxygenProgressBar: o(
    [
      { json: 'borderRadiusDefault', js: 'borderRadiusDefault', typ: 0 },
      { json: 'borderRadiusRound', js: 'borderRadiusRound', typ: 0 },
      { json: 'borderRadiusThick', js: 'borderRadiusThick', typ: 0 },
    ],
    false
  ),
  OxygenRule: o([{ json: 'borderWidth', js: 'borderWidth', typ: 0 }], false),
  OxygenBreakpoints: o(
    [
      { json: 'keys', js: 'keys', typ: a('') },
      { json: 'values', js: 'values', typ: r('OxygenValues') },
    ],
    false
  ),
  OxygenValues: o(
    [
      { json: 'xs', js: 'xs', typ: 0 },
      { json: 'sm', js: 'sm', typ: 0 },
      { json: 'md', js: 'md', typ: 0 },
      { json: 'lg', js: 'lg', typ: 0 },
      { json: 'xl', js: 'xl', typ: 0 },
    ],
    false
  ),
  OxygenColorSchemes: o(
    [
      { json: 'light', js: 'light', typ: r('OxygenOxygenColorSchemesLight') },
      { json: 'dark', js: 'dark', typ: r('OxygenDark') },
    ],
    false
  ),
  OxygenDark: o(
    [
      { json: 'palette', js: 'palette', typ: r('OxygenPalette') },
      { json: 'opacity', js: 'opacity', typ: r('OxygenOpacity') },
      { json: 'overlays', js: 'overlays', typ: a(u(null, '')) },
    ],
    false
  ),
  OxygenOpacity: o(
    [
      { json: 'inputPlaceholder', js: 'inputPlaceholder', typ: 3.14 },
      { json: 'inputTouchBottomLine', js: 'inputTouchBottomLine', typ: 3.14 },
      { json: 'switchTrackDisabled', js: 'switchTrackDisabled', typ: 3.14 },
      { json: 'switchTrack', js: 'switchTrack', typ: 3.14 },
    ],
    false
  ),
  OxygenPalette: o(
    [
      { json: 'mode', js: 'mode', typ: '' },
      { json: 'primary', js: 'primary', typ: r('OxygenError') },
      { json: 'secondary', js: 'secondary', typ: r('OxygenError') },
      { json: 'tertiary', js: 'tertiary', typ: r('OxygenError') },
      {
        json: 'secondaryLight',
        js: 'secondaryLight',
        typ: r('SecondaryOxygenDarkClass'),
      },
      {
        json: 'secondaryOxygenDark',
        js: 'secondaryOxygenDark',
        typ: r('SecondaryOxygenDarkClass'),
      },
      { json: 'light', js: 'light', typ: r('SecondaryOxygenDarkClass') },
      { json: 'text', js: 'text', typ: r('OxygenText') },
      { json: 'common', js: 'common', typ: r('OxygenCommon') },
      { json: 'error', js: 'error', typ: r('OxygenError') },
      { json: 'warning', js: 'warning', typ: r('OxygenError') },
      { json: 'info', js: 'info', typ: r('OxygenError') },
      { json: 'success', js: 'success', typ: r('OxygenError') },
      { json: 'status', js: 'status', typ: r('OxygenStatus') },
      { json: 'grey', js: 'grey', typ: r('OxygenGrey') },
      { json: 'buttons', js: 'buttons', typ: r('OxygenButtons') },
      { json: 'inputs', js: 'inputs', typ: r('OxygenInputs') },
      { json: 'background', js: 'background', typ: r('OxygenBackgroundClass') },
      { json: 'footer', js: 'footer', typ: r('OxygenFooter') },
      { json: 'divider', js: 'divider', typ: '' },
      { json: 'placeholder', js: 'placeholder', typ: '' },
      { json: 'cursor', js: 'cursor', typ: '' },
      { json: 'imageBackground', js: 'imageBackground', typ: '' },
      { json: 'modal', js: 'modal', typ: r('OxygenModal') },
      { json: 'toggleButton', js: 'toggleButton', typ: r('OxygenToggleButton') },
      {
        json: 'pageIndicatorDots',
        js: 'pageIndicatorDots',
        typ: r('OxygenPageIndicatorDots'),
      },
      { json: 'loaderDots', js: 'loaderDots', typ: r('OxygenLoaderDots') },
      { json: 'navigation', js: 'navigation', typ: r('OxygenStepConnector') },
      { json: 'focus', js: 'focus', typ: '' },
      { json: 'clear', js: 'clear', typ: '' },
      { json: 'contrastThreshold', js: 'contrastThreshold', typ: 0 },
      { json: 'tonalOffset', js: 'tonalOffset', typ: 3.14 },
      { json: 'action', js: 'action', typ: r('OxygenAction') },
      { json: 'OxygenAppBar', js: 'OxygenAppBar', typ: r('OxygenAppBar') },
      { json: 'OxygenAvatar', js: 'OxygenAvatar', typ: r('OxygenAvatar') },
      { json: 'OxygenChip', js: 'OxygenChip', typ: r('OxygenChip') },
      {
        json: 'OxygenFilledInput',
        js: 'OxygenFilledInput',
        typ: r('OxygenFilledInput'),
      },
      {
        json: 'OxygenLinearProgress',
        js: 'OxygenLinearProgress',
        typ: r('OxygenLinearProgress'),
      },
      { json: 'OxygenSkeleton', js: 'OxygenSkeleton', typ: r('OxygenSkeleton') },
      { json: 'OxygenSlider', js: 'OxygenSlider', typ: r('OxygenSlider') },
      { json: 'SnackbarContent', js: 'SnackbarContent', typ: r('OxygenSkeleton') },
      {
        json: 'OxygenSpeedDialOxygenAction',
        js: 'OxygenSpeedDialOxygenAction',
        typ: r('OxygenSpeedDialOxygenAction'),
      },
      {
        json: 'OxygenStepConnector',
        js: 'OxygenStepConnector',
        typ: r('OxygenStepConnector'),
      },
      { json: 'StepContent', js: 'StepContent', typ: r('OxygenStepConnector') },
      { json: 'OxygenSwitch', js: 'OxygenSwitch', typ: r('OxygenSwitch') },
      { json: 'TableCell', js: 'TableCell', typ: r('OxygenStepConnector') },
      { json: 'Tooltip', js: 'Tooltip', typ: r('OxygenSkeleton') },
      { json: 'dividerChannel', js: 'dividerChannel', typ: r('Channel') },
      { json: 'colorScheme', js: 'colorScheme', typ: '' },
    ],
    false
  ),
  OxygenAppBar: o(
    [
      { json: 'defaultBg', js: 'defaultBg', typ: '' },
      { json: 'background', js: 'background', typ: '' },
    ],
    false
  ),
  OxygenAvatar: o([{ json: 'defaultBg', js: 'defaultBg', typ: '' }], false),
  OxygenChip: o(
    [
      { json: 'defaultOxygenBorder', js: 'defaultOxygenBorder', typ: '' },
      { json: 'defaultOxygenAvatarColor', js: 'defaultOxygenAvatarColor', typ: '' },
      { json: 'defaultIconColor', js: 'defaultIconColor', typ: '' },
    ],
    false
  ),
  OxygenFilledInput: o(
    [
      { json: 'bg', js: 'bg', typ: '' },
      { json: 'hoverBg', js: 'hoverBg', typ: '' },
      { json: 'disabledBg', js: 'disabledBg', typ: '' },
    ],
    false
  ),
  OxygenLinearProgress: o(
    [
      { json: 'primaryBg', js: 'primaryBg', typ: '' },
      { json: 'secondaryBg', js: 'secondaryBg', typ: '' },
      { json: 'errorBg', js: 'errorBg', typ: '' },
      { json: 'infoBg', js: 'infoBg', typ: '' },
      { json: 'successBg', js: 'successBg', typ: '' },
      { json: 'warningBg', js: 'warningBg', typ: '' },
    ],
    false
  ),
  OxygenSkeleton: o([{ json: 'bg', js: 'bg', typ: '' }], false),
  OxygenSlider: o(
    [
      { json: 'primaryTrack', js: 'primaryTrack', typ: '' },
      { json: 'secondaryTrack', js: 'secondaryTrack', typ: '' },
      { json: 'errorTrack', js: 'errorTrack', typ: '' },
      { json: 'infoTrack', js: 'infoTrack', typ: '' },
      { json: 'successTrack', js: 'successTrack', typ: '' },
      { json: 'warningTrack', js: 'warningTrack', typ: '' },
    ],
    false
  ),
  OxygenSpeedDialOxygenAction: o(
    [{ json: 'fabHoverBg', js: 'fabHoverBg', typ: '' }],
    false
  ),
  OxygenStepConnector: o([{ json: 'border', js: 'border', typ: '' }], false),
  OxygenSwitch: o(
    [
      { json: 'defaultColor', js: 'defaultColor', typ: '' },
      { json: 'defaultDisabledColor', js: 'defaultDisabledColor', typ: '' },
      { json: 'primaryDisabledColor', js: 'primaryDisabledColor', typ: '' },
      { json: 'secondaryDisabledColor', js: 'secondaryDisabledColor', typ: '' },
      { json: 'errorDisabledColor', js: 'errorDisabledColor', typ: '' },
      { json: 'infoDisabledColor', js: 'infoDisabledColor', typ: '' },
      { json: 'successDisabledColor', js: 'successDisabledColor', typ: '' },
      { json: 'warningDisabledColor', js: 'warningDisabledColor', typ: '' },
    ],
    false
  ),
  OxygenAction: o(
    [
      { json: 'active', js: 'active', typ: '' },
      { json: 'hover', js: 'hover', typ: '' },
      { json: 'hoverOxygenOpacity', js: 'hoverOxygenOpacity', typ: 3.14 },
      { json: 'selected', js: 'selected', typ: '' },
      { json: 'selectedOxygenOpacity', js: 'selectedOxygenOpacity', typ: 3.14 },
      { json: 'disabled', js: 'disabled', typ: '' },
      { json: 'disabledBackground', js: 'disabledBackground', typ: '' },
      { json: 'disabledOxygenOpacity', js: 'disabledOxygenOpacity', typ: 3.14 },
      { json: 'focus', js: 'focus', typ: '' },
      { json: 'focusOxygenOpacity', js: 'focusOxygenOpacity', typ: 3.14 },
      { json: 'activatedOxygenOpacity', js: 'activatedOxygenOpacity', typ: 3.14 },
      { json: 'activeChannel', js: 'activeChannel', typ: r('Channel') },
      { json: 'selectedChannel', js: 'selectedChannel', typ: r('Channel') },
    ],
    false
  ),
  OxygenBackgroundClass: o(
    [
      { json: 'backgroundLight', js: 'backgroundLight', typ: '' },
      {
        json: 'backgroundLightHighlightedOrSelected',
        js: 'backgroundLightHighlightedOrSelected',
        typ: '',
      },
      { json: 'backgroundHighlight', js: 'backgroundHighlight', typ: '' },
      { json: 'backgroundContrast', js: 'backgroundContrast', typ: '' },
      { json: 'backgroundOxygenDark', js: 'backgroundOxygenDark', typ: '' },
      { json: 'default', js: 'default', typ: '' },
      { json: 'inverse', js: 'inverse', typ: '' },
      { json: 'paper', js: 'paper', typ: '' },
      { json: 'border', js: 'border', typ: '' },
      { json: 'contrastBackground', js: 'contrastBackground', typ: '' },
      { json: 'appbar', js: 'appbar', typ: '' },
      { json: 'skeleton', js: 'skeleton', typ: '' },
    ],
    false
  ),
  OxygenButtons: o(
    [
      { json: 'active', js: 'active', typ: '' },
      { json: 'hover', js: 'hover', typ: '' },
      { json: 'selected', js: 'selected', typ: '' },
      { json: 'disabled', js: 'disabled', typ: '' },
      { json: 'disabledBackground', js: 'disabledBackground', typ: '' },
    ],
    false
  ),
  OxygenCommon: o(
    [
      { json: 'black', js: 'black', typ: '' },
      { json: 'white', js: 'white', typ: r('BackgroundEnum') },
      { json: 'background', js: 'background', typ: r('BackgroundEnum') },
      { json: 'onBackground', js: 'onBackground', typ: '' },
      { json: 'backgroundChannel', js: 'backgroundChannel', typ: '' },
      { json: 'onBackgroundChannel', js: 'onBackgroundChannel', typ: '' },
    ],
    false
  ),
  OxygenError: o(
    [
      { json: 'main', js: 'main', typ: '' },
      { json: 'light', js: 'light', typ: '' },
      { json: 'dark', js: 'dark', typ: '' },
      {
        json: 'contrastOxygenText',
        js: 'contrastOxygenText',
        typ: r('BackgroundEnum'),
      },
      { json: 'mainChannel', js: 'mainChannel', typ: '' },
      { json: 'lightChannel', js: 'lightChannel', typ: '' },
      { json: 'darkChannel', js: 'darkChannel', typ: '' },
      {
        json: 'contrastOxygenTextChannel',
        js: 'contrastOxygenTextChannel',
        typ: r('Channel'),
      },
    ],
    false
  ),
  OxygenFooter: o(
    [
      { json: 'background', js: 'background', typ: '' },
      { json: 'border', js: 'border', typ: '' },
    ],
    false
  ),
  OxygenGrey: o(
    [
      { json: '50', js: '50', typ: '' },
      { json: '100', js: '100', typ: '' },
      { json: '200', js: '200', typ: '' },
      { json: '300', js: '300', typ: '' },
      { json: '400', js: '400', typ: '' },
      { json: '500', js: '500', typ: '' },
      { json: '600', js: '600', typ: '' },
      { json: '700', js: '700', typ: '' },
      { json: '800', js: '800', typ: '' },
      { json: '900', js: '900', typ: '' },
      { json: 'A100', js: 'A100', typ: '' },
      { json: 'A200', js: 'A200', typ: '' },
      { json: 'A400', js: 'A400', typ: '' },
      { json: 'A700', js: 'A700', typ: '' },
    ],
    false
  ),
  OxygenInputs: o(
    [
      { json: 'inputBackground', js: 'inputBackground', typ: '' },
      { json: 'inputOxygenBorder', js: 'inputOxygenBorder', typ: '' },
      { json: 'inputFocusedOxygenBorder', js: 'inputFocusedOxygenBorder', typ: '' },
      {
        json: 'inputFocusedUnderlineOxygenBorder',
        js: 'inputFocusedUnderlineOxygenBorder',
        typ: '',
      },
      { json: 'inputInvalidOxygenBorder', js: 'inputInvalidOxygenBorder', typ: '' },
      { json: 'inputInvalidBackground', js: 'inputInvalidBackground', typ: '' },
      { json: 'inputOxygenErrorMessage', js: 'inputOxygenErrorMessage', typ: '' },
      {
        json: 'inputPrefixSelectBackground',
        js: 'inputPrefixSelectBackground',
        typ: '',
      },
      {
        json: 'inputPrefixSelectOxygenBorder',
        js: 'inputPrefixSelectOxygenBorder',
        typ: '',
      },
      { json: 'checked', js: 'checked', typ: '' },
      { json: 'checkBoxShadow', js: 'checkBoxShadow', typ: '' },
      { json: 'checkedDisabled', js: 'checkedDisabled', typ: '' },
      { json: 'inputDisabled', js: 'inputDisabled', typ: '' },
      { json: 'selectDisabled', js: 'selectDisabled', typ: '' },
      { json: 'autocomplete', js: 'autocomplete', typ: r('OxygenAutocomplete') },
    ],
    false
  ),
  OxygenAutocomplete: o(
    [
      { json: 'resultsBackground', js: 'resultsBackground', typ: '' },
      { json: 'resultsOxygenBorder', js: 'resultsOxygenBorder', typ: '' },
      { json: 'resultActiveBackground', js: 'resultActiveBackground', typ: '' },
      { json: 'resultIcon', js: 'resultIcon', typ: '' },
      { json: 'resultIconInverse', js: 'resultIconInverse', typ: '' },
    ],
    false
  ),
  SecondaryOxygenDarkClass: o(
    [
      { json: 'main', js: 'main', typ: '' },
      { json: 'mainChannel', js: 'mainChannel', typ: '' },
    ],
    false
  ),
  OxygenLoaderDots: o(
    [
      { json: 'default', js: 'default', typ: '' },
      { json: 'light', js: 'light', typ: '' },
      { json: 'dark', js: 'dark', typ: '' },
    ],
    false
  ),
  OxygenModal: o(
    [
      { json: 'overlay', js: 'overlay', typ: '' },
      { json: 'whiteOverlay', js: 'whiteOverlay', typ: '' },
      { json: 'background', js: 'background', typ: '' },
    ],
    false
  ),
  OxygenPageIndicatorDots: o(
    [
      { json: 'background', js: 'background', typ: '' },
      { json: 'backgroundSelected', js: 'backgroundSelected', typ: '' },
      { json: 'backgroundLight', js: 'backgroundLight', typ: '' },
      { json: 'backgroundSelectedLight', js: 'backgroundSelectedLight', typ: '' },
    ],
    false
  ),
  OxygenStatus: o(
    [
      { json: 'error', js: 'error', typ: '' },
      { json: 'info', js: 'info', typ: '' },
      { json: 'warning', js: 'warning', typ: '' },
      { json: 'success', js: 'success', typ: '' },
    ],
    false
  ),
  OxygenText: o(
    [
      { json: 'primary', js: 'primary', typ: '' },
      { json: 'secondary', js: 'secondary', typ: '' },
      { json: 'primaryChannel', js: 'primaryChannel', typ: '' },
      { json: 'secondaryChannel', js: 'secondaryChannel', typ: '' },
      { json: 'contrastOxygenText', js: 'contrastOxygenText', typ: '' },
      { json: 'disabled', js: 'disabled', typ: '' },
      { json: 'textOxygenDark', js: 'textOxygenDark', typ: '' },
      { json: 'textLight', js: 'textLight', typ: '' },
      { json: 'textInput', js: 'textInput', typ: '' },
      { json: 'textOxygenLink', js: 'textOxygenLink', typ: '' },
      { json: 'textOxygenLinkActive', js: 'textOxygenLinkActive', typ: '' },
      { json: 'textOxygenLinkHover', js: 'textOxygenLinkHover', typ: '' },
      { json: 'textOxygenLinkInverse', js: 'textOxygenLinkInverse', typ: '' },
      {
        json: 'textOxygenLinkInverseHover',
        js: 'textOxygenLinkInverseHover',
        typ: '',
      },
      {
        json: 'textOxygenLinkInverseActive',
        js: 'textOxygenLinkInverseActive',
        typ: '',
      },
      { json: 'textOxygenLinkNavigation', js: 'textOxygenLinkNavigation', typ: '' },
      {
        json: 'textOxygenLinkNavigationHover',
        js: 'textOxygenLinkNavigationHover',
        typ: '',
      },
      { json: 'textMuted', js: 'textMuted', typ: '' },
      { json: 'textDisabled', js: 'textDisabled', typ: '' },
      { json: 'textMutedLarge', js: 'textMutedLarge', typ: '' },
      { json: 'textPlaceholder', js: 'textPlaceholder', typ: '' },
    ],
    false
  ),
  OxygenToggleButton: o(
    [
      { json: 'background', js: 'background', typ: '' },
      { json: 'backgroundSelected', js: 'backgroundSelected', typ: '' },
    ],
    false
  ),
  OxygenOxygenColorSchemesLight: o(
    [{ json: 'palette', js: 'palette', typ: r('OxygenPalette') }],
    false
  ),
  OxygenMixins: o([], false),
  OxygenTransitions: o(
    [
      { json: 'easing', js: 'easing', typ: r('OxygenEasing') },
      { json: 'duration', js: 'duration', typ: r('OxygenDuration') },
    ],
    false
  ),
  OxygenDuration: o(
    [
      { json: 'shortest', js: 'shortest', typ: 0 },
      { json: 'shorter', js: 'shorter', typ: 0 },
      { json: 'short', js: 'short', typ: 0 },
      { json: 'standard', js: 'standard', typ: 0 },
      { json: 'complex', js: 'complex', typ: 0 },
      { json: 'enteringScreen', js: 'enteringScreen', typ: 0 },
      { json: 'leavingScreen', js: 'leavingScreen', typ: 0 },
    ],
    false
  ),
  OxygenEasing: o(
    [
      { json: 'easeInOut', js: 'easeInOut', typ: '' },
      { json: 'easeOut', js: 'easeOut', typ: '' },
      { json: 'easeIn', js: 'easeIn', typ: '' },
      { json: 'sharp', js: 'sharp', typ: '' },
    ],
    false
  ),
  OxygenTypography: o(
    [
      { json: 'fontWeightSemiOxygenBold', js: 'fontWeightSemiOxygenBold', typ: 0 },
      { json: 'fontWeightExtraOxygenBold', js: 'fontWeightExtraOxygenBold', typ: 0 },
      { json: 'fontWeightLight', js: 'fontWeightLight', typ: '' },
      {
        json: 'fontWeightRegular',
        js: 'fontWeightRegular',
        typ: r('FontWeightRegular'),
      },
      { json: 'fontWeightMedium', js: 'fontWeightMedium', typ: '' },
      { json: 'fontWeightOxygenBold', js: 'fontWeightOxygenBold', typ: '' },
      { json: 'fontSize', js: 'fontSize', typ: 0 },
      { json: 'fontFamily', js: 'fontFamily', typ: '' },
      { json: 'title1', js: 'title1', typ: r('OxygenLabel3') },
      { json: 'title2', js: 'title2', typ: r('OxygenLabel3') },
      { json: 'title3', js: 'title3', typ: r('OxygenLabel3') },
      { json: 'textLarge', js: 'textLarge', typ: r('OxygenFormElementLargeClass') },
      {
        json: 'textRegular',
        js: 'textRegular',
        typ: r('OxygenFormElementLargeClass'),
      },
      { json: 'textSmall', js: 'textSmall', typ: r('OxygenFormElementLargeClass') },
      { json: 'textMicro', js: 'textMicro', typ: r('OxygenFormElementLargeClass') },
      {
        json: 'textLargeTall',
        js: 'textLargeTall',
        typ: r('OxygenFormElementLargeClass'),
      },
      {
        json: 'textRegularTall',
        js: 'textRegularTall',
        typ: r('OxygenFormElementLargeClass'),
      },
      {
        json: 'textMicroWide',
        js: 'textMicroWide',
        typ: r('OxygenOxygenTextMicroWide'),
      },
      { json: 'formLabel', js: 'formLabel', typ: r('OxygenFormElementLargeClass') },
      {
        json: 'formOxygenErrorMessage',
        js: 'formOxygenErrorMessage',
        typ: r('OxygenFormElementLargeClass'),
      },
      {
        json: 'formOxygenErrorMessageSmall',
        js: 'formOxygenErrorMessageSmall',
        typ: r('OxygenFormElementLargeClass'),
      },
      {
        json: 'formElementLarge',
        js: 'formElementLarge',
        typ: r('OxygenFormElementLargeClass'),
      },
      {
        json: 'formElement',
        js: 'formElement',
        typ: r('OxygenFormElementLargeClass'),
      },
      {
        json: 'formElementSmall',
        js: 'formElementSmall',
        typ: r('OxygenFormElementLargeClass'),
      },
      { json: 'label1', js: 'label1', typ: r('OxygenFormElementLargeClass') },
      { json: 'label2', js: 'label2', typ: r('OxygenFormElementLargeClass') },
      { json: 'label3', js: 'label3', typ: r('OxygenLabel3') },
      { json: 'label4', js: 'label4', typ: r('OxygenFormElementLargeClass') },
      { json: 'link', js: 'link', typ: r('OxygenLink') },
      {
        json: 'navigation',
        js: 'navigation',
        typ: r('OxygenFormElementLargeClass'),
      },
      { json: 'small', js: 'small', typ: r('OxygenFormElementLargeClass') },
      {
        json: 'textReduced',
        js: 'textReduced',
        typ: r('OxygenFormElementLargeClass'),
      },
      {
        json: 'textLargeShort',
        js: 'textLargeShort',
        typ: r('OxygenFormElementLargeClass'),
      },
      {
        json: 'textRegularShort',
        js: 'textRegularShort',
        typ: r('OxygenFormElementLargeClass'),
      },
      { json: 'formInput', js: 'formInput', typ: r('OxygenFormElementLargeClass') },
      { json: 'button', js: 'button', typ: r('OxygenFormElementLargeClass') },
      {
        json: 'buttonSmall',
        js: 'buttonSmall',
        typ: r('OxygenFormElementLargeClass'),
      },
      {
        json: 'buttonLarge',
        js: 'buttonLarge',
        typ: r('OxygenFormElementLargeClass'),
      },
      { json: 'light', js: 'light', typ: r('OxygenBold') },
      { json: 'book', js: 'book', typ: r('OxygenBold') },
      { json: 'bold', js: 'bold', typ: r('OxygenBold') },
    ],
    false
  ),
  OxygenBold: o([{ json: 'fontWeight', js: 'fontWeight', typ: '' }], false),
  OxygenFormElementLargeClass: o(
    [
      { json: 'fontSize', js: 'fontSize', typ: r('FontSize') },
      { json: 'lineHeight', js: 'lineHeight', typ: '' },
      { json: 'letterSpacing', js: 'letterSpacing', typ: r('FontWeightRegular') },
      { json: 'fontFamily', js: 'fontFamily', typ: '' },
      { json: 'color', js: 'color', typ: r('Color') },
    ],
    false
  ),
  OxygenLabel3: o(
    [
      { json: 'fontSize', js: 'fontSize', typ: '' },
      { json: 'lineHeight', js: 'lineHeight', typ: '' },
      { json: 'letterSpacing', js: 'letterSpacing', typ: r('FontWeightRegular') },
      { json: 'fontFamily', js: 'fontFamily', typ: '' },
      { json: 'color', js: 'color', typ: r('Color') },
      { json: 'paddingTop', js: 'paddingTop', typ: '' },
      { json: 'paddingBottom', js: 'paddingBottom', typ: '' },
      {
        json: '@media (max-width: 743px)',
        js: '@media (max-width: 743px)',
        typ: u(undefined, r('OxygenMediaMaxWidth743Px')),
      },
    ],
    false
  ),
  OxygenMediaMaxWidth743Px: o(
    [
      { json: 'fontSize', js: 'fontSize', typ: '' },
      { json: 'letterSpacing', js: 'letterSpacing', typ: r('FontWeightRegular') },
      { json: 'lineHeight', js: 'lineHeight', typ: '' },
    ],
    false
  ),
  OxygenLink: o(
    [
      { json: 'textDecoration', js: 'textDecoration', typ: '' },
      { json: 'textDecorationHover', js: 'textDecorationHover', typ: '' },
      { json: 'textDecorationFocus', js: 'textDecorationFocus', typ: '' },
      { json: 'textDecorationDisabled', js: 'textDecorationDisabled', typ: '' },
      { json: 'textDecorationMono', js: 'textDecorationMono', typ: '' },
      { json: 'textDecorationUnderline', js: 'textDecorationUnderline', typ: '' },
    ],
    false
  ),
  OxygenOxygenTextMicroWide: o(
    [
      { json: 'fontSize', js: 'fontSize', typ: r('FontSize') },
      { json: 'lineHeight', js: 'lineHeight', typ: r('FontSize') },
      { json: 'letterSpacing', js: 'letterSpacing', typ: 0 },
      { json: 'fontFamily', js: 'fontFamily', typ: '' },
      { json: 'color', js: 'color', typ: r('Color') },
    ],
    false
  ),
  OxygenZIndex: o(
    [
      { json: 'mobileStepper', js: 'mobileStepper', typ: 0 },
      { json: 'fab', js: 'fab', typ: 0 },
      { json: 'speedDial', js: 'speedDial', typ: 0 },
      { json: 'appBar', js: 'appBar', typ: 0 },
      { json: 'drawer', js: 'drawer', typ: 0 },
      { json: 'modal', js: 'modal', typ: 0 },
      { json: 'snackbar', js: 'snackbar', typ: 0 },
      { json: 'tooltip', js: 'tooltip', typ: 0 },
    ],
    false
  ),
  FontSize: ['12px', '14px', '16px', '18px'],
  Channel: ['0 0 0', '255 255 255'],
  BackgroundEnum: ['#fff', '#000000'],
  Color: ['#484848'],
  FontWeightRegular: ['normal'],
}
