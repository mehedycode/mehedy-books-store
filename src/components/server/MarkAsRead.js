
import { toast } from 'react-toastify';

const getMarkAsRead = () => {
  
const storeArray = localStorage.getItem('MarkASRead')
  if (storeArray) {
  const convartArry = JSON.parse(storeArray)
  return convartArry
  } else {
    return []
}

}

const setBooksLocalStorage = (id) => {
  
const storeItems = getMarkAsRead()
  if (storeItems.includes(id)) {
  toast.info('already exist')

  }
  else {
    storeItems.push(id)
    const covartStr = JSON.stringify(storeItems)
    localStorage.setItem('MarkASRead', covartStr)
    toast.success('added to readlist')
  }

}

export{setBooksLocalStorage , getMarkAsRead}