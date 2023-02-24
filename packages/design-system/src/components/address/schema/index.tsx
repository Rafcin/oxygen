import * as Yup from 'yup'
import { CountryType } from '../constants'

const LatLngSchema = Yup.object({
  lat: Yup.number().required('Latitude is required'),
  lng: Yup.number().required('Longitude is required'),
}).required('Latitude and longitude are required')

export const AddressSchema = Yup.object({
  placeid: Yup.string().required('Place ID is Required'),
  label: Yup.string().required('Label is Required'),
  street: Yup.string().required('Street is Required'),
  city: Yup.string().required('City is Required'),
  subpremise: Yup.string().nullable().notRequired(),
  state: Yup.string().when('country', {
    //@ts-ignore
    is: (country: CountryType) => country?.label === 'United States - US',
    then: Yup.string().required('State is Required'),
    otherwise: Yup.string().nullable().notRequired(),
  }),
  zip: Yup.string()
    .required()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits')
    .required('A valid zip is required'),
  country: Yup.object({
    name: Yup.string().required('Country Name is Required'),
    code: Yup.string().required('Country Code is Required'),
    label: Yup.string().required('Country Label is Required'),
  })
    .required('A valid country is required')
    .nullable(),
  address: Yup.string().required('Address is Required'),
  route: Yup.string().required('Route is Required'),
  location: LatLngSchema.nullable(),
  viewport: Yup.object({
    nw: LatLngSchema,
    se: LatLngSchema,
    center: LatLngSchema,
  }).nullable(),
})

export const AddressDefaultValues = {
  placeid: '',
  label: '',
  street: '',
  city: '',
  subpremise: '',
  state: '',
  zip: '',
  country: null,
  address: '',
  route: '',
  location: {
    lat: 33.4799452,
    lng: -117.6699769,
  },
  viewport: {
    nw: {
      lat: 33.4811793302915,
      lng: -117.6712362302915,
    },
    se: { lat: 33.4784813697085, lng: -117.6685382697085 },
    center: { lat: 33.47983035, lng: -117.66988725 },
  },
}
