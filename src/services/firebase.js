import { initializeApp } from 'firebase/app'
import { getStorage, ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage'
import { API_KEY, APP_ID, AUTH_DOMAIN, MESSAGING_SENDER_ID, PROJECT_ID, STORAGE_BUCKET } from '@/utils/envconfig'

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export const uploadCarImage = async (image, carId) => {
  try {
    const imagesRef = ref(storage, `images/proyectoWebMaxautos/${carId}`)
    await uploadBytes(imagesRef, image)

    return await getDownloadURL(imagesRef)
  } catch (error) {
    console.log(error)
    return null
  }
}

export const deleteCarImage = async (carId) => {
  try {
    const delRef = ref(storage, `images/proyectoWebMaxautos/${carId}`)
    await deleteObject(delRef)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
