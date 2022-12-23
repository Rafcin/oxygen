export interface ThemeType {
  baseline: Baseline
  breakpoints: Breakpoints
  border: Border
  direction: string
  shape: Shape
  mixins: Components
  shadows: string[]
  typography: Typography
  transitions: Transitions
  zIndex: ZIndex
  components: Components
  prefix: string
  opacity: Opacity
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  overlays: any[]
  palette: Palette
  colorSchemes: ColorSchemes
}

export interface Baseline {
  "#root": Root
  html: HTML
  "*, *:before, *:after": BeforeAfter
  body: Body
  "[lang='ko'] body": LangKoBody
  h1: H1
  h2: H1
  h3: H1
  h4: H1
  h5: H1
  h6: H1
  "h-margin": HMargin
  "h:first-of-type": HFirstOfType
  'button, html input[type="button"], input[type="reset"], input[type="submit"]': ButtonHTMLInputTypeButtonInputTypeResetInputTypeSubmit
  "input, textarea, select, button, a": InputTextareaSelectButtonA
  "a, a:hover, a:focus": AAHoverAFocus
  'html input[type="button"]': HTMLInputTypeButton
  'input[type="reset"]': HTMLInputTypeButton
  'input[type="submit"]': HTMLInputTypeButton
  '[tabindex="-1"]:focus': Tabindex1Focus
  ".screen-reader-only": ScreenReaderOnly
  ".screen-reader-only-focusable-actions": ScreenReaderOnlyFocusableActions
  ".skip-to-content:focus": SkipToContentFocus
  ".only-light-mode": FilepondCredits
  ".only-dark-mode": FilepondCredits
  ".mode-dark .only-light-mode": FilepondCredits
  ".mode-dark .only-dark-mode": FilepondCredits
  ".slider:not([data-slider-disabled])": SliderNotDataSliderDisabled
  ".slider:not([data-slider-disabled]) .slider__slide": SliderNotDataSliderDisabledSliderSlide
  ".slider:not([data-slider-disabled])[data-slider-reverse]": SliderNotDataSliderDisabledDataSliderReverse
  ".slider:not([data-slider-disabled])[data-slider-v]": SliderNotDataSliderDisabledDataSliderV
  "[data-slider-moves] *": DataSliderMoves
  "@media (min-width: 744px)": MediaMinWidth744Px
  ".filepond--root": FilepondRoot
  ".filepond--panel-root": FilepondPanelRoot
  ".filepond--credits": FilepondCredits
  "[data-rsbs-overlay]": DataRsbsOverlay
  ".tox-tinymce": ToxTinymce
  ".MuiBottomNavigationAction-label": MuiBottomNavigationActionLabel
}

export interface Root {
  overflow: string
}

export interface BeforeAfter {
  WebkitBoxSizing: string
  MozBoxSizing: string
  boxSizing: string
  MsFlex: string
}

export interface MuiBottomNavigationActionLabel {
  opacity: string
}

export interface FilepondCredits {
  display: string
}

export interface FilepondPanelRoot {
  backgroundColor: string
}

export interface FilepondRoot {
  color: string
  borderRadius: string
  boxShadow: string
}

export interface ScreenReaderOnly {
  border: number
  clip: string
  height: string
  margin: string
  overflow: string
  padding: number
  position: string
  width: string
}

export interface ScreenReaderOnlyFocusableActions {
  clip: string
  height: string
  margin: number
  overflow: string
  position: string
  width: string
}

export interface SkipToContentFocus {
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
  The12Px = "12px",
  The14Px = "14px",
  The16Px = "16px",
  The18Px = "18px",
}

export interface SliderNotDataSliderDisabled {
  alignContent: string
  display: string
  overflow: string
  position: string
  userSelect: string
  webkitTouchCallout: string
  khtmlUserSelect: string
  msTouchAction: string
  touchAction: string
  webkitTapHighlightColor: string
  width: string
}

export interface SliderNotDataSliderDisabledSliderSlide {
  position: string
  overflow: string
  width: string
  minHeight: string
}

export interface SliderNotDataSliderDisabledDataSliderReverse {
  flexDirection: string
}

export interface SliderNotDataSliderDisabledDataSliderV {
  flexWrap: string
}

export interface ToxTinymce {
  color: string
  backgroundColor: string
  borderRadius: string
  borderColor: string
}

export interface MediaMinWidth744Px {
  ".react-modal-drawer-container": ReactModalDrawerContainer
  "[data-rsbs-overlay], [data-rsbs-root]:after": ReactModalDrawerContainer
}

export interface ReactModalDrawerContainer {
  display: string
  visibility: string
}

export interface DataRsbsOverlay {
  borderTopLeftRadius: string
  borderTopRightRadius: string
}

export interface DataSliderMoves {
  pointerEvents: string
}

export interface LangKoBody {
  wordBreak: string
}

export interface Tabindex1Focus {
  outline: number
}

export interface AAHoverAFocus {
  color: string
  textDecoration: string
}

export interface Body {
  fontFamily: string
  margin: string
  lineBreak: string
  padding: string
  paddingRight: string
  overflow: string
  WebkitFontSmoothing: string
  MozOsxFontSmoothing: string
}

export interface ButtonHTMLInputTypeButtonInputTypeResetInputTypeSubmit {
  webkitAppearance: string
  cursor: string
}

export interface HMargin {
  marginTop: string
  marginBottom: string
}

export interface H1 {
  fontFamily: string
}

export interface HFirstOfType {
  marginTop: number
}

export interface HTML {
  MsTextSizeAdjust: string
  MozTextSizeAdjust: string
  WebkitTextSizeAdjust: string
}

export interface HTMLInputTypeButton {
  WebkitAppearance: string
  cursor: string
}

export interface InputTextareaSelectButtonA {
  fontFamily: string
  fontSize: string
}

export interface Border {
  default: number
  button: CheckBoxClass
  buttonSmall: CheckBoxClass
  buttonLarge: CheckBoxClass
  buttonRound: ButtonRound
  formElement: CheckBoxClass
  statusLabel: CheckBoxClass
  countBadge: CheckBoxClass
  pager: CheckBoxClass
  profilePhoto: ProfilePhoto
  progressBar: ProgressBar
  rule: Rule
  tab: Rule
  dualButtonBar: DualButtonBar
  floatingButton: Shape
  headerButton: Shape
  checkBox: CheckBoxClass
  switch: CheckBoxClass
  radioButton: ProfilePhoto
}

export interface CheckBoxClass {
  borderRadius: number
  borderWidth: number
}

export interface ButtonRound {
  borderRadius: string
}

export interface DualButtonBar {
  borderRadius: number
  dividerWidth: number
}

export interface Shape {
  borderRadius: number
}

export interface ProfilePhoto {
  borderWidth: number
  borderRadius: string
}

export interface ProgressBar {
  borderRadiusDefault: number
  borderRadiusRound: number
  borderRadiusThick: number
}

export interface Rule {
  borderWidth: number
}

export interface Breakpoints {
  keys: string[]
  values: Values
}

export interface Values {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export interface ColorSchemes {
  light: ColorSchemesLight
  dark: Dark
}

export interface Dark {
  palette: Palette
  opacity: Opacity
  overlays: Array<null | string>
}

export interface Opacity {
  inputPlaceholder: number
  inputTouchBottomLine: number
  switchTrackDisabled: number
  switchTrack: number
}

export interface Palette {
  mode: string
  primary: Error
  secondary: Error
  tertiary: Error
  secondaryLight: SecondaryDarkClass
  secondaryDark: SecondaryDarkClass
  light: SecondaryDarkClass
  text: Text
  common: Common
  error: Error
  warning: Error
  info: Error
  success: Error
  status: Status
  grey: Grey
  buttons: Buttons
  inputs: Inputs
  background: BackgroundClass
  divider: string
  placeholder: string
  cursor: string
  imageBackground: string
  modal: Modal
  toggleButton: ToggleButton
  pageIndicatorDots: PageIndicatorDots
  loaderDots: LoaderDots
  navigation: StepConnector
  focus: string
  clear: string
  contrastThreshold: number
  tonalOffset: number
  action: Action
  AppBar: AppBar
  Avatar: Avatar
  Chip: Chip
  FilledInput: FilledInput
  LinearProgress: LinearProgress
  Skeleton: Skeleton
  Slider: Slider
  SnackbarContent: Skeleton
  SpeedDialAction: SpeedDialAction
  StepConnector: StepConnector
  StepContent: StepConnector
  Switch: Switch
  TableCell: StepConnector
  Tooltip: Skeleton
  dividerChannel: Channel
  colorScheme: string
}

export interface AppBar {
  defaultBg: string
  background: string
}

export interface Avatar {
  defaultBg: string
}

export interface Chip {
  defaultBorder: string
  defaultAvatarColor: string
  defaultIconColor: string
}

export interface FilledInput {
  bg: string
  hoverBg: string
  disabledBg: string
}

export interface LinearProgress {
  primaryBg: string
  secondaryBg: string
  errorBg: string
  infoBg: string
  successBg: string
  warningBg: string
}

export interface Skeleton {
  bg: string
}

export interface Slider {
  primaryTrack: string
  secondaryTrack: string
  errorTrack: string
  infoTrack: string
  successTrack: string
  warningTrack: string
}

export interface SpeedDialAction {
  fabHoverBg: string
}

export interface StepConnector {
  border: string
}

export interface Switch {
  defaultColor: string
  defaultDisabledColor: string
  primaryDisabledColor: string
  secondaryDisabledColor: string
  errorDisabledColor: string
  infoDisabledColor: string
  successDisabledColor: string
  warningDisabledColor: string
}

export interface Action {
  active: string
  hover: string
  hoverOpacity: number
  selected: string
  selectedOpacity: number
  disabled: string
  disabledBackground: string
  disabledOpacity: number
  focus: string
  focusOpacity: number
  activatedOpacity: number
  activeChannel: Channel
  selectedChannel: Channel
}

export enum Channel {
  The000 = "0 0 0",
  The255255255 = "255 255 255",
}

export interface BackgroundClass {
  backgroundLight: string
  backgroundLightHighlightedOrSelected: string
  backgroundHighlight: string
  backgroundContrast: string
  backgroundDark: string
  default: string
  inverse: string
  paper: string
  border: string
  contrastBackground: string
  appbar: string
  skeleton: string
}

export interface Buttons {
  active: string
  hover: string
  selected: string
  disabled: string
  disabledBackground: string
}

export interface Common {
  black: string
  white: BackgroundEnum
  background: BackgroundEnum
  onBackground: string
  backgroundChannel: string
  onBackgroundChannel: string
}

export enum BackgroundEnum {
  Fff = "#fff",
  The000000 = "#000000",
}

export interface Error {
  main: string
  light: string
  dark: string
  contrastText: BackgroundEnum
  mainChannel: string
  lightChannel: string
  darkChannel: string
  contrastTextChannel: Channel
}

export interface Grey {
  "50": string
  "100": string
  "200": string
  "300": string
  "400": string
  "500": string
  "600": string
  "700": string
  "800": string
  "900": string
  A100: string
  A200: string
  A400: string
  A700: string
}

export interface Inputs {
  inputBackground: string
  inputBorder: string
  inputFocusedBorder: string
  inputFocusedUnderlineBorder: string
  inputInvalidBorder: string
  inputInvalidBackground: string
  inputErrorMessage: string
  inputPrefixSelectBackground: string
  inputPrefixSelectBorder: string
  checked: string
  checkBoxShadow: string
  checkedDisabled: string
  inputDisabled: string
  selectDisabled: string
  autocomplete: Autocomplete
}

export interface Autocomplete {
  resultsBackground: string
  resultsBorder: string
  resultActiveBackground: string
  resultIcon: string
  resultIconInverse: string
}

export interface SecondaryDarkClass {
  main: string
  mainChannel: string
}

export interface LoaderDots {
  default: string
  light: string
  dark: string
}

export interface Modal {
  overlay: string
  whiteOverlay: string
  background: string
}

export interface PageIndicatorDots {
  background: string
  backgroundSelected: string
  backgroundLight: string
  backgroundSelectedLight: string
}

export interface Status {
  error: string
  info: string
  warning: string
  success: string
}

export interface Text {
  primary: string
  secondary: string
  primaryChannel: string
  secondaryChannel: string
  contrastText: string
  disabled: string
  textDark: string
  textLight: string
  textInput: string
  textLink: string
  textLinkActive: string
  textLinkHover: string
  textLinkInverse: string
  textLinkInverseHover: string
  textLinkInverseActive: string
  textLinkNavigation: string
  textLinkNavigationHover: string
  textMuted: string
  textDisabled: string
  textMutedLarge: string
  textPlaceholder: string
}

export interface ToggleButton {
  background: string
  backgroundSelected: string
}

export interface ColorSchemesLight {
  palette: Palette
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Components {}

export interface Transitions {
  easing: Easing
  duration: Duration
}

export interface Duration {
  shortest: number
  shorter: number
  short: number
  standard: number
  complex: number
  enteringScreen: number
  leavingScreen: number
}

export interface Easing {
  easeInOut: string
  easeOut: string
  easeIn: string
  sharp: string
}

export interface Typography {
  fontWeightSemiBold: number
  fontWeightExtraBold: number
  fontWeightLight: string
  fontWeightRegular: FontWeightRegular
  fontWeightMedium: string
  fontWeightBold: string
  fontSize: number
  fontFamily: string
  title1: Label3
  title2: Label3
  title3: Label3
  textLarge: FormElementLargeClass
  textRegular: FormElementLargeClass
  textSmall: FormElementLargeClass
  textMicro: FormElementLargeClass
  textLargeTall: FormElementLargeClass
  textRegularTall: FormElementLargeClass
  textMicroWide: TextMicroWide
  formLabel: FormElementLargeClass
  formErrorMessage: FormElementLargeClass
  formErrorMessageSmall: FormElementLargeClass
  formElementLarge: FormElementLargeClass
  formElement: FormElementLargeClass
  formElementSmall: FormElementLargeClass
  label1: FormElementLargeClass
  label2: FormElementLargeClass
  label3: Label3
  label4: FormElementLargeClass
  link: Link
  navigation: FormElementLargeClass
  small: FormElementLargeClass
  textReduced: FormElementLargeClass
  textLargeShort: FormElementLargeClass
  textRegularShort: FormElementLargeClass
  formInput: FormElementLargeClass
  button: FormElementLargeClass
  buttonSmall: FormElementLargeClass
  buttonLarge: FormElementLargeClass
  light: Bold
  book: Bold
  bold: Bold
}

export interface Bold {
  fontWeight: string
}

export interface FormElementLargeClass {
  fontSize: FontSize
  lineHeight: string
  letterSpacing: FontWeightRegular
  fontFamily: string
  color: Color
}

export enum Color {
  The484848 = "#484848",
}

export enum FontWeightRegular {
  Normal = "normal",
}

export interface Label3 {
  fontSize: string
  lineHeight: string
  letterSpacing: FontWeightRegular
  fontFamily: string
  color: Color
  paddingTop: string
  paddingBottom: string
  "@media (max-width: 743px)"?: MediaMaxWidth743Px
}

export interface MediaMaxWidth743Px {
  fontSize: string
  letterSpacing: FontWeightRegular
  lineHeight: string
}

export interface Link {
  textDecoration: string
  textDecorationHover: string
  textDecorationFocus: string
  textDecorationDisabled: string
  textDecorationMono: string
  textDecorationUnderline: string
}

export interface TextMicroWide {
  fontSize: FontSize
  lineHeight: FontSize
  letterSpacing: number
  fontFamily: string
  color: Color
}

export interface ZIndex {
  mobileStepper: number
  fab: number
  speedDial: number
  appBar: number
  drawer: number
  modal: number
  snackbar: number
  tooltip: number
}
