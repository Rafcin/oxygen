export const theme = {
  "baseline": {
    "#root": {
      "overflow": "auto"
    },
    "html": {
      "MsTextSizeAdjust": "100%",
      "MozTextSizeAdjust": "100%",
      "WebkitTextSizeAdjust": "100%"
    },
    "*, *:before, *:after": {
      "WebkitBoxSizing": "border-box",
      "MozBoxSizing": "border-box",
      "boxSizing": "border-box",
      "MsFlex": "0 1 auto"
    },
    "body": {
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "margin": "0",
      "lineBreak": "strict",
      "padding": "0",
      "paddingRight": "0px !important",
      "overflow": "auto",
      "WebkitFontSmoothing": "antialiased",
      "MozOsxFontSmoothing": "grayscale"
    },
    "[lang='ko'] body": {
      "wordBreak": "keep-all"
    },
    "h1": {
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif"
    },
    "h2": {
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif"
    },
    "h3": {
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif"
    },
    "h4": {
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif"
    },
    "h5": {
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif"
    },
    "h6": {
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif"
    },
    "h-margin": {
      "marginTop": "25px",
      "marginBottom": " 15px"
    },
    "h:first-of-type": {
      "marginTop": 0
    },
    "button, html input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"]": {
      "webkitAppearance": "button",
      "cursor": "pointer"
    },
    "input, textarea, select, button, a": {
      "fontFamily": "inherit",
      "fontSize": "100%"
    },
    "a, a:hover, a:focus": {
      "color": "inherit",
      "textDecoration": "none"
    },
    "html input[type=\"button\"]": {
      "WebkitAppearance": "button",
      "cursor": "pointer"
    },
    "input[type=\"reset\"]": {
      "WebkitAppearance": "button",
      "cursor": "pointer"
    },
    "input[type=\"submit\"]": {
      "WebkitAppearance": "button",
      "cursor": "pointer"
    },
    "[tabindex=\"-1\"]:focus": {
      "outline": 0
    },
    ".screen-reader-only": {
      "border": 0,
      "clip": "rect(0, 0, 0, 0)",
      "height": "1px",
      "margin": "-1px",
      "overflow": "hidden",
      "padding": 0,
      "position": "absolute",
      "width": "1px"
    },
    ".screen-reader-only-focusable-actions": {
      "clip": "auto",
      "height": "auto",
      "margin": 0,
      "overflow": "visible",
      "position": "static",
      "width": "auto"
    },
    ".skip-to-content:focus": {
      "backgroundColor": "white",
      "fontSize": "18px",
      "padding": "0 24px",
      "position": "absolute",
      "left": "3px",
      "lineHeight": "64px",
      "top": "3px",
      "zIndex": 10000
    },
    ".only-light-mode": {
      "display": "block"
    },
    ".only-dark-mode": {
      "display": "none"
    },
    ".mode-dark .only-light-mode": {
      "display": "none"
    },
    ".mode-dark .only-dark-mode": {
      "display": "block"
    },
    ".slider:not([data-slider-disabled])": {
      "alignContent": "flex-start",
      "display": "flex",
      "overflow": "hidden",
      "position": "relative",
      "userSelect": "none",
      "webkitTouchCallout": "none",
      "khtmlUserSelect": "none",
      "msTouchAction": "pan-y",
      "touchAction": "pan-y",
      "webkitTapHighlightColor": "transparent",
      "width": "100%"
    },
    ".slider:not([data-slider-disabled]) .slider__slide": {
      "position": "relative",
      "overflow": "hidden",
      "width": "100%",
      "minHeight": "100%"
    },
    ".slider:not([data-slider-disabled])[data-slider-reverse]": {
      "flexDirection": "row-reverse"
    },
    ".slider:not([data-slider-disabled])[data-slider-v]": {
      "flexWrap": "wrap"
    },
    "[data-slider-moves] *": {
      "pointerEvents": "none"
    },
    "@media (min-width: 744px)": {
      ".react-modal-drawer-container": {
        "display": "none",
        "visibility": "hidden"
      },
      "[data-rsbs-overlay], [data-rsbs-root]:after": {
        "display": "none",
        "visibility": "hidden"
      }
    },
    ".filepond--root": {
      "color": "#343434",
      "borderRadius": "8px",
      "boxShadow": "rgb(176 176 176) 0px 0px 0px 1px inset"
    },
    ".filepond--panel-root": {
      "backgroundColor": "transparent"
    },
    ".filepond--credits": {
      "display": "none"
    },
    "[data-rsbs-overlay]": {
      "borderTopLeftRadius": "24px",
      "borderTopRightRadius": "24px"
    },
    ".tox-tinymce": {
      "color": "rgb(34, 34, 34)",
      "backgroundColor": "rgb(255, 255, 255)",
      "borderRadius": "8px",
      "borderColor": "rgb(176 176 176)"
    },
    ".MuiBottomNavigationAction-label": {
      "opacity": "1"
    }
  },
  "breakpoints": {
    "keys": ["xs", "sm", "md", "lg", "xl"],
    "values": {
      "xs": 0,
      "sm": 744,
      "md": 950,
      "lg": 1128,
      "xl": 1440
    }
  },
  "spacing": 8,
  "page": {
    "shell": {
      "max": {
        "content": {
          "width": "2520px"
        }
      }
    },
    "container": {
      "padding": {
        "inline": "80px"
      }
    }
  },
  "border": {
    "default": 12,
    "button": {
      "borderRadius": 4,
      "borderWidth": 2
    },
    "buttonSmall": {
      "borderRadius": 4,
      "borderWidth": 1
    },
    "buttonLarge": {
      "borderRadius": 4,
      "borderWidth": 2
    },
    "buttonRound": {
      "borderRadius": "50%"
    },
    "formElement": {
      "borderRadius": 4,
      "borderWidth": 1
    },
    "statusLabel": {
      "borderWidth": 1,
      "borderRadius": 2
    },
    "countBadge": {
      "borderRadius": 10,
      "borderWidth": 1
    },
    "pager": {
      "borderRadius": 4,
      "borderWidth": 1
    },
    "profilePhoto": {
      "borderWidth": 2,
      "borderRadius": "50%"
    },
    "progressBar": {
      "borderRadiusDefault": 0,
      "borderRadiusRound": 100,
      "borderRadiusThick": 2
    },
    "rule": {
      "borderWidth": 1
    },
    "tab": {
      "borderWidth": 2
    },
    "dualButtonBar": {
      "borderRadius": 80,
      "dividerWidth": 1
    },
    "floatingButton": {
      "borderRadius": 80
    },
    "headerButton": {
      "borderRadius": 24
    },
    "checkBox": {
      "borderWidth": 1,
      "borderRadius": 2
    },
    "switch": {
      "borderWidth": 1,
      "borderRadius": 32
    },
    "radioButton": {
      "borderWidth": 1,
      "borderRadius": "50%"
    }
  },
  "direction": "ltr",
  "shape": {
    "borderRadius": 12
  },
  "mixins": {},
  "shadows": [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
  ],
  "typography": {
    "fontWeightSemiBold": 600,
    "fontWeightExtraBold": 900,
    "fontWeightLight": "100",
    "fontWeightRegular": "normal",
    "fontWeightMedium": "600",
    "fontWeightBold": "800",
    "fontSize": 14,
    "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
    "title1": {
      "fontSize": "46px",
      "lineHeight": "52px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848",
      "paddingTop": "8px",
      "paddingBottom": "8px",
      "@media (max-width: 743px)": {
        "fontSize": "38px",
        "letterSpacing": "normal",
        "lineHeight": "44px"
      }
    },
    "title2": {
      "fontSize": "32px",
      "lineHeight": "36px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848",
      "paddingTop": "6px",
      "paddingBottom": "6px"
    },
    "title3": {
      "fontSize": "24px",
      "lineHeight": "30px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848",
      "paddingTop": "2px",
      "paddingBottom": "2px"
    },
    "textLarge": {
      "fontSize": "18px",
      "lineHeight": "26px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "textRegular": {
      "fontSize": "16px",
      "lineHeight": "22px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "textSmall": {
      "fontSize": "14px",
      "lineHeight": "18px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "textMicro": {
      "fontSize": "12px",
      "lineHeight": "16px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "textLargeTall": {
      "fontSize": "18px",
      "lineHeight": "30px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "textRegularTall": {
      "fontSize": "16px",
      "lineHeight": "28px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "textMicroWide": {
      "fontSize": "12px",
      "lineHeight": "16px",
      "letterSpacing": 1,
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "formLabel": {
      "fontSize": "16px",
      "lineHeight": "22px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "formErrorMessage": {
      "fontSize": "14px",
      "lineHeight": "18px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "formErrorMessageSmall": {
      "fontSize": "12px",
      "lineHeight": "16px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "formElementLarge": {
      "fontSize": "18px",
      "lineHeight": "27px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "formElement": {
      "fontSize": "16px",
      "lineHeight": "24px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "formElementSmall": {
      "fontSize": "14px",
      "lineHeight": "22px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "label1": {
      "fontSize": "16px",
      "lineHeight": "22px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "label2": {
      "fontSize": "14px",
      "lineHeight": "18px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "label3": {
      "fontSize": "12px",
      "lineHeight": "16px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848",
      "paddingTop": "3px",
      "paddingBottom": "3px"
    },
    "label4": {
      "fontSize": "12px",
      "lineHeight": "16px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "link": {
      "textDecoration": "none",
      "textDecorationHover": "underline",
      "textDecorationFocus": "underline",
      "textDecorationDisabled": "none",
      "textDecorationMono": "underline",
      "textDecorationUnderline": "underline"
    },
    "navigation": {
      "fontSize": "14px",
      "lineHeight": "18px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "small": {
      "fontSize": "14px",
      "lineHeight": "18px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "textReduced": {
      "fontSize": "16px",
      "lineHeight": "22px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "textLargeShort": {
      "fontSize": "18px",
      "lineHeight": "26px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "textRegularShort": {
      "fontSize": "16px",
      "lineHeight": "22px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "formInput": {
      "fontSize": "16px",
      "lineHeight": "24px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "button": {
      "fontSize": "16px",
      "lineHeight": "24px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "buttonSmall": {
      "fontSize": "14px",
      "lineHeight": "22px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "buttonLarge": {
      "fontSize": "18px",
      "lineHeight": "27px",
      "letterSpacing": "normal",
      "fontFamily": "Belle,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
      "color": "#484848"
    },
    "light": {
      "fontWeight": "normal"
    },
    "book": {
      "fontWeight": "600"
    },
    "bold": {
      "fontWeight": "800"
    }
  },
  "transitions": {
    "easing": {
      "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
      "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
      "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
      "sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
    },
    "duration": {
      "shortest": 150,
      "shorter": 200,
      "short": 250,
      "standard": 300,
      "complex": 375,
      "enteringScreen": 225,
      "leavingScreen": 195
    }
  },
  "zIndex": {
    "mobileStepper": 1000,
    "fab": 1050,
    "speedDial": 1050,
    "appBar": 1100,
    "drawer": 1200,
    "modal": 1300,
    "snackbar": 1400,
    "tooltip": 1500
  },
  "opacity": {
    "inputPlaceholder": 0.5,
    "inputTouchBottomLine": 0.7,
    "switchTrackDisabled": 0.2,
    "switchTrack": 0.3
  },
  "overlays": [
    null,
    "linear-gradient(rgba(255 255 255 / 0.05), rgba(255 255 255 / 0.05))",
    "linear-gradient(rgba(255 255 255 / 0.07), rgba(255 255 255 / 0.07))",
    "linear-gradient(rgba(255 255 255 / 0.08), rgba(255 255 255 / 0.08))",
    "linear-gradient(rgba(255 255 255 / 0.09), rgba(255 255 255 / 0.09))",
    "linear-gradient(rgba(255 255 255 / 0.10), rgba(255 255 255 / 0.10))",
    "linear-gradient(rgba(255 255 255 / 0.11), rgba(255 255 255 / 0.11))",
    "linear-gradient(rgba(255 255 255 / 0.11), rgba(255 255 255 / 0.11))",
    "linear-gradient(rgba(255 255 255 / 0.12), rgba(255 255 255 / 0.12))",
    "linear-gradient(rgba(255 255 255 / 0.12), rgba(255 255 255 / 0.12))",
    "linear-gradient(rgba(255 255 255 / 0.13), rgba(255 255 255 / 0.13))",
    "linear-gradient(rgba(255 255 255 / 0.13), rgba(255 255 255 / 0.13))",
    "linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14))",
    "linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14))",
    "linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14))",
    "linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14))",
    "linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15))",
    "linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15))",
    "linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15))",
    "linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15))",
    "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))",
    "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))",
    "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))",
    "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))",
    "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))"
  ],
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#343434",
      "light": "#d5d6d6",
      "dark": "#3d3d3d",
      "contrastText": "#fff",
      "mainChannel": "52 52 52",
      "lightChannel": "213 214 214",
      "darkChannel": "61 61 61",
      "contrastTextChannel": "255 255 255"
    },
    "secondary": {
      "main": "#222222",
      "light": "#d5d6d6",
      "dark": "#3d3d3d",
      "contrastText": "#fff",
      "mainChannel": "34 34 34",
      "lightChannel": "213 214 214",
      "darkChannel": "61 61 61",
      "contrastTextChannel": "255 255 255"
    },
    "tertiary": {
      "main": "#343434",
      "light": "#d5d6d6",
      "dark": "#3d3d3d",
      "contrastText": "#fff",
      "mainChannel": "52 52 52",
      "lightChannel": "213 214 214",
      "darkChannel": "61 61 61",
      "contrastTextChannel": "255 255 255"
    },
    "secondaryLight": {
      "main": "#222222",
      "mainChannel": "34 34 34"
    },
    "secondaryDark": {
      "main": "#222222",
      "mainChannel": "34 34 34"
    },
    "light": {
      "main": "#343434",
      "mainChannel": "52 52 52"
    },
    "text": {
      "primary": "#343434",
      "secondary": "#222222",
      "primaryChannel": "52 52 52",
      "secondaryChannel": "34 34 34",
      "contrastText": "#fff",
      "disabled": "#DDDDDD",
      "textDark": "#484848",
      "textLight": "#ffffff",
      "textInput": "#222222",
      "textLink": "#222222",
      "textLinkActive": "#343434",
      "textLinkHover": "#222222",
      "textLinkInverse": "#ffffff",
      "textLinkInverseHover": "#ffffff",
      "textLinkInverseActive": "#dadada",
      "textLinkNavigation": "#484848",
      "textLinkNavigationHover": "#484848",
      "textMuted": "#767676",
      "textDisabled": "#EBEBEB",
      "textMutedLarge": "#848484",
      "textPlaceholder": "#EBEBEB"
    },
    "common": {
      "black": "#000",
      "white": "#fff",
      "background": "#fff",
      "onBackground": "#000",
      "backgroundChannel": "34 34 34",
      "onBackgroundChannel": "34 34 34"
    },
    "error": {
      "main": "#d73d48",
      "light": "#e2737b",
      "dark": "#d63d47",
      "contrastText": "#fff",
      "mainChannel": "215 61 72",
      "lightChannel": "226 115 123",
      "darkChannel": "214 61 71",
      "contrastTextChannel": "255 255 255"
    },
    "warning": {
      "main": "#FFB400",
      "light": "#fed05e",
      "dark": "#eda800",
      "contrastText": "#fff",
      "mainChannel": "255 180 0",
      "lightChannel": "254 208 94",
      "darkChannel": "237 168 9",
      "contrastTextChannel": "255 255 255"
    },
    "info": {
      "main": "#222222",
      "light": "#767676",
      "dark": "#3d3d3d",
      "contrastText": "#fff",
      "mainChannel": "34 34 34",
      "lightChannel": "118 118 188",
      "darkChannel": "61 61 61",
      "contrastTextChannel": "255 255 255"
    },
    "success": {
      "main": "#1AA251",
      "light": "#2ba95e",
      "dark": "#158743",
      "contrastText": "#fff",
      "mainChannel": "26 162 81",
      "lightChannel": "43 169 94",
      "darkChannel": "21 135 67",
      "contrastTextChannel": "255 255 255"
    },
    "status": {
      "error": "#d73d48",
      "info": "#222222",
      "warning": "#FFB400",
      "success": "#1AA251"
    },
    "grey": {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
      "A100": "#f5f5f5",
      "A200": "#eeeeee",
      "A400": "#bdbdbd",
      "A700": "#616161"
    },
    "buttons": {
      "active": "#222222",
      "hover": "#222222",
      "selected": "#222222",
      "disabled": "#DDDDDD",
      "disabledBackground": "transparent"
    },
    "inputs": {
      "inputBackground": "#ffffff",
      "inputBorder": "#343434",
      "inputFocusedBorder": "#222222",
      "inputFocusedUnderlineBorder": "#222222",
      "inputInvalidBorder": "#d73d48",
      "inputInvalidBackground": "#FFF8F6",
      "inputErrorMessage": "#d73d48",
      "inputPrefixSelectBackground": "#ffffff",
      "inputPrefixSelectBorder": "#EBEBEB",
      "checked": "#222222",
      "checkBoxShadow": "#CCEEEB",
      "checkedDisabled": "#F2F2F2",
      "inputDisabled": "#F2F2F2",
      "selectDisabled": "#F2F2F2",
      "autocomplete": {
        "resultsBackground": "#ffffff",
        "resultsBorder": "#EBEBEB",
        "resultActiveBackground": "#CCEEEB",
        "resultIcon": "#767676",
        "resultIconInverse": "#ffffff"
      }
    },
    "background": {
      "backgroundLight": "#f9f9f9",
      "backgroundLightHighlightedOrSelected": "#fff",
      "backgroundHighlight": "rgba(0, 0, 0, 0.04)",
      "backgroundContrast": "#f7f7f7",
      "backgroundDark": "#767676",
      "default": "#fff",
      "inverse": "#222222",
      "paper": "#fff",
      "border": "#DDDDDD",
      "contrastBackground": "#222222",
      "appbar": "#fff",
      "skeleton": "#9f9f9f"
    },
    "footer": {
      "background": "#f7f7f7",
      "border": "#dddddd"
    },
    "divider": "#EBEBEB",
    "placeholder": "#767676",
    "cursor": "#222222",
    "imageBackground": "#bbbbbb",
    "modal": {
      "overlay": "rgba(0,0,0,0.75)",
      "whiteOverlay": "rgba(255,255,255,0.8)",
      "background": "#ffffff"
    },
    "toggleButton": {
      "background": "#ffffff",
      "backgroundSelected": "#484848"
    },
    "pageIndicatorDots": {
      "background": "rgba(176,176,176,0.8)",
      "backgroundSelected": "#484848",
      "backgroundLight": "rgba(255,255,255,0.8)",
      "backgroundSelectedLight": "#ffffff"
    },
    "loaderDots": {
      "default": "#222222",
      "light": "#222222",
      "dark": "#ffffff"
    },
    "navigation": {
      "border": "#DDDDDD"
    },
    "focus": "#121212",
    "clear": "transparent",
    "contrastThreshold": 3,
    "tonalOffset": 0.2,
    "action": {
      "active": "rgba(0, 0, 0, 0.54)",
      "hover": "rgba(0, 0, 0, 0.04)",
      "hoverOpacity": 0.04,
      "selected": "rgba(0, 0, 0, 0.08)",
      "selectedOpacity": 0.08,
      "disabled": "rgba(0, 0, 0, 0.26)",
      "disabledBackground": "rgba(0, 0, 0, 0.12)",
      "disabledOpacity": 0.38,
      "focus": "rgba(0, 0, 0, 0.12)",
      "focusOpacity": 0.12,
      "activatedOpacity": 0.12,
      "activeChannel": "0 0 0",
      "selectedChannel": "0 0 0"
    },
    "AppBar": {
      "defaultBg": "var(--mui-palette-background-appbar)",
      "background": "var(--mui-palette-background-appbar)"
    },
    "Avatar": {
      "defaultBg": "var(--mui-palette-grey-400)"
    },
    "Chip": {
      "defaultBorder": "var(--mui-palette-grey-400)",
      "defaultAvatarColor": "var(--mui-palette-grey-700)",
      "defaultIconColor": "var(--mui-palette-grey-700)"
    },
    "FilledInput": {
      "bg": "rgba(0, 0, 0, 0.06)",
      "hoverBg": "rgba(0, 0, 0, 0.09)",
      "disabledBg": "rgba(0, 0, 0, 0.12)"
    },
    "LinearProgress": {
      "primaryBg": "#dddddd",
      "secondaryBg": "#343434",
      "errorBg": "rgb(238, 175, 175)",
      "infoBg": "rgb(158, 209, 237)",
      "successBg": "rgb(175, 205, 177)",
      "warningBg": "rgb(248, 199, 158)"
    },
    "Skeleton": {
      "bg": "rgba(var(--mui-palette-text-primaryChannel) / 0.11)"
    },
    "Slider": {
      "primaryTrack": "#dddddd",
      "secondaryTrack": "#343434",
      "errorTrack": "rgb(238, 175, 175)",
      "infoTrack": "rgb(158, 209, 237)",
      "successTrack": "rgb(175, 205, 177)",
      "warningTrack": "rgb(248, 199, 158)"
    },
    "SnackbarContent": {
      "bg": "rgb(50, 50, 50)"
    },
    "SpeedDialAction": {
      "fabHoverBg": "rgb(216, 216, 216)"
    },
    "StepConnector": {
      "border": "var(--mui-palette-grey-400)"
    },
    "StepContent": {
      "border": "var(--mui-palette-grey-400)"
    },
    "Switch": {
      "defaultColor": "var(--mui-palette-common-white)",
      "defaultDisabledColor": "var(--mui-palette-grey-100)",
      "primaryDisabledColor": "rgb(245, 179, 184)",
      "secondaryDisabledColor": "rgb(184, 204, 217)",
      "errorDisabledColor": "rgb(238, 175, 175)",
      "infoDisabledColor": "rgb(158, 209, 237)",
      "successDisabledColor": "rgb(175, 205, 177)",
      "warningDisabledColor": "rgb(248, 199, 158)"
    },
    "TableCell": {
      "border": "rgba(224, 224, 224, 1)"
    },
    "Tooltip": {
      "bg": "rgba(97, 97, 97, 0.92)"
    },
    "dividerChannel": "0 0 0",
    "colorScheme": "light"
  },
  "colorSchemes": {
    "light": {
      "palette": {
        "mode": "light",
        "primary": {
          "main": "#343434",
          "light": "#d5d6d6",
          "dark": "#3d3d3d",
          "contrastText": "#fff",
          "mainChannel": "52 52 52",
          "lightChannel": "213 214 214",
          "darkChannel": "61 61 61",
          "contrastTextChannel": "255 255 255"
        },
        "secondary": {
          "main": "#222222",
          "light": "#d5d6d6",
          "dark": "#3d3d3d",
          "contrastText": "#fff",
          "mainChannel": "34 34 34",
          "lightChannel": "213 214 214",
          "darkChannel": "61 61 61",
          "contrastTextChannel": "255 255 255"
        },
        "tertiary": {
          "main": "#343434",
          "light": "#d5d6d6",
          "dark": "#3d3d3d",
          "contrastText": "#fff",
          "mainChannel": "52 52 52",
          "lightChannel": "213 214 214",
          "darkChannel": "61 61 61",
          "contrastTextChannel": "255 255 255"
        },
        "secondaryLight": {
          "main": "#222222",
          "mainChannel": "34 34 34"
        },
        "secondaryDark": {
          "main": "#222222",
          "mainChannel": "34 34 34"
        },
        "light": {
          "main": "#343434",
          "mainChannel": "52 52 52"
        },
        "text": {
          "primary": "#343434",
          "secondary": "#222222",
          "primaryChannel": "52 52 52",
          "secondaryChannel": "34 34 34",
          "contrastText": "#fff",
          "disabled": "#DDDDDD",
          "textDark": "#484848",
          "textLight": "#ffffff",
          "textInput": "#222222",
          "textLink": "#222222",
          "textLinkActive": "#343434",
          "textLinkHover": "#222222",
          "textLinkInverse": "#ffffff",
          "textLinkInverseHover": "#ffffff",
          "textLinkInverseActive": "#dadada",
          "textLinkNavigation": "#484848",
          "textLinkNavigationHover": "#484848",
          "textMuted": "#767676",
          "textDisabled": "#EBEBEB",
          "textMutedLarge": "#848484",
          "textPlaceholder": "#EBEBEB"
        },
        "common": {
          "black": "#000",
          "white": "#fff",
          "background": "#fff",
          "onBackground": "#000",
          "backgroundChannel": "34 34 34",
          "onBackgroundChannel": "34 34 34"
        },
        "error": {
          "main": "#d73d48",
          "light": "#e2737b",
          "dark": "#d63d47",
          "contrastText": "#fff",
          "mainChannel": "215 61 72",
          "lightChannel": "226 115 123",
          "darkChannel": "214 61 71",
          "contrastTextChannel": "255 255 255"
        },
        "warning": {
          "main": "#FFB400",
          "light": "#fed05e",
          "dark": "#eda800",
          "contrastText": "#fff",
          "mainChannel": "255 180 0",
          "lightChannel": "254 208 94",
          "darkChannel": "237 168 9",
          "contrastTextChannel": "255 255 255"
        },
        "info": {
          "main": "#222222",
          "light": "#767676",
          "dark": "#3d3d3d",
          "contrastText": "#fff",
          "mainChannel": "34 34 34",
          "lightChannel": "118 118 188",
          "darkChannel": "61 61 61",
          "contrastTextChannel": "255 255 255"
        },
        "success": {
          "main": "#1AA251",
          "light": "#2ba95e",
          "dark": "#158743",
          "contrastText": "#fff",
          "mainChannel": "26 162 81",
          "lightChannel": "43 169 94",
          "darkChannel": "21 135 67",
          "contrastTextChannel": "255 255 255"
        },
        "status": {
          "error": "#d73d48",
          "info": "#222222",
          "warning": "#FFB400",
          "success": "#1AA251"
        },
        "grey": {
          "50": "#fafafa",
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121",
          "A100": "#f5f5f5",
          "A200": "#eeeeee",
          "A400": "#bdbdbd",
          "A700": "#616161"
        },
        "buttons": {
          "active": "#222222",
          "hover": "#222222",
          "selected": "#222222",
          "disabled": "#DDDDDD",
          "disabledBackground": "transparent"
        },
        "inputs": {
          "inputBackground": "#ffffff",
          "inputBorder": "#343434",
          "inputFocusedBorder": "#222222",
          "inputFocusedUnderlineBorder": "#222222",
          "inputInvalidBorder": "#d73d48",
          "inputInvalidBackground": "#FFF8F6",
          "inputErrorMessage": "#d73d48",
          "inputPrefixSelectBackground": "#ffffff",
          "inputPrefixSelectBorder": "#EBEBEB",
          "checked": "#222222",
          "checkBoxShadow": "#CCEEEB",
          "checkedDisabled": "#F2F2F2",
          "inputDisabled": "#F2F2F2",
          "selectDisabled": "#F2F2F2",
          "autocomplete": {
            "resultsBackground": "#ffffff",
            "resultsBorder": "#EBEBEB",
            "resultActiveBackground": "#CCEEEB",
            "resultIcon": "#767676",
            "resultIconInverse": "#ffffff"
          }
        },
        "background": {
          "backgroundLight": "#f9f9f9",
          "backgroundLightHighlightedOrSelected": "#fff",
          "backgroundHighlight": "rgba(0, 0, 0, 0.04)",
          "backgroundContrast": "#f7f7f7",
          "backgroundDark": "#767676",
          "default": "#fff",
          "inverse": "#222222",
          "paper": "#fff",
          "border": "#DDDDDD",
          "contrastBackground": "#222222",
          "appbar": "#fff",
          "skeleton": "#9f9f9f"
        },
        "footer": {
          "background": "#f7f7f7",
          "border": "#dddddd"
        },
        "divider": "#EBEBEB",
        "placeholder": "#767676",
        "cursor": "#222222",
        "imageBackground": "#bbbbbb",
        "modal": {
          "overlay": "rgba(0,0,0,0.75)",
          "whiteOverlay": "rgba(255,255,255,0.8)",
          "background": "#ffffff"
        },
        "toggleButton": {
          "background": "#ffffff",
          "backgroundSelected": "#484848"
        },
        "pageIndicatorDots": {
          "background": "rgba(176,176,176,0.8)",
          "backgroundSelected": "#484848",
          "backgroundLight": "rgba(255,255,255,0.8)",
          "backgroundSelectedLight": "#ffffff"
        },
        "loaderDots": {
          "default": "#222222",
          "light": "#222222",
          "dark": "#ffffff"
        },
        "navigation": {
          "border": "#DDDDDD"
        },
        "focus": "#121212",
        "clear": "transparent",
        "contrastThreshold": 3,
        "tonalOffset": 0.2,
        "action": {
          "active": "rgba(0, 0, 0, 0.54)",
          "hover": "rgba(0, 0, 0, 0.04)",
          "hoverOpacity": 0.04,
          "selected": "rgba(0, 0, 0, 0.08)",
          "selectedOpacity": 0.08,
          "disabled": "rgba(0, 0, 0, 0.26)",
          "disabledBackground": "rgba(0, 0, 0, 0.12)",
          "disabledOpacity": 0.38,
          "focus": "rgba(0, 0, 0, 0.12)",
          "focusOpacity": 0.12,
          "activatedOpacity": 0.12,
          "activeChannel": "0 0 0",
          "selectedChannel": "0 0 0"
        },
        "AppBar": {
          "defaultBg": "var(--mui-palette-background-appbar)",
          "background": "var(--mui-palette-background-appbar)"
        },
        "Avatar": {
          "defaultBg": "var(--mui-palette-grey-400)"
        },
        "Chip": {
          "defaultBorder": "var(--mui-palette-grey-400)",
          "defaultAvatarColor": "var(--mui-palette-grey-700)",
          "defaultIconColor": "var(--mui-palette-grey-700)"
        },
        "FilledInput": {
          "bg": "rgba(0, 0, 0, 0.06)",
          "hoverBg": "rgba(0, 0, 0, 0.09)",
          "disabledBg": "rgba(0, 0, 0, 0.12)"
        },
        "LinearProgress": {
          "primaryBg": "#dddddd",
          "secondaryBg": "#343434",
          "errorBg": "rgb(238, 175, 175)",
          "infoBg": "rgb(158, 209, 237)",
          "successBg": "rgb(175, 205, 177)",
          "warningBg": "rgb(248, 199, 158)"
        },
        "Skeleton": {
          "bg": "rgba(var(--mui-palette-text-primaryChannel) / 0.11)"
        },
        "Slider": {
          "primaryTrack": "#dddddd",
          "secondaryTrack": "#343434",
          "errorTrack": "rgb(238, 175, 175)",
          "infoTrack": "rgb(158, 209, 237)",
          "successTrack": "rgb(175, 205, 177)",
          "warningTrack": "rgb(248, 199, 158)"
        },
        "SnackbarContent": {
          "bg": "rgb(50, 50, 50)"
        },
        "SpeedDialAction": {
          "fabHoverBg": "rgb(216, 216, 216)"
        },
        "StepConnector": {
          "border": "var(--mui-palette-grey-400)"
        },
        "StepContent": {
          "border": "var(--mui-palette-grey-400)"
        },
        "Switch": {
          "defaultColor": "var(--mui-palette-common-white)",
          "defaultDisabledColor": "var(--mui-palette-grey-100)",
          "primaryDisabledColor": "rgb(245, 179, 184)",
          "secondaryDisabledColor": "rgb(184, 204, 217)",
          "errorDisabledColor": "rgb(238, 175, 175)",
          "infoDisabledColor": "rgb(158, 209, 237)",
          "successDisabledColor": "rgb(175, 205, 177)",
          "warningDisabledColor": "rgb(248, 199, 158)"
        },
        "TableCell": {
          "border": "rgba(224, 224, 224, 1)"
        },
        "Tooltip": {
          "bg": "rgba(97, 97, 97, 0.92)"
        },
        "dividerChannel": "0 0 0",
        "colorScheme": "light"
      },
      "opacity": {
        "inputPlaceholder": 0.5,
        "inputTouchBottomLine": 0.7,
        "switchTrackDisabled": 0.2,
        "switchTrack": 0.3
      },
      "overlays": [
        null,
        "linear-gradient(rgba(255 255 255 / 0.05), rgba(255 255 255 / 0.05))",
        "linear-gradient(rgba(255 255 255 / 0.07), rgba(255 255 255 / 0.07))",
        "linear-gradient(rgba(255 255 255 / 0.08), rgba(255 255 255 / 0.08))",
        "linear-gradient(rgba(255 255 255 / 0.09), rgba(255 255 255 / 0.09))",
        "linear-gradient(rgba(255 255 255 / 0.10), rgba(255 255 255 / 0.10))",
        "linear-gradient(rgba(255 255 255 / 0.11), rgba(255 255 255 / 0.11))",
        "linear-gradient(rgba(255 255 255 / 0.11), rgba(255 255 255 / 0.11))",
        "linear-gradient(rgba(255 255 255 / 0.12), rgba(255 255 255 / 0.12))",
        "linear-gradient(rgba(255 255 255 / 0.12), rgba(255 255 255 / 0.12))",
        "linear-gradient(rgba(255 255 255 / 0.13), rgba(255 255 255 / 0.13))",
        "linear-gradient(rgba(255 255 255 / 0.13), rgba(255 255 255 / 0.13))",
        "linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14))",
        "linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14))",
        "linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14))",
        "linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14))",
        "linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15))",
        "linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15))",
        "linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15))",
        "linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15))",
        "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))",
        "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))",
        "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))",
        "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))",
        "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))"
      ]
    },
    "dark": {
      "palette": {
        "mode": "dark",
        "primary": {
          "main": "#fff",
          "light": "#2a2929",
          "dark": "#c2c2c2",
          "contrastText": "#000000",
          "mainChannel": "255 255 255",
          "lightChannel": "42 41 41",
          "darkChannel": "194 194 194",
          "contrastTextChannel": "0 0 0"
        },
        "secondary": {
          "main": "#dddddd",
          "light": "#2a2929",
          "dark": "#c2c2c2",
          "contrastText": "#000000",
          "mainChannel": "221 221 221",
          "lightChannel": "42 41 41",
          "darkChannel": "194 194 194",
          "contrastTextChannel": "0 0 0"
        },
        "tertiary": {
          "main": "#fff",
          "light": "#2a2929",
          "dark": "#c2c2c2",
          "contrastText": "#000000",
          "mainChannel": "255 255 255",
          "lightChannel": "213 214 214",
          "darkChannel": "61 61 61",
          "contrastTextChannel": "255 255 255"
        },
        "secondaryLight": {
          "main": "#222222",
          "mainChannel": "34 34 34"
        },
        "secondaryDark": {
          "main": "#222222",
          "mainChannel": "34 34 34"
        },
        "light": {
          "main": "#343434",
          "mainChannel": "52 52 52"
        },
        "text": {
          "primary": "#fff",
          "secondary": "#dddddd",
          "primaryChannel": "203 203 203",
          "secondaryChannel": "221 221 221",
          "contrastText": "#222222",
          "disabled": "#222222",
          "textDark": "#b7b7b7",
          "textLight": "#000000",
          "textInput": "#dddddd",
          "textLink": "#dddddd",
          "textLinkActive": "#cbcbcb",
          "textLinkHover": "#dddddd",
          "textLinkInverse": "#000000",
          "textLinkInverseHover": "#000000",
          "textLinkInverseActive": "#252525",
          "textLinkNavigation": "#b7b7b7",
          "textLinkNavigationHover": "#b7b7b7",
          "textMuted": "#898989",
          "textDisabled": "#141414",
          "textMutedLarge": "#7b7b7b",
          "textPlaceholder": "#141414"
        },
        "common": {
          "black": "#000",
          "white": "#fff",
          "background": "#fff",
          "onBackground": "#000",
          "backgroundChannel": "255 255 255",
          "onBackgroundChannel": "255 255 255"
        },
        "error": {
          "main": "#d73d48",
          "light": "#e2737b",
          "dark": "#d63d47",
          "contrastText": "#fff",
          "mainChannel": "215 61 72",
          "lightChannel": "226 115 123",
          "darkChannel": "214 61 71",
          "contrastTextChannel": "255 255 255"
        },
        "warning": {
          "main": "#FFB400",
          "light": "#fed05e",
          "dark": "#eda800",
          "contrastText": "#fff",
          "mainChannel": "255 180 0",
          "lightChannel": "254 208 94",
          "darkChannel": "237 168 9",
          "contrastTextChannel": "255 255 255"
        },
        "info": {
          "main": "#222222",
          "light": "#767676",
          "dark": "#3d3d3d",
          "contrastText": "#fff",
          "mainChannel": "34 34 34",
          "lightChannel": "118 118 188",
          "darkChannel": "61 61 61",
          "contrastTextChannel": "255 255 255"
        },
        "success": {
          "main": "#1AA251",
          "light": "#2ba95e",
          "dark": "#158743",
          "contrastText": "#fff",
          "mainChannel": "26 162 81",
          "lightChannel": "43 169 94",
          "darkChannel": "21 135 67",
          "contrastTextChannel": "255 255 255"
        },
        "status": {
          "error": "#d73d48",
          "info": "#222222",
          "warning": "#FFB400",
          "success": "#1AA251"
        },
        "grey": {
          "50": "#fafafa",
          "100": "#f5f5f5",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121",
          "A100": "#f5f5f5",
          "A200": "#eeeeee",
          "A400": "#bdbdbd",
          "A700": "#616161"
        },
        "buttons": {
          "active": "#dddddd",
          "hover": "#dddddd",
          "selected": "#dddddd",
          "disabled": "#222222",
          "disabledBackground": "transparent"
        },
        "inputs": {
          "inputBackground": "#000000",
          "inputBorder": "#EBEBEB",
          "inputFocusedBorder": "#fff",
          "inputFocusedUnderlineBorder": "#dddddd",
          "inputInvalidBorder": "#d73d48",
          "inputInvalidBackground": "#000709",
          "inputErrorMessage": "#d73d48",
          "inputPrefixSelectBackground": "#000000",
          "inputPrefixSelectBorder": "#EBEBEB",
          "checked": "#dddddd",
          "checkBoxShadow": "#331114",
          "checkedDisabled": "#0d0d0d",
          "inputDisabled": "#0d0d0d",
          "selectDisabled": "#0d0d0d",
          "autocomplete": {
            "resultsBackground": "#000000",
            "resultsBorder": "#141414",
            "resultActiveBackground": "#331114",
            "resultIcon": "#898989",
            "resultIconInverse": "#000000"
          }
        },
        "background": {
          "backgroundLight": "#222222",
          "backgroundLightHighlightedOrSelected": "#141414",
          "backgroundHighlight": "rgba(0, 0, 0, 0.04)",
          "backgroundContrast": "#080808",
          "backgroundDark": "#898989",
          "default": "rgb(18, 18, 18)",
          "inverse": "#fff",
          "paper": "rgb(18, 18, 18)",
          "border": "transparent",
          "contrastBackground": "#dddddd",
          "appbar": "#000",
          "skeleton": "#dddddd"
        },
        "footer": {
          "background": "#080808",
          "border": "#222222"
        },
        "divider": "#141414",
        "placeholder": "#898989",
        "cursor": "#dddddd",
        "imageBackground": "#444444",
        "modal": {
          "overlay": "rgba(0,0,0,0.75)",
          "whiteOverlay": "rgba(255,255,255,0.8)",
          "background": "#141414"
        },
        "toggleButton": {
          "background": "#000000",
          "backgroundSelected": "#b7b7b7"
        },
        "pageIndicatorDots": {
          "background": "rgba(176,176,176,0.8)",
          "backgroundSelected": "#b7b7b7",
          "backgroundLight": "rgba(255,255,255,0.8)",
          "backgroundSelectedLight": "#000000"
        },
        "loaderDots": {
          "default": "#dddddd",
          "light": "#dddddd",
          "dark": "#000000"
        },
        "navigation": {
          "border": "#222222"
        },
        "focus": "#121212",
        "clear": "transparent",
        "contrastThreshold": 3,
        "tonalOffset": 0.2,
        "action": {
          "active": "rgba(0, 0, 0, 0.54)",
          "hover": "rgba(0, 0, 0, 0.04)",
          "hoverOpacity": 0.04,
          "selected": "rgba(0, 0, 0, 0.08)",
          "selectedOpacity": 0.08,
          "disabled": "rgba(0, 0, 0, 0.26)",
          "disabledBackground": "rgba(0, 0, 0, 0.12)",
          "disabledOpacity": 0.38,
          "focus": "rgba(0, 0, 0, 0.12)",
          "focusOpacity": 0.12,
          "activatedOpacity": 0.12,
          "activeChannel": "0 0 0",
          "selectedChannel": "0 0 0"
        },
        "AppBar": {
          "defaultBg": "var(--mui-palette-background-appbar)",
          "background": "var(--mui-palette-background-appbar)"
        },
        "Avatar": {
          "defaultBg": "var(--mui-palette-grey-400)"
        },
        "Chip": {
          "defaultBorder": "var(--mui-palette-grey-400)",
          "defaultAvatarColor": "var(--mui-palette-grey-700)",
          "defaultIconColor": "var(--mui-palette-grey-700)"
        },
        "FilledInput": {
          "bg": "rgba(0, 0, 0, 0.06)",
          "hoverBg": "rgba(0, 0, 0, 0.09)",
          "disabledBg": "rgba(0, 0, 0, 0.12)"
        },
        "LinearProgress": {
          "primaryBg": "#dddddd",
          "secondaryBg": "#fff",
          "errorBg": "rgb(238, 175, 175)",
          "infoBg": "rgb(158, 209, 237)",
          "successBg": "rgb(175, 205, 177)",
          "warningBg": "rgb(248, 199, 158)"
        },
        "Skeleton": {
          "bg": "rgba(var(--mui-palette-text-primaryChannel) / 0.11)"
        },
        "Slider": {
          "primaryTrack": "#dddddd",
          "secondaryTrack": "#fff",
          "errorTrack": "rgb(238, 175, 175)",
          "infoTrack": "rgb(158, 209, 237)",
          "successTrack": "rgb(175, 205, 177)",
          "warningTrack": "rgb(248, 199, 158)"
        },
        "SnackbarContent": {
          "bg": "rgb(50, 50, 50)"
        },
        "SpeedDialAction": {
          "fabHoverBg": "rgb(216, 216, 216)"
        },
        "StepConnector": {
          "border": "var(--mui-palette-grey-400)"
        },
        "StepContent": {
          "border": "var(--mui-palette-grey-400)"
        },
        "Switch": {
          "defaultColor": "var(--mui-palette-common-white)",
          "defaultDisabledColor": "var(--mui-palette-grey-100)",
          "primaryDisabledColor": "rgb(245, 179, 184)",
          "secondaryDisabledColor": "rgb(184, 204, 217)",
          "errorDisabledColor": "rgb(238, 175, 175)",
          "infoDisabledColor": "rgb(158, 209, 237)",
          "successDisabledColor": "rgb(175, 205, 177)",
          "warningDisabledColor": "rgb(248, 199, 158)"
        },
        "TableCell": {
          "border": "rgba(224, 224, 224, 1)"
        },
        "Tooltip": {
          "bg": "rgba(97, 97, 97, 0.92)"
        },
        "dividerChannel": "0 0 0",
        "colorScheme": "dark"
      },
      "opacity": {
        "inputPlaceholder": 0.5,
        "inputTouchBottomLine": 0.7,
        "switchTrackDisabled": 0.2,
        "switchTrack": 0.3
      },
      "overlays": [
        null,
        "linear-gradient(rgba(255 255 255 / 0.05), rgba(255 255 255 / 0.05))",
        "linear-gradient(rgba(255 255 255 / 0.07), rgba(255 255 255 / 0.07))",
        "linear-gradient(rgba(255 255 255 / 0.08), rgba(255 255 255 / 0.08))",
        "linear-gradient(rgba(255 255 255 / 0.09), rgba(255 255 255 / 0.09))",
        "linear-gradient(rgba(255 255 255 / 0.10), rgba(255 255 255 / 0.10))",
        "linear-gradient(rgba(255 255 255 / 0.11), rgba(255 255 255 / 0.11))",
        "linear-gradient(rgba(255 255 255 / 0.11), rgba(255 255 255 / 0.11))",
        "linear-gradient(rgba(255 255 255 / 0.12), rgba(255 255 255 / 0.12))",
        "linear-gradient(rgba(255 255 255 / 0.12), rgba(255 255 255 / 0.12))",
        "linear-gradient(rgba(255 255 255 / 0.13), rgba(255 255 255 / 0.13))",
        "linear-gradient(rgba(255 255 255 / 0.13), rgba(255 255 255 / 0.13))",
        "linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14))",
        "linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14))",
        "linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14))",
        "linear-gradient(rgba(255 255 255 / 0.14), rgba(255 255 255 / 0.14))",
        "linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15))",
        "linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15))",
        "linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15))",
        "linear-gradient(rgba(255 255 255 / 0.15), rgba(255 255 255 / 0.15))",
        "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))",
        "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))",
        "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))",
        "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))",
        "linear-gradient(rgba(255 255 255 / 0.16), rgba(255 255 255 / 0.16))"
      ]
    }
  }
}
