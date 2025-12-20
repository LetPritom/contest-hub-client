import axios from "axios";

export const imageUpload =async (imageData) => {
     const formData = new FormData();
     formData.append('image',imageData)
      const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGGB_API_KEY}`, formData);
         const image= data?.data?.display_url;
         console.log(image)
         return image;
            
}



// export const participantsData = () => {
//    const {data:participantsData}
// }


// user data save function 

export const  saveOrUpdateUser = async (userData) => {
   const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/user` , userData)


   return data;
}