import { Box } from '@mui/material'
import { Wizard } from '../../wizard/index'
import {
  Background,
  Content,
  ContentBody,
  ContentMargin,
  Footer,
  Header,
  Info,
  Main,
} from './styles'
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { useSlotProps } from '@mui/base/utils'
import { useThemeProps } from '@mui/material'
import { OverridableComponent } from '@mui/types'
import * as React from 'react'
import { SplitWizardRoot } from './styles'
import { SplitWizardTypeMap, getSplitWizardUtilityClass } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
    content: ['content'],
  }

  return composeClasses(slots, getSplitWizardUtilityClass, {})
}

const SplitWizard = React.forwardRef(function SplitWizard(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiSplitWizard',
  })

  const {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    component = 'div',
    children,
    componentsProps = {},
    footer,
    info,
    header,
    ...other
  } = props

  const ownerState = {
    ...props,
    footer,
    info,
    header,
    component,
  }

  const classes = useUtilityClasses()

  const rootProps = useSlotProps({
    elementType: SplitWizardRoot,
    ownerState,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref,
      as: component,
    },
    className: classes.root,
  })

  return (
    <SplitWizardRoot {...rootProps}>
      <Box>
        <Box>
          <Box>
            <Background />
            <Main>
              <Info>{info}</Info>
              <Content>
                <Wizard
                  wrapper={
                    <ContentBody>
                      <ContentMargin />
                    </ContentBody>
                  }
                  footer={<Footer>{footer}</Footer>}
                  header={<Header>{header}</Header>}
                >
                  {children}
                </Wizard>
              </Content>
            </Main>
          </Box>
          <Box />
        </Box>
      </Box>
    </SplitWizardRoot>
  )
}) as OverridableComponent<SplitWizardTypeMap>

export { SplitWizard }
