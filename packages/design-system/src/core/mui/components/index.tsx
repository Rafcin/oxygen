import Alert from './alert'
import Badge from './badge'
import Baseline from './baseline'
import Button from './button'
import CardActionArea from './card/action-area'
import CardActions from './card/actions'
import Card from './card/card'
import CardContent from './card/content'
import CardHeader from './card/header'
import CardMedia from './card/media'
import Chip from './chip'
import Container from './container'
import Drawer from './drawer'
import Global from './global'
import HelperText from './helpertext'
import InputLabel from './input'
import List from './list/list'
import ListItemButton from './list/list-item'
import Skeleton from './skeleton'
import Snackbar from './snackbar'
import Switch from './switch'
import TabsList from './tabs/list'
import TabsPanel from './tabs/panel'
import Tab from './tabs/tab'
import Tabs from './tabs/tabs'
import TextField from './textfield'

export const componentsOverrides = Object.assign(
  Alert(),
  Badge(),
  Baseline(),
  Global(),
  Button(),
  Chip(),
  Container(),
  HelperText(),
  InputLabel(),
  List(),
  ListItemButton(),
  Skeleton(),
  Snackbar(),
  Switch(),
  TextField(),
  CardActionArea(),
  CardActions(),
  CardContent(),
  CardHeader(),
  CardMedia(),
  Card(),
  Tabs(),
  Tab(),
  TabsPanel(),
  TabsList(),
  Drawer()
)
