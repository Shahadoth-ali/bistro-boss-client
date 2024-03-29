/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";




const useCart=()=>{
   const {user,loading}=useAuth();
  //  const token=localStorage.getItem('access-token');
   const [axiosSecure]=useAxiosSecure();

   const { refetch,data:cart=[] } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading,
    // queryFn: async ()=>{
    //     const response=await fetch(`https://bistro-boss-server-shahadoth-ali.vercel.app/carts?email=${user?.email}`,
    //     {headers: {
    //       authorization: `bearer ${token}`
    //     }})
    //     return response.json();
    // },
    queryFn: async ()=>{
        const res=await axiosSecure(`/carts?email=${user?.email}`
        // , {headers: {
        //   authorization: `bearer ${token}`
        // }}
        )
        // return response.json();
        console.log('res from axios',res)
        return res.data;
    },
  })
  return [cart,refetch]
}
export default useCart;