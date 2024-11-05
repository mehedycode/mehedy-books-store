import { toast } from "react-toastify"

const getWishList = () => {
  
const storeArray = localStorage.getItem('WishList')
  if (storeArray) {
  const convartArry = JSON.parse(storeArray)
  return convartArry
  } else {
    return []
}

}

const setWishListLocalStorage = (id) => {
  
const storeItems = getWishList()
  if (storeItems.includes(id)) {
  toast.info('already exist')

  }
  else {
    storeItems.push(id)
    const covartStr = JSON.stringify(storeItems)
    localStorage.setItem('WishList', covartStr)
    toast.success('added to wishlist')
  }

}

export{setWishListLocalStorage , getWishList}