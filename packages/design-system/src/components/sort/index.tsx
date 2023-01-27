import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable'
import { unstable_composeClasses as composeClasses } from '@mui/material'
import { Box, useThemeProps } from '@mui/material'
import { default as Grid } from '@mui/material/Unstable_Grid2'
import { OverridableComponent } from '@mui/types'
import clsx from 'clsx'
import * as React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import EventPointerSensor from './sensors/event-sensor'
import { Sortable } from './sortable'
import { SortRoot } from './styles'
import { getSortUtilityClass, SortTypeMap } from './types'

const useUtilityClasses = () => {
  const slots = {
    root: ['root'],
  }

  return composeClasses(slots, getSortUtilityClass, {})
}

const SortInput = React.memo(
  React.forwardRef(function Sort(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiSort',
    })

    const {
      className,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      component = 'div',
      sortableComponent,
      gridContainer,
      gridItem,
      name,
      ...other
    } = props

    const ownerState = {
      ...props,
      component,
    }

    const classes = useUtilityClasses()

    const { control, watch } = useFormContext()

    const objects = useFieldArray({
      control,
      name: name,
    })

    const fieldWatcher = watch(name)

    const [activeId, setActiveId] = React.useState(null)

    const sensors = useSensors(
      //useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      }),
      useSensor(EventPointerSensor)
    )

    const handleDragStart = (event: {
      active: { id: React.SetStateAction<null> }
    }) => {
      setActiveId(event.active?.id)
    }

    const handleDragEnd = (event: { active: any; over: any }) => {
      //console.log('Watcher', fieldWatcher)
      setActiveId(null)
      const { active, over } = event
      console.log('Event', event)
      if (active?.id !== over?.id) {
        //console.log('Fields before swap', fieldWatcher)
        //const oldIndex = fields.indexOf(active.id)
        //const newIndex = fields.indexOf(over.id)
        const oldIndex = fieldWatcher.findIndex(
          (field: { id: null }) => field?.id === activeId
        )
        const newIndex = fieldWatcher.findIndex(
          (field: { id: any }) => field?.id === over?.id
        )
        //replace(arrayMove(fields, oldIndex, newIndex))
        objects.swap(oldIndex, newIndex)

        // fieldWatcher.forEach((field: { id: any }, index: number) =>
        //   objects.update(index, { ...field, index: index })
        // )
      }

      //console.log('Fields after swap', objects.fields)
    }

    return (
      <SortRoot
        as={component}
        ownerState={ownerState}
        className={clsx(classes.root, className)}
        ref={ref}
        {...other}
      >
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          onDragStart={handleDragStart}
        >
          <SortableContext items={fieldWatcher} strategy={rectSortingStrategy}>
            <Grid {...gridContainer} container>
              {fieldWatcher.map((field: { id: any }) => (
                <Grid {...gridItem} key={`values-grid-item-${field?.id}`}>
                  <Sortable
                    key={field?.id}
                    id={field?.id}
                    handle={true}
                    value={field?.id}
                  >
                    {sortableComponent(field, objects)}
                  </Sortable>
                </Grid>
              ))}
            </Grid>
            <DragOverlay>
              {activeId ? (
                <Box
                  sx={{
                    opacity: 0.8,
                  }}
                >
                  {sortableComponent(
                    fieldWatcher.findIndex(
                      (field: { id: any }) => field?.id === activeId
                    ),
                    objects
                  )}
                </Box>
              ) : null}
            </DragOverlay>
          </SortableContext>
        </DndContext>
      </SortRoot>
    )
  })
) as OverridableComponent<SortTypeMap>

export { SortInput }
