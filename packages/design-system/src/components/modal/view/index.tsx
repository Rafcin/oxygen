export const ModalView = (props: any) => {
  return {
    [`@media (min-width: 744px) and (min-height: 475px)`]: {
      WebkitBoxAlign: "center",
      padding: "40px",
      alignItems: "center",
      ...(props?.full && {
        padding: 0,
      }),
    },
    WebkitBoxPack: "center",
    WebkitBoxAlign: "end",
    WebkitBoxDirection: "normal",
    WebkitBoxOrient: "horizontal",
    zIndex: 1200,
    position: "fixed",
    inset: 0,
    maxHeight: "calc(var(--vh, 1vh) * 100)",
    paddingTop: "12px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  }
}
